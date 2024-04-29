<section class="content-section offers-pl1">
    <div class="container-page" id="popular">
        <p class="home_heading_txt">What’s New</p>
        <div class="home_1el_slider slider-ga-event" data-gaaction="Interacted with What's New">
            @php $msc = 0; @endphp
            @foreach ($home_data['popular_arr'] as $pa)
                @php
                    $pop_img = config('constants.ASSETS') . 'images/V2_img/whats-new/'. $pa['img'];
                @endphp
                @if (($msc % 4) == 0)
                    <div>
                @endif
                @if (($msc % 2) == 0)
                    <div class="esy-get">
                @endif
                <div class="col-md-6">
                    <a href="{{ $pa['link'] }}" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with What's New" data-galabel="{{ $pa['link'] }}">
                        <div class="get-mj">
                            <img alt="pop_img" class="lazyload" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $pop_img }}" onerror="imgError(this,'cat_icon')" loading= “lazy”>
                        </div>
                    </a>
                </div>
                @if ($msc > 0 && (($msc + 1) % 2) == 0)
                    </div>
                @endif
                @if ($msc > 0 && (($msc + 1) % 4) == 0)
                    </div>
                @endif
                @php $msc++; @endphp
            @endforeach
            @if (($msc % 2) != 0)
                </div>
            @endif
            @if (($msc % 4) != 0)
                </div>
            @endif
        </div>
    </div>
</section>
