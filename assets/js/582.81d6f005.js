(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{808:function(t,s,v){"use strict";v.r(s);var _=v(0),a=Object(_.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"微服务技术解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务技术解决方案"}},[t._v("#")]),t._v(" 微服务技术解决方案")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("微服务具有针对特定服务发布，影响小，风险小，成本低；满足快速发布需求；低成本扩容，弹性伸缩，适应云环境的特性，这些都是单体系统所难以做到的")]),t._v(" "),v("h2",{attrs:{id:"用户场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户场景"}},[t._v("#")]),t._v(" 用户场景")]),t._v(" "),v("p",[v("strong",[t._v("代码修改越来越困难")]),t._v("\n对单体应用随来说，着功能的增加，应用逐步成长并变得巨大起来，代码也会越来越多。过个几年你会发现那个简单的小小的应用居然变成一个巨大的单体怪物，从而使得代码的修改更加困难，并且随着功能的增加，这种情况也越来越严重")]),t._v(" "),v("p",[v("strong",[t._v("部署成本高，快速交付困难")]),t._v("\n随着应用规模的增大，部署也越来越困难，现在 SaaS 应用的宗旨是如果有改动能够每天部署多次。这里一方面是无论是修改应用 1 行代码，还是 10 行代码，都要全量替换；二是是应用规模的增大会导致应用启动越来越慢，对于开发来说很不友好，因为他们每次启动都要等上一段时间，而且启动慢也影响部署时应用的发布速度，")]),t._v(" "),v("p",[v("strong",[t._v("改动影响大，风险高，难以快速交付")]),t._v("\n应用规模变大，应用越来越难理解，改动的影响也越来越大，为保证系统稳定，即使改动再小都需要大量测试去保证，也就是不论代码改动多小，成本都相同；另外就是由于应用中所有的模块都跑在同一进程之中，这样某一模块中的 bug 可能会到整个应用不可用，比如某个模块出现 bug 导致内存泄漏，这是有可能拖垮整个应用的！更重要的是，因为负载均衡后面的所有的应用是一样的，bug 还会影响整个负载体系的可用性。因为成本高，风险高，所以导致部署频率低")]),t._v(" "),v("p",[v("strong",[t._v("难以拥抱新框架")]),t._v("\n应用代码太多了，导致要更改应用的框架会耗费大量的时间去改造，这样就导致即使知道新框架更好也往往只能干看着")]),t._v(" "),v("h2",{attrs:{id:"痛点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#痛点"}},[t._v("#")]),t._v(" 痛点")]),t._v(" "),v("p",[v("strong",[t._v("分布式系统的复杂性")]),t._v("\n系统应用由原来的单体变成几十到几百个不同的工程，要去考虑包括服务间的依赖，服务如何拆分，内部接口规范，服务之间如何交互等等问题，并且由多个单体系统抽象出各个服务，要对各个服务边界很清晰，也要清晰服务与服务之间的关联，尤其是服务拆分，需要团队熟悉业务流程，懂得取舍，要保证拆分的粒度服务既符合“高内聚，低耦合”的基本原则，还要兼顾业务的发展以及公司的愿景，要还要说服团队成员为之努力，并且积极投入，在多方中间取得平衡")]),t._v(" "),v("p",[v("strong",[t._v("部署，测试和监控变得困难")]),t._v("\n原先的一个应用拆分为几十个甚至上百个服务，这让对系统的变得更为麻烦，想想就知道，要对几十上百的服务进行发布管理，测试，监控无疑比原来单体应用时要麻烦得多，这中间要用到大量的中间件来支撑，而且中间件本身也是要维护的，原先单体应用很简单的事务问题 ，转到分布式环境就变得很复杂")]),t._v(" "),v("p",[v("strong",[t._v("分布式事务和 CAP 的相关问题")]),t._v("\n分布式事务是采用简单的重试+补偿机制，还是采用二阶段提交协议等强一致性方法来解决，还要取决对业务场景的熟悉加上反复的权衡，相同问题还包括对 CAP 模型的权衡，总之微服务对团队整体的技术栈水平整体要求更高")]),t._v(" "),v("p",[v("strong",[t._v("持续集成、持续发布规范设置")]),t._v("\n拆分成多服务也要求代码结构有相似性，命名也要有规范，不然对开发很不友好，这个这样项目结构，这样命名，那个那样项目结构，那样命名，开发要先发力气去搞清这些东西，另外就是构建时，如果没规划好项目结构，导致要根据每个任务写相应的任务配置，几个任务还好，任务一多就不好管理，并且新入运维也不好接替工作，因为他需要一个一个去看这些任务配置\n另一个就是版本管理规范，对于一个项目而言，这个开一个分支，哪个开一个分支，分支多了，别人不好接替，亦或是提交信息千奇百怪，别人看更改也看得辛苦，让代码基线显得很混乱，想象一下当成十上百的服务项目是这样会怎样\nDevOps 要求开发最好要懂点运维知识，但是要求每个开发熟悉 k8s 配置那是很困难的，因此没有规范 k8s 发布配置的话，会导致有些开发想改配置也会有些无从下手，不得不去找运维，浪费了一大笔时间")]),t._v(" "),v("h2",{attrs:{id:"方案优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案优势"}},[t._v("#")]),t._v(" 方案优势")]),t._v(" "),v("p",[v("strong",[t._v("明确的服务边界")]),t._v("\n业务服务和基础服务以及数据服务被明确划分开来，上层可以调用下层，下层要通过消息获取上层消息，划分明确，各自职责划分明确，各个服务功能单一纯粹，服务与服务之间也划分明确。这些使得整个系统十分易于改造")]),t._v(" "),v("p",[v("strong",[t._v("服务对接")]),t._v("\n采用接口 http 调用方式使得服务互相关联，消除服务与服务的粘连，其他模块停止也不会相互影响；方便业务中台和数据中台的数据对接；十分方便开发人员维护各自服务，也让各个服务的沉淀变得轻松；也增强了应用的健壮性")]),t._v(" "),v("p",[v("strong",[t._v("一整套的 DevOps 体系")]),t._v("\n采用 git 做版本管理工具，方便且高效，jenkins 做项目构建与发布，一次配置，持续使用，docker 作为容器引擎，k8s 做容器编排工具，做到安全高效部署应用，将服务以容器化部署，也能保证服务稳定。整个的 git,代码仓库（gitlab,gitea 等等，看企业自己的选择），jenkins,docker,k8s 完成持续集成与持续发布工作")]),t._v(" "),v("p",[v("strong",[t._v("完备的持续集成，持续发布规范")]),t._v("\n有完备持续集成规范，代码分支有相应命名规范，代码提交有相应的提交信息规范，使得代码基线清晰明了，也能很轻松知道别人改了什么；规范化的代码结构可以让 jenkins 任务配置得以按同一模板来配置，使得 jenkins 配置更为简便，减少了运维工作量，也让新入员工能更快接手工作\n每个项目都按 k8s 的发布配置模板进行发布配置，能让开发人员只需要知道配置文件的环境变量在哪设置，使得 devops 流程更加顺畅，同时也使得开发人员不需要对 k8s 的技术栈很深")]),t._v(" "),v("p",[v("strong",[t._v("流行框架，易于上手")]),t._v("\n采用市面最流行框架，文档众多，改造方便，易于上手，开发人员接手方便。")]),t._v(" "),v("h2",{attrs:{id:"方案架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案架构"}},[t._v("#")]),t._v(" 方案架构")]),t._v(" "),v("p",[t._v("待补充")]),t._v(" "),v("h2",{attrs:{id:"推荐产品"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#推荐产品"}},[t._v("#")]),t._v(" 推荐产品")]),t._v(" "),v("p",[t._v("无")])])}],!1,null,null,null);s.default=a.exports}}]);