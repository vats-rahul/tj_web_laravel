<section class="content-section selling-cat1">
    <div class="container-page ">
        <div class="col-md-2">
            <div class="text-1-best cat-hm1">
                <p class="s-heading">Top Selling</p>
                <p class="m-heading">Software Categories</p>
            </div>
        </div>
        <div class="col-md-10 trim_overflow" style="--h: 62px">
            <div class="acot1-list home_6el_slider slider-ga-event" data-gaaction="Interacted with Top Selling Categories">

                @php 
                $i=0;
                @endphp
                @foreach ($most_searched_cat as $cat)
                    @php 
                    $cat_icon = !empty($cat->category_icon) ? config('constants.DIR_FS_CATEGORY_ICON') . $cat->category_icon : config('constants.DIR_FS_CATEGORY_NOICON');
                    @endphp
                    <div class="accounting-md-top1 trigger_event {{ $i > 4 ? 'slick-slide' : '' }}" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Top Selling Categories" data-galabel="{{ $cat->name }}" data-slug="{{ 'category/' . $cat->slug }}">
                        <div class="cat_chip_cont">
                            <div class="col-md-4">
                                <img class="lazyload" src="<?= config('constants.DEFAULT_IMAGE'); ?>" data-src="{{ $cat_icon }}" alt="{{ $cat->name . ' software in india' }}" title="{{ $cat->name . ' software' }}" >
                            </div>
                            <div class="col-md-8 pdr-6">
                                <a class="ac-hm1" href="{{ url('category/' . $cat->slug) }}"><span>{{ $cat->name }}</span></a>
                            </div>
                        </div>
                    </div>
                    @php 
                    $i++;
                    @endphp
                @endforeach

                <div class="accounting-md-top1 trigger_event slick-slide" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Top Selling Categories" data-galabel="See all Categories" data-slug="{{ 'category/' . $cat->slug }}">
                    <div class="cat_chip_cont">
                        <div class="col-md-12 see_all_home_cat">
                            <a class="ac-hm1" href="{{ url('categories') }}"><span>See all Categories</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
