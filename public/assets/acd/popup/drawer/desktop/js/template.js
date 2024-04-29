var tj = tj || {};
tj.isOpen = true;
tj.events = tj.events || {};

tj.acdPopupTemplate = tj.acdTemplate || {};

tj.acdPopupTemplate.drawer = {
    change_first_form_content: function (action, product_id) {

        tj.acdPopupVariables.schedule_button_text = 'Get Free Call';
        document.getElementById('tj-acd-selectdate').classList.add('date-closed');

        document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').innerHTML =
                    'Book Free Consultation with our Software Expert');
        
        

        document.getElementById('tj-acd-search-div').style = 'display:none';
        if (
                product_id == tj.acdPopupVariables['default_product_id'] &&
                tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation'
                ) {
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
        document.getElementById('tj-popup-first').style.display = 'none';
        document.getElementById('tj-popup-third').style.display = 'none';
        tj.acdPopupTemplate.drawer.bindEvents();
        if (tj.acdPopupVariables['device_type'] == 'desktop') {
            $('.shfreecall').hide();
            document.getElementById('tj-popup-third-left') && (document.getElementById('tj-popup-third-left').style.display = 'none');
        } 
        document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
        document.getElementById('acd_otp_screen').style.display = 'none';
        document.getElementById('tj-popup-second-acd-uuid').value = '';

        document.getElementById('tj-acd-lead-frm').reset();
        document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').style.display = 'block');
        document.getElementById('tj-acd-modal').classList.add(tj.acdPopupVariables['tjAcdVisible']);
        document.getElementById('tj-acd-modal').classList.add('animation');
        document.getElementsByClassName('tj-acd-pop-up-section')[0].classList.add('animation');
        document.getElementsByClassName('tj-acd-pop-up-section')[0].classList.add('show_pop');
        document.querySelectorAll('#tj-acd-modal .form_field_outer_activated')
                .forEach((el) => el.classList.remove('form_field_outer_activated'));
        if (tj.acdPopupVariables['device_type'] == 'desktop') {
            document.getElementById('tj-popup-default-left') && (document.getElementById('tj-popup-default-left').style.display = 'block');
            document.getElementById('tj-popup-third-left') && (document.getElementById('tj-popup-third-left').style.display = 'none');
        }

        document.getElementById('tj-popup-first').style.display = 'block';
        document.getElementById('tj-popup-third').style.display = 'none';
        document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
        document.getElementById('acd_otp_screen').style.display = 'none';
        if (tj.acdPopupVariables['device_type'] != 'desktop') {
            $('#tj-continue-button').css('width', '50%');
        }

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
                    document.getElementsByClassName('tj-acd-pop-up-section')[0].classList.remove('show_pop');
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
        t.append('user_intent',tj.acdPopupVariables['targetUserIntent']);
        t.append('acd_ques_data', JSON.stringify(jsonData));
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
                                    tj.acdPopupTemplate.drawer.change_form_content(e.data))
                            : ($('#tj-acd-sub-button').html(''),
                                    tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation'
                                    ? $('#tj-acd-sub-button').text(
                                    $('#tj-acd-sub-button').data('buttonName')
                                    )
                                    : $('#tj-acd-sub-button').text('Show Products'),
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
        /** ======== Set Scheduled data ======*/
        let prodNames = document.querySelectorAll('.tj-scheduled-product');
        prodNames.forEach((prod, index) => {
            prod.innerHTML = data.product_name;
        });

        let prodDate = document.querySelectorAll('.tj-scheduled-date');
        prodDate.forEach((dat, index) => {
            dat.innerHTML = data.date;
        });

        let prodTime = document.querySelectorAll('.tj-scheduled-time');
        prodTime.forEach((tim, index) => {
            tim.innerHTML = data.time;
        });
        /** ================================== */

        $('.acd-content-section').hide();
        $('.datetimesetting').show();
        $('.shfreecall').show();
        if (data.hasOwnProperty('sub_action')) {
            let dial_code = acd_iti.getSelectedCountryData().dialCode;
            if (dial_code === '91' && data.sub_action === 'send_otp') {
                $('#tj-popup-first').hide();
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    $(this).val('');
                });
                $('#acd_otp_number').text(acd_iti.getNumber());
                $('.leftpart.visible').hide();
                $('.rightpart.visible').hide();
                $('#tj-popup-default-left').show();
                $('#tj-popup-third-left').removeClass('visible');
                $('#tj-popup-third').removeClass('visible');
                $('#drawer-header h2').html('Confirm <br />Your OTP');
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).show();
                tj.acdPopupVariables['acdOtpTimerCounter'] = setInterval(AcdOtpTimer, 1000);
                tj.acdPopupVariables['count'] = 120;
                return false;
            }
        } else {
            $('#tj-popup-first').hide();
            $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();

            var search_val = $('#tj-acd-search').val();
            var item = document
                    .getElementById('tj-acd-search-div')
                    .getAttribute('data-selected');
            if (search_val != '' && item != null) {
                var id = document
                        .getElementById('tj-acd-search-div')
                        .getAttribute('data-id');
                if (item == 'category') {
                    prodNames.forEach((prod, index) => {
                        prod.innerHTML = data.software_category;
                    });
                    tj.acdPopupVariables['targetCategoryId'] = id;
                }
                get_recommended_products(item, id);
            } else {
                get_recommended_products('product', data.product_id);
            }
        }

        document.getElementById('tj-popup-second-acd-uuid').value = data.lead_id;
        document.getElementById('tj-popup-first').style.display = 'none';
        $('#drawer-header').html(`<div class="text-login-btn-confirmed"><span class="conf_img1"><img src="${tj.acdPopupVariables['tjUrl'][up.en] +
            '/assets/acd/popup/drawer/desktop/images/success_icon.svg'}" class="lazyload" alt="icon"/></span><p class="titl-con">Confirmed<span>You’ll get an instant call soon!</span></p></div>`);
        document.getElementById('tj-popup-third').style.display = 'block';

        $('#tj-popup-third-left').removeClass('visible');
        document.getElementById('tj-third-msg-first').innerHTML =
                'Awesome, Your FREE call<br> for ' +
                data.product_name +
                ' has been scheduled!';
        // document.getElementById('tj-third-left-msg').innerHTML = 'Call';
        document
                .getElementById('recommended-products')
                .setAttribute('data-last_acd_time', data.acd_date);

        if (tj.acdPopupVariables['default_product_id'] == data.product_id) {
            document.getElementById('viewsimilar').href = tj.acdPopupVariables["suburl"] + '/categories';
            document.getElementById('viewsimilar').innerHTML =
                    'Explore More Categories';
        } else {
            document.getElementById('viewsimilar').href =
                    tj.acdPopupVariables["suburl"] + '/alternatives/' + data.product_slug;
            document.getElementById('viewsimilar').innerHTML = 'View Similar';
        }
    },
    submit_generic_acd_questions: function (e) {
       return true;
    },
    render_recommended_products_section: function (data) {
        if (data.status) {
            document.getElementById('recommended-products').innerHTML = data.html;
            if (tj.acdPopupVariables['device_type'] == 'desktop') {
                if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                    $('#tj-popup-default-left').removeClass('visible');
                    $('#tj-popup-third-left').addClass('visible');
                } else {
                    $('#tj-popup-default-left').addClass('visible');
                    $('#tj-popup-third-left').removeClass('visible');
                }
            }
            $('#tj-popup-third').addClass('visible');
            $('#tj-popup-third-alternate').removeClass('visible');
        } else {
            if (tj.acdPopupVariables['device_type'] == 'desktop') {
                $('#tj-popup-default-left').addClass('visible');
                $('#tj-popup-third-left').removeClass('visible');
            }
            $('#tj-popup-third').removeClass('visible');
            $('#tj-popup-third-alternate').addClass('visible');
        }
    },
};

tj.acdPopupTemplate.drawer.bindEvents = function () {
    $(document).on('click', '.tj-acd-form-recommended-product', function () {
        var t = {
            product_id: $(this).data('proid'),
            name: $('input.tj_acd_input_popup[name=name]').val(),
            email: $('input.tj_acd_input_popup[name=email]').val(),
            phone: $('input.tj_acd_input_popup[name=phone]').val(),
            source: $('#tj-acd-lead-frm').find('input[name=source]').val(),
            action: $(this).data('action'),
            recommended_time: 1,
            last_lead_id: $('#tj-popup-second-acd-uuid').val(),
            category_id: tj.acdPopupVariables['targetCategoryId'],
        };
        let dial_code = acd_iti.getSelectedCountryData().dialCode;
        t['dial_code'] = dial_code;

        if(tj.acdPopupVariables.schedule_acd_res_data.lead_owner_id != undefined)
        {
            t.lead_owner_id = tj.acdPopupVariables.schedule_acd_res_data.lead_owner_id;
        }

        var temp_target_id = tj.acdPopupVariables['targetId'];

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            tj.acdPopupVariables['targetId'] = null;
            t['activity'] = 'PersonalizedSoftwareRecommendation';
            track_event_new(
                    'Personalized Software Quiz',
                    'Clicked On Get Free Demo | Lead submitted',
                    $(this).data('galabel')
                    );
        }
        t['user_intent'] = $(this).data('userintent') || 'Callback';

        var d = new Headers();
        d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzg5LCJuYmYiOjE2MTEwNjEzODksImV4cCI6MTY0MjU5NzM4OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.ztZpNa-l0Y9Gmyz5-JrKWGgFu97ghKuCY2p0bEW9iH4'
                );
        var l = {
            method: 'POST',
            headers: d,
            body: JSON.stringify(t),
        };
        var spinnerHtml =
                '<div class="spinner white"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        $(this)
                .css('background', '#362487')
                .removeClass('tj-acd-form-recommended-product')
                .html(spinnerHtml);
        $('.acd-recomm-loader').css('display', 'block');
        fetch(tj.acdPopupVariables['tjUrl'][up.en] + '/schedule-acd', l)
                .then((e) => e.json())
                .then((e) => {
                    $('.acd-recomm-loader').css('display', 'none');
                    var slug = $(this).data('prod_slug');
                    var set_html = '',
                            error_html = '';
                    if (e.status) {
                        $('#recommended-products')
                                .data('last_acd_time', e.data.acd_date)
                                .attr('data-last_acd_time', e.data.acd_date);
                        if (tj.acdPopupVariables['device_type'] == 'desktop') {
                            set_html = `<div class="col-chek-icon">
                                        <div class="recommended-md-4">
                                            <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/acd/popup/drawer/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="sorf-md-text1">
                                            <p class="prod_confimation">Confirmed!</p>
                                            <p class="confirmation-text">You will receive a call from our software expert for ${
                                    e.data.product_name
                                    } soon</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>`;
                        } else {
                            set_html = `<div class="col-md-7">
                                    <div class="confim-div">
                                        <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/acd/popup/drawer/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                        <p class="prod_confimation">Confirmed!</p>
                                        <p class="confirmation-text">You will receive a call from our software expert for ${
                                    e.data.product_name
                                    } soon</p>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="sorf-md-text1">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>
                                </div>`;
                        }
                        $(this).closest('.recommended-md-bx1').addClass('confirmed-box');
                        $(this).closest('.recommended-md-bx1').html(set_html);
                        
                        tj.events.ga4Events('Lead submitted',{
                            cta_name: e.data.action_performed,
                            product_name: e.data.product_name,
                            content_name: tj.acdPopupVariables['loadedTemplateName'],
                            form_name: tj.acdPopupVariables['loadedTemplateName']
                        });
                        tj.events.ga4Events('Ads Conversion Tracking',{
                            sha256_user_email: e.data.hashed_user_email
                        });
                        if (e.data.is_lead_verifed) {
                            track_event_new(
                                    'Lead verified',
                                    e.data.action_performed,
                                    e.data.product_name + ' | ' + tj.acdPopupVariables['loadedTemplateName'],
                                    );
                        }
                    } else {
                        tj.acdPopupVariables['targetId'] = temp_target_id;
                        if (tj.acdPopupVariables['device_type'] == 'desktop') {
                            error_html = `<div class="col-md-2">
                                        <div class="recommended-md-4">
                                            <img class="reject-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/new-assets/images/error.svg'
                                    }" width="50px"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="sorf-md-text1">
                                            <p class="prod_confimation">Sorry!</p>
                                            <p class="confirmation-text">Partner is occupied. Please try again.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>`;
                        } else {
                            error_html = `<div class="col-md-7">
                                    <div class="confim-div">
                                        <img class="reject-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/new-assets/images/error.svg'
                                    }" width="50px"/>
                                        <p class="prod_confimation">Sorry!</p>
                                        <p class="confirmation-text">Partner is occupied. Please try again.</p>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="sorf-md-text1">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>
                                </div>`;
                        }
                        $(this).closest('.recommended-md-bx1').html(error_html);
                    }
                })
                .catch((e) => {
                    tj.acdPopupVariables['targetId'] = temp_target_id;
                });
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
