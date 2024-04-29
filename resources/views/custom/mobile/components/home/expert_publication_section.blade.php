<section class="content-section offers-pl1 business-ff1">
    <div class="container-page">
        <p class="ext1 home_heading_txt">Expert Publications</p>
        <div class="home_1el_normal slider-ga-event" data-gaaction="Interacted With {{ $ga_action }}">
            @php
            $img_dir = config('constants.DIR_FS_BLOG_IMAGE').'blogs/';
            $img_dim = '320x167';
            @endphp

            @foreach ($blogs as $blog)
                <div class="exper1">
                    <img src="{{ config('constants.GENERAL_IMAGE') }}" data-src="{{$blog->urlToImage }}?d={{ $img_dim }}" alt="{{ $blog->title }}" title="Blog - {{ $blog->title }}" class="lazyload trigger_event" onerror="imgError(this,'blog');" data-gacat="{{ ucfirst($page_type) }} page" data-gaaction="Interacted with {{ $ga_action }}" data-galabel="Clicked on Blog Image | {{ $blog->title }}" data-slug="{{ $blog->link }}" data-ibu="false" loading="lazy">
                    <a href="{{ $blog->link }}" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with {{ $ga_action }}" data-galabel="Clicked on Blog Title | {{ $blog->title }}"><h3 class="must-pl1">{{ strlen($blog->title) > 65 ? substr($blog->title, 0, 65) . '..' : $blog->title }}</h3></a>
                    <p>{{ mb_substr($blog->excerpt, 0, 100, 'utf-8') }}...</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
