var tj = tj || {};
tj.isOpen = true;
tj.isOpenBlog = true;
tj.events = tj.events || {};

tj.acdPopupTemplate = tj.acdTemplate || {};

tj.acdPopupTemplate.custom_1 = {
    change_first_form_content: function (action, product_id) {
        if (action == 'GetFreeDemo') {
            document.getElementById('tj-skip-button').innerHTML = 'Skip & Schedule Demo';
            tj.acdPopupVariables.schedule_button_text = 'Schedule Demo';
            /* document.getElementById('tj-call-now').setAttribute('value', '0');
            document.getElementById('tj-acd-selectdate').classList.remove('date-closed');
            document.getElementById('tj-acd-sfl').style = 'visibility:hidden'; */
            document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').innerHTML =
                            'Book Free Demo with our Software Expert');
        } else {
            document.getElementById('tj-skip-button').innerHTML = 'Skip & Schedule Call';
            if (isWorkingHours()) {
                tj.acdPopupVariables.schedule_button_text = 'Call Now';
                document.getElementById('tj-acd-sfl').innerHTML = 'Schedule for later';
                document.getElementById('tj-acd-selectdate').classList.add('date-closed');
                document.getElementById('tj-acd-sfl').style = 'visibility:visible';
            } else {
                tj.acdPopupVariables.schedule_button_text = 'Schedule Call';
                /* document.getElementById('tj-call-now').setAttribute('value', '0');
                document.getElementById('tj-acd-sfl').style = 'visibility:visible';
                if (tj.acdPopupVariables['targetId'] !== 'PersonalizedSoftwareRecommendation') {
                    document
                            .getElementById('tj-acd-selectdate')
                            .classList.remove('date-closed');
                } */
            }

            if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
                tj.acdPopupVariables.schedule_button_text = 'Show Products';
                document.getElementById('tj-acd-sfl').style = 'visibility:visible';
                document.getElementById('tj-first-msg-first') &&
                        (document.getElementById('tj-first-msg-first').innerHTML =
                                'Enter your Details to View  Recommended Softwares');
            } else {
                document.getElementById('tj-first-msg-first') && (document.getElementById('tj-first-msg-first').innerHTML =
                        'Book Free Consultation with our Software Expert');
            }
        }
        $("#tj-acd-check-email").attr("data-galabel", tj.acdPopupVariables['targetGaLabel']);
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
    showScreen: function (evt, screenId) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(screenId).style.display = "block";
        evt.currentTarget.className += " active";
    },
    createAcdQuestions: function (data) {
        let acd_generic_questions = data.acd_generic_questions || [];
        let acd_questions = data.acd_questions || [];
        const all_acd_questions = [...acd_questions, ...acd_generic_questions];
        tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].renderAcdQuestions(
                all_acd_questions,
                'acd_second_form_ques_container'
                );
    },
    clickOnAcdContinue: function () {
        $("#acd_ques_continue_btn").trigger('click');
    },
    renderAcdQuestions: function (data, containerId) {
        $('#' + containerId).html('');
        $(".hr-ts1").css("width", "1%");
        $(".sp-time1 p").css("left", "1%");
        $(".sp-time1 p").text("01%");

        let acd_questions = data;

        let html = '';

        let acd_questions_length = acd_questions.length;

        for (let i in acd_questions) {
            let quesId = acd_questions[i].question_id;
            let quesText = acd_questions[i].question;
            let isMandatory = acd_questions[i].is_mandatory;
            let quesType = acd_questions[i].question_type;
            let hubspot_field_name = acd_questions[i].hubspot_field_name;

            let options = acd_questions[i]['options'];

            let inputHtml =
                    '<input data-ques-id="' +
                    quesId +
                    '" id="user_defined_ans_' +
                    quesId +
                    '" type="text" placeholder="Enter your answer here" class="form_field_input user_defined_input">';
            let textAreaHtml =
                    '<div class="textarea-queries-new"><textarea data-ques-id="' +
                    quesId +
                    '" id="user_defined_ans_' +
                    quesId +
                    '" class="form_field_input user_defined_input" style="text-align:left" value="" placeholder="Write here"></textarea></div>';

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
            let inputType = 'radio';
            let onChange = 'onChange="tj.acdPopupTemplate.custom_1.clickOnAcdContinue();"'
            let optionStyle = '';
            let userAnsBoxStyle = '';
            let techDescriptionStyle = '';
            let optionSelectionClass = '';
            if (quesType == '2') {
                ansInputHtml = textAreaHtml;
                onChange = "";
                optionSelectionClass = 'greenbackground';
                optionStyle = 'style="display: none;"';
            } else {
                userAnsBoxStyle = 'style="display: none;"';
            }

            if (quesType == '3') {
                inputType = 'checkbox';
                onChange = "";
            }

            for (let j in options) {
                let optionId = options[j]['id'];
                let isUserDefined = options[j]['is_user_defined'];
                let optionText = options[j]['option'];

                optionHtml += '<li><input ' + onChange + ' type="' + inputType + '" id="' + optionId + '-option" name="selector_' + quesId + '"' +
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
                        '"/>' +
                        '<label for="' + optionId + '-option"><span class="hed-1">' + optionText + '</span></label>' +
                        '<div class="check"></div>'
                        + '</li>';
            }



            let optionsContainerHtml =
                    '<div class="radio-q-1"' + optionStyle + '><ul>' +
                    optionHtml +
                    '</ul></div>' +
                    '<div class="searchproduct" ' +
                    userAnsBoxStyle +
                    '>' +
                    ansInputHtml +
                    '</div>' +
                    hubspot_hidden_input +
                    '<div class="input-file-popup form_field_outer">' +
                    '<label id="error_ques_id_' +
                    quesId +
                    '" class="error"></label>' +
                    '</div>';

            let questionBlockStyle = "style='display:none;'";
            if (i == 0) {
                questionBlockStyle = '';
                $("#acd_ques_back_btn").css("opacity", "0.25");
                $("#ques_seconds").text(acd_questions_length * 5 + " seconds");
            }

            html +=
                    '<div ' + questionBlockStyle + ' class="industry-q2 first_screen_ques" id="question_block_' + quesId + '">' +
                    '<h2>' + quesText + '</h2>' +
                    optionsContainerHtml +
                    '</div>';
        }

        $('#' + containerId).append(html);

        tj.acdPopupTemplate.custom_1.bindAcdQuestionsEvents(data);
    },
    bindAcdQuestionsEvents: function (data) {
        var acd_ques = data;
        var acdQuestionCounter = 0;
        $("#ques_seconds").text((acd_ques.length - acdQuestionCounter) * 5 + " seconds");

        $("#acd_ques_continue_btn").off('click').on('click', function (event) {
            if (acdQuestionCounter < 0) {
                acdQuestionCounter = 0;
            }

            let jsonData = tj.acdPopupTemplate.custom_1.validateAcdQuestions([acd_ques[acdQuestionCounter]]);

            if (!Array.isArray(jsonData)) {
                return false;
            }

            acdQuestionCounter++;

            $(".hr-ts1").css("width", Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");
            $(".sp-time1 p").css("left", Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");
            $(".sp-time1 p").text(Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");

            if (!acd_ques[acdQuestionCounter]) {
                tj.acdPopupTemplate.custom_1.showScreen(event, 'tj-popup-second');
                return;
            }

            $("#ques_seconds").text((acd_ques.length - acdQuestionCounter) * 5 + " seconds");
            $(".first_screen_ques").hide();
            $("#acd_ques_continue_btn").attr('data-counter', acdQuestionCounter);
            $("#question_block_" + acd_ques[acdQuestionCounter]["question_id"]).show();
            $("#acd_ques_back_btn").css("opacity", "1");
            $("#acd_ques_back_btn").attr("data-counter", acdQuestionCounter);
        });

        $("#acd_ques_back_btn").off('click').on('click', function () {
            acdQuestionCounter--;
            if (acdQuestionCounter < 0) {
                return;
            }

            if (acdQuestionCounter == 0) {
                $(".hr-ts1").css("width", "1%");
                $(".sp-time1 p").css("left", "1%");
                $(".sp-time1 p").text("01%");
            } else {
                $(".hr-ts1").css("width", Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");
                $(".sp-time1 p").css("left", Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");
                $(".sp-time1 p").text(Math.ceil((acdQuestionCounter * 100 / acd_ques.length)) + "%");
            }

            $("#ques_seconds").text((acd_ques.length - acdQuestionCounter) * 5 + " seconds");
            $(".first_screen_ques").hide();
            $("#acd_ques_continue_btn").attr('data-counter', acdQuestionCounter);
            $("#question_block_" + acd_ques[acdQuestionCounter]["question_id"]).show();
            if (acdQuestionCounter === 0) {
                $("#acd_ques_back_btn").css("opacity", "0.25");
            } else {
                $("#acd_ques_back_btn").css("opacity", "1");
            }
            $("#acd_ques_back_btn").attr("data-counter", acdQuestionCounter);
        });

        $('.acd-ques-options').off().on('click', function (evt) {
            let optionId = $(this).data('optionId');
            let isQuesMandatory = $(this).data('isQuesMandatory');
            let quesType = $(this).data('quesType');
            let isUserDefined = $(this).data('isUserDefined');
            let quesId = $(this).data('quesId');

            $('#error_ques_id_' + quesId).hide();
            if (isUserDefined == '1') {
                $(this).parents('.industry-q2').find('.searchproduct').show();
            } else if (!$(this).hasClass('greenbackground')) {
                $(this).parents('.industry-q2').find('.searchproduct').hide();
            }
            if (quesType != '3') {
                $(this).parents('.industry-q2').find('.acd-ques-options').removeClass('greenbackground');
            }
            if ($(this).hasClass('greenbackground')) {
                $(this).removeClass('greenbackground');
                $(this).parents('.industry-q2').find('.searchproduct').hide();
            } else {
                $(this).addClass('greenbackground');
            }
        });

        $('.user_defined_input').off().on('keyup blur', function () {
            let quesId = $(this).data('quesId');
            $('#error_ques_id_' + quesId).hide();
        });


        $("#tj-acd-sub-button").off('click').on('click', function () {
            $("#tj-acd-lead-frm").submit();
        });

        $("#tj-acd-lead-frm").off('submit').on('submit', function (event) {
            return validate(event, this);
        });

    },

    validateAcdQuestions: function (acd_questions, lead_id = '') {
        let jsonData = [];

        for (let i in acd_questions) {
            let quesId = acd_questions[i].question_id;
            let isMandatory = acd_questions[i].is_mandatory;
            let options = acd_questions[i]['options'];

            let flag = false;
            let temp = [];

            for (let j in options) {
                let optionId = options[j]['id'];
                let isUserDefined = options[j]['is_user_defined'];
                if (
                        $('input[data-option-id="' + optionId + '"]').hasClass('greenbackground')
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
                        let optionText = $('input[data-option-id="' + optionId + '"]').text();
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
        document.getElementById('tj-popup-first').style.display = 'block';
        document.getElementById('tj-popup-second').style.display = 'none';
        document.getElementById('tj-popup-third').style.display = 'none';
        document.getElementById('acd_otp_screen').style.display = 'none';
        tj.acdPopupTemplate.custom_1.bindEvents();
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
            $('#tj-first-msg-first').text(
                    'Enter your Details to View  Recommended Softwares'
                    );
            if (tj.acdPopupVariables['device_type'] != 'desktop') {
                $('.datetimesetting').hide();
            }
            $('#tj-skip-button').hide();
            $('#tj-continue-button').css('width', '100%');
            document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
        } else {
            document.getElementById('tj-popup-third-alternate') && (document.getElementById('tj-popup-third-alternate').style.display = 'none');
            if (tj.acdPopupVariables['device_type'] != 'desktop') {
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

        /* Check if personal email is used for existing ACDs */
        setTimeout(function () {
            let email = $('input[name="email"].tj_acd_input_popup').val();
            const atSignIndex = email.indexOf('@');
            const dotIndex = email.lastIndexOf('.');
            const emailDomain = email.substring(atSignIndex + 1, dotIndex);
            if (emailDomain === 'gmail' ||
                emailDomain === 'hotmail' ||
                emailDomain === 'outlook' ||
                emailDomain === 'yahoo' ||
                emailDomain === 'rediffmail'
            ) {
                $('input[name="email"].tj_acd_input_popup').val('');
            }
        }, 1000)
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
                        if(location.href.includes("/blog/") || location.href.includes("/localhost:3007/") || location.href.includes("/blog.") || location.href.includes("/c/e-invoicing"))
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
                                    (this.innerText = 'Call Now'))
                            : ((document.getElementById('tj-call-now').value = 1),
                                    document
                                    .getElementById('tj-acd-selectdate')
                                    .classList.add('date-closed'),
                                    (document.getElementById('tj-acd-sub-button').innerText =
                                            'Call Now'),
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
        t.append('acd_ques_data', JSON.stringify(jsonData));
        t.append('user_intent',tj.acdPopupVariables['targetUserIntent']);
        t.set('phone', acd_iti.getNumber('E164').replace(/[^0-9\.]+/g, ''));
        if (dial_code === '91') {
            t.append('sub_action', 'send_otp');
        }

        if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
            t.set('call_now', '');
            t.set('acd_start_date', '');
            t.set('acd_hour', '');
            t.set('acd_minute', '');
            track_event_new(
                    'Personalized Software Quiz',
                    'Clicked In Quiz Window',
                    'Show Software'
                    );
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
            )
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
                                    $('#tj-acd-sub-button').text($('#tj-acd-sub-button').data('buttonName')),
                                    tj.acdPopupTemplate.custom_1.change_form_content(e.data))
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
                        data.product_name + " | " + tj.acdPopupVariables['loadedTemplateName']
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

        $('.acd-content-section').hide();
        $('.datetimesetting').show();
        $('.shfreecall').show();
        if (data.hasOwnProperty('sub_action')) {
            let dial_code = acd_iti.getSelectedCountryData().dialCode;
            if (dial_code === '91' && data.sub_action === 'send_otp') {
                $('#tj-popup-first,#tj-popup-second').hide();
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
                if (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation') {
                    track_event_new('Personalized Software Quiz', 'Quiz View', 'Screen 3');
                }
                return false;
            }
        } else {
            $('#tj-popup-first,#tj-popup-second').hide();
            $(tj.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();
            $('#tj-popup-third').show();
        }

        document.getElementById('tj-popup-second-acd-uuid').value = data.lead_id;
        $('#tj-popup-third-left').removeClass('visible');
        document.getElementById('tj-third-msg-first').innerHTML =
                "We've got you confirmed for your free call";
        document
                .getElementById('recommended-products')
                .setAttribute('data-last_acd_time', data.acd_date);
        if (data.action_performed == 'GetFreeDemo') {
            document.getElementById('tj-third-msg-first').innerHTML =
                    "We've got you confirmed for your free demo";
            document.getElementById('tj-skip-button').innerHTML =
                    'Skip & Schedule Demo';
        } else if (data.action_performed == 'ShowPrice') {
            document.getElementById('tj-skip-button').innerHTML =
                    'Skip & Schedule Call';
        }


    },
    submit_generic_acd_questions: function () {

        let lead_id = $('#tj-popup-second-acd-uuid').val();
        let jsonData = tj.acdPopupTemplate[tj.acdPopupVariables.loadedTemplate].validateAcdQuestions(
                tj.acdPopupVariables.acd_popup_data.acd_generic_questions,
                lead_id
                );

        if (!Array.isArray(jsonData)) {
            return false;
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
                            ? (tj.acdPopupVariables['targetId'] === 'PersonalizedSoftwareRecommendation'
                                    ? track_event_new(
                                            'Personalized Software Quiz',
                                            'Quiz View',
                                            'Screen 4'
                                            )
                                    : '',
                                    (document.getElementById('tj-popup-second').style.display = 'none'),
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
            document.getElementById('recommended-products').innerHTML = '';
            document.getElementById('recommended-products').innerHTML = data.html;
            setTimeout(function () {
                tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].renderSlider(
                        {'element': '.custom_1_popup_slider',
                            'slidesToShow': 1,
                            'slidesToScroll': 1,
                            'responsive': false,
                            'dots': false,
                            'arrows': true,
                            'prevArrow': '<button class="wht-pl1" aria-label="Previous"><img alt="previous" src="' + tj.acdPopupVariables['tjUrl'][up.en] + '/assets/images/V2_img/ar-r1.png"></button>',
                            'nextArrow': '<button class="wht-pl2" aria-label="next"><img alt="next" src="' + tj.acdPopupVariables['tjUrl'][up.en] + '/assets/images/V2_img/ar-r2.png"></button>'
                        });
            }, 50);
        } else {
            document.getElementById('recommended-products').innerHTML = '';
        }
    },

};

tj.acdPopupTemplate.custom_1.renderSlider = function (sliderParam = {}) {

    if (!sliderParam)
        return false;

    var responsive = [];
    if (sliderParam.responsive) {
        responsive = [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 2
                }
            }
        ];
    }

    $(sliderParam.element).not('.slick-initialized').slick({
        infinite: (sliderParam.infinite) ? sliderParam.infinite : false,
        arrows: (sliderParam.arrows) ? sliderParam.arrows : false,
        nextArrow: (sliderParam.nextArrow) ? sliderParam.nextArrow : "<button class='slick-next slick-arrow' aria-label='Next' type='button' style='' aria-disabled='false'>Next</button>",
        prevArrow: (sliderParam.prevArrow) ? sliderParam.prevArrow : "<button class='slick-prev slick-arrow' aria-label='Previous' type='button' aria-disabled='false' style=''>Previous</button>",
        dots: (sliderParam.dots == undefined) ? true : sliderParam.dots,
        centerMode: (sliderParam.centerMode) ? sliderParam.centerMode : false,
        focusOnSelect: (sliderParam.focusOnSelect) ? sliderParam.focusOnSelect : false,
        slidesToShow: sliderParam.slidesToShow,
        slidesToScroll: sliderParam.slidesToScroll,
        asNavFor: (sliderParam.asNavFor == undefined) ? '' : sliderParam.asNavFor,
        responsive: responsive

    });
};

tj.acdPopupTemplate.custom_1.bindEvents = function () {
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
            track_event_new(
                'Personalized Software Quiz',
                'Clicked On Get Free Demo | Lead submitted',
                $(this).data('galabel')
            );
        }
        t['user_intent'] = $(this).data('userintent') || 'Callback';

        var d = new Headers();
        if(location.href.includes('/c/'))
        {
            d.append(
                'Authorization',
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlc2VsbGVyaHViLmNvbSIsImF1ZCI6IkVzZWxsZXIgSHViIiwiaWF0IjoxNjExMDYxMzc5LCJuYmYiOjE2MTEwNjEzNzksImV4cCI6MTY0MjU5NzM3OSwiZGF0YSI6eyJlbWFpbCI6Im1heWFua2R1cmdhcGFsMTdAZ21haWwuY29tIn19.D3xeLsr00Fd_HfqfeCFBKaBldRDjGLgbv_9cp_seYdw'
            )
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
                            set_html = `<div class="rec-img" style="width:30%">
                                        <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/acd/popup/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                    </div>
                                    <div class="rec-img-2" style="width:60%;">
                                    <h3 style="display: block;width: 100%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Confirmed!</h3>
                                    <div style="font-size:11px;float:left;">
                                        Great! You will receive the call soon.
                                    </div>
                                    <div class="star-acd-2">
                                        <a href="${tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug}" class="rec-img-3">Similar Products</a>
                                    </div>`;
                        } else {
                            set_html = ``;
                        }
                        $(this).closest('.recommended-md-bx1').html(set_html);
                        $(this).closest('.recommended-md-bx1').addClass('confirmed-box');
                        
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
                                    e.data.product_name + " | " + tj.acdPopupVariables['loadedTemplateName']
                                    );
                        }
                    } else {
                        tj.acdPopupVariables['targetId'] = temp_target_id;
                        if (tj.acdPopupVariables['device_type'] == 'desktop') {
                            error_html = `<div class="rec-img" style="width:30%">
                                        <img class="confimed-img" src="${
                                    tj.acdPopupVariables['tjUrl'][up.en] +
                                    '/assets/new-assets/images/error.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                    </div>
                                    <div class="rec-img-2" style="width:60%;">
                                    <h3 style="display: block;width: 100%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Sorry!</h3>
                                    <div style="font-size:11px;float:left;">
                                        Partner is occupied.
                                    </div>
                                    <div class="star-acd-2">
                                        <a href="${tj.acdPopupVariables['tjUrl'][up.en] + '/alternatives/' + slug}" class="rec-img-3">Similar Products</a>
                                    </div>`;
                        } else {
                            error_html = ``;
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

        let acd_generic_questions = tj.acdPopupVariables.acd_popup_data.acd_generic_questions.filter(x => x.is_mandatory > 0);
        let acd_questions = tj.acdPopupVariables.acd_popup_data.acd_questions.filter(x => x.is_mandatory > 0);
        const all_acd_questions = [...acd_generic_questions, ...acd_questions];
        if (all_acd_questions.length) {
            $(this).css("opacity", "0.25");
            $(this).attr("id", "tj-skip-button-disabled");
            tj.acdPopupTemplate[tj.acdPopupVariables['loadedTemplate']].renderAcdQuestions(
                    all_acd_questions,
                    'acd_second_form_ques_container'
                    );
            setTimeout(function () {
                $("#acd_ques_continue_btn").trigger('click');
            }, 50);
        } else {
            tj.acdPopupTemplate.custom_1.showScreen(e, 'tj-popup-second');
        }

    });

    $('.show_email_info').hover(function () {
        $('.email_info').show();
    }, function () {
        $('.email_info').hide();
    });

    $('input[name="email"].tj_acd_input_popup').keyup(function () {
        return validateEmail($(this).val());
    })

    $('#tj-acd-check-email').change(function () {
        if ($(this).is(':checked')) {
            $('input[name=email]').attr('placeholder', 'Personal Email*');
        } else {
            $('input[name=email]').attr('placeholder', 'Company Email*');
        }

        let email = $('input[name="email"].tj_acd_input_popup').val();
        if ( email !== '') {
            return validateEmail(email);
        }
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