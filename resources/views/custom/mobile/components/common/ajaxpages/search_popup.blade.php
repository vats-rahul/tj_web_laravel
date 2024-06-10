<style type="text/css">
.small,
small {
    font-size: 85%;
    margin: 0 !important;
}

#search {
    align-items: center;
    background: #fff;
    height: 0;
    justify-content: center;
    opacity: 0;
    position: fixed;
    transition: all 0.5s;
    width: 100%;
    will-change: transform, opacity;
    z-index: -1;
}

.show_search_popup {
    height: 100vh !important;
    opacity: 1 !important;
    width: 100% !important;
    z-index: 999 !important;
    left: 0px;
    top: 0px;
}

.close-btn {
    display: block !important;
}

#searchbox {
    background: transparent;
    border: solid #fff;
    border-width: 0 0 1px 0;
    color: #fff;
    flex: 1 0 auto;
    font-size: 2rem;
    height: 2rem;
    max-width: 50%;
    outline: 0;
    padding: 2rem 1rem;
}

.close-btn {
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
}

.form1-pop {
    background-color: #472dc2;
    box-shadow: 0 4px 8px 0 rgba(71, 45, 194, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 125px;
}

.form1-pop .searchTerm {
    background: no-repeat;
    border: none;
    box-shadow: none !important;
    color: #000!important;
    opacity: 1;
    font-size: 13px;
    padding-left: 40px;
    border-radius: 4px;
}
.form1-pop input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.form1-pop .serch1 {
    position: absolute;
    left: 0%;
    top: 8px;
}

.form1-pop form {
    width: 90%;
    position: relative;
    margin-top: 0px !important;
    z-index: 99;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
}

.form1-pop .searchButton {
    background: url('assets/images/V2_img/mobile_search_icon.svg') no-repeat -0px 3px ! important;
    margin-left: 10px !important;
    width: 25px !important;
    height: 24px !important;
}

.sec1-1 {
    position: fixed;
    top: 126px;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow-y: auto;
    padding-bottom: 20px;
}

.autocomplete-suggestions {
    /*border: 1px solid #eee;*/
    border-radius: 4px;
    background: #fff;
    cursor: default;
    overflow: auto;
}

.autocomplete-suggestion {
    padding: 2px 5px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px !important;
}

.autocomplete-selected {
    background: #f0f0f0;
}

.autocomplete-suggestions strong {
    font-weight: 400;
    color: #39f;
    font-size: 14px !important;
    padding: 7.5px 10px;
}

.autocomplete-w1 {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 26px;
    width: 100%;
}

.product_detail_page .autocomplete-w1 {
    position: fixed !important;
    top: inherit !important;
    left: inherit !important;
}

/* .autocomplete {
    background: #fff;
    text-align: left;
    max-height: 350px;
    overflow: auto;
    margin: -6px 6px 6px -3px;
    cursor: pointer;
    box-shadow: 0px 6px 18px rgba(36, 39, 44, 0.3);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
} */

.searchbar .autocomplete {
    background: #f1f3f6;
    text-align: left;
    min-height: 600px;
    cursor: pointer;
    border-radius: 4px;
    padding: 4px 20px 12px;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
}

.autocomplete>div:last-child {
    padding: 0;
}

.autocomplete .selected {
    background: #f0f0f0;
}

.autocomplete strong {
    font-weight: 400;
    color: #5f2487;
}

.autocomplete div span {
    font-size: 14px !important;
}

.autocomplete span.btitles {
    font-weight: 500;
}

.search_popup_list {
    white-space: pre-wrap !important;
    border-bottom: none !important;
    padding: 10px 0px 0px 0px !important;
}

.search_popup_list_left {
    border-bottom: none !important;
    padding: 10px 0px !important;
    color: #472dc2;
    font-weight: 500;
}

.search_popup_list.autoc-left {
    float: left;
    padding-left: 11px !important;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    width: auto;
    background: none !important;
}

.search-dropdown-img {
    margin-right: 12px;
    width: 30px;
}

.search_popup_list_left.autoc-right {
    float: left;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: auto;
    border-bottom: 0;
    align-items: flex-start;
}

.search_popup_list_left.autoc-right small:first-child {
    white-space: nowrap;
    width: 185px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.autocomplete-w1 .autocomplete > div:last-child p{
    margin-bottom: 16px;
}

.search_popup_list_left.autoc-right small+small a,
.search_popup_list_left.autoc-right small+small {
    opacity: 0.7;
    font-size: 12px;
    font-weight: 500;
    color: #24272c;
}

.searchCtaBtn {
    width: 154px;
    height: 36px;
    margin: 0 0 0 30px;
    padding: 10px 11px;
    border-radius: 4px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    background-color: #472dc2;
}

.searchCtaStrip {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: -3.5px;
    margin-bottom: -58px;
    opacity: 1 !important;
    width: 811.5px;
    height: 67px;
    position: absolute;
    border: 1px solid #f4e8e8;
    background-color: white !important;
}

.searchCtaStrip p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
}

.searchCtaStrip p span {
    font-weight: bold;
    margin-right: 5px
}

.searchCtaStrip img {
    margin-right: 4px;
}

.searchCtaStrip .smallFreeText {
    color: #472dc2 !important;
    background-color: white;
    padding: 2px;
    font-size: 8px
}

.searchCtaFreeDemoBtn {
    font-family: Roboto;
    float: right;
    padding: 4px 10px;
    margin: 5px 0 0 0 !important;
    border: solid 0.7px #fa0;
    color: #24272c;
    z-index: 20;
    padding: 10px 19px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    background-color: #fff
}

.autocomplete div span {
    font-size: 14px !important;
}

.search_popup_list_left.autoc-right small {
    font-size: 14px;
    font-weight: 500;
    color: #24272c;
}

.search_popup_list_left.autoc-right small+small a,
.search_popup_list_left.autoc-right small+small {
    opacity: 0.7;
    font-size: 12px;
    font-weight: 500;
    color: #24272c;
}

.autocomplete-w1 .autocomplete div:first-child {
    padding: 8px 10px;
    /* background: #f7f7f7; */
    opacity: 0.7;
    font-size: 12px;
}

.autocomplete-w1 .autocomplete > div:first-child{
    opacity: 1;
}

.tallyPrime-articles img {
    max-width: 100%;
}

.tallyPrime-articles {
    margin-left: 13px !important;
}

.tallyPrime-articles p {
    margin-bottom: 0px;
    padding-top: 0;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    font-weight: 500;
    line-height: 1.5;
    color: #000;
}

.agr-img1 {
    box-shadow: none !important;
    border: none !important;
}
.app-h3-1 {
    width: 100%;
    text-align: center;
    color: #fff;
    margin-bottom: 0px;
    position: absolute;
    bottom: 0px;
    left: 0;
    font-size: 16px;
    padding: 20px;
    font-weight: 500;
    background: linear-gradient( to top, rgba(36, 39, 44, 0.5), rgba(36, 39, 44, 0) );
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-shadow: 0px 2px 4px rgba(36, 39, 44, 0.7);
}
.agr-img1 img {
    border-radius: 4px;
    width: 100%;
}
.publications2 .gst-box.tallyPrime-articles {
    position: relative;
    padding: 0px;
width:92%;
}
.tex-see-all {
    float: left;
    width: 100%;
}
.cha-pl1 {
    float: left;
    width: 50%;
}
.se-pl1 {
    float: right;
    margin-right: 14px;
}
.success-st1 .ind1 {
    padding-bottom: 31px ;
    padding-top: 10px ;
}
.success-st1 .tallyPrime-articles img {
    max-width: 100%;
    border-bottom: 1px solid rgba(36, 39, 44, 0.1);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    max-height: 100%;
    height: 218px;
    object-fit: cover;
}
.success-st1 .gst-box.tallyPrime-articles {
    padding: 0px;
    width: 94%;
}
.publications2 {
    float: left;
    width: 100%;
    margin-top: 40px;
}

.searchbar{
    /* top: 116px !important; */
    height: 100% !important;
    width: 100% !important;
    /* background: rgb(241, 243, 246); */
    left: 0px !important;
}
.autocomplete {
    max-height: 100vh !important;
}
.search_2 {
    left: 1rem;
}

.searchbar .default-list-items{
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 6px 12px;
    margin: 5px;
    white-space: pre-wrap !important;
    background: #fff;
}

.searchbar .default-list-items img{
    margin-right: 10px;
}


.searchbar .autocomplete .list-item {
    white-space: nowrap;
    overflow: hidden;
    font-family: Roboto;
    font-size: 14px;
    padding: 12.5px 10px;
    letter-spacing: 0.3px;
    background: #fff !important;
    opacity: 1 !important;
    border-bottom: 4px solid #f1f3f6;
    border-radius: 4px;
}

.searchbar .autocomplete .list-item:hover {
    background: #f7f7f7 !important;
    padding: 8px 10px;
}

.search-heading{
    text-align: center;
    color: #fff;
    padding: 16px 0;
}

.btitles{
    margin-left: 0px !important;
}

.clear-input{
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    top: 10px;
    /* display:none; */
}
</style>

<div id="search" class="fade show_search_popup">
    <div class="form1-pop">
        <a href="javascript:void(0)" class="close-btn search_2" id="close-search">
            <img alt="back_arrow" src="{{ config('constants.ASSETS').'images/V2_img/back_arrow.svg' }}" style="margin-bottom: 4px;">
        </a>
        <h2 class="search-heading">Search</h2>
        <form name="searchForm" action="{{ url('search') }}" onsubmit="elSearchEvents(event)">
            @csrf
            <div class="search">
                <span class="serch1"><button type="submit" class="searchButton"> </button> </span>
                <input type="text" name="keyword" id="keyword_main" class="searchTerm keyword_main" placeholder="Search by Category, Product or Keyword">
                <button type="button" id="clear-mweb-input" class="clear-input"><img alt="mobile_search_clear" src="{{ config('constants.ASSETS').'images/V2_img/mobile_search_clear.svg' }}"></button>
            </div>
        </form>
    </div>
</div>

<script type="text/javascript">
    $(document).on('click', '.keyword_main', function(){
        track_event_new(tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page', 'Interacted with Search Bar Section', 'Opened Search');
    });
    tj.loadScript('tj-autocomplete-js',tj.baseUrl + 'assets/js/common/jquery.autocomplete.js?version=1.02')
        .then(() => {
            tj.sr = $('.keyword_main').autocomplete({
                serviceUrl: tj.baseUrl + 'fetchResult',
                params: {
                    page: function () {
                        return tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page';
                    }
                },
                minChars: 0,
                delimiter: /(,|;)\s*/,
                zIndex: 999999,
                deferRequestBy: 0,
                noCache: true,
                customClass: "searchbar",
                onSelect: function (value, data, element) {
                    var value = $(value).attr('rel');
                    $('#search-type').val(data);
                    if (data != "") {
                        if (data.indexOf("category-") != -1) {
                            var res = data.substr(9, data.length);
                            window.location = tj.baseUrl + 'category/' + res;
                        } else {
                            window.location = tj.baseUrl + 'detail/' + data;
                        }
                    } else {
                        $('.autocomplete').show();
                        window.location = 'javascript:void(0)';
                    }
                }
            });
        })
        .catch(() => {});

    $('#close-search').click(function(){
        $(".keyword_main").val('');
        if (typeof tj.sr !== 'undefined' && tj.sr !== null) {
            tj.sr.hide();
        }
        $("#search").removeClass('show_search_popup');
        $("html").removeClass('fixed_height');
    });

    $('#clear-mweb-input').click(function(){
        $(".keyword_main").click();
        $(".keyword_main").val('');

    })
</script>