<?php

namespace App\Libraries;
use App\Models\CategoryModel;
use App\Models\TechjockeyModel;
use App\Models\CommonModel;
use App\Models\CompareModel;

class Homelib {
    public function homeData($source = 'web'){

        $data = array();

        // SEO
        $data['page_title'] = "Buy Software Online with 1+ Lakh Trusted Software Reviews";
        $data['page_keywords'] = "Buy software online, Buy business software, find and compare features, b2b business solutions, software deals and offers";
        $data['page_description'] = "Techjockey Helps Million of Businesses to Buy the Best Software Online in India. 15000+ Software, 5500+ Vendors, 600+ Categories, 1+ Lakh Verified Reviews.";
        $data['canonical_url'] = config('constants.CANO_BASE_URL');

        $category_limit = ($source == 'mobile') ? 8 : 17;
        $categoryModel = new CategoryModel();
        $trendingCategories = config('constants.TOP_TRENDING_CATEGORIES');
        $data['most_searched_cat'] = $categoryModel->getMostSearchedCat($trendingCategories, false, $category_limit);
        $modelTechjockey = new techjockeyModel();
        $data['blogs'] = $modelTechjockey->getLatestBlog();

        $commonModel = new CommonModel();

        if($source != 'mobile'){
            $data['case_studies'] = $commonModel->getCaseStudies();
            $data['menu'] = $commonModel->getL1Categories();
        }else{
            $data['home_data'] = config('home_data');
            $data['home_data']['most_searched_cat'] = $data['most_searched_cat'];
            $data['top_brands'] = $commonModel->getSelectedRecords('tbl_brand',array('brand_id','brand_name','slug','image'),$data['home_data']['top_brands_id'],'multiple','brand_id');
        }
        $data['testimonials'] = $categoryModel->testimonialList(3); 
        $homeBanners = $categoryModel->getHomepageBanner();
        $data['adv_banner'] = [];
        $data['hero_banner'] = [];
        foreach($homeBanners as $banner){
            if($banner->banner_type == 4){
                $data['hero_banner'][] = $banner;
            }else{
                $data['adv_banner'][] = $banner;
            }
        }
        $data['news_logos'] = $categoryModel->getNewsLogos();
        
        $seo_top_products = $commonModel->selectAllWhere('tbl_homepage_crawling', array('section_name' => 'seo_top_products'), true);
        if (isset($seo_top_products) && !empty($seo_top_products)) {
            $data['top_trending_products']['title'] = $seo_top_products[0]->title;
            $data['top_trending_products']['products'] = unserialize($seo_top_products[0]->content);
        } else {
            $data['top_trending_products'] = array();
        }

        $compare_raw_data = $commonModel->getSelectedColumns('tbl_website_settings',array('setting_value'),array('var_name'=>'COMPARE_PAGE_PRODUCT_LIST'), true);
        $compare_data = json_decode($compare_raw_data['setting_value']);
        unset($compare_datacompare_links);
        unset($compare_data->most_viewed_compare);

        $compareModel = new CompareModel();
        $compare_product_ids = $compareModel->getAllProductIds($compare_data);
        
        $data['trending_compare'] = $compare_data->trending_compare;
        $data['categorywise_compare'] = $compare_data->categorywise_compare;

        $data['compare_product_details'] = $commonModel->getCompareProductDetail($compare_product_ids);

        $top_selling_products = $commonModel->selectAllWhere('tbl_homepage_crawling', array('section_name' => 'top_selling_products'), true);
        if (isset($top_selling_products) && !empty($top_selling_products)) {
            $data['top_selling_products']['title'] = $top_selling_products[0]->title;
            $data['top_selling_products']['products'] = unserialize($top_selling_products[0]->content);
        } else {
            $data['top_selling_products'] = array();
        }

        $data['page_type'] = "home";
        $data['page'] = "Home";

        return $data;
    }
}
