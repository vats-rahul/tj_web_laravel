<link href="{{ config('constants.ASSETS') }}/css/mobile/footer-mobile.css?version=1.0" rel="stylesheet" />
@php
    $emptyMsg = session()->get('empty_cart');
@endphp

@if(isset($page_type) && $page_type != 'home')
    <section class="full-icon">
        <div class="container ">
            <div class="col-md-12">
                <div class="icon-box">
                    <ul>
                        <li>
                            <span class="listdetailsoftware">
                                <img src="{{ DEFAULT_IMAGE }}" data-src="{{ ASSETS . 'images/V2_img' }}/usp_1.svg" class="lazyload" alt="Secure Payments">
                            </span>
                            <span class="listdetaildemo">
                                15000+ <br>Software
                            </span>
                        </li>
                        <li>
                            <span class="listdetailsoftware">
                                <img src="{{ DEFAULT_IMAGE }}" data-src="{{ ASSETS . 'images/V2_img' }}/usp_2.svg" class="lazyload" alt="Secure Payments">
                            </span>
                            <span class="listdetaildemo">
                                Best Price<br>Guaranteed
                            </span>
                        </li>
                        <li>
                            <span class="listdetailsoftware">
                                <img src="{{ DEFAULT_IMAGE }}" data-src="{{ ASSETS . 'images/V2_img' }}/usp_3.svg" class="lazyload" alt="Secure Payments">
                            </span>
                            <span class="listdetaildemo">
                                Free Expert<br>Consultation
                            </span>
                        </li>
                        <li>
                            <span class="listdetailsoftware">
                                <img src="{{ DEFAULT_IMAGE }}" data-src="{{ ASSETS . 'images/V2_img' }}/usp_4.svg" class="lazyload" alt="Secure Payments">
                            </span>
                            <span class="listdetaildemo">
                                20 Lacs+ <br>Happy Customers
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
@endif

<section class="mobile-footer-section">
    <div class="mobile-dropdown-menu">
        <input type="checkbox" id="touch-1" checked="checked">
        <label for="touch-1" class="mobile-footer-heading">
            <span>
                <p>Popular Categories
                    <img src="{{'/assets/images/mobile/down-arrow.svg'}}"
                        class="crossRotate icon-properties" alt="Down Arrow icon">
                </p>
            </span>
        </label>
        <div class="mobile-footer-slider">
            <div class="mobile-footer-listings">
                <ul class="mobile-unordered-styles-1">
                    <li class="mobile-list-styles">
                        <a href="{{url('/category/stock-market-software')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Stock Market Software"
                            data-galabel="{{ url()->current() }}"><span>Stock Market Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/retail-billing-software')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Retail Billing Software"
                            data-galabel="{{ url()->current() }}"><span>Retail Billing Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/astrology-software')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Astrology Software"
                            data-galabel="{{ url()->current() }}"><span>Astrology Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/plagiarism-checker')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Plagiarism Checker"
                            data-galabel="{{ url()->current() }}"><span>Plagiarism Checker</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/pharma-software-for-retail-distribution')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Pharmacy Software"
                            data-galabel="{{ url()->current() }}"><span>Pharmacy Software</span></a>
                    </li>
                </ul>
                <ul class="mobile-unordered-styles-2">
                    <li class="mobile-list-styles">
                        <a href="{{url('category/hr-software')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on HR Software"
                            data-galabel="{{ url()->current() }}"><span>HR Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/accounting-software')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Accounting Software"
                            data-galabel="{{ url()->current() }}"><span>Accounting Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/payment-gateway')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Payment Gateway"
                            data-galabel="{{ url()->current() }}"><span>Payment Gateway</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/data-recovery-software')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Data Recovery Software"
                            data-galabel="{{ url()->current() }}"><span>Data Recovery Software</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('category/video-editing-software')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Video Editing Software"
                            data-galabel="{{ url()->current() }}"><span>Video Editing Software</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-dropdown-menu">
        <input type="checkbox" id="touch-2">
        <label for="touch-2" class="mobile-footer-heading">
            <p>For Businesses<img src="<?php url(); ?>/assets/images/mobile/down-arrow.svg"
                    class="crossRotate icon-properties" alt="Down Arrow icon"></p>
        </label>
        <div class="mobile-footer-slider">
            <div class="mobile-footer-listings">
                <ul class="mobile-unordered-styles-1">
                    <li class="mobile-list-styles">
                        <a href="{{url('media-sales')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Media Enquiries"
                            data-galabel="{{ url()->current() }}"><span>Advertise With Us</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{ env('HTTP_SCHEME') . '://' . env('BLOG_URL') . '/write-for-us'}}"
                            target="_blank" class="trigger_event" data-gacat="Footer"
                            data-gaaction="Click on Write with us" data-galabel="{{ url()->current() }}"><span>Write with
                                us</span></a>
                    </li>
                </ul>
                <ul class="mobile-unordered-styles-2">
                    <li class="mobile-list-styles">
                        <a href="https://esellerhub.techjockey.com/" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Sell With Us"
                            data-galabel="{{ url()->current() }}"><span>Sell With Us</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-dropdown-menu">
        <input type="checkbox" id="touch-3">
        <label for="touch-3" class="mobile-footer-heading">
            <p>Tools<img src="<?php url(); ?>/assets/images/mobile/down-arrow.svg"
                    class="crossRotate icon-properties" alt="Down Arrow icon"></p>
        </label>
        <div class="mobile-footer-slider">
            <div class="mobile-footer-listings">
                <ul class="mobile-unordered-styles-1">
                    <li class="mobile-list-styles">
                        <a href="{{ env('HTTP_SCHEME') . '://' . env('AM_URL')}}" target="_blank"
                            class="trigger_event" data-gacat="Footer" data-gaaction="Click on Asset Management"
                            data-galabel="{{ url()->current() }}"><span>Asset Management</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('compare')}}" target="_blank" class="trigger_event" data-gacat="Footer"
                            data-gaaction="Click on Compare Software" data-galabel="{{ url()->current() }}"><span>Compare
                                Software</span></a>
                    </li>
                </ul>
                <ul class="mobile-unordered-styles-2">
                    <li class="mobile-list-styles">
                        <a href="{{url('/tech-bandhu')}}" target="_blank"
                            class="tool_icons TA-icon trigger_event" data-gacat="Footer"
                            data-gaaction="Click on Tech Bandhu" data-galabel="{{ url()->current() }}"><span>Tech
                                Bandhu</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-dropdown-menu">
        <input type="checkbox" id="touch-4" checked="checked">
        <label for="touch-4" class="mobile-footer-heading">
            <p>About Techjockey<img src="<?php url(); ?>/assets/images/mobile/down-arrow.svg"
                    class="crossRotate icon-properties" alt="Down Arrow icon"></p>
        </label>
        <div class="mobile-footer-slider">
            <div class="mobile-footer-listings">
                <ul class="mobile-unordered-styles-1">
                    <li class="mobile-list-styles">
                        <a href="{{url('company/about-us')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on About us"
                            data-galabel="{{ url()->current() }}"><span>About us</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('company/contact-us')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Contact Us"
                            data-galabel="{{ url()->current() }}"><span>Contact Us</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a href="{{url('company/careers')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Careers"
                            data-galabel="{{ url()->current() }}"><span>Careers</span></a>
                    </li>
                </ul>
                <ul class="mobile-unordered-styles-2">
                    <li class="mobile-list-styles">
                        <a href="{{url('company/press')}}" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Press"
                            data-galabel="{{ url()->current() }}"><span>Press</span></a>
                    </li>
                    <li class="mobile-list-styles">
                        <a style="color:white" href="{{ env('HTTP_SCHEME') . '://' . env('BLOG_URL') . '/'}}"
                            target="_blank" rel="noopener" class="trigger_event" data-gacat="Footer"
                            data-gaaction="Click on Blogs" data-galabel="{{ url()->current() }}"><span>Blog</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-social-downloads">
        <div class="mobile-downloads">
            <p class="mobile-footer-heading-2">Download Techjockey Partner App<span></span></p>
            <div class="apptech_logo">
                <a href="https://apps.apple.com/in/app/techjockey-partner-app/id1600222063"
                    onclick="tj.events.gaEvents('Footer', 'Clicked on Play Store', location.href)">
                    <img src="{{ asset(config('constants.S3_ASSETS') . 'images/V4_img/apple-play-badge-tech.svg') }}"
                        alt="applogo"
                        title="applogo"
                        class="img-responsive playstore-logos lazyload" loading="lazy">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.vendor.space&hl=en_IN&gl=US&utm_source=tj_footer&utm_medium=website&utm_campaign=vendorappcta"
                    onclick="tj.events.gaEvents('Footer', 'Clicked on Play Store', location.href)">
                    <img src="{{ asset(config('constants.S3_ASSETS') . 'images/V4_img/google-play-badge-1.svg') }}"
                        alt="applogo"
                        title="applogo"
                        class="img-responsive playstore-logos lazyload" loading="lazy">
                </a>
                @if(strtolower(env('ENVIRONMENT')) == 'production')
                <a class="dmca-badge" href="https://www.dmca.com/Protection/Status.aspx?ID=fd3a5bb1-97dc-429d-8592-b3ce81559c17&amp;refurl=https://www.techjockey.com/"
                    rel="nofollow" title="DMCA.com Protection Status" class="dmca-badge playstore-logos">
                    <img class="dmca-img" src="{{ asset(config('constants.S3_ASSETS') . 'images/V4_img/dmcs_protected.svg') }}"
                        alt="DMCA.com Protection Status" loading="lazy">
                </a>
                <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                @endif
            </div>
        </div>
        <div class="mobile-horizontal-line"></div>
        <div class="mobile-social">
            <p class="mobile-footer-heading-2">Let’s Get Social</p>
            <ul class="mobile-social-icons">
                <li>
                    <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="nofollow noopener"
                        class="custom-icon trigger_event " data-gacat="Footer" data-gaaction="Click on facebook"
                        data-galabel="https://www.techjockey.com/">
                        <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Facebook-new.svg'; ?>"
                            data-src="https://www.techjockey.com/assets/new-assets/images/fb.svg"
                            class="lazyloaded facebook-hover" alt="facebook">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/techjockeydotcom/" target="_blank" rel="nofollow noopener"
                        class="custom-icon trigger_event instagram-hover" data-gacat="Footer"
                        data-gaaction="Click on instagram" data-galabel="https://www.techjockey.com/">
                        <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/instagram-new.svg'; ?>"
                            data-src="https://www.techjockey.com/assets/new-assets/images/insta.svg" class="lazyloaded"
                            alt="instagram">
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/TechJockeys" target="_blank" rel="nofollow noopener"
                        class="custom-icon trigger_event twitter-hover" data-gacat="Footer"
                        data-gaaction="Click on twitter" data-galabel="https://www.techjockey.com/">
                        <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Twitter-new.svg'; ?>"
                            data-src="https://www.techjockey.com/assets/new-assets/images/twitter.svg"
                            class="lazyloaded" alt="twitter">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/techjockey/" target="_blank" rel="nofollow noopener"
                        class="custom-icon trigger_event linkedin-hover" data-gacat="Footer"
                        data-gaaction="Click on linkedin" data-galabel="https://www.techjockey.com/">
                        <img  src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Linkedin-new.svg'; ?>"
                            data-src="https://www.techjockey.com/assets/new-assets/images/linkedin.svg"
                            class="lazyloaded" alt="linkedin">
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCv-PgwHTncZZ5i1iLs67rXQ" target="_blank"
                        rel="nofollow noopener" class="custom-icon trigger_event youtube-hover" data-gacat="Footer"
                        data-gaaction="Click on youtube" data-galabel="https://www.techjockey.com/">
                        <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Youtube-new.svg'; ?>"
                            data-src="https://www.techjockey.com/assets/new-assets/images/youtube.svg"
                            class="lazyloaded" alt="youtube">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="mobile-last-footer">
        <div class="mobile-last-footer-first">
            <p>
                <a href="{{url('company/refund-policy')}}" target="_blank"
                    class="trigger_event trigger_event mobile-list-styles" data-gacat="Footer"
                    data-gaaction="Click on Cancellation and Refund" data-galabel="https://www.techjockey.com/">
                    <span>Cancellation and Refund</span>
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="{{url('company/terms-condition')}}" target="_blank"
                    class="trigger_event trigger_event mobile-list-styles" data-gacat="Footer"
                    data-gaaction="Click on Terms of use" data-galabel="https://www.techjockey.com/">
                    <span>Terms of use</span>
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="{{url('company/privacy-policy')}}" target="_blank"
                    class="trigger_event trigger_event mobile-list-styles" data-gacat="Footer"
                    data-gaaction="Click on Privacy" data-galabel="https://www.techjockey.com">
                    <span>Privacy</span>
                </a>
            </p>
        </div>
        <div class="mobile-last-footer-second">
            <p>
                <a href="{{url('company/help')}}" target="_blank" class="trigger_event mobile-list-styles"
                    data-gacat="Footer" data-gaaction="Click on FAQ" data-galabel="https://www.techjockey.com/">
                    <span>Help &amp; Support</span>
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="mailto:support@techjockey.com" class="trigger_event mobile-list-styles" data-gacat="Footer"
                    data-gaaction="Click on support@techjockey.com"
                    data-galabel="{{ url()->current() }}"><span>Support@techjockey.com</span></a>
            </p>
        </div>
    </div>
</section>

<div class="ris-menu">
    <div class="basel-toolbar icons-design-line basel-toolbar-label-show" id='basel-1'>
        @if (isset($page_type) && $page_type !== 'home')
            <div class="basel-toolbar-shop basel-toolbar-item">
                <div class="mob-1">
                    <img src="{{ config('constants.ASSETS') . 'images/V2_img' }}/home-3.svg" class="trigger_event" data-gacat="Bottom Bar in Mobile" data-gaaction="Click on Home Icon" data-galabel="NA" data-gasimple="true" data-ganw="false" data-slug="" alt="Home icon">
                </div>
                <span class="basel-toolbar-label">Home</span>
            </div>
        @else
            <div class="basel-toolbar-shop basel-toolbar-item tj-acd-form">
                <div class="mob-1">
                    <img src="{{ config('constants.ASSETS') . 'images/V2_img' }}/demo-3.svg" data-action="GetFreeDemo" data-proid="{{ config('constants.DEFAULT_PRODUCT_ID') }}" data-proname="Techjockey ACD" class="trigger_event" data-gacat="Bottom Bar in Mobile" data-gaaction="Click on Get Advice" data-galabel="NA" data-gasimple="true" data-ganw="false" alt="Free Demo icon" data-userintent="Demo">
                </div>
                <span class="basel-toolbar-label">Free Demo</span>
            </div>
        @endif
        <div class="basel-toolbar-shop basel-toolbar-item tj-acd-form">
            <div class="mob-1">
                <img src="{{ config('constants.ASSETS') . 'images/V2_img' }}/call_free.svg" data-action="TalkToTechExpert" data-proid="{{ config('constants.DEFAULT_PRODUCT_ID') }}" data-proname="Techjockey ACD" class="trigger_event" data-gacat="Bottom Bar in Mobile" data-gaaction="Click on Get Advice" data-galabel="NA" data-gasimple="true" data-ganw="false" alt="Get Advice icon" data-userintent="Callback">
            </div>
            <span class="basel-toolbar-label"> Get Advice </span>
        </div>
        <div class="basel-toolbar-shop basel-toolbar-item">
            <div class="mob-1">
                <img src="{{ config('constants.ASSETS') . 'images/V2_img' }}/category-2.svg" class="trigger_event" data-gacat="Bottom Bar in Mobile" data-gaaction="Click on Categories Icon" data-galabel="NA" data-gasimple="true" data-ganw="false" data-slug="categories" alt="Categories icon">
            </div>
            <span class="basel-toolbar-label"> Categories </span>
        </div>
        <div class="basel-toolbar-shop basel-toolbar-item">
            <div class="mob-1">
                <img src="{{ config('constants.ASSETS') . 'images/V2_img' }}/question_mweb_icon.svg" class="trigger_ga4_event" data-gacat="content_engagement" data-gaaction="Clicked on Ask Question" data-galabel="Ask Question On Sticky Bar" data-gasimple="true" data-ganw="false" data-slug="questions" alt="Ask Question">
            </div>
            <span class="basel-toolbar-label"> Ask Question</span>
        </div>
    </div>
</div>
 
@if(!empty(session()->get('empty_cart')))
    @php
        $emptyMsg = session()->get('empty_cart');
    @endphp
    <script>
        $.growl.error({ message: '{{ $emptyMsg }}' });
        function imgError(i, t) {
            i.onerror = "";
            let imgSrc = "";

            switch (t) {
                case 'prod':
                    imgSrc = "{{ config('constants.DIR_FS_PRODUCT_NOIMAGE') }}";
                    break;
                case 'cat_icon':
                    imgSrc = "{{ config('constants.DIR_FS_CATEGORY_NOICON') }}";
                    break;
                case 'ind_img':
                    imgSrc = "{{ config('constants.DIR_FS_INDUSTRY_NOIMAGE') }}";
                    break;
                case 'bus_img':
                    imgSrc = "{{ config('constants.DIR_FS_BUSINESS_NOIMAGE') }}";
                    break;
                case 'bus_icon':
                    imgSrc = "{{ config('constants.DIR_FS_BUSINESS_NOICON') }}";
                    break;
                case 'brand':
                    imgSrc = "{{ config('constants.DIR_FS_BRAND_NOIMAGE') }}";
                    break;
                case 'blog':
                    imgSrc = "{{ config('constants.GENERAL_IMAGE') }}";
                    break;
                case 'testimonial':
                    imgSrc = "{{ config('constants.ASSETS') }}new-assets/images/testimonials/M4.png";
                    break;
                case 'prod':
                    imgSrc = "{{ config('constants.DIR_FS_PRODUCT_NOIMAGE') }}";
                    break;
                case '1':
                    imgSrc = "{{ config('constants.DIR_FS_TECHJOCKEY_IMAGES') }}products/el-pro-no-image.png";
                    break;
                case '2':
                    imgSrc = "{{ config('constants.DIR_FS_CATEGORY_ICON') }}el-cat-no-img.png";
                    break;
                default:
                    imgSrc = "{{ config('constants.DIR_FS_PRODUCT_NOIMAGE') }}";
                    break;
            }
            i.src = imgSrc;

            return true;
        }
    </script>
@endif

