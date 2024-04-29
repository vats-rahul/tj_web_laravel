@php
    $page_type = $page_type ?? 'Techjockey';
    $page = $page ?? 'Techjockey';
@endphp
<header class="top-mobile" id="headerCont">
    <div class="col-md-12 full-d-mob">
        <div class="col-md-2" id="nav_menu">
            <div class="menu-icon">
                <span class="nav_head_element" data-id="nav_menu" data-action="html"
                    data-ref="{{ url()->current() }}"><img src="{{ asset('assets/images/V2_img/res-1.jpg') }}" alt="Menu icon"></span>
            </div>
            <div class="tjout">
                <div class="nav_close">
                    <span class="close" data-target="nav_menu_cont" data-call="toggleClass">
                        <img src="{{ asset('assets/images/V2_img/close_white.svg') }}" alt="close">
                    </span>
                </div>
                <nav class="navigation">
                    <span class="dic1"> Discover & Buy </span>
                    <ul class="mainmenu">
                        <li>
                            <a href="{{ url('/') }}" class="trigger_event" data-gacat="Left Menu in Mobile"
                                data-gaaction="Click on Home">Home</a>
                        </li>
                        <li>
                            <p class="toggle-sub-menu">Free IT Consultation <span class="open-nav"></span> </p>
                            <ul class="submenu">
                                <li><a href="{{ url('experts') }}" class="trigger_event"
                                        data-gacat="Left Menu Consultation" data-gaaction="Free IT Solution"
                                        data-galabel="Request A Call Back">Request A Call Back</a></li>
                                <li><a href="{{ url('experts') }}" class="trigger_event"
                                        data-gacat="Left Menu Consultation" data-gaaction="Free IT Solution"
                                        data-galabel="Call Now">Call now </a></li>
                            </ul>
                        </li>
                        <li>
                            <p class="toggle-sub-menu">Categories <span class="open-nav"></span> </p>

                            <ul class="submenu">
                                <li><a href="{{ url('category/retail-billing-software') }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Billing Software">Retail Billing Software</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col-md-8 search-p1">
            <div class="logo_section">
                <a href="{{ url('/') }}" class="tj_logo">
                    <img src="{{ asset('assets/images/V2_img/logo.svg') }}" alt="Techjockey | Buy Software in India"
                        title="Techjockey">
                </a>
            </div>
            <div class="search head_searchbar tjout">
                <form>
                    <input type="text" id="search_keyword" class="searchTerm"
                        placeholder="Search by Category, Product or Keyword">
                </form>
            </div>
        </div>
        <div class="col-md-2">
            <ul class="menu-list-cart">
                <li>
                    <span class="open-url trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                        data-onlyonce="true" data-gaaction="Wishlist Viewed" data-galabel="{{ $page }}"
                        data-link="{{ url('wishlist') }}"><img alt="wishlist"
                            src="{{ asset('assets/images/V2_img/hr1.jpg') }}"></span>
                </li>
            </ul>
        </div>
    </div>
</header>

<script>
    sessionStorage.setItem('tj-global-action', 'TalkToTechExpert');
    sessionStorage.setItem('tj-global-proname', 'Techjockey ACD');
    sessionStorage.setItem('tj-global-proid', '{{ !empty($product_id) ? $product_id : config('constants.DEFAULT_PRODUCT_ID') }}');
    sessionStorage.setItem('tj-global-ispdp', '{{ !empty($product_id) ? 1 : 0 }}');
    sessionStorage.setItem('tj-global-categoryname', '{{ !empty($category_name) ? $category_name : 'NA' }}');
    sessionStorage.setItem('tj-global-categoryid', '{{ !empty($category_id) ? $category_id : 'NA' }}');
</script>
