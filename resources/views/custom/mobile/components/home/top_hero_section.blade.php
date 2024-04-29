<section class="slider-section serac-mob1-1">
    <div class="container-page">
        <div class="search">
            <form>
                <img alt="search" class="ser1" src="{{ asset('assets/images/V2_img/search.png') }}">
                <input type="text" class="searchTerm banner-search" placeholder="Search by Category, Product or Keyword" readonly="readonly">
            </form>
        </div>
        <div class="home_1el_normal">
            @foreach ($home_data['hero_section'] as $key => $hsd)
                <div class="hero-text-cont {{ ($key > 0) ? 'slick-slide' : '' }}">
                    <div class="text_wd_1">
                    <?= $hsd['heading']; ?>
                    <?= $hsd['subheading']; ?>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <div class="cat-see-btn trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Clicked on See all Categories" data-galabel="">
        <span class="open-url" data-link="{{ url('categories') }}">See all Categories</span>
    </div>
</section>
