(function(t){function e(e){for(var n,c,r=e[0],o=e[1],l=e[2],d=0,m=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cf5":function(t,e,a){t.exports=a.p+"img/wechat.03883c8e.svg"},"1bc2":function(t,e,a){"use strict";a("58d9")},"3eb6":function(t,e,a){},"4ec0":function(t,e,a){"use strict";a("c7f1")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("3cb6"),s=a("25e5"),c=a.n(s),r=(a("cd3b"),a("cfe9"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),o=[],l={name:"App"},u=l,d=(a("5c0b"),a("2877")),m=Object(d["a"])(u,r,o,!1,null,null,null),p=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"homepage "+(t.loading?"loading":"")},[a("div",{staticClass:"snack-bar",class:t.hiddenLoading&&t.showSnack?"":"snack-bar-hidden"},[a("md-toolbar",{staticClass:"md-elevation-5 snack-content"},[a("div",{staticStyle:{flex:"1"}},[t._v("授权有效！")]),a("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(e){t.showSnack=!1}}},[t._v("关闭")])],1)],1),t.hiddenLoading?t._e():a("div",{staticClass:"spinner"},[a("md-progress-spinner",{staticClass:"md-primary",attrs:{"md-stroke":4,"md-diameter":50,"md-mode":"indeterminate"}}),a("div",{staticClass:"spinner-text"},[t._v("正在进行扫码登记")])],1),t.hiddenLoading?a("div",{staticClass:"pass-content"},[a("div",{staticClass:"pass-result"},[t._v("授权有效！")]),a("md-list",{staticClass:"pass-list"},[a("md-list-item",[a("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Person","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Person"}},[a("path",{attrs:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})]),a("div",{staticClass:"md-list-item-text list-title"},[t._v("用户姓名")]),a("div",{staticClass:"md-list-action list-text",on:{click:t.clickName}},[t._v(t._s(t.name))])]),a("md-list-item",[a("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Group","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Group"}},[a("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}})]),a("div",{staticClass:"md-list-item-text list-title"},[t._v("登记类型")]),a("div",{staticClass:"md-list-action list-text"},[t._v(t._s(t.humanType))])]),a("md-list-item",[a("svg",{staticClass:"list-icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",tabindex:"-1",title:"Timer","data-ga-event-category":"material-icons","data-ga-event-action":"click","data-ga-event-label":"Timer"}},[a("path",{attrs:{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}})]),a("div",{staticClass:"md-list-item-text list-title"},[t._v("登记时间")]),a("div",{staticClass:"md-list-action list-text time-text"},[a("div",{staticClass:"line-text"},[t._v(t._s(t.timeStr)+" "+t._s(t.timeStr))])])])],1)],1):t._e(),t.hiddenLoading?a("div",{staticClass:"pass-button"},[a("md-button",{staticClass:"md-primary md-raised"},[a("span",{staticClass:"pass-button-content",on:{click:function(e){return t.$router.replace("/qr")}}},[t._v("前往个人二维码")])])],1):t._e(),a("div",{staticClass:"input-prompt"},[a("md-dialog-prompt",{attrs:{"md-active":t.showPrompt,"md-title":"君の名？","md-input-maxlength":"30","md-input-placeholder":"呐呐呐呐呐呐呐呐...","md-confirm-text":"Done"},on:{"update:mdActive":function(e){t.showPrompt=e},"update:md-active":function(e){t.showPrompt=e}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)])},v=[],h=(a("99af"),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("25f0"),a("4d90"),{name:"HomePage",data:function(){return{loading:!0,hiddenLoading:!1,showSnack:!1,showPrompt:!1,timeStr:(new Date).toLocaleString(),name:"张沸无",humanType:"研究生（硕士）",clickCount:0}},watch:{showPrompt:function(t){t||localStorage.setItem("name",this.name)}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1,setTimeout((function(){t.hiddenLoading=!0,t.showSnack=!0}),500)}),1e3);var e=localStorage.getItem("name");e&&(this.name=e);var a=new Date,n=a.getHours(),i=a.getMinutes(),s=a.getSeconds(),c=[a.getFullYear(),a.getMonth()+1,a.getDate()].map((function(t){return t.toString().padStart(2,"0")})).join("-"),r=[n,i,s].map((function(t){return t.toString().padStart(2,"0")})).join(":");this.timeStr="".concat(c," ").concat(r)},methods:{clickName:function(){this.clickCount+=1,this.clickCount>3&&(this.showPrompt=!0,this.clickCount=0)},confirmInput:function(){this.clickCount=0}}}),g=h,b=(a("1bc2"),Object(d["a"])(g,f,v,!1,null,"49cadb34",null)),C=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"progress-bar"}),n("img",{staticClass:"wechat-icon",attrs:{src:a("0cf5"),alt:""}}),n("div",{staticClass:"login-tips"},[t._v("近期你已经授权登录过电子科技大学保卫处")]),n("div",{staticClass:"login-tips"},[t._v("自动登录中")])])}],w=(a("ac1f"),a("5319"),null),y={name:"LoginPage",props:{},data:function(){return{amount:0}},mounted:function(){var t=this;document.title="",w=setInterval((function(){t.amount<100&&(t.amount+=parseInt(80*Math.random())),t.amount>=100&&(t.$router.replace("/home"),w&&clearInterval(w))}),300)}},k=y,S=(a("ca50"),Object(d["a"])(k,_,x,!1,null,"459c3f37",null)),P=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qr-page-wrapper"},[n("div",{staticClass:"qr-page md-elevation-2"},[n("div",{staticClass:"qr-title"},[t._v("行人二维码")]),n("img",{staticClass:"qr-img",attrs:{src:a("6585"),alt:""}}),n("div",{staticClass:"qr-text"},[t._v("二维码剩余有效时间"+t._s(t.time)+"秒")]),n("md-button",{staticClass:"md-primary md-raised"},[n("span",{staticClass:"qr-button-content",on:{click:function(e){return t.$router.replace("/rule")}}},[t._v("查看通行规则")])])],1)])},O=[],M={name:"QRCodePage",data:function(){return{time:300}},mounted:function(){var t=this;setInterval((function(){t.time-=2}),2e3)}},z=M,$=(a("a731"),Object(d["a"])(z,j,O,!1,null,"6a0b9b5a",null)),q=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("md-progress-spinner",{staticClass:"md-primary",attrs:{"md-stroke":4,"md-diameter":50,"md-mode":"indeterminate"}})],1)},L=[],I={name:"PassRulePage"},E=I,D=(a("4ec0"),Object(d["a"])(E,T,L,!1,null,"428c361d",null)),V=D.exports;n["default"].config.productionTip=!1,n["default"].use(c.a),n["default"].use(i["a"]);var B=new i["a"]({mode:"history",base:"Real-Qingshui-Pass",routes:[{path:"/",component:P},{path:"/home",component:C},{path:"/qr",component:q},{path:"/rule",component:V}]});new n["default"]({router:B,render:function(t){return t(p)}}).$mount("#app")},"58d9":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("3eb6")},6585:function(t,e,a){t.exports=a.p+"img/qr.4c828820.jpg"},a4bf:function(t,e,a){},a731:function(t,e,a){"use strict";a("a4bf")},b703:function(t,e,a){},c7f1:function(t,e,a){},ca50:function(t,e,a){"use strict";a("b703")}});
//# sourceMappingURL=app.45302d56.js.map