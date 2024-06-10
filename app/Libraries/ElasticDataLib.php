<?php 

namespace App\Libraries;
use Jenssegers\Agent\Agent;

class ElasticDataLib{
    public function autoComplete($keyword, $page='', $section='')
    {
        $counter = 0;
        $results = array();
        $results_array = array();
        $product_rows = array();
        $category_rows = array();
        $data_array = array();
        $most_searched_cat = array();
        $agent = new Agent();
        $isMobile = $agent->isMobile();
        if($isMobile){
            $limit = 5;
        }else{
            $limit = 8;
        }
        $search_top_text = "<p class='btitles-new btitles' style='margin-left: 24px;pointer-events: none;'>Showing result of \"" . $keyword . "...\"</p>";

        if (!in_array(strtolower($keyword), config('constants.EL_STOP_WORDS'))) {
            // category filters
            $category_filters = array(
                array(
                    'range' => array('product_count' => array('gte' => '1'))
                ),
                array(
                    "bool" => array(
                        "must" => array(
                            "term" => array(
                                "status" => "1"
                            )
                        )
                    )
                ),
                array(
                    "bool" => array(
                        "must" => array(
                            "term" => array(
                                "is_deleted" => "0"
                            )
                        )
                    )
                )
            );

            // Category analyzer query
            $query_term_arr2 = array(
                "from" => 0,
                "size" => 20,
                "_source" => array(
                    "includes" => array("icon", "category_name", "slug", "product_count", "visit")
                ),
                "query" => array(
                    "bool" => array(
                        "must" => array(
                            "multi_match" => array(
                                "query" => $keyword,
                                "fuzziness" => "1",
                                "fuzzy_transpositions" => true,
                                "analyzer" => "standard",
                                "fields" => array(
                                    "category_name.autocomplete^2",
                                    "bigram_category_name.bigram_combiner^2",
                                    "parent_name.autocomplete",
                                    "bigram_parent_name.bigram_combiner"
                                )
                            )
                        ),
                        "filter" => $category_filters,
                    )
                ),
                "sort" => array(
                    "_score" => "desc",
                    "_script" => array(
                        "type" => "number",
                        "script" => array(
                            "lang" => "painless",
                            "source" => "  
                            long visit_count = doc['visit'].size()==0 ? 0 : doc['visit'].value; 
                            long product_count_val = doc['product_count'].size()==0 ? 0 :doc['product_count'].value; 
                            double custom_visit_score = visit_count * (params.weightage_1); 
                            double custom_product_count_score = product_count_val * (params.weightage_2);
                            double final_score = custom_visit_score + custom_product_count_score;
                            return final_score; ",
                            "params" => array(
                                "weightage_1" => (70 / 100),
                                "weightage_2" => (30 / 100)
                            )
                        ),
                        "order" => "desc"
                    )
                )
            );

            $query_term2 = json_encode($query_term_arr2);

            $category_result = $this->CI->elasticsearch->advancedquery($_ENV['EL_CATEGORY_INDEX'], NULL, $query_term2);
            if (!empty($category_result)) {
                $category_rows = array_column($category_result['hits']['hits'], '_source');
            }

            $range_filters = array();
            $range_filters = array(
                array(
                    "bool" => array(
                        "must" => array(
                            "term" => array(
                                "status" => "1"
                            )
                        )
                    )
                ),
                array(
                    "bool" => array(
                        "must" => array(
                            "term" => array(
                                "is_deleted" => "0"
                            )
                        )
                    )
                ),
                array(
                    "bool" => array(
                        "must" => array(
                            "term" => array(
                                "show_status" => "1"
                            )
                        )
                    )
                )
            );

            if (strpos($keyword, 'within') || strpos($keyword, 'under')) {
                preg_match_all('!\d+!', $keyword, $prices);
                $prices = $prices[0];
                rsort($prices);
                $price_range = array('range' => array('price' => array('gt' => 1, 'lt' => $prices[0])));
                array_push($range_filters, $price_range);
            }

            if (strpos($keyword, '%') || strpos($keyword, 'percent') || (strpos($keyword, 'off') && !strpos($keyword, 'office'))) {
                preg_match_all('!\d+!', $keyword, $off);
                $off = $off[0];
                if(count($off)>0)
                {
                sort($off);
                $offer_range = array('range' => array('discount' => array('gte' => 1, 'lte' => $off[0])));
                array_push($range_filters, $offer_range);
                }
            }

            // Product analyzer query
            $query_term_arr = array(
                "from" => 0,
                "size" => 20,
                "_source" => array(
                    "includes" => array("image", "product_name", "slug", "visit", "featured", "featurecount", "featured_status", "product_id")
                ),
                "query" => array(
                    "bool" => array(
                        "should" => array(
                            "prefix" => array("product_name" => ucfirst($keyword)),
                        ),
                        "must" => array(
                            "multi_match" => array(
                                "query" => $keyword,
                                "fuzziness" => "1",
                                "fuzzy_transpositions" => true,
                                "analyzer" => "standard",
                                "fields" => array(
                                    "custom_order_tag.autocomplete^12",
                                    "product_name.autocomplete^2",
                                    "bigram_product_name.bigram_combiner"
                                )
                            )
                        ),
                        "filter" => $range_filters,
                    )
                ),
                "sort" => array(
                    "_score" => "desc",
                    "_script" => array(
                        "type" => "number",
                        "script" => array(
                            "lang" => "painless",
                            "source" => " 
                            long featured_count = doc['featured_status'].size()==0 ? 0 : doc['featured_status'].value; 
                            long visit_count = doc['visit'].size()==0 ? 0 : doc['visit'].value; 
                            long featurecount_val = doc['featurecount'].size()==0 ? 0 :doc['featurecount'].value; 
                            double custom_featured_score = featured_count * (params.weightage_1); 
                            double custom_visit_score = visit_count * (params.weightage_2); 
                            double custom_featurecount_score = featurecount_val * (params.weightage_3);
                            double final_score = custom_featured_score + custom_visit_score + custom_featurecount_score;
                            return final_score; ",
                            "params" => array(
                                "weightage_1" => (50 / 100),
                                "weightage_2" => (40 / 100),
                                "weightage_3" => (10 / 100)
                            )
                        ),
                        "order" => "desc"
                    )
                )
            );

            $query_term = json_encode($query_term_arr);
            $searched_result = $this->CI->elasticsearch->advancedquery($_ENV['EL_PRODUCT_INDEX'], NULL, $query_term);

            if (!empty($searched_result) && !empty($searched_result['hits'])) {
                $product_rows = array_column($searched_result['hits']['hits'], '_source');
            }
        } else {
            $most_searched_cat = get_el_empty_state_result($limit);
        }

        // HTML rendering code here for both category and Product

        if (empty($category_rows) && empty($product_rows)) {
            if (!in_array(strtolower($keyword), json_decode(EL_STOP_WORDS))) {
                if (empty($most_searched_cat)) {
                    $most_searched_cat = get_el_empty_state_result($limit);
                }
                if (is_array($most_searched_cat)) {
                    $category_rows = array_slice($most_searched_cat, 0, 10);
                }
            } else {
                $category_rows = $most_searched_cat;
            }
            $search_top_text = "<p class='btitles' style='background:none;margin-left: 20px;font-weight:500;color: #24272c;font-size: 13px;opacity: 1;pointer-events: none;'>Popular Categories</p>";
        }

        if (count($category_rows) > 10) {
            if (count($product_rows) >= 10) {
                $category_rows = array_slice($category_rows, 0, 10);
                $product_rows = array_slice($product_rows, 0, count($category_rows));
            } else {
                $offset = 20 - count($product_rows);
                if (count($category_rows) > $offset) {
                    $category_rows = array_slice($category_rows, 0, $offset);
                }
            }
        } else {
            $offset = 20 - count($category_rows);
            if (count($product_rows) > $offset) {
                $product_rows = array_slice($product_rows, 0, $offset);
            }
        }

        $action = !empty($section) ? 'Interacted with Search Section' : 'Interacted with Search Bar Section';
        if (count($category_rows) > 0) {
            $results_array[] = $search_top_text;
            $data_array[] = "";
            $counter++;
            foreach ($category_rows as $row) {
                  if(empty($keyword)){
                        $results_array[$counter] = '<p class="default-list-items trigger_event" title="" data-gacat="'.$page.'" data-gaaction="'.$action.'" data-galabel="Clicked Default Search Suggestion | ' . $row["category_name"] . '" rel="' . $row["category_name"] . '">
                                <span>' . $row["category_name"] . '</span>
                            </p>';
                  }else{
                        $results_array[$counter] = '<div class="list-item trigger_event" title="" data-gacat="'.$page.'" data-gaaction="'.$action.'" data-galabel="Typed and Search | '. $row["category_name"] .'" >
                                <div class="" style="float: left;background: none;width: 0px;padding: 0;" rel="' . $row["category_name"] . '"></div>
                                <div class="search_popup_list_left autoc-right">
                                    <small>' . $row["category_name"] . '</small>
                                </div>
                                <small style="float:right;padding: 4px 10px;margin: 0px 0 0 0 !important;">' . $row['product_count'] . ' Products </small>
                            </div>';
                  }

                $data_array[$counter] = "category-" . $row['slug'];
                $counter++;
            }
            if(!empty($keyword) && !isMobileDevice()){
                $results_array[] = "<hr/>";
                $data_array[] = "";
            }
           
        }

        if (empty($product_rows)) {
            if (!in_array(strtolower($keyword), json_decode(EL_STOP_WORDS))) {
                $this->CI->load->model('review_model', 'rm');
                $product_rows = $this->CI->rm->get_top_trending_products($limit);
            }
        }

        $results = array();

        if (!empty($product_rows)) {
            if (count($category_rows) < 1) {
                $results_array[] = $search_top_text;
                $data_array[] = "";
            }
            $counter++;
            
            if(empty($keyword)){
                $results_array[] = "<p class='btitles' style='float:left; width:100%; padding: 8px 10px; color: #24272c;font-size:13px;opacity:1;font-weight:500;margin-top: 10px;pointer-events: none;'>Trending Products</p>";
                $data_array[] = "";
            }
            foreach ($product_rows as $product_row) {
                $getFreeDemoBtn = '<button class="searchCtaFreeDemoBtn" data-action="GetFreeDemo" data-proid="' . $product_row["product_id"] . '" onclick="event.stopPropagation(),bindEvent(this), track_event_new(\'Search Page\', \'Clicked on Get Demo\', \' ' . $product_row["product_name"] . '\');"> Get Demo </button>';
                if(empty($keyword)){
                    $results_array[] = '<p class="default-list-items trigger_event" title="" data-gacat="'.$page.'" data-gaaction="'.$action.'" data-galabel="Clicked Default Search Suggestion | ' . $product_row["product_name"] . '" rel="' . $product_row["product_name"] . '">
                        <img src="'.ASSETS.'V2/img/trending_icon.svg" alt="trendingicon">
                        <span>' . $product_row["product_name"] . '</span>
                    </p>';
                }else{
                    $results_array[] = '<div class="list-item trigger_event" title="" data-gacat="'.$page.'" data-gaaction="'.$action.'" data-galabel="Typed and Search | '.$product_row["product_name"].'">
                        <div class="" style="float: left;background: none;width: 0px;padding: 0;" rel="' . $product_row["product_name"] . '"></div>
                        <div class="search_popup_list_left autoc-right">
                            <small>' . $product_row["product_name"] . '</small>
                        </div>' . $getFreeDemoBtn.'
                    </div>';
                }

                $data_array[] = $product_row['slug'];
            }
        }
        // if (!isMobileDevice()) {
        //     $results_array[] =  "<div class='searchCtaStrip'><p><span>Need Help?</span>Our experts are ready to help you</p> &nbsp; &nbsp; <button onclick='track_event_new(\"Search Page\", \"Clicked on Talk to Expert\", \"\" )' class='searchCtaBtn tj-acd-form' data-action='TalkToTechExpert' data-proid='" . DEFAULT_PRODUCT_ID . "'><img src='" . ASSETS . "new-assets/images/call_20_consult.svg' alt='TalkToExpert' >Talk To Expert &nbsp;<small class='smallFreeText'>FREE<small></button></div>";
        // }
        $results['suggestions'] = $results_array;
        $results['data'] = $data_array;
        return $results;
    }
}