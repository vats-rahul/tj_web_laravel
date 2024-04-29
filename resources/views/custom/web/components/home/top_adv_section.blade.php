<section class="content-section slider-home11">
    <div class="container-page">
        <div class="col-md-12">
            <div class="slider1-1-best11 top-adv-banner homepage slider-ga-event" data-gaaction="Interacted with Top Banner">
                @php $i = 1; @endphp
                @foreach ($adv_banner as $banner)
                    @php
                        $banner_url = \App\Helpers\Helper::createTopBannerUrl($banner->banner_url);
                        $cursor_style = ($banner_url && $banner_url !== 'javascript:void(0);') ? 'cursor: pointer;' : '';
                        $new_window = ($banner_url && $banner_url !== 'javascript:void(0);') ? 'true' : 'false';
                    @endphp
                    <div class="col-md-4">
                        @if ($i < 3)
                            <div class="slider-home-1">
                                <img class="trigger_event" alt="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->$banner_type . '?d=' . $dimension }}" src="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->$banner_type . '?d=' . $dimension }}" data-gaaction="Interacted with Top Banner" data-galabel="Banner {{ $i }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                            </div>
                        @else
                            <div class="slider-home-1">
                                <img class="trigger_event" alt="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->$banner_type . '?d=' . $dimension }}" data-lazy="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'homepage_banner/' . $banner->$banner_type . '?d=' . $dimension }}" data-gaaction="Interacted with Top Banner" data-galabel="Banner {{ $i }}" data-gasimple="true" data-ganw="{{ $new_window }}" data-slug="{{ $banner_url }}" data-ibu="false">
                            </div>
                        @endif
                    </div>
                    @php $i++; @endphp
                @endforeach
            </div>
        </div>
    </div>
</section>
