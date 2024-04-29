<?php 
namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class TechjockeyModel extends Model
{
    public function getLatestBlog()
    {
        $active_plugin_qry = "SELECT `option_value` FROM `wp_options` WHERE `option_name` = 'active_plugins'";
        $active_plugins = DB::connection('blog_mysql')->select($active_plugin_qry);
        $active_plugins = unserialize($active_plugins[0]->option_value);

        $is_s3_plugin_active = in_array('amazon-s3-and-cloudfront/wordpress-s3.php', $active_plugins);

        $qry_str = "
            SELECT
                `t1`.`id`,
                `t1`.`post_title` AS `title`,
                `t1`.`post_content` AS `excerpt`,
                CONCAT('https://www.techjockey.com/blog/', `t1`.`post_name`) AS `link`,
                `t1`.`post_modified` AS `date`,
                `wpm`.`meta_value` AS `thumb_id`
            FROM
                `wp_posts` `t1`
            INNER JOIN
                `wp_postmeta` `wpm`
            ON
                `wpm`.`post_id` = `t1`.`id`
            AND
                `wpm`.`meta_key` = '_thumbnail_id'
            WHERE
                `t1`.`post_status` = 'publish'
            AND
                `t1`.`post_type` = 'post'
            ORDER BY
                `t1`.`post_date` DESC
            LIMIT 10";

        $post_data = DB::connection('blog_mysql')->select($qry_str);

        if (empty($post_data)) {
            return [];
        }

        $thumb_id_arr = implode(',', array_column($post_data, 'thumb_id'));
        $post_id_arr = implode(',', array_column($post_data, 'id'));

        if ($is_s3_plugin_active) {
            $thumbnail_qry_str = "SELECT `source_id` AS `id`, CONCAT('https://cdn.techjockey.com/', `path`) AS `thumbnail` FROM `wp_as3cf_items` WHERE `source_id` IN ({$thumb_id_arr})";
            $thumb_data = DB::connection('blog_mysql')->select($thumbnail_qry_str);
            $thumb_data = array_column($thumb_data, 'thumbnail', 'id');
        } else {
            $thumbnail_qry_str = "SELECT `id`, `guid` AS `thumbnail` FROM `wp_posts` WHERE `id` IN ({$thumb_id_arr})";
            $thumb_data = DB::connection('blog_mysql')->select($thumbnail_qry_str);
            $thumb_data = array_column($thumb_data, 'thumbnail', 'id');
        }

        $category_qry_str = "SELECT `wptr`.`object_id`, GROUP_CONCAT(`wpt`.`name`) AS `categories` FROM `wp_term_relationships` `wptr` INNER JOIN `wp_terms` `wpt` ON `wpt`.`term_id` = `wptr`.`term_taxonomy_id` WHERE `wptr`.`object_id` IN ({$post_id_arr}) GROUP BY `wptr`.`object_id`";
        $category_data = DB::connection('blog_mysql')->select($category_qry_str);
        $category_data = array_column($category_data, 'categories', 'object_id');

        foreach ($post_data as $key => $pd) {
            $post_data[$key]->urlToImage = isset($thumb_data[$pd->thumb_id]) ? str_replace('http://www.techjockey.com/', 'https://www.techjockey.com/', $thumb_data[$pd->thumb_id]) : '';
            $post_data[$key]->categories = isset($category_data[$pd->id]) ? $category_data[$pd->id] : '';

            $str = strip_tags($post_data[$key]->excerpt);
            $str = preg_replace('/(?:\s\s+|\n|\t|&nbsp;)/', ' ', $str);
            $final_str = substr($str, 0, 300);
            $post_data[$key]->excerpt = trim($final_str) . '...';

            $post_data[$key]->title = str_replace(['[current_year]', '[c_y]'], date('Y'), $post_data[$key]->title);
        }

        return $post_data;
    }
}
