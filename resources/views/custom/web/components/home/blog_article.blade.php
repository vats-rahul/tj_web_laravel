<div class="expert-ls-3 swiper_product_card slider-ga-event" data-gaaction="Interacted with {{ $ga_action }}">
    @php
    $img_dir = ($type == 'customer_story') ? config('constants.DIR_FS_BLOG_IMAGE') . 'case_studies/' : '';
    $img_dim = ($device == 'mobile') ? '260x108' : '265x200';
    @endphp
    @foreach ($blogs as $cs)
        <div class="col-md-3">
            <div class="gst-box tallyPrime-articles">
                <div class="col-md-12">
                    <div class="blog-img-cont">
                        <img src="{{ config('constants.GENERAL_IMAGE') }}" data-src="{{ $img_dir . $cs->urlToImage . '?d=' . $img_dim }}" alt="{{ $cs->title }}" title="Blog - {{ $cs->title }}" class="img-responsive lazyload trigger_event" onerror="imgError(this,'blog');" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with {{ $ga_action }}" data-galabel="Clicked on Blog Image | {{ $cs->title }}" data-slug="{{ $cs->link }}" data-ibu="false">                                        
                    </div>
                    <div class="erp-1"><span class="blog_category">{{ ucwords($cs->categories) }}</span></div>
                    <div class="blog-title">
                        <a href="{{ $cs->link }}" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with {{ $ga_action }}" data-galabel="Clicked on Blog Title | {{ $cs->title }}">
                            <h3 class="app-h3">{{ (strlen($cs->title) > 65) ? substr($cs->title, 0, 65) . '..' : $cs->title }}</h3>
                        </a>
                    </div>
                    <p class="home_desc">{{ date('F j, Y', strtotime($cs->date)) }}</p>
                </div>
            </div>
        </div>
    @endforeach
</div>

