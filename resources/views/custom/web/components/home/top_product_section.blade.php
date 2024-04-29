<section class="content-section  home-sar1">
    <div class="container-page ">
        @if(!empty($top_trending_products))
        <div class="col-md-12 home3 essentials-sp2">
            <div class="text-1-best-home brand_detailcard_category-3 prodt1 ">
                <p class="software-tallyPrime home_heading_txt"> Top Trending Products</p>
                @include('custom.web.components.home.short_vertical_product_card', ['product_list' => $top_trending_products['products'], 'ga_category' => 'Home Page', 'ga_action' => 'Top Trending Products'])
            </div>
        </div>
        @endif
        <div class="col-md-12 ">
            @if(!empty($adv_banner))
                @include('custom.web.components.home.top_adv_section', ['adv_banner' => $adv_banner, 'dimension' => '1260X240', 'page_name' => 'Home Page', 'banner_type' => 'mobile_image'])
            @endif
        </div>
    </div>
</section>

@if(!empty($trending_compare))
    @include('custom.web.components.home.trending_section', ['product_details' => $compare_product_details])
@endif

@if(!empty($categorywise_compare))
    @include('custom.web.components.home.popular_category_section', ['product_details' => $compare_product_details])
@endif
