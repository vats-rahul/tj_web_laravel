<section class="content-section comparison-p1 category-tabs-1 mob-lik-tab1">
    <div class="col-md-12 pd1-pl">
        <div class="text-1-best-10">
            @if ($page_type == 'home')
                <p class="ext1 home_heading_txt">Popular Comparison by Category</p>
            @else
                <h3>Popular Comparison by Category</h3>
            @endif
        </div>
        <div class="tab popular-cat-tab-mob-nav-slider">
            @php $category_data = []; @endphp
            @foreach ($categorywise_compare as $key => $data)
                <button class="tablinks comp-cat-tab {{ ($key == 0) ? 'active' : '' }}" data-pos="{{ $key }}">
                    @foreach ($data as $name => $value)
                        @php array_push($category_data, $value); @endphp
                        {{ $name }}
                    @endforeach
                </button>
            @endforeach
        </div>
        <div class="mob-category-contents">
            @foreach ($category_data as $key => $data_arr)
                <div id="cat-tabcontent{{ $key }}" class="tabcontent {{ ($key == 0) ? 'active' : '' }}">
                    <div class="col-md-12 {{ ($key == 0) ? 'popular-category-slider_0' : '' }} slider-ga-event" data-gaaction="Interacted with Compare Module" data-galabel="Popular Comparison by Category | ">
                        @foreach ($data_arr as $value)
                            @php
                                $data = \App\Helpers\Helper::getCompareProductsArray($value, $product_details);
                            @endphp
                            @if (!empty($data[0]) && !empty($data[1]))
                                @include('custom.mobile.components.home.compare_product_card', ['p1' => $data[0], 'p2' => $data[1], 'gaLabel' => 'Popular Comparison by Category | '])
                            @endif
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
