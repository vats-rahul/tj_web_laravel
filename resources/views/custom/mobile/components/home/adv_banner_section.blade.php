<section class="content-section offers-pl1">
    <div class="container-page">
        <div class="slider-get">
            <div class="col-md-12">
                <div class="sl-sd1 top-adv-banner slider-ga-event" data-gaaction="Interacted with Top Banner">
                    @php $i = 1; @endphp
                    @foreach ($adv_banner as $banner)
                        @php
                            $banner_url = \App\Helpers\Helper::createTopBannerUrl($banner->banner_url);
                            if (isset($banner_url) && $banner_url != '' && $banner_url != 'javascript:void(0);') {
                                $cursor_style = 'cursor: pointer;';
                                $new_window = "true";
                            } else {
                                $banner_url = 'javascript:void(0);';
                                $cursor_style = '';
                                $new_window = "false";
                            }
                        @endphp
                        @if ($i < 2)
                            <div class="adv_banner_cont">
                                <img class="trigger_event" src="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->banner_type . '?d=' . $dimension }}" alt="{{ $page_name }} Product List Top Banner - {{ $i }}" style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) . ' Page' }}" data-gaaction="Interacted with Top Banner" data-galabel="Banner {{ $i }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                            </div>
                        @else
                            <div class="adv_banner_cont">
                                <img alt="Banner" class="trigger_event" data-lazy="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->banner_type . '?d=' . $dimension }}" style="{{ $cursor_style }}" data-gacat="{{ ucfirst($page_type) . ' Page' }}" data-gaaction="Interacted with Top Banner" data-galabel="Banner {{ $i }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                            </div>
                        @endif
                        @php $i++; @endphp
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
