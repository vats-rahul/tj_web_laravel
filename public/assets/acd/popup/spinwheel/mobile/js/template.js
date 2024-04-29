var tj = tj || {};

tj.events = tj.events || {};

var tjspingamelib = tjspingamelib || {};
tjspingamelib.acdPopupTemplate = tjspingamelib.acdTemplate || {};
tjspingamelib.spinwheel_lastSelected = null;

tjspingamelib.acdPopupTemplate.spinwheel = {
    showHideWheelContent: function (evt, cityName) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("wheel-right-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
        evt && (evt.currentTarget.className += " active");
    },
    showHideScreen: function (evt, cityName) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("spin-the-wheel");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
        evt && (evt.currentTarget.className += " active");
    },
    spin: function (d) {
        
        if (tjspingamelib.spinwheel_lastSelected === null) {
            var action = sessionStorage.getItem('tj-global-action');
            if (!action) {
                action = "TalkToTechExpert";
            }
            if (typeof tj.events.ga4Events === "function") {
                tj.events.ga4Events('Lead initiated',{
                    cta_name: action,
                    product_name: tjspingamelib.acdPopupVariables.acd_popup_data.product_name,
                    content_name: tjspingamelib.acdPopupVariables['loadedTemplateName'],
                    form_name: tjspingamelib.acdPopupVariables['loadedTemplateName']
                });
            } else {
                console.warn("tj.events.ga4Events function is missing");
            }
            setTimeout(function () {
                if (typeof fbq === "function") {
                    fbq('trackCustom', 'Lead initiated', {
                        Name: tjspingamelib.acdPopupVariables.acd_popup_data.product_name,
                        Action: action,
                    });
                } else {
                    console.warn("fbq function is missing");
                }
            }, 1000);
        }

        var data = tjspingamelib.spinwheel_dataset;
        tjspingamelib.chart.container.on("click", null);
        if (tjspingamelib.chart.oldpick.length == data.length) {
            tjspingamelib.chart.container.on("click", null);
            return;
        }
        var ps = 360 / data.length,
                pieslice = Math.round(1440 / data.length),
                rng = Math.floor((Math.random() * 1440) + 360);
        tjspingamelib.chart.rotation = (Math.round(rng / ps) * ps);
        tjspingamelib.chart.picked = Math.round(data.length - (tjspingamelib.chart.rotation % 360) / ps);
        tjspingamelib.chart.picked = tjspingamelib.chart.picked >= data.length ? (tjspingamelib.chart.picked % data.length) : tjspingamelib.chart.picked;
        //console.log("picked", tjspingamelib.chart.picked);
        if (tjspingamelib.spinwheel_lastSelected == tjspingamelib.chart.picked) {
            tjspingamelib.chart.oldpick = [];
            d3.select(this).call(tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
            return;
        }

        if (tjspingamelib.chart.oldpick.indexOf(tjspingamelib.chart.picked) !== -1 || data[tjspingamelib.chart.picked].weightage == 0 || tjspingamelib.chart.picked < 0) {
            tjspingamelib.chart.oldpick = [];
            d3.select(this).call(tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
            return;
        } else {
            tjspingamelib.chart.oldpick.push(tjspingamelib.chart.picked);
            tjspingamelib.spinwheel_lastSelected = tjspingamelib.chart.picked;
        }
        tjspingamelib.chart.rotation += 90 - Math.round(ps / 2);
        tjspingamelib.chart.vis.transition()
                .duration(5000)
                .attrTween("transform", tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].rotTween)
                .each("end", function () {
                    if (tjspingamelib.chart.picked > -1 && data[tjspingamelib.chart.picked].sound) {
                        tjspingamelib.playApplauseSound();
                    }
                    if (tjspingamelib.spinwheel_dataset[tjspingamelib.chart.picked].sound) {
                        let text = tjspingamelib.spinwheel_dataset[tjspingamelib.chart.picked].text;
                        $(".tjspin_winmsg").text(text);
                        if (tjspingamelib.spinwheel_dataset[tjspingamelib.chart.picked].action) {
                            tjspingamelib.acdPopupVariables['spinGameAction'] = tjspingamelib.spinwheel_dataset[tjspingamelib.chart.picked].action;
                        }
                        tjspingamelib.acdPopupTemplate.spinwheel.showHideWheelContent(null, 'tjspin_congratulations');
                    } else {
                        tjspingamelib.acdPopupTemplate.spinwheel.showHideWheelContent(null, 'tjspin_opes');
                    }


                    tjspingamelib.chart.oldrotation = tjspingamelib.chart.rotation;
                    tjspingamelib.chart.container.on("click", tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
                });
    },
    rotTween: function (to) {
        tjspingamelib.playWheelSound();
        var i = d3.interpolate(tjspingamelib.chart.oldrotation % 360, tjspingamelib.chart.rotation);
        return function (t) {
            return "rotate(" + i(t) + ")";
        };
    },
    createSpinWheelChart: function () {

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

        tjspingamelib.chart.color = d3.scale.category20();
        var svg = d3.select('#chart')
                .append("svg")
                .data([tjspingamelib.spinwheel_dataset])
                .attr("viewBox", "-12 0 " + (tjspingamelib.chart.w + tjspingamelib.chart.padding.left + tjspingamelib.chart.padding.right) + " " + (tjspingamelib.chart.h + tjspingamelib.chart.padding.top + tjspingamelib.chart.padding.bottom));
        svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", tjspingamelib.chart.r + 50)
                .attr("transform", "translate(" + (tjspingamelib.chart.w / 2 + tjspingamelib.chart.padding.left) + "," + (tjspingamelib.chart.h / 2 + tjspingamelib.chart.padding.top) + ")")
                .style({"fill": "url(#grad1)", "stroke": "black", "stroke-width": ""});
        svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", tjspingamelib.chart.r + 30)
                .attr("transform", "translate(" + (tjspingamelib.chart.w / 2 + tjspingamelib.chart.padding.left) + "," + (tjspingamelib.chart.h / 2 + tjspingamelib.chart.padding.top) + ")")
                .style({"fill": "url(#grad1)", "stroke": "black", "stroke-width": 28});
        tjspingamelib.chart.container = svg.append("g")
                .attr("class", "chartholder")
                .attr("transform", "translate(" + (tjspingamelib.chart.w / 2 + tjspingamelib.chart.padding.left) + "," + (tjspingamelib.chart.h / 2 + tjspingamelib.chart.padding.top) + ")");
        tjspingamelib.chart.vis = tjspingamelib.chart.container
                .append("g");
        var pie = d3.layout.pie().sort(null).value(function (d) {
            return 1;
        });
        /*declare an arc generator function*/
        var arc = d3.svg.arc().outerRadius(tjspingamelib.chart.r + 10);
        /*select paths, use arc generator to draw*/
        var arcs = tjspingamelib.chart.vis.selectAll("g.slice")
                .data(pie)
                .enter()
                .append("g")
                .attr("class", "slice");
        arcs.append("path")
                .attr("fill", function (d, i) {
                    return tjspingamelib.chart.color(i);
                })
                .attr("d", function (d) {
                    return arc(d);
                });
        /*add the text*/
        arcs.append("foreignObject").attr("transform", function (d) {
            d.innerRadius = 0;
            d.outerRadius = tjspingamelib.chart.r;
            d.angle = (d.startAngle + d.endAngle) / 2;
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.innerRadius + 50) + ")";
        })
                .attr("text-anchor", "end")
                .attr("width", "130")
                .attr("height", "100")
                .attr("y", function (d, i) {
                    return tjspingamelib.spinwheel_dataset[i].label.length > 20 ? -20 : -10;
                })
                .text(function (d, i) {
                    return tjspingamelib.spinwheel_dataset[i].label;
                });
        tjspingamelib.chart.container.on("click", tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
        /*make arrow M-65,0L0,25.4L0,-25.4Z*/
        svg.append("g")
                .attr("transform", "translate(" + (tjspingamelib.chart.w - tjspingamelib.chart.padding.left - tjspingamelib.chart.padding.right + 14) + "," + ((tjspingamelib.chart.h / 2) + tjspingamelib.chart.padding.top - 5) + ")")
                .append("path")
                .attr("d", "M-" + (tjspingamelib.chart.r * .35) + ",0L0," + (tjspingamelib.chart.r * .12) + "L0,-" + (tjspingamelib.chart.r * .12) + "Z")
                .style({
                    "fill": "#fff",
                    "stroke-width": "20",
                    "stroke-linejoin": "round",
                    "stroke": "#fff",
                    "stroke-linecap": "round",
                    "filter": "drop-shadow(4px 5px 2px rgb(0 0 0 / 0.4))"
                });
        svg.append("g")
                .attr("transform", "translate(" + (tjspingamelib.chart.w - tjspingamelib.chart.w / 6) + "," + ((tjspingamelib.chart.h / 2) + tjspingamelib.chart.padding.top - 5) + ")")
                .append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 4)
                .style({"fill": "red", "stroke": "black", "stroke-width": "0"});
        /*draw spin circle*/
        tjspingamelib.chart.container.append('defs');
        var linearGradient = tjspingamelib.chart.container.append('linearGradient')
                .attr("id", "grad1")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
        linearGradient.append('stop')
                .attr("offset", "0%")
                .style({"stop-color": "pink", "stop-opacity": "1"});
        linearGradient.append('stop')
                .attr("offset", "12%")
                .style({"stop-color": "skyblue", "stop-opacity": "1"});
        linearGradient.append('stop')
                .attr("offset", "55%")
                .style({"stop-color": "#d65b72", "stop-opacity": "1"});
        linearGradient.append('stop')
                .attr("offset", "84%")
                .style({"stop-color": "#9795ef", "stop-opacity": "1"});
        linearGradient.append('stop')
                .attr("offset", "100%")
                .style({"stop-color": "yellow", "stop-opacity": "1"});
        tjspingamelib.chart.container.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 35)
                .style({"fill": "url(#grad1)", "cursor": "pointer"});
        tjspingamelib.chart.container.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 30)
                .style({"fill": "black", "cursor": "pointer"});
        /*spin text*/
        tjspingamelib.chart.container.append("text")
                .attr("x", 0)
                .attr("y", 15)
                .attr("text-anchor", "middle")
                .text("")
                .style({"font-weight": "bold", "font-size": "30px"});
    },
    change_first_form_content: function () {
        document.getElementById('tjspin-acd-search-div').style = 'display:none';
        if (tjspingamelib.acdPopupVariables['isPdpPage']) {
            $('#tjspin-acd-search-div').addClass('form_field_outer_activated');
            $('#tjspin-acd-search-div').attr('data-selected', 'product');
            $('#tjspin-acd-search-div').attr('data-id', tjspingamelib.acdPopupVariables['targetProductId']);
            $('#tjspin-acd-search').val(tjspingamelib.acdPopupVariables['targetProductDetails'].product_name);
        } else if (tjspingamelib.acdPopupVariables['targetCategoryId'] != "NA") {
            $('#tjspin-acd-search-div').addClass('form_field_outer_activated');
            $('#tjspin-acd-search-div').attr('data-selected', 'category');
            $('#tjspin-acd-search-div').attr('data-id', tjspingamelib.acdPopupVariables['targetCategoryId']);
            //$('#tjspin-acd-search').val(tjspingamelib.acdPopupVariables['targetCategoryName']);
        } else {
            document.getElementById('tjspin-acd-search-div').style = 'display:show';
        }
    },
    initFormActions: function () {
        tjspingamelib.acdPopupTemplate.spinwheel.bindEvents();
        tjspingamelib.acdPopupVariables['selectedTopCategorySlug'] = "";
        $("#tjspin_recommended_products_back_btn").hide();
        $("#tjspin_recommended_products_heading").text("Here are some Recommendations");
        document.getElementById('tjspin_acd_lead_frm').reset();
        tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].addShimmerEffect("#tjspin-recommended-products");
        document.getElementById('tjspin_acd_otp_screen').style.display = 'none';
        $('#tjspin_acd_otp_timer').text(tjspingamelib.acdPopupVariables['count'] + ' sec');
        $('.tjspin_acd_otp_digits input').each(function () {
            $(this).val('');
        });
        $('.tjspin_acd_lead_frm_intl_phone_error,.error').hide();
    },
    renderTemplate: function (a, fetchResult) {

        tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].createSpinWheelChart();

        $(".tj-spin-wheel-popup").find("#close").on('click', function () {
            $(".tj-spin-wheel-popup").hide();
        });

        $(".tj-spin-wheel-popup").find("#tjspin_spinbtn").on('click', function () {
            d3.select(this).call(tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
        });

        $(".tj-spin-wheel-popup").find("#tjspin_tryagain_btn").on('click', function () {
            d3.select(this).call(tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].spin);
        });

        a('.close-tjspin-acd-modal', 'click', function (e) {
            $('body').css('overflow', 'auto');
            if (tjspingamelib.acdPopupVariables['is_otp_verifed']) {
                tjspingamelib.acdPopupVariables['is_otp_verifed'] = false;
                window.location.reload();
            } else {
                tjspingamelib.acdPopupVariables['is_otp_verifed'] = false;
            }
            $('.tjspin-acd-notification').hide();
        });
        a('.tjspin_acd_input_popup', 'focus', function (e) {
            this.classList.add('input_blue_border');
        });
        a('.tjspin_acd_input_popup', 'blur', function (e) {
            '' == this.value && this.classList.remove('input_blue_border');
        });
        document.getElementById('tjspin-acd-search').addEventListener('keyup', fetchResult);
        document.getElementById('tjspin-acd-search').addEventListener('click', fetchResult);
    },
    schedule_acd: function (e) {
        const t = new FormData(e.target);
        let dial_code = tjspin_acd_iti.getSelectedCountryData().dialCode;
        t.append('dial_code', dial_code);
        t.append('user_intent', 'Offer');
        t.set('phone', tjspin_acd_iti.getNumber('E164').replace(/[^0-9\.]+/g, ''));
        if (dial_code === '91') {
            t.append('sub_action', 'send_otp');
        }

        var spinnerHtml =
                '<div class="spinner white"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
        $('#tjspin-acd-sub-button').html(spinnerHtml);
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
        fetch(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/schedule-acd', l)
                .then((e) => e.json())
                .then((e) => {
                    1 == e.status
                            ? ((tjspingamelib.acdPopupVariables.schedule_acd_res_data = e.data),
                                    $('#tjspin-acd-sub-button').html(''),
                                    $('#tjspin-acd-sub-button').text($('#tjspin-acd-sub-button').data('buttonName')),
                                    tjspingamelib.acdPopupTemplate.spinwheel.change_form_content(e.data))
                            : ($('#tjspin-acd-sub-button').html(''),
                                    $('#tjspin-acd-sub-button').text($('#tjspin-acd-sub-button').data('buttonName')),
                                    (document.getElementById('tjspin-acd-notification').style.color =
                                            'red'),
                                    (document.getElementById('tjspin-acd-notification').innerHTML =
                                            e.message),
                                    (document.getElementById('tjspin-acd-notification').style.display =
                                            'block'),
                                    $('#tjspin-acd-notification')
                                    .parents('.rightpart')
                                    .animate({scrollTop: 0}));
                })
                .catch((e) => console.log('error', e));
    },
    change_form_content: function (data) {
        if (!tjspingamelib.acdPopupVariables['isEventTriggered']) {

            tj.events.ga4Events('Lead submitted',{
                cta_name: data.action_performed,
                product_name: data.product_name,
                content_name: tjspingamelib.acdPopupVariables['loadedTemplateName'],
                form_name: tjspingamelib.acdPopupVariables['loadedTemplateName']
            });
            tj.events.ga4Events('Ads Conversion Tracking',{
                sha256_user_email: data.hashed_user_email
            });
            if (data.is_lead_verifed) {
                track_event_new(
                        'Lead verified',
                        data.action_performed,
                        data.product_name + ' | ' + tjspingamelib.acdPopupVariables['loadedTemplateName'],
                        );
            }
            setTimeout(function () {
                fbq('trackCustom', 'Lead submitted', {
                    Name: data.product_name,
                    Action: data.action_performed,
                });
            }, 500);
            tjspingamelib.acdPopupVariables['isEventTriggered'] = true;
        }

        if (data.hasOwnProperty('sub_action')) {
            let dial_code = tjspin_acd_iti.getSelectedCountryData().dialCode;
            if (dial_code === '91' && data.sub_action === 'send_otp') {
                $('#tjspin_detailscreen').hide();

                tjspingamelib.acdPopupTemplate.spinwheel.showHideScreen(null, 'tjspin_acd_otp_screen')

                $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_input_selector']).each(function () {
                    $(this).val('');
                });
                $('#tjspin_acd_otp_number').text(tjspin_acd_iti.getNumber());
                $('.leftpart.visible').hide();
                $('.rightpart.visible').hide();
                $('#tj-popup-default-left').show();
                $('#tj-popup-third-left').removeClass('visible');
                $('#tj-popup-third').removeClass('visible');
                $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).show();
                tjspingamelib.acdPopupVariables['acdOtpTimerCounter'] = setInterval(tjspingamelib.AcdOtpTimer, 1000);
                tjspingamelib.acdPopupVariables['count'] = 120;
                return false;
            }
        } else {
            $(tjspingamelib.acdPopupVariables.acdOtpSelectors['acd_otp_screen_selector']).hide();
            var search_val = $('#tjspin-acd-search').val();
            var item = document.getElementById('tjspin-acd-search-div').getAttribute('data-selected');
            if (search_val != '' && item != null) {
                var id = document.getElementById('tjspin-acd-search-div').getAttribute('data-id');
                if (item == 'category') {
                    tjspingamelib.acdPopupVariables['targetCategoryId'] = id;
                }
                tjspingamelib.get_recommended_products(item, id);
            } else {
                tjspingamelib.acdPopupTemplate.spinwheel.showHideScreen(null, 'tjspin_topcat_screen');
            }
        }
    },
    render_recommended_products_section: function (data) {
        if (data.status) {
            $("#tjspin-recommended-products").removeClass("tjspin_shimmer");
            document.getElementById('tjspin-recommended-products').innerHTML = data.html;
            tjspingamelib.acdPopupTemplate.spinwheel.showHideScreen(null, 'tjspin_recommended_software_screen');
        } else {
            tjspingamelib.acdPopupTemplate.spinwheel.showHideScreen(null, 'tjspin_topcat_screen');
        }
    },
    addShimmerEffect: function (containerId, shimmerLength = 6) {
        var html = "";
        $(containerId).addClass("tjspin_shimmer");
        for (var i = 0; i < shimmerLength; i++) {
            html += '<box class="shine"></box><div><lines class="shine"></lines><lines class="shine"></lines><lines class="shine"></lines></div><br/>';
        }
        $(containerId).html(html);
    }
};
tjspingamelib.acdPopupTemplate.spinwheel.bindEvents = function () {

    $(document).on('click', '#tjspin_topcat_view_all_btn', function () {
        var url = tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/categories';
        window.open(url, '_blank').focus();
    });

    $(document).on('click', '#tjspin_exploremore_btn', function () {
        var url = tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/category/' + tjspingamelib.acdPopupVariables['selectedTopCategorySlug'];
        window.open(url, '_blank').focus();
    });

    $(document).on('click', '.tjspin_topcat_box', function () {
        tjspingamelib.acdPopupTemplate[tjspingamelib.acdPopupVariables['loadedTemplate']].addShimmerEffect("#tjspin-recommended-products");
        tjspingamelib.acdPopupVariables['selectedTopCategorySlug'] = $(this).data("slug");
        $("#tjspin_recommended_products_back_btn").show();
        $("#tjspin_recommended_products_heading").text($(this).data("name") + " Products");
        tjspingamelib.get_recommended_products('category', $(this).data("id"));
        tjspingamelib.acdPopupTemplate.spinwheel.showHideScreen(null, 'tjspin_recommended_software_screen');
    });

    $(document).on('click', '.tjspin-acd-form-recommended-product', function () {
        var t = {
            product_id: $(this).data('proid'),
            name: $('input.tjspin_acd_input_popup[name=name]').val(),
            email: $('input.tjspin_acd_input_popup[name=email]').val(),
            phone: $('input.tjspin_acd_input_popup[name=phone]').val(),
            source: $('#tjspin_acd_lead_frm').find('input[name=source]').val(),
            action: $(this).data('action'),
            recommended_time: 1,
            last_lead_id: $('#tj-popup-second-acd-uuid').val(),
            category_id: tjspingamelib.acdPopupVariables['targetCategoryId'],
        };
        let dial_code = tjspin_acd_iti.getSelectedCountryData().dialCode;
        t['dial_code'] = dial_code;
        t['user_intent'] = $(this).data('userintent') || 'Callback';

        if(tjspingamelib.acdPopupVariables.schedule_acd_res_data.lead_owner_id != undefined)
        {
            t.lead_owner_id = tjspingamelib.acdPopupVariables.schedule_acd_res_data.lead_owner_id;
        }

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
                .removeClass('tjspin-acd-form-recommended-product')
                .html(spinnerHtml);
        $('.acd-recomm-loader').css('display', 'block');

        var actionMsgPlaceholder = "You will receive a call from our software expert";

        if (tjspingamelib.acdPopupVariables['spinGameAction'] == "GetFreeDemo") {
            actionMsgPlaceholder = "You will receive demo details";
        }

        fetch(tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/schedule-acd', l)
                .then((e) => e.json())
                .then((e) => {
                    $('.acd-recomm-loader').css('display', 'none');
                    var slug = $(this).data('prod_slug');
                    var set_html = '',
                            error_html = '';
                    if (e.status) {
                        $('#tjspin-recommended-products')
                                .data('last_acd_time', e.data.acd_date)
                                .attr('data-last_acd_time', e.data.acd_date);
                        if (tjspingamelib.acdPopupVariables['device_type'] == 'desktop') {
                            set_html = `<div class="col-md-2">
                                        <div class="recommended-md-4">
                                            <img class="confimed-img" src="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] +
                                    '/assets/acd/popup/spinwheel/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="sorf-md-text1">
                                            <p class="prod_confimation">Confirmed!</p>
                                            <p class="confirmation-text">${actionMsgPlaceholder} for ${
                                    e.data.product_name
                                    } soon</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>`;
                        } else {
                            set_html = `<div class="col-md-7">
                                    <div class="confim-div">
                                        <img class="confimed-img" src="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] +
                                    '/assets/acd/popup/spinwheel/desktop/images/check.svg'
                                    }" alt="${
                                    e.data.product_name
                                    }" width="40px"/>
                                        <p class="prod_confimation">Confirmed!</p>
                                        <p class="confirmation-text">${actionMsgPlaceholder} for ${
                                    e.data.product_name
                                    } soon</p>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="sorf-md-text1">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>
                                </div>`;
                        }
                        $(this).closest('.recommended-md-bx1').html(set_html);
                        $(this).closest('.recommended-md-bx1').addClass('confirmed-box');
                        
                        tj.events.ga4Events('Lead submitted',{
                            cta_name: e.data.action_performed,
                            product_name: e.data.product_name,
                            content_name: tjspingamelib.acdPopupVariables['loadedTemplateName'],
                            form_name: tjspingamelib.acdPopupVariables['loadedTemplateName']
                        });
                        tj.events.ga4Events('Ads Conversion Tracking',{
                            sha256_user_email: e.data.hashed_user_email
                        });
                        if (e.data.is_lead_verifed) {
                            track_event_new(
                                    'Lead verified',
                                    e.data.action_performed,
                                    e.data.product_name + ' | ' + tjspingamelib.acdPopupVariables['loadedTemplateName'],
                                    );
                        }
                    } else {
                        if (tjspingamelib.acdPopupVariables['device_type'] == 'desktop') {
                            error_html = `<div class="col-md-2">
                                        <div class="recommended-md-4">
                                            <img class="reject-img" src="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] +
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
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>`;
                        } else {
                            error_html = `<div class="col-md-7">
                                    <div class="confim-div">
                                        <img class="reject-img" src="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] +
                                    '/assets/new-assets/images/error.svg'
                                    }" width="50px"/>
                                        <p class="prod_confimation">Sorry!</p>
                                        <p class="confirmation-text">Partner is occupied. Please try again.</p>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="sorf-md-text1">
                                        <a id="viewsimilar" class="viewsimilar" target="_blank" href="${
                                    tjspingamelib.acdPopupVariables['tjUrl'][tjspingamelib.up.en] + '/alternatives/' + slug
                                    }">View Similar</a>
                                    </div>
                                </div>`;
                        }
                        $(this).closest('.recommended-md-bx1').html(error_html);
                    }
                })
                .catch((e) => {

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