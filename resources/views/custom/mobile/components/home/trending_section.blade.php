<section class="content-section comparison-p1">
    <div class="col-md-12 pd1-pl">
        <div class="text-1-best-10">
            @if($page_type == 'home')
                <p class="ext1 home_heading_txt">Trending Product Comparison</p>
            @else
                <h3>Trending Product Comparison</h3>
            @endif
        </div>
    </div>
    <div class="col-md-12">
        <div class="trending-p1 trending-compare-product-slider slider-ga-event"
            data-gaaction="Interacted with Compare Module" data-galabel="Trending Product Comparison | ">
            @foreach ($trending_compare as $value)
                @php
                    $data = \App\Helpers\Helper::getCompareProductsArray($value, $product_details);
                @endphp
                @if (!empty($data[0]) && !empty($data[1]))
                    @include('custom.mobile.components.home.compare_product_card', ['p1' => $data[0], 'p2' => $data[1], 'gaLabel' => 'Trending Product Comparison | '])
                @endif
                @php
                    $data = [];
                @endphp
            @endforeach
        </div>
    </div>
</section>
