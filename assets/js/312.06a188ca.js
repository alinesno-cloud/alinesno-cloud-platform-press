(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{541:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"日志处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志处理"}},[t._v("#")]),t._v(" 日志处理")]),t._v(" "),a("p",[t._v("相对来说，一个工程基础的用户、权限、菜单等基础的功能都是固定的，开发只需要根据需求开发相当的业务系统即可，\n并不需要关注太多，所以此平台对于开发来说，只需要一个所开发的应用账号权限即可")]),t._v(" "),a("h3",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("服务日志配置,一般此应用于小型项目中,大小型项目不太建议")]),t._v(" "),a("li",[t._v("分布式日志配置,一般此应用于大中型项目当中，小型项目不太建议")])]),t._v(" "),a("h3",{attrs:{id:"日志集成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志集成方式"}},[t._v("#")]),t._v(" 日志集成方式")]),t._v(" "),a("h4",{attrs:{id:"服务日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务日志配置"}},[t._v("#")]),t._v(" 服务日志配置")]),t._v(" "),a("p",[t._v("此为单个应用日志配置，默认的日志配置如下，日志保存在当前用户"),a("code",[t._v("alinesno-running-log")]),t._v("目录下，且日志名称为应用名称,默认保存天数\n为 30 天")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user.home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/alinesno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("log/$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".log\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" info\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("com.alinesno.cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n")])])]),a("p",[t._v("添加用户操作日志，在 controller 方法上添加注解"),a("code",[t._v("Accountrecord")]),t._v("，记录用户操作日志，如:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AccountRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RecordType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACCESS_ADD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FormToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" model "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在操作记录中查询即可，如:")]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"/images/kibana_02.png",width:"100%"}})]),t._v(" "),a("h4",{attrs:{id:"分布式日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式日志配置"}},[t._v("#")]),t._v(" 分布式日志配置")]),t._v(" "),a("blockquote",[a("p",[t._v("暂时不推荐(切换到 kafka 当中)，以下方案暂时丢弃")])]),t._v(" "),a("p",[t._v("采用分布式日志前置条件:")]),t._v(" "),a("ul",[a("li",[t._v("配置 elk 系统")]),t._v(" "),a("li",[t._v("在 logback-spring.xml 中配置好 logstash 的 IP 配置")])]),t._v(" "),a("p",[t._v("当前的分布式日志采用"),a("code",[t._v("elk")]),t._v("采集，整个结构日志结构如下:")]),t._v(" "),a("blockquote",[a("p",[t._v("图后补")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("Spring boot -> logback -> Tcp/IP -> logstash -> elasticsearch\n")])])]),a("p",[t._v("应用系统添加日志依赖包:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alinesno.cloud.monitor.agent"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-monitor-agent"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0-SNAPSHOT"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("应用启动过程中，会自动将日志发到对应的 elk 系统中，在 elk 系统查看,如图:")]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"/images/kibana_01.jpeg",width:"100%"}})]),t._v(" "),a("p",[t._v("此处日志配置完成")])])}],!1,null,null,null);a.default=e.exports}}]);