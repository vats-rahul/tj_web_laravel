<section class="content-section success-st1 news-sea1" style="margin-top: 5rem;">
    <div class="container-page">
        <div class="col-md-12">
            <div class="text-1-best-logo1">
                <p class="img-smim3 home_heading_txt">News Coverage</p>
                <div class="new-logo-12 news-logo-slider slider-ga-event" data-gaaction="Interacted with News Coverage">
                    @foreach ($news_logos as $nl)
                        @php
                            if (isset($nl->newspaper_logo) && !empty($nl->newspaper_logo)) {
                                $media_logo = config('constants.DIR_FS_TECHJOCKEY_IMAGES') . "media/news_logo/" . $nl->newspaper_logo;
                            } else {
                                $media_logo = config('constants.ASSETS') . "images/default-brand.png";
                            }
                        @endphp
                        <div class="new-logo">
                            <a href="{{ $nl->article_link }}" target="_blank" rel="noreferrer noopener nofollow" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with News Coverage" data-galabel="{{ $nl->article_link }}">
                                <img alt="media_logo" src="{{ config('constants.MEDIA_IMAGE') }}" data-src="{{ $media_logo }}" class="lazyload" width="110">
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
