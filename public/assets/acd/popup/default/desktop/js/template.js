var tj = tj || {};
tj.isOpen = true;
tj.events = tj.events || {};

tj.acdPopupTemplate = tj.acdTemplate || {};

tj.acdPopupTemplate.default = {
    change_first_form_content: function (action, product_id) {
        if (action == 'GetFreeDemo') {
            tj.acdPopupVariables.schedule_button_text = 'Schedule Demo';
            /* document.getElementById('tj-call-now').setAttribute('value', '0');
            document
                    .getElementById('tj-acd-selectdate')
                    .classList.remove('date-closed');
            document.getElementById('tj-acd-sfl').style = 'display:none'; */
            document.getElementById('tj-first-msg-first') &&
                    (document.getElementById('tj-first-msg-first').innerHTML =
                            'Book Free Demo with our Software Expert');
        } else {
            if (isWorkingHours()) {
                tj.acdPopupVariables.schedule_button_text = 'Get Free Call';
                document.getElementById('tj-acd-sfl').innerHTML = 'Schedule for later';
                document.getElementById('tj-acd-selectdate').classList.add('date-closed');
                document.getElementById('tj-acd-sfl').style = 'display:block';
            } else {
                tj.acdPopupVariables.schedule_button_text = 'Schedule Call';
                /* document.getElementById('tj-call-now').setAttribute('value', '0');
                document.getElementById('tj-acd-sfl').style = 'display:none';
                if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                    document
                            .getElementById('tj-acd-selectdate')
                            .classList.remove('date-closed');
                } */
            }

            if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
                tj.acdPopupVariables.schedule_button_text = 'Show Products';
                document.getElementById('tj-acd-sfl').style = 'display:none';
                document.getElementById('tj-first-msg-first') &&
                        (document.getElementById('tj-first-msg-first').innerHTML =
                                'Enter your Details to View  Recommended Softwares');
            } else {
                document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').innerHTML =
                        'Book Free Consultation with our Software Expert');
            }
        }

        if(tj.acdPopupVariables['videoCampaign'] && Object.keys(tj.acdPopupVariables['videoCampaign']).length) {
            document.getElementById('tj-first-msg-first') && 
            (document.getElementById('tj-first-msg-first').innerHTML = tj.acdPopupVariables['videoCampaign'].heading );
            document.getElementById('campaign-description') && 
            (document.getElementById('campaign-description').innerHTML = tj.acdPopupVariables['videoCampaign'].summary );
            document.getElementById('tj-acd-search').disabled = true;
            document.getElementById('tj-acd-search').style = "cursor:not-allowed";

        } else if(tj.acdPopupVariables['isBlog']) {
            document.getElementById('tj-first-msg-first') && 
            (document.getElementById('tj-first-msg-first').innerHTML = "Get Recommendation from India’s Best Software Expert ");
        }

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
        tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].renderAcdQuestions(
                data.acd_questions,
                'acd_first_form_ques_container'
                );
        tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].renderAcdQuestions(
                data.acd_generic_questions,
                'acd_second_form_ques_container'
                );
    },
    renderAcdQuestions: function (data, containerId) {

        $('#' + containerId).html('');

        let acd_generic_questions = data;

        let html = '';
        let check_disabled_svg_url =
                tj.acdPopupVariables['tjUrl'][up.en] + '/assets/acd/popup/desktop/images/check_disabled.svg';
        let check_svg_url =
                tj.acdPopupVariables['tjUrl'][up.en] + '/assets/acd/popup/desktop/images/check.svg';

        for (let i in acd_generic_questions) {
            let quesId = acd_generic_questions[i].question_id;
            let quesText = acd_generic_questions[i].question;
            let isMandatory = acd_generic_questions[i].is_mandatory;
            let quesType = acd_generic_questions[i].question_type;
            let hubspot_field_name = acd_generic_questions[i].hubspot_field_name;

            let options = acd_generic_questions[i]['options'];

            let inputHtml =
                    '<input data-ques-id="' +
                    quesId +
                    '" id="user_defined_ans_' +
                    quesId +
                    '" type="text" placeholder="Enter your answer here" class="form_field_input user_defined_input">';
            let textAreaHtml =
                    '<textarea data-ques-id="' +
                    quesId +
                    '" id="user_defined_ans_' +
                    quesId +
                    '" class="form_field_input user_defined_input" style="text-align:left" value="" placeholder="Write here"></textarea>';

            let hubspot_hidden_input = '';

            if (hubspot_field_name && hubspot_field_name.length > 0) {
                hubspot_hidden_input =
                        '<input class="value-hidden tj-acd-value-hidden" name="' +
                        hubspot_field_name +
                        '" type="hidden" value=""  id="hubspot_hidden_input_' +
                        quesId +
                        '"  style="visibility: hidden;">';
            }

            let ansInputHtml = inputHtml;
            let optionHtml = '';
            let optionStyle = '';
            let userAnsBoxStyle = '';
            let techDescriptionStyle = '';
            let optionSelectionClass = '';
            if (quesType == '2') {
                ansInputHtml = textAreaHtml;
                optionSelectionClass = 'greenbackground';
                optionStyle = 'style="display: none;"';
            } else {
                userAnsBoxStyle = 'style="display: none;"';
            }
            for (let j in options) {
                let optionId = options[j]['id'];
                let isUserDefined = options[j]['is_user_defined'];
                let optionText = options[j]['option'];
                optionHtml +=
                        '<span ' +
                        optionStyle +
                        '  data-option-id="' +
                        optionId +
                        '" data-is-ques-mandatory="' +
                        isMandatory +
                        '" data-ques-type="' +
                        quesType +
                        '" data-is-user-defined="' +
                        isUserDefined +
                        '" data-ques-id="' +
                        quesId +
                        '" class="gray acd-ques-options ' +
                        optionSelectionClass +
                        '">' +
                        optionText +
                        '</span>';
            }

            if (
                    containerId !== 'acd_first_form_ques_container' &&
                    acd_generic_questions.length > 1
                    ) {
                if (acd_generic_questions.length - 1 == i) {
                    techDescriptionStyle = 'style="padding-bottom: 100px;"';
                }
            }

            let optionsContainerHtml =
                    '<div class="input-file-popup form_field_outer">' +
                    '<label id="error_ques_id_' +
                    quesId +
                    '" class="error"></label>' +
                    '</div><div ' +
                    techDescriptionStyle +
                    ' class="techdescription">' +
                    optionHtml +
                    '<div class="searchproduct" ' +
                    userAnsBoxStyle +
                    '>' +
                    ansInputHtml +
                    '</div>' +
                    hubspot_hidden_input +
                    '</div>';

            let industryHeadingStyle = '';
            if (containerId == 'acd_first_form_ques_container') {
                industryHeadingStyle = "style='font-weight : 500;'";
            }

            html +=
                    '<div class="choosetechnologyheading">' +
                    '<p><span ' +
                    industryHeadingStyle +
                    ' class="industryheading">' +
                    quesText +
                    '</span></p>' +
                    optionsContainerHtml +
                    '</div>';
        }

        $('#' + containerId).append(html);

        tj.acdPopupTemplate.default.bindAcdQuestionsEvents();
    },

    bindAcdQuestionsEvents: function () {
        $('.acd-ques-options')
                .off()
                .on('click', function (evt) {
                    let optionId = $(this).data('optionId');
                    let isQuesMandatory = $(this).data('isQuesMandatory');
                    let quesType = $(this).data('quesType');
                    let isUserDefined = $(this).data('isUserDefined');
                    let quesId = $(this).data('quesId');

                    $('#error_ques_id_' + quesId).hide();

                    if (isUserDefined == '1') {
                        $(this).parent().parent().find('.searchproduct').show();
                        //$(this).parent().closest(".techdescription").find(".gray").removeClass("greenbackground");
                    } else if (!$(this).hasClass('greenbackground')) {
                        $(this).parent().parent().find('.searchproduct').hide();
                    }
                    if (quesType != '3') {
                        $(this).siblings('.acd-ques-options').removeClass('greenbackground');
                    }
                    if ($(this).hasClass('greenbackground')) {
                        $(this).removeClass('greenbackground');
                        $(this).parent().parent().find('.searchproduct').hide();
                        $(this).parent().parent().find('.check_enabled').hide();
                        $(this).parent().parent().find('.check_disabled').show();
                        $(this)
                                .siblings('.acd-ques-options')
                                .each(function () {
                                    if ($(this).hasClass('greenbackground')) {
                                        $(this).parent().parent().find('.check_enabled').show();
                                        $(this).parent().parent().find('.check_disabled').hide();
                                    }
                                });
                    } else {
                        $(this).addClass('greenbackground');
                        $(this).parent().parent().find('.check_enabled').show();
                        $(this).parent().parent().find('.check_disabled').hide();
                    }
                });

        $('.user_defined_input')
                .off()
                .on('keyup blur', function () {
                    let quesId = $(this).data('quesId');
                    $('#error_ques_id_' + quesId).hide();
                    if ($(this).val() != '') {
                        $(this)
                                .parents('.choosetechnologyheading')
                                .find('.check_enabled')
                                .show();
                        $(this)
                                .parents('.choosetechnologyheading')
                                .find('.check_disabled')
                                .hide();
                    } else {
                        $(this)
                                .parents('.choosetechnologyheading')
                                .find('.check_enabled')
                                .hide();
                        $(this)
                                .parents('.choosetechnologyheading')
                                .find('.check_disabled')
                                .show();
                    }
                });
    },

    validateAcdQuestions: function (acd_generic_questions, lead_id = '') {
        let jsonData = [];

        for (let i in acd_generic_questions) {
            let quesId = acd_generic_questions[i].question_id;
            let isMandatory = acd_generic_questions[i].is_mandatory;
            let options = acd_generic_questions[i]['options'];

            let flag = false;
            let temp = [];

            for (let j in options) {
                let optionId = options[j]['id'];
                let isUserDefined = options[j]['is_user_defined'];
                if (
                        $('span[data-option-id="' + optionId + '"]').hasClass('greenbackground')
                        ) {
                    flag = true;
                    if (isUserDefined == '1') {
                        let user_defined_ans = $('#user_defined_ans_' + quesId).val();
                        if (
                                !user_defined_ans.replace(/\s/g, '').length &&
                                isMandatory == '1'
                                ) {
                            document.getElementById('error_ques_id_' + quesId).innerHTML =
                                    'Please answer this question';
                            document.getElementById('error_ques_id_' + quesId).style.display =
                                    'block';
                            return false;
                        } else if (user_defined_ans.replace(/\s/g, '').length) {
                            temp.push({
                                lead_id: lead_id,
                                ques_id: quesId,
                                ans_id: optionId,
                                user_defined_ans: user_defined_ans,
                            });
                            $('#hubspot_hidden_input_' + quesId).val(user_defined_ans);
                        }
                    } else {
                        temp.push({
                            lead_id: lead_id,
                            ques_id: quesId,
                            ans_id: optionId,
                        });
                        let optionText = $('span[data-option-id="' + optionId + '"]').text();
                        $('#hubspot_hidden_input_' + quesId).val(optionText);
                    }
                }
            }

            if (isMandatory == '1' && !flag) {
                document.getElementById('error_ques_id_' + quesId).innerHTML =
                        'Please answer this question';
                document.getElementById('error_ques_id_' + quesId).style.display =
                        'block';
                return false;
            }

            if (temp.length > 0) {
                jsonData.push(temp);
            }
        }

        return jsonData;
    },
    initFormActions: function () {
        document.getElementById('tj-popup-first').style.display = 'none';
        document.getElementById('tj-popup-second').style.display = 'none';
        document.getElementById('tj-popup-third').style.display = 'none';
        tj.acdPopupTemplate.default.bindEvents();
        if (tj.acdPopupVariables['device_type'] == 'desktop') {
            $('.shfreecall').hide();
            document.getElementById('tj-popup-third-left') && (document.getElementById('tj-popup-third-left').style.display = 'none');
        } else if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            // document.getElementById("recommended-text-section").style.display = "none";
        }
        document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
        document.getElementById('acd_otp_screen').style.display = 'none';
        document.getElementById('tj-popup-second-acd-uuid').value = '';

        document.getElementById('tj-acd-lead-frm').reset();
        document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').style.display = 'block');
        document.getElementById('tj-acd-modal').classList.add(tj.acdPopupVariables['tjAcdVisible']);
        document
                .querySelectorAll('#tj-acd-modal .form_field_outer_activated')
                .forEach((el) => el.classList.remove('form_field_outer_activated'));
        if (tj.acdPopupVariables['device_type'] == 'desktop') {
            document.getElementById('tj-popup-default-left') && (document.getElementById('tj-popup-default-left').style.display = 'block');
            document.getElementById('tj-popup-third-left') && (document.getElementById('tj-popup-third-left').style.display = 'none');
        }

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            document.getElementById('tj-acd-lead-frm').campaign_name.value =
                    'Website ACD Pop Up_Quiz';
            let prodNames = document.querySelectorAll('.tj-scheduled-product');
            prodNames.forEach((prod, index) => {
                prod.innerHTML = tj.acdPopupVariables['targetCategoryName'];
            });
            get_recommended_products('category', tj.acdPopupVariables['targetCategoryId']);
            document.getElementById('tj-popup-second').style.display = 'block';
            // $("#tj-second-msg-first").text("Select the Option that Fits you Best");
            $('#tj-first-msg-first').text(
                    'Enter your Details to View  Recommended Softwares'
                    );
            if (tj.acdPopupVariables['device_type'] != 'desktop') {
                $('.datetimesetting').hide();
            }
            $('#tj-skip-button').hide();
            $('#tj-continue-button').css('width', '100%');
            document.getElementById('tj-popup-first').style.display = 'none';
            document.getElementById('tj-popup-third').style.display = 'none';
            document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
            document.getElementById('acd_otp_screen').style.display = 'none';
        } else {
            document.getElementById('tj-popup-first').style.display = 'block';
            document.getElementById('tj-popup-second').style.display = 'none';
            document.getElementById('tj-popup-third').style.display = 'none';
            document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
            document.getElementById('acd_otp_screen').style.display = 'none';
            if (tj.acdPopupVariables['device_type'] != 'desktop') {
                // document.getElementById("recommended-text-section").style.display = "block";
                $('#tj-skip-button').show();
                $('#tj-continue-button').css('width', '50%');
            }
        }

        $('#acd_first_form_ques_container, #acd_second_form_ques_container').html('');

        $('.close-tj-acd-modal img').css('filter', 'none');
        $('#acd_otp_timer').text(tj.acdPopupVariables['count'] + ' sec');
        $('.acd_otp_digits input').each(function () {
            $(this).val('');
        });
        $('.tj_acd_lead_frm_intl_phone_error,.error').hide();

        if(tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') {
            document.getElementById('tj-acd-lead-frm').lead_form_name.value = tj.acdPopupVariables['targetFormName'];
        }
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
                        if(location.href.includes("/blog/") || location.href.includes("/localhost:3007/") || location.href.includes("/blog."))
                        {
                            window.location.href = 'https://www.techjockey.com/category/'+tj.acdPopupVariables.schedule_acd_res_data.redirect_category_slug;
                        }
                        else
                        {
                            window.location.reload();
                        }
                        
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
        if (typeof tj.page_type !== 'undefined') {
            let lowerCasePageType = tj.page_type.toLowerCase();
            let acceptedValues = ['video detail', 'video home', 'video category'];
            if (acceptedValues.includes(lowerCasePageType)) {
                t.append('page', lowerCasePageType);
            }
        } 
        t.append('user_intent',tj.acdPopupVariables['targetUserIntent']);
        t.append('acd_ques_data', JSON.stringify(jsonData));
        t.set('phone', acd_iti.getNumber('E164').replace(/[^0-9\.]+/g, ''));
        if (dial_code === '91') {
            t.append('sub_action', 'send_otp');
        }

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            t.set('call_now', '');
            t.set('acd_start_date', '');
            t.set('acd_hour', '');
            t.set('acd_minute', '');
            if(tj.page_type){
                track_event_new(tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page','Quiz Module','Stage 2 | User Details | ' + tj.page);
            }
        }

        var spinnerHtml =
                '<div class="spinner white"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        $('#tj-acd-sub-button').html(spinnerHtml);

        var d = new Headers();

        if(location.href.includes('/c/'))
        {
            d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzc5LCJuYmYiOjE2MTEwNjEzNzksImV4cCI6MTY0MjU5NzM3OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.D3xeLsr00Fd_HfqfeCFBKaBldRDjGLgbv_9cp_seYdw'
            );
        }
        else
        {
        d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzg5LCJuYmYiOjE2MTEwNjEzODksImV4cCI6MTY0MjU5NzM4OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.ztZpNa-l0Y9Gmyz5-JrKWGgFu97ghKuCY2p0bEW9iH4'
                );
        }
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
                                    tj.acdPopupTemplate.default.change_form_content(e.data))
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
                form_name: (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName']
            });
            tj.events.ga4Events('Ads Conversion Tracking',{
                sha256_user_email: data.hashed_user_email
            });
            if (data.is_lead_verifed) {
                track_event_new(
                        'Lead verified',
                        data.action_performed,
                        data.product_name + ' | ' + (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName'],
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
                $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).show();
                tj.acdPopupVariables['acdOtpTimerCounter'] = setInterval(AcdOtpTimer, 1000);
                tj.acdPopupVariables['count'] = 120;
                return false;
            }
        } else {
            $('#tj-popup-first').hide();
            $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();
            if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
                $('#tj-popup-default-left').addClass('visible');
                $('#tj-popup-third').addClass('visible');
                $('.leftpart.visible').show();
                $('.rightpart.visible').show();
            }

            if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                var search_val = $('#tj-acd-search').val();
                var item = document
                        .getElementById('tj-acd-search-div')
                        .getAttribute('data-selected');
                if (search_val != '' && item != null && ($('#tj-acd-search-div').css('display') != "none")) {
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
            } else if (
                    tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation' &&
                    data.lead_id
                    ) {
                document.getElementById('tj-popup-second-acd-uuid').value = data.lead_id;
                tj.acdPopupTemplate.default.submit_generic_acd_questions(null);
            }
        }

        if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
            document.getElementById('tj-popup-second-acd-uuid').value = data.lead_id;
            document.getElementById('tj-popup-first').style.display = 'none';
            document.getElementById('tj-popup-second').style.display = 'block';
        }

        $('#tj-popup-third-left').removeClass('visible');
        document.getElementById('tj-third-msg-first').innerHTML =
                'Awesome, Your FREE call<br> for ' +
                data.product_name +
                ' has been scheduled!';
        document.getElementById('tj-third-left-msg').innerHTML = 'Call';
        document
                .getElementById('recommended-products')
                .setAttribute('data-last_acd_time', data.acd_date);
        if (data.action_performed == 'GetFreeDemo') {
            document.getElementById('tj-third-msg-first').innerHTML =
                    'Awesome, Your FREE demo<br> for ' +
                    data.product_name +
                    ' has been scheduled!';
            document.getElementById('tj-skip-button').innerHTML =
                    'Skip & Schedule Demo';
            document.getElementById('tj-third-left-msg').innerHTML = 'Demo';
        } else if (data.action_performed == 'ShowPrice') {
            document.getElementById('tj-skip-button').innerHTML =
                    'Skip & Schedule Call';
            document.getElementById('tj-third-left-msg').innerHTML = 'Call';
        }

        if (tj.acdPopupVariables['default_product_id'] == data.product_id) {
            document.getElementById('viewsimilar').href = tj.acdPopupVariables["suburl"] + '/categories';
            document.getElementById('viewsimilar').innerHTML =
                    'Explore More Categories';
        } else {
            document.getElementById('viewsimilar').href =
                    tj.acdPopupVariables["suburl"] + '/alternatives/' + data.product_slug;
            document.getElementById('viewsimilar').innerHTML = 'Similar Products';
        }
    },
    submit_generic_acd_questions: function (e) {
        if (e) {
            e.preventDefault();
        }

        let lead_id = $('#tj-popup-second-acd-uuid').val();
        let jsonData = tj.acdPopupTemplate[tj.acdPopupVariables.loadedTemplate].validateAcdQuestions(
                tj.acdPopupVariables.acd_popup_data.acd_generic_questions,
                lead_id
                );

        if (!Array.isArray(jsonData)) {
            return false;
        }

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation' && !lead_id) {
            document.getElementById('tj-popup-first').style.display = 'block';
            document.getElementById('tj-popup-second').style.display = 'none';
            document.getElementById('tj-popup-third').style.display = 'none';
            document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
            document.getElementById('acd_otp_screen').style.display = 'none';
            if(tj.page_type)
            {
                track_event_new(tj.page_type.charAt(0).toUpperCase() + tj.page_type.slice(1) + ' Page','Quiz Module','Stage 1 | Questionnaire | ' + tj.page);
            }
            return true;
        }

        var l = {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(tj.acdPopupVariables['tjUrl'][up.en] + '/submit-acd-second-form', l)
                .then((e) => e.json())
                .then((e) => {
                    1 == e.status
                             ? ((document.getElementById('tj-popup-second').style.display = 'none'),
                                    // (device == 'desktop' ? document.getElementById("tj-popup-default-left").style.display = "none" : ''),
                                    $('#tj-first-msg-first').hide(),
                                    tj.acdPopupVariables['device_type'] == 'desktop'
                                    ? $('.shfreecall').hide()
                                    : $('.shfreecall').show(),
                                    $('.leftpart.visible').show(),
                                    $('.rightpart.visible').show(),
                                    tj.acdPopupVariables['device_type'] == 'desktop' ? $('#tj-popup-third-left').show() : '')
                            : // ($(".close-tj-acd-modal img").css('filter', 'invert(1)'))
                            ((document.getElementById('tj-acd-notification').style.color = 'red'),
                                    (document.getElementById('tj-acd-notification').innerHTML =
                                            e.message),
                                    (document.getElementById('tj-acd-notification').style.display =
                                            'block'),
                                    $('#tj-acd-notification')
                                    .parents('.rightpart')
                                    .animate({scrollTop: 0}));
                })
                .catch((e) => console.log('error', e.status));
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

tj.acdPopupTemplate.default.bindEvents = function () {

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
        if (typeof tj.page_type !== 'undefined') {
            let lowerCasePageType = tj.page_type.toLowerCase();
            let acceptedValues = ['video detail', 'video home', 'video category'];
            if (acceptedValues.includes(lowerCasePageType)) {
                t['page'] = lowerCasePageType;
            }
        }  
        if(tj.acdPopupVariables.schedule_acd_res_data.lead_owner_id != undefined)
        {
            t.lead_owner_id = tj.acdPopupVariables.schedule_acd_res_data.lead_owner_id;
        }

        var temp_target_id = tj.acdPopupVariables['targetId'];

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            tj.acdPopupVariables['targetId'] = null;
            t['activity'] = 'PersonalizedSoftwareRecommendation';
        }
        t['user_intent'] = $(this).data('userintent') || 'Callback';

        var d = new Headers();
        if(location.href.includes('/c/'))
        {
            d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzc5LCJuYmYiOjE2MTEwNjEzNzksImV4cCI6MTY0MjU5NzM3OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.D3xeLsr00Fd_HfqfeCFBKaBldRDjGLgbv_9cp_seYdw'
            );
        }
        else
        {
        d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzg5LCJuYmYiOjE2MTEwNjEzODksImV4cCI6MTY0MjU5NzM4OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.ztZpNa-l0Y9Gmyz5-JrKWGgFu97ghKuCY2p0bEW9iH4'
                );
        }
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
                            set_html = `<div class="col-md-2">
                                        <div class="recommended-md-4">
                                            <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/acd/popup/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
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
                                    }">Similar Products</a>
                                    </div>`;
                        } else {
                            set_html = `<div class="col-md-7">
                                    <div class="confim-div">
                                        <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/acd/popup/desktop/images/check.svg'
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
                                    }">Similar Products</a>
                                    </div>
                                </div>`;
                        }
                        $(this).closest('.recommended-md-bx1').html(set_html);
                        $(this).closest('.recommended-md-bx1').addClass('confirmed-box');
                        
                        tj.events.ga4Events('Lead submitted',{
                            cta_name: e.data.action_performed,
                            product_name: e.data.product_name,
                            content_name: tj.acdPopupVariables['loadedTemplateName'],
                            form_name: (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName']
                        });
                        tj.events.ga4Events('Ads Conversion Tracking',{
                            sha256_user_email: e.data.hashed_user_email
                        });
                        if (e.data.is_lead_verifed) {
                            track_event_new(
                                'Lead verified',
                                e.data.action_performed,
                                e.data.product_name + ' | ' + (tj.acdPopupVariables['targetFormName'] && tj.acdPopupVariables['targetFormName'] != '') ? tj.acdPopupVariables['targetFormName'] : tj.acdPopupVariables['loadedTemplateName'],
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
                                    }">Similar Products</a>
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
                                    }">Similar Products</a>
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


    $('body').on('click', '#tj-skip-button', function (e) {
        $("#tj-skip-button").unbind();
        document.getElementById('tj-popup-second').style.display = 'none';
        if (tj.acdPopupVariables['device_type'] == 'desktop') {
            $('.shfreecall').hide();
        }
        $('#tj-first-msg-first').hide();
        $('.useracdinputs').show();
        $('.leftpart.visible').show();
        $('.rightpart.visible').show();
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
