(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00aaa236"],{"209c":function(s,t,a){"use strict";var e=a("a43e"),o=a.n(e);o.a},a43e:function(s,t,a){},a55b:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"jp-register"},[a("div",{staticClass:"jp-register-main"},[a("div",{staticClass:"jp-register-header"},[a("i",{staticClass:"icon",on:{click:s.goBack}},[s._v("")]),a("span",{staticClass:"in"},[s._v("登录")]),a("router-link",{attrs:{tag:"span",to:"/register"}},[a("span",{staticClass:"out"},[s._v("注册")])])],1),a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],staticClass:"user",attrs:{type:"text",placeholder:"手机/邮箱/用户名",id:"username"},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"pwd",attrs:{type:"password",placeholder:"密码",id:"password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),a("button",{staticClass:"btn",on:{click:s.onLogin}},[s._v("登录")])])])])},o=[],r=a("cebc"),i=a("2f62"),n={data:function(){return{username:"",password:""}},computed:Object(r["a"])({},Object(i["c"])(["isLogin"])),methods:Object(r["a"])({},Object(i["b"])(["loginAction"]),{onLogin:function(){var s=this.username,t=this.password;this.loginAction({username:s,password:t}),this.$router.back()},goBack:function(){var s=this.$route.params.from;s?this.$router.push("/"):this.$router.back()}}),watch:{isLogin:function(s,t){if(console.log(s,t),!0===s){var a=this.$route.params.from,e=void 0===a?"/":a;this.$route.push(e)}}}},c=n,u=(a("209c"),a("2877")),p=Object(u["a"])(c,e,o,!1,null,"7a411e20",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-00aaa236.dc9e4e9e.js.map