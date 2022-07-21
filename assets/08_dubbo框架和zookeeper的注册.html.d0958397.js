import{_ as s,o as i,c as t,a as e,e as a,b as o,d as n,r as l}from"./app.2bc6ad52.js";var p="/firstlearn/dubbo/120.png",c="/firstlearn/dubbo/121.png",d="/firstlearn/dubbo/122.png",h="/firstlearn/dubbo/123.png",_="/firstlearn/dubbo/124.png",b="/firstlearn/dubbo/125.png",u="/firstlearn/dubbo/126.png",m="/firstlearn/dubbo/127.png",g="/firstlearn/dubbo/128.png",f="/firstlearn/dubbo/129.png";const k={},w=e("h1",{id:"dubbo-\u6846\u67B6\u548C-zookeeper-\u7684\u6CE8\u518C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dubbo-\u6846\u67B6\u548C-zookeeper-\u7684\u6CE8\u518C","aria-hidden":"true"},"#"),o(" dubbo \u6846\u67B6\u548C zookeeper \u7684\u6CE8\u518C")],-1),v=o("\u53C2\u8003\u8D44\u6599\uFF1Adubbo \u5B98\u7F51\uFF1A"),z={href:"http://dubbo.apache.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},x=o("http://dubbo.apache.org/zh-cn/"),j=o("dubbo \u5B66\u4E60\u7F51\u5740\uFF1A"),N={href:"https://github.com/apache/incubator-dubbo",target:"_blank",rel:"noopener noreferrer"},V=o("https://github.com/apache/incubator-dubbo"),X=n('<h3 id="\u9879\u76EE\u7684\u642D\u5EFA\u548C\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7684\u642D\u5EFA\u548C\u8FD0\u884C" aria-hidden="true">#</a> \u9879\u76EE\u7684\u642D\u5EFA\u548C\u8FD0\u884C</h3><p>\u9879\u76EE\u642D\u8D77\u6765\u4E4B\u540E\uFF0C\u8FD0\u884C application \u6587\u4EF6\uFF08\u5148\u8FD0\u884C provider \u9879\u76EE\uFF0C\u518D\u8FD0\u884C consumer \u9879\u76EE\uFF09\uFF1B</p><p class="show-images"><img src="'+p+'" width="%60"></p><h3 id="zookeeper-\u5B89\u88C5\u548C\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#zookeeper-\u5B89\u88C5\u548C\u6CE8\u518C" aria-hidden="true">#</a> Zookeeper \u5B89\u88C5\u548C\u6CE8\u518C\uFF1A</h3><ul><li>\u8FDB\u5165\u5B89\u88C5\u5305\u7684 conf \u6587\u4EF6\u4E2D\uFF0C\u590D\u5236 zoo_sample.cfg \u6587\u4EF6\uFF0C\u7C98\u8D34\u5230\u540C\u4E2A\u6587\u4EF6\u5939\u91CC\uFF0C\u91CD\u547D\u540D\u4E3A zoo.cfg</li></ul><p class="show-images"><img src="'+c+'" width="%60"></p><ul><li>\u6253\u5F00\u5E76\u76EE\u5F55\uFF0C\u53CC\u51FB\uFF1AzkServer.cmd\uFF0C\u6253\u5F00\u6267\u884C\u547D\u4EE4\u7684\u7A97\u53E3\uFF0C</li></ul><p class="show-images"><img src="'+d+'" width="%60"></p><p>\u6267\u884C dubbo-admin-0.1.jar \u5305\uFF1A\u5728\u6267\u884C\u7A97\u53E3\u901A\u8FC7\u547D\u4EE4\u8FDB\u5165\u5230 jar \u5305\u5728\u672C\u5730\u7684\u5B58\u653E\u4F4D\u7F6E\uFF0C\u8FD0\u884C\u6267\u884C\u547D\u4EE4\uFF1Ajava -jar dubbo-admin-xxxx\uFF1B</p><p class="show-images"><img src="'+h+'" width="%60"></p><ul><li>\u6267\u884C\u6210\u529F\u4E4B\u540E\uFF0C\u67E5\u770B tomcat \u7684\u7AEF\u53E3\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\uFF1Ahttp://localhost\uFF1AXXXX\u56DE\u8F66\uFF0C\u5373\u53EF\u8FDB\u5165dubbo\u5E94\u7528\u7684\u9996\u9875\u3002</li></ul><p class="show-images"><img src="'+_+'" width="%60"></p><p class="show-images"><img src="'+b+'" width="%60"></p><h3 id="\u5982\u4F55\u5728-zk-\u4E0A\u6CE8\u518C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728-zk-\u4E0A\u6CE8\u518C\u670D\u52A1" aria-hidden="true">#</a> \u5982\u4F55\u5728 zk \u4E0A\u6CE8\u518C\u670D\u52A1\uFF1F</h3><ul><li>\u5728 application \u6587\u4EF6\u4E2D\u5F55\u5165 zk \u6CE8\u518C\u7684\u4EE3\u7801\uFF1A</li></ul><p class="show-images"><img src="'+u+'" width="%60"></p><ul><li>\u6267\u884C\u8BE5 application\uFF0C\u6267\u884C\u6210\u529F\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u670D\u52A1\u5C31\u4F1A\u663E\u793A\u5728 zookeeper \u4E0A\u9762</li></ul><p class="show-images"><img src="'+m+'" width="%60"></p><ul><li>\u5982\u679C\u6709\u6D88\u8D39\u8005\u8C03\u7528\u4E0A\u9762\u8FD9\u4E2A\u63D0\u4F9B\u8005\u7684\u670D\u52A1\uFF0C\u53EF\u662F\u901A\u8FC7\u67E5\u770B\u8BE5\u63D0\u4F9B\u8005\u7684\u8BE6\u60C5\u67E5\u770B</li></ul><p class="show-images"><img src="'+g+'" width="%60"></p><p class="show-images"><img src="'+f+'" width="%60"></p>',21);function B(E,I){const r=l("ExternalLinkIcon");return i(),t("div",null,[w,e("ul",null,[e("li",null,[v,e("a",z,[x,a(r)])]),e("li",null,[j,e("a",N,[V,a(r)])])]),X])}var S=s(k,[["render",B],["__file","08_dubbo\u6846\u67B6\u548Czookeeper\u7684\u6CE8\u518C.html.vue"]]);export{S as default};
