<div class="menu-icon">
    <span class="toggle_nav"><img src="{{ config('constants.CDN_ASSETS') }}/images/V2_img/res-1.jpg"></span>
</div>

<div class="ris-ponsive-menu tjin" id="nav_menu_cont">
    <div class="nav_close">
        <span class="close" data-target="nav_menu_cont" data-call="toggleClass">
            <a href="javascript:void(0);">
                <img src="{{ config('constants.CDN_ASSETS') }}/images/V2_img/close_white.svg" alt="close">
            </a>
        </span>
    </div>
    <div class="mobile_nav_outer1">
        <div class="mobile_nav_header">
                <div class="media">
                    <div class="media-body">
                        @if ($customer_id != '')
                        <a class="nav-l" href="{{ url('account') }}">
                            <h4 class="media-heading mobile_username">{{ $name }} </h4>
                            <p class="mobile_user_email">{{ $email }}</p>
                        </a>
                        @else
                        <p class="mobile_view_profile"><a href="javascript:void(0);" class="toggle_login" onclick="track_event_new('Left Menu in Mobile', 'Click on login-signup')">Login /Signup </a></p>
                        <span class="line-cc"> </span>
                        <div class="social-icon-tabs">
                            <a href="javascript:void(0);" class="facebook-class loginBtn"> <img alt="fb_drawer" src="{{ config('constants.ASSETS') . 'images/mobile/fb_drawer.svg' }}"></a>  
                            <a href="{{ url('social/login_authen', ['state' => base64_encode($currentUrl)]) }}" class="facebook-class"><img alt="google_drawer" src="{{ config('constants.ASSETS') . 'images/mobile/google_drawer.svg' }}"></a>
                        </div>
                        @endif
                    </div>
                </div>
        </div>
        <nav class="navigation">
            <span class="dic1"> Discover & Buy </span>
            <ul class="mainmenu">
                <li>
                <a href="{{ url('') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Home">
                    <img alt="Home" src="{{ config('constants.ASSETS') . 'images/V2_img/home_20.svg' }}" class="free-img">
                    Home
                </a>
                </li>
                <li>
                    <p class="toggle-sub-menu">
                        <img alt="Free IT Consultation" src="{{ config('constants.ASSETS') . 'images/V2_img/talktous_20.svg' }}" class="free-img">
                        Free IT Consultation 
                        <span class="open-nav"></span>
                    </p>
                    <ul class="submenu">
                        <li>
                            <a href="{{ url('') }}" class="trigger_event" data-gacat="Left Menu Consultation" data-gaaction="Free IT Solution" data-galabel="Request A Call Back">Request A Call Back</a>
                        </li>
                        <li>
                            <a href="{{ url('') }}" class="trigger_event" data-gacat="Left Menu Consultation" data-gaaction="Free IT Solution" data-galabel="Call Now">Call now</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p class="toggle-sub-menu"><img alt="Categories" src="{{ config('constants.ASSETS'). 'images/V2_img/categories_20.svg' }}"
                            class="free-img"> Categories <span class="open-nav"></span> </p>
                            <ul class="submenu">
                                <li><a href="{{ url('category/retail-billing-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Retail Billing Software">Retail Billing Software</a></li>
                                <li><a href="{{ url('category/accounting-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Accounting Software">Accounting Software</a></li>
                                <li><a href="{{ url('category/hr-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="HR Software">HR Software</a></li>
                                <li><a href="{{ url('category/crm-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="CRM Software">CRM Software</a></li>
                                <li><a href="{{ url('category/erp-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="ERP Software">ERP Software</a></li>
                                <li><a href="{{ url('category/video-editing-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Video Editing Software">Video Editing Software</a></li>
                                <li><a href="{{ url('category/inventory-management-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Inventory Management Software">Inventory Management Software</a></li>
                                <li><a href="{{ url('category/it-asset-management-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Asset Management Software">Asset Management Software</a></li>
                                <li><a href="{{ url('category/payroll-management-software'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="Payroll Management Software">Payroll Management Software</a></li>
                                <li><a href="{{ url('categories'); }}" class="trigger_event"
                                        data-gacat="Left Menu Categories" data-gaaction="Categories"
                                        data-galabel="All Categories">All Categories</a></li>
                    </ul>
             
                </li>
                <li>
                    <p class="toggle-sub-menu"><img alt="Categories" src="{{ config('constants.ASSETS'). 'images/V2_img/icon_enterprise.svg' }}"
                            class="free-img">
                        For Enterprise
                        <span class="open-nav"></span>
                    </p>

                    <ul class="submenu">
                        <li><a href="https://www.techjockey.com/enterprise/" class="trigger_event">Explore Solutions</a>
                        </li>
                        <li><a href="https://www.techjockey.com/enterprise-blog/" class="trigger_event">Enterprise
                                Resources</a></li>

                    </ul>
                </li>
                <li>
                    <a href="{{ url('business-functions'); }}" class="trigger_event"
                        data-gacat="Left Menu in Mobile" data-gaaction="Click on Departments"><img alt="Departments"
                            src="{{ config('constants.ASSETS') . 'images/mobile/departments_20.svg'; }}" class="free-img"> Departments
                    </a>
                </li>
                <li>
                    <a href="{{ url('industries'); }}" class="trigger_event" data-gacat="Left Menu in Mobile"
                        data-gaaction="Click on Industries"><img alt="Industries"
                            src="{{ config('constants.ASSETS'). 'images/V2_img/industries_20.svg'}}" class="free-img"> Industries </a>
                </li>
                <li>
                    <a href="{{ url('offers'); }}" class="trigger_event" data-gacat="Left Menu in Mobile"
                        data-gaaction="Click on Hot Deals"><img alt=" HotDeals " src="{{ config('constants.ASSETS'). 'images/V2_img/offers.svg' }}"
                            class="free-img"> Hot Deals </a>
                </li>
                <li>
                    <a href="{{ url('videos'); }}" class="trigger_event"
                        data-gacat="<?= ucfirst($pageType); ?> Page" data-gaaction="Interacted with Hamburger Menu"
                        data-galabel="Clicked on Videos | <?= $page; ?>"><img alt="Video_Icon_Menu"
                            src="{{ config('constants.ASSETS'). 'images/V2_img/Video_Icon_Menu.svg' }}" class="free-img"> Videos <img
                            src="{{ config('constants.ASSETS'). 'images/V2_img/new_icon.svg' }}" alt="new_icon" class="video-link"></a>
                </li>
                <li>
                    <a href="{{ url('blog'); }}" class="trigger_ga4_event" data-gacat="content_engagement"
                        data-gaaction="Interacted with Hamburger Menu"
                        data-galabel="Clicked on Blog | <?= $page; ?>"><img alt="Blog Icon Menu"
                            src="{{ config('constants.ASSETS'). 'images/V2_img/blog_icon_menu.svg'}}" class="free-img"> Blog </a>
                </li>
                <li>
                    <a href="{{ url('compare'); }}" class="trigger_event" data-gacat="Left Menu in Mobile"
                        data-gaaction="Click on Compare Solutions"><img alt="Compare"
                            src="{{ config('constants.ASSETS') . '/images/mobile/compare_20.svg'; }}" class="free-img"> Compare
                        Solutions </a>
                </li>
                <li>
                    <a href="{{ env('HTTP_SCHEME') . '://' . env('ESELLER_URL'); }}" class="trigger_event"
                        data-gacat="Become a Seller" data-gaaction="Clicked on top Become Seller"><img alt="Seller"
                            src="{{ config('constants.ASSETS') . '/images/mobile/sellwithus_20.svg'; }}" class="free-img"> Become a
                        Seller</a>
                </li>
            </ul>
            <span class="dic1"> MY ACCOUNT </span>
            <ul class="mainmenu">
                <li>
                    <a href="{{ url('account/order') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on My Orders">
                        <img alt="myorders_20" src="{{ config('constants.ASSETS') . '/images/mobile/myorders_20.svg' }}">
                        My Orders
                    </a>
                </li>
                <li>
                    <a href="{{ url('account/my_calls') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on My Call">
                        <img alt="myaccount" src="{{ config('constants.ASSETS') . '/images/mobile/Call-myaccount.svg' }}" class="free-img">
                        My Call
                    </a>
                </li>
                <li>
                    <a href="{{ url('account/my_demo') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on My Demo">
                        <img alt="demo_disabled" src="{{ config('constants.ASSETS') . '/images/mobile/demo_disabled.svg' }}" class="free-img">
                        My Demo
                    </a>
                </li>
                <li>
                    <a href="{{ url('wishlist') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on My Wishlist">
                        <img alt="Wishlist" src="{{ config('constants.ASSETS') . '/images/mobile/wishlist_20.svg' }}" class="free-img">
                        My Wishlist
                    </a>
                </li>
                <li>
                    <a href="{{ url('account') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on My Profile">
                        <img alt="Profile" src="{{ config('constants.ASSETS') . '/images/mobile/profile_20.svg' }}" class="free-img">
                        My Profile
                    </a>
                </li>
                <li>
                    <a href="{{ url('account/review_order') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Reviews">
                        <img alt="Reviews" src="{{ config('constants.ASSETS') . '/images/mobile/reviews_20.svg' }}" class="free-img">
                        Reviews
                    </a>
                </li>
                <li>
                    <a href="{{ url('account/address') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Saved Address">
                        <img alt="Address" src="{{ config('constants.ASSETS') . '/images/mobile/address_20.svg' }}" class="free-img">
                        Saved Address
                    </a>
                </li>
            </ul>
            <span class="dic1"> OTHERS </span>
            <ul class="mainmenu">
                <li>
                    <a href="{{ env('HTTP_SCHEME') . '://' . env('BLOG_URL') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Blogs">
                        <img alt="Blogs" src="{{ config('constants.ASSETS') . '/images/mobile/blogs_20.svg' }}" class="free-img">
                        Blogs
                    </a>
                </li>

                <li>
                    <p class="toggle-sub-menu">
                        <img alt="myorders_20" src="{{ config('constants.ASSETS') . '/images/mobile/myorders_20.svg' }}" class="free-img">
                        Need Help?
                        <span class="open-nav"></span>
                    </p>
                    <ul class="submenu">
                        <li>
                            <a href="{{ url('company/help') }}" class="trigger_event" data-gacat="Left Menu Help" data-gaaction="Click on Need Help" data-galabel="FAQs">Help & Support</a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=917399949494&text=Hi%20I%20need%20help%20regarding%20something" class="trigger_event" data-gacat="Left Menu Help" data-gaaction="Click on Need Help" data-galabel="Whatsapp">Whatsapp</a>
                        </li>
                        @php
                            $TalkExpUrl = 'acd?product_id=' . config('constants.DEFAULT_PRODUCT_ID') . '&action=TalkToTechExpert&referer=' . urlencode($currentUrl);
                        @endphp
                        <li>
                            <a href="{{ url($TalkExpUrl) }}" class="trigger_event" data-gacat="Left Menu Help" data-gaaction="Click on Need Help" data-galabel="Call Us">Call Us</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="{{ url('company/privacy-policy') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Privacy">
                        <img alt="Privacy" src="{{ config('constants.ASSETS') . 'images/V2_img/categories_20.svg' }}" class="free-img">
                        Privacy
                    </a>
                </li>

                <li>
                    <a href="{{ url('company/contact-us') }}" class="trigger_event" data-gacat="Left Menu in Mobile" data-gaaction="Click on Contact Details">
                        <img alt="contact_20" src="{{ config('constants.ASSETS') . '/images/mobile/contact_20.svg' }}" class="free-img">
                        Contact Details
                    </a>
                </li>
            </ul>

        </nav>
    </div>
</div>


<script type="text/javascript">
tj.loadScript('tj-fb-js', tj.baseUrl + 'assets/js/facebook-login.js')
    .then(() => {})
    .catch(() => {});

$('.toggle_nav').click(function() {
    tj.toggleClass('nav_menu_cont', 'tjin');
    $('html').addClass('fixed_height');
    $('#cart-summary-cont').removeClass('tjin');
});

$('.toggle_login').click(function() {
    $("#login_signup_screen,#email_login_screen, #login_otp_screen, #forget_password_screen").addClass(
        "hide_login_screen_fragments");
    $("#phone_login_screen").removeClass("hide_login_screen_fragments");
    tj.toggleClass('nav_menu_cont', 'tjin');
    if (tj.he['login_popup'] != true) {
        tj.generateHeaderNavElement('login_popup', 'body');
        tj.he['login_popup'] = true;
    } else {
        tj.toggleModal('log_reg_popup');
    }

    $('html').addClass('fixed_height');
    tj.events.clevertap.clevertpLoginClick('Left Menu', 'mWeb');
    tj.events.gaEvents('Login/SignUp Process', '', 'NA');
});

$('.toggle-sub-menu').click(function() {
    $(this).next('ul').toggleClass('active');
    $(this).toggleClass('active-nav-item');
});
</script>