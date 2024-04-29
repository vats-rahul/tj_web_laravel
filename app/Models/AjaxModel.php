<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AjaxModel extends Model
{

    public function getCategories($limit = 0, $start = 0) {
        // Getting Grand Parent Data
        $categoryData = [];
        $subcategoryData = [];
        
        $res1 = DB::table('tbl_category')
                    ->where('parent_id', 0)
                    ->where('status', 1)
                    ->where('is_deleted', 0)
                    ->where('show_status', 1)
                    ->select('category_id', 'category_name', 'slug')
                    ->limit(10)
                    ->get()
                    ->toArray();
                    
        $grandParentIds = array_column($res1, 'category_id');
    
        foreach ($res1 as $r => $s1) {
            $s1->sub_categories = [];
            $categoryData[$s1->category_id] = $s1;
        }
    
        // Making changes in following query considering that there will be only 2 Grand Parent Categories i.e Hardware and Software
        $res2Final = [];
    
        foreach ($grandParentIds as $gpi) {
            $res2_1 = [];
            $query = DB::table('tbl_category')
                        ->where('parent_id', $gpi)
                        ->where('status', 1)
                        ->where('is_deleted', 0)
                        ->where('show_status', 1)
                        ->select('category_id', 'parent_id', 'category_name', 'slug', 'icon');
    
            if ($gpi == 1) {
                $query->where('sort_order', '!=', 0)
                        ->orderBy('sort_order', 'asc');
            } else {
                $query->orderBy('category_name', 'asc');
            }
    
            if ($limit > 0) {
                $res2_1 = $query->limit(11)->get()->toArray();
            } else {
                $res2_1 = $query->get()->toArray();
            }
            $res2Final[] = $res2_1;
        }
    
        $res2 = [];
        foreach ($res2Final as $resfinal) {
            $res2 = array_merge($res2, $resfinal);
        }
    
        $parentIds = array_column($res2, 'category_id');
    
        foreach ($res2 as $r => $s2) {
            $s2->sub_categories = [];
            $subcategoryData[$s2->category_id] = $s2;
        }
    
        // Getting child Data
        $res3 = DB::table('tbl_category')
                    ->whereIn('parent_id', $parentIds)
                    ->where('status', 1)
                    ->where('is_deleted', 0)
                    ->where('show_status', 1)
                    ->orderBy('category_name', 'asc')
                    ->select('category_id', 'parent_id', 'category_name', 'slug', 'icon');
    
        if ($limit > 0) {
            $res3 = $res3->limit(200)->get()->toArray();
        } else {
            $res3 = $res3->get()->toArray();
        }
    
        $childIds = array_column($res3, 'category_id');
    
        foreach ($res3 as $r => $s3) {
            array_push($subcategoryData[$s3->parent_id]->sub_categories, $s3);
        }
    
        foreach ($subcategoryData as $sub => $catData) {
            array_push($categoryData[$catData->parent_id]->sub_categories, $catData);
        }
        
        return $categoryData;
    }
    
    

    public function getBrands() {
        $brands = DB::table('tbl_brand')
        ->select('brand_name as name', 'slug', DB::raw("CONCAT('" . url('/') . "', 'brand/', slug) as url"), 'image')
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->where('sort_order', '!=', 0)
        ->orderBy('sort_order', 'ASC')
        ->limit(12)
        ->get();

        return $brands->toArray();
    }
    public function getIndustries()
    {
        $industries = DB::table('tbl_industries')
            ->select('industry_name as name', 'slug', DB::raw("CONCAT('" . url('/') . "', 'industry/', slug) as url"), 'icon', 'image')
            ->where('status', 1)
            ->where('is_deleted', 0)
            ->where('sort_order', '!=', 0)
            ->orderBy('sort_order', 'ASC')
            ->limit(12)
            ->get();
        return $industries->toArray();
    }
}
