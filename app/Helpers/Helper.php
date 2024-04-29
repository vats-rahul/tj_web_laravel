<?php

namespace App\Helpers;
use Illuminate\Support\Facades\DB;

class Helper
{
    public static function getProductFeatures($product_id = "")
    {
        if (is_array($product_id)) {
            $productIdCondition = "tpf.product_id IN ('" . implode("','", $product_id) . "')";
        } else {
            $productIdCondition = "tpf.product_id = $product_id";
        }

        $sql = "select tpf.product_id,tf.feature_id, tf.feature_name as section_name, tpf.description FROM tbl_product_features  as tpf LEFT JOIN tbl_feature AS tf ON tf.feature_id = tpf.section_id WHERE $productIdCondition AND tpf.status=1 AND tpf.is_deleted=0 ORDER BY tpf.sort_order ASC";
        $query = \DB::select($sql); // Use the database query builder or Eloquent to execute the query
        return $query;
    }
    public static function getCompareProductsArray($product_array, $product_details)
    {
        $result = [];
        foreach ($product_array as $id) {
            foreach ($product_details as $detail) {
                if ($detail->product_id == $id) {
                    $result[] = $detail;
                }
            }
        }
        return count($result) == 2 ? $result : [];
    }
    public static function createTopBannerUrl($value)
    {
        $url = '';

        if (strpos($value, "http://") !== false || strpos($value, "https://") !== false) {
            $url = $value;
        } else {
            $is_slug = DB::table('tbl_product')->where('slug', $value)->exists();

            if ($is_slug) {
                $url = url('detail/'.$value);
            } else {
                if (strpos($value, "www.techjockey.com") !== false) {
                    $url = $value;
                } else {
                    $url = 'javascript:void(0);';
                }
            }
        }

        return $url;
    }
    
}
