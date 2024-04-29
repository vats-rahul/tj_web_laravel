<section class="banner home-gray">
    <div class="container-page ">
        <div class="container">
            <div class="row align-center">
                <div class="col-lg-12 col-md-12">
                    <div class="banner-caption dark">
                        <div class="col-md-12 col-sm-12 banner-text left">
                            <h1 class="find-1">Discover, Compare and Buy right <br> software for your business
                            </h1>
                            <div class="full-search-2 eclip-search italian-search hero-search-radius">
                                <form name="searchForm" action="<?= url('search'); ?>"
                                    onsubmit="tj.el_search_events('', '', $('#keyword_main').val())">
                                    <div class="hero-search-content nav_head_element" data-id="search_popup"
                                        data-action="replaceWith">
                                        <div class=" col-md-12  b-r">
                                            <div class="small_search-user">
                                                <div class="form-group">
                                                    <div class="input-with-icon">
                                                        <input type="text" name="keyword"
                                                            class="form-control searchTerm nav_head_element mainSearchInput"
                                                            data-id="search_popup" data-action="replaceWith"
                                                            placeholder="Search by Category, Product or Keyword"
                                                            id="hero-search-new" autocomplete="off">

                                                    </div>
                                                    <div class="small-padd">
                                                        <div class="form-group">
                                                            <div class="form-group">
                                                                <button type="submit"
                                                                    class="btn btn-primary search-btn">
                                                                    <img alt="search_white_v2" class="serc1"
                                                                        src="<?= config('constants.ASSETS') ?>images/V2_img/search_white_v2.svg"></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                </form>
                            </div>
                            <div class="pre-text-1">
                                <p><span>Or</span> <span class="get-l1 tj-acd-form trigger_event"
                                        data-gaaction="Clicked on Get Instant Advice"
                                        data-gacat="<?= ucfirst($page_type); ?> Page" data-galabel="<?= $page; ?>"
                                        data-action="TalkToTechExpert" data-proname="Techjockey ACD" data-proid="14481"
                                        data-userintent="Callback">Get Instant Advice </span> </p>
                            </div>
                            <div class="list-p1">
                                <div class="col-md-4">
                                    <div class="set-lst">
                                        <p>
                                            <img alt="Consultation Icon"
                                                src="<?= config('constants.ASSETS') ?>images/V2_img/consult.svg"> Free Expert Consultation
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="set-lst">
                                        <p><img alt="License Icon" src="<?= config('constants.ASSETS') ?>images/V2_img/license.svg"> Get
                                            Instant License</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="set-lst">
                                        <p><img alt="Secure Checkout Icon" src="<?= config('constants.ASSETS') ?>images/V2_img/secure.svg">
                                            Easy & Secure Checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>