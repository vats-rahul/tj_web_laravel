<section class="content-section offers-pl1 chec-pl5">
    <div class="container-page" id="tsp">
        <p class="home_heading_txt">Top Selling Products</p>
        <div class="esy-get home_topselling_slider slider-ga-event" style="margin-top:20px"
            data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with {{ $ga_action }}">
            @php
            $prodNo = 1;
            @endphp
            @foreach ($top_selling_products as $product_details)
            @php
            $feature = \App\Helpers\Helper::getProductFeatures($product_details['product_id']);
            $hasPrice = false;
            if ($product_details['price_on_request'] != 1 && $product_details['price'] > 0 && !empty($product_details['product_plan'])) {
            $hasPrice = true;
            }
            @endphp
            <div class="col-md-3">
                <div class="tallyprime tallyprime-2 tallyprime-2-img">
                    @if (isset($product_details['product_label']) && $product_details['product_label'])
                    @php
                    $product_label = $product_details['product_label'];
                    @endphp
                    <div class="sponsored1 shine-{{ $prod_label_color->$product_label }}">
                        <span class="{{ $prod_label_color->$product_label }}">{{ $product_label }}</span>
                    </div>
                    @endif

                    @php
                    $prod_img = !empty($product_details['image']) ? config('constants.DIR_FS_PRODUCT_IMAGE') . $product_details['image'].'?d=110' : config('constants.DIR_FS_PRODUCT_NOIMAGE');
                    @endphp

                    <div class="col-md-12">
                        <div class="col-md-4 height-90">
                            <div class="img-pl1">
                                <a href="{{ url('detail/' . $product_details['slug']) }}" class="trigger_event"
                                    data-gacat="{{ ucfirst($page_type) }} Page"
                                    data-gaaction="Interacted with {{ $ga_action }}"
                                    data-galabel="Clicked on Product Logo | {{ $product_details['product_name'] }} | {{ $page }}">
                                    <img class="imgid_{{ $product_details['product_id'] }} lazyload top_product_img"
                                        src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $prod_img }}"
                                        alt="{{ $product_details['product_name'] }}" onerror="imgError(this,'prod');">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8 height-90">
                            <div class="accounting-pl1">
                                <p class="card_category-2 {{ strlen($product_details['product_name']) > 45 ? 'pc-data-popover' : '' }}">
                                    <a href="{{ url('detail/' . $product_details['slug']) }}"
                                        class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                                        data-gaaction="Interacted with {{ $ga_action }}"
                                        data-galabel="Clicked on Product Name | {{ $product_details['product_name'] }} | {{ $page }}">
                                        {{ strlen($product_details['product_name']) > 45 ? substr($product_details['product_name'], 0, 43) . '...' : $product_details['product_name'] }}
                                    </a>
                                </p>
                                <p class="brand-sel-list"><span>By</span>
                                    <a class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                                        data-gaaction="Interacted with {{ $ga_action }}"
                                        data-galabel="Clicked on Product Brand | {{ $product_details['product_name'] }} | {{ $page }}"
                                        href="{{ url('brand/'.$product_details['brand_slug']) }}" target="_blank">
                                        {{ $product_details['brand_name'] }}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 card-labels">
                        @if ($product_details['total_reviews'] > 0)
                        <div class="star-dv1-top">
                            <a class="rating_val trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-galabel="View Reviews | {{ $product_details['product_name'] }} | {{ $page }}"
                                href="{{ url('reviews/' . $product_details['slug']) }}" target="_blank"
                                style="color: #fff">
                                <img alt="star1" src="{{ config('constants.ASSETS') }}images/V2_img/star1-bx.png">
                                {{ round($product_details['rating_val'], 1) }}
                            </a>
                        </div>
                        @else
                        <div class="no-star-dv1-top">
                            <a href="{{ url('add_review/' . $product_details['slug']) }}"
                                class="pc-write-review trigger_event"
                                data-galabel="Write a Review | {{ $product_details['product_name'] }} | {{ $page }}"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-gacat="{{ ucfirst($page_type) }} Page" contenteditable="false" target="_blank"
                                title="Write a Review">Add Review
                            </a>
                        </div>
                        @endif
                        @if ($hasPrice)
                        <div class="plans-dv">
                            <a href="{{ url("detail/" . $product_details['slug'] . "/#pricing") }}"
                                target="_blank" class="pc-view-plan trigger_event"
                                data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-galabel="Plans | {{ $product_details['product_name'] }} | {{ $page }}">Plans</a>
                        </div>
                        @endif
                        @if (count($feature) > 0)
                        <div class="features-dv">
                            <a href="{{ url("detail/" . $product_details['slug'] . "/#features") }}"
                                target="_blank" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-galabel="Feature | {{ $product_details['product_name'] }} | {{ $page }}">Features</a>
                        </div>
                        @endif
                    </div>
                    <div class="col-md-12 demo-btn-div">
                        <div class="free-demo-btn-top-s21">
                            <button class="tj-acd-form trigger_event" data-gaaction="Interacted with {{ $ga_action }}"
                                data-gacat="{{ ucfirst($page_type) }} Page"
                                data-galabel="Get Free Demo | {{ $product_details['product_name'] }} | {{ $page }}"
                                data-redirect="false" data-proid="{{ $product_details['product_id'] }}"
                                data-action="GetFreeDemo" data-userintent="Demo">Get Free Demo</button>
                        </div>
                    </div>

                    <div class="col-md-12 selling-get-free-demo">
                        @if ($hasPrice)
                        <div class="get-price">
                            @if (isset($product_details['discount']) && $product_details['discount'] != 0 && $product_details['offer_end_date'] >= date('Y-m-d') && $product_details['offer_start_date'] <= date('Y-m-d'))
                            <p class="price-get-01">
                                ₹{{ number_format($product_details['special_price'], env('PRICE_ROUND_OFF_DIGITS')) }}
                            </p>
                            <p class="price-text">{{ $product_details['price_text'] }}</p>
                            @else
                            <p class="price-get-01">
                                ₹{{ number_format($product_details['price'], env('PRICE_ROUND_OFF_DIGITS')) }}
                            </p>
                            <p class="price-text">{{ $product_details['price_text'] }}</p>
                            @endif
                            @if (!empty($product_details['gst_inclusive_message']))
                            <p class="taxes-ad1">{{ $product_details['gst_inclusive_message'] ?? "" }}</p>
                            @endif
                        </div>

                        <div class="get-buy-btn">
                            <button name="Buy Now" class="tj-buynow-btn tj-loader trigger_event" data-ss="large"
                                data-proid="{{ $product_details['product_id'] }}"
                                data-slug="{{ $product_details['slug'] }}"
                                data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-galabel="Buy Now | {{ $product_details['product_name'] }} | {{ $page }}"
                                data-redirect="false">Buy Now</button>
                        </div>
                        @else
                        <div class="get-price">
                            @if($product_details['price'] > 0)
                            <p class="price-get-01">
                                {{ $product_details['currency_symbol'].number_format($product_details['price'], env('PRICE_ROUND_OFF_DIGITS')) }}
                            </p>
                            <p class="price-text">Starting at</p>
                            @else
                            <p class="price-get-request">Price On Request</p>
                            @endif
                        </div>

                        <div class="get-buy-btn">
                            <button class="tj-acd-form trigger_event" data-ss="large"
                                data-proid="{{ $product_details['product_id'] }}"
                                data-slug="{{ $product_details['slug'] }}"
                                data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with {{ $ga_action }}"
                                data-galabel="Get Price | {{ $product_details['product_name'] }} | {{ $page }}"
                                data-proid="{{ $product_details['product_id'] }}" data-action="ConsultWithExpert"
                                data-redirect="false" data-userintent="Price">Get Price</button>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
            @php
            $prodNo++;
            @endphp
            @endforeach
        </div>
    </div>
</section>
