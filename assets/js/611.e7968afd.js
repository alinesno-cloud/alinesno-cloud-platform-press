(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{837:function(e,s,t){"use strict";t.r(s);var n=t(0),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("工程依赖于六边型思想，整合当前的项目工程结构特点，进行的规划和划分，以下为整体工程的规划架构：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/technique/service01.jpg")}}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"服务工程的命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务工程的命名规范"}},[this._v("#")]),this._v(" 服务工程的命名规范")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[this._v("#")]),this._v(" 概述")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"工程命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工程命名规范"}},[this._v("#")]),this._v(" 工程命名规范")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("工程结构清晰，统一采用"),t("code",[e._v("alinesno+工程性质+业务")]),e._v('命名，中间采用"-"连接，如')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alinesno-cloud-base-notice-consumer          // 对外引用\nalinesno-cloud-base-notice-domain            // 业务领域\nalinesno-cloud-base-notice-application       // 管理应用\nalinesno-cloud-base-notice-provider          // 对外接口\nalinesno-cloud-base-notice-provider-api      // 对外SDK\nalinesno-cloud-base-notice-start             // 启动包(配置)\n")])])])]),e._v(" "),t("li",[t("p",[e._v("统一采用英文命名，禁止使用拼音代表含义，每个英文单词不超过 10 个字母；")])]),e._v(" "),t("li",[t("p",[e._v("工程命名统一采用小写字母，禁止使用大字字母；")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"工程包的命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工程包的命名规范"}},[this._v("#")]),this._v(" 工程包的命名规范")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("工程包命名统一采用小写字母，禁止使用大字字母；")])]),e._v(" "),t("li",[t("p",[e._v("工程包统一使用前缀"),t("code",[e._v("com.alinesno.cloud")]),e._v("；")])]),e._v(" "),t("li",[t("p",[e._v("工程包命名规范定义为"),t("code",[e._v("前缀+工程性质+业务")]),e._v(',服务名称单词连接使用"."代替"-",例如：')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("com.alinesno.cloud.base.notice        // 基础日志包\ncom.alinesno.cloud.business.cms     // cms业务服务包\n")])])])]),e._v(" "),t("li",[t("p",[e._v("工程模块包命名规范定义如下,以消息服务(alinesno-base-logs)为例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("com.alinesno.cloud.base.notice.entity      // 持久层对象包\ncom.alinesno.cloud.base.notice.repository  // 持久层包\ncom.alinesno.cloud.base.notice.bean        // 实体类包\ncom.alinesno.cloud.base.notice.provider    // 对外提供接口\ncom.alinesno.cloud.base.notice.service     // 服务包\ncom.alinesno.cloud.base.notice.emnus       // 枚举包\ncom.alinesno.cloud.base.notice.constants   // 常量包\ncom.alinesno.cloud.base.notice.utils       // 工具包\ncom.alinesno.cloud.base.notice.exception   // 异常包\n")])])])]),e._v(" "),t("li",[t("p",[e._v("每个服务工程下必须添加"),t("code",[e._v("README.md")]),e._v("文件作为工程说明.")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"实体类规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实体类规范"}},[this._v("#")]),this._v(" 实体类规范")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("类命名统一驼峰形式，禁止使用中文拼音缩写，每个单词长度不能超过 10 个字母；")])]),e._v(" "),t("li",[t("p",[e._v("类命名统一使用模块名称做为后缀，如"),t("code",[e._v("LogsErrorEntity")]),e._v(",则为持久层对象；")])]),e._v(" "),t("li",[t("p",[e._v("类在每个包模块包命名规范定义如下,以消息服务(alinesno-base-message)为例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("com.alinesno.cloud.base.notice.entity.LogsErrorEntity                   // 持久层对象以`Entity`结尾\ncom.alinesno.cloud.base.notice.repository.LogsErrorRepository           // 持久层操作以`Repository`结尾\ncom.alinesno.cloud.base.notice.repository.impl.LogsErrorRepositoryImpl  // 持久层实现操作以`RepositoryImpl`结尾\ncom.alinesno.cloud.base.notice.bean.LogsErrorBean                       // 实体类对象以`Bean`结尾\ncom.alinesno.cloud.base.notice.service.LogsErrorService                 // 服务以`Service`结尾\ncom.alinesno.cloud.base.notice.service.impl.LogsErrorServiceImpl        // 服务实现以`ServiceImpl`结尾\ncom.alinesno.cloud.base.notice.emnus.LogsErrorEmnus                     // 枚举对象只放在Emnus对象中，工程中唯一枚举对象，以`工程名+Emnus` 命名\ncom.alinesno.cloud.base.notice.constants.LogsErrorConstants             // 常量只放在一个constants对象中，工程中唯一常量对象,以`工程名+Constants`命名\ncom.alinesno.cloud.base.notice.comstants.LogsConstants                  // 自定义异常类以`工程名+异常性质+Exception`命名\ncom.alinesno.cloud.base.notice.utils.LogsErrorUtils                     // 工具只放在utils对象中，工程中唯一工具对象，以`工程名+Utils`命名\ncom.alinesno.cloud.base.notice.exception.LogsErrorException             // 自定义异常类以`工程名+异常性质+Exception`命名\ncom.alinesno.cloud.base.notice.exception.LogsException                  // 自定义全局异常类以`工程名+异常性质+Exception`命名\n")])])])]),e._v(" "),t("li",[t("p",[e._v("枚举对象(emnus)、常量对象(constants)和工具对象(utils)包含有能用方法需做提取出来放于核心工程包中。")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"基类规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基类规范"}},[this._v("#")]),this._v(" 基类规范")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("持久层对象继承基类"),t("code",[e._v("BaseEntity")]),e._v(",例如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class LogsErrorEntity extends BaseEntity{}\n")])])])]),e._v(" "),t("li",[t("p",[e._v("持久层操作继承基类"),t("code",[e._v("IBaseRepository")]),e._v(",例如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("interface LogsErrorRepository extends IBaseRepository<DemoEntitLogsErrorEntity , String>\n")])])])]),e._v(" "),t("li",[t("p",[e._v("实体类对象继承基类"),t("code",[e._v("BaseBean")]),e._v(",例如 ：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class LogsErrorBean extends BaseBean{}\n")])])])]),e._v(" "),t("li",[t("p",[e._v("业务服务类继承基类"),t("code",[e._v("BaseService")]),e._v(",例如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class LogsErrorService extends BaseService{}\n")])])])]),e._v(" "),t("li",[t("p",[e._v("异常类继承基类"),t("code",[e._v("BaseException")]),e._v(",例如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class LogsErrorException extends BaseException{}\n")])])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("每个工程的启动类统一放置于"),s("code",[this._v("工程包")]),this._v("下，类名统一名称"),s("code",[this._v("LinesnoApplication")]),this._v(":"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("com.alinesno.cloud.base.logs.LinesnoApplication // 基础日志包启动类\n")])])])])])}],!1,null,null,null);s.default=a.exports}}]);