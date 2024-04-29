<section class="content-section offers-pl1 business-ff1 news-logo">
    <div class="container-page">
        <p class="ext1 home_heading_txt">In the news</p>
        <div class="esy-get something-het1 news-logo-slider slider-ga-event" data-gaaction="Interacted with News Coverage">
            @foreach ($news_logos as $nl)
                @php
                    $media_logo = isset($nl->newspaper_logo) && !empty($nl->newspaper_logo) ? config('constants.DIR_FS_TECHJOCKEY_IMAGES') . "media/news_logo/" . $nl->newspaper_logo : config('constants.ASSETS') . "images/default-brand.png";
                @endphp
                <div class="col-logo-ris1">
                    <a href="{{ $nl->article_link }}" target="_blank" rel="noreferrer noopener nofollow" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with News Coverage" data-galabel="{{ $nl->article_link}}">
                        <img alt="media_logo" src="{{ config('constants.MEDIA_IMAGE') }}" data-src="{{ $media_logo }}" class="lazyload" width="110">
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</section>
