(function(t){function e(e){for(var s,o,l=e[0],r=e[1],u=e[2],f=0,d=[];f<l.length;f++)o=l[f],a[o]&&d.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ma-selector/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"001a":function(t,e,n){},"07fd":function(t,e,n){"use strict";var s=n("a749"),a=n.n(s);a.a},"2d34":function(t,e,n){"use strict";var s=n("d68b"),a=n.n(s);a.a},"2e9b":function(t,e,n){},"2fc5":function(t,e,n){"use strict";var s=n("001a"),a=n.n(s);a.a},"34d3":function(t,e,n){"use strict";var s=n("5336"),a=n.n(s);a.a},"3db4":function(t,e,n){},5336:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],o=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello-world"},[n("home-header"),n("home-guide"),n("home-footer")],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"}),n("router-link",{attrs:{to:"/"}},[n("a",{staticClass:"header-hello"},[t._v("首页")])]),n("div",{staticClass:"header-about"},[t._v("多属性选择器————做选择，更清晰，更简单")])],1)},c=[],f={name:"HomeHeader"},d=f,m=(n("6165"),n("2877")),v=Object(m["a"])(d,u,c,!1,null,"634df3dc",null);v.options.__file="header.vue";var h=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-guide"},[n("div",{staticClass:"guide"},[n("div",{staticClass:"title"},[t._v("What is it ?")]),n("div",{staticClass:"content"},[t._v("人们在做复杂的决策时，\n                由于相关因素过多，总是难以梳理个人对事物的态度，\n                导致难以作出最优决策。改工具旨在为使用者解决面对多个选择时，\n                量化个人对每个选择的综合态度，帮助使用者做出选择。")]),n("div",{staticClass:"title"},[t._v("How to use it ?")]),t._m(0),n("button",{directives:[{name:"show",rawName:"v-show",value:t.make,expression:"make"}],staticClass:"go",on:{click:function(e){t.handleClick(t.make)}}},[n("span",[t._v(" Go ")])]),n("used",{directives:[{name:"show",rawName:"v-show",value:!t.make,expression:"!make"}],staticClass:"goon"})],1)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("1.写出目前面对的难题，如：晚餐吃什么？")]),n("li",[t._v("2.列出关于问题可供选择的解决方案，如：火锅、拉面...")]),n("li",[t._v("3.列出左右你做出选择的相关因素，并按重要性排序，如：距离、价格、味道")]),n("li",[t._v("4.对选项的每个相关因素进行打分，如，火锅：味道 8分")]),n("li",[t._v("5.生成分析报告")])])])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"used"},[n("div",[t._v("问题简述："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"question",domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),n("div",{staticClass:"flex"},[n("div",{staticClass:"Opt"},[t._v("\n            可供选择的解决方案：\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValueOne,expression:"inputValueOne"}],staticClass:"item",domProps:{value:t.inputValueOne},on:{input:function(e){e.target.composing||(t.inputValueOne=e.target.value)}}}),n("button",{staticClass:"BtnOpt",on:{click:t.handleSubmitOne}},[t._v("提交")]),n("ul",{staticClass:"option"},t._l(t.list,function(e,s){return n("li",{key:s},[t._v(t._s(e))])}),0)]),n("div",{staticClass:"Fat"},[t._v("\n            与选择相关的考虑因素：\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValueTwo,expression:"inputValueTwo"}],staticClass:"item",domProps:{value:t.inputValueTwo},on:{input:function(e){e.target.composing||(t.inputValueTwo=e.target.value)}}}),n("button",{staticClass:"BtnOpt",on:{click:t.handleSubmitTwo}},[t._v("提交")]),n("div",{staticClass:"explain"},[t._v("(请按照因素的重要程度依次输入，越重要的因素排的越靠前)")]),n("ul",{staticClass:"factor"},t._l(t.factor,function(e,s){return n("li",{key:s},[t._v(t._s(s+1)+". "+t._s(e))])}),0)])]),n("div",{staticClass:"flex"},[n("button",{staticClass:"clear",on:{click:t.handleDelete}},[t._v("清空")]),n("button",{staticClass:"start",on:{click:t.handleSubmitAll}},[n("router-link",{staticClass:"goto",attrs:{to:"/testing"}},[t._v("开始")])],1)])])},b=[],C={name:"Used",data:function(){return{question:"",inputValueOne:"",inputValueTwo:"",list:[],factor:[]}},watch:{question:function(){}},methods:{handleSubmitOne:function(){this.list.push(this.inputValueOne),this.inputValueOne=""},handleSubmitTwo:function(){this.factor.push(this.inputValueTwo),this.inputValueTwo=""},handleDelete:function(){this.inputValueOne="",this.inputValueTwo="",this.question="",this.list=[],this.factor=[]},handleSubmitAll:function(){this.question.length>1&this.list.length>1&&this.factor.length>1&&(localStorage.setItem("question",this.question),localStorage.setItem("list",JSON.stringify(this.list)),localStorage.setItem("factor",JSON.stringify(this.factor)),this.$emit("begin",this.question,this.list))}}},O=C,k=(n("2d34"),Object(m["a"])(O,g,b,!1,null,"7e5f5774",null));k.options.__file="used.vue";var w=k.exports,y={name:"HomeGuide",components:{Used:w},data:function(){return{make:!0}},methods:{handleClick:function(t){return this.make=!t,t}}},N=y,S=(n("acf7"),Object(m["a"])(N,p,_,!1,null,"e912e994",null));S.options.__file="guide.vue";var x=S.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"header-about"},[t._v("多属性选择器————做选择，更清晰，更简单")])])}],H={name:"HomeFooter"},T=H,j=(n("34d3"),Object(m["a"])(T,q,E,!1,null,"2bad4cbe",null));j.options.__file="footer.vue";var V=j.exports,B={name:"HelloWorld",components:{HomeHeader:h,HomeGuide:x,HomeFooter:V},methods:{begin:function(t){this.gogo=t}}},$=B,I=(n("2fc5"),Object(m["a"])($,l,r,!1,null,"b10044c2",null));I.options.__file="HelloWorld.vue";var J=I.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testing"},[n("home-header"),n("div",{staticClass:"content"},[n("div",{staticClass:"question"},[n("span",[t._v("目前面对的难题:")]),t._v("\n            "+t._s(t.question)+"\n        ")]),t._l(t.list,function(e,s){return n("div",{key:s,staticClass:"list"},[n("span",[t._v("关于")]),t._v(t._s(e)),n("span",[t._v("打分")]),n("br"),t._l(t.factor,function(s,a){return n("div",{key:a,staticClass:"factor"},[t._v("\n                "+t._s(s)+"\n                "),t._l(t.Num,function(a){return n("button",{key:a,staticClass:"number",on:{click:function(n){t.handleCheckout(e,s,a)}}},[t._v(t._s(a))])})],2)})],2)}),n("button",{staticClass:"complete",on:{click:t.handleReport}},[n("router-link",{staticClass:"goto",attrs:{to:"/result"}},[t._v("complete")])],1)],2),n("home-footer")],1)},A=[],F={name:"Testing",components:{HomeHeader:h,HomeFooter:V},data:function(){return{question:localStorage.getItem("question"),list:JSON.parse(localStorage.getItem("list")),factor:JSON.parse(localStorage.getItem("factor")),Num:[1,2,3,4,5,6,7,8,9,10],allNumber:[]}},methods:{handleCheckout:function(t,e,n){for(var s=0;s<this.list.length;s++)if(t===this.list[s])for(var a=0;a<this.factor.length;a++)if(e===this.factor[a]){var i=document.getElementsByClassName("list")[s],o=i.getElementsByClassName("factor")[a],l=o.getElementsByClassName("checkout")[0],r=o.getElementsByTagName("button")[n-1];l?(l.setAttribute("class","number"),r.setAttribute("class","checkout")):r.setAttribute("class","checkout")}},handleReport:function(){for(var t=0;t<this.list.length;t++){this.allNumber[t]=0;for(var e=document.getElementsByClassName("list")[t].getElementsByClassName("factor"),n=0;n<e.length;n++)for(var s=e[n].getElementsByTagName("button"),a=0;a<s.length;a++)s[a]===e[n].getElementsByClassName("checkout")[0]&&(this.allNumber[t]+=(this.factor.length-n)*(a+1))}localStorage.setItem("allNumber",JSON.stringify(this.allNumber))}},beforeRouteLeave:function(t,e,n){if(document.getElementsByClassName("checkout").length<this.list.length*this.factor.length){var s=window.confirm("喂！Σ(っ°Д°;)っ！表格还剩"+(this.list.length*this.factor.length-document.getElementsByClassName("checkout").length)+"项没有填完! 你确定要离开吗？");s?n():n(!1)}else n(!0)}},R=F,M=(n("07fd"),Object(m["a"])(R,P,A,!1,null,"58b54b54",null));M.options.__file="testing.vue";var W=M.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},[n("home-header"),n("div",{staticClass:"background"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("测评报告")]),n("div",{staticClass:"question"},[n("span",[t._v('关于我的难题"')]),t._v("\n                "+t._s(t.question)+"\n                "),n("span",[t._v('"的测评报告')])]),t._l(t.list,function(e,s){return n("div",{key:s,staticClass:"list"},[t._v(t._s(e)+"\n                "),n("div",{staticClass:"allNumber"},[t._v("\n                    "+t._s(t.allNumber[s])+"分\n                    "),n("div",{staticClass:"oblong",style:"width:"+8*t.allNumber[s]+"px"})])])})],2)]),n("home-footer")],1)},D=[],U={name:"Result",data:function(){return{question:localStorage.getItem("question"),list:JSON.parse(localStorage.getItem("list")),factor:JSON.parse(localStorage.getItem("factor")),allNumber:JSON.parse(localStorage.getItem("allNumber"))}},components:{HomeHeader:h,HomeFooter:V}},L=U,z=(n("8858"),Object(m["a"])(L,G,D,!1,null,"423e85f4",null));z.options.__file="result.vue";var K=z.exports;s["a"].use(o["a"]);var Q=new o["a"]({routes:[{path:"/",name:"HelloWorld",component:J},{path:"/testing",name:"Testing",component:W},{path:"/result",name:"Result",component:K}]}),X={name:"App",router:Q},Y=X,Z=(n("7e23"),Object(m["a"])(Y,a,i,!1,null,"4f762dd1",null));Z.options.__file="App.vue";var tt=Z.exports,et=n("fe3c"),nt=n.n(et);n("3db4"),n("c8f4");s["a"].use(o["a"]),nt.a.attach(document.body),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(tt)}}).$mount("#app")},6076:function(t,e,n){},6165:function(t,e,n){"use strict";var s=n("2e9b"),a=n.n(s);a.a},"7e23":function(t,e,n){"use strict";var s=n("b0f0"),a=n.n(s);a.a},8858:function(t,e,n){"use strict";var s=n("d8dd"),a=n.n(s);a.a},a749:function(t,e,n){},acf7:function(t,e,n){"use strict";var s=n("6076"),a=n.n(s);a.a},b0f0:function(t,e,n){},c8f4:function(t,e,n){},d68b:function(t,e,n){},d8dd:function(t,e,n){}});
//# sourceMappingURL=app.1e60e2b3.js.map