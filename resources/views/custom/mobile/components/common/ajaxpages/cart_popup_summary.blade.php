<style type="text/css">
.rem3 {
    width: 39%;
    display: inline-block;
    text-align: center;
    background: #6100c1;
    border-radius: 3px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 6px !important;
    font-size: 15px;
    color: #fff !important;
}

.rem4 {
    width: 36%;
    display: inline-block;
    text-align: center;
    border: 1px solid #6100c1;
    border-radius: 3px;
    font-size: 15px;
    margin-right: 15px;
    padding: 6px !important;
    color: #6100c1 !important;
    height: 20px;
}

.col-img2 {
    position: absolute;
    bottom: -40px;
    width: 100%;
    float: left;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    height: 30px;
}

.col-img1 {
    border-bottom: 1px solid #ccc;
    padding-top: 9px;
}

.col-img1 {
    float: left;
}


.text-popup1 h2 {
    font-size: 15px;
    margin-top: 10px;
}

.text-popup1 p {
    font-size: 13px;
    color: #afafaf;
    line-height: 21px !important;
}

.rem1 {
    border: 1px solid #d3d3d4;
    border-radius: 4px;
    text-align: center;
    font-size: 11px;
    height: 16px !important;
    display: inline-block;
    width: 30%;
}

.rem2 {
    margin-left: 4px;
    border: 1px solid #d3d3d4;
    border-radius: 4px;
    text-align: center;
    font-size: 11px;
    height: 16px !important;
    display: inline-block;
    width: 49%;
}

.dropdown-content a {
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: normal;
}

.cart-2 .dropdown-content a:hover {
    background-color: #472dc2;
    color: #fff;
}

.cart-2 .dropdown-content {
    top: 20px;
    left: 0px;
    padding: 0px !important;
}

.cart-2 .dropdown-content img {
    max-width: 72%;
    height: 80px;
}

.cart-2 .dropdown-content {
    left: -313px;
    top: 28px;
    float: left;
    width: 390px;
    border-radius: 4px;
    height: 300px;
}

.mob-none1 {
    display: none;
}

.bac1-pi2 {
    width: 100%;
}

.col-img1 img {
    width: 100%;
}
.product_container{
    overflow-x: hidden;
    overflow-y: auto;
    height: 290px;
}
.empty_cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    width: 100vw;
}

.empty_cart img {height: 100% !important;}

.cart_img_cont {text-align: center;}

#cart-summary-cont .product_container::-webkit-scrollbar {
    width: 3px;
    background-color: #472dc2;
}
#cart-summary-cont .product_container::-webkit-scrollbar-track-piece {
    background-color: #472dc2;
}
#cart-summary-cont .product_container::-webkit-scrollbar-thumb {
    background-color: #472dc2;
}
</style>

@if ($cart_total_items > 0)
    <div class="product_container">
        @foreach ($cart_contents as $item)
            @php
                $gst_rate = $item['taxes'] ?? 0;
                $gst = ($gst_rate * $item['subtotal']) / 100;
                $subtotal = round($gst + $item['subtotal'], env('PRICE_ROUND_OFF_DIGITS'));
                $plan_name = isset($item['plan_name']) && $item['plan_name'] != '' ? ' (' . $item['plan_name'] . ')' : "";
            @endphp

            <div class="col-img1">
                <div class="col-md-4 cart_img_cont">
                    <img src="{{ $item['image'] }}" alt="{{ $item['name'] }}" onerror="imgError(this,'prod');">
                </div>
                <div class="col-md-8">
                    <div class="text-popup1">
                        <a href="{{ url('detail/' . $item['product_slug']) }}">
                            {{ $item['name'] . str_replace(str_split('_\\/:*?"<>|.()'), ' ', $plan_name) }}     
                        </a>
                        <p>₹{{ $subtotal }}</p>
                        <a href="javascript:void(0);" class="rem1 remove_cart_pro" data-rowid="{{ $item['rowid'] }}" data-proid="{{ $item['id'] }}"> Remove </a>
                        <a href="javascript:void(0);" class="rem2 wish_trigger" data-rowid="{{ $item['rowid'] }}" data-proid="{{ $item['id'] }}" data-proname="{{ $item['name'] }}" data-source="cart"> Move To Wishlist</a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <div class="col-img2">
        @php
            $lastProduct = end($cart_contents);
            $lastSlug = $lastProduct["product_slug"];

            $buyNowItems = array_filter($cart_contents, function($item) {
                return $item['set_buy_now'] == 1;
            });
            $step = !empty($buyNowItems) ? '?step=payment' : '';
        @endphp
        <a href="{{ url('ordernow/' . $lastSlug) }}" class="rem3"> View Cart  </a>
        <a href="{{ url('ordernow/' . $lastSlug . $step) }}" class="rem4"> Checkout</a>
    </div>
@else
    <div class="empty_cart">
        <img src="{{ asset('assets/images/mobile/items-cart.png') }}" alt="empty cart" width="120" height="120">
        <span>Your Cart is Empty!</span> 
    </div>
@endif

<script>
    $(document).ready(function() {
        $('.remove_cart_pro').click(function(){
            $('#cart-summary-cont').css('display','none');
            tj.generateHeaderNavElement('cart_confirmation_popup', 'body');

            var p = {};
            p.rowid = $(this).data('rowid');
            p.cartid = $(this).data('proid');

            $(document).on('click','.remove_cart_pro_cta',function () {

                var action = $(this).data('action');
                @if (isset($tj))
                    var baseUrl = "{{ $tj->baseUrl }}";
                @else
                    var baseUrl = ""; // Set your default base URL here
                @endif

                if(action == 'remove'){
                    tj.events.gaEvents('Confirmation Popup', 'Click on Remove');
                    tj.removeCartPro(p, baseUrl);
                } else {
                    tj.events.gaEvents('Confirmation Popup', 'Click on Move to Wishlist');
                    tj.handleWishlist(p.cartid, p.rowid, 'cart');
                }
            });
        });
    });

    // Move this function outside document.ready
    tj.removeCartPro = function(param, baseUrl){
        var url = baseUrl + 'cart/remove_from_cart';
        tj.api.AjaxRequest('POST', url, function(data){
            data.success && window.location.reload();
        },onError, onComplete, param);
    }
</script>
