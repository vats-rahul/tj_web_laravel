var acd = acd || {};
acd.leadData;

$(document).on('click', '.call_button', function (e) {
    var cutoff = 110;
    var target = $(this).data('target');
    $('html, body').animate({
        scrollTop: $('#' + target).offset().top - cutoff
    }, 0);
    e.preventDefault();
});

const newDate = new Date(); // Now
newDate.setDate(newDate.getDate() + 30);
const elem = document.querySelector('#start_date1');
const datepicker = new Datepicker(elem, {
    pickTime: false,
    defaultDate: new Date(),
    minDate: new Date(),
    maxDate: newDate,
    daysOfWeekDisabled: [0, 6],
});

$(".schedulCall").click(function () {
    if ($('.date-time').hasClass("closed")) {
        $('#recall_status').val(2)
        $(".date-time").show(300);
        $('#sub-button_now').hide(200);
        $('#sub-button_Schedule').show(300);
        $(".right-heading_p").html("We will call you back to find the best product for you!");
        $(this).html("Schedule now");
        $('.date-time').removeClass("closed")
    } else {
        $('#recall_status').val(0)
        $(".date-time").hide(200);
        $('#sub-button_now').show(300);
        $('#sub-button_Schedule').hide(200);
        $(".right-heading_p").html("Our software experts will understand your requirements and suggest you the right one from the list of 15,000 software");
        let scheduleIcon = '<img src="' + tj.baseUrl + 'assets/acd/acd-web/images/calendar.svg">';
        $(this).html(scheduleIcon +" Schedule for later");
        $('.date-time').addClass("closed")
    }
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function () {
    /**<===========================Search Product================================> */
    var a = $('#generic_input').autocomplete({
        serviceUrl: tj.baseUrl + "acd-fetch-result",
        minChars: 0,
        delimiter: /(,|;)\s*/,
        maxHeight: 460,
        width: 532,
        zIndex: 999999,
        deferRequestBy: 0,
        noCache: true,
        customClass: "generic_acd",
        onSelect: function (value, data, element) {
            if (data != "") {
                if (data.indexOf("category-") != -1) {
                    var selected_data = data.substr(9, data.length);
                    var category_name = selected_data;
                    var category_id = $(value).data('category_id');
                } else if (data.indexOf("product-") != -1) {
                    var selected_data = data.substr(8, data.length);
                    var product_name = selected_data;
                    var category_name = $(value).data('category_name');
                    $("input[name=product_name]").attr('value', product_name);
                    var product_id = $(value)[2].getAttribute("data-product_id")
                    $("input[name=product_id]").attr("value", product_id);
                    $.ajax({
                        url: tj.baseUrl + 'acd/fetch_product_details',
                        type: "POST",
                        dataType: "json",
                        data: {
                            'product_id': product_id
                        },
                        success: function (res) {
                            $("input[name=brand_id]").attr("value", res.brand_id);
                            $("input[name=brand_name]").attr("value", res.brand_name);
                            $("input[name=onboarding_flag]").attr("value", res.brand_onboarded);
                            $("input[name=acd_lead_model_id]").attr("value", res.lead_model_type);
                            $("input[name=acd_lead_model_type]").attr("value", res.lead_model_type_name);

                        }
                    });

                } else {
                    var selected_data = data;
                    var category_name = selected_data;
                }
            }

            $('#generic_input').val(selected_data);
            $("input[name=category_id]").attr('value', category_id);
            $("input[name=test_category]").attr('value', category_name);
            $("input[name=software_category]").attr('value', category_name);
        }
    });

    $("#generic_input").keyup(function () {
        $("input[name=test_category]").attr('value', $(this).val());
        $("input[name=software_category]").attr('value', $(this).val());
    });
    /**<=====================================================================> */




    var bindAcdCallQuestionsEvents = function () {
        $('.acd-call-ques-options').off().on('click', function (evt) {
            let optionId = $(this).data("optionId");
            let isQuesMandatory = $(this).data("isQuesMandatory");
            let quesType = $(this).data("quesType");
            let isUserDefined = $(this).data("isUserDefined");
            let quesId = $(this).data("quesId");

            $("#error_ques_id_" + quesId).hide();

            if (isUserDefined == "1") {
                $(this).parent().parent().find(".searchproduct").toggle();
                //$(this).parent().closest(".techdescription").find(".gray").removeClass("greenbackground");
            } else if (!$(this).hasClass("greenbackground")) {
                $(this).parent().parent().find(".searchproduct").hide();
            }
            if (quesType != '3') {
                $(this).siblings('.acd-call-ques-options').removeClass("greenbackground");
            }
            if ($(this).hasClass("greenbackground")) {
                $(this).removeClass("greenbackground");
                $(this).parent().parent().find(".check_enabled").hide();
                $(this).parent().parent().find(".check_disabled").show();
                $(this).siblings('.acd-call-ques-options').each(function () {
                    if ($(this).hasClass("greenbackground")) {
                        $(this).parent().parent().find(".check_enabled").show();
                        $(this).parent().parent().find(".check_disabled").hide();
                    }
                });
            } else {
                $(this).addClass("greenbackground");
                $(this).parent().parent().find(".check_enabled").show();
                $(this).parent().parent().find(".check_disabled").hide();
            }
        });

        $(".acd_call_user_defined_input").off().on('keyup blur', function () {
            let quesId = $(this).data("quesId");
            $("#error_ques_id_" + quesId).hide();
            if ($(this).val() != '') {
                $(this).parents('.choosetechnologyheading').find(".check_enabled").show();
                $(this).parents('.choosetechnologyheading').find(".check_disabled").hide();
            } else {
                $(this).parents('.choosetechnologyheading').find(".check_enabled").hide();
                $(this).parents('.choosetechnologyheading').find(".check_disabled").show();
            }
        });

    };

    acd.validateAcdCallQuestions = function (acd_generic_questions, lead_id = "") {
        let jsonData = [];
        for (let i in acd_generic_questions) {
            let quesId = acd_generic_questions[i].question_id;
            let isMandatory = acd_generic_questions[i].is_mandatory;
            let options = acd_generic_questions[i]["options"];
            let flag = false;
            let temp = [];

            for (let j in options) {
                let optionId = options[j]["id"];
                let isUserDefined = options[j]["is_user_defined"];
                if ($('span[data-option-id="' + optionId + '"]').hasClass('greenbackground')) {
                    flag = true;
                    if (isUserDefined == "1") {
                        let user_defined_ans = $("#user_defined_ans_" + quesId).val();
                        if (!user_defined_ans.replace(/\s/g, '').length && isMandatory == "1") {
                            console.log("here1" + isUserDefined);
                            console.log("quesId" + quesId);
                            document.getElementById("error_ques_id_" + quesId).innerHTML = 'Please answer this question';
                            document.getElementById("error_ques_id_" + quesId).style.display = 'block';
                            return false;
                        } else if (user_defined_ans.replace(/\s/g, '').length) {
                            temp.push({
                                lead_id: lead_id,
                                ques_id: quesId,
                                ans_id: optionId,
                                user_defined_ans: user_defined_ans
                            });
                            $("#hubspot_hidden_input_" + quesId).val(user_defined_ans);
                        }
                    } else {
                        temp.push({
                            lead_id: lead_id,
                            ques_id: quesId,
                            ans_id: optionId
                        });
                        let optionText = $('span[data-option-id="' + optionId + '"]').text();
                        $("#hubspot_hidden_input_" + quesId).val(optionText);
                    }
                }
            }

            if (isMandatory == "1" && !flag) {
                console.log("here" + isMandatory);
                document.getElementById("error_ques_id_" + quesId).innerHTML = 'Please answer this question';
                document.getElementById("error_ques_id_" + quesId).style.display = 'block';
                return false;
            }

            if (temp.length > 0) {
                jsonData.push(temp);
            }

        }
        return jsonData;
    }


    acd.login_phone_input = document.querySelector("#acd_phone_num");
    var errorMsg = document.querySelector("#error-msg")
    var validMsg = document.querySelector("#valid-msg");
    acd.iti = window.intlTelInput(acd.login_phone_input, {
        preferredCountries: ['in', 'us'],
        separateDialCode: true,
        utilsScript: tj.baseUrl + "assets/V2/js/intlTelInput/utils.js",
    });

    $("#acd_phone_num").off().on('keyup blur', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
        var node = $(this);
        if (node.val() === "") {
            $('#tj_acd_call_intl_phone_error').show();
            $('#tj_acd_call_intl_phone_error').text("Phone is required *");
        } else {
            if (acd.login_phone_input.value.trim()) {
                if (!acd.iti.isValidNumber()) {
                    $('#tj_acd_call_intl_phone_error').show();
                    $('#tj_acd_call_intl_phone_error').text("Entered phone number is invalid");
                } else {
                    $('#tj_acd_call_intl_phone_error').hide();
                }

            }
        }
    });

    var postPhone = document.getElementById('acd_phone_num').value;
    if (postPhone.length > 1) {
        acd.iti.setNumber(postPhone);
        setTimeout(function () {
            $("#acd_phone_num").val($("#acd_phone_num").val().replace(/[^0-9]/g, ''));
        }, 1000);
    }

    $('.acd-top-categories').slick({
        lazyLoad: 'ondemand',
        dots: false,
        'slidesToShow': 4,
        'slidesToScroll': 4,
        'responsive': true
    });

    $('.acd-top-brands').slick({
        lazyLoad: 'ondemand',
        dots: false,
        'slidesToShow': 6,
        'slidesToScroll': 6,
        'responsive': true
    });


    $('.acd-testmonials').slick({
        lazyLoad: 'ondemand',
        dots: false,
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'responsive': true
    });

    $(window).scroll(function () {
        tj.scrollTop = $(window).scrollTop();
        let stickyPos = $(".techjockey-section").offset().top
        if (tj.scrollTop > stickyPos) {
            $('.git_button').show();
        } else {
            $('.git_button').hide();
        }
    });




    /*OTP Js code*/
    let acdCallOtcInput1 = document.getElementById('tj-acd-call-otc-1'),
        acdCallOtcInputs = document.querySelectorAll('.tj-acd-call-otc'),
        acdCallOtcSplitNumber = function (e) {
            let data = e.data || e.target.value;
            if (!data)
                return;
            if (data.length === 1)
                return;

            acdCallOtcPopuNext(e.target, data);
            /*for (i = 0; i < data.length; i++ ) { acdCallOtcInputs[i].value = data[i]; }*/
        },
        acdCallOtcPopuNext = function (el, data) {
            el.value = data[0];
            data = data.substring(1);
            if (el.nextElementSibling && data.length) {
                acdCallOtcPopuNext(el.nextElementSibling, data);
            }
        };

    acdCallOtcInputs.forEach(function (input) {
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
                acdCallOtcSplitNumber(e);
            }
        });
        input.addEventListener('focus', function (e) {
            if (this === acdCallOtcInput1)
                return;
            if (acdCallOtcInput1.value == '') {
                acdCallOtcInput1.focus();
            }
            if (this.previousElementSibling.value == '') {
                this.previousElementSibling.focus();
            }
        });
    });
    acdCallOtcInput1.addEventListener('input', acdCallOtcSplitNumber);
    /*END OTP JS code*/

    var registerAcdCallEvents = function () {
        $("#acd_call_req_otp_num_change_link").off().on('click', function (e) {
            e.preventDefault();
            clearInterval(acdCallOtpTimerCounter);
            otpCount = 120;
            $("#acd_call_otp_timer").text(otpCount + " sec");
            $(".acd_call_otp_digits input").each(function () {
                $(this).val('');
            });
            window.history.go(-1);
        });

        $("#acd_call_otp_verify").off().on('click', function (e) {
            e.preventDefault();
            var otp = "";
            $(".acd_call_otp_digits input").each(function () {
                otp += $(this).val();
            });

            if (otp.length != 4) {
                $.growl.error({
                    message: "Please enter OTP."
                });
                return false;
            }

            const t = new FormData();
            t.append('lead_id', acd.leadData.lead_id);
            t.append('cust_id', acd.leadData.user_id ?? "");
            t.append('phone', acd.leadData.phone);
            t.append('dial_code', acd.leadData.dial_code);
            t.append('otp', otp);
            t.append('action', 'verify_otp');
            var target = $(".btn-verify");
            tj.spinner(target, true);
            var l = {
                method: "POST",
                body: t
            };
            let actionValue = $('#action_input').val();
            fetch(tj.baseUrl + "acd-verify-otp", l)
                .then((e) => e.json())
                .then((e) => {
                    1 == e.status ?
                        ($("#acd_call_req_otp_screen").hide(),
                            $("#acd_question_screen").show(),
                            acdEvents('Lead verified', actionValue, acd.leadData.product_name)
                        ) :
                        ($.growl.error({
                            message: e.error_msg || "Not a valid OTP"
                        }));
                })
                .catch((e) => console.log("error", e.status));
        });

        $("#acd_call_resend_otp").off().on('click', function (e) {
            e.preventDefault();
            let $this = $(this);
            $.ajax({
                url: tj.baseUrl + "tjapi/resend_otp",
                type: "post",
                dataType: "json",
                contentType: 'application/json',
                data: JSON.stringify({
                    phone_number: acd.leadData.phone,
                    minute: 2
                }),
                crossDomain: !0,
                beforeSend: function () {
                    $this.text('Sending OTP ...');
                },
                success: function (s) {
                    if (s.status) {
                        $.growl.error({
                            message: s.success_msg
                        });
                        otpCount = 120;
                        $("#acd_call_otp_timer").text(otpCount + " sec");
                        acdCallOtpTimerCounter = setInterval(AcdCallOtpTimer, 1000);
                    } else {
                        $.growl.error({
                            message: s.error_msg
                        });
                    }
                    setTimeout(function () {
                        $this.text('Resend OTP.');
                    }, 1000);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    setTimeout(function () {
                        $this.text('Resend OTP.');
                    }, 1000);
                }
            });
        });
    };
    bindAcdCallQuestionsEvents();
    registerAcdCallEvents();

/**
   *  ---------------------------------------------------------------------
   *  |                  DEMO DATEPICKER FUNCTIONALITY                    |
   *  ---------------------------------------------------------------------
   */

 acd.setDemoDateTime = function(){
        var today = new Date();
        var exact_hour = today.getHours();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        today.setHours(today.getHours() + 2);

        var current_hr = today.getHours();
        var current_mint = today.getMinutes();
        var select_date = $('#start_date1').val();
        var firstHour = $('#hour option:first').val();


        /** Check if day is in single figure  */
        if (dd < 10) {
            dd = '0' + dd;
        }
        /** Check if minute is in single figure  */
        if (mm < 10) {
            mm = '0' + mm;
        }
        newDay = mm + '/' + dd + '/' + yyyy;

        /** If date is not current date reset hour & minutes options */
        if (newDay != select_date || exact_hour < firstHour || exact_hour >= 17) {
            setNewDateTime();
        } else {
            setCurrentDateTime(current_hr, current_mint);
        }

        if (exact_hour >= 17) {
            $('.today').addClass('disabled');
        }

        $('.minute').attr('disabled', false);
        var hour = $('#hour').val();
        var expert_ref = $('#expert_ref').val();
        $('#time_from').val(hour + ':' + expert_ref);

    }


    
    /**
     *  ---------------------------------------------------------------------
     *  |                  CALL DATEPICKER FUNCTIONALITY                    |
     *  ---------------------------------------------------------------------
     */

    acd.setCallDateTime = function (){
        var select_date = $('#start_date1').val();
        var firstHour = $('#hour option:first').val();
        var today = new Date();
        var exact_hour = today.getHours();
        var exact_min = today.getMinutes();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        today.setMinutes(today.getMinutes() + 15);
        var current_mint = today.getMinutes();
        var current_hr = today.getHours();
        /** Check if day is in single figure  */
        if (dd < 10) {
            dd = '0' + dd;
        }
        /** Check if minute is in single figure  */
        if (mm < 10) {
            mm = '0' + mm;
        }
        newDay = mm + '/' + dd + '/' + yyyy;

        /** If date is not current date reset hour & minutes options */
        if (newDay != select_date || exact_hour < firstHour || exact_hour >= 19) {
            setNewDateTime();
        } else {
            setCurrentDateTime(current_hr, current_mint);
        }

        if (exact_hour >= 18 && exact_min >= 45) {
            $('.today').addClass('disabled');
        }

        $('.minute').attr('disabled', false);
        var hour = $('#hour').val();
        var expert_ref = $('#expert_ref').val();
        $('#time_from').val(hour + ':' + expert_ref);
    }

    function setNewDateTime() {
        var hr_option = '';
        var mnt_option = '';
        for (var hr = 10; hr <= 19; hr++) {
            hr_option += '<option value="' + hr + '">' + hr + ' Hr</option>';
        }
        $('#hour').html(hr_option);

        for (var mint = 0; mint <= 55;) {
            if (mint < 10) {
                mint = '0' + mint;
            }
            mnt_option += '<option value="' + mint + '">' + mint + ' Min</option>';
            mint = parseInt(mint) + 5;
        }
        $('#expert_ref').html(mnt_option);
    }

    function setCurrentDateTime(current_hr, current_mint) {
        var hr_option;
        var mnt_option;
        for (var hr = 10; hr <= 19; hr++) {
            var disabled = hr < current_hr ? 'disabled' : '';
            var selected = hr == current_hr ? 'selected' : '';
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
        $('#hour').html(hr_option);

        for (var mint = 00; mint <= 55;) {
            if (mint < 10) {
                mint = '0' + mint;
            }
            var disabled = parseInt(mint) < current_mint ? 'disabled' : '';
            var selected = current_mint == parseInt(mint) ? 'selected' : '';
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
        $('#expert_ref').html(mnt_option);
    }



    function setCurrentDayTiming(current_mint) {
        var mnt_option = '';
        for (var mint = 00; mint <= 55;) {
            if (mint < 10) {
                mint = '0' + mint;
            }
            var disabled = (mint < ((Math.ceil(current_mint / 5) * 5))) ? 'disabled' : '';
            var selected = (mint == ((Math.ceil(current_mint / 5) * 5))) ? 'selected' : '';
            mnt_option += '<option value="' + (mint) + '" ' + selected + ' ' + disabled + '>' + (mint) + ' Min</option>';
            mint = parseInt(mint) + 5;
        }
        $('#expert_ref').html(mnt_option);
    }

    $(document).on('click', '.change-hour', function () {

        var flg = $(this).data('action');
        var select_date = $('#start_date1').val();
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        current_date = mm + '/' + dd + '/' + yyyy;

        var hour = $('#hour').val();
        if (flg == 'GetFreeDemo') {
            today.setHours(today.getHours() + 2);
            var current_hr = today.getHours();
            var current_mint = today.getMinutes();
        } else {
            today.setMinutes(today.getMinutes() + 15);
            var current_hr = today.getHours();
            var current_mint = today.getMinutes();
        }
        if (hour > current_hr || select_date != current_date) {
            var mnt_option = '';
            if (mint < 10) {
                mint = '0' + mint;
            }
            for (var mint = 00; mint <= 55;) {
                if (mint < 10) {
                    mint = '0' + mint;
                }
                var selected = (current_mint == parseInt(mint)) ? 'selected' : '';
                mnt_option += '<option value="' + (mint) + '" ' + selected + '>' + (mint) + ' Min</option>';
                mint = parseInt(mint) + 5;
            }
            $('#expert_ref').html(mnt_option);
        } else {
            /*
             Call update current minutes function
             and set new selected minute 
             */
            setCurrentDayTiming(current_mint);
        }
    })

    /*
     *-------------------------------------------------------------
     *| Check timing after every 1.5 minutes & update date & timeing
     *-------------------------------------------------------------
     */
    acd.checkTimings =  function(action) {
        var hr_option = '';
        var mnt_option = '';
        var selected_date = $('#start_date1').val();
        var selected_hour = $('#hour').val();
        var selected_minute = $('#expert_ref').val();

        var today = new Date();
        var current_time = today.getTime();
        var current_hour = today.getHours();
        var current_mint = today.getMinutes();
        /**
         * If action is Get Free Demo set End Time to 5:40 PM
         * If action is Call set End Time 7:40 PM
         */
        if (action == 'GetFreeDemo') {
            today.setHours(today.getHours() + 2);
            var expected_hr = today.getHours();
            var expected_mint = today.getMinutes();
            var start_time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0, 0).getTime();
            var end_time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 58, 0).getTime();
        } else {
            today.setMinutes(today.getMinutes() + 15);
            var expected_hr = today.getHours();
            var expected_mint = today.getMinutes();
            var start_time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0, 0).getTime();
            var end_time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 40, 0).getTime();
        }

        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        var current_date = mm + '/' + dd + '/' + yyyy;
        if ((selected_date == current_date && current_time < start_time) ||
            new Date(selected_date) > new Date(current_date)
        ) {
            if (selected_hour > 10) {
                for (var hr = 10; hr <= 19;) {
                    if (new Date(selected_date) == new Date(current_date)) {
                        var disabled_hr = (hr < current_hour) ? 'disabled' : '';
                    }

                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_hr = (hr == (expected_hr + 1)) ? 'selected' : '';
                    } else {
                        var selected_hr = (hr == selected_hour) ? 'selected' : '';
                    }
                    hr_option += '<option value="' + hr + '" ' + selected_hr + ' ' + disabled_hr + '>' + hr + ' Hr</option>';
                    hr = parseInt(hr) + 1;
                }
            } else {
                for (var hr = 10; hr <= 19; hr++) {
                    hr_option += '<option value="' + hr + '">' + hr + ' Hr</option>';
                }
            }

            if (selected_minute > 0) {
                for (var mint = 00; mint <= 55;) {
                    if (mint < 10) {
                        mint = '0' + mint;
                    }

                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_mnt = (parseInt(mint) == 0) ? 'selected' : '';
                        var disabled_mnt = '';
                    } else {
                        var selected_mnt = (((Math.ceil(selected_minute / 5) * 5)) == parseInt(mint)) ? 'selected' : '';
                        var disabled_mnt = (((Math.ceil(current_mint / 5) * 5)) < parseInt(mint)) ? 'disabled' : '';
                    }
                    mnt_option += '<option value="' + mint + '" ' + selected_mnt + '>' + mint + ' Min</option>';
                    mint = parseInt(mint) + 5;
                }
            } else {
                for (var mint = 0; mint <= 55;) {
                    if (mint < 10) {
                        mint = '0' + mint;
                    }
                    mnt_option += '<option value="' + mint + '">' + mint + ' Min</option>';
                    mint = parseInt(mint) + 5;
                }
            }

            $('#start_date1').val(selected_date);
            $('#hour').html(hr_option);
            $('#expert_ref').html(mnt_option);

        } else if (selected_date == current_date &&
            current_time >= start_time &&
            current_time < end_time &&
            dd != 6 && dd != 0
        ) {
            if (selected_hour > expected_hr) {
                for (var hr = 10; hr <= 19;) {
                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_hr = (hr == (expected_hr + 1)) ? 'selected' : '';
                    } else {
                        var selected_hr = (hr == selected_hour) ? 'selected' : '';
                    }

                    var disabled_hr = (hr < current_hour) ? 'disabled' : '';
                    hr_option += '<option value="' + hr + '" ' + selected_hr + ' ' + disabled_hr + '>' + hr + ' Hr</option>';
                    hr = parseInt(hr) + 1;
                }
            } else {
                for (var hr = 10; hr <= 19;) {
                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_hr = (hr == (expected_hr + 1)) ? 'selected' : '';
                        var disabled_hr = (hr < (expected_hr + 1)) ? 'disabled' : '';
                    } else {
                        var selected_hr = (hr == expected_hr) ? 'selected' : '';
                        var disabled_hr = (hr < expected_hr) ? 'disabled' : '';
                    }


                    hr_option += '<option value="' + hr + '" ' + selected_hr + ' ' + disabled_hr + '>' + hr + ' Hr</option>';
                    hr = parseInt(hr) + 1;
                }
            }

            if (selected_hour > expected_hr) {
                for (var mint = 0; mint <= 55;) {
                    if (mint < 10) {
                        mint = '0' + mint;
                    }

                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_mnt = (parseInt(mint) == 0) ? 'selected' : '';
                    } else {
                        var selected_mnt = (((Math.ceil(selected_minute / 5) * 5)) == parseInt(mint)) ? 'selected' : '';
                    }
                    mnt_option += '<option value="' + mint + '" ' + selected_mnt + '>' + mint + ' Min</option>';
                    mint = parseInt(mint) + 5;
                }
            } else if (selected_hour <= expected_hr && ((Math.ceil(selected_minute / 5) * 5)) > ((Math.ceil(expected_mint / 5) * 5))) {
                for (var mint = 00; mint <= 55;) {
                    if (mint < 10) {
                        mint = '0' + mint;
                    }

                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_mnt = (parseInt(mint) == 0) ? 'selected' : '';
                        var disabled_mnt = '';
                    } else {
                        var selected_mnt = (((Math.ceil(selected_minute / 5) * 5)) == parseInt(mint)) ? 'selected' : '';
                        var disabled_mnt = (((Math.ceil(current_mint / 5) * 5)) < parseInt(mint)) ? 'disabled' : '';
                    }

                    mnt_option += '<option value="' + mint + '" ' + selected_mnt + ' ' + disabled_mnt + '>' + mint + ' Min</option>';
                    mint = parseInt(mint) + 5;
                }
            } else {
                for (var mint = 00; mint <= 55;) {
                    if (mint < 10) {
                        mint = '0' + mint;
                    }

                    if (((Math.ceil(expected_mint / 5) * 5)) == 60) {
                        var selected_mnt = (parseInt(mint) == 0) ? 'selected' : '';
                        var disabled_mnt = '';
                    } else {
                        var selected_mnt = (((Math.ceil(expected_mint / 5) * 5)) == parseInt(mint)) ? 'selected' : '';
                        var disabled_mnt = (((Math.ceil(expected_mint / 5) * 5)) > parseInt(mint)) ? 'disabled' : '';
                    }

                    mnt_option += '<option value="' + mint + '" ' + selected_mnt + ' ' + disabled_mnt + '>' + mint + ' Min</option>';
                    mint = parseInt(mint) + 5;
                }
            }

            $('#start_date1').val(selected_date);
            $('#hour').html(hr_option);
            $('#expert_ref').html(mnt_option);

        } else {
            var next_date = '';
            if (today.getDay() == 5) {
                next_date = mm + '/' + (dd + 3) + '/' + yyyy;
            } else if (today.getDay() == 6) {
                next_date = mm + '/' + (dd + 2) + '/' + yyyy;
            } else {
                next_date = mm + '/' + (dd + 1) + '/' + yyyy;
            }

            for (var hr = 10; hr <= 19; hr++) {
                hr_option += '<option value="' + hr + '">' + hr + ' Hr</option>';
            }

            for (var mint = 0; mint <= 55;) {
                if (mint < 10) {
                    mint = '0' + mint;
                }
                mnt_option += '<option value="' + mint + '">' + mint + ' Min</option>';
                mint = parseInt(mint) + 5;
            }

            $('#start_date1').val(next_date);
            $('#hour').html(hr_option);
            $('#expert_ref').html(mnt_option);
            $('.today').addClass('disabled');
        }

        $('#time_from').val($('#hour').val() + ':' + $('#expert_ref').val());
    }

});