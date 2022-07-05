(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{812:function(v,_,t){"use strict";t.r(_);var s=t(0),n=Object(s.a)({},(function(){this._self._c;return this._m(0)}),[function(){var v=this,_=v._self._c;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"云原生云平台解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#云原生云平台解决方案"}},[v._v("#")]),v._v(" 云原生云平台解决方案")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("云原生指设计之初就是为了上云，云平台指的是云计算三层架构中的 PaaS，合起来即是为上云而设计的 paas 平台\n云原生云平台能实现，微服务化系统，持续集成，持续部署，服务热更新，采用容器化部署和容器编排能保证容器稳定运作，实现快速且稳定地变更代码，更新服务，从而快速实现新需求或变更的需求\n由于包括云原生和云平台两方面，该文也会从这两方面考虑用户场景和痛点")]),v._v(" "),_("h2",{attrs:{id:"用户场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户场景"}},[v._v("#")]),v._v(" 用户场景")]),v._v(" "),_("p",[_("strong",[v._v("重复开发")]),v._v("\n各个系统独自开发，每次新系统都要重新建设系统，然而这些系统之间却往往存在类似的模块，这就造成每次都要写类似的模块，造成重复开发")]),v._v(" "),_("p",[_("strong",[v._v("多模块单体项目维护困难")]),v._v("\n随着模块的增加，单体项目的修改发布也会变得越来越困难，而当新员工要接手这个项目时也会变得也来越困难，甚至不知道该从何下手")]),v._v(" "),_("p",[_("strong",[v._v("各团队之间缺少沟通")]),v._v("\n公司各个团队维护自己的 it 线，开发运维发布各管各的，重复严重，难以做到有效的沉淀")]),v._v(" "),_("p",[_("strong",[v._v("持续集成，快速动态更新")]),v._v("\n功能增加及变更越来越频繁，需要有一个代码持续集成，快速构建发布的手段，且要支持动态更新服务，避免用不上服务")]),v._v(" "),_("p",[_("strong",[v._v("可伸缩服务")]),v._v("\n客户访问有往往个高峰时段，特别对于电商应用，像活动日这些日子，往往是用户访问高峰期，这时候就要更多服务用于支撑业务，而平时访问流量不高，服务数可适量降低，这就需要服务的可动态伸缩")]),v._v(" "),_("p",[_("strong",[v._v("稳定性及健壮性保证")]),v._v("\n类似电商系统这种商务系统对系统稳定性和健壮性要求很高，并且出现问题要及时发现问题并进行解决和更新，并且要尽量保证不会因单个服务出现问题而影响全部服务，而且要做到服务修改不会导致因系统不适配原因出现异常")]),v._v(" "),_("h2",{attrs:{id:"痛点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#痛点"}},[v._v("#")]),v._v(" 痛点")]),v._v(" "),_("p",[_("strong",[v._v("边界界定")]),v._v("\n搭建云平台，要将公共基础服务抽离出来要对代码中的基础模块熟悉，还要明确和基础服务和数据服务及业务服务的边界")]),v._v(" "),_("p",[_("strong",[v._v("服务划分")]),v._v("\n由多个单体系统抽象出公共服务，要找到公共模块的共性，解决各个系统在公共模块上的独特要求；而且原先由于是单体应用，模块之间通信方式容易解决，但分出公共服务时则要考虑通信问题，接口调用方式以及网络架构。")]),v._v(" "),_("p",[_("strong",[v._v("代码改造")]),v._v("\n拆分自然意味着要将原先代码进行改造，公共部分要从各个系统中提取出共性，各个系统的非公部分也要考虑如何对接公共部分，特别对于一些老旧系统是一个大的挑战，并且拆分成多服务也要求代码结构有相似性，命名也要有规范，不然对开发很不友好，这个这样项目结构，这样命名，那个那样项目结构，那样命名，开发要先发力气去搞清这些东西")]),v._v(" "),_("p",[_("strong",[v._v("持续集成规范")]),v._v("\n代码发布混乱，这个开一个分支，哪个开一个分支，分支多了，别人不好接替，亦或是提交信息千奇百怪，别人看更改也看得辛苦，让代码基线显得很混乱，而如果将各个服务代码分模块放一起，那这个问题更甚")]),v._v(" "),_("p",[_("strong",[v._v("jenkins 配置")]),v._v("\n使用 jenkins 发布时，由于没规划好项目结构，导致要根据每个任务写相应的任务配置，几个任务还好，任务一多就不好管理，并且新入运维也不好接替工作，因为他需要一个一个去看这些任务配置")]),v._v(" "),_("p",[_("strong",[v._v("发布配置")]),v._v("\nDevOps 要求开发最好要懂点运维知识，但是要求每个开发熟悉 k8s 配置那是很困难的，因此没有规范 k8s 发布配置的话，会导致有些开发想改配置也会有些无从下手，不得不去找运维，浪费了一大笔时间")]),v._v(" "),_("p",[_("strong",[v._v("多服务混乱")]),v._v("\n业务服务和基础服务粘连在一起，调用混乱，难以分割，互相之间关系混乱，甚至服务分离不彻底，有的服务还包含其他服务，不能做到保证服务的纯粹")]),v._v(" "),_("h2",{attrs:{id:"方案优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方案优势"}},[v._v("#")]),v._v(" 方案优势")]),v._v(" "),_("p",[_("strong",[v._v("明确的服务边界")]),v._v("\n业务服务和基础服务以及数据服务被明确划分开来，上层可以调用下层，下层要通过消息获取上层消息，划分明确，各自职责划分明确")]),v._v(" "),_("p",[_("strong",[v._v("集成常用服务")]),v._v("\n业务中台已经集成常用服务，各个服务功能单一纯粹，方便改造；服务调用方便，要接入这些服务轻松方便")]),v._v(" "),_("p",[_("strong",[v._v("分布式服务架构方式")]),v._v("\n采用微服务架构方式建构中台服务，各服务分隔开来；采用接口 http 调用方式互相关联，消除服务与服务的粘连，其他模块停止也不会相互影响；十分方便开发人员维护各自服务，也让各个服务的沉淀变得轻松；也增强了应用的健壮性")]),v._v(" "),_("p",[_("strong",[v._v("完备的持续集成规范")]),v._v("\n有完备持续集成规范。代码分支有相应命名规范，代码提交有相应的提交信息规范，使得代码基线清晰明了，也能很轻松知道别人改了什么")]),v._v(" "),_("p",[_("strong",[v._v("规范化的代码结构")]),v._v("\n规范化的代码结构可以让 jenkins 任务配置得以按同一模板来配置，使得 jenkins 配置更为简便，减少了运维工作量，也让新入员工能更快接手工作")]),v._v(" "),_("p",[_("strong",[v._v("k8s 发布配置模板")]),v._v("\nk8s 的发布配置模板能让开发人员只需要知道配置文件的环境变量在哪设置，使得 devops 流程更加顺畅，同时也使得开发人员不需要对 k8s 多熟悉")]),v._v(" "),_("h2",{attrs:{id:"方案架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方案架构"}},[v._v("#")]),v._v(" 方案架构")]),v._v(" "),_("p",[v._v("待补充")]),v._v(" "),_("h2",{attrs:{id:"推荐产品"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#推荐产品"}},[v._v("#")]),v._v(" 推荐产品")]),v._v(" "),_("p",[v._v("无")])])}],!1,null,null,null);_.default=n.exports}}]);