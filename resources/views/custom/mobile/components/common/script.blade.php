<script type="text/javascript">
    {!! file_get_contents('assets/js/jquery.min.js') !!}
    {!! file_get_contents('assets/js/common/api.js') !!}
    {!! file_get_contents('assets/js/mobile/common.js') !!}
</script>

<script type="text/javascript" src="{{config('constants.CDN_ASSETS')}}/js/lazysizes.min.js"></script>


@if($slider)
    <script type="text/javascript" id="tj-slick-js">
        {!! file_get_contents('assets/js/common/slick.min.js') !!}
    </script>
@endif

<script>
    $(function () {
        var socialData = '{{ session('social_login_data') }}';
        if (socialData != "") {
            tj.events.clevertap.loginRegisterEvent(socialData);
        }
    });

    var tj = tj || {};

    tj.currentUrl = '{{ url()->current() }}';
    tj.cai = '{{ env('CLEVERTAP_ACCOUNT_ID') }}';
    tj.envUrl = '{{ env('APP_URL') }}';
    tj.moengage_debug_mode = '{{ env('MOENGAGE_DEBUG_LOG') }}';
    tj.cdnUrl = '{{ asset('') }}';

    $(document).on('click','.openAcdCampForm', function() {
        $('#acdCampaignPopupModal').addClass('display_modal');
    });

    $('#acdCampModalClose').click(function(){
        $('#acdCampaignPopupModal').removeClass('display_modal');
    });
</script>

