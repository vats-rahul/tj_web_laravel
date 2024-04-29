<section class="content-section offers-pl1 chec-pl5">
    <div class="container-page">
        <p class="home_heading_txt">Top Trending Products</p>
        <div class="esy-get home_2el_slider slider-ga-event" data-gaaction="Interacted with Top Trending Products">
            @foreach ($top_trending_products['products'] as $tp)
                @php
                $prod_img = !empty($tp['image']) ? asset(config('constants.DIR_FS_PRODUCT_IMAGE') . $tp['image'].'?d=110') : config('constants.DEFAULT_IMAGE');
                @endphp
                <div class="col-md-6">
                    <div class="m-sd2">
                        <a href="{{ url('detail/' . $tp['slug']) }}" class="trigger_event"
                            data-gacat="{{ ucfirst($page_type) }} Page"
                            data-gaaction="Interacted with Top Trending Products"
                            data-galabel="{{ $tp['product_name'] }}">
                            <img class="imgid_{{ $tp['product_id'] }} lazyload" src="{{ config('constants.DEFAULT_IMAGE') }}"
                                data-src="{{ $prod_img }}" alt="{{ $tp['product_name'] }}"
                                onerror="imgError(this,'prod')">
                        </a>
                        <p class="mer-met1">{{ $tp['product_name'] }}</p>
                        <div class="star-pl1-res">
                            <p>{{ round($tp['rating_val'], 1) }}</p>
                            <div class="star-pl1-res-1">
                                <span class="star-ratings-sprite">
                                    <span style="width:{{ round($tp['rating_val'], 1) * 20 }}%"
                                        class="star-ratings-sprite-rating"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
