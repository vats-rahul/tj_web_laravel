var tj = tj || {};
tj.isOpen = true;
tj.events = tj.events || {};

tj.acdPopupTemplate = tj.acdTemplate || {};

tj.acdPopupTemplate.blog = {
    change_first_form_content: function (action, product_id) {
        if (action == 'GetFreeDemo') {
            tj.acdPopupVariables.schedule_button_text = 'Schedule Demo';
        } else {
            if (isWorkingHours()) {
                tj.acdPopupVariables.schedule_button_text = 'Get Free Call';
                document.getElementById('tj-acd-sfl').innerHTML = 'Schedule for later';
                document.getElementById('tj-acd-selectdate').classList.add('date-closed');
                document.getElementById('tj-acd-sfl').style = 'display:block';
            } else {
                tj.acdPopupVariables.schedule_button_text = 'Schedule Call';
            }
        }

        document.getElementById('tj-acd-search-div').style = 'display:none';
        if ( product_id == tj.acdPopupVariables['default_product_id'] ) {
            document.getElementById('tj-acd-search-div').style = 'display:show';
            if (tj.acdPopupVariables['isPdpPage']) {
                $('#tj-acd-search-div').addClass('form_field_outer_activated');
                $('#tj-acd-search-div').attr('data-selected', 'product');
                $('#tj-acd-search-div').attr('data-id', tj.acdPopupVariables['targetProductId']);
                $('#tj-acd-search').val(tj.acdPopupVariables['targetProductDetails'].product_name);
            } else {
                if (tj.acdPopupVariables['targetCategoryName']) {
                    $('#tj-acd-search-div').addClass('form_field_outer_activated');
                    $('#tj-acd-search-div').attr('data-selected', 'category');
                    $('#tj-acd-search-div').attr('data-id', tj.acdPopupVariables['targetCategoryId']);
                    $('#tj-acd-search').val(tj.acdPopupVariables['targetCategoryName']);
                }
            }
        } else if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            $('#tj-acd-search-div').hide();
            $('#tj-acd-search-div').attr('data-selected', 'category');
            $('#tj-acd-search-div').attr('data-id', tj.acdPopupVariables['targetCategoryId']);
            $('#tj-acd-search').val(tj.acdPopupVariables['targetCategoryName']);
        }
        document.getElementById('tj-acd-sub-button').innerHTML = tj.acdPopupVariables.schedule_button_text;
        document.getElementById('acd-agreement-text-action') && (document.getElementById('acd-agreement-text-action').innerHTML =
                tj.acdPopupVariables.schedule_button_text);
    },
    createAcdQuestions: function (data) {
        return true;
    },
    renderAcdQuestions: function (data, containerId) {
        return true;
    },

    bindAcdQuestionsEvents: function () {
        return true;
    },

    validateAcdQuestions: function (acd_generic_questions, lead_id = '') {
        let jsonData = [];
        return jsonData;
    },
    initFormActions: function () {
        document.getElementById('blog-acd-popup-first').style.display = 'none';
        tj.acdPopupTemplate.blog.bindEvents();
        document.getElementById('acd_otp_screen').style.display = 'none';

        document.getElementById('tj-acd-lead-frm').reset();
        document.getElementById('tj-acd-modal').classList.add(tj.acdPopupVariables['tjAcdVisible']);
        document
                .querySelectorAll('#tj-acd-modal .form_field_outer_activated')
                .forEach((el) => el.classList.remove('form_field_outer_activated'));
            document.getElementById('tj-popup-default-left') && (document.getElementById('tj-popup-default-left').style.display = 'block');
            document.getElementById('blog-acd-popup-first').style.display = 'block';
            document.getElementById('acd_otp_screen').style.display = 'none';

        $('.close-tj-acd-modal img').css('filter', 'none');
        $('#acd_otp_timer').text(tj.acdPopupVariables['count'] + ' sec');
        $('.acd_otp_digits input').each(function () {
            $(this).val('');
        });
        $('.tj_acd_lead_frm_intl_phone_error,.error').hide();
    },
    renderTemplate: function (a, showSlides, fetchResult) {
        'null' != up.d &&
                setTimeout(function () {
                    document.getElementById('tj-acd-modal').classList.add(tj.acdPopupVariables['tjAcdVisible']);
                }, 1e3 * up.d),
                showSlides(),
                tj.acdPopupVariables['showSlidesInterval'] = setInterval(showSlides, 2e3),
                switchPicker(document.getElementById('sandbox')),
                a('.close-tj-acd-modal', 'click', function (e) {
                    $('body').css('overflow', 'auto');
                    if (tj.acdPopupVariables['is_otp_verifed']) {
                        tj.acdPopupVariables['is_otp_verifed'] = false;
                        window.location.reload();
                    } else {
                        tj.acdPopupVariables['is_otp_verifed'] = false;
                    }
                    $('.tj-acd-notification').hide();
                    document
                            .getElementById('tj-acd-modal')
                            .classList.remove(tj.acdPopupVariables['tjAcdVisible']);
                    $('div.acd-video-section>iframe').attr(
                            'src',
                            $('div.acd-video-section>iframe').attr('src')
                            );
                }),
                a('.open-tj-acd-modal', 'click', function (e) {
                    document.getElementById('tj-acd-modal').classList.add(tj.acdPopupVariables['tjAcdVisible']);
                }),
                a('.tj_acd_input_popup', 'focus', function (e) {
                    this.parentNode.classList.add('form_field_outer_activated'),
                            this.parentNode.classList.add('input_blue_border');
                }),
                a('.tj_acd_input_popup', 'blur', function (e) {
                    '' == this.value &&
                            this.parentNode.classList.remove('form_field_outer_activated'),
                            this.parentNode.classList.remove('input_blue_border');
                }),
                a('.tj-acd-sfl', 'click', function (e) {
                    document
                            .getElementById('tj-acd-selectdate')
                            .classList.contains('date-closed')
                            ? ((document.getElementById('tj-call-now').value = 0),
                                    document
                                    .getElementById('tj-acd-selectdate')
                                    .classList.remove('date-closed'),
                                    (document.getElementById('tj-acd-sub-button').innerText =
                                            'Schedule Call'),
                                    (document.getElementById('acd-agreement-text-action') && (document.getElementById('acd-agreement-text-action').innerHTML =
                                            'Schedule Call')),
                                    (this.innerText = 'Schedule now'))
                            : ((document.getElementById('tj-call-now').value = 1),
                                    document
                                    .getElementById('tj-acd-selectdate')
                                    .classList.add('date-closed'),
                                    (document.getElementById('tj-acd-sub-button').innerText =
                                            'Get Free Call'),
                                    (document.getElementById('acd-agreement-text-action') && (document.getElementById('acd-agreement-text-action').innerHTML =
                                            'Get Free Call')),
                                    (this.innerText = 'Schedule for later'));
                });
        document.getElementById('tj-acd-search').addEventListener('keyup', fetchResult);
        document.getElementById('tj-acd-search').addEventListener('click', fetchResult);
    },

    schedule_acd: function (e, jsonData) {
        const t = new FormData(e.target);
        let dial_code = acd_iti.getSelectedCountryData().dialCode;
        t.append('dial_code', dial_code);
        t.append('acd_ques_data', JSON.stringify(jsonData));
        t.append('user_intent',tj.acdPopupVariables['targetUserIntent']);
        t.set('phone', acd_iti.getNumber('E164').replace(/[^0-9\.]+/g, ''));
        if (dial_code === '91') {
            t.append('sub_action', 'send_otp');
        }
        var spinnerHtml =
                '<div class="spinner white"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        $('#tj-acd-sub-button').html(spinnerHtml);

        var d = new Headers();

        d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzg5LCJuYmYiOjE2MTEwNjEzODksImV4cCI6MTY0MjU5NzM4OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.ztZpNa-l0Y9Gmyz5-JrKWGgFu97ghKuCY2p0bEW9iH4'
                );

        var l = {
            method: 'POST',
            headers: d,
            body: t,
        };

        fetch(tj.acdPopupVariables['tjUrl'][up.en] + '/schedule-acd', l)
                .then((e) => e.json())
                .then((e) => {
                    1 == e.status
                            ? ((tj.acdPopupVariables.schedule_acd_res_data = e.data),
                                    $('#tj-acd-sub-button').html(''),
                                    $('#tj-acd-sub-button').text(
                                    $('#tj-acd-sub-button').data('buttonName')
                                    ),
                                    tj.acdPopupTemplate.blog.change_form_content(e.data))
                            : ($('#tj-acd-sub-button').html(''),
                                    $('#tj-acd-sub-button').text(
                                    $('#tj-acd-sub-button').data('buttonName')
                                    ),
                                    (document.getElementById('tj-acd-notification').style.color =
                                            'red'),
                                    (document.getElementById('tj-acd-notification').innerHTML =
                                            e.message),
                                    (document.getElementById('tj-acd-notification').style.display =
                                            'block'),
                                    $('#tj-acd-notification')
                                    .parents('.rightpart')
                                    .animate({scrollTop: 0}));
                })
                .catch((e) => console.log('error', e));
    },
    change_form_content: function (data) {
        if (!tj.acdPopupVariables['isEventTriggered']) {

            tj.events.ga4Events('Lead submitted',{
                cta_name: data.action_performed,
                product_name: data.product_name,
                content_name: tj.acdPopupVariables['loadedTemplateName'],
                form_name: tj.acdPopupVariables['loadedTemplateName']
            });
            tj.events.ga4Events('Ads Conversion Tracking',{
                sha256_user_email: data.hashed_user_email
            });
            if (data.is_lead_verifed) {
                track_event_new(
                        'Lead verified',
                        data.action_performed,
                        data.product_name + ' | ' + tj.acdPopupVariables['loadedTemplateName'],
                        );
            }
            setTimeout(function () {
                fbq('trackCustom', 'Lead submitted', {
                    Name: data.product_name,
                    Action: data.action_performed,
                });
            }, 500);
            tj.acdPopupVariables['isEventTriggered'] = true;
        }
        if (data.hasOwnProperty('sub_action')) {
            let dial_code = acd_iti.getSelectedCountryData().dialCode;
            if (dial_code === '91' && data.sub_action === 'send_otp') {
                $('#blog-acd-popup-first').hide();
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    $(this).val('');
                });
                $('#acd_otp_number').text(acd_iti.getNumber());
                $('#tj-popup-default-left').show();
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).show();
                tj.acdPopupVariables['acdOtpTimerCounter'] = setInterval(AcdOtpTimer, 1000);
                tj.acdPopupVariables['count'] = 120;
                return false;
            }
        } else {
            $('#blog-acd-popup-first').hide();
            $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();

            if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                var search_val = $('#tj-acd-search').val();
                var item = document
                        .getElementById('tj-acd-search-div')
                        .getAttribute('data-selected');
                if (search_val != '' && item != null) {
                    var id = document
                            .getElementById('tj-acd-search-div')
                            .getAttribute('data-id');
                    if (item == 'category') {
                        tj.acdPopupVariables['targetCategoryId'] = id;
                    }
                }
            } 
        }
        document.getElementById('blog-acd-popup-first').style.display = 'none';
        document.getElementById('popupbroucherthanks').style.display = 'block';
        setTimeout(() => {
            $('.close-tj-acd-modal').click();
        }, 2500);
    },
    submit_generic_acd_questions: function (e) {
        return true;
    },
    render_recommended_products_section: function (data) {
       return true;
    },
};

tj.acdPopupTemplate.blog.bindEvents = function () {
    return true;
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