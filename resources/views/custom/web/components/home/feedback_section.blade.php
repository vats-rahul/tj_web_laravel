<section class="content-section  aout-pl22">
    <div class="container-page ">
        <div class="col-md-12 ">
            <div class="text-1-best2-hm2 ">
                <div class="col-md-6">
                    <div class="abt-box-img ">
                        <img alt="hp_review_img" src="<?= config('constants.ASSETS') . 'images/V2_img/hp_review_img.jpg'; ?>">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="abt-box tex-hm-d1">
                        <p class="review-text">We’d love to hear your feedback! <br>
                            <span>Review your software</span>
                        </p>
                        <p>Tell us about experience, pros and cons of your using product.</p>
                        <div class="btn-pl-2">
                            <a href="<?= url('add_review'); ?>" rel="noreferrer noopener" class="trigger_event"
                                data-gacat="<?= ucfirst($page_type); ?> Page"
                                data-gaaction="Interacted with Write a Review Banner"
                                data-galabel="Clicked on Write a Review">Add Review</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>