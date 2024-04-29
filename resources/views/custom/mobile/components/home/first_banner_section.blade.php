<section class="content-section hpp-o1 library-slider-new">
    <div class="container-page">
        <div class="esy-get1">
            <div class="col-md-12 top-first-adv-banner slider-ga-event" data-gaaction="Interacted with Hero Banner">
                <?php
                $i = 1;
                shuffle($hero_banner);
                foreach ($hero_banner as $banner){
                        $banner_url = \App\Helpers\Helper::createTopBannerUrl($banner->banner_url);
                        if (isset($banner_url) && $banner_url != '' && $banner_url != 'javascript:void(0);') {
                            $cursor_style = 'cursor: pointer;';
                            $new_window = "true";
                        } else {
                            $banner_url = 'javascript:void(0);';
                            $cursor_style = '';
                            $new_window = "false";
                        }
                        $img = config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->banner_type . '?d=' . $dimension;
                    ?>
                    @if ($i == 0)
                        <div class="m-sd3">
                            <img class="trigger_event" src="{{ $img }}" alt="Homepage Hero Banner - {{ $i }}"
                                style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with Hero Banner"
                                data-galabel="Clicked on Hero Banner | Url: {{ $banner_url }}"
                                data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}"
                                data-ibu="false">
                        </div>
                    @else
                        <div class="m-sd3 slick-slide">
                            <img class="trigger_event" data-lazy="{{ $img }}" alt="Homepage Hero Banner - {{ $i }}"
                                style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) }} Page"
                                data-gaaction="Interacted with Hero Banner"
                                data-galabel="Clicked on Hero Banner | Url: {{ $banner_url }}"
                                data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}"
                                data-ibu="false">
                        </div>
                    @endif
                    <?php
                    $i++;
                } ?>
            </div>
        </div>
    </div>
</section>
