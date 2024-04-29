var tj = tj || {};

tj.events = tj.events || {};

var tjspingamelib = tjspingamelib || {};

tjspingamelib.acdPopup = tjspingamelib.acdPopup || {};

tjspingamelib.acdPopupVariables = tjspingamelib.acdPopupVariables || {};

tjspingamelib.acdPopupVariables["suburl"] = window.location.protocol + '//' + window.location.host;

tjspingamelib.spinwheel_dataset = [];

tjspingamelib.acdPopup.loadScript = function (e, src, h = false) {
    if (!document.getElementById(e)) {
        const s = document.createElement('script');
        (s.type = 'text/javascript'),
                (s.src = src),
                (s.id = e),
                (s.async = true);
        h ? document.head.appendChild(s) : document.body.appendChild(s);

        return new Promise((res, rej) => {
            s.onload = function () {
                res();
            };
            s.onerror = function () {
                rej();
            };
        });
    } else {
        return new Promise((res, rej) => {
        });
}
};

tjspingamelib.setAcdPopupVariables = function () {
    tjspingamelib.acdPopupVariables['default_product_id'] = '14481';
    tjspingamelib.acdPopupVariables['targetCategoryId'] = null;
    tjspingamelib.acdPopupVariables['targetProductId'] = null;
    tjspingamelib.acdPopupVariables['targetProductDetails'] = null;
    tjspingamelib.acdPopupVariables['targetCategoryName'] = null;
    tjspingamelib.acdPopupVariables['selectedTopCategorySlug'] = "";
    tjspingamelib.acdPopupVariables['spinGameAction'] = "GetFreeDemo";
    tjspingamelib.acdPopupVariables['tjUrl'] = {
        l: tjspingamelib.acdPopupVariables["suburl"],
        d: tjspingamelib.acdPopupVariables["suburl"],
        b: tjspingamelib.acdPopupVariables["suburl"],
        p: tjspingamelib.acdPopupVariables["suburl"],
    };
    tjspingamelib.acdPopupVariables['count'] = 120;
    tjspingamelib.acdPopupVariables.schedule_acd_res_data = {};
    tjspingamelib.acdPopupVariables['acdOtpTimerCounter'] = clearInterval(tjspingamelib.acdPopupVariables['acdOtpTimerCounter']);
    tjspingamelib.acdPopupVariables['showSlidesInterval'] = clearInterval(tjspingamelib.acdPopupVariables['showSlidesInterval']);
    tjspingamelib.acdPopupVariables['is_otp_verifed'] = false;
    tjspingamelib.acdPopupVariables['isPdpPage'] = false;
    tjspingamelib.acdPopupVariables['acdResendOtpFlag'] = false;
    tjspingamelib.acdPopupVariables['isEventTriggered'] = false;
    tjspingamelib.acdPopupVariables['loadedTemplate'] = "default";
    tjspingamelib.acdPopupVariables['loadedTemplateName'] = "";
    tjspingamelib.acdPopupVariables['loadedTemplateCampaignName'] = "";
    tjspingamelib.acdPopupVariables['device_type'] = 'desktop';
    tjspingamelib.acdPopupVariables['jsonFields'] = ['datesDisabled'];
    tjspingamelib.acdPopupVariables.acd_popup_data = {};
    tjspingamelib.acdPopupVariables.acdOtpSelectors = {
        acd_otp_input_selector: '.tjspin_acd_otp_digits input',
        acd_otp_submit_selector: '#tjspin_acd_otp_verify',
        acd_resend_otp_selector: '#tjspin_acd_resend_otp_link',
        acd_otp_number_change_selector: '#tjspin_acd_otp_num_change_link',
        acd_otp_timer_selector: '#tjspin_acd_otp_timer',
        acd_otp_screen_selector: '#tjspin_acd_otp_screen',

    };
    tjspingamelib.wheelAudio = new Audio(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/assets/acd/gamification/audios/wheel.mp3');
    tjspingamelib.applauseAudio = new Audio(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/assets/acd/gamification/audios/applause.mp3');
    tjspingamelib.acdPopupTemplate = {};
    tjspingamelib.chart = {};
    tjspingamelib.chart.padding = {top: 20, right: 40, bottom: 0, left: 0};
    tjspingamelib.chart.w = 530 - tjspingamelib.chart.padding.left - tjspingamelib.chart.padding.right;
    tjspingamelib.chart.h = 530 - tjspingamelib.chart.padding.top - tjspingamelib.chart.padding.bottom;
    tjspingamelib.chart.r = Math.min(tjspingamelib.chart.w - 150, tjspingamelib.chart.h - 150) / 2;
    tjspingamelib.chart.rotation = 0;
    tjspingamelib.chart.oldrotation = 0;
    tjspingamelib.chart.picked = 100000;
    tjspingamelib.chart.oldpick = [];
    tjspingamelib.chart.color = null;
};

tjspingamelib.params = function () {
    let e = {};
    let t = document.getElementById('tj-gamification-acd-func').src;
    let n = new URLSearchParams(t.substring(t.indexOf('?') + 1));
    return (
            (e.o = n.get('o')),
            (e.i = n.get('i')),
            (e.en = n.get('e')),
            (e.d = n.get('d')),
            e
            );
};

tjspingamelib.up = tjspingamelib.params();


tjspingamelib.initFormActions = function () {
    /** Update time after ever half minute */
    $('body').css('overflow', 'hidden');
    tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].initFormActions();
    tjspingamelib.acdPopupVariables['schedule_acd_res_data'] = {};
    tjspingamelib.acdPopupVariables.acd_popup_data = {};
    clearInterval(tjspingamelib.acdPopupVariables['acdOtpTimerCounter']);
    tjspingamelib.acdPopupVariables['count'] = 120;
    setTimeout(function () {
        tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].change_first_form_content();
    }, 50);
};

tjspingamelib.acdTemplateLoaderPromise = function (product_id, category_id = "") {
    if(tj.isOpen == true || $('.is-open.LandbotLivechat').is(':visible')){
        return false;
    }
    else{
        return new Promise((resolve, reject) => {
            fetch(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + "/acd/spin_wheel_acd_form_loader?category_id=" + category_id + "&product_id=" + product_id + "&o=" + tjspingamelib.up.o + "&i=" + tjspingamelib.up.i, {
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
    }
};

tjspingamelib.loadTemplateJs = function (templateKey, device_type) {
    return new Promise((res, rej) => {
        tjspingamelib.acdPopup.loadScript('tjspin-acd-popup-template-loader', tjspingamelib.acdPopupVariables["suburl"] + `/assets/acd/popup/${templateKey}/${device_type}/js/template.js?t=` + new Date())
                .then(() => {
                    res();
                })
                .catch(() => {
                    rej();
                });
    });
};

tjspingamelib.loadD3Js = function () {
    return new Promise((resolve, reject) => {
        $.getScript(tjspingamelib.acdPopupVariables["suburl"] + "/assets/acd/gamification/js/d3.v3.min.js", function (data, textStatus, jqxhr) {
            if (textStatus == "success") {
                resolve();
            } else {
                reject();
            }
        });
    });
};

tjspingamelib.acdPopupDataPromise = function (params) {
    return new Promise((resolve, reject) => {
        fetch(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + "/acd-popup-data", params)
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

tjspingamelib.renderTemplate = function (e) {
    if (tj.isOpen == true || $('.is-open.LandbotLivechat').is(':visible')) {
        return Promise.reject('Another form is in use.');
    } else {
        return new Promise((resolve, reject) => {
            var t = document.createElement('div');
            t.id = 'tjspin-acd-container';
            t.innerHTML = e.content.html;
            document.body.appendChild(t);
            var n = function (e, t, n) {
                e.addEventListener
                    ? e.addEventListener(t, n)
                    : e.attachEvent('on' + t, function () {
                        n.call(e);
                    });
            };
            var a = function (e, t, a) {
                for (var d = document.querySelectorAll(e), l = 0; l < d.length; l++)
                    n(d[l], t, a);
            };
            tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']]
                .renderTemplate(a, tjspingamelib.fetchResult);

            var acdPageOtc1 = document.getElementById('tjspin-acd-page-otc-1'),
                acdPageOtcInputs = document.querySelectorAll('.tjspin-acd-page-otc'),
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

            $.getScript(tjspingamelib.acdPopupVariables["suburl"] + "/assets/V2/js/intlTelInput/intlTelInput.min.js", function (data, textStatus, jqxhr) {
                tjspin_acd_phone = document.querySelector("#tjspin_acd_phone");
                tjspin_acd_iti = window.intlTelInput(tjspin_acd_phone, {
                    preferredCountries: ['in', 'us'],
                    separateDialCode: true,
                    utilsScript: tjspingamelib.acdPopupVariables["suburl"] + "/assets/V2/js/intlTelInput/utils.js",
                });
                if (textStatus == "success") {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }
};


tjspingamelib.bindTemplateData = function (e, action) {
    if (1 == e.status) {
        tjspingamelib.initFormActions();
        tjspingamelib.acdPopupVariables['targetProductDetails'] = e.data;
        document
                .getElementById('tjspin-acd-category-id')
                .setAttribute(
                        'value',
                        tjspingamelib.acdPopupVariables['targetCategoryId'] ? tjspingamelib.acdPopupVariables['targetCategoryId'] : e.data.category_id
                        );
        document
                .getElementById('tjspin-acd-product_id')
                .setAttribute('value', e.data.product_id);
        document
                .getElementById('tjspin-acd-product-name')
                .setAttribute('value', e.data.product_name);
        document
                .getElementById('tjspin-acd-software-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tjspin-acd-test-category')
                .setAttribute('value', e.data.software_category);
        document
                .getElementById('tjspin-acd-brand-id')
                .setAttribute('value', e.data.brand_id);
        document
                .getElementById('tjspin-acd-brand-name')
                .setAttribute('value', e.data.brand_name);
        document
                .getElementById('tjspin-acd-action')
                .setAttribute('value', action);
        document
                .getElementById('tjspin-acd-lead-type')
                .setAttribute('value', action == 'GetFreeDemo' ? 'demo' : 'call');
        document
                .getElementById('tjspin-acd-lead-model-id')
                .setAttribute('value', e.data.acd_lead_model_id);
        document
                .getElementById('tjspin-acd-lead-model-type')
                .setAttribute('value', e.data.acd_lead_model_type);
        document
                .getElementById('tjspin-acd-brand-onboarding-flag')
                .setAttribute('value', e.data.brand_onboarded);
        //track_event_new('Lead initiated', action, e.data.product_name + " | " + tjspingamelib.acdPopupVariables['loadedTemplateName']);
        setTimeout(function () {
            tjspin_acd_iti.setCountry('in');
            if (e.data.hasOwnProperty('customer_phone')) {
                tjspin_acd_iti.setNumber(e.data.customer_phone);
                $("input.tjspin_acd_input_popup[name='name'],input.tjspin_acd_input_popup[name='email']")
                        .parent('.form_field_outer')
                        .addClass('form_field_outer_activated');
                $("input.tjspin_acd_input_popup[name='name']").val(
                        e.data.customer_name
                        );
                $("input.tjspin_acd_input_popup[name='email']").val(
                        e.data.customer_email
                        );
            }
            tjspingamelib.acdPopupVariables.acd_popup_data = e.data;
            tjspingamelib.registerAcdJqueryEvents();
            setTimeout(function () {
                $('#tjspin_acd_phone').val(
                        $('#tjspin_acd_phone')
                        .val()
                        .replace(/[^0-9]/g, '')
                        );
            }, 100);
        }, 50);
    }
};

tjspingamelib.loadTemplate = function (target) {
    tjspingamelib.setAcdPopupVariables();
    tjspingamelib.acdPopupVariables['targetCategoryId'] = sessionStorage.getItem('tj-global-categoryid');
    tjspingamelib.acdPopupVariables['targetCategoryName'] = sessionStorage.getItem('tj-global-categoryname');

    var action = sessionStorage.getItem('tj-global-action');
    if (!action) {
        action = "TalkToTechExpert";
    }
    var product_id = sessionStorage.getItem('tj-global-proid');
    var isPDP = sessionStorage.getItem('tj-global-ispdp');
    if (isPDP > 0) {
        tjspingamelib.acdPopupVariables['isPdpPage'] = true;
    }

    var a = {
        p: product_id,
        activity: 'spinwheel'
    };

    tjspingamelib.acdPopupVariables['targetProductId'] = product_id;

    var l = {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    Promise.all([tjspingamelib.acdTemplateLoaderPromise(product_id, tjspingamelib.acdPopupVariables['targetCategoryId']), tjspingamelib.acdPopupDataPromise(l)]).then((values) => {
        if (values[0]) {
            tjspingamelib.spinwheel_dataset = values[0].content.spinwheel_dataset;
            tjspingamelib.acdPopupVariables['loadedTemplate'] = values[0].content.template_key || 'default';
            tjspingamelib.acdPopupVariables['loadedTemplateName'] = values[0].content.template_name || "";
            tjspingamelib.acdPopupVariables['loadedTemplateCampaignName'] = values[0].content.campaign_name || "";
            tjspingamelib.acdPopupVariables['device_type'] = values[0].content.device_type || 'desktop';
            tjspingamelib.loadTemplateJs(tjspingamelib.acdPopupVariables['loadedTemplate'], tjspingamelib.acdPopupVariables['device_type']).then((e) => {
                tjspingamelib.loadD3Js().then(() => {
                    let openForm = sessionStorage.getItem('tjspinwheel_state') || 0;
                    if ((!openForm && values[0].content.popup_delay_sec) && (values[0].content.spinwheel_campaign_location.filter(x => x == tj.page_type).length || typeof (acdPopupParam) !== 'undefined')) {
                        setTimeout(function () {
                            tjspingamelib.renderTemplate(values[0]).then(() => {
                                tjspingamelib.bindTemplateData(values[1], action);
                                sessionStorage.setItem('tjspinwheel_state', 1);
                            }).catch((e) => {
                                console.warn(e);
                            });
                        }, values[0].content.popup_delay_sec * 1000);
                    }
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

tjspingamelib.fetchResult = function (e) {
    let t = e.target.value;
    document.getElementById('search_containter_8b632').style.display = 'block';
    let n = tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/acd-fetch-result?query=' + t;
    fetch(n, {
        method: 'GET',
        headers: {},
    })
            .then((e) => e.json())
            .then((e) => {
                let t = tjspingamelib.prepareFechedContent(e);
                document.getElementById('search_8b632').innerHTML = t;
                for (
                        var n = document.querySelectorAll('.search-data'), a = 0;
                        a < n.length;
                        a++
                        )
                    n[a].addEventListener('click', function (e) {
                        let t = e.target.closest('.search-data').getAttribute('rel');
                        (t = t.substring(t.indexOf('-') + 1)),
                                (document.getElementById('tjspin-acd-search').value = t);
                        let n = e.target
                                .closest('.search-data')
                                .children[0].getAttribute('data-category_name');
                        document
                                .getElementById('tjspin-acd-software-category')
                                .setAttribute('value', null != n ? n : t),
                                document
                                .getElementById('tjspin-acd-test-category')
                                .setAttribute('value', null != n ? n : t),
                                (document.getElementById('search_containter_8b632').style.display =
                                        'none'),
                                null != n &&
                                document
                                .getElementById('tjspin-acd-product-name')
                                .setAttribute('value', t);
                        let p_id = e.target
                                .closest('.search-data')
                                .children[1].getAttribute('data-product_id');
                        let f = document.getElementById('tjspin-acd-search-div');
                        if (p_id != null) {
                            f.setAttribute('data-selected', 'product');
                            f.setAttribute('data-id', p_id);
                            document
                                    .getElementById('tjspin-acd-product_id')
                                    .setAttribute('value', p_id);
                            $.ajax({
                                url: tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/acd/fetch_product_details',
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    product_id: p_id,
                                },
                                success: function (data) {
                                    document
                                            .getElementById('tjspin-acd-category-id')
                                            .setAttribute('value', data.category_id);
                                    document
                                            .getElementById('tjspin-acd-software-category')
                                            .setAttribute('value', e.data.software_category);
                                    document
                                            .getElementById('tjspin-acd-test-category')
                                            .setAttribute('value', e.data.software_category);
                                    document
                                            .getElementById('tjspin-acd-brand-id')
                                            .setAttribute('value', data.brand_id);
                                    document
                                            .getElementById('tjspin-acd-brand-name')
                                            .setAttribute('value', data.brand_name);
                                    document
                                            .getElementById('tjspin-acd-brand-onboarding-flag')
                                            .setAttribute('value', data.brand_onboarded);
                                    document
                                            .getElementById('tjspin-acd-lead-model-id')
                                            .setAttribute('value', data.lead_model_type);
                                    document
                                            .getElementById('tjspin-acd-lead-model-type')
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
                                    .getElementById('tjspin-acd-category-id')
                                    .setAttribute('value', c_id);
                        }
                    });
            })
            .catch((e) => console.log('error', e));
}

tjspingamelib.prepareFechedContent = function (e) {
    var t = '';
    return (
            e.suggestions.forEach((n, a) => {
                t += "<div class='search-data' rel='" + e.data[a] + "'>" + n + '</div>';
            }),
            t
            );
}

tjspingamelib.validate = function (e) {
    tjspingamelib.acdPopupVariables.schedule_acd_res_data = {};
    e.preventDefault();
    let t = tjspingamelib.validatePhone(document.tjspin_acd_lead_frm.phone.value),
            n = tjspingamelib.validateName(document.tjspin_acd_lead_frm.name.value),
            a = tjspingamelib.validateEmail(document.tjspin_acd_lead_frm.email.value);
    if (!(t && n && a))
        return !1;
    tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables.loadedTemplate].schedule_acd(e);
};

tjspingamelib.acdValidationScroll = function (containerNode, scrollToNode) {
    let position =
            scrollToNode.offset().top -
            containerNode.offset().top +
            containerNode.scrollTop();
    containerNode.animate({
        scrollTop: position,
    });
};

tjspingamelib.validatePhone = function (e) {
    let t = !0;

    if (document.tjspin_acd_lead_frm.phone.classList.contains('intlNumber')) {
        document.tjspin_acd_lead_frm.phone.value =
                document.tjspin_acd_lead_frm.phone.value.replace(/[^0-9]/g, '');
        var node = $('#tjspin_acd_phone');
        if (node.val() === '') {
            node.parents('.iti').siblings('#tjspin_acd_lead_frm_intl_phone_error').show();
            node
                    .parents('.iti')
                    .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                    .html(
                            "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Phone number is required *"
                            );
            acdValidationScroll(node.parents('.spin-the-wheel'), node);
            return false;
        } else {
            if (tjspin_acd_phone.value.trim()) {
                if (!tjspin_acd_iti.isValidNumber()) {
                    node
                            .parents('.iti')
                            .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                            .show();
                    node
                            .parents('.iti')
                            .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                            .html(
                                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Entered phone number is invalid"
                                    );
                    acdValidationScroll(node.parents('.spin-the-wheel'), node);
                    return false;
                } else {
                    node
                            .parents('.iti')
                            .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                            .hide();
                }
            }
        }

        return (
                '' == e &&
                ((document.getElementById(
                        'tjspin_acd_lead_frm_intl_phone_error'
                        ).innerHTML =
                        "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide your Mobile No."),
                        (t = !1)),
                '' == e ||
                /^\d+$/.test(e) ||
                ((document.getElementById(
                        'tjspin_acd_lead_frm_intl_phone_error'
                        ).innerHTML =
                        "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please enter valid Mobile No."),
                        (t = !1)),
                (document.getElementById(
                        'tjspin_acd_lead_frm_intl_phone_error'
                        ).style.display = t ? 'none' : 'block'),
                t
                );
    }

    return (
            '' == e &&
            ((document.tjspin_acd_lead_frm.phone.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide your Mobile No."),
                    (t = !1)),
            '' == e ||
            /^[6-9][0-9]{9}$/.test(e) ||
            ((document.tjspin_acd_lead_frm.phone.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please enter valid Mobile No."),
                    (t = !1)),
            (document.tjspin_acd_lead_frm.phone.nextElementSibling.style.display = t
                    ? 'none'
                    : 'block'),
            t
            );
};

tjspingamelib.validateName = function (e) {
    let t = !0;
    return (
            '' == e &&
            ((document.tjspin_acd_lead_frm.name.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Name is required *"),
                    (t = !1)),
            (document.tjspin_acd_lead_frm.name.nextElementSibling.style.display = t
                    ? 'none'
                    : 'block'),
            t
            );
};

tjspingamelib.validateEmail = function (e) {
    let t = !0;
    return (
            (atpos = e.indexOf('@')),
            (dotpos = e.lastIndexOf('.')),
            '' == e &&
            ((document.tjspin_acd_lead_frm.email.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Email is required *"),
                    (t = !1)),
            (atpos < 1 || dotpos - atpos < 2) &&
            ((document.tjspin_acd_lead_frm.email.nextElementSibling.innerHTML =
                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Please provide correct Email"),
                    (t = !1)),
            (document.tjspin_acd_lead_frm.email.nextElementSibling.style.display = t
                    ? 'none'
                    : 'block'),
            t
            );
};


tjspingamelib.AcdOtpTimer = function () {
    $('#tjspin_acd_expire_otp_div').removeClass('hide');
    $('#tjspin_acd_resend_otp_div').addClass('hide');
    tjspingamelib.acdPopupVariables['count'] = tjspingamelib.acdPopupVariables['count'] - 1;
    $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tjspingamelib.acdPopupVariables['count'] + ' sec');
    if (tjspingamelib.acdPopupVariables['count'] <= 0) {
        clearInterval(tjspingamelib.acdPopupVariables['acdOtpTimerCounter']);
        tjspingamelib.acdPopupVariables['count'] = 120;
        $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tjspingamelib.acdPopupVariables['count'] + ' sec');
        $('#tjspin_acd_expire_otp_div').addClass('hide');
        $('#tjspin_acd_resend_otp_div').removeClass('hide');
        return;
    }
};

tjspingamelib.registerAcdJqueryEvents = function () {
    $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector'])
            .off()
            .on('input', function () {
                var $this = $(this);
                setTimeout(function () {
                    if ($this.val().length >= parseInt($this.attr('maxlength'), 10))
                        $this.next('input').focus();
                }, 0);
            });

    $('#tjspin_acd_phone')
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
                            .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                            .show();
                    node
                            .parents('.iti')
                            .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                            .html(
                                    "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Phone number is required *"
                                    );
                } else {
                    if (tjspin_acd_phone.value.trim()) {
                        if (!tjspin_acd_iti.isValidNumber()) {
                            node
                                    .parents('.iti')
                                    .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                                    .show();
                            node
                                    .parents('.iti')
                                    .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                                    .html(
                                            "<img src='https://www.techjockey.com/assets/new-assets/images/error.svg' alt='error-image'> Entered phone number is invalid"
                                            );
                        } else {
                            node
                                    .parents('.iti')
                                    .siblings('#tjspin_acd_lead_frm_intl_phone_error')
                                    .hide();
                        }
                    }
                }
            });
    $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_number_change_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                clearInterval(tjspingamelib.acdPopupVariables['acdOtpTimerCounter']);
                tjspingamelib.acdPopupVariables['count'] = 120;
                $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tjspingamelib.acdPopupVariables['count'] + ' sec');
                $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    $(this).val('');
                });
                tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].showHideScreen(null, 'tjspin_detailscreen');
            });

    $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_submit_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                var otp = '';
                $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    otp += $(this).val();
                });

                if (otp.length != 4) {
                    $.growl.error({
                        message: 'Please enter OTP.',
                    });
                    return false;
                }

                const t = new FormData();
                t.append('lead_id', tjspingamelib.acdPopupVariables['schedule_acd_res_data'].lead_id);
                t.append('cust_id', tjspingamelib.acdPopupVariables['schedule_acd_res_data'].user_id);
                t.append('phone', tjspingamelib.acdPopupVariables['schedule_acd_res_data'].phone);
                t.append('dial_code', tjspingamelib.acdPopupVariables['schedule_acd_res_data'].dial_code);
                t.append('otp', otp);
                t.append('action', 'verify_otp');

                var l = {
                    method: 'POST',
                    body: t,
                };
                fetch(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/acd-verify-otp', l)
                        .then((e) => e.json())
                        .then((e) => {
                            1 == e.status
                                    ? (delete tjspingamelib.acdPopupVariables['schedule_acd_res_data'].sub_action,
                                            (tjspingamelib.acdPopupVariables['is_otp_verifed'] = true),
                                            tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].change_form_content(tjspingamelib.acdPopupVariables.schedule_acd_res_data),
                                            track_event_new(
                                                    'Lead verified',
                                                    tjspingamelib.acdPopupVariables['schedule_acd_res_data'].action_performed,
                                                    tjspingamelib.acdPopupVariables['schedule_acd_res_data'].product_name + " | " + tjspingamelib.acdPopupVariables['loadedTemplateName']
                                                    ))
                                    : $.growl.error({
                                        message: e.error_msg || 'Not a valid OTP',
                                    });
                        })
                        .catch((e) => console.log('error', e));
            });

    $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_resend_otp_selector'])
            .off()
            .on('click', function (e) {
                e.preventDefault();
                let $this = $(this);
                if (tjspingamelib.acdPopupVariables['acdResendOtpFlag']) {
                    return true;
                }
                tjspingamelib.acdPopupVariables['acdResendOtpFlag'] = true;
                clearInterval(tjspingamelib.acdPopupVariables['acdOtpTimerCounter']);
                var phone = $('#tjspin_acd_phone').val();
                $.ajax({
                    url: tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/tjapi/resend_otp',
                    type: 'post',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({phone_number: phone.substr(-10), minute: 2}),
                    crossDomain: !0,
                    beforeSend: function () {
                        $this.text('Sending OTP ...');
                    },
                    success: function (s) {
                        if (s.status) {
                            $.growl.error({
                                message: s.success_msg,
                            });
                            tjspingamelib.acdPopupVariables['count'] = 120;
                            $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_timer_selector']).text(tjspingamelib.acdPopupVariables['count'] + ' sec');
                            tjspingamelib.acdPopupVariables['acdOtpTimerCounter'] = setInterval(tjspingamelib.AcdOtpTimer, 1000);
                        } else {
                            $.growl.error({
                                message: s.error_msg,
                            });
                        }
                        setTimeout(function () {
                            $this.text('Resend OTP.');
                            tjspingamelib.acdPopupVariables['acdResendOtpFlag'] = false;
                        }, 1000);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        setTimeout(function () {
                            $this.text('Resend OTP.');
                            tjspingamelib.acdPopupVariables['acdResendOtpFlag'] = false;
                        }, 1000);
                    },
                });
            });
};

tjspingamelib.get_recommended_products = function (item, id) {
    var source = tjspingamelib.acdPopupVariables['device_type'];
    if (item == 'product') {
        let url = tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/fetch-alternative-products';
        let data = {product_id: id, source: source, templateKey: tjspingamelib.acdPopupVariables['loadedTemplate'], action: tjspingamelib.acdPopupVariables['spinGameAction']};
        tjspingamelib.recommended_products_api_request(url, data);
    } else {
        let url = tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/fetch-category-products';
        let data = {category_id: id, source: source, templateKey: tjspingamelib.acdPopupVariables['loadedTemplate'], action: tjspingamelib.acdPopupVariables['spinGameAction']};
        tjspingamelib.recommended_products_api_request(url, data);
    }
};

tjspingamelib.recommended_products_api_request = (url, req_data) => {
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: req_data,
        success: function (data) {
            tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].render_recommended_products_section(data);
        }
    });
};

tjspingamelib.playWheelSound = function () {
    // Stop and rewind the sound (stops it if already playing).
    tjspingamelib.wheelAudio.pause();
    tjspingamelib.wheelAudio.currentTime = 0;
    // Play the sound.
    tjspingamelib.wheelAudio.play();
};

tjspingamelib.playApplauseSound = function () {
    // Stop and rewind the sound (stops it if already playing).
    tjspingamelib.applauseAudio.pause();
    tjspingamelib.applauseAudio.currentTime = 0;

    // Play the sound.
    tjspingamelib.applauseAudio.play();
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


tjspingamelib.loadTemplate();