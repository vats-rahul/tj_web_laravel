<section class="content-section test-min-slidr-home">
    <div class="testimonila-container">
        <!-- <h2>What People Say Who Buy Software From Techjockey</h2> -->
        <div class="col-md-12 home_3el_slider">
            @foreach ($testimonials as $tl)
            <div class="text-slider-mi">
                <div class="col-md-12">
                    <div class="test-img1-mi">
                        <img class="lazyload" src="{{ config('constants.DEFAULT_IMAGE')}}"
                            data-src="{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'testimonials/' . $tl->image }}"
                            alt="Software review {{ $tl->client_name }}"
                            title="Software review by {{ $tl->client_name }}"
                            onerror="imgError(this,'testimonial');">
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="test-img2-mi">
                        <p class="text-minh1">“{{ $tl->description }}”</p>
                    </div>
                </div>
                <div class="col-md-12 client-styling">
                    <div class="client_user_1">
                        <p class="text-minh2">{{ $tl->client_name }}</p>
                        <p class="text-minh3">{{ $tl->company_name }}</p>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
