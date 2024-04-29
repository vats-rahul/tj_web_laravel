<section class="content-section home-sar1">
    <div class="container-page ">
        <div class="col-md-12 home3">
            <div class="text-1-best-home brand_detailcard_category-3 prodt1 ">
                <p class="software-tallyPrime home_heading_txt topselling-products"> Top Selling Products</p>
                @include('custom.web.components.home.short_vertical_product_card', [
                    'product_list' => $top_selling_products['products'],
                    'ga_category' => 'Home Page',
                    'ga_action' => 'Top Selling Products'
                ])
            </div>
        </div>
    </div>
</section>