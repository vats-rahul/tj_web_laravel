<section class="content-section category-tabs-1" id="popular-category-comparison">
    <div class="container-page">
        <div class="col-md-12 home3">
            <div class="col-md-12 pd1-pl">
                <div class="text-1-best-10 pd1-pl">
                    @if($page_type == 'home')
                        <p class="software-tallyPrime home_heading_txt">Popular Comparison by Category</p>
                    @else
                        <h3>Popular Comparison by Category</h3>
                    @endif
                </div>
                <div class="tab">
                    @php
                    $category_data = [];
                    @endphp
                    @foreach ($categorywise_compare as $key => $data)
                        <button class="tablinks comp-cat-tab {{ ($key == 0) ? 'active' : '' }}" data-pos="{{ $key }}" >
                            @foreach ($data as $name => $value)
                                @php
                                array_push($category_data, $value);
                                echo $name;
                                @endphp
                            @endforeach
                        </button>
                    @endforeach
                </div>
                <div class="category-contents">
                    @foreach ($category_data as $key => $data_arr)
                        <div id="cat-tabcontent{{ $key }}" class="tabcontent {{ ($key == 0) ? 'active' : '' }}">
                            <div class="col-md-12 {{ ($key == 0) ? 'popular-category-slider_0' : '' }} slider-ga-event" data-gaaction="Interacted with Compare Module" data-galabel="Popular Comparison by Category | ">
                                @foreach ($data_arr as $value)
                                    @php
                                    $data = \App\Helpers\Helper::getCompareProductsArray($value, $product_details);
                                    @endphp
                                    @if (!empty($data[0]) && !empty($data[1]))
                                        @include('custom.web.components.home.compare_product_card', ['p1' => $data[0], 'p2' => $data[1], 'gaLabel' => 'Popular Comparison by Category | '])
                                    @endif
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
