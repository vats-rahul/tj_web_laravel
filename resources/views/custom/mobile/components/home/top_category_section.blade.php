<section class="content-section offers-pl1">
    <div class="container-page tj_cat_cont">
        <p class="home_heading_txt">Top Selling Categories</p>
        <div class="home_1el_slider slider-ga-event" data-gaaction="Interacted with Top Selling Categories">
            @php
                $msc = 0;
            @endphp
            @foreach ($most_searched_cat as $cat)
                @php
                    $cat_icon = !empty($cat->category_icon) ? config('constants.DIR_FS_CATEGORY_ICON') . $cat->category_icon : config('constants.DIR_FS_CATEGORY_NOICON');
                @endphp
                @if ($msc % 9 == 0)
                    <div>
                @endif
                @if ($msc % 3 == 0)
                    <div class='esy-get'>
                @endif
                <div class="col-md-4">
                    <a href="{{ url('category/' . $cat->slug) }}" class="trigger_event"
                        data-gacat="{{ ucfirst($page_type) }} Page"
                        data-gaaction="Interacted with Top Selling Categories" data-galabel="{{ $cat->name }}">
                        <div class="m-sd1">
                            <img class="lazyload" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $cat_icon }}"
                                alt="{{ $cat->name . ' software in india' }}"
                                title="{{ $cat->name . ' software' }}" onerror="imgError(this,'cat_icon')">
                            <p>{{ $cat->name }}</p>
                        </div>
                    </a>
                </div>
                @if ($msc > 0 && (($msc + 1) % 3 == 0))
                    </div>
                @endif
                @if ($msc > 0 && (($msc + 1) % 9 == 0))
                    </div>
                @endif
                @php
                    $msc++;
                @endphp
            @endforeach
            <div class="col-md-4 trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                data-gaaction="Interacted with Top Selling Categories" data-galabel="See More">
                <span class="open-url" data-link="{{ url('categories') }}">
                    <div class="m-sd1">
                        <img alt="more" src="{{ config('constants.ASSETS') . 'images/V2_img/cat_icon/more.svg' }}">
                    </div>
                    <p>See more</p>
                </span>
            </div>
            @if ($msc % 3 != 0)
                </div>
            @endif
            @if ($msc % 9 != 0)
                </div>
            @endif
        </div>
    </div>
</section>
