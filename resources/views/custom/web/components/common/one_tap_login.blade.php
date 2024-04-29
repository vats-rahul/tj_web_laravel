@php
    if(isset($_COOKIE['g_state']) && !isset($_COOKIE['g_state_tj'])){
        setcookie('g_state_tj', 1, 0, "/");
        setcookie('g_state', "", time() - 36000, "/");
    }

    $customer_id = session('customer_id');
@endphp

@if(empty($customer_id))
    <div id="g_id_onload"
        data-client_id="957761044844-8hjifas65g6bvdq2p4lp1t2q25vihvf1.apps.googleusercontent.com"
        data-your_own_param_1_to_login="{{ current_url_query_string() }}"
        data-login_uri="{{ url('social/one_tap_login') }}"
        data-cancel_on_tap_outside="false">
    </div>
    <script>
        $(document).ready(function(){
            var google_login_error = "{{ session('google_login_error') }}";
            if(google_login_error != ""){
                $.growl.error({message: google_login_error});
            }
        });
    </script>
@endif
