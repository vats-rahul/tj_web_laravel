<section class="content-section  home-sar1">
    <div class="container-page ">
        <?php if(!empty($recently_viewed_products)){  ?>
        <div class="col-md-12 home3 essentials-sp2">
            <div class="text-1-best-home brand_detailcard_category-3 prodt1" id="recently_viewed_products">
                <p class="software-tallyPrime home_heading_txt"> Recently visited Products</p>
                <div class="tallyprime-col2">
                    <?php for ($i=0; $i < 4; $i++) { ?>
                        <div class="col-md-3">
                            <img alt="new_prod_skeleton" src="<?= config('constants.ASSETS') . 'V2/img/new_prod_skeleton.png'?>">
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php } ?>
        <div class="col-md-12">
            <?php 
                if(!empty($adv_banner)) {
                    $this->load->view('V2/home/web/component/top_adv_section', ['adv_banner' => $adv_banner, 'dimension' => '1260X240', 'page_name' => 'Home Page', 'banner_type' => 'mobile_image']); 
                }
            ?>
        </div>
        <?php if(!empty($recently_viewed_products)){ ?>
            <div class="col-md-12 home3 essentials-sp1" id="recent_product_alts">
                <div class="text-1-best-home brand_detailcard_category-3">
                    <p class="software-tallyPrime home_heading_txt">Related Products based on your Search</p>
                    <div class="tallyprime-col2">
                        <?php for ($i=0; $i < 4; $i++) { ?>
                            <div class="col-md-3">
                                <img alt="new_prod_skeleton" src="<?= ASSETS . 'V2/img/new_prod_skeleton.png'?>">
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>