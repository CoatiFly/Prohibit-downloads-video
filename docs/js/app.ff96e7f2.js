(function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("2877"),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"login-form-container"},[n("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"UserName"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"password",placeholder:"PassWord"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit()}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",[e.popupStatus?n("div",{staticClass:"login"}):e._e(),n("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("\n          "+e._s(e.loginBtnText)+"\n        ")])],1)],1)],1),e.popupStatus?n("div",{staticClass:"popup_box"}):e._e()])},p=[],d={name:"Login",data:function(){return{userInfo:{username:"Hadmin",password:"Pvio125%"},loginBtnText:"LOGIN",form:{username:"",password:""},popupStatus:!1}},mounted:function(){},methods:{onSubmit:function(){var e=this;this.popupStatus=!0,this.form.username===this.userInfo.username&&this.form.password===this.userInfo.password?setTimeout(function(){e.popupStatus=!1,e.$tool.go("Index")},2e3):(this.$message.error("用户名或密码错误！"),this.popupStatus=!1,console.log("Error_Info: ","用户名或密码错误！"))}}},m=d,v=(n("84f1"),Object(u["a"])(m,f,p,!1,null,null,null)),h=v.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video_box"},[n("video",{staticClass:"video-js vjs-big-play-centered",attrs:{id:"myVideo"}},[n("source",{attrs:{src:"http://106.75.35.38/video/57_0122_v01.mp4",type:"video/mp4"}})])])}],w={name:"Index",data:function(){return{myPlayer:"",videoSrc:"/static/57_0122_v01.mp4"}},mounted:function(){this.initVideo()},methods:{initVideo:function(){console.log(""),document.oncontextmenu=function(e){e.preventDefault()},document.onselectstart=function(e){e.preventDefault()},this.myPlayer=this.$video(myVideo,{posterImage:!0,loop:!0,controls:!0,autoplay:"muted",preload:"auto",width:"1000px",height:"500px"})}}},b=w,_=(n("8dd0"),Object(u["a"])(b,g,y,!1,null,null,null)),S=_.exports;r["default"].use(l["a"]);var x=new l["a"]({routes:[{path:"/",redirect:"login"},{path:"/login",name:"Login",component:h},{path:"/index",name:"Index",component:S}]}),T=n("2f62");r["default"].use(T["a"]);var O=new T["a"].Store({state:{},mutations:{},actions:{}}),j=n("f0e2"),k=(n("fda2"),n("5c96")),$=n.n(k),D=(n("0fae"),n("a481"),n("28a5"),{dateToArray:function(e){var t=Array();return t[0]=e.getFullYear(),t[1]=e.getMonth()+1,t[2]=e.getDate(),t[3]=e.getHours(),t[4]=e.getMinutes(),t[5]=e.getSeconds(),t[1]<10&&(t[1]="0"+t[1]),t[2]<10&&(t[2]="0"+t[2]),t[3]<10&&(t[3]="0"+t[3]),t[4]<10&&(t[4]="0"+t[4]),t[5]<10&&(t[5]="0"+t[5]),t},dateStringParse:function(e){var t=e.split(/[- : \/]/);return t},dateSwitchLine:function(e){var t=e.replace(/\/|\./g,"-");return t},dateSwitchDot:function(e){var t=e.replace(/\/|\-/g,".");return t},dateSwitchCommon:function(e){var t=e.replace(/-|\./g,"/");return t},SwitchFormatDate:function(e){return e=e.replace("-","年"),e=e.replace("-","月"),e+"日"},FormatTimeFull:function(e){var t=[];return t.push(e[0]+"年"+e[1]+"月"+e[2]+"日"),t.push(e[3]+":"+e[4]+":"+e[5]),t},FormatTimeHours:function(e){var t=this.dateToArray(new Date(e)),n=t[3]+":"+t[4]+":"+t[5];return n},FormatTimeLack:function(e){var t=e[1]+"月"+e[2]+"日 "+e[3]+":"+e[4];return t},TimeInterval:function(e,t){var n=new Date(e).getTime(),r=new Date(t).getTime(),o=36e5;return(r-n)/o},addHours:function(e,t){var n=new Date(e);return n.setTime(n.getTime()+36e5*t),n},minusAfterMs:function(e){var t=new Date;t.setTime(t.getTime()-1e3*e);var n=this.FormatTimeHours(t);return n}}),P=(n("7f7f"),{go:function(e){"string"===typeof e?x.push({name:e}):x.push({name:e.name,params:e.params})},back:function(){x.go(-1)}}),C=function(){var e=1440,t=window.innerWidth/e,n=document.querySelector(".el-main"),r=document.querySelector(".el-header"),o=document.querySelector(".el-footer");n.style.transform="scale(".concat(t,")"),r.style.transform="scale(".concat(t,")"),o.style.transform="scale(".concat(t,")")},I={newDate:D,newRouter:P,Zoom:C};n("b20f");r["default"].prototype.$tool=I.newRouter,r["default"].prototype.$video=j["a"],r["default"].config.productionTip=!1,r["default"].use($.a),new r["default"]({router:x,store:O,render:function(e){return e(c)}}).$mount("#app")},"84f1":function(e,t,n){"use strict";var r=n("9047"),o=n.n(r);o.a},"8dd0":function(e,t,n){"use strict";var r=n("ca86"),o=n.n(r);o.a},9047:function(e,t,n){},b20f:function(e,t,n){},ca86:function(e,t,n){}});
//# sourceMappingURL=app.ff96e7f2.js.map