(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{865:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"dubbo-服务本地断点调试方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-服务本地断点调试方法"}},[t._v("#")]),t._v(" dubbo 服务本地断点调试方法")]),t._v(" "),e("p",[t._v("前提：本地工作空间引入 dubbo 中心的源码（项目），启动本地的服务")]),t._v(" "),e("h2",{attrs:{id:"三种方法可选："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种方法可选："}},[t._v("#")]),t._v(" 三种方法可选：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("停止同一个服务版本的其他提供者，启动本地的提供者服务（在多人开发时，不适用）")])]),t._v(" "),e("li",[e("p",[t._v("在消费者.xml 里对应的服务的里面加入属性")])])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v('url="dubbo://localhost:19604"\n')])])]),e("p",[t._v("启动本地提供者，即可实现 dubbo 直连，调试本地程序（不推荐，修改麻烦）；")]),t._v(" "),e("p",[t._v("3.（推荐）在当前登录用户下面加入"),e("code",[t._v("dubbo-resolve.properties")]),t._v("文件，内容指定要调试的服务，格式如下")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("com.alinesno.cloud.base.boot.service.DemoService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("dubbo://localhost:19604")]),t._v("\n")])])]),e("p",[t._v("之后启动本地服务即可；")])])}],!1,null,null,null);a.default=r.exports}}]);