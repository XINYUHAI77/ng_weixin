!function(r,a,i){"use strict";function e(){function r(r,a,e){return function(n,t,c){var o=c.$normalize(a);i[o]&&!c[o]&&n.$watch(c[r],function(r){r=e?!r:!!r,t.attr(a,r)})}}var i={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0};this.config=function(r){i=a.extend(i,r)},this.$get=function(){return{config:function(r){return i[r]},$$watchExpr:r}}}var n=a.module("ngAria",["ng"]).provider("$aria",e);n.directive("ngShow",["$aria",function(r){return r.$$watchExpr("ngShow","aria-hidden",!0)}]).directive("ngHide",["$aria",function(r){return r.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(r){function a(a,i,e){return r.config(i)&&!e.attr(a)}function i(r,a){return!a.attr("role")&&a.attr("type")===r&&"INPUT"!==a[0].nodeName}function e(r,a){var i=r.type,e=r.role;return"checkbox"===(i||e)||"menuitemcheckbox"===e?"checkbox":"radio"===(i||e)||"menuitemradio"===e?"radio":"range"===i||"progressbar"===e||"slider"===e?"range":"textbox"===(i||e)||"TEXTAREA"===a[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,compile:function(n,t){var c=e(t,n);return{pre:function(r,a,i,e){"checkbox"===c&&"checkbox"!==i.type&&(e.$isEmpty=function(r){return r===!1})},post:function(e,n,t,o){function u(){return o.$modelValue}function d(){return f?(f=!1,function(r){var a=t.value==o.$viewValue;n.attr("aria-checked",a),n.attr("tabindex",0-!a)}):function(r){n.attr("aria-checked",t.value==o.$viewValue)}}function l(){n.attr("aria-checked",!o.$isEmpty(o.$viewValue))}var f=a("tabindex","tabindex",n);switch(c){case"radio":case"checkbox":i(c,n)&&n.attr("role",c),a("aria-checked","ariaChecked",n)&&e.$watch(u,"radio"===c?d():l);break;case"range":if(i(c,n)&&n.attr("role","slider"),r.config("ariaValue")){var s=!n.attr("aria-valuemin")&&(t.hasOwnProperty("min")||t.hasOwnProperty("ngMin")),v=!n.attr("aria-valuemax")&&(t.hasOwnProperty("max")||t.hasOwnProperty("ngMax")),$=!n.attr("aria-valuenow");s&&t.$observe("min",function(r){n.attr("aria-valuemin",r)}),v&&t.$observe("max",function(r){n.attr("aria-valuemax",r)}),$&&e.$watch(u,function(r){n.attr("aria-valuenow",r)})}break;case"multiline":a("aria-multiline","ariaMultiline",n)&&n.attr("aria-multiline",!0)}f&&n.attr("tabindex",0),o.$validators.required&&a("aria-required","ariaRequired",n)&&e.$watch(function(){return o.$error.required},function(r){n.attr("aria-required",!!r)}),a("aria-invalid","ariaInvalid",n)&&e.$watch(function(){return o.$invalid},function(r){n.attr("aria-invalid",!!r)})}}}}}]).directive("ngDisabled",["$aria",function(r){return r.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(r,a,i,e){a.attr("aria-live")||a.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(r,a){return{restrict:"A",compile:function(i,e){var n=a(e.ngClick,null,!0);return function(a,i,e){function t(r,a){return-1!==a.indexOf(r[0].nodeName)?!0:void 0}var c=["BUTTON","A","INPUT","TEXTAREA"];i.attr("role")||t(i,c)||i.attr("role","button"),r.config("tabindex")&&!i.attr("tabindex")&&i.attr("tabindex",0),!r.config("bindKeypress")||e.ngKeypress||t(i,c)||i.on("keypress",function(r){function i(){n(a,{$event:r})}var e=r.which||r.keyCode;(32===e||13===e)&&a.$apply(i)})}}}}]).directive("ngDblclick",["$aria",function(r){return function(a,i,e){r.config("tabindex")&&!i.attr("tabindex")&&i.attr("tabindex",0)}}])}(window,window.angular);