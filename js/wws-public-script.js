var wwsObj = {"support_number":"919445944601","auto_popup":"yes","auto_popup_time":"5","plugin_url":"https:\/\/www.kgetechnologies.com\/wp-content\/plugins\/wordpress-whatsapp-support\/","is_mobile":"0","current_page_id":"753","current_page_url":"https:\/\/www.kgetechnologies.com\/","popup_layout":"8","group_invitation_id":"XYZ12345678","admin_url":"https:\/\/www.kgetechnologies.com\/wp-admin\/admin-ajax.php?ver=60c8506a4f13e","scroll_lenght":"","pre_defined_text":"%0A\r\nPage Title: Why KGE Technologies%0A","is_debug":"no","fb_ga_click_tracking":"{\"fb_click_tracking_status\":\"no\",\"fb_click_tracking_event_name\":\"Chat started\",\"fb_click_tracking_event_label\":\"Support\",\"ga_click_tracking_status\":\"no\",\"ga_click_tracking_event_name\":\"Button Clicked\",\"ga_click_tracking_event_category\":\"WordPress WhatsApp Support\",\"ga_click_tracking_event_label\":\"Support\"}","is_gdpr":"no","numberMasking":"99999-99999","whatsapp_mobile_api":"https:\/\/api.whatsapp.com","whatsapp_desktop_api":"https:\/\/web.whatsapp.com"};

var wwsLoader='<div class="wws-spinner">';wwsLoader+='<div class="wws-bounce1 wws--bg-color"></div>',wwsLoader+='<div class="wws-bounce2 wws--bg-color"></div>',wwsLoader+='<div class="wws-bounce3 wws--bg-color"></div>',wwsLoader+="</div>";const wwsWidget={popup:jQuery(".wws-popup"),popupGradient:jQuery(".wws-gradient"),trigger:function(){"0"===this.popup.attr("data-wws-popup-status")?(this.popup.slideDown(),this.popup.attr("data-wws-popup-status","1"),this.popupGradient.show()):(this.popup.slideUp(),this.popup.attr("data-wws-popup-status","0"),this.popupGradient.hide())},isPopupOpen:function(){return"1"===jQuery(this.popup).attr("data-wws-popup-status")},autoPopup:function(e){"yes"!==sessionStorage.wwsAutoPopup&&!1===this.isPopupOpen()&&setTimeout(function(){wwsWidget.trigger(),sessionStorage.wwsAutoPopup="yes"},Number(1e3*e))},sendMessage:function(e="",s=""){return""!==e&&""!==s&&(this.is_mobile.any()?window.open(wwsObj.whatsapp_mobile_api+"/send?phone="+s+"&text="+e):window.open(wwsObj.whatsapp_desktop_api+"/send?phone="+s+"&text="+e),!0)},sendGroupInvitation:function(e){window.open("https://chat.whatsapp.com/"+e)},is_mobile:{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return wwsWidget.is_mobile.Android()||wwsWidget.is_mobile.BlackBerry()||wwsWidget.is_mobile.iOS()||wwsWidget.is_mobile.Opera()||wwsWidget.is_mobile.Windows()}},logAnalytics:function(e="N/A",s="N/A"){jQuery.ajax({url:wwsObj.admin_url,type:"post",crossDomain: true,data:{action:"wws_click_analytics",message:e,number:s}})}};!function(e){"use strict";jQuery(document).ready(function(){function e(){var e=jQuery.parseJSON(wwsObj.fb_ga_click_tracking);if(1==e.ga_click_tracking_status){try{gtag("event",e.ga_click_tracking_event_name,{event_category:e.ga_click_tracking_event_category,event_label:e.ga_click_tracking_event_label})}catch(e){"yes"===wwsObj.is_debug&&window.console&&console.log("WordPress WhatsApp Support Google or Facebook analytics error message: "+e.message)}try{ga("send","event",e.ga_click_tracking_event_category,e.ga_click_tracking_event_name,e.ga_click_tracking_event_label)}catch(e){"yes"===wwsObj.is_debug&&window.console&&console.log("WordPress WhatsApp Support Google or Facebook analytics error message: "+e.message)}try{_gaq.push(["_trackEvent",e.ga_click_tracking_event_category,e.ga_click_tracking_event_name,e.ga_click_tracking_event_label])}catch(e){"yes"===wwsObj.is_debug&&window.console&&console.log("WordPress WhatsApp Support Google or Facebook analytics error message: "+e.message)}try{dataLayer.push({event:"customEvent",eventCategory:e.ga_click_tracking_event_category,eventAction:e.ga_click_tracking_event_name,eventLabel:e.ga_click_tracking_event_label})}catch(e){"yes"===wwsObj.is_debug&&window.console&&console.log("WordPress WhatsApp Support Google or Facebook analytics error message: "+e.message)}}if(1==e.fb_click_tracking_status){var s=!1;try{s||(fbq("trackCustom","WordPressWhatsAppSupport",{event:e.fb_click_tracking_event_name,account:e.fb_click_tracking_event_label}),s=!0)}catch(e){"yes"===wwsObj.is_debug&&window.console&&console.log("WordPress WhatsApp Support Google or Facebook analytics error message: "+e.message)}}}function s(){if("yes"===wwsObj.is_gdpr)return 0!=jQuery(".wws-gdpr input").is(":checked")||(jQuery(".wws-gdpr > div").addClass("wws-shake-animation"),setTimeout(function(){jQuery(".wws-gdpr > div").removeClass("wws-shake-animation")},300),!1)}jQuery(".wws-popup__open-btn, .wws-popup__close-btn").on("click",function(e){e.preventDefault(),wwsWidget.trigger()}),jQuery(document).on("click",".wws-popup__send-btn",function(t){if(t.preventDefault(),8==wwsObj.popup_layout){var o=jQuery(this).attr("data-wws-pre-msg"),p=jQuery(this).attr("data-wws-number");if(0==s())return;1==wwsWidget.sendMessage(o,p)&&(wwsWidget.logAnalytics(o),e())}if(7==wwsObj.popup_layout){var r=jQuery(".wws-popup__input").val(),n=jQuery(".wws-popup__fields-number").val();p=wwsObj.support_number;if(0==s())return;if(setTimeout(function(){jQuery(".wws-popup__fields-textarea-wrapper, .wws-popup__fields-number").removeClass("wws-shake-animation")},300),""==n)return void jQuery(".wws-popup__fields-number").addClass("wws-shake-animation");if(""==r)return void jQuery(".wws-popup__fields-textarea-wrapper").addClass("wws-shake-animation");1==wwsWidget.sendMessage(r+wwsObj.pre_defined_text,p)&&wwsWidget.logAnalytics(r,n)}if(6==wwsObj.popup_layout){r=jQuery(".wws-popup__input").val(),o=jQuery(".wws-popup-multi-support-pre-essage").val(),n=jQuery(".wws-popup__fields-number").val(),p=jQuery(".wws-popup-multi-support-number").val();if(0==s())return;if(setTimeout(function(){jQuery(".wws-popup__fields-textarea-wrapper, .wws-popup__fields-number").removeClass("wws-shake-animation")},300),""==n)return void jQuery(".wws-popup__fields-number").addClass("wws-shake-animation");if(""==r)return void jQuery(".wws-popup__fields-textarea-wrapper").addClass("wws-shake-animation");1==wwsWidget.sendMessage(r+o,p)&&wwsWidget.logAnalytics(r,n)}if(1==wwsObj.popup_layout||2==wwsObj.popup_layout||3==wwsObj.popup_layout){r=jQuery(".wws-popup__input").val(),p=wwsObj.support_number;if(0==s())return;if(setTimeout(function(){jQuery(".wws-popup__input-wrapper").removeClass("wws-shake-animation")},300),0==r.length)return void jQuery(".wws-popup__input-wrapper").addClass("wws-shake-animation");1==wwsWidget.sendMessage(r+wwsObj.pre_defined_text,p)&&(wwsWidget.logAnalytics(r),e())}if(4==wwsObj.popup_layout){r=jQuery(".wws-popup__input").val(),p=wwsObj.support_number;1==wwsWidget.sendMessage(r+wwsObj.pre_defined_text,p)&&(wwsWidget.logAnalytics(),e())}}),jQuery(".wws-popup__input").on("keypress",function(e){if(13==e.which)return jQuery(".wws-popup__send-btn").click(),!1}),jQuery(".wws-popup-group-invitation__button").on("click",function(){wwsWidget.sendGroupInvitation(wwsObj.group_invitation_id),wwsWidget.logAnalytics(),e()}),"yes"===wwsObj.auto_popup&&wwsWidget.autoPopup(wwsObj.auto_popup_time),null!=wwsObj.scroll_lenght&&jQuery(document).on("scroll",function(){jQuery(window).scrollTop()+jQuery(window).height()>=jQuery(document).height()*wwsObj.scroll_lenght/100-10?jQuery(".wws-popup-container").fadeIn():jQuery(".wws-popup-container").fadeOut()}),jQuery(document).on("click","[data-wws-multi-support-person-id]",function(){var e=jQuery(this).attr("data-wws-multi-support-person-id");jQuery(".wws-popup__support-person-wrapper").hide(),jQuery(".wws-popup__support-person-form").show(),jQuery(".wws-popup__support-person-form").html(wwsLoader),jQuery.ajax({url:wwsObj.admin_url,type:"post",crossDomain: true,data:{action:"wws_view_multi_person_form",support_person_id:e,post_id:wwsObj.current_page_id}}).done(function(e){jQuery(".wws-popup__support-person-form").html(e),jQuery(".wws-popup__fields-number").mask(wwsObj.numberMasking)})}),jQuery(document).on("click","[data-wws-multi-support-back]",function(){jQuery(".wws-popup__support-person-wrapper").show(),jQuery(".wws-popup__support-person-form").hide()}),jQuery(".wws-popup__fields-number").mask(wwsObj.numberMasking)})}(jQuery);