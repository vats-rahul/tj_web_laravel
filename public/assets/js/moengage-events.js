var tj=tj||{};tj.events=tj.events||{},tj.events.clevertap=tj.events.clevertap||{},function(e,t,a,r,o,n,s,u){var d=e[o]=e[o]||[];if(d.invoked=0,d.initialised>0||d.invoked>0)return console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1;e.moengage_object=o;var c={},i=function t(a){return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];(e.moengage_q=e.moengage_q||[]).push({f:a,a:r})}},m=["track_event","add_user_attribute","add_first_name","add_last_name","add_email","add_mobile","add_user_name","add_gender","add_birthday","destroy_session","add_unique_user_id","moe_events","call_web_push","track","location_type_attribute"],l={onsite:["getData","registerCallback"]};for(var g in m)c[m[g]]=i(m[g]);for(var p in l)for(var v in l[p])null==c[p]&&(c[p]={}),c[p][l[p][v]]=i(p+"."+l[p][v]);n=t.createElement(a),s=t.getElementsByTagName("head")[0],n.async=1,n.src=r,s.appendChild(n),e.moe=e.moe||function(){return(d.invoked=d.invoked+1,d.invoked>1)?(console.error("MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"),!1):(u=arguments.length<=0?void 0:arguments[0],c)},n.addEventListener("load",function(){if(u)return e[o]=e.moe(u),e[o].initialised=e[o].initialised+1||1,!0}),n.addEventListener("error",function(){return console.error("Moengage Web SDK loading failed."),!1})}(window,document,"script","https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js","Moengage"),Moengage=moe({app_id:"KBDAKB333LFLJBPOJPO8G19T",cluster:"DC_3",debug_logs:tj.moengage_debug_mode}),tj.events.clevertap.loginRegisterEvent=function(e){$flg=(e=JSON.parse(e)).Source,$register="register"==e.action,$gsrc=""!=e.src?e.src:"",$eventName="Logged In",$register&&($eventName="Registered"),Moengage.add_unique_user_id(e.Identity),Moengage.add_email(e.Email),Moengage.add_mobile(e.Phone),Moengage.add_first_name(e.FirstName),Moengage.add_last_name(e.LastName),Moengage.track_event($eventName,{"Customer Contact":e.Phone,"Customer Name":e.Name,"Customer Email":e.Email,"Login/Register Through":$flg,"Google Login/Register Src":$gsrc,Date:new Date})},tj.events.clevertap.clevertpLoginClick=function(e,t){Moengage.track_event("Click Login",{Source:e,Mode:t,"Button Name":"Register/Login",Date:new Date})},tj.events.clevertap.clickAddToCartEvent=function(e,t){$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:t},crossDomain:!0,success:function(a){!0==a.status&&Moengage.track_event("Add to Cart",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Product Id":t,"Product Name":a.data.product_name,"Product Slug":a.data.product_slug,"Brand Id":a.data.brand_id,"Brand Name":a.data.brand_name,"Brand Slug":a.data.brand_slug,"Category Id":a.data.category_id,"Category Name":a.data.category_name,"Category Slug":a.data.category_slug,"Customer Login Link":a.data.login_link,"Review Email Link":a.data.review_email_link,"Review SMS Link":a.data.review_sms_link,"Page Slug":tj.currentUrl,"Ui Type":e,Date:new Date})}})},tj.events.clevertap.addedToCartEvent=function(e){$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:e.product_id},crossDomain:!0,success:function(t){!0==t.status&&Moengage.track_event("Added To Cart",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Customer Login Link":t.data.login_link,"Source Url":tj.currentUrl,"Product Id":e.product_id,"Product Name":t.data.product_name,"Product Slug":t.data.product_slug,"Brand Id":t.data.brand_id,"Brand Name":t.data.brand_name,"Brand Slug":t.data.brand_slug,"Category Id":t.data.category_id,"Category Name":t.data.category_name,"Category Slug":t.data.category_slug,Department:"N/A","Product Price":e.unit_price,Discount:e.discount,"Product Quantity":e.qty,"Plan Name":e.plan_name,"Plan Nature":e.plan_variables.plan_nature,"Plan Variables":JSON.stringify(e.variables),"Plan Other-Variables":""!=e.other_variables?JSON.stringify(e.other_variables):"N/A",Renew:""!=e.rel_order_product_id?"Yes":"No","Part Code":""!=e.plan_variables.part_code?e.plan_variables.part_code:"N/A",Offer:""!=e.offer_name?e.offer_name:"N/A","Api Available":""!=e.api_available?e.api_available:"N/A","Review Email Link":t.data.review_email_link,"Review SMS Link":t.data.review_sms_link,Date:new Date})}})},tj.events.clevertap.addToCompareEvent=function(e,t){var a=JSON.parse(atob(t));$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:a.product_id},crossDomain:!0,success:function(t){!0==t.status&&Moengage.track_event("Added To Compare",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Ui Type":e,"Page Slug":tj.currentUrl,"Product Id":a.product_id,"Product Name":t.data.product_name,"Product Slug":t.data.product_slug,"Brand Id":t.data.brand_id,"Brand Name":t.data.brand_name,"Brand Slug":t.data.brand_slug,"Category Id":t.data.category_id,"Category Name":t.data.category_name,"Category Slug":t.data.category_slug,"No. of Comparison":"N/A","In Wishlist":"N/A",Rating:a.rating_val,"No of Reviews":a.total_reviews,Price:a.price,Industries:"N/A",Department:"N/A","Device Supported ":a.deployment,"Operating System ":a.operating_system,"Discount type":a.discount,"Count of Features ":"N/A","Review Email Link":t.data.review_email_link,"Review SMS Link":t.data.review_sms_link,Date:new Date})}})},tj.events.clevertap.productViewedEvent=function(e){var t=JSON.parse(atob(e));$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:t.product_id},crossDomain:!0,success:function(e){!0==e.status&&Moengage.track_event("Product Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Customer Login Link":e.data.login_link,"Schedule Demo":e.data.demo_link,"Product Id":t.product_id,"Product Name":tj.shortProductName(e.data.product_name),"Product Slug":e.data.product_slug,"Brand Id":e.data.brand_id,"Brand Name":e.data.brand_name,"Brand Slug":e.data.brand_slug,"Category Id":e.data.category_id,"Category Name":e.data.category_name,"Category Slug":e.data.category_slug,"Page slug":tj.currentUrl,"Product Starting Price":t.price,"No. of Plans in Product":t.product_plan,Catogries:t.category.category_name,"Sub-Categories":"",Brand:t.brand_name,Industry:"N/A",Department:"N/A","Product Price Available":"Yes",Rating:t.rating_average,"No. of Reviews":t.total_reviews,"Supported Platforms":t.operating_system,"Supported Devices":"N/A","Deployement type":t.deployment,Source:"N/A","Active Coupons":"N/A","Video Available":"N/A","In Wishlist":"N/A",Date:new Date})}})},tj.events.clevertap.categoryViewedEvent=function(e,t,a){var r=JSON.parse(atob(e));Moengage.track_event("Category Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Category Name":r.category_name,"Page slug":r.category_slug,"No. of Products":r.total_products,"Ui Type":t,"Carousel Name":"N/A","Sub Categories":null,Source:a,Date:new Date})},tj.events.clevertap.industryViewedEvent=function(e,t){var a=JSON.parse(atob(e));Moengage.track_event("Industry Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page slug":a.slug,"Industry Name":a.industry_name,"No. of Products":a.total_products,"UI Type":t,Date:new Date})},tj.events.clevertap.departmentViewedEvent=function(e,t){var a=JSON.parse(atob(e));Moengage.track_event("Department Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Department Name":a.department_name,"Page slug":a.slug,"No. of Products":a.total_products,"UI Type":t,Date:new Date})},tj.events.clevertap.brandViewedEvent=function(e,t){var a=JSON.parse(atob(e));Moengage.track_event("Brand Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Search Keyword":a.keyword,"Page slug":a.slug,"No. of Products":a.total_products,Date:new Date})},tj.events.clevertap.searchViewedEvent=function(e,t){var a=JSON.parse(atob(e));Moengage.track_event("Search Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Brand Id":a.brand_id,"Brand Name":a.brand_name,"Page slug":a.slug,"No. of Products":a.total_products,Date:new Date})},tj.events.clevertap.sortingEvent=function(e,t,a){Moengage.track_event("Sorting",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page slug":tj.currentUrl,"Category/Brand/Industry/Department Name":t,"Sort Type":a,Date:new Date})},tj.events.clevertap.movedtoWishlistEvent=function(e,t){var a=JSON.parse(atob(e));$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:a.id},crossDomain:!0,success:function(e){!0==e.status&&Moengage.track_event("Moved To Wishlist",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Product Id":a.id,"Product Name":e.data.product_name,"Product Slug":e.data.product_slug,"Brand Id":e.data.brand_id,"Brand Name":e.data.brand_name,"Brand Slug":e.data.brand_slug,"Category Id":e.data.category_id,"Category Name":e.data.category_name,"Category Slug":e.data.category_slug,"Page slug":tj.currentUrl,Category:a.category,"No of products in wishlist":"N/A","UI Type":t,"Carousal Type":"N/A",Date:new Date})}})},tj.events.clevertap.wishlistViewedEvent=function(e){var t=JSON.parse(atob(e));let a=[];Object.keys(t).forEach(e=>{a.push(shortProductName(t[e].product_name))}),Moengage.track_event("Wishlist Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Product Names":JSON.stringify(a),"No of products in wishlist":t.length,Date:new Date})},tj.events.clevertap.clickedEvent=function(e,t,a){Moengage.track_event("Clicked",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"CTA Name":e,"Page Slug":tj.currentUrl,"Goto page slug":t,Banner:"N/A","UI Type":a,Date:new Date})},tj.events.clevertap.productNavigationEvent=function(e,t){$.ajax({url:baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:e},crossDomain:!0,success:function(a){!0==a.status&&Moengage.track_event("Product Navigation",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Product Id":e,"Product Name":shortProductName(a.data.product_name),"Product Slug":a.data.product_slug,"Brand Id":a.data.brand_id,"Brand Name":a.data.brand_name,"Brand Slug":a.data.brand_slug,"Category Id":a.data.category_id,"Category Name":a.data.category_name,"Category Slug":a.data.category_slug,"Page Slug":tj.currentUrl,"Navigation Name":t,Date:new Date})}})},tj.events.clevertap.filterAppliedEvent=function(e,t){Moengage.track_event("Filter Applied",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page Slug":tj.currentUrl,"Filter Type":e,"Filter Value":t,"Price Range":"N/A","Sub Category":"N/A","Product Count":"N/A",Date:new Date})},tj.events.clevertap.chargedEvent=function(e){var e=JSON.parse(atob(e));Moengage.track_event("Charged",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Order ID":parseInt(e.order_id),Amount:parseInt(e.order_amount),"Payment mode":e.payment_method,Items:e.products})},tj.events.clevertap.addedAddressEvent=function(){Moengage.track_event("Added Address",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page Slug":tj.currentUrl,Date:new Date})},tj.events.clevertap.blogViewedEvent=function(e,t,a){Moengage.track_event("Blog Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page URL":tj.currentUrl,"Blog Name ":e,"Blog Url ":a,Source:t,Date:new Date})},tj.events.clevertap.subsEvent=function(e){Moengage.track_event("Subscribed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page URL":tj.currentUrl,"Subscribed ":"Yes",Source:e,Date:new Date})},tj.events.clevertap.blogSiteViewedEvent=function(e,t){Moengage.track_event("Blog Site Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Blog Url ":t,Source:e,Date:new Date})},tj.events.clevertap.viewedMyOrdersEvent=function(e){var e=JSON.parse(atob(e));Moengage.track_event("Viewed My Order",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Order Id":e.order_id,"Order Total":e.order_amount,"Order Status":e.order_status,"Date of Order":e.order_date,"Payment Method":e.payment_method,"Invoice Available":e.invoice_available,"UTR updated":"N/A",Products:JSON.stringify(e.products),Date:new Date})},tj.events.clevertap.alternativesViewedEvent=function(e){var t=JSON.parse(atob(e));$.ajax({url:tj.baseUrl+"clevertap/getEventData",type:"post",dataType:"json",data:{product_id:t.product_id},crossDomain:!0,success:function(e){!0==e.status&&Moengage.track_event("Alternatives Viewed",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Product Id":t.product_id,"Product Name":e.data.product_name,"Product Slug":e.data.product_slug,"Brand Id":e.data.brand_id,"Brand Name":e.data.brand_name,"Brand Slug":e.data.brand_slug,"Category Id":e.data.category_id,"Category Name":e.data.category_name,"Category Slug":e.data.category_slug,"Price Range of Alternatives":"N/A",Date:new Date})}})},tj.events.clevertap.signedOutEvent=function(){Moengage.destroy_session()},tj.events.clevertap.utrUpdatedEvent=function(e){Moengage.track_event("UTR Updated",{"Customer Name":tj.user.customer_name,"Customer Contact":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Order ID":e.order_id,"Order Status":e.order_status,Price:e.order_total,"Date of Order":e.order_date,"Payment Method":e.payment_method,"Order Qty":"N/A",Brand:"N/A",Date:new Date})},tj.shortProductName=function(e){return e.length>30&&(e=e.substring(0,27).concat("..")),e},tj.events.clevertap.askUser=function(){return!1},tj.events.clevertap.oneTapLoginEvent=function(){tj.setUserInfo(onError,()=>{$.ajax({url:tj.baseUrl+"clevertap/userLoginLink",type:"post",dataType:"json",crossDomain:!0,data:{customer_id:tj.user.customer_id,customer_email:tj.user.customer_email},success:function(e){Moengage.track_event("One Tap Login",{"Customer Contact":tj.user.customer_phone,"Customer Name":tj.user.customer_name,"Customer Email":tj.user.customer_email,"Product Id":"undefined"!=typeof pdp?pdp.product_id:"N/A","Product Name":"undefined"!=typeof pdp?pdp.product_name:"N/A","Product Slug":"undefined"!=typeof pdp?pdp.product_slug:"N/A","Brand Id":"undefined"!=typeof brand?brand.brand_id:"N/A","Brand Name":"undefined"!=typeof brand?brand.brand_name:"N/A","Brand Slug":"undefined"!=typeof brand?brand.slug:"N/A","Category Id":"undefined"!=typeof cat?cat.category_id:"N/A","Category Name":"undefined"!=typeof cat?cat.category_name:"N/A","Category Slug":"undefined"!=typeof cat?cat.slug:"N/A","Customer Login Link":e.login_link,Page:tj.currentUrl,Date:new Date})}})})},tj.events.clevertap.compareViewedEvent=function(e){var t=JSON.parse(atob(e)),a=1,r="";params={"Customer Name":tj.user.customer_name,"Customer Phone":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Number of Products Compared":t.length},t.forEach(e=>{params["Product Id "+a]=e.product_id,params["Product Name "+a]=e.product_name,params["Category Id "+a]=e.category_id,params["Category Name "+a]=e.category_name,r="-vs-"+e.product_slug,a++}),params["Page Slug"]=r.substring(4),params.Date=new Date,$.ajax({url:tj.baseUrl+"clevertap/userLoginLink",type:"post",dataType:"json",crossDomain:!0,data:{customer_id:tj.user.customer_id,customer_email:tj.user.customer_email},success:function(e){params["Customer Login Link"]=e.login_link,Moengage.track_event("Compare Page Viewed",params)}})},tj.events.clevertap.askQuestionViewedEvent=function(e){var t=JSON.parse(atob(e));(params={"Customer Name":tj.user.customer_name,"Customer Phone":tj.user.customer_phone,"Customer Email":tj.user.customer_email,"Page Slug":t.question_id+"/"+t.question_slug,"Question Content":t.question,"Question Id":t.question_id,"Product Id":t.product_id,"Product Name":t.product_name,"Category Id":t.category_id,"Category Name":t.category_name}).Date=new Date,$.ajax({url:tj.baseUrl+"clevertap/userLoginLink",type:"post",dataType:"json",crossDomain:!0,data:{customer_id:tj.user.customer_id,customer_email:tj.user.customer_email},success:function(e){params["Customer Login Link"]=e.login_link,Moengage.track_event("Question Page Viewed",params)}})};