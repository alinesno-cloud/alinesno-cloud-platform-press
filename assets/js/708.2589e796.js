(window.webpackJsonp=window.webpackJsonp||[]).push([[708],{936:function(t,_,v){"use strict";v.r(_);var e=v(0),a=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,_=t._self._c;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"生成器使用说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成器使用说明"}},[t._v("#")]),t._v(" 生成器使用说明")]),t._v(" "),_("h2",{attrs:{id:"什么是-alinesno-init"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-alinesno-init"}},[t._v("#")]),t._v(" 什么是 alinesno-init")]),t._v(" "),_("p",[t._v("团队基于 spring boot 孵化了一套 alinesno-init 脚手架，可以快速完成新服务代码框架的搭建。目的是让项目平台所有创建的服务都是基于同一套框架和代码结构，统一风格和技术路线，避免后期升级等困难。")]),t._v(" "),_("h2",{attrs:{id:"为什么使用-alinesno-init"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-alinesno-init"}},[t._v("#")]),t._v(" 为什么使用 alinesno-init")]),t._v(" "),_("ol",[_("li",[t._v("通过 alinesno-init 脚手架生成的项目代码，能帮开发者准备好开发的前期工作，让开发更加迅速，不用在前期配置上花费时间，降低框架学习成本，让开发者更加专注于业务逻辑开发。")]),t._v(" "),_("li",[t._v("通过集成基础平台组件以及数据支撑类组件，行业公共能力组件，为应用的开发提供底座能力赋能。")]),t._v(" "),_("li",[t._v("低代码生成器通过使用自动化生成的平台，集成多种环境配置，主要针对复杂场景的使用，简单场景的使用，")]),t._v(" "),_("li",[t._v("构建针对于微服务平台框架，进行整体的说明")])]),t._v(" "),_("h2",{attrs:{id:"开发规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),_("p",[t._v("我们的产品研发主要是使用 java，因此参考了团队推出的 java 开发规范，截取了特别重要的部分进行重点强调，根据项目实际情况可以增加内容，把一些通用的问题提取出来，增强大家的认识。")]),t._v(" "),_("h2",{attrs:{id:"项目模块规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目模块规划"}},[t._v("#")]),t._v(" 项目模块规划")]),t._v(" "),_("p",[t._v("使用 alinesno-init 进行二次开发，按业务模块进一步划分如下:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",[t._v("模块")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-parent")]),t._v(" "),_("td",[t._v("公共父类定义")]),t._v(" "),_("td",[t._v("这里主要定义版本号和其它自定义配置")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-api")]),t._v(" "),_("td",[t._v("对外 api 接口")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-starter")]),t._v(" "),_("td",[t._v("核心业务")]),t._v(" "),_("td",[t._v("此为业务价值的最终能力沉淀，后期新版本会调整成 doamin 后缀")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-gateway")]),t._v(" "),_("td",[t._v("对外接口")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-ui")]),t._v(" "),_("td",[t._v("前端工程")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-boot")]),t._v(" "),_("td",[t._v("工程启动包")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-consumer")]),t._v(" "),_("td",[t._v("对外引用服务")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-provider")]),t._v(" "),_("td",[t._v("对外提供服务")]),t._v(" "),_("td",[t._v("根据业务情况自定义建设")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-common")]),t._v(" "),_("td",[t._v("服务公共包")]),t._v(" "),_("td",[t._v("根据业务情况自定义建设")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),_("td",[t._v("alinesno-cloud-demo-[模块名]")]),t._v(" "),_("td",[t._v("新业务能力补丁包")]),t._v(" "),_("td",[t._v("根据业务情况自定义建设")])])])]),t._v(" "),_("p",[t._v("这里对外提供服务包"),_("code",[t._v("provider")]),t._v("，类似于 sdk 单独业务情况建设，是基于职责划分考虑，\n这里定义第三方引用属于第三方职责，提供出来的 sdk 包属于为第三方服务范围，组件的职责是做好业务中台能力，\n具体由团队根据自己情况定义")]),t._v(" "),_("h2",{attrs:{id:"功能模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能模块"}},[t._v("#")]),t._v(" 功能模块")]),t._v(" "),_("blockquote",[_("p",[t._v("主要针对于低代码生成器平台的功能权限处理")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",[t._v("模块")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("状态")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",[t._v("01_低代码生成")]),t._v(" "),_("td",[t._v("描述整体自生成的服务能力")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",[t._v("02_工程脚手架构生成")]),t._v(" "),_("td",[t._v("介绍自动生成的工程结构")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",[t._v("02_前端代码生成")]),t._v(" "),_("td",[t._v("介绍生成的前端结构和思路")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",[t._v("04_自动发布集成")]),t._v(" "),_("td",[t._v("集成多种发布方式")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),_("td",[t._v("07_权限用户集成")]),t._v(" "),_("td",[t._v("默认集成资源引擎服务")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),_("td",[t._v("08_微服务集成")]),t._v(" "),_("td",[t._v("多种场景微服务引用")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),_("td",[t._v("09_容器化集成")]),t._v(" "),_("td",[t._v("容器化配置和打包上传方式")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),_("td",[t._v("10_通用 CURD 集成")]),t._v(" "),_("td",[t._v("接口默认集成的接口")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),_("td",[t._v("11_示例代码集成")]),t._v(" "),_("td",[t._v("一些基础示例和典型例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),_("td",[t._v("12_JWT 集成")]),t._v(" "),_("td",[t._v("登陆认证的处理思路和方式")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完成")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),_("td",[t._v("13_版本管理集成")]),t._v(" "),_("td",[t._v("工程版本管理的实践和注意点")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("梳理中")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),_("td",[t._v("14_分布式存储集成")]),t._v(" "),_("td",[t._v("集成基础服务说明")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),_("ul",[_("li",[t._v("无")])])])}],!1,null,null,null);_.default=a.exports}}]);