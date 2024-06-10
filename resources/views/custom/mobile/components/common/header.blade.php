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
                <li class="cart-2" id="cart_contents">
                @php
                    $cartLib = app()->make('App\Libraries\CartLib');
                    $cartContents = collect($cartLib->contents());
                    $lastProduct = collect($cartContents)->last();
                    $lastSlug = optional($lastProduct)['product_slug']; // Adding optional() helper to handle null value
                    
                    $buyNowItems = collect($cartContents)->filter(function ($item) {
                        return $item['set_buy_now'] == 1;
                    });

                    $step = '';
                    if ($buyNowItems->isNotEmpty()) {
                        $step = '?step=payment';
                    }

                    $onClick = '';
                    if ($lastSlug) { // Adding a null check
                        $onClick = 'onclick="window.location.href=\'' . url("ordernow/$lastSlug") . '\'"';
                    }
                @endphp
                    <p id="cart_icon_cont" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                        data-onlyonce="true" data-gaaction="Cart Viewed" data-galabel="{{ $page }}"
                        {{ $cartContents->count() > 0 ? $onClick : '' }}>
                        <img alt="cart icon" src="{{ asset('assets/images/V2_img/hr2.jpg') }}">
                    </p>

                    @if ($cartContents->isEmpty())
                        <div id="cart-summary-cont" class="dropdown-content"></div>
                    @endif
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
