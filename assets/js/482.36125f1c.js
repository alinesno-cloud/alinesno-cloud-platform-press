(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{707:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"kafka-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-安装"}},[a._v("#")]),a._v(" kafka 安装")]),a._v(" "),t("h2",{attrs:{id:"本内容你将获得"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[a._v("#")]),a._v(" 本内容你将获得")]),a._v(" "),t("ul",[t("li",[a._v("如何在 centos7 服务器上安装 kafka")])]),a._v(" "),t("h2",{attrs:{id:"kafka-安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-安装-2"}},[a._v("#")]),a._v(" kafka 安装")]),a._v(" "),t("p",[a._v("登录官网https://kafka.apache.org/")]),a._v(" "),t("p",[a._v("下载 kafka_2.12-3.2.0.tgz 并上传至 Linux 服务器/root/flink 目录。")]),a._v(" "),t("p",[a._v("1、解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /root/flink\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf kafka_2.12-3.2.0.tgz\n")])])]),t("p",[a._v("2、修改配置文件 server.properties")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /root/flink/kafka_2.12-3.2.0/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" server.properties\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改以下内容为147，要求kafka集群中唯一")]),a._v("\nbroker.id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("147")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改以下内容为PLAINTEXT://192.168.17.147:9092")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("listeners")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PLAINTEXT://192.168.17.147:9092\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改以下内容为192.168.17.147:2181，复用CDH6.2.0的zookeeper")]),a._v("\nzookeeper.connect"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".17.147:2181\n")])])]),t("p",[a._v("3、复制 kafka_2.12-3.2.0.tgz 到 kafka 集群的其他服务器，按照第 2 点修改配置文件 server.properties")])])}],!1,null,null,null);s.default=r.exports}}]);