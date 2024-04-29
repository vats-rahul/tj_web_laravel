<section class="content-section test-min-slidr-home">
    <div class="testimonila-container">
        <div class="testimonila_bc1">
            <div class="col-md-12 home_1el_slider">
                @foreach ($testimonials as $tl)
                    @php
                        $imageSrc = isset($tl->image) ? config('constants.DIR_FS_TECHJOCKEY_IMAGES') . 'testimonials/' . $tl->image : config('constants.DEFAULT_IMAGE');
                    @endphp
                    <div class="text-slider-mi">
                        <div class="col-md-3">
                            <div class="test-img1-mi">
                                <img class="lazyload" src="{{ $imageSrc }}"
                                    data-src="{{ $imageSrc }}"
                                    alt="Software review {{ $tl->client_name }}"
                                    title="Software review by {{ $tl->client_name }}"
                                    onerror="imgError(this,'testimonial');">
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="test-img2-mi">
                                <p class="text-minh1">“{{ $tl->description }}”</p>
                                <p class="text-minh2">{{ $tl->client_name }}</p>
                                <p class="text-minh3">{{ $tl->company_name }}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
