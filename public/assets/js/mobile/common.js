var tj = tj || {};
tj.events = tj.events || {};
var crmVariables = crmVariables || {};
crmVariables = {
    category_id : null,
    category_name : null,
    product_id : null,
    product_name : null,
    page_type:null
};

tj.baseUrl = (function() {
    var s = location.pathname.split('/');
    if ('localhost' == location.host) {
        var e = location.origin + '/' + s[1].trim('/') + '/';
    } else if ('localhost:3000' == location.host) {
        var e = location.origin + '/';
    } else {
        var e = location.origin + '/';
    }
    return e;
})();
var baseUrl = tj.baseUrl;
tj.tpLoaded = false;

tj.he = tj.he || {};
tj.he['nav_menu'] = false;
tj.he['nav_department'] = false;
tj.he['nav_category'] = false;
tj.he['nav_help'] = false;
tj.he['search_popup'] = false;
tj.he['login_popup'] = false;
tj.he['cart_contents'] = false;
tj.he['sort_by'] = false;

tj.loadThirdParty = function() {
    if(!tj.tpLoaded){
        tj.loadScript('tj-acd-scripts-loader', tj.envUrl + '/assets/acd/acd-scripts/js/acd-scripts.js?v=5.5&i=website&e=l')
        .then(() => { 
            tj.loadScript('tj-third-party', tj.baseUrl + 'assets/V2/js/tj.third_party.js?v=1.3',true)
            .then(() => {
                (typeof tj.thirdPartyDeferredActions !== "undefined") && setTimeout(function(){tj.thirdPartyDeferredActions();},500);
            })
            .catch(() => {});
        })
        .catch(() => {});
        tj.tpLoaded = true;
    }
};

tj.generateHeaderNavElement = function(element, action = 'html', ref = '') {
    console.log("generatedHeader");
    var url = tj.baseUrl + 'ajax/renderMobileElements?nav_element=' + element + '&action=' + action + '&ru=' + tj.currentUrl + ref + '&page_type=' + tj.page_type + '&page=' + tj.page;
    console.log(url);
    tj.api.AjaxRequest('GET', url, tj.renderElem);
};

tj.generateComparePopup = function (element, o = true) {
    
    if ($('#add-to-compare').length == 0) {
        var url = tj.baseUrl + 'ajax/renderHeaderNavElements?nav_element=' + element + '&action=body';

        tj.api.AjaxRequest('GET', url, function(data) {
            $('body').append(data.content);
            if (o == true) {
                $('#add-to-compare').addClass('show-pop-up');
                $('#ext_comp_cta').addClass('tjout');
            }
        });
    } else {
        if (o == true) {
            $('#add-to-compare').removeClass('tjout');
            $('#add-to-compare').addClass('show-pop-up');
            $('#ext_comp_cta').addClass('tjout');
        }
    }
};

tj.renderElem = function(data) {
    if (data.action == 'body') {
        $('body').append(data.content);
    } else if (data.action == 'html') {
        data.content && $('#' + data.element).html(data.content);
    } else if (data.action == 'after') {
        data.content && $('#' + data.element).after(data.content);
    } else if (data.action == 'append') {
        data.content && $('#' + data.element).append(data.content);
    } else if (data.action == 'replaceWith') {
        data.content && $('#' + data.element).replaceWith(data.content);
    }

    if(data.slider){

        var slc = JSON.parse(data.sliderConfig);
        slc.slidesToShow = parseFloat(slc.slidesToShow);
        slc.slidesToScroll = parseInt(slc.slidesToScroll);
        if(slc.dots !== undefined){
            slc.dots = (slc.dots === 'true');
        }
        tj.renderSlider(slc);
    }
    if(data.pseudoElements){
        tj.pseudoElements();
    }
};

tj.loadScript = function(e, src, h = false, attributes = {}, isDefer = false) {
    if (!document.getElementById(e)) {
        tj.s = document.createElement('script');
        (tj.s.type = 'text/javascript'),
        (tj.s.src = src),
        (tj.s.id = e),
        (isDefer == true) ? (tj.s.defer = true) : (tj.s.async = true);
        for (const key in attributes) {
            tj.s.setAttribute(key, attributes[key]);
        }
        h ? document.head.appendChild(tj.s) : document.body.appendChild(tj.s);

        return new Promise((res, rej) => {
            tj.s.onload = function() {
                res();
            };
            tj.s.onerror = function() {
                rej();
            };
        });
    } else {
        return new Promise((res, rej) => {
            res();
        });
    }
};

tj.loadCss = function(e, src) {
    if (!document.getElementById(e)) {
        tj.head = document.getElementsByTagName('head')[0];
        tj.c = document.createElement('link');
        (tj.c.id = e),
        (tj.c.rel = 'stylesheet'),
        (tj.c.type = 'text/css'),
        (tj.c.href = src),
        (tj.c.media = 'all');

        tj.head.appendChild(tj.c);
    }
};

tj.switchTab = function(evt, cityName, tab = 'tabcontent', tablink = 'tablinks') {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(tab);

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName(tablink);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    if(typeof evt == "string"){
        $("#" + evt).addClass('active');
    } else {
        evt.currentTarget.className += ' active';
    }
};

tj.logout = function() {
    var url = tj.baseUrl + 'account/logout';
    tj.api.AjaxRequest('GET', url, (tj.events.clevertap.signedOutEvent(), window.location.reload(true)));
};

tj.pseudoElements = function(nav = false) {
    var url = tj.baseUrl + 'ajax/pseudo_renderer?nav=' + nav +'&page_type=' + tj.page_type + '&page=' + tj.page + '&version=V2';
    tj.api.AjaxRequest('GET', url, tj.pseudoRenderer);
};

tj.pseudoRenderer = function(data) {
    data.cart_icon_cont && $('#cart_icon_cont').after(data.cart_icon_cont);

    data.arrCompare && $.each(JSON.parse(data.arrCompare), function(key, value) {
            $('.comp_' + value).prop('checked', true);
            $('.comp_' + value).addClass('compared');
            $("label[for='comp_" + value + "']").text('Compared');
        });

    data.arrWishlist && $.each(JSON.parse(data.arrWishlist), function(key, value) {
            $('.wish_' + value).removeClass('product_like_btn');
            $('.wish_' + value).addClass('product_liked_btn');
        });
};

tj.addToCart = function(i) {
    var url = tj.baseUrl + 'pricing/product_plans?product_identifier=' + i + '&rs_type=html&swiper_size=1'+'&page='+tj.page+'&page_type='+tj.page_type;
    tj.api.AjaxRequest('GET', url, tj.renderPlanPopup);
};

tj.captureBuyNowLead = function () {
    setTimeout(function () {
        let tjBrowserCookie = tj.getCookie();
        let product_id = sessionStorage.getItem('buy_now_prodid');
        let product_name = sessionStorage.getItem('buy_now_product');
        let buyNowLeadData = {
            'name': tj.user.customer !== undefined ? tj.user.customer.name : tj.user.customer_name,
            'email': tj.user.customer !== undefined ? tj.user.customer.email : tj.user.customer_email,
            'phone': tj.user.customer !== undefined ? tj.user.customer.phone : tj.user.customer_phone,
            'product_id': product_id,
            'source': 'website_buy_now',
            'acquisition_source' : tjBrowserCookie.tj_crm_acquisition_source ?? '',
            'gclid' : tjBrowserCookie.tj_crm_gclid ?? '',
            'utmParams' : {
                'utm_source' : tjBrowserCookie.tj_crm_utm_source,
                'utm_campaign' : tjBrowserCookie.tj_crm_utm_campaign,
                'utm_medium' : tjBrowserCookie.tj_crm_utm_medium,
                'utm_content' : tjBrowserCookie.tj_crm_utm_content,
                'utm_term' : tjBrowserCookie.tj_crm_utm_term,
                'utm_campaignid' : tjBrowserCookie.tj_crm_utm_campaignid,
                'utm_adgroupid' : tjBrowserCookie.tj_crm_utm_adgroupid,
                'utm_adid' : tjBrowserCookie.tj_crm_utm_adid,
                'utm_adsetid' : tjBrowserCookie.tj_crm_utm_adsetid,
                'utm_device' : tjBrowserCookie.tj_crm_utm_device,
            },
            'lead_form_name' : 'mobile_login_signup',
            'user_intent': 'Add to cart',
        };
        tj.api.AjaxRequest('POST', tj.baseUrl + 'capture-lead/', function (res) { 
            tj.events.ga4Events('Lead submitted',{
                cta_name: "Click on Buy Now",
                product_name: product_name,
            });
            tj.fbq_event('Lead submitted',{
                Name: product_name,
                Action: 'Buy Now Click'
            },true)
        }, onError, onComplete, buyNowLeadData)
    }, 2000);
};

tj.renderPlanPopup = function(data) {
    data.data.content && $('#tj_product_plan_popup').replaceWith(data.data.content), $("html").addClass('fixed_height');
};

tj.handlePlanPopup = function (i) {
    
    let loaderPlanScreen = `<div id="tj_product_plan_popup" class="chooseplane_price overlay-1 show-pop-up" style="overflow-y: scroll;background: #fff;">
                <div class="spinner purple" style="margin-top: 25%;"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>`;

    $('#tj_product_plan_popup').html(loaderPlanScreen);
        
    tj.api.AjaxRequest('GET', tj.baseUrl + 'account/check_user_login', function(r) {
        if (r.customer_id == null) {

            location.href = tj.baseUrl + "account/login?login_referer=" + location.href + "&login_slug=" + i;
            return;
        } else {
            tj.addToCart(i);
            tj.captureBuyNowLead();
        }
    });
};

tj.addToCompare = function(compareParams = {}) {
    var url = tj.baseUrl + 'ajax/set_compare_product';
    tj.api.AjaxRequest('POST', url, function(data) {
        if (data.success) {
            if((compareParams.evcat != null) && (compareParams.evaction != null) && (compareParams.evlabel != null))
            {
                track_event_new(compareParams.evcat,compareParams.evaction,compareParams.evlabel);
            }
            $('.comp_' + compareParams.product_id).prop('checked', true);
            $('.comp_' + compareParams.product_id).addClass('compared');
            $("label[for='comp_" + compareParams.product_id + "']").text('Compared');

            $('.product_' + compareParams.product_id).addClass('compared');
            $('.product_' + compareParams.product_id).html('Added to Compare');


            if ($('#compare_product_container').children().length >= 1 && !compareParams.current_url.endsWith('-vs-')) {
                compareParams.current_url = compareParams.current_url + '-vs-';
            }
            var updatedURL = compareParams.current_url + compareParams.product_slug + '-vs-';
            if (updatedURL.endsWith('-vs-')) {
                var updatedURL = updatedURL.slice(0, -4);
            }
            $('#compare_link_cta').attr('href', updatedURL);
            $('#compare_product_container').html(data.comp_product);
            $('.compare_num_inner').html('Compare ' + data.count_compared + ' Products');
            $('.compare_num_outer').html(data.count_compared);
        } else {
            $('.comp_' + compareParams.product_id).prop('checked', false);
            if (data.error_detail != '') {
                $.growl.error({
                    title: 'Compare Product ',
                    message: data.error_detail,
                    size: 'large',
                });
            } else {
                $.growl.error({
                    title: 'Compare Product ',
                    message: 'You have already selected 4 products !',
                    size: 'large',
                });
            }
        }

        if (data.count_compared < 2) {
            $('#add-to-compare').removeClass('tjin');
            $('#ext_comp_cta').removeClass('tjin');

            $('#add-to-compare').addClass('tjout');
            $('#ext_comp_cta').addClass('tjout');

            $.growl.error({
                title: 'Compare Product ',
                message: 'Please select at least 2 products to compare',
                size: 'large',
            });
        } else {
            tj.generateComparePopup('compare_popup');
        }

    }, onError, onComplete, compareParams);
};

tj.removeFromCompare = function(compareParams = {}) {
    var url = tj.baseUrl + 'ajax/set_compare_product';
    tj.api.AjaxRequest('POST', url, function(data) {
        if (data.success) {
            $('.comp_' + compareParams.product_id).prop('checked', false);
            $('.comp_' + compareParams.product_id).removeClass('compared');
            $("label[for='comp_" + compareParams.product_id + "']").text('Compare');

            $('.product_' + compareParams.product_id).removeClass('compared');
            $('.product_' + compareParams.product_id).html('Compare');
        }
        compareParams.product_slug = (compareParams.product_slug + '-vs-').toString();
        if ($('#compare_product_container').children().length >= 1 && !compareParams.current_url.endsWith('-vs-')) {
            compareParams.current_url = compareParams.current_url + '-vs-';
        }
        var updatedURL = compareParams.current_url.replace(compareParams.product_slug, '');
        if (updatedURL.endsWith('-vs-')) {
            var updatedURL = updatedURL.slice(0, -4);
        }
        $('#compare_link_cta').attr('href', updatedURL);
        $('#compare_product_container').html(data.comp_product);
        $('.compare_num_inner').html('Compare ' + data.count_compared + ' Products');
        $('.compare_num_outer').html(data.count_compared);

        if (data.count_compared < 2) {
            $('#add-to-compare').removeClass('tjin');
            $('#ext_comp_cta').removeClass('tjin');

            $('#add-to-compare').addClass('tjout');
            $('#ext_comp_cta').addClass('tjout');

            $.growl.error({
                title: 'Compare Product ',
                message: 'Please select at least 2 products to compare',
                size: 'large',
            });
        } else {
            tj.generateComparePopup('compare_popup', false);
        }

        if (data.count_compared == 0) {
            $('#add-to-compare').removeClass('show-pop-up');
            $('#ext_comp_cta').addClass('tjout');
        }
    }, onError, onComplete, compareParams);
};

tj.toggleModal = function (modalId) {
    var modal = "#" + modalId;
    if ($(modal).hasClass('show-pop-up')) {
        $(modal).removeClass('show-pop-up');
    } else {
        $(modal).addClass('show-pop-up');
    }
};

tj.toggleClass = function(eleId,className) {
    var ele = "#" + eleId;
    if ($(ele).hasClass(className)) {
        $(ele).removeClass(className);
    } else {
        $(ele).addClass(className);
    }
};

tj.handleWishlist = function(productId, rowId, source = 'default',gaCat=null,gaAction = null,gaLabel = tj.page, productName = null) {
    var url = tj.baseUrl + 'account/add_remove_wishlist';
    var wp = {};
    wp.product_id = productId;
    wp.row_id = rowId != undefined ? rowId : '';

    tj.api.AjaxRequest('POST', url, function(data) {
        if (data.action == 'added') {
            $.growl.notice({
                message: data.msg
            });
            if(gaAction != null)
            {
                tj.events.ga4Events('add_to_wishlist',{
                    cta_name: gaAction + ' | Clicked on Wishlist',
                    product_name: productName
                });
            }
        } else if (data.action == 'login') {
            if(tj.he['login_popup'] != true){
                tj.generateHeaderNavElement('login_popup', 'body');
                tj.he['login_popup'] = true;
            } else {
                tj.toggleModal('log_reg_popup');
            }
            sessionStorage.setItem('pendingWishPid', productId);
            sessionStorage.setItem('pendingWishRid', rowId);
            sessionStorage.setItem('pendingWishGaCat', gaCat);
            sessionStorage.setItem('pendingWishGaAction', gaAction);
            sessionStorage.setItem('pendingWishGaLabel', gaLabel);
            sessionStorage.setItem('pendingWishProductName', productName);
        } else if (data.action == 'exists') {
            $.growl.notice({
                message: data.msg
            });
        } else {
            $.growl.error({
                message: data.msg
            });
        }
        if (data.action != 'login') {
            sessionStorage.removeItem('pendingWishPid');
            sessionStorage.removeItem('pendingWishRid');
            sessionStorage.removeItem('pendingWishGaCat');
            sessionStorage.removeItem('pendingWishGaAction');
            sessionStorage.removeItem('pendingWishGaLabel');

            if (data.action != 'exists') {
                if ($(".wish_" + productId).hasClass('product_liked_btn')) {
                    $(".wish_" + productId).addClass('product_like_btn');
                    $(".wish_" + productId).removeClass('product_liked_btn');
                } else {
                    $(".wish_" + productId).addClass('product_liked_btn');
                    $(".wish_" + productId).removeClass('product_like_btn');
                }
            }

            if(source == 'cart'){
                window.location.reload(true);
            }
        }
    }, onError, onComplete, wp);
};

tj.setUserInfo = function(){
    tj.api.AjaxRequest('GET', tj.baseUrl + 'ajax/user_info',function(data){
        tj.user = data;
    });
};

tj.events.gaEvents = function (category, action, lable = 'NA', value = null, simpleSend = true, newwindow = false, slug = null, includeBu = true, redirect = true) {
    tj.events.ga4Events(category, {'cta_name':action, 'content_type':lable, 'content_name':value}, newwindow, slug, includeBu, redirect);
};

function track_event_new(category, action, lable = 'NA', value = null, simpleSend = true, newwindow = false, slug = null, includeBu = true){
    tj.events.gaEvents(category, action, lable, value, simpleSend, newwindow, slug, includeBu);
};

tj.el_search_events = function (categoryLabel = '', productLabel = '', stringLabel = '', order = '') {
    var eventAction = "Clicked on Search";
    var eventCategory = tj.page;
    var label = "Category = " + categoryLabel + " | Product = " + productLabel + " | String = " + stringLabel + " | Order = " + order;
    tj.events.gaEvents(eventCategory, eventAction, label, order, true);
};

tj.spinner = function(target, changeHtml = true) {
    var color = target.css('backgroundColor');
    var ccv = target.data('lc');
    var spinnerSize = target.data('ss');
    if(spinnerSize != undefined && spinnerSize == 'large'){
        if (color == "rgb(255, 255, 255)" || ccv == 'purple') {
            var spinnerHtml = '<div class="spinnerblock purpleblock"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        } else {
            var spinnerHtml = '<div class="spinnerblock whiteblock"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        }

    } else {
        if (color == "rgb(255, 255, 255)" || ccv == 'purple') {
            var spinnerHtml = '<div class="spinner purple"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        } else {
            var spinnerHtml = '<div class="spinner white"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        }
    }

    var previousHtml = target.html();
    target.html(spinnerHtml);
    if(changeHtml){
        setTimeout(function () {
            target.html(previousHtml);
        }, 2000);
    }
};

tj.imgError = function(i,t) {
    i.onerror = "";
    var url = tj.baseUrl + 'ajax/image_error?type=' + t;

    tj.api.AjaxRequest('GET', url, function(data){
        i.src = data.src;
    });

    return true;
};

tj.openSearchPopup = function () {
    if (!tj.he['search_popup']) {
        tj.generateHeaderNavElement('search_popup', 'replaceWith');
    }
    $('#search').addClass('show_search_popup');
    tj.waitSearchPopup('autocomplete-w1');
    $('html').addClass('fixed_height');
};

tj.waitSearchPopup = function(element) {
    if($("." + element).children().length > 0) {
        $('#keyword_main').focus();
        $('#keyword_main').click();
    } else {
        setTimeout(function(){tj.waitSearchPopup(element)},100);
    }
};

function searchImgError(i,t){
    tj.imgError(i,t);
};

tj.getCookie = function () {
    var cookie = document.cookie;
    var output = {};
    cookie.split(/\s*;\s*/).forEach(function(pair) {
        pair = pair.split(/\s*=\s*/);
        output[pair[0]] = pair.splice(1).join('=');
    });
    return output;
};

tj.initLandbot = function () {
    var botCookie = tj.getCookie();
    var botProductId = (typeof pdp !== 'undefined') ? pdp.product_id : 14481;
    var botProductName = (typeof pdp !== 'undefined') ? pdp.product_name : null;
    var botCategoryId = (typeof cat !== 'undefined') ? cat.category_id : null;
    var botCategoryName = (typeof cat !== 'undefined') ? cat.category_name : null;
    var botIsLoggedIn = tj.user.isLoggedIn;
    var botName = null;
    var botEmail = null;
    var botPhone = null;
    var botReferrer = location.href;
    if(typeof tj.user.customer !== 'undefined'){
        botName = tj.user.customer.name;
        botEmail = tj.user.customer.email;
        botPhone = tj.user.customer.phone;
    }
    var botCustomer = (typeof tj.user.customer !== 'undefined') ? tj.user.customer : null;
    var myLandbot = new Landbot.Livechat({
        configUrl: 'https://chats.landbot.io/v3/H-1055537-AC8Z7T37I4RI38VR/index.json',
        customData: {
            ext_api_cookie: botCookie,
            product_id: botProductId,
            product_name: botProductName,
            category_id: botCategoryId,
            category_name: botCategoryName,
            is_logged_in: botIsLoggedIn,
            name: botName,
            email: botEmail,
            phone: botPhone,
            referrer: botReferrer
        },
    });
};

tj.renderSlider = function (sliderParam = {}) {
    if (!sliderParam) return false;

    var responsive = [];

    var sliderConfig = {
        infinite: (sliderParam.infinite) ? sliderParam.infinite : false,
        arrows: (sliderParam.arrows) ? true : false,
        dots: (sliderParam.dots == undefined) ? false : sliderParam.dots,
        centerMode: (sliderParam.centerMode) ? sliderParam.centerMode : false,
        focusOnSelect: (sliderParam.focusOnSelect) ? sliderParam.focusOnSelect : false,
        slidesToShow: sliderParam.slidesToShow,
        slidesToScroll: sliderParam.slidesToScroll,
        asNavFor: (sliderParam.asNavFor == undefined) ? '' : sliderParam.asNavFor,
        responsive: responsive
    };
    if (sliderParam.nextArrow != undefined && sliderParam.prevArrow != undefined) {
        sliderConfig.nextArrow = sliderParam.nextArrow;
        sliderConfig.prevArrow = sliderParam.prevArrow;
    }
    $(sliderParam.element).not('.slick-initialized').slick(sliderConfig);
};

tj.splitNumber = function (e) {
    let data = e.data || e.target.value;
    if (!data)
        return;
    if (data.length === 1)
        return;
    tj.popuNext(e.target, data);
};

tj.popuNext = function (el, data) {
    el.value = data[0];
    data = data.substring(1);

    var elemId = el.id;
    var idCount = elemId.substring(elemId.length - 1);
    var that = document.getElementById(elemId);
    var nextElem = null;
    if(idCount < 5){
        nextElem = document.getElementById(elemId.substring(0,elemId.length - 1) + (parseInt(idCount)+1));
    }

    if (nextElem && data.length) {
        tj.popuNext(nextElem, data);
    }
};

tj.bindOTPInputEvent = function (elementId, elementClasses) {
    tj.loginOtcInput1 = document.getElementById(elementId);
    tj.loginOtcInputs = document.querySelectorAll('.' + elementClasses);
    tj.loginOtcInputs.forEach(function (input) {
        /**
         * Control on keyup to catch what the user intent to do.
         * I could have check for numeric key only here, but I didn't.
         */
        input.addEventListener('keyup', function (e) {
            var elemId = e.srcElement.attributes.id.value;
            var idCount = elemId.substring(elemId.length - 1);

            var that = document.getElementById(elemId);
            var prevElem = null;
            var nextElem = null;
            if(idCount > 1){
                prevElem = document.getElementById(elemId.substring(0,elemId.length - 1) + (idCount-1));
            }

            if(idCount < 5){
                nextElem = document.getElementById(elemId.substring(0,elemId.length - 1) + (parseInt(idCount)+1));
            }

            /* Break if Shift, Tab, CMD, Option, Control.*/
            if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
                return;
            }
            /* On Backspace or left arrow, go to the previous field.*/
            if ((e.keyCode === 8 || e.keyCode === 37) && prevElem) {
                prevElem.select();
            } else if (e.keyCode !== 8 && nextElem) {
                nextElem.select();
            }

            /*If the target is populated to quickly, value length can be > 1*/
            if (e.target.value.length > 1) {
                tj.splitNumber(e);
            }
        });
        
        
    });
    /**
     * Handle copy/paste of a big number.
     * It catches the value pasted on the first field and spread it into the inputs.
     */
    tj.loginOtcInput1.addEventListener('input', function(e){
        tj.splitNumber(e);
    });
};

tj.events.ga4Events = function (category, param = {}, newwindow = false, slug = null, includeBu = true, redirect = true) {

    param.page_type     = (typeof tj.page_type !== 'undefined') ? tj.page_type : null;
    param.page_slug     = (typeof tj.currentUrl !== 'undefined') ? tj.currentUrl : null;
    if(typeof tj.user !== 'undefined'){
        param.user_id       = tj.user.customer_id;
        param.login         = tj.user.isLoggedIn;
    } else {
        param.user_id       = null;
        param.login         = null;
    }
    param.category_name = (typeof param.category_name !== 'undefined') ? param.category_name : (typeof cat !== 'undefined') ? cat.category_name : (typeof pdp !== 'undefined') ? pdp.category_name : null;
    param.brand_name    = (typeof brand !== 'undefined') ? brand.brand_name : (typeof pdp !== 'undefined') ? pdp.product_brand : null;
    param.product_name  = (typeof param.product_name !== 'undefined') ? param.product_name : null;

    tjgtag("event", category, param);

    if (slug !== null && redirect) {
        if (newwindow) {
            if (includeBu) {
                window.open(tj.baseUrl + slug);
            } else {
                window.open(slug);
            }
        } else {
            if (includeBu) {
                location.href = tj.baseUrl + slug;
            } else {
                location.href = slug;
            }
        }
    }
};

$(document).ready(function() {

    ga('send', 'pageview');

    tj.setUserInfo();

    if(tj.login_slug){
        tj.handlePlanPopup(tj.login_slug);
    }

    tj.pseudoElements(true);
    tj.generateComparePopup('compare_popup', false);

    $('.nav_head_element').click(function() {
        console.log("clicked on burger");
        if (!tj.he[$(this).data('id')]) {
            var ref = $(this).data('ref') !== undefined ? '&ref=' + $(this).data('ref') : '';
            tj.generateHeaderNavElement($(this).data('id'),$(this).data('action'),ref);
            tj.he[$(this).data('id')] = true;
        }
    });
    $('#cart_contents').click(function(){
        tj.generateHeaderNavElement('cart-summary-cont','html');
    });

    $(document).on('click','#search_keyword, .banner-search',function() {
        tj.openSearchPopup();
    });

    $(document).on('click', '.close', function() {
        var targ = $(this).data('target');
        if($(this).data('call') != undefined){
            tj.toggleClass(targ,'tjin');
        } else {
            tj.toggleModal(targ);
        }

        if ($('html').hasClass('fixed_height')) {
            $("html").removeClass('fixed_height');
        }
    });

    $(document).on('click', '.tj-add-to-cart', function() {
        var i = $(this).data('slug');
        let pi = $(this).data('proid');
        let product_name = ($(this).data('galabel') != undefined) ? $(this).data('galabel') : $(this).data('pname');
        sessionStorage.setItem('buy_now_prodid', pi);
        sessionStorage.setItem('buy_now_product', product_name);
        tj.events.ga4Events('Lead initiated',{
            cta_name: "Click on Buy Now",
            product_name: product_name
        });
        tj.handlePlanPopup(i);
        tj.events.clevertap.clickAddToCartEvent(tj.page,pi);
    });

    $(document).on('click', '.tj-buynow-btn', function () {
        var slug = $(this).data('slug');
        var pi = $(this).data('proid');
        let product_name = $(this).data('galabel');
        sessionStorage.setItem('buy_now_prodid', pi);
        sessionStorage.setItem('buy_now_product', product_name);
        tj.events.ga4Events('Lead initiated',{
            cta_name: "Click on Buy Now",
            product_name: product_name
        });
        if (typeof tj.user.customer === "object" && tj.user.customer.hasOwnProperty("email")) {
            tj.captureBuyNowLead();
        }
        tj.events.clevertap.clickAddToCartEvent(tj.page, pi);
        window.location.href = `${tj.baseUrl}ordernow/${slug}`;
    });

    $(document).on('click', '.compare_index,.remove_com_product', function(event) {
        var comParams = {};
        comParams.element = event.target.nodeName;
        comParams.product_id = $(this).data('productid');
        comParams.product_name = $(this).data('pname');
        comParams.img_src = $('.imgid_' + comParams.product_id).attr('src');
        comParams.product_slug = $(this).data('slug');
        comParams.current_url = ($('#compare_link_cta').length > 0) ? $('#compare_link_cta').attr('href') : '';
        comParams.evcat = ($(this).data('gacat') != undefined ) ? $(this).data('gacat'): null;
        comParams.evaction = ($(this).data('gaaction') != undefined) ?$(this).data('gaaction'): null;
        comParams.evlabel = ($(this).data('galabel') != undefined) ? $(this).data('galabel'):null; 
        
        var ceData = $(this).data('cedata');

        if ($(this).hasClass('compared')) {
            comParams.action = 'remove';
            tj.removeFromCompare(comParams);
        } else {
            comParams.action = 'add';
            tj.addToCompare(comParams);
            tj.events.clevertap.addToCompareEvent(tj.page,ceData);
        }
    });

    $(document).on('click', '.wish_trigger', function() {
        var p = $(this).data('proid');
        var r = ($(this).data('rowid') != undefined) ? $(this).data('rowid') : '';
        var s = ($(this).data('source') != undefined) ? $(this).data('source') : '';
        var gaCat = ($(this).data('gacat') != undefined) ? $(this).data('gacat') : null;
        var gaAction = ($(this).data('gaaction') !=  undefined) ? $(this).data('gaaction') : null;
        var gaLabel =  ($(this).data('galabel') !=  undefined) ? $(this).data('galabel') : tj.page;
        var productName = $(this).data('proname');
        if(gaAction != null)
        {
            tj.events.ga4Events('add_to_wishlist_initiated',{
                cta_name: gaAction + ' | Clicked on Wishlist',
                product_name: productName
            });

        }
        tj.handleWishlist(p, r, s, gaCat, gaAction, gaLabel, productName);
    });

    tj.pendingWishPid = sessionStorage.getItem('pendingWishPid');
    tj.pendingWishRid = sessionStorage.getItem('pendingWishRid');
    tj.pendingWishGaCat = sessionStorage.getItem('pendingWishGaCat');
    tj.pendingWishGaAction = sessionStorage.getItem('pendingWishGaAction');
    tj.pendingWishGaLabel = sessionStorage.getItem('pendingWishGaLabel');
    tj.pendingWishProductName = sessionStorage.getItem('pendingWishProductName');

    if (tj.pendingWishPid) {
        tj.handleWishlist(tj.pendingWishPid, tj.pendingWishRid,'default',tj.pendingWishGaCat,tj.pendingWishGaAction,tj.pendingWishGaLabel, tj.pendingWishProductName);
    }

    $(document).on('click', '.CopyClipBoard', function() {
        var link = $(this).data('href');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(link).select();
        document.execCommand("copy");
        $temp.remove();
        $.growl.notice({
            message: "Copied to clipboard"
        });
    });

    $(document).on('click','#cart_contents',function(){
        tj.toggleClass('cart-summary-cont','tjin');
    });

    /*get campaign*/
    if (tj.acdCampaign && Object.keys(tj.acdCampaign).length) {
        var allCookie = tj.getCookie();

        if (allCookie.acdCampaignMobilePopupModal != 'set') {
            setTimeout(function () {
                tj.getCampaignForm();
            }, tj.acdCampaign.display_after_time * 1000);
        }
    }
});

$(document).on('click', '.ga_onlyonce_parent .ga_onlyonce_child', function () {
    var gaParam = {};
    var gaElement = $(this).closest('.ga_onlyonce_parent');
    gaParam.category = gaElement.data('gacat');
    gaParam.action = gaElement.data('gaaction');
    gaParam.lable = gaElement.data('galabel');
    gaParam.value = (gaElement.data('gaval') != undefined) ? gaElement.data('gaval') : null;
    gaParam.simpleSend = (gaElement.data('gasimple') != undefined) ? Boolean(gaElement.data('gasimple')) : true;
    gaParam.newwindow = (gaElement.data('ganw') != undefined) ? Boolean(gaElement.data('ganw')) : false;
    gaParam.slug = (gaElement.data('slug') != undefined) ? gaElement.data('slug') : null;
    gaParam.ibu = (gaElement.data('ibu') != undefined) ? Boolean(gaElement.data('ibu')) : true;
    gaParam.redirect = (gaElement.data('redirect') != undefined) ? Boolean(gaElement.data('redirect')) : true;
    gaElement.removeClass('ga_onlyonce_parent');
    tj.events.gaEvents(gaParam.category, gaParam.action, gaParam.lable, gaParam.value, gaParam.simpleSend, gaParam.newwindow, gaParam.slug, gaParam.ibu, gaParam.redirect);
});

$(document).on('click','.trigger_event',function(){
    var gaParam = {};
    gaParam.category = $(this).data('gacat');
    gaParam.action = $(this).data('gaaction');
    gaParam.lable = $(this).data('galabel');
    gaParam.value = ($(this).data('gaval') != undefined) ? $(this).data('gaval') : null;
    gaParam.simpleSend = ($(this).data('gasimple') != undefined) ? Boolean($(this).data('gasimple')) : true;
    gaParam.newwindow = ($(this).data('ganw') != undefined) ? Boolean($(this).data('ganw')) : false;
    gaParam.slug = ($(this).data('slug') != undefined) ? $(this).data('slug') : null;
    gaParam.ibu = ($(this).data('ibu') != undefined) ? Boolean($(this).data('ibu')) : true;
    gaParam.redirect = ($(this).data('redirect') != undefined) ? Boolean($(this).data('redirect')) : true;
    if($(this).data('onlyonce') != undefined)
    {
      $(this).removeClass('trigger_event');
    }
    tj.events.gaEvents(gaParam.category, gaParam.action, gaParam.lable, gaParam.value, gaParam.simpleSend, gaParam.newwindow, gaParam.slug, gaParam.ibu,gaParam.redirect);
});

$(document).on('click', '.tj-acd-form', function(e){
        
    tj.loadScript('tj-acd-scripts-loader', tj.envUrl + '/assets/acd/acd-scripts/js/acd-scripts.js?v=5.5&i=website&e=l')
        .then(() => {
            if($("#tj_product_plan_popup").hasClass('show-pop-up')){
                $("#tj_product_plan_popup").removeClass('show-pop-up');
                $("html").removeClass('fixed_height');
            }
            setTimeout(function(){
                loadTemplate(e.target); 
            },100); 
        })
        .catch(() => {});
});

$(document).on('click','.tj-loader',function(){
    var target = $(this);
    tj.spinner(target);
});

$(document).on('click','.pop-up-initiator',function(){
    $('html').addClass('fixed_height');
    tj.toggleModal('acdPopupModal');
});

$(document).click(function(e){
    if($(e.target).hasClass('overlay') || $(e.target).hasClass('overlay-1') || $(e.target).hasClass('add-pto')){
        $(e.target).removeClass('show-pop-up');
        $('html').removeClass('fixed_height');
        $(e.target).hasClass('add-pto') && $('#ext_comp_cta').removeClass('tjout');
    }
    if($(e.target).attr('id') == 'gallery-pop'){
        pdp.youtubePlayerStop();
    }
});

$(document).mouseup(function(){
    if(!tj.tpLoaded){
        tj.loadThirdParty();
    }
});

$('*[data-toggle="collapse"]').click(function(){
    var t = $(this).attr('href');
    $(t).toggle('slow');
});

$(document).on('click','.see_all_prod,.open-url',function(){
  window.open($(this).data('link'),$(this).data('target')==undefined?'_parent':$(this).data('target'));
});


tj.fbq_event = function(eventName,param,isCustom=false){
    var data={};
    if(param==null){
        data=data;
    }else{
        data=param;
    }
    
    if (typeof fbq === 'function') {
        (isCustom == false) ? fbq('track', eventName, data) :fbq('trackCustom', eventName, data);
    }
};

tj.gtag_event = function(eventName,param){
    var data={};
    if(param==null){
        data=data;
    }else{
        data=param;
    }
    gtag('event',eventName,data)
};


tj.getCampaignForm = function () {
    if(tj.isOpen == true){
        return;
    }
    var fparam = {};

    if (typeof pdp !== 'undefined') {
        fparam.product_id =  pdp.product_id;
        fparam.product_name = pdp.product_name;
    }

    if (typeof cat !== 'undefined') { 
        fparam.category_id = cat.category_id;
        fparam.category_name = cat.category_name;
    }
    
    fparam.heading = tj.acdCampaign.heading;
    fparam.sumry = tj.acdCampaign.summary;
    fparam.media_type = tj.acdCampaign.media_type;
    fparam.media_path = tj.acdCampaign.media_path;
    fparam.media_tag_type = tj.acdCampaign.media_tag_type;
    fparam.flag = 'campaign';
    tj.api.AjaxRequest('POST', tj.baseUrl + 'form/get_default_category_form', function (result) {
        $("#tj_product_plan_popup").after(result);
    }, onError, function () {
        tj.loadScript('tj-validator-js', tj.baseUrl + 'assets/new-assets/js/jquery.validate.min.js')
            .then(() => { 
                if (!$("#tj-acd-modal").hasClass('tj-visible') && !$("#tj_product_plan_popup").hasClass('show-pop-up')) {
                    tj.toggleModal('acdCampaignMobilePopupModal');
                    document.cookie="acdCampaignMobilePopupModal=set; path=/";
                }
            })
            .catch(() => {});
    }, fparam);
};

$(document).on('click', '.review-video', function (e) { 
    let videoSrc = $(this).data('vid');
    let height = $('#img_'+videoSrc).outerHeight();
    let width = $('#img_'+videoSrc).outerWidth();
    let iframe = document.createElement('iframe');
    iframe.className = "player";
    iframe.src = "https://www.youtube-nocookie.com/embed/" + videoSrc+ "?autoplay=true";
    iframe.width = width;
    iframe.height = height;
    iframe.frameBorder = "0";
    iframe.sandbox = "allow-same-origin allow-scripts allow-presentation";
    iframe.allow = "autoplay";

    let target = $(this).parent();
    $(target).html(iframe);
});

$(window).scroll(function () {
    tj.scrollTop = $(window).scrollTop();

    if (tj.scrollTop > 80) {
        $('.head_searchbar').removeClass('tjout');
        $('.logo_section').addClass('tjout');
        $('.sheduledemo-top').hide();
        $('.pdp-overview').addClass('pdp-overview-sticky');
    } else {
        $('.head_searchbar').addClass('tjout');
        $('.logo_section').removeClass('tjout');
        $('.sheduledemo-top').show();
        $('.pdp-overview').removeClass('pdp-overview-sticky');
    }

    if ($(".pdp-icons-div").length) {
        let stickyPos = $(".pdp-icons-div").offset().top;
        if (tj.scrollTop > stickyPos) {
            $('.ris-menu').show();
        } else {
            $('.ris-menu').hide();
        }
    }
});


$(document).on('click', '.slider-ga-event .slick-arrow', function () {
    if(!$(this).parent().hasClass('clicked')){
        var gaCategory = tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page';
        var gaAction = ($(this).parent().data('gaaction') != undefined) ? $(this).parent().data('gaaction') : '';
        var gaLabel = ($(this).parent().data('galabel') != undefined) ? $(this).parent().data('galabel') : '';
        tj.events.gaEvents(gaCategory, gaAction, gaLabel + 'Clicked on Arrow | '+tj.page);
        $(this).parent().addClass('clicked');
    } 
});

$('.slider-ga-event').on('swipe', function(event, slick, direction){
    if(!$(this).hasClass('swiped')){
        var gaCategory = tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page';
        var gaAction = ($(this).data('gaaction') != undefined) ? $(this).data('gaaction') : '';
        var gaLabel = ($(this).data('galabel') != undefined) ? $(this).data('galabel') : '';
        tj.events.gaEvents(gaCategory, gaAction, gaLabel + 'swiped | '+tj.page);
        $(this).addClass('swiped');
    } 
});


$(document).ready(function () {
    
    $(window).scroll(function () {
        if (tj.page_type == 'category') {
            let numItems = $('.product-box').length;
            let productList = document.getElementsByClassName('product-box'); 
            
            if (productList[4] && $(this).scrollTop() > productList[4].offsetTop && numItems > 5) {
                $('#back-to-top-btn').fadeIn();
            } else {
                $('#back-to-top-btn').fadeOut();
            }
        } else if (tj.page_type == 'product') {
            if ($(this).scrollTop() > $('#description').offset().top-300) {
                $('#back-to-top-btn').fadeIn();
            } else {
                $('#back-to-top-btn').fadeOut();
            }
        }
        
    });
    $(document).on('click', '#back-to-top-btn', function () {
        let topPostition = 0;
        if (tj.page_type == 'category') {
            topPostition = $('#pageDynamicRows').offset().top - 110;
        } else if (tj.page_type == 'product') { 
            topPostition = $('#overview').offset().top - 50;
        }

        $("html, body").animate({
            scrollTop: topPostition
        }, 600);
        
        tj.events.gaEvents(tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) +' Page', 'Back to Top', tj.page);

        return false;
    });

    if (tj.page_type == 'category' || tj.page_type == 'product') {
        $('body').append('<a href="javascript:void(0)" id="back-to-top-btn" class="back-top" style="display: none;">'+
            '<span><img alt="icontop" src="'+ tj.cdnUrl + 'V2/img/icon_top.svg" /></span>'+
        '</a>');
    }
});

tj.handleYoutubeFacade = function (autoplay = false, allowFullScreen = false) {
    document.querySelectorAll("div.facade").forEach((elem, _) => {
        var iframe = document.createElement('iframe');
        if(allowFullScreen){
            iframe.setAttribute('allowFullScreen', '');
        }
        iframe.className = "player";
        iframe.src = "https://www.youtube.com/embed/" + elem.dataset.vid + "?rel=0" + ((autoplay) ? "&autoplay=true" : "");
        iframe.width = elem.dataset.width;
        iframe.height = elem.dataset.height;
        iframe.frameBorder = "0";
        iframe.allow = autoplay ? "autoplay" : "";
        iframe.sandbox = "allow-same-origin allow-scripts allow-presentation";

        $(elem).removeClass('facade');
        $(elem).html(iframe);
    });
};

$(document).on('click', '.trigger_ga4_event', function (e) {
    var ga4Param = {};
    var eventParam = {};
    var link ="";
    if(e.target.localName == "a"){
        e.preventDefault();
        var link = $(this).attr('href');
    }
    ga4Param.cta_name = $(this).data('gaaction');
    ga4Param.content_type = ($(this).data('galabel') != undefined) ? $(this).data('galabel') : null;
    ga4Param.product_name = ($(this).data('proname') != undefined) ? $(this).data('proname') : null;

    eventParam.category = $(this).data('gacat');
    eventParam.newwindow = ($(this).data('ganw') != undefined) ? Boolean($(this).data('ganw')) : false;
    eventParam.slug = ($(this).data('slug') != undefined) ? $(this).data('slug') : null;
    eventParam.ibu = ($(this).data('ibu') != undefined) ? Boolean($(this).data('ibu')) : true;
    eventParam.redirect = ($(this).data('redirect') != undefined) ? Boolean($(this).data('redirect')) : true;
    if(link != ''){
        eventParam.slug = link;
        eventParam.ibu = false;
    }
    if($(this).data('onlyonce') != undefined)
    {
      $(this).removeClass('trigger_ga4_event');
    }
    tj.events.ga4Events(eventParam.category, ga4Param, eventParam.newwindow, eventParam.slug, eventParam.ibu, eventParam.redirect);
});