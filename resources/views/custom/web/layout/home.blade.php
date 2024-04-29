<!DOCTYPE html>
<html lang="en">
<head>
    @php 
        $load_slider = true;
    @endphp
    @include('custom.web.components.common.site_head')
    @php 
        $style = file_get_contents(public_path('assets/css/web/style.css'));
        $responsive = file_get_contents(public_path('assets/css/responsive/responsive.css'));
        $growlStyle = file_get_contents(public_path('assets/css/web/jquery.growl.css'));
        $homeStyle = file_get_contents(public_path('assets/css/web/home.css'));
    @endphp
    <style type="text/css">
        {!! $style !!}
        {!! $responsive !!}
        {!! $growlStyle !!}
        {!! $homeStyle !!}
    </style>
    @if ($load_slider)
        @php
            $slickCss = file_get_contents(public_path('assets/css/web/slick-comb.css'));
        @endphp

        <style type="text/css" id="tj-slick-css">
            {!! $slickCss !!}
        </style>
    @endif
    <script>

function imgError(i, t) {
    i.onerror = "";
    let imgSrc = "";

    switch (t) {
        case 'prod':
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
        case 'cat_icon':
            imgSrc = "<?= config('constants.DIR_FS_CATEGORY_NOICON') ?>";
            break;
        case 'ind_img':
            imgSrc = "<?= config('constants.DIR_FS_INDUSTRY_NOIMAGE') ?>";
            break;
        case 'bus_img':
            imgSrc = "<?= config('constants.DIR_FS_BUSINESS_NOIMAGE') ?>";
            break;
        case 'bus_icon':
            imgSrc = "<?= config('constants.DIR_FS_BUSINESS_NOICON') ?>";
            break;
        case 'brand':
            imgSrc = "<?= config('constants.DIR_FS_BRAND_NOIMAGE') ?>";
            break;
        case 'blog':
            imgSrc = "<?= config('constants.GENERAL_IMAGE') ?>";
            break;
        case 'testimonial':
            imgSrc = "<?= config('constants.ASSETS') ?>new-assets/images/testimonials/M4.png";
            break;
        case 'prod':
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
        case '1':
            imgSrc = "<?= config('constants.DIR_FS_TECHJOCKEY_IMAGES') ?>products/el-pro-no-image.png";
            break;
        case '2':
            imgSrc = "<?= config('constants.DIR_FS_CATEGORY_ICON') ?>el-cat-no-img.png";
            break;
        default:
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
    }
    i.src = imgSrc;

    return true;
}

</script>
</head>
<body>
    @include('custom.web.components.home.schema')
    <header>@include('custom.web.components.common.header')</header>
    <main>
        @include('custom.web.components.home.top_hero_section')
        @include('custom.web.components.home.top_category_section')
        @if (!empty($hero_banner))
            @include('custom.web.components.home.homepage_hero_banner', ['adv_banner' => $adv_banner, 'dimension' => '1260X300', 'page_name' => 'Home', 'banner_type' => 'image'])
        @endif
        @if(!empty($recently_viewed_products))
            @include('custom.web.components.home.recently_viewed_product_section')
        @else
            @include('custom.web.components.home.top_product_section')
        @endif
        @includeWhen(!empty($recently_viewed_products), 'custom.web.components.home.recently_viewed_product_section')
        
        @include('custom.web.components.home.enterprise_section')
        @include('custom.web.components.home.feedback_section')
        @if(isset($top_selling_products['products']) && !empty($top_selling_products['products']))
            @include('custom.web.components.home.topselling_product_section', ['ga_category' => 'Home Page'])
        @endif
        @include('custom.web.components.home.expert_publication_section')
        @include('custom.web.components.home.testimonial_section')
        @include('custom.web.components.home.ask_question_chip')
        @include('custom.web.components.home.start_selling_section')
        @include('custom.web.components.home.customer_success_section')
        @include('custom.web.components.home.news_coverage_section')
        @include('custom.web.components.home.newsletter_section')
        @include('custom.web.components.home.faq_section')
        @php
            $clevertap_arr = array(); 
        @endphp

        <div id="search_popup"></div>
        <div id="tj_product_plan_popup"></div>
        <div id="pdp_gallery"></div>
        @include('custom.web.components.common.script', ['slider' => $load_slider])
        <script type="text/javascript" src="{{ config('constants.ASSETS') }}js/web/home.js?version=1.7" id="tj-home-js"></script>
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
    <footer>@include('custom.web.components.common.footer')</footer>
</body>
</html>