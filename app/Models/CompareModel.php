<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class CompareModel extends Model
{
    function getAllProductIds($compare_data)
    {
        $all_product_ids = [];

        if(isset($compare_data->trending_compare)){
            $trending_compare = $compare_data->trending_compare;
            $trending_compare_ids = Arr::collapse($trending_compare);
        }

        $category_compare = [];
        if(isset($compare_data->categorywise_compare)){
            $categorywise_compare = $compare_data->categorywise_compare;
            foreach ($categorywise_compare as $data) {
                foreach ($data as $name => $value) {
                    $arr[$name] = $value;
                    $ids = Arr::collapse($value);
                    $all_product_ids = array_merge($all_product_ids, $ids);
                }
            }
        }

        $most_viewed_compare_ids = [];
        if(isset($compare_data->most_viewed_compare)){
            $most_viewed_compare = $compare_data->most_viewed_compare;
            $most_viewed_compare_ids = Arr::collapse($most_viewed_compare);
        }        

        $product_links_compare = [];
        if(isset($compare_data->compare_links)){
            $compare_links = $compare_data->compare_links;
            foreach ($compare_links as $data) {
                foreach ($data as $name => $value) {
                    $product_links_compare[$name] = $value;
                    $ids = Arr::collapse($value);
                    $all_product_ids = array_merge($all_product_ids, $ids);
                }
            }
        }

        $all_product_ids = array_merge($all_product_ids, $trending_compare_ids, $most_viewed_compare_ids);

        return $all_product_ids;
    }
}
