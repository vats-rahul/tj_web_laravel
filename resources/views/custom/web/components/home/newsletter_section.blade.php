<section class="content-section  news-sea2-ls">
    <div class="container-page ">
        <div class="col-md-12 ">
            <div class="text-1-best-news" id="newsletter-cont">
                <div class="serh-btn-n1">
                    <div class="col-md-2 latr1">
                        <img alt="letter" src="<?= config('constants.ASSETS') . 'images/V2_img/letter.svg'; ?>">
                    </div>
                    <div class="col-md-10 newsletter-act-cont">
                        <div class="miss-Don1">
                            <p class="newsletter-p2">Subscribe to our newsletter</p>
                            <p>Be the first to get latest offers and news on our products directly in your inbox.</p>
                            <form name="newsletterForm" id="frmNewsletter">
                                <div class="news_letter_status"></div>
                                <div class="form-group">
                                    <input type="email" pattern="[^ @]*@[^ @]*" name="subscribe_email"
                                        class="subscribe_email" placeholder="Enter Your Email">
                                    <input type="hidden" name="action" value="Subscribe Newsletter">
                                    <button name="Subscribe" type="submit" class="btn btn-default sub_error_btn"
                                        data-gaaction="Newsletter Subscribed"
                                        data-gacat="<?= ucfirst($page_type); ?> Page" data-galabel="">Subscribe
                                        Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thank_you_status" style="display: none;">
                <div class="fade in review_msg_box" role="alert">
                    <div class="alert_left">
                        <img src="<?= config('constants.DEFAULT_IMAGE'); ?>" data-src="<?= config('constants.ASSETS') . 'new-assets/images/ThankU.png' ?>"
                            class="lazyload img-responsive " alt="Thank You" width="62" height="62">
                        <p>Thank
                            you for subscribing to our newsletter !</p>
                    </div>
                </div>
            </div>
        </div>
        @include('custom.web.components.home.buyers_guide')
    </div>
</section>