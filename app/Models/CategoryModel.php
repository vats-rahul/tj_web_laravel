<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CategoryModel extends Model
{
    public function getMostSearchedCat($ids = [], $object = false, $limit = 20)
    {
        if (!empty($ids)) {
            $order = sprintf('FIELD(category_id, ' . implode(', ', $ids) . ')');
            $query = DB::table('tbl_category')
                ->where('status', 1)
                ->whereIn('category_id', $ids)
                ->selectRaw("category_id,category_name as name,slug,featured,CONCAT('" . env('HTTP_SCHEME') . '://' . env('APP_URL') . '/' . "', 'category/', slug) as url,image as category_image,icon as category_icon")
                ->orderByRaw($order)
                ->limit($limit)
                ->get(); 
    
            if ($object) {
                return $query; 
            } else {
                return $query->toArray(); 
            }
        } else {
            return $this->get_all_categories(15);
        }
    }

    public function getAllCategories($limit = 0, $keyword = "", $parent = false)
    {
        $query = DB::table('tbl_category')
            ->where('status', 1)
            ->where('is_deleted', 0)
            ->where('show_status', 1)
            ->select('category_id', 'main_parent_id', 'category_name as name', 'slug', 'featured')
            ->orderBy('category_name', 'ASC');

        if ($limit > 0) {
            $query->limit($limit);
        }

        if ($keyword != "") {
            $query->where('category_name', 'like', '%' . $keyword . '%');
        }

        if ($parent) {
            $query->where('parent_id', 1);
            $result = $query->get();
            $result->most_searched_cat = $result;
            return $result;
        }

        return $query->get();
    }

    public function testimonialList($limit = 0){
        $query = DB::table('tbl_testimonials')
        ->select('client_name', 'company_name', 'title', 'description', 'image', 'img_alt')
        ->where('show_status', 1)
        ->orderByDesc('testimonial_id');

        if ($limit > 0) {
        $query->limit($limit);
        }

        return $query->get()->toArray();
    }

    public function getHomepageBanner(){
        $result = [];
        $result = DB::table('tbl_advertisement_banners')
            ->where('banner_location', 'homepage')
            ->where('status', 1)
            ->where('is_deleted', 0)
            ->where('valid_up_to', '>=', date('Y-m-d'))
            ->select('id', 'banner_type', 'banner_location', 'image', 'mobile_image', 'banner_url')
            ->orderByDesc('modify_at')
            ->get()
            ->toArray();

        return $result;
    }
    
    public function getNewsLogos($limit = 0){
        $query = DB::table('tbl_media')
                    ->whereNotNull('newspaper_logo')
                    ->where('is_deleted', 0)
                    ->where('status', 1);
        if ($limit > 0) {
            $query->limit($limit);
        }

        return $query->get()->toArray();
    }
}
