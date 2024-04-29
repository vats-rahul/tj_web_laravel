<!DOCTYPE html>
<html lang="en">
<head>
    @php 
        $load_slider = true;
        $lazyload = true;
    @endphp
    @include('custom.web.components.common.site_head')
    @php 
        $homeStyle = file_get_contents(public_path('assets/css/mobile/home.css'));
        $style = file_get_contents(public_path('assets/css/mobile/style.css'));
        $responsive = file_get_contents(public_path('assets/css/mobile/responsive.css'));
        $growlStyle = file_get_contents(public_path('assets/css/mobile/jquery.growl.css'));    
    @endphp
    <style type="text/css">
        {!! $homeStyle !!}
        {!! $style !!}
        {!! $responsive !!}
        {!! $growlStyle !!}
    </style>
     @if ($load_slider)
        @php
            $slickCss = file_get_contents(public_path('assets/css/web/slick-comb.css'));
        @endphp

        <style type="text/css" id="tj-slick-css">
            {!! $slickCss !!}
        </style>
    @endif
</head>
<body>
    @include('custom.web.components.home.schema')  
    <header>@include('custom.mobile.components.common.header')</header>
    <main> 
        @include('custom.mobile.components.home.top_hero_section')
        @include('custom.mobile.components.home.top_support_section')
        @if(!empty($hero_banner))
            @include('custom.mobile.components.home.first_banner_section', ['hero_banner' => $hero_banner,'dimension' => '600X300', 'page_name' => 'Home', 'banner_type' => 'mobile_image'])
        @endif
        @include('custom.mobile.components.home.top_category_section')
        @if(!empty($recently_viewed_products))
            @include('custom.mobile.components.home.recently_viewed_product_section')
        @endif
        @if(!empty($adv_banner))
            @include('custom.mobile.components.home.adv_banner_section',['adv_banner' => $adv_banner,'dimension' => '374', 'page_name' => 'Home','banner_type' => 'mobile_image'])
        @endif
        @include('custom.mobile.components.home.enterprise_section')
        @include('custom.mobile.components.home.popular_section')
        @include('custom.mobile.components.home.top_brand_section')
        @include('custom.mobile.components.home.business_requirement_section')
        @include('custom.mobile.components.home.top_trending_products')
        @include('custom.mobile.components.home.business_action_section')
        @include('custom.mobile.components.home.compare_section')
        @if(!empty($top_selling_products['products']))
            @include('custom.mobile.components.home.topselling_product_section',['top_selling_products' => $top_selling_products['products'],'ga_category' => 'Home Page','ga_action' => 'Top Selling Products'])
        @endif
        @include('custom.mobile.components.home.testimonial_section')
        @include('custom.mobile.components.home.expert_publication_section',['blogs' => $blogs, 'ga_action' => 'Expert Publication'])
        @include('custom.mobile.components.home.buyers_guide') 
        @include('custom.mobile.components.home.ask_question_chip') 
        @include('custom.mobile.components.home.faq_section')  
        @include('custom.mobile.components.home.news_coverage_section')
        <div id="tj_all_filter"></div>
        <div id="search_popup"></div>
        <div id="tj_product_plan_popup"></div>
        @php
            $clevertap_arr = array(); 
            $filterJs = file_get_contents(public_path('assets/js/mobile/filter.js'));
        @endphp

        @include('custom.mobile.components.common.script', ['slider' => $load_slider])
        <script type="text/javascript" src="{{ config('constants.ASSETS') }}js/mobile/home.js?version=1.7" id="tj-home-js"></script>
        <script type="text/javascript" src="{{ config('constants.ASSETS') }}js/common/addToCart.js?v=1.4" id="tj-addtocart-js"></script>
        <script type="text/javascript">
            tj.page_type = "<?= $page_type; ?>";
            tj.page = 'Home';
            tj.cai = "<?= env('CLEVERTAP_ACCOUNT_ID'); ?>";
            tj.envUrl = "<?= env('HTTP_SCHEME') . '://' . env('APP_URL') ?>";
            crmVariables.page_type = "<?= $page_type; ?>";
            tj.moengage_debug_mode = "<?= env('MOENGAGE_DEBUG_LOG'); ?>";
        </script>
    </main>
    <footer>@include('custom.mobile.components.common.footer')</footer>
</body>
</html>