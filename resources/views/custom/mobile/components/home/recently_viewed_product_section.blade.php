<section class="content-section offers-pl1 chec-pl5">
	<div class="container-page" id="recently_viewed_products">
		<p class="home_heading_txt">Recently visited Products</p>
		<div class="esy-get slider-ga-event" style="margin-top:20px" data-gacat="<?= ucfirst($page_type); ?> Page" data-gaaction="Interacted with Recently Visited Products">
			<?php for ($i=0; $i < 1; $i++) { ?>
                <div class="col-md-12">
                    <img alt="new_prod_skeleton" src="<?= config('constants.ASSETS') . 'images/V2_img/new_prod_skeleton.png'?>">
                </div>
            <?php } ?>
		</div>
	</div>
</section>