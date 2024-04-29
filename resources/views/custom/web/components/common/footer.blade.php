<link href="<?= config('constants.ASSETS') ?>/css/web/footer-web.css?version=1.0" rel="stylesheet" />
<section class="listed-lsit-dv1">
    <div class="container-website">
        <div class="row">
            <div class="col-md-3">
                <div class="software-ls1">
                    <p><img alt="Software Listings" src="<?= config('constants.S3_ASSETS') . 'images/V4_img/icon_software.svg'; ?>">
                        <span>20,000+ Software Listed</span>
                    </p>
                </div>
            </div>

            <div class="col-md-3">
                <div class="software-ls1">
                    <p><img alt="Best Price Guarantee" src="<?= config('constants.S3_ASSETS') . 'images/V4_img/icon_price.svg'; ?>"> <span>Best
                            Price Guaranteed</span>
                    </p>
                </div>
            </div>

            <div class="col-md-3">
                <div class="software-ls1">
                    <p><img alt="Expert Consultation" src="<?= config('constants.S3_ASSETS') . 'images/V4_img/icon_expert.svg'; ?>"> <span>Free Expert
                            Consultation</span></p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="software-ls1">
                    <p><img alt="Happy Customers" src="<?= config('constants.S3_ASSETS') . 'images/V4_img/icon_customer.svg'; ?>"> <span>2M+
                            Happy Customers</span></p>
                </div>
            </div>

        </div>
    </div>
</section>


<footer class="footer-section">

    <div class="container-website">
        <div class="row">
            <div class="col-md-7">
                <div class="footer-menu">
                    <p>Popular Categories</p>
                    <ul>
                        <li>
                            <a href="<?= url('category/stock-market-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer" data-gaaction="Click on Stock Market Software"
                                data-galabel=""{{ request()->url() }}""><span>Stock Market Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/retail-billing-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Retail Billing Software"
                                data-galabel=""{{ request()->url() }}""><span>Retail Billing Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/astrology-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer" data-gaaction="Click on Astrology Software"
                                data-galabel=""{{ request()->url() }}""><span>Astrology Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/plagiarism-checker'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer" data-gaaction="Click on Plagiarism Checker"
                                data-galabel=""{{ request()->url() }}""><span>Plagiarism Checker</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/pharma-software-for-retail-distribution'); ?>"
                                target="_blank" class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Pharmacy Software"
                                data-galabel=""{{ request()->url() }}""><span>Pharmacy Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/hr-software'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on HR Software"
                                data-galabel=""{{ request()->url() }}""><span>HR Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/accounting-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer" data-gaaction="Click on Accounting Software"
                                data-galabel=""{{ request()->url() }}""><span>Accounting Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/payment-gateway'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on Payment Gateway"
                                data-galabel=""{{ request()->url() }}""><span>Payment Gateway</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/data-recovery-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Data Recovery Software"
                                data-galabel=""{{ request()->url() }}""><span>Data Recovery Software</span></a>
                        </li>
                        <li>
                            <a href="<?= url('category/video-editing-software'); ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Video Editing Software"
                                data-galabel=""{{ request()->url() }}""><span>Video Editing Software</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div class="footer-menu-2">
                    <p>About Techjockey</p>
                    <ul>
                        <li>
                            <a href="<?= url('company/about-us'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on About us"
                                data-galabel=""{{ request()->url() }}""><span>About us</span></a>
                        </li>
                        <li>
                            <a href="<?= url('company/contact-us'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on Contact Us"
                                data-galabel=""{{ request()->url() }}""><span>Contact Us</span></a>
                        </li>
                        <li>
                            <a href="<?= url('company/careers'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on Careers"
                                data-galabel=""{{ request()->url() }}""><span>Careers</span></a>
                        </li>
                        <li>
                            <a href="<?= url('company/press'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on Press"
                                data-galabel=""{{ request()->url() }}""><span>Press</span></a>
                        </li>
                        <li>
                            <a style="color:white" href="<?= $_ENV['HTTP_SCHEME'] . '://' . $_ENV['BLOG_URL'] . '/'; ?>"
                                target="_blank" rel="noopener" class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Blogs"
                                data-galabel=""{{ request()->url() }}""><span>Blog</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="footer-menu-2">
                    <p>For Businesses</p>
                    <ul>
                        <li>
                            <a href="<?= url('media-sales'); ?>" target="_blank" class="trigger_event"
                                data-gacat="Footer" data-gaaction="Click on Media Enquiries"
                                data-galabel=""{{ request()->url() }}""><span>Advertise With Us</span></a>
                        </li>
                        <li>
                            <a href="<?= $_ENV['HTTP_SCHEME'] . '://' . $_ENV['BLOG_URL'] . '/write-for-us'; ?>"
                                target="_blank" class="trigger_event" data-gacat="Footer"
                                data-gaaction="Click on Write with us" data-galabel=""{{ request()->url() }}""><span>Write
                                    with us</span></a>
                        </li>
                        <li>
                            <a href="<?= $_ENV['HTTP_SCHEME'] . '://' . $_ENV['ESELLER_URL'] ?>" target="_blank"
                                class="trigger_event" data-gacat="Footer" data-gaaction="Click on Sell With Us"
                                data-galabel=""{{ request()->url() }}""><span>Sell With Us</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-section-2">
        <div class="container-website">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-partner-apps">
                        <p>Download Techjockey Partner App</p>
                        <ul>
                            <li>
                                <a href="https://apps.apple.com/in/app/techjockey-partner-app/id1600222063"
                                    onclick="tj.events.gaEvents('Footer', 'Clicked on Play Store', location.href)">
                                    <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/apple-play-badge-tech.svg'; ?>"
                                        alt="App Store Logo" title="appstorelogo">
                                </a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.vendor.space&hl=en_IN&gl=US&utm_source=tj_footer&utm_medium=website&utm_campaign=vendorappcta"
                                    onclick="tj.events.gaEvents('Footer', 'Clicked on Play Store', location.href)">
                                    <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/google-play-badge-1.svg'; ?>"
                                        alt="Play Store Logo" title="playstorelogo">
                                </a>
                            </li>
                            <?php if (strtolower(env('ENVIRONMENT')) == 'production') { ?>
                            <li>
                                <a class="dmca-badge"
                                    href="https://www.dmca.com/Protection/Status.aspx?ID=fd3a5bb1-97dc-429d-8592-b3ce81559c17&amp;refurl=https://www.techjockey.com/"
                                    rel="nofollow" title="DMCA.com Protection Status">
                                    <img src="<?= config('constants.S3_ASSETS') . 'images/V4_img/dmcs_protected.svg'; ?>"
                                        alt="DMCA.com Protection Status">
                                </a>
                            </li>
                            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-social-icons">
                        <p>Let’s Get Social</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="nofollow noopener"
                                    data-gacat="Footer" data-gaaction="Click on facebook"
                                    data-galabel="https://www.techjockey.com/">
                                    <img 
                                        src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Facebook-new.svg'; ?>"
                                        class="lazyload facebook-hover" alt="facebook">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/techjockeydotcom/" target="_blank"
                                    rel="nofollow noopener" data-gacat="Footer" data-gaaction="Click on instagram"
                                    data-galabel="https://www.techjockey.com/">
                                    <img 
                                        src="<?= config('constants.S3_ASSETS') . 'images/V4_img/instagram-new.svg'; ?>" class="lazyload"
                                        alt="instagram">
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/TechJockeys" target="_blank" rel="nofollow noopener"
                                    data-gacat="Footer" data-gaaction="Click on twitter"
                                    data-galabel="https://www.techjockey.com/">
                                    <img 
                                        src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Twitter-new.svg'; ?>" class="lazyload"
                                        alt="twitter">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/techjockey/" target="_blank"
                                    rel="nofollow noopener" data-gacat="Footer" data-gaaction="Click on linkedin"
                                    data-galabel="https://www.techjockey.com/">
                                    <img 
                                        src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Linkedin-new.svg'; ?>" class="lazyload"
                                        alt="linkedin">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCv-PgwHTncZZ5i1iLs67rXQ" target="_blank"
                                    rel="nofollow noopener" data-gacat="Footer" data-gaaction="Click on youtube"
                                    data-galabel="https://www.techjockey.com/">
                                    <img 
                                        src="<?= config('constants.S3_ASSETS') . 'images/V4_img/Youtube-new.svg'; ?>" class="lazyload"
                                        alt="youtube">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-subscribe-form">
                        <p>Subscribe for Offers</p>
                        <form name="newsletterForm" id="frmNewsletter1" class="footer_newsletter"
                            onsubmit="track_event('Home', 'Subscribed', '<?= !empty($blogs) ? $blogs[0]->title : "Blog"; ?>', 'Customer subscription', 21, false)">
                            <input type="email" pattern="[^ @]*@[^ @]*" name="subscribe_email"
                                placeholder="Enter Your Email Id" aria-label='Enter Your Email Id' />
                            <input type="hidden" name="action" value="Subscribe Newsletter" />
                            <button name="Subscribe" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-section-3">
        <div class="container-website">
            <div class="row">

                <div class="col-md-6">
                    <div class="footer-last-1">
                        <a href="<?= url('company/refund-policy'); ?>" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Cancellation and Refund"
                            data-galabel="https://www.techjockey.com/">
                            <span>Cancellation and Refund</span>
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="<?= url('company/terms-condition'); ?>" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Terms of use"
                            data-galabel="https://www.techjockey.com/">
                            <span>Terms of use</span>
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="<?= url('company/privacy-policy'); ?>" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on Privacy"
                            data-galabel="https://www.techjockey.com">
                            <span>Privacy</span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-last-2">
                        <a href="<?= url('company/help'); ?>" target="_blank" class="trigger_event"
                            data-gacat="Footer" data-gaaction="Click on FAQ" data-galabel="https://www.techjockey.com/">
                            <span>Help &amp; Support</span>
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="mailto:support@techjockey.com" data-gacat="Footer"
                            data-gaaction="Click on support@techjockey.com"
                            data-galabel=""{{ request()->url() }}""><span>Support@techjockey.com</span></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>

<script>

function imgError(i, t) {
    i.onerror = "";
    let imgSrc = "";

    switch (t) {
        case 'prod':
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
        case 'cat_icon':
            imgSrc = "<?= config('constants.DIR_FS_CATEGORY_NOICON') ?>";
            break;
        case 'ind_img':
            imgSrc = "<?= config('constants.DIR_FS_INDUSTRY_NOIMAGE') ?>";
            break;
        case 'bus_img':
            imgSrc = "<?= config('constants.DIR_FS_BUSINESS_NOIMAGE') ?>";
            break;
        case 'bus_icon':
            imgSrc = "<?= config('constants.DIR_FS_BUSINESS_NOICON') ?>";
            break;
        case 'brand':
            imgSrc = "<?= config('constants.DIR_FS_BRAND_NOIMAGE') ?>";
            break;
        case 'blog':
            imgSrc = "<?= config('constants.GENERAL_IMAGE') ?>";
            break;
        case 'testimonial':
            imgSrc = "<?= config('constants.ASSETS') ?>new-assets/images/testimonials/M4.png";
            break;
        case 'prod':
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
        case '1':
            imgSrc = "<?= config('constants.DIR_FS_TECHJOCKEY_IMAGES') ?>products/el-pro-no-image.png";
            break;
        case '2':
            imgSrc = "<?= config('constants.DIR_FS_CATEGORY_ICON') ?>el-cat-no-img.png";
            break;
        default:
            imgSrc = "<?= config('constants.DIR_FS_PRODUCT_NOIMAGE') ?>";
            break;
    }
    i.src = imgSrc;

    return true;
}

</script>
