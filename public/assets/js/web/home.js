var home=home||{};home.renderSlider=function(e={}){if(!e)return!1;var o=[];e.responsive&&(o=[{breakpoint:1024,settings:{slidesToShow:2.4,slidesToScroll:2}}]),$(e.element).not(".slick-initialized").slick({infinite:!!e.infinite&&e.infinite,arrows:!!e.arrows&&e.arrows,dots:void 0==e.dots||e.dots,centerMode:!!e.centerMode&&e.centerMode,focusOnSelect:!!e.focusOnSelect&&e.focusOnSelect,slidesToShow:e.slidesToShow,slidesToScroll:e.slidesToScroll,asNavFor:void 0==e.asNavFor?"":e.asNavFor,responsive:o})},home.generateHomeElement=function(e,o="html",s=""){var r=tj.baseUrl+"ajax/render_home_elements?element="+e+"&action="+o+"&ref="+s+"&page="+tj.page;tj.api.AjaxRequest("GET",r,tj.renderElem)},home.getUserUpcomingCallNDemo=function(e="upcoming_acd_chip",o="after",s=""){var r=tj.baseUrl+"ajax/render_home_elements?element="+e+"&action="+o+s;tj.api.AjaxRequest("GET",r,function(e){e.content&&$("#headerCont").after(e.content)})},$(document).ready(function(){home.renderSlider({element:".home_6el_slider",slidesToShow:4.5,slidesToScroll:4,responsive:!1,dots:!1,arrows:!0}),home.renderSlider({element:".home_6el_slider_industry",slidesToShow:5,slidesToScroll:5,responsive:!1,dots:!1,arrows:!0}),$(".top-adv-banner").slick({slidesToShow:3,infinite:!0,autoplay:!0,lazyLoad:"ondemand"}),$(".homepage-hero-banner").slick({slidesToShow:1,infinite:!0,autoplay:!0,lazyLoad:"ondemand"}),home.renderSlider({element:".swiper_product_card",slidesToShow:4,slidesToScroll:4,responsive:!0,dots:!1,arrows:!0}),home.renderSlider({element:".home_1el_slider",slidesToShow:1,slidesToScroll:1,responsive:!1,dots:!1,arrows:!0}),home.renderSlider({element:".news-logo-slider",slidesToShow:7,slidesToScroll:7,responsive:!1,dots:!1,arrows:!0}),home.getUserUpcomingCallNDemo(),home.renderSlider({element:".trending-compare-product-slider",slidesToShow:4,slidesToScroll:4,responsive:!1,dots:!1,arrows:!0}),home.renderSlider({element:".popular-category-slider_0",slidesToShow:4,slidesToScroll:4,responsive:!1,dots:!1,arrows:!0}),home.recentProducts.length>0&&(home.generateHomeElement("recently_viewed_products","html","&product_ids="+home.recentProducts),home.generateHomeElement("recent_product_alts","html","&product_ids="+home.recentProducts))}),$(window).scroll(function(){home.scrollTop=$(window).scrollTop(),home.scrollTop>250?$(".wrap").removeClass("tjout"):$(".wrap").addClass("tjout")}),$(document).on("click","#closeCallNofification",function(){$(".sheduledemo-top").hide(500)}),$(".pc-data-popover").mouseover(function(){$(this).next(".data-popover").css("display","block")}).mouseout(function(){$(this).next(".data-popover").css("display","none")}),tj.thirdPartyDeferredActions=function(){tj.fbq_event("ViewContent",null),tj.events.ga4Events("ViewContent",{})},$(".comp-cat-tab").click(function(){var e=$(this).data("pos");$(this).addClass("active").siblings().removeClass("active"),$(this).parent().next().children().eq(e).addClass("active").siblings().removeClass("active"),$(this).parent().next().children().eq(e).children("div").addClass("popular-category-slider_"+e),home.renderSlider({element:".popular-category-slider_"+e,slidesToShow:4,slidesToScroll:4,responsive:!1,dots:!1,arrows:!0})}),$(".comp-soft-tab").click(function(){var e=$(this).data("pos");$(this).addClass("active").siblings().removeClass("active"),$(".compare-software-contents").children().eq(e).addClass("active").siblings().removeClass("active")}),$(".question-text-p1 .question-btn").click(function(){var e=document.getElementById("question-id").value;e.length>25?(url=window.location.href+"questions?question="+encodeURIComponent(e)+"&page_source=1",document.location.href=url):$("#question-error").text("Characters count should be above 25")});