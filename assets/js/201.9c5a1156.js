(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{423:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("导入基线工程至 Eclipse")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("启动服务即可")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),a("p",[t._v("关于 enable 工程不在此处介绍，请看开发文档"),a("a",{attrs:{href:"http://gitbook.linesno.com/linesno-cloud-service/_book/00_learn/03_%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86.html",title:"应用管理",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义 enable 服务"),a("OutboundLink")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"建立服务工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立服务工程"}},[this._v("#")]),this._v(" 建立服务工程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("此处略")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"服务工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务工程"}},[this._v("#")]),this._v(" 服务工程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("复制代码进入工程，删除"),s("code",[this._v("controller/feign/pages")]),this._v("目录,调整 application-dev.yml 配置，按规范调整端口，\n然后直接启动工程验证,如图:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/dev_05.png",width:"100%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"对外接口工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对外接口工程"}},[this._v("#")]),this._v(" 对外接口工程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("复制"),s("code",[this._v("feign")]),this._v("目录 代码进入工程，如图:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/dev_06.png",width:"100%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对 pom.xml 文件说明，feign 对外接口 pom.xml 只需要,依赖一个 jar 包即可,同时调整"),s("code",[this._v("artifactId")]),this._v(",具体请看上图")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- alinesno_service_start --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alinesno.cloud.common.facade"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-common-facade"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0-SNAPSHOT"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- alinesno_service_end --\x3e")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);