@php
    $p1_img = !empty($p1->image) ? config('constants.DIR_FS_PRODUCT_IMAGE') . $p1->image.'?d=90' : config('constants.DEFAULT_IMAGE');
    $p2_img = !empty($p2->image) ? config('constants.DIR_FS_PRODUCT_IMAGE') . $p2->image.'?d=90' : config('constants.DEFAULT_IMAGE');
@endphp

<div class="col-md-12">
    <div class="box-md-d1">
        <div class="trending-comparison1">
            <div class="my-bl1">
                <img alt="product" class="imgid_{{ $p1->product_id }} lazyload product_img" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $p1_img }}" onerror="imgError(this,'prod')">
            </div>
            <a href="{{ url('detail/' . $p1->product_slug) }}" class="trigger_event" data-gacat="{{ ($page_type == 'home') ? 'Home page' : 'Compare Page' }}" data-gaaction="Interacted with Compare Module" data-galabel="{{ $gaLabel }}Clicked on product Name | {{ $p1->product_name }}" ><p>{{ $p1->product_name }}</p></a>
            <a href="{{ url('brand/' . $p1->brand_slug) }}"><p class="flob-sp1 trigger_event" data-gacat="{{ ($page_type == 'home') ? 'Home page' : 'Compare Page' }}" data-gaaction="Interacted with Compare Module" data-galabel="{{ $gaLabel }}Clicked on Brand Name | {{ $p1->brand_name }}">{{ $p1->brand_name }}</p></a>
        </div>
        <div class="line-vs">
            <hr class="vs-hr">
            <span class="vs_compare-new2">VS</span>
        </div>
        <div class="trending-comparison2">
            <div class="my-bl1">
                <img alt="product" class="imgid_{{ $p2->product_id }} lazyload product_img" src="{{ config('constants.DEFAULT_IMAGE') }}" data-src="{{ $p2_img }}" onerror="imgError(this,'prod')">
            </div>
            <a href="{{ url('detail/' . $p2->product_slug) }}" class="trigger_event" data-gacat="{{ ($page_type == 'home') ? 'Home page' : 'Compare Page' }}" data-gaaction="Interacted with Compare Module" data-galabel="{{ $gaLabel }}Clicked on product Name | {{ $p2->product_name }}" ><p>{{ $p2->product_name }}</p></a>
            <a href="{{ url('brand/' . $p2->brand_slug) }}"><p class="flob-sp1 trigger_event" data-gacat="{{ ($page_type == 'home') ? 'Home page' : 'Compare Page' }}" data-gaaction="Interacted with Compare Module" data-galabel="{{ $gaLabel }}Clicked on Brand Name | {{ $p2->brand_name }}">{{ $p2->brand_name }}</p></a>
        </div>
        <div class="com-pl1">
            <a href="{{ url('compare/' . $p1->product_slug . '-vs-' . $p2->product_slug) }}" class="trigger_event" data-gacat="{{ ($page_type == 'home') ? 'Home page' : 'Compare Page' }}" data-gaaction="Interacted with Compare Module" data-galabel="{{ $gaLabel }}Clicked on Compare | {{ $p1->product_name . ' vs ' . $p2->product_name }}">Compare</a>
        </div>
    </div>
</div>
