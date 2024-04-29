<section class="content-section offers-pl1 chec-pl1">
    <div class="container-page">
        <p class="home_heading_txt">We spoil you for choices!</p>
        <div class="top_brands home_1el_slider slider-ga-event" data-gaaction="Interacted With Brands Section">
            @php $msc = 0; @endphp
            @foreach ($top_brands as $brand)
                @php
                    $brand_img = !empty($brand->image) ? config('constants.DIR_FS_BRAND_IMAGE') . $brand->image.'?d=100' : config('constants.DEFAULT_IMAGE');
                @endphp
                @if (($msc % 9) == 0)
                    <div class="brand_logo_cont">
                @endif
                @if (($msc % 3) == 0)
                    <div class="esy-get logo-pl1new">
                @endif
                <div class="col-md-4 trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted With Brands Section" data-galabel="{{ $brand->brand_name }}">
                    <a href="{{ url('brand/' . $brand->slug) }}">
                        <div class="m-sd1">
                            <img class="lazyload" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $brand_img }}" alt="{{ $brand->brand_name . ' software in india' }}" title="{{ $brand->brand_name . ' software' }}" onerror="imgError(this,'cat_icon')" loading="lazy">
                        </div>
                    </a>
                </div>
                @if ($msc > 0 && (($msc + 1) % 3) == 0)
                    </div>
                @endif
                @if ($msc > 0 && (($msc + 1) % 9) == 0)
                    </div>
                @endif
                @php $msc++; @endphp
            @endforeach
            @if (($msc % 3) != 0)
                </div>
            @endif
            @if (($msc % 9) != 0)
                </div>
            @endif
        </div>
    </div>
</section>
