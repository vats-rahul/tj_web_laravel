<section class="content-section slider-home11">
    <div class="container-page">
        <div class="col-md-12">
            <div class="home-banner slider1-1-best11 homepage-hero-banner slider-ga-event" style="min-height: 240px;" data-gaaction="Interacted with Hero Banner">
                <?php
                $i = 1;
                shuffle($hero_banner);
                foreach ($hero_banner as $banner) {
                    $banner_url = \App\Helpers\Helper::createTopBannerUrl($banner->banner_url);
                    if (isset($banner_url) && $banner_url != '' && $banner_url != 'javascript:void(0);') {
                        $cursor_style = 'cursor: pointer;';
                        $new_window = "true";
                    } else {
                        $banner_url = 'javascript:void(0);';
                        $cursor_style = '';
                        $new_window = "false";
                    }
                    $img = config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->$banner_type . '?d=' . $dimension;
                ?>
                    @if($i == 1)
                    <div class="col-md-12">
                        <div class="slider-home-1" style="width:100%">
                            <img class="trigger_event" src="{{ $img }}" alt="Homepage Hero Banner - {{ $i }}" style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Hero Banner" data-galabel="Clicked on Hero Banner | Url: {{ $banner_url }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                        </div>
                    </div>
                    @else
                    <div class="col-md-12 slick-slide">
                        <div class="slider-home-1" style="width:100%">
                            <img class="trigger_event" data-lazy="{{ $img }}" alt="Homepage Hero Banner - {{ $i }}" style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) }} page" data-gaaction="Interacted with Hero Banner" data-galabel="Clicked on Hero Banner | Url: {{ $banner_url }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                        </div>
                    </div>
                    @endif
                <?php
                    $i++;
                } ?>
            </div>
        </div>
    </div>
</section>
