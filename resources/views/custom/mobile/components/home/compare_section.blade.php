<section class="content-section">
    <div class="container-page">
        <div class="col-md-12">
            @if(!empty($trending_compare))
                @include('custom.mobile.components.home.trending_section', ['product_details' => $compare_product_details])
            @endif
            @if(!empty($categorywise_compare))
                @include('custom.mobile.components.home.popular_category_section', ['product_details' => $compare_product_details])
            @endif
        </div>
    </div>
</section>
