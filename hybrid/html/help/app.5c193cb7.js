(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],u=0,v=[];u<i.length;u++)o=i[u],s[o]&&v.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0f4aebec"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e),r=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"037f":function(e,t,n){"use strict";var a=n("d920"),s=n.n(a);s.a},"05ad":function(e,t,n){},"0f85":function(e,t,n){},1:function(e,t){},1950:function(e,t,n){"use strict";var a=n("5005"),s=n.n(a);s.a},2267:function(e,t,n){},"227b":function(e,t,n){},2914:function(e,t,n){e.exports=n.p+"img/register_pic.55fab8ca.png"},"2a36":function(e,t,n){"use strict";var a=n("2267"),s=n.n(a);s.a},"2b88":function(e,t,n){"use strict";var a=n("9adf"),s=n.n(a);s.a},"3ece":function(e,t,n){"use strict";var a=n("05ad"),s=n.n(a);s.a},4107:function(e,t,n){},"48e3":function(e,t,n){"use strict";var a=n("0f85"),s=n.n(a);s.a},5005:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("7c55"),n("2877")),i={},c=Object(o["a"])(i,s,r,!1,null,null,null),l=c.exports,u=n("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},f=d,g=(n("e212"),Object(o["a"])(f,m,h,!1,null,"df6a9e02",null)),b=g.exports,_={name:"home",components:{HelloWorld:b}},w=_,y=Object(o["a"])(w,p,v,!1,null,"56239d11",null),j=y.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"baopeilv"},[n("p",{staticClass:"baopeilv-title"},[e._v("保赔率是对跟单人提供参考和奖金保障的一种功能，也是发单人展示自己竞彩水平的一种方式。")]),n("p",{staticClass:"baopeilv-title"},[e._v("保赔率用法：如果设置保赔率为2.0，那么开奖后，中奖金额除以投注金额大于等于2.0时将抽取跟单人中奖金额的10%作为佣金。")]),n("p",{staticClass:"baopeilv-title"},[e._v("注意：如果没有设置保赔率，系统将默认最低保赔率为1.2，并且不显示保赔率标识")])])}],x={name:"baopeilv",components:{}},$=x,S=(n("5c18"),Object(o["a"])($,k,C,!1,null,"242d6d3c",null)),O=S.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"active"},[n("img",{staticClass:"active-img",attrs:{src:"https://ykimages.oss-cn-beijing.aliyuncs.com/jiajiang.jpg"}})])}],D={name:"active",components:{}},I=D,T=(n("3ece"),Object(o["a"])(I,E,q,!1,null,"34d253ce",null)),U=T.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"active"},[n("img",{staticClass:"active-img",attrs:{src:"https://ykimages.oss-cn-beijing.aliyuncs.com/jiajiang.jpg"}})])}],R={name:"active",components:{}},z=R,M=(n("2a36"),Object(o["a"])(z,P,K,!1,null,"b4df20b2",null)),L=M.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"active"},[n("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions}}),n("img",{staticClass:"img-115",attrs:{src:"https://ykimages.oss-cn-beijing.aliyuncs.com/live115.png",alt:""}})],1)},H=[],V=n("7750"),W={name:"active",components:{myVideo:V["a"]},mounted:function(){},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"https://ykimages.oss-cn-beijing.aliyuncs.com/js11x5.mp4?spm=5176.8466032.0.dopenurl.1109145024oT95&file=js11x5.mp4"}],poster:"https://ykimages.oss-cn-beijing.aliyuncs.com/1556179835801.jpg",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},methods:{}},A=W,F=(n("da61"),Object(o["a"])(A,N,H,!1,null,"bce287f8",null)),B=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.msg?n("div",{staticClass:"news"},[n("div",{staticClass:"news-head"},[n("h1",[e._v(e._s(e.msg.abst))]),n("p",[n("b",[e._v(e._s(e.msg.author))]),e._v("   \n      "),n("span",[e._v(e._s(e.msg.updateTime))])])]),n("div",{staticClass:"news-content",domProps:{innerHTML:e._s(e.msg.content)}})]):e._e()},Q=[],Y={name:"active",components:{},mounted:function(){console.log(this.$route),this.id=this.$route.query.id,this.clientUserSession=this.$route.query.clientUserSession,this.contentDetail()},data:function(){return{msg:null,id:"",clientUserSession:""}},methods:{contentDetail:function(){var e=this;this.$api.contentDetail({clientUserSession:this.clientUserSession,id:this.id}).then(function(t){200===t.code&&(e.msg=t.data.data.content)})}}},G=Y,X=(n("037f"),Object(o["a"])(G,J,Q,!1,null,"106fff10",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help"},[n("p",{staticClass:"help-title"},[e._v("常见问题")]),n("van-collapse",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-collapse-item",{attrs:{title:"延期、中断、取消的比赛，如何算奖?",name:"1"}},[e._v("\n      ①延期比赛如何处理：推迟时间未超过36小时，则正常算奖；推迟时间超过36小时或者无法确定时间，则该场次为无效场次，按照取消比赛算奖（单关固定玩法返还投注金额，过关投注该场赔率值按照赔率1.0计算奖金）。"),n("br"),e._v("\n      ②中断比赛如何处理：推迟时间未超过36小时，则正常算奖；推迟时间超过36小时或者无法确定时间，则该场次为无效场次，按照取消比赛算奖（单关固定玩法返还投注金额，过关投注该场赔率值按照赔率1.0计算奖金）。"),n("br"),e._v("\n      ③取消比赛如何处理：推迟时间未超过36小时，则正常算奖；推迟时间超过36小时或者无法确定时间，则该场次为无效场次，按照取消比赛算奖（单关固定玩法返还投注金额，过关投注该场赔率值按照赔率1.0计算奖金）。\n    ")]),n("van-collapse-item",{attrs:{title:"中奖奖金如何扣税？",name:"2"}},[e._v("\n      根据彩票管理机构的相关规定，中奖彩票单注奖金超过1万元时，中奖人需要缴纳奖金的20%作为个人偶然所得税；税金由彩票中心代扣代缴。选择倍投投注时，只要开奖后单注奖金不超过1万元，就算翻倍后奖金超过1万元，也无需缴纳个人偶然所得税。\n    ")]),n("van-collapse-item",{attrs:{title:"提现失败原因？",name:"3"}},[e._v("\n      银行提款失败有多种原因，请您自行核对以下几点："),n("br"),e._v("\n      1、账号绑定的身份证和银行卡是否是一致的。"),n("br"),e._v("\n      2、银行卡号是否输入正确。"),n("br"),e._v("\n      如有任意一个错误，请您联系在线客服或者店主进行修改，修改成功后，便可以成功提现。\n    ")]),n("van-collapse-item",{attrs:{title:"中奖奖金怎么计算？",name:"4"}},[e._v("\n      奖金计算公式为：（所选场次的过关出票赔率连乘）×2元×倍数。奖金计算是按照最终的出票明细来计算的，而不是按照购买时参考赔率计算的\n    ")]),n("van-collapse-item",{attrs:{title:"如何领奖？",name:"5"}},[e._v("\n      每期彩票开奖后，系统会自动将奖金划至中奖用户的账户中，用户可以随时查看、使用、提取奖金到您的银行卡。中得一等奖大奖后，我们的工作人员会在第一时间联系您，您可以选择自行兑奖或者我们代领的方式，大奖奖金会在1-3个工作日内到达您的账户。\n    ")]),n("van-collapse-item",{attrs:{title:"提现多久到账？",name:"6"}},[e._v("\n      工作时间一般是2小时内到账，夜间11点后提款要到第二天工作时间处理，部分银行周末不处理。温馨提示：部分银行到账没有短信通知，请自行查看银行卡交易记录，如果确认没有到账，请第一时间提供银行卡交易记录截图，以便我们及时为您处理。\n    ")])],1)],1)},te=[],ne=n("b970"),ae={name:"help",components:{Collapse:ne["a"],CollapseItem:ne["b"]},data:function(){return{active:[]}}},se=ae,re=(n("2b88"),Object(o["a"])(se,ee,te,!1,null,"e19541ae",null)),oe=re.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.pageShow,expression:"pageShow"}],staticClass:"register"},[a("img",{staticClass:"register-pic",attrs:{src:n("2914"),alt:""}}),a("div",{staticClass:"register-box"},[a("h1",{staticClass:"register-title"},[e._v("新用户注册")]),a("van-cell-group",[a("van-field",{attrs:{clearable:"",placeholder:"请输入中文用户名"},on:{"click-right-icon":function(t){return e.$toast("question")}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("van-field",{attrs:{placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入短信验证码"},model:{value:e.sms,callback:function(t){e.sms=t},expression:"sms"}},[a("van-button",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{slot:"button",size:"small",type:"warning"},nativeOn:{click:function(t){return e.getCode(t)}},slot:"button"},[e._v("发送验证码")]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{slot:"button",size:"small",type:"default",disabled:""},slot:"button"},[e._v(e._s(e.count))])],1)],1),a("van-button",{staticClass:"submit-btn",attrs:{type:"danger"},nativeOn:{click:function(t){return e.mobileRegister(t)}}},[e._v("提交")]),a("p",{staticClass:"register-info"},[e._v("已有账号？"),a("span",{on:{click:e.goDownload}},[e._v("去下载")])])],1),a("van-dialog",{attrs:{title:"注册成功！","show-cancel-button":"",confirmButtonText:"下载"},on:{confirm:e.goDownload},model:{value:e.showDownload,callback:function(t){e.showDownload=t},expression:"showDownload"}})],1)},ce=[],le={name:"register",mounted:function(){this.downKey=this.$route.query.code,this.checkKey(this.downKey),this.inviteCode=this.$route.query.inviteCode,this.appId=this.$route.query.appId},data:function(){return{username:"",password:"",phone:"",sms:"",userId:"",appId:"",downKey:"",inviteCode:"",show:!0,showDownload:!1,count:"",timer:null,pageShow:!1}},methods:{getCode:function(){var e=this,t=60;this.phone?this.timer||(this.count=t,this.show=!1,this.getSms(),this.timer=setInterval(function(){e.count>0&&e.count<=t?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)},1e3)):this.$toast("请填写手机号~")},checkKey:function(e){var t=this;this.$api.checkKey({key:e}).then(function(e){200===e.code?t.pageShow=!0:location.href="http://qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children"})},getSms:function(){var e=this;this.$api.getSms({mobile:this.phone}).then(function(t){1===t.flag?e.$toast("获取验证码成功"):e.$toast(t.errorMessage)})},mobileRegister:function(){var e=this;this.$api.mobileRegister({username:this.username,password:this.password,mobile:this.phone,validateCodeCheck:this.sms,superiorUserID:this.inviteCode,appId:this.appId}).then(function(t){1===t.flag?e.showDownload=!0:e.$toast(t.errorMessage)})},goDownload:function(){location.href="http://down.taigut.com?code="+this.downKey+"&appId="+this.appId}}},ue=le,pe=(n("5b5f"),Object(o["a"])(ue,ie,ce,!1,null,"37784d8e",null)),ve=pe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"share"},[n("div",{staticClass:"share-box"},[n("img",{staticClass:"share-img",attrs:{src:"https://ykimages.oss-cn-beijing.aliyuncs.com/123321.jpg"}}),e.url?n("qrcode",{staticClass:"share-qrcode",attrs:{value:e.url}}):e._e()],1)])},he=[],de=n("f8aa"),fe={name:"share",components:{Qrcode:de["a"]},mounted:function(){this.clientUserSession=this.$route.query.clientUserSession,this.url="http://h5.r2b3y.cn/#/register?clientUserSession="+this.clientUserSession},data:function(){return{clientUserSession:"",url:""}},methods:{}},ge=fe,be=(n("48e3"),Object(o["a"])(ge,me,he,!1,null,"02c5c01d",null)),_e=be.exports,we=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ye=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"baopeilv"},[n("p",{staticClass:"baopeilv-title"},[e._v("\n    本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。"),n("br"),e._v("\n\n    1.适用范围"),n("br"),e._v("\n\n    a)在您使用本软件网络服务，本软件自动接收并记录的您的手机上的信息，包括但不限于您的健康数据、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；"),n("br"),e._v("\n\n    2.信息的使用"),n("br"),e._v("\n\n    a)在获得您的数据之后，本软件会将其上传至服务器，以生成您的排行榜数据，以便您能够更好地使用服务。"),n("br"),e._v("\n\n    3.信息披露"),n("br"),e._v("\n\n    a)本软件不会将您的信息披露给不受信任的第三方。"),n("br"),e._v("\n\n    b)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；"),n("br"),e._v("\n\n    c)如您出现违反中国有关法律、法规或者相关规则的情况，需要向第三方披露；"),n("br"),e._v("\n\n    4.信息存储和交换"),n("br"),e._v("\n\n    本软件收集的有关您的信息和资料将保存在本软件及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本软件收集信息和资料所在地的境外并在境外被访问、存储和展示。"),n("br"),e._v("\n\n    5.信息安全"),n("br"),e._v("\n\n    a)在使用本软件网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，请您立即联络本软件客服，以便本软件采取相应措施。")])])}],je={name:"baopeilv",components:{}},ke=je,Ce=(n("1950"),Object(o["a"])(ke,we,ye,!1,null,"27d9b386",null)),xe=Ce.exports;a["a"].use(u["a"]);var $e=new u["a"]({routes:[{path:"/",name:"home",component:j},{path:"/baopeilv",name:"baopeilv",component:O},{path:"/active",name:"active",component:U},{path:"/active_jiajiang",name:"active_jiajiang",component:L},{path:"/active_115",name:"active_115",component:B},{path:"/news",name:"news",component:Z},{path:"/help_center",name:"help_center",component:oe},{path:"/register",name:"register",component:ve},{path:"/share",name:"share",component:_e},{path:"/otherPage",name:"otherPage",component:xe},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Se=n("d6d3"),Oe=n.n(Se),Ee=(n("157a"),n("bc3a")),qe=n.n(Ee),De=n("f684"),Ie=n("bc3a"),Te=n("4328");Ie.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",Ie.defaults.timeout=5e3,"merp.jinqiuqiu.top"==window.location.host?Ie.defaults.baseURL="http://servermticket.jinqiuqiu.top/erp":Ie.defaults.baseURL="http://paas.ggffgd.cn",Ie.interceptors.response.use(function(e){return 200!==e.data.code&&(900===e.data.code?localStorage.clear():950===e.data.code&&localStorage.clear()),e},function(e){return De.reject(e)});var Ue={request:function(e){e.params||(e.params={}),e.method||(e.method="post"),e.method=e.method.toLowerCase(),Ie.defaults.headers.common["Authorization"]=localStorage.getItem("token"),e.params.pageSize;var t={url:e.url,method:e.method,data:Te.stringify(e.params)};return"get"===e.method&&(t.params=e.params),new De(function(e,n){Ie(t).then(function(t){e(t.data)}).catch(function(e){n(e.message)})})}},Pe=Ue,Ke=Pe.request,Re={contentDetail:function(e){return Ke({url:"/erp/clientContentDetail",params:e})},queryDownloadKey:function(e){return Ke({url:"/yk/queryDownloadKey",params:e})},getSms:function(e){return Ke({url:"/yk/registerValidateCode",params:e})},mobileRegister:function(e){return Ke({url:"/yk/mobileRegister",params:e})},checkKey:function(e){return Ke({url:"/erp/check/download/key",params:e})}},ze=Re;a["a"].config.productionTip=!1,n("fda2"),n("451f"),a["a"].use(Oe.a),a["a"].use(ne["c"]),a["a"].use(ne["d"]),a["a"].prototype.axios=qe.a,a["a"].prototype.$api=ze,new a["a"]({router:$e,render:function(e){return e(l)}}).$mount("#app")},"5b5f":function(e,t,n){"use strict";var a=n("227b"),s=n.n(a);s.a},"5c18":function(e,t,n){"use strict";var a=n("d0e0"),s=n.n(a);s.a},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("5c48"),s=n.n(a);s.a},"865d":function(e,t,n){},"9adf":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d0e0:function(e,t,n){},d920:function(e,t,n){},da61:function(e,t,n){"use strict";var a=n("4107"),s=n.n(a);s.a},e212:function(e,t,n){"use strict";var a=n("865d"),s=n.n(a);s.a}});
//# sourceMappingURL=app.5c193cb7.js.map