<script type="text/javascript">
    {!! file_get_contents('assets/js/jquery.min.js') !!}
    {!! file_get_contents('assets/js/lazysizes.min.js') !!}
    {!! file_get_contents('assets/js/common/jquery.growl.js') !!}
</script>

@if($slider)
    <script type="text/javascript" id="tj-slick-js">
        {!! file_get_contents('assets/js/common/slick.min.js') !!}
    </script>
@endif

<script type="text/javascript" src="assets/js/common/api.js"></script>
<script type="text/javascript" src="assets/js/web/common.js?version=2.3.4"></script>

<script>
    $(function() {
        var socialData = '{{ session()->get('social_login_data') }}';
        if (socialData != "") {
            tj.events.clevertap.loginRegisterEvent(socialData);
        }
    });

    var tj = tj || {};

    tj.currentUrl = "{{ url()->current() }}";
    tj.cai = "{{ env('CLEVERTAP_ACCOUNT_ID') }}";
    tj.envUrl = "{{ env('HTTP_SCHEME') }}://{{ env('APP_URL') }}";
    tj.moengage_debug_mode = "{{ env('MOENGAGE_DEBUG_LOG') }}";
    tj.cdnUrl = "{{ config('constants.CDN_ASSETS') }}";

    $(document).on('click', '.openAcdCampForm', function() {
        $('#acdCampaignPopupModal').addClass('display_modal');
    });

    $('#acdCampModalClose').click(function() {
        $('#acdCampaignPopupModal').removeClass('display_modal');
    });
</script>

