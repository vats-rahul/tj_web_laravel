<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Expression;

class CommonModel extends Model
{
    public function getCaseStudies(){
        return DB::table('tbl_case_studies')
        ->where('type', 1)
        ->orderBy('date', 'desc')
        ->select('id', 'link', 'urlToImage', 'title', 'categories', 'date')
        ->take(10)
        ->get()
        ->toArray();
    }
    function getL1Categories(){
    
       // Getting Grand Parent Data
       $categoryData = [];
       $grandParentIds = DB::table('tbl_category')
           ->where('parent_id', 0)
           ->where('status', 1)
           ->where('is_deleted', 0)
           ->where('show_status', 1)
           ->select('category_id', 'category_name', 'slug')
           ->limit(10)
           ->pluck('category_id')
           ->toArray();

       // Fetching grand parent data
       $grandParentData = DB::table('tbl_category')
           ->whereIn('category_id', $grandParentIds)
           ->get()
           ->toArray();

       // Storing grand parent data in array
       foreach ($grandParentData as $data) {
           $categoryData[$data->category_id] = (array) $data;
       }

       return $categoryData;
    }
    public function getSelectedRecords($table, $columns = [], $where = [], $records = "single", $col_name)
    {
        $query = DB::table($table)->select($columns);

        if (count($where) > 0) {
            $query->whereIn($col_name, $where);
        }

        if ($records == "single") {
            $result = $query->first();
        } else {
            $result = $query->get();
        }

        return $result;
    }
    public function selectAllWhere($table, $where, $flag = false)
    {
        try {
            $query = DB::table($table)->where($where)->get();

            if (!$flag) {
                return $query;
            } else {
                return $query->toArray();
            }
        } catch (Exception $exc) {
            // Handle exception if needed
        }
    }
    public function getSelectedColumns($table, $columns = [], $where = [], $records = "single", $flag = false, $orderBy = false, $skip = 0, $limit = 0)
    {
        $query = DB::table($table);

        if (!empty($where)) {
            foreach ($where as $key => $value) {
                $query->where($key, $value);
            }
        }

        if (!empty($columns)) {
            $query->select($columns);
        }

        if ($orderBy && !empty($orderBy)) {
            $query->orderBy(key($orderBy), $orderBy[key($orderBy)]);
        }

        if ($limit > 0) {
            $query->skip($skip)->take($limit);
        }

        if ($records == "single") {
            if ($flag) {
                $result = $query->first();
            } else {
                $result = (array) $query->first();
            }
        } else {
            if ($flag) {
                $result = $query->get();
            } else {
                $result = $query->get()->map(function ($item) {
                    return (array) $item;
                })->all();
            }
        }

        return $result;
    }
    public function getCompareProductDetail($product_id)
    {
        try {
            $q_str = '';
            if (is_array($product_id)) {
                $product_id_str = "(" . implode(',', $product_id) . ")";
                $q_str = "p.product_id IN " . $product_id_str . " AND";
            } else {
                $q_str = "p.product_id =" . $product_id . " AND";
            }
            $sql_query = "SELECT p.product_id, p.product_name, p.slug as product_slug, tc.category_name, tc.slug as category_slug, i.image, i.image_name, b.brand_name, b.slug as brand_slug, tbr.avg_rating, tbr.review_count
            FROM tbl_product p
            LEFT JOIN tbl_product_image i ON i.product_id = p.product_id AND i.default=1
            LEFT JOIN (
                SELECT tr.product_id, ROUND(AVG(tr.rating), 1) as avg_rating, SUM(CASE WHEN tr.pros != '' THEN 1 ELSE 0 END) as review_count FROM tbl_review tr WHERE tr.status = 1 AND tr.is_deleted = 0 GROUP BY tr.product_id
                ) as tbr ON tbr.product_id = p.product_id
            INNER JOIN tbl_brand b ON b.brand_id = p.brand_id
            INNER JOIN tbl_product_category tpc ON tpc.product_id = p.product_id AND tpc.is_primary=1
            INNER JOIN tbl_category tc ON tc.category_id = tpc.category_id
            WHERE {$q_str} p.status=1 AND p.show_status=1 AND p.is_deleted=0";
            
            $query = DB::select($sql_query);
    
            if (is_array($product_id)) {
                return $query;
            } else {
                return isset($query[0]) ? $query[0] : null;
            }
        } catch (Exception $exc) {
            // Handle exception
        }
    }

}
