<section class="content-section offers-pl1">
	<div class="container-page" id="popular">
		<p class="home_heading_txt">Techjockey for Business</p>
		<div class="home_1el_slider slider-ga-event" data-gaaction="Interacted with Techjockey for Business">
			@php
			$msc = 0;
			@endphp
			@foreach ($home_data['business_arr'] as $pa)
				@php
				$pop_img = !empty($pa['img']) ? asset('assets/images/V2_img/business-section/'. $pa['img']) : config('constants.DEFAULT_IMAGE'); 
				@endphp
				@if (($msc % 4) == 0)
					<div>
				@endif
				@if (($msc % 2) == 0)
					<div class="esy-get">
				@endif
				<div class="col-md-6">
				<a href="{{ !empty($pa['link']) ? $pa['link'] : '#' }}">
					<div class="get-mj trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Techjockey for Business" data-galabel="{{ $pa['link'] }}">
						<img alt="cat_icon" class="lazyload" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $pop_img }}" onerror="imgError(this,'cat_icon')">
					</div>
				</a>

				</div>
				@if ($msc > 0 && (($msc + 1) % 2) == 0)
					</div>
				@endif
				@if ($msc > 0 && (($msc + 1) % 4) == 0)
					</div>
				@endif
				@php
				$msc++;
				@endphp
			@endforeach
			@if (($msc % 2) != 0)
				</div>
			@endif
			@if (($msc % 4) != 0)
				</div>
			@endif
		</div>
	</div>
</section>
