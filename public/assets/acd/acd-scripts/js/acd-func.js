var tj = tj || {};

tj.events = tj.events || {};
tj.acdPopup = tj.acdPopup || {};
var subURL = window.location.protocol + '//' + window.location.host;	
if(subURL == "https://blog.dev.techjockey.com"){
  subURL = "https://dev.techjockey.com"; 
  tj.envUrl = subURL;
}else if(subURL == "http://localhost:3007"){
  subURL = "http://localhost:3000";
  tj.envUrl = subURL;
} else {
  tj.envUrl = subURL;
}
tj.acdPopupVariables = tj.acdPopupVariables || {};

// tj.acdPopupVariables["suburl"] = window.location.protocol + '//' + window.location.host;
tj.acdPopupVariables["suburl"] = subURL;

tj.acdPopup.loadScript = function (e, src, h = false) {
    if (!document.getElementById(e)) {
        tj.s = document.createElement('script');
        (tj.s.type = 'text/javascript'),
                (tj.s.src = src),
                (tj.s.id = e),
                (tj.s.async = true);
        h ? document.head.appendChild(tj.s) : document.body.appendChild(tj.s);

        return new Promise((res, rej) => {
            tj.s.onload = function () {
                res();
            };
            tj.s.onerror = function () {
                rej();
            };
        });
    } else {
        return new Promise((res, rej) => {
            res();
        });
}
};

tj.setAcdPopupVariables = function () {
    tj.acdPopupVariables['tjAcdVisible'] = 'tj-visible';
    tj.acdPopupVariables['default_product_id'] = '14481';
    tj.acdPopupVariables['slideIndex'] = 0;
    tj.acdPopupVariables['today'] = new Date();
    tj.acdPopupVariables['acd_start_hour'] = '10';
    tj.acdPopupVariables['acd_end_hour'] = '18';
    tj.acdPopupVariables['acd_end_minute'] = '55';
    tj.acdPopupVariables['acd_demo_end_hour'] = '18';
    tj.acdPopupVariables['acd_demo_end_minute'] = '55';
    tj.acdPopupVariables['acd_action'] = 'call';
    tj.acdPopupVariables['current_date'] = tj.acdPopupVariables['today'].getDate();
    tj.acdPopupVariables['current_month'] = tj.acdPopupVariables['today'].getMonth() + 1;
    tj.acdPopupVariables['current_year'] = tj.acdPopupVariables['today'].getFullYear();
    tj.acdPopupVariables['current_day'] = tj.acdPopupVariables['today'].getDay();
    tj.acdPopupVariables['current_hour'] = tj.acdPopupVariables['today'].getHours();
    tj.acdPopupVariables['current_min'] = tj.acdPopupVariables['today'].getMinutes();
    tj.acdPopupVariables['current_time'] = tj.acdPopupVariables['today'].getTime();
    tj.acdPopupVariables['current_hr_min'] = tj.acdPopupVariables['current_hour'] + ':' + tj.acdPopupVariables['current_min'];
    tj.acdPopupVariables['acdWorkingHoursRefreshInterval'] = clearInterval(tj.acdPopupVariables['acdWorkingHoursRefreshInterval']);
    tj.acdPopupVariables['targetId'] = null;
    tj.acdPopupVariables['targetCategoryId'] = null;
    tj.acdPopupVariables['targetProductId'] = null;
    tj.acdPopupVariables['targetProductDetails'] = null;
    tj.acdPopupVariables['targetCategoryName'] = null;
    tj.acdPopupVariables['tjUrl'] = {
        l: tj.acdPopupVariables["suburl"],
        d: tj.acdPopupVariables["suburl"],
        b: tj.acdPopupVariables["suburl"],
        p: tj.acdPopupVariables["suburl"],
    };
    tj.acdPopupVariables['count'] = 120;
    tj.acdPopupVariables.schedule_acd_res_data = {};
    tj.acdPopupVariables['acdOtpTimerCounter'] = clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
    tj.acdPopupVariables['showSlidesInterval'] = clearInterval(tj.acdPopupVariables['showSlidesInterval']);
    tj.acdPopupVariables['is_otp_verifed'] = false;
    tj.acdPopupVariables['isPdpPage'] = false;
    tj.acdPopupVariables['acdResendOtpFlag'] = false;
    tj.acdPopupVariables['isEventTriggered'] = false;
    tj.acdPopupVariables['loadedTemplate'] = "default";
    tj.acdPopupVariables['loadedTemplateName'] = "";
    tj.acdPopupVariables['loadedTemplateCampaignName'] = "";
    tj.acdPopupVariables['device_type'] = 'desktop';
    tj.acdPopupVariables['jsonFields'] = ['datesDisabled'];
    tj.acdPopupVariables.acd_popup_data = {};
    tj.acdPopupVariables.acdOtpSelectors = {
        acd_otp_input_selector: '.acd_otp_digits input',
        acd_otp_submit_selector: '#acd_otp_verify',
        acd_resend_otp_selector: '#acd_resend_otp_link',
        acd_otp_number_change_selector: '#acd_otp_num_change_link',
        acd_otp_timer_selector: '#acd_otp_timer',
        acd_otp_screen_selector: '#acd_otp_screen',

    };
    tj.acdPopupVariables.schedule_button_text = "";
    tj.acdPopupTemplate = {};
    tj.acdPopupVariables.defaultOptions = {
        allowOneSidedRange: !1,
        autohide: !0,
        beforeShowDay: null,
        beforeShowDecade: null,
        beforeShowMonth: null,
        beforeShowYear: null,
        calendarWeeks: !1,
        clearBtn: !1,
        dateDelimiter: ',',
        datesDisabled: [],
        daysOfWeekDisabled: [0, 6],
        daysOfWeekHighlighted: [],
        defaultViewDate: tj.acdPopupVariables['today'],
        disableTouchKeyboard: !1,
        format: 'mm/dd/yyyy',
        language: 'en',
        maxDate: null,
        maxNumberOfDates: 1,
        maxView: 3,
        minDate: tj.acdPopupVariables['today'],
        nextArrow: '»',
        orientation: 'auto',
        pickLevel: 0,
        prevArrow: '«',
        showDaysOfWeek: !0,
        showOnClick: !0,
        showOnFocus: !0,
        startView: 0,
        title: '',
        todayBtn: !1,
        todayHighlight: !1,
        updateOnBlur: !0,
        weekStart: 0,
    };
    tj.acdPopupVariables['isDrawer'] = 0;
    tj.acdPopupVariables['isBlog'] = 0;
    tj.acdPopupVariables['isDownload'] = 0;
    tj.acdPopupVariables['downloadBtnText'] = '';
    tj.acdPopupVariables['targetGaLabel'] = '';
    tj.acdPopupVariables['videoCampaign'] = {};
    tj.acdPopupVariables['targetFormName'] = '';
};

function params() {
    let e = {},
            t = document.getElementById('tj-acd-func').src,
            n = new URLSearchParams(t.substring(t.indexOf('?') + 1));
    return (
            (e.o = n.get('o')),
            (e.i = n.get('i')),
            (e.en = n.get('e')),
            (e.d = n.get('d')),
            e
            );
}
var up = params();

var initFormActions = function (target) {
    /** Update time after ever half minute */
    $('body').css('overflow', 'hidden');
    tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].initFormActions();
    var acdDateRefreshTimer = function () {
        updateJsDates(false);
    };
    tj.acdPopupVariables['schedule_acd_res_data'] = {};
    tj.acdPopupVariables.acd_popup_data = {};
    clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
    tj.acdPopupVariables['count'] = 120;
    var action = target.getAttribute('data-action');
    var product_id = target.getAttribute('data-proid');
    setTimeout(function () {
        tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].change_first_form_content(action, product_id);
        updateJsDates();
        tj.acdPopupVariables['acdWorkingHoursRefreshInterval'] = setInterval(acdDateRefreshTimer, 15000);
    }, 50);
};


var acdTemplateLoaderPromise = function (product_id, category_id = "", isPSR = 0, isDrawer = 0, isBlog =0, isDownloadable=0,isDownload=0, page_type="", page="", isVideo=0) {
    return new Promise((resolve, reject) => {
        fetch(tj.acdPopupVariables['tjUrl'][up.en] + "/acd/tj_acd_form_loader?isPSR=" + isPSR + "&isDrawer=" + isDrawer  + "&isDownloadable=" + isDownloadable + "&isDownload=" + isDownload + "&category_id=" + category_id + "&product_id=" + product_id + "&o=" + up.o + "&i=" + up.i + '&isBlog=' + isBlog  + '&page_type='+ page_type + '&page=' + page + '&isVideo=' + isVideo, {
            method: "GET",
            headers: {}
        }).then((e) => e.json()).then((e) => {
            if (!1 === e.content.status) {
                console.warn(e.content.html);
                reject(e);
            } else {
                resolve(e);
            }
        }).catch((e) => {
            console.log("error", e);
            reject(e);
        });
    });
};

var loadTemplateJs = function (templateKey, device_type) {
    return new Promise((res, rej) => {
        tj.acdPopup.loadScript('tj-acd-popup-template-loader', tj.acdPopupVariables["suburl"] + `/assets/acd/popup/${templateKey}/${device_type}/js/template.js?t=1` + new Date())
                .then(() => {
                    res();
                })
                .catch(() => {
                    rej();
                });

    });
};

var acdPopupDataPromise = function (params) {
    return new Promise((resolve, reject) => {
        fetch(tj.acdPopupVariables['tjUrl'][up.en] + "/acd-popup-data", params)
                .then((e) => e.json())
                .then((e) => {
                    if (1 == e.status) {
                        resolve(e);
                    } else {
                        console.log('Some error occurred', e);
                        reject(e);
                    }
                }).catch((e) => {
            console.log("error", e);
            reject(e);
        });
    });

};

var renderTemplate = function (e) {
    var t = document.createElement('div');
    t.id = 'tj-acd-container';
    t.innerHTML = e.content.html;
    document.body.appendChild(t);
    var n = function (e, t, n) {
        e.addEventListener
                ? e.addEventListener(t, n)
                : e.attachEvent('on' + t, function () {
                    n.call(e);
                });
    }
    var a = function (e, t, a) {
        for (var d = document.querySelectorAll(e), l = 0; l < d.length; l++)
            n(d[l], t, a);
    }
    tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']]
            .renderTemplate(a, showSlides, fetchResult);
    setHour();

    return new Promise((resolve, reject) => {
        var acdPageOtc1 = document.getElementById('tj-acd-page-otc-1'),
                acdPageOtcInputs = document.querySelectorAll('.tj-acd-page-otc'),
                acdSplitNumber = function (e) {
                    let data = e.data || e.target.value;
                    if (!data)
                        return;
                    if (data.length === 1)
                        return;

                    acdPopuNext(e.target, data);
                },
                acdPopuNext = function (el, data) {
                    el.value = data[0];
                    data = data.substring(1);
                    if (el.nextElementSibling && data.length) {
                        acdPopuNext(el.nextElementSibling, data);
                    }
                };

        acdPageOtcInputs.forEach(function (input) {
            input.addEventListener('keyup', function (e) {
                if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
                    return;
                }
                if ((e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT") {
                    this.previousElementSibling.select();
                } else if (e.keyCode !== 8 && this.nextElementSibling) {
                    this.nextElementSibling.select();
                }
                if (e.target.value.length > 1) {
                    acdSplitNumber(e);
                }
            });

            input.addEventListener('focus', function (e) {
                if (this === acdPageOtc1)
                    return;
                if (acdPageOtc1.value == '') {
                    acdPageOtc1.focus();
                }
                if (this.previousElementSibling.value == '') {
                    this.previousElementSibling.focus();
                }
            });
        });

        acdPageOtc1 && acdPageOtc1.addEventListener('input', acdSplitNumber);

        $.getScript(tj.acdPopupVariables["suburl"] + "/assets/V2/js/intlTelInput/intlTelInput.min.js", function (data, textStatus, jqxhr) {
            acd_phone = document.querySelector("#acd_phone");
            acd_iti = window.intlTelInput(acd_phone, {
                preferredCountries: ['in', 'us'],
                separateDialCode: true,
                utilsScript: tj.acdPopupVariables["suburl"] + "/assets/V2/js/intlTelInput/utils.js",
            });
            if (textStatus == "success") {
                resolve();
            } else {
                reject();
            }
        });
    });
};

var bindTemplateData = function (e, target, action, buttonText) {
    if (1 == e.status) {
        $(target).html(buttonText);
        $(target).removeAttr('disabled');
        initFormActions(target);
        tj.acdPopupVariables['targetProductDetails'] = e.data;
        document
                .getElementById('tj-acd-category-id')
                .setAttribute(
                        'value',
                        tj.acdPopupVariables['targetCategoryId'] ? tj.acdPopupVariables['targetCategoryId'] : e.data.category_id
                        );
        document
                .getElementById('tj-acd-product_id')
                .setAttribute('value', e.data.product_id);
        document
                .getElementById('tj-acd-product-name')
                .setAttribute('value', e.data.product_name);
        document
                .getElementById('tj-acd-software-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tj-acd-test-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tj-acd-brand-id')
                .setAttribute('value', e.data.brand_id);
        document
                .getElementById('tj-acd-brand-name')
                .setAttribute('value', e.data.brand_name);
        document
                .getElementById('tj-acd-action')
                .setAttribute('value', action);
        document
                .getElementById('tj-acd-lead-type')
                .setAttribute('value', action == 'GetFreeDemo' ? 'demo' : 'call');
        document
                .getElementById('tj-acd-lead-model-id')
                .setAttribute('value', e.data.acd_lead_model_id);
        document
                .getElementById('tj-acd-lead-model-type')
                .setAttribute('value', e.data.acd_lead_model_type);
        document
                .getElementById('tj-acd-brand-onboarding-flag')
                .setAttribute('value', e.data.brand_onboarded);
        
        if (typeof tj.events.ga4Events === "function") {
            let pname = target.getAttribute('data-proname') || e.data.product_name;

            tj.events.ga4Events('Lead initiated',{
                cta_name: action,
                product_name: pname,
                content_name: tj.acdPopupVariables['loadedTemplateName'],
                category_name: (tj.acdPopupVariables['targetCategoryName'] && tj.acdPopupVariables['targetCategoryName'] != '') ? tj.acdPopupVariables['targetCategoryName'] : '',
                module: (tj.acdPopupVariables['targetFormModule'] && tj.acdPopupVariables['targetFormModule'] != '') ? tj.acdPopupVariables['targetFormModule'] : '',
                form_name: (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName']
            });
        } else {
            console.warn("tj.events.ga4Events function is missing");
        }
        setTimeout(function () {
            acd_iti.setCountry('in');
            if (e.data.hasOwnProperty('customer_phone')) {
                acd_iti.setNumber(e.data.customer_phone);
                $(
                        "input[name='name'],input[name='email']"
                        )
                        .parent('.form_field_outer')
                        .addClass('form_field_outer_activated');
                $("input[name='name']").val(
                        e.data.customer_name
                        );
                $("input[name='email']").val(
                        e.data.customer_email
                        );
            }
            tj.acdPopupVariables.acd_popup_data = e.data;
            tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].createAcdQuestions(e.data);
            registerAcdJqueryEvents();
            setAcdVideo(e.data.acd_media);
            setTimeout(function () {
                $('#acd_phone').val(
                        $('#acd_phone')
                        .val()
                        .replace(/[^0-9]/g, '')
                        );
            }, 100);
        }, 50);
        setTimeout(function () {
            try {
                fbq('trackCustom', 'Lead initiated', {
                    Name: e.data.product_name,
                    Action: action,
                });
            } catch(error) {
                console.warn(error);
            }
        }, 500);
    } else {
        $(target).html(buttonText);
        $(target).removeAttr("disabled");
        console.log('Some error occurred', e);
    }
};

var loadTemplate = function (target) {
    tj.setAcdPopupVariables();

    $("#tj-acd-modal,#tj-acd-date,#tj-acd-container,script[src*='intlTelInput.min.js'],#tj-acd-popup-template-loader").remove();
    $(".datepicker-dropdown").remove();

    tj.acdPopupVariables['targetId'] = target.getAttribute('data-id');
    tj.acdPopupVariables['targetCategoryId'] = target.getAttribute('data-categoryid');
    tj.acdPopupVariables['targetCategoryName'] = target.getAttribute('data-categoryname');
    tj.acdPopupVariables['targetGaLabel'] = target.getAttribute('data-galabel') || tj.page;
    tj.acdPopupVariables['targetUserIntent'] = target.getAttribute('data-userintent') || '';
    tj.acdPopupVariables['showSpinner'] = target.getAttribute('data-showspinner') || true;
    tj.acdPopupVariables['targetFormName'] = target.getAttribute('data-targetform') || '';
    tj.acdPopupVariables['targetFormModule'] = target.getAttribute('data-gamodule') || '';
    
    /** Check if product is downloadable start*/
    var isDownloadable = target.getAttribute('data-prodDownload') ? target.getAttribute('data-prodDownload') : 0;
    if (isDownloadable) {
        tj.acdPopupVariables['downloadBtnText'] = target.name;
        if (!tj.acdPopupVariables['downloadBtnText']) {
            console.error('Button name is mandatory');
            return false;
        }
    }
    /*** ------------ download button end----------------- */

    var action = target.getAttribute('data-action');
    var product_id = target.getAttribute('data-proid');

    var isPDP = target.getAttribute('data-ispdp');

    if (isPDP > 0) {
        tj.acdPopupVariables['isPdpPage'] = true;
        product_id = isPDP;
    }

    var targetWidth = $(target).width();

    var targetColor = $(target).css('color');
    var buttonText = $(target).html();
    
    var spinnerHtml = `<div style="margin: 0 auto;width: 100%;text-align: center;height: auto;">
                            <div style="background-color:${targetColor};width: 10px;height: 10px;margin: 0px 2px;border-radius: 100%;display: inline-block;-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;animation: sk-bouncedelay 1.4s infinite ease-in-out both;-webkit-animation-delay: -0.32s;animation-delay: -0.32s;"></div>
                            <div style="background-color:${targetColor};width: 10px;height: 10px;margin: 0px 2px;border-radius: 100%;display: inline-block;-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;animation: sk-bouncedelay 1.4s infinite ease-in-out both;-webkit-animation-delay: -0.16s;animation-delay: -0.16s;"></div>
                            <div style="background-color:${targetColor};width: 10px;height: 10px;margin: 0px 2px;border-radius: 100%;display: inline-block;-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;animation: sk-bouncedelay 1.4s infinite ease-in-out both;"></div>
                       </div>`;
    if(tj.acdPopupVariables['showSpinner'] == true){
        $(target).html(spinnerHtml);
    }
    $(target).attr("disabled", "disabled");
    $(target).width(targetWidth);

    var a = {
        p: product_id
    };

    tj.acdPopupVariables['targetProductId'] = product_id;

    var isPSR = 0;
    var isDrawer = 0;
    var isBlog = 0;
    var isDownload = 0;
    if (tj.acdPopupVariables['targetId'] === "PersonalizedSoftwareRecommendation") {
        isPSR = 1;
        if (!tj.acdPopupVariables['targetCategoryId']) {
            return;
        }
        a['activity'] = "PersonalizedSoftwareRecommendation";   
    }else if (tj.acdPopupVariables['targetId'] === "AcdDrawer") {
        tj.acdPopupVariables['isDrawer'] = isDrawer = 1;
    }else if (tj.acdPopupVariables['targetId'] === "AcdBlog") {
        tj.acdPopupVariables['isBlog'] = isBlog = 1;
    }else if (tj.acdPopupVariables['targetId'] === "download") {
        tj.acdPopupVariables['isDownload'] = isDownload = 1;
    }
    if(location.href.includes("/c/"))
    {
        a['activity'] = "LandingPage";
    }

    if(tj.acdPopupVariables['targetCategoryId'] != null && tj.acdPopupVariables['targetCategoryId'] != '' && tj.acdPopupVariables['targetCategoryId'] != 'null'){
        a['category'] = tj.acdPopupVariables['targetCategoryId'];
    }

    var l = {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
    Promise.all([acdTemplateLoaderPromise(product_id, tj.acdPopupVariables['targetCategoryId'], isPSR, isDrawer, isBlog, isDownloadable, isDownload, tj.page_type, tj.page), acdPopupDataPromise(l)]).then((values) => {
        if (values[0]) {
            
            tj.acdPopupVariables['loadedTemplate'] = values[0].content.template_key || 'default';
            tj.acdPopupVariables['loadedTemplateName'] = values[0].content.template_name || "";
            tj.acdPopupVariables['loadedTemplateCampaignName'] = values[0].content.campaign_name || "";
            tj.acdPopupVariables['device_type'] = values[0].content.device_type || 'desktop';
            loadTemplateJs(tj.acdPopupVariables['loadedTemplate'], tj.acdPopupVariables['device_type']).then((e) => {
                renderTemplate(values[0]).then((e) => {
                    bindTemplateData(values[1], target, action, buttonText);
                }).catch((e) => {
                    console.warn(e);
                });
            }).catch((e) => {
                console.warn(e);
            });
        }
    }).catch((e) => {
        $(target).html(buttonText);
        $(target).removeAttr("disabled");
        console.log('PromiseAll Error ::', e);
    });
};

document.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.tj-acd-modal.tj-visible')){
        document.querySelector('.tj-acd-pop-up-section.show_pop').classList.remove('show_pop');
    
            document
            .querySelector('.tj-acd-modal.tj-visible')
            .classList.remove(tj.acdPopupVariables['tjAcdVisible']);
    }
    $('.tj-acd-notification').hide();
    $('body').css('overflow', 'auto');
});

document.addEventListener('keyup', (e) => {
    'Escape' == e.key &&
            document.querySelector('.tj-acd-modal.tj-visible') &&
            document
            .querySelector('.tj-acd-modal.tj-visible')
            .classList.remove(tj.acdPopupVariables['tjAcdVisible']);
    $('.tj-acd-notification').hide();
});

$('body').on('click', '.datepicker', function (e) {
    updateJsDates();
});

function switchPicker(sandbox) {
    const t = sandbox.querySelector('.date');
    window.demoPicker = new Datepicker(t, tj.acdPopupVariables['defaultOptions']);
}

function showSlides() {
    var e,
            t = document.getElementsByClassName('tj-image-sliderfade'),
            n = document.getElementsByClassName('dot');
    for (e = 0; e < t.length; e++)
        t[e].style.display = 'none';
    for (++tj.acdPopupVariables['slideIndex'] > t.length && (tj.acdPopupVariables['slideIndex'] = 1), e = 0; e < n.length; e++)
        n[e].className = n[e].className.replace(' active', '');
    t[tj.acdPopupVariables['slideIndex'] - 1] && (t[tj.acdPopupVariables['slideIndex'] - 1].style.display = 'block');
    n[tj.acdPopupVariables['slideIndex'] - 1] && (n[tj.acdPopupVariables['slideIndex'] - 1].className += ' active');
}

function updateJsDates(refreshTime = true) {
    tj.acdPopupVariables['today'] = new Date();
    tj.acdPopupVariables['current_date'] = tj.acdPopupVariables['today'].getDate();
    tj.acdPopupVariables['current_month'] = tj.acdPopupVariables['today'].getMonth() + 1;
    tj.acdPopupVariables['current_year'] = tj.acdPopupVariables['today'].getFullYear();
    tj.acdPopupVariables['current_day'] = tj.acdPopupVariables['today'].getDay();

    var action = document.getElementById('tj-acd-action') && document.getElementById('tj-acd-action').value || '';

    /* if (action == 'GetFreeDemo') {
        tj.acdPopupVariables['acd_action'] = 'GetFreeDemo';
        tj.acdPopupVariables['today'].setHours(tj.acdPopupVariables['today'].getHours() + 2);
        let m = Math.ceil(tj.acdPopupVariables['today'].getMinutes() / 5) * 5;
        tj.acdPopupVariables['today'].setMinutes(m);
    } else {
        let m = Math.ceil(tj.acdPopupVariables['today'].getMinutes() / 5) * 5 + 15;
        tj.acdPopupVariables['today'].setMinutes(m);
    } */
    let m = Math.ceil(tj.acdPopupVariables['today'].getMinutes() / 5) * 5 + 15;
    tj.acdPopupVariables['today'].setMinutes(m);

    tj.acdPopupVariables['current_hour'] = tj.acdPopupVariables['today'].getHours();
    tj.acdPopupVariables['current_min'] = tj.acdPopupVariables['today'].getMinutes();
    tj.acdPopupVariables['current_time'] = tj.acdPopupVariables['today'].getTime();
    tj.acdPopupVariables['current_hr_min'] = tj.acdPopupVariables['current_hour'] + ':' + tj.acdPopupVariables['current_min'];

    if (!isWorkingHours()) {
        clearInterval(tj.acdPopupVariables['acdWorkingHoursRefreshInterval']);

        /* if (action != 'GetFreeDemo') {
            if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                tj.acdPopupVariables.schedule_button_text = 'Schedule Call';
                document
                        .getElementById('tj-acd-selectdate')
                        .classList.remove('date-closed');
            } else {
                tj.acdPopupVariables.schedule_button_text = 'Show Products';
                document.getElementById('tj-acd-selectdate').classList.add('date-closed');
            }
            document.getElementById('tj-call-now').setAttribute('value', '0');
            document.getElementById('tj-acd-sfl').style = 'display:none';
            document.getElementById('tj-acd-sub-button').innerHTML =
                    tj.acdPopupVariables.schedule_button_text;
            document.getElementById('acd-agreement-text-action') &&
                    (document.getElementById('acd-agreement-text-action').innerHTML =
                            tj.acdPopupVariables.schedule_button_text);
        } */

        if (tj.acdPopupVariables['targetId'] == 'PersonalizedSoftwareRecommendation') {
            tj.acdPopupVariables.schedule_button_text = 'Show Products';
            document.getElementById('tj-acd-selectdate').classList.add('date-closed');
        }
        document.getElementById('tj-call-now').setAttribute('value', '1');

        if (tj.acdPopupVariables['today'].getDay() == 5) {
            tj.acdPopupVariables['today'].setDate(tj.acdPopupVariables['current_date'] + 3);
        } else if (tj.acdPopupVariables['today'].getDay() == 6) {
            tj.acdPopupVariables['today'].setDate(tj.acdPopupVariables['current_date'] + 2);
        } else {
            tj.acdPopupVariables['today'].setDate(tj.acdPopupVariables['current_date'] + 1);
        }

        var todayTime = new Date(current_full_date()).getTime();
        var datepickerSelectedDate =
                document.getElementById('tj-acd-start-date').value;
        var datepickerSelectedTime = new Date(datepickerSelectedDate).getTime();

        if (todayTime > datepickerSelectedTime) {
            document.getElementById('tj-acd-start-date').value = current_full_date();
            console.log(
                    'new date',
                    document.getElementById('tj-acd-start-date').value
                    );
            if (!refreshTime)
                setHour();
        }
    }

    if (refreshTime)
        setHour();
}

function isWorkingHours() {
    var working_hours;

    tj.acdPopupVariables['acd_start_hour'] <= tj.acdPopupVariables['current_hour'] &&
                tj.acdPopupVariables['current_hour'] <= tj.acdPopupVariables['acd_end_hour'] &&
                tj.acdPopupVariables['current_min'] <= tj.acdPopupVariables['acd_end_minute'] &&
                tj.acdPopupVariables['current_day'] != 6 &&
                tj.acdPopupVariables['current_day'] != 0
                ? (working_hours = true)
                : (working_hours = false);
    /* if (tj.acdPopupVariables['acd_action'] == 'GetFreeDemo') {
        tj.acdPopupVariables['acd_start_hour'] <= tj.acdPopupVariables['current_hour'] &&
                tj.acdPopupVariables['current_hour'] <= tj.acdPopupVariables['acd_demo_end_hour'] &&
                tj.acdPopupVariables['current_min'] <= tj.acdPopupVariables['acd_demo_end_minute'] &&
                tj.acdPopupVariables['current_day'] != 6 &&
                tj.acdPopupVariables['current_day'] != 0
                ? (working_hours = true)
                : (working_hours = false);
    } else {
        tj.acdPopupVariables['acd_start_hour'] <= tj.acdPopupVariables['current_hour'] &&
                tj.acdPopupVariables['current_hour'] <= tj.acdPopupVariables['acd_end_hour'] &&
                tj.acdPopupVariables['current_min'] <= tj.acdPopupVariables['acd_end_minute'] &&
                tj.acdPopupVariables['current_day'] != 6 &&
                tj.acdPopupVariables['current_day'] != 0
                ? (working_hours = true)
                : (working_hours = false);
    } */

    return working_hours;
}

function current_full_date() {
    tj.acdPopupVariables['current_date'] = tj.acdPopupVariables['today'].getDate();
    tj.acdPopupVariables['current_month'] = tj.acdPopupVariables['today'].getMonth() + 1;
    tj.acdPopupVariables['current_year'] = tj.acdPopupVariables['today'].getFullYear();
    tj.acdPopupVariables['current_day'] = tj.acdPopupVariables['today'].getDay();
    tj.acdPopupVariables['current_hour'] = tj.acdPopupVariables['today'].getHours();
    tj.acdPopupVariables['current_min'] = tj.acdPopupVariables['today'].getMinutes();
    tj.acdPopupVariables['current_time'] = tj.acdPopupVariables['today'].getTime();
    tj.acdPopupVariables['current_hr_min'] = tj.acdPopupVariables['current_hour'] + ':' + tj.acdPopupVariables['current_min'];

    var new_date = tj.acdPopupVariables['current_date'];
    var new_month = tj.acdPopupVariables['current_month'];
    if (tj.acdPopupVariables['current_date'] < 10) {
        new_date = '0' + tj.acdPopupVariables['current_date'];
    }
    if (tj.acdPopupVariables['current_month'] < 10) {
        new_month = '0' + tj.acdPopupVariables['current_month'];
    }
    return new_month + '/' + new_date + '/' + tj.acdPopupVariables['current_year'];
}

function setHour() {
    var hr_option = '';
    var acd_start_date = document.getElementById('tj-acd-start-date').value;
    var today_dmy = current_full_date();
    var acd_end_hours = tj.acdPopupVariables['acd_end_hour'];
    /* if (tj.acdPopupVariables['acd_action'] == 'GetFreeDemo') {
        acd_end_hours = tj.acdPopupVariables['acd_demo_end_hour'];
    } */
    if (isWorkingHours()) {
        for (var hr = tj.acdPopupVariables['acd_start_hour']; hr <= acd_end_hours; hr++) {
            var disabled =
                    hr < tj.acdPopupVariables['current_hour'] && today_dmy === acd_start_date ? 'disabled' : '';
            var selected =
                    hr == tj.acdPopupVariables['current_hour'] && today_dmy === acd_start_date ? 'selected' : '';
            hr_option +=
                    '<option value="' +
                    hr +
                    '" ' +
                    disabled +
                    ' ' +
                    selected +
                    '>' +
                    hr +
                    ' Hr</option>';
        }
    } else {
        for (var hr = tj.acdPopupVariables['acd_start_hour']; hr <= acd_end_hours; hr++) {
            hr_option += '<option value="' + hr + '">' + hr + ' Hr</option>';
        }
    }
    setMinute();
    $('#tj-hour').html(hr_option);
}

function setMinute() {
    var mnt_option = '';
    var acd_start_date = document.getElementById('tj-acd-start-date').value;
    var today_dmy = current_full_date();
    var acd_end_minutes = tj.acdPopupVariables['acd_end_minute'];
    /* if (tj.acdPopupVariables['acd_action'] == 'GetFreeDemo') {
        acd_end_minutes = tj.acdPopupVariables['acd_demo_end_minute'];
    } */
    if (isWorkingHours()) {
        for (var mint = 0; mint <= acd_end_minutes; ) {
            if (mint < 10) {
                mint = '0' + mint;
            }
            var disabled =
                    parseInt(mint) < tj.acdPopupVariables['current_min'] && today_dmy === acd_start_date
                    ? 'disabled'
                    : '';
            var selected = tj.acdPopupVariables['current_min'] == parseInt(mint) ? 'selected' : '';
            mnt_option +=
                    '<option value="' +
                    mint +
                    '" ' +
                    disabled +
                    ' ' +
                    selected +
                    '>' +
                    mint +
                    ' Min</option>';
            mint = parseInt(mint) + 5;
        }
    } else {
        for (var mint = 0; mint <= acd_end_minutes; ) {
            if (mint < 10) {
                mint = '0' + mint;
            }
            mnt_option += '<option value="' + mint + '">' + mint + ' Min</option>';
            mint = parseInt(mint) + 5;
        }
    }
    $('#tj-minute').html(mnt_option);
}

function fetchResult(e) {
    let t = e.target.value;
    document.getElementById('search_containter_8b632').style.display = 'block';
    let n = tj.acdPopupVariables['tjUrl'][up.en] + '/acd-fetch-result?query=' + t;
    fetch(n, {
        method: 'GET',
        headers: {},
    })
            .then((e) => e.json())
            .then((e) => {
                let t = prepareFechedContent(e);
                document.getElementById('search_8b632').innerHTML = t;
                for (
                        var n = document.querySelectorAll('.search-data'), a = 0;
                        a < n.length;
                        a++
                        )
                    n[a].addEventListener('click', function (e) {
                        let t = e.target.closest('.search-data').getAttribute('rel');
                        (t = t.substring(t.indexOf('-') + 1)),
                                (document.getElementById('tj-acd-search').value = t);
                        let n = e.target
                                .closest('.search-data')
                                .children[0].getAttribute('data-category_name');
                        document
                                .getElementById('tj-acd-software-category')
                                .setAttribute('value', null != n ? n : t),
                                document
                                .getElementById('tj-acd-test-category')
                                .setAttribute('value', null != n ? n : t),
                                (document.getElementById('search_containter_8b632').style.display =
                                        'none'),
                                null != n &&
                                document
                                .getElementById('tj-acd-product-name')
                                .setAttribute('value', t);
                        let p_id = e.target
                                .closest('.search-data')
                                .children[1].getAttribute('data-product_id');
                        let f = document.getElementById('tj-acd-search-div');
                        if (p_id != null) {
                            f.setAttribute('data-selected', 'product');
                            f.setAttribute('data-id', p_id);
                            document
                                    .getElementById('tj-acd-product_id')
                                    .setAttribute('value', p_id);
                            $.ajax({
                                url: tj.acdPopupVariables['tjUrl'][up.en] + '/acd/fetch_product_details',
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    product_id: p_id,
                                },
                                success: function (data) {
                                    document
                                            .getElementById('tj-acd-category-id')
                                            .setAttribute('value', data.category_id);
                                    document
                                            .getElementById('tj-acd-software-category')
                                            .setAttribute('value', data.software_category);
                                    document
                                            .getElementById('tj-acd-test-category')
                                            .setAttribute('value', data.software_category);
                                    document
                                            .getElementById('tj-acd-brand-id')
                                            .setAttribute('value', data.brand_id);
                                    document
                                            .getElementById('tj-acd-brand-name')
                                            .setAttribute('value', data.brand_name);
                                    document
                                            .getElementById('tj-acd-brand-onboarding-flag')
                                            .setAttribute('value', data.brand_onboarded);
                                    document
                                            .getElementById('tj-acd-lead-model-id')
                                            .setAttribute('value', data.lead_model_type);
                                    document
                                            .getElementById('tj-acd-lead-model-type')
                                            .setAttribute('value', data.lead_model_type_name);
                                },
                            });
                        }
                        let c_id = e.target
                                .closest('.search-data')
                                .children[1].getAttribute('data-category_id');
                        if (c_id != null) {
                            f.setAttribute('data-selected', 'category');
                            f.setAttribute('data-id', c_id);
                            document
                                    .getElementById('tj-acd-category-id')
                                    .setAttribute('value', c_id);
                        }
                    });
            })
            .catch((e) => console.log('error', e));
}

function prepareFechedContent(e) {
    var t = '';
    return (
            e.suggestions.forEach((n, a) => {
                t += "<div class='search-data' rel='" + e.data[a] + "'>" + n + '</div>';
            }),
            t
            );
}

function validate(e) {
    tj.acdPopupVariables.schedule_acd_res_data = {};
    e.preventDefault();
    let t = validatePhone(document.tj_acd_lead_frm.phone.value),
            n = validateName(document.tj_acd_lead_frm.name.value),
            a = validateEmail(document.tj_acd_lead_frm.email.value);
    if (!(t && n && a))
        return !1;
    let new_ques = (tj.acdPopupVariables.loadedTemplate == 'custom_1' ? tj.acdPopupVariables.acd_popup_data.acd_questions.concat(tj.acdPopupVariables.acd_popup_data.acd_generic_questions) : tj.acdPopupVariables.acd_popup_data.acd_questions );
    let jsonData = tj.acdPopupTemplate[tj.acdPopupVariables.loadedTemplate].validateAcdQuestions(new_ques);
    if (!Array.isArray(jsonData)) {
        return false;
    }
    tj.acdPopupTemplate[tj.acdPopupVariables.loadedTemplate].schedule_acd(e, jsonData);
}

function acdValidationScroll(containerNode, scrollToNode) {
    let position =
            scrollToNode.offset().top -
            containerNode.offset().top +
            containerNode.scrollTop();
    containerNode.animate({
        scrollTop: position,
    });
}

function validatePhone(e) {
    let t = !0;

    if (document.tj_acd_lead_frm.phone.classList.contains('intlNumber')) {
        document.tj_acd_lead_frm.phone.value =
                document.tj_acd_lead_frm.phone.value.replace(/[^0-9]/g, '');
        var node = $('#acd_phone');
        if (node.val() === '') {
            node.parents('.iti').siblings('#tj_acd_lead_frm_intl_phone_error').show();
            node
                    .parents('.iti')
                    .siblings('#tj_acd_lead_frm_intl_phone_error')
                    .html(
                            "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Phone number is required *"
                            );
            acdValidationScroll(node.parents('.rightpart'), node);
            return false;
        } else {
            if (acd_phone.value.trim()) {
                if (!acd_iti.isValidNumber()) {
                    node
                            .parents('.iti')
                            .siblings('#tj_acd_lead_frm_intl_phone_error')
                            .show();
                    node
                            .parents('.iti')
                            .siblings('#tj_acd_lead_frm_intl_phone_error')
                            .html(
                                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Entered phone number is invalid"
                                    );
                    acdValidationScroll(node.parents('.rightpart'), node);
                    return false;
                } else {
                    node
                            .parents('.iti')
                            .siblings('#tj_acd_lead_frm_intl_phone_error')
                            .hide();
                }
            }
        }

        return (
                '' == e &&
                ((document.getElementById(
                        'tj_acd_lead_frm_intl_phone_error'
                        ).innerHTML =
                        "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide your Mobile No."),
                        (t = !1)),
                '' == e ||
                /^\d+$/.test(e) ||
                ((document.getElementById(
                        'tj_acd_lead_frm_intl_phone_error'
                        ).innerHTML =
                        "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please enter valid Mobile No."),
                        (t = !1)),
                (document.getElementById(
                        'tj_acd_lead_frm_intl_phone_error'
                        ).style.display = t ? 'none' : 'block'),
                t
                );
    }

    return (
            '' == e &&
            ((document.tj_acd_lead_frm.phone.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide your Mobile No."),
                    (t = !1)),
            '' == e ||
            /^[6-9][0-9]{9}$/.test(e) ||
            ((document.tj_acd_lead_frm.phone.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please enter valid Mobile No."),
                    (t = !1)),
            (document.tj_acd_lead_frm.phone.nextElementSibling.style.display = t
                    ? 'none'
                    : 'block'),
            t
            );
}

function validateName(e) {
    let t = !0;
    return (
            '' == e &&
            ((document.tj_acd_lead_frm.name.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Name is required *"),
                    (t = !1)),
            (document.tj_acd_lead_frm.name.nextElementSibling.style.display = t
                    ? 'none'
                    : 'block'),
            t
            );
}

function validateEmail(email) {
    let isValid = true;
    let useAnyEmail = true;
    let useCompanyEmail = false;
    
    const checkBox = document.tj_acd_lead_frm.switch_email;
    if (checkBox && checkBox.checked) {
        useAnyEmail = true;
        useCompanyEmail = false;
    } else if (checkBox) {
        useAnyEmail = false;
        useCompanyEmail = true;
    }
  
    const atSignIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    const emailDomain = email.substring(atSignIndex + 1, dotIndex);
 
    const errorMessage = document.tj_acd_lead_frm.email.nextElementSibling;
  
    if (!email) {
        errorMessage.innerHTML = "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Email is required *";
        isValid = false;
    }   else if (atSignIndex < 1 || dotIndex - atSignIndex < 2) {
        errorMessage.innerHTML = "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide correct Email";
        isValid = false;
    } else if (
        !useAnyEmail && useCompanyEmail &&
        (   
            emailDomain === 'gmail' ||
            emailDomain === 'hotmail' ||
            emailDomain === 'outlook' ||
            emailDomain === 'yahoo' ||
            emailDomain === 'rediffmail' 
        )
    ) {
        /* if personal email is not set but it conatains gmail or hotmal */
        errorMessage.innerHTML = "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Gmail, Yahoo, Hotmail etc are not allowed for company email";
        isValid = false;
    }
  
    errorMessage.style.display = isValid ? 'none' : 'block';
  
    return isValid;
  }
  


var AcdOtpTimer = function () {
    $('#acd_expire_otp_div').removeClass('hide');
    $('#acd_resend_otp_div').addClass('hide');
    tj.acdPopupVariables['count'] = tj.acdPopupVariables['count'] - 1;
    $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tj.acdPopupVariables['count'] + ' sec');
    if (tj.acdPopupVariables['count'] <= 0) {
        clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
        tj.acdPopupVariables['count'] = 120;
        $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tj.acdPopupVariables['count'] + ' sec');
        $('#acd_expire_otp_div').addClass('hide');
        $('#acd_resend_otp_div').removeClass('hide');
        return;
    }
};

var registerAcdJqueryEvents = function () {
    $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector'])
            .off()
            .on('input', function () {
                var $this = $(this);
                setTimeout(function () {
                    if ($this.val().length >= parseInt($this.attr('maxlength'), 10))
                        $this.next('input').focus();
                }, 0);
            });

    $('#acd_phone')
            .off()
            .on('keyup blur', function () {
                $(this).val(
                        $(this)
                        .val()
                        .replace(/[^0-9]/g, '')
                        );
                var node = $(this);
                if (node.val() === '') {
                    node
                            .parents('.iti')
                            .siblings('#tj_acd_lead_frm_intl_phone_error')
                            .show();
                    node
                            .parents('.iti')
                            .siblings('#tj_acd_lead_frm_intl_phone_error')
                            .html(
                                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Phone number is required *"
                                    );
                } else {
                    if (acd_phone.value.trim()) {
                        if (!acd_iti.isValidNumber()) {
                            node
                                    .parents('.iti')
                                    .siblings('#tj_acd_lead_frm_intl_phone_error')
                                    .show();
                            node
                                    .parents('.iti')
                                    .siblings('#tj_acd_lead_frm_intl_phone_error')
                                    .html(
                                            "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Entered phone number is invalid"
                                            );
                        } else {
                            node
                                    .parents('.iti')
                                    .siblings('#tj_acd_lead_frm_intl_phone_error')
                                    .hide();
                        }
                    }
                }
            });
    $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_number_change_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
                tj.acdPopupVariables['count'] = 120;
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tj.acdPopupVariables['count'] + ' sec');
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    $(this).val('');
                });
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();
                //$('#tj-popup-first').show();
                $("#acd_phone").parents().show();
            });

    $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_submit_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                var otp = '';
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    otp += $(this).val();
                });

                if (otp.length != 4) {
                    $.growl.error({
                        message: 'Please enter OTP.',
                    });
                    return false;
                }

                if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
                    track_event_new(
                            'Personalized Software Quiz',
                            'Clicked In Quiz Window',
                            'Verify Now'
                            );
                }

                const t = new FormData();
                t.append('lead_id', tj.acdPopupVariables['schedule_acd_res_data'].lead_id);
                t.append('cust_id', tj.acdPopupVariables['schedule_acd_res_data'].user_id);
                t.append('phone', tj.acdPopupVariables['schedule_acd_res_data'].phone);
                t.append('dial_code', tj.acdPopupVariables['schedule_acd_res_data'].dial_code);
                t.append('otp', otp);
                t.append('action', 'verify_otp');

                var l = {
                    method: 'POST',
                    body: t,
                };
                fetch(tj.acdPopupVariables['tjUrl'][up.en] + '/acd-verify-otp', l)
                        .then((e) => e.json())
                        .then((e) => {
                            1 == e.status
                                    ? (delete tj.acdPopupVariables['schedule_acd_res_data'].sub_action,
                                            (tj.acdPopupVariables['is_otp_verifed'] = true),
                                            tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].change_form_content(tj.acdPopupVariables.schedule_acd_res_data),
                                            track_event_new(
                                                    'Lead verified',
                                                    tj.acdPopupVariables['schedule_acd_res_data'].action_performed,
                                                    tj.acdPopupVariables['schedule_acd_res_data'].product_name + " | " + (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName']
                                                    ))
                                    : $.growl.error({
                                        message: e.error_msg || 'Not a valid OTP',
                                    });
                        })
                        .catch((e) => console.log('error', e));
            });

    $(tj.acdPopupVariables.acdOtpSelectors['acd_resend_otp_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                let $this = $(this);
                if (tj.acdPopupVariables['acdResendOtpFlag']) {
                    return true;
                }
                tj.acdPopupVariables['acdResendOtpFlag'] = true;
                clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
                var phone = $('#acd_phone').val();
                $.ajax({
                    url: tj.acdPopupVariables['tjUrl'][up.en] + '/tjapi/resend_otp',
                    type: 'post',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({phone_number: phone.substr(-10), minute: 2}),
                    crossDomain: true,
                    beforeSend: function () {
                        $this.text('Sending OTP ...');
                    },
                    success: function (s) {
                        if (s.status) {
                            $.growl.error({
                                message: s.success_msg,
                            });
                            tj.acdPopupVariables['count'] = 120;
                            $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tj.acdPopupVariables['count'] + ' sec');
                            tj.acdPopupVariables['acdOtpTimerCounter'] = setInterval(AcdOtpTimer, 1000);
                        } else {
                            $.growl.error({
                                message: s.error_msg,
                            });
                        }
                        setTimeout(function () {
                            $this.text('Resend OTP.');
                            tj.acdPopupVariables['acdResendOtpFlag'] = false;
                        }, 1000);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        setTimeout(function () {
                            $this.text('Resend OTP.');
                            tj.acdPopupVariables['acdResendOtpFlag'] = false;
                        }, 1000);
                    },
                });
            });
};

const setAcdVideo = function (media) {
    if (media && media.media_path !== null) {
        let yUrl = media.media_path.split('/');
        let yId = yUrl[yUrl.length - 1];
        document.querySelectorAll('div.acd-video-section').forEach((elem, _) => {
            let iframe = document.createElement('iframe');
            iframe.className = 'player acd-video-player';
            iframe.src =
                    'https://www.youtube-nocookie.com/embed/' + yId + '?autoplay=1&mute=1';
            iframe.width = elem.dataset.width;
            iframe.height = elem.dataset.height;
            iframe.frameBorder = '0';

            $(elem).html(iframe);
            $('.tj-acd-modal .imageslidecontainer').hide();
            $(elem).show();
        });
    } else {
        $('div.acd-video-section').html('');
        $('div.acd-video-section').hide();
        $('.tj-acd-modal .imageslidecontainer').show();
    }
};

var get_recommended_products = function (item, id) {
    var source = tj.acdPopupVariables['device_type'];
    if (item == 'product') {
        let url = tj.acdPopupVariables['tjUrl'][up.en] + '/fetch-alternative-products';
        let data = {product_id: id, source: source, templateKey: tj.acdPopupVariables['loadedTemplate']};
        recommended_products_api_request(url, data);
    } else {
        let url = tj.acdPopupVariables['tjUrl'][up.en] + '/fetch-category-products';
        let data = {category_id: id, source: source, templateKey: tj.acdPopupVariables['loadedTemplate'],page_type: tj.page_type, page: tj.page};
        recommended_products_api_request(url, data);
    }
};

var recommended_products_api_request = (url, req_data) => {
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: req_data,
        success: function (data) {
            tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].render_recommended_products_section(data);
        },
    });
};


if(tj.events.ga4Events === undefined) {
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
    }
}

var loadTemplateAuto = function (params={}) {
    tj.setAcdPopupVariables();
    $("#tj-acd-modal,#tj-acd-date,#tj-acd-container,script[src*='intlTelInput.min.js'],#tj-acd-popup-template-loader").remove();
    $(".datepicker-dropdown").remove();

    tj.acdPopupVariables['targetId'] = params.id || null;
    tj.acdPopupVariables['targetCategoryId'] = params.categoryid || null;
    tj.acdPopupVariables['targetCategoryName'] = params.categoryname || null;
    tj.acdPopupVariables['targetGaLabel'] = params.galabel || tj.page;
    tj.acdPopupVariables['targetUserIntent'] = params.userintent || '';
    tj.acdPopupVariables['targetFormName'] = params.targetForm || '';
    tj.acdPopupVariables['targetFormModule'] = params.module || '';
    
    /** Check if product is downloadable start*/
    var isDownloadable = params.prodDownload ? params.prodDownload : 0;
    if (isDownloadable) {
        tj.acdPopupVariables['downloadBtnText'] = params.buttonname;
        if (!tj.acdPopupVariables['downloadBtnText']) {
            console.error('Button name is mandatory');
            return false;
        }
    }
    /*** ------------ download button end----------------- */

    var action = params.action || 'GetFreeDemo';
    var product_id = params.proid || tj.acdPopupVariables['default_product_id'];

    var isPDP = params.ispdp || 0;

    if (isPDP > 0) {
        tj.acdPopupVariables['isPdpPage'] = true;
        product_id = isPDP;
    }

    var a = {
        p: product_id
    };

    tj.acdPopupVariables['targetProductId'] = product_id;

    var isPSR = 0;
    var isDrawer = 0;
    var isBlog = 0;
    var isVideo = 0;
    var isDownload = 0;
    if(tj.acdPopupVariables['targetId'] == 'pdpVideoCampaign') {
        tj.acdPopupVariables['videoCampaign'] = params.acd_campaign;
        isVideo = 1;
    }else {
        document.getElementById('acd-content-section-mobile') && 
        (document.getElementById('acd-content-section-mobile').remove());

        if (tj.acdPopupVariables['targetId'] === "PersonalizedSoftwareRecommendation") {
            isPSR = 1;
            if (!tj.acdPopupVariables['targetCategoryId']) {
                return;
            }
            a['activity'] = "PersonalizedSoftwareRecommendation";
        }else if (tj.acdPopupVariables['targetId'] === "AcdDrawer") {
            tj.acdPopupVariables['isDrawer'] = isDrawer = 1;
        }else if (tj.acdPopupVariables['targetId'] === "AcdBlog") {
            tj.acdPopupVariables['isBlog'] = isBlog = 1;
        }else if (tj.acdPopupVariables['targetId'] === "download") {
            tj.acdPopupVariables['download'] = isDownload = 1;
        }
    }
    if(location.href.includes("/c/"))
    {
        a['activity'] = "LandingPage";
    }

    if(tj.acdPopupVariables['targetCategoryId'] != null && tj.acdPopupVariables['targetCategoryId'] != '' && tj.acdPopupVariables['targetCategoryId'] != 'null'){
        a['category'] = tj.acdPopupVariables['targetCategoryId'];
    }

    var l = {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    Promise.all([acdTemplateLoaderPromise(product_id, tj.acdPopupVariables['targetCategoryId'], isPSR, isDrawer, isBlog, isDownloadable, isDownload, tj.page_type, tj.page, isVideo), acdPopupDataPromise(l)]).then((values) => {
        if (values[0]) {
            tj.acdPopupVariables['loadedTemplate'] = values[0].content.template_key || 'default';
            tj.acdPopupVariables['loadedTemplateName'] = params.template_name || values[0].content.template_name || "";
            tj.acdPopupVariables['loadedTemplateCampaignName'] = params.campaign_name || values[0].content.campaign_name || "";
            tj.acdPopupVariables['device_type'] = values[0].content.device_type || 'desktop';
            loadTemplateJs(tj.acdPopupVariables['loadedTemplate'], tj.acdPopupVariables['device_type']).then((e) => {
                renderTemplate(values[0]).then((e) => {
                    bindTemplateDataAuto(values[1], params, action);
                }).catch((e) => {
                    console.warn(e);
                });
            }).catch((e) => {
                console.warn(e);
            });
        }
    }).catch((e) => {
        console.log('PromiseAll Error ::', e);
    });

};

var bindTemplateDataAuto = function (e, params, action) {
    if (1 == e.status) {
        initFormActionsAuto(params);
        tj.acdPopupVariables['targetProductDetails'] = e.data;
        document
                .getElementById('tj-acd-category-id')
                .setAttribute(
                        'value',
                        tj.acdPopupVariables['targetCategoryId'] ? tj.acdPopupVariables['targetCategoryId'] : e.data.category_id
                        );
        document
                .getElementById('tj-acd-product_id')
                .setAttribute('value', e.data.product_id);
        document
                .getElementById('tj-acd-product-name')
                .setAttribute('value', e.data.product_name);
        document
                .getElementById('tj-acd-software-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tj-acd-test-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tj-acd-brand-id')
                .setAttribute('value', e.data.brand_id);
        document
                .getElementById('tj-acd-brand-name')
                .setAttribute('value', e.data.brand_name);
        document
                .getElementById('tj-acd-action')
                .setAttribute('value', action);
        document
                .getElementById('tj-acd-lead-type')
                .setAttribute('value', action == 'GetFreeDemo' ? 'demo' : 'call');
        document
                .getElementById('tj-acd-lead-model-id')
                .setAttribute('value', e.data.acd_lead_model_id);
        document
                .getElementById('tj-acd-lead-model-type')
                .setAttribute('value', e.data.acd_lead_model_type);
        document
                .getElementById('tj-acd-brand-onboarding-flag')
                .setAttribute('value', e.data.brand_onboarded);
        
        if (typeof tj.events.ga4Events === "function") {
            tj.events.ga4Events('Lead initiated',{
                cta_name: action,
                product_name: e.data.product_name,
                content_name: tj.acdPopupVariables['loadedTemplateName'],
                category_name: (tj.acdPopupVariables['targetCategoryName'] && tj.acdPopupVariables['targetCategoryName'] != '') ? tj.acdPopupVariables['targetCategoryName'] : '',
                module: (tj.acdPopupVariables['targetFormModule'] && tj.acdPopupVariables['targetFormModule'] != '') ? tj.acdPopupVariables['targetFormModule'] : '',
                form_name: (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName']
            });
        } else {
            console.warn("tj.events.ga4Events function is missing");
        }
        setTimeout(function () {
            acd_iti.setCountry('in');
            if (e.data.hasOwnProperty('customer_phone')) {
                acd_iti.setNumber(e.data.customer_phone);
                $(
                        "input[name='name'],input[name='email']"
                        )
                        .parent('.form_field_outer')
                        .addClass('form_field_outer_activated');
                $("input[name='name']").val(
                        e.data.customer_name
                        );
                $("input[name='email']").val(
                        e.data.customer_email
                        );
            }
            tj.acdPopupVariables.acd_popup_data = e.data;
            tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].createAcdQuestions(e.data);
            registerAcdJqueryEvents();
            if(params.acd_campaign) {
                setAcdVideoAuto(params.acd_campaign);
            } else {
                setAcdVideo(e.data.acd_media);
            }
            setTimeout(function () {
                $('#acd_phone').val(
                        $('#acd_phone')
                        .val()
                        .replace(/[^0-9]/g, '')
                        );
            }, 100);
        }, 50);
        setTimeout(function () {
            try {
                fbq('trackCustom', 'Lead initiated', {
                    Name: e.data.product_name,
                    Action: action,
                });
            } catch(error) {
                console.warn(error);
            }
        }, 500);
    } else {
        console.log('Some error occurred', e);
    }
};

var initFormActionsAuto = function (params) {
    /** Update time after ever half minute */
    $('body').css('overflow', 'hidden');
    tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].initFormActions();
    var acdDateRefreshTimer = function () {
        updateJsDates(false);
    };
    tj.acdPopupVariables['schedule_acd_res_data'] = {};
    tj.acdPopupVariables.acd_popup_data = {};
    clearInterval(tj.acdPopupVariables['acdOtpTimerCounter']);
    tj.acdPopupVariables['count'] = 120;
    var action = params.action;
    var product_id = params.proid;
    setTimeout(function () {
        tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].change_first_form_content(action, product_id);
        updateJsDates();
        tj.acdPopupVariables['acdWorkingHoursRefreshInterval'] = setInterval(acdDateRefreshTimer, 15000);
    }, 50);
};

const setAcdVideoAuto = function (media) {
    if (media && media.media_path !== null) {
        if (media.media_type == 'video') {
            var test = media.media_path;
            const pattern = /[?&]v=([a-zA-Z0-9_-]{11})/;
            const resultURL = test.match(pattern);

            if (resultURL) {
                const yId = resultURL[1];
                document.querySelectorAll('div.acd-video-section').forEach((elem, _) => {
                    let iframe = document.createElement('iframe');
                    iframe.className = 'player acd-video-player';
                    iframe.src =
                            'https://www.youtube-nocookie.com/embed/' + yId + '?autoplay=1&mute=1';
                    iframe.width = elem.dataset.width;
                    iframe.height = elem.dataset.height;
                    iframe.frameBorder = '0';

                    $(elem).html(iframe);
                    $('.tj-acd-modal .imageslidecontainer').hide();
                    $(elem).show();
                });
            } else {
                console.warn("No valid YouTube video ID found.");
                $('div.acd-video-section').html('');
                $('div.acd-video-section').hide();
                $('.tj-acd-modal .imageslidecontainer').show();
            }
        } else if(media.media_type == "image") {
            document.querySelectorAll('div.acd-video-section').forEach((elem, _) => {
                let image = document.createElement('img');
                image.className = 'player acd-video-player';
                // image.src = 'https://www.youtube-nocookie.com/embed/' + yId + '?autoplay=1&mute=1';
                image.src = media.acd_image_path + media.media_path;
                image.width = elem.dataset.width;
                image.height = elem.dataset.height;

                $(elem).html(image);
                $('.tj-acd-modal .imageslidecontainer').hide();
                $(elem).show();
            });
        } else {
            $('div.acd-video-section').html('');
            $('div.acd-video-section').hide();
            $('.tj-acd-modal .imageslidecontainer').show();            
        } 
    } else {
        $('div.acd-video-section').html('');
        $('div.acd-video-section').hide();
        $('.tj-acd-modal .imageslidecontainer').show();
    }
};
