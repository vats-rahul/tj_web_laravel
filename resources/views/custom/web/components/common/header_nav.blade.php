<nav id="cssmenu">
    <div class="logo">
    <a href="{{ url('/') }}" title="the best software for your business">
            <img alt="Techjockey | Buy Software in India" src="{{ asset(config('constants.S3_ASSETS') . 'images/V2_img/logo.svg') }}" title="Techjockey">
        </a>
    </div>
    <div id="head-mobile"></div>
    <div class="button"></div>
    <ul>
        <li class="active">
            <span class="nav_head_element" data-id="nav_category" data-action="html"> Categories </span>
            <ul class="sub-menu-l1" id="nav_category">
            </ul>
        </li>
        <li class="active nav_head_element" data-id="nav_brand" data-action="after">
            <span id="nav_brand">Brands</span>
        </li>
        <li class="active nav_head_element" data-id="nav_industry" data-action="after">
            <span id="nav_industry">Industry</span>
        </li>
        <li><a href="{{ url('compare') }}" class="trigger_event"
                data-gacat="{{ isset($page_type) ? ucfirst($page_type) : '' }} Page"
                data-gaaction="Interacted with Top Section"
                data-galabel="Clicked on Compare Product | {{ isset($page) ? $page : '' }}"
                rel="noreferrer noopener">Compare</a>
        </li>
        <li><a href="{{ url('questions') }}" target="_blank" rel="noreferrer noopener">Ask Question</a></li>
        <li><a href="{{ env('HTTP_SCHEME') . '://' . env('BLOG_URL') }}" target="_blank" rel="noopener">Blog</a>
        </li>
        <li class="free-demo-btn">
            <p contenteditable="false" data-userintent="Demo" data-gacat="{{ ucfirst($page_type) }} Page"
                data-gaaction="Clicked on Get Free advice" data-galabel="Top Header | {{ $page }}"
                data-action="GetFreeDemo" data-proname="Techjockey ACD" data-proid="{{ config('constants.DEFAULT_PRODUCT_ID') }}"
                data-ispdp="{{ $product_id ?? 0 }}" data-categoryname="{{ $category_name ?? '' }}"
                data-categoryid="{{ $category_id ?? '' }}" class="tj-acd-form trigger_event">Get Free Advice</p>
        </li>
    </ul>
</nav>
