(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{645:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,a=e._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"zookeeper-安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-安装配置"}},[e._v("#")]),e._v(" zookeeper 安装配置")]),e._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[e._v("#")]),e._v(" 本内容你将获得")]),e._v(" "),a("ul",[a("li",[e._v("Linux 上 zookeeper 的单点安装教程")]),e._v(" "),a("li",[e._v("Linux 上 zookeeper 的集群安装教程")])]),e._v(" "),a("h2",{attrs:{id:"单点安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单点安装"}},[e._v("#")]),e._v(" 单点安装")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("上传 zookeeper3.4.6 至 Linux 服务器"),a("code",[e._v("/home/alinesno/zookeeper")]),e._v("目录")]),e._v(" "),a("blockquote",[a("p",[e._v("此处用户可以使用 xftp 或者 xshell 等工具，书要简言")])])]),e._v(" "),a("li",[a("p",[e._v("解压")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/alinesno/zookeeper\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf zookeeper-3.4.6.tar.gz   解压之后zk路径为 /home/alinesno/zookeeper/zookeeper-3.4.6\n")])])])]),e._v(" "),a("li",[a("p",[e._v("环境变量配置\n创建日志和数据目录")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /home/alinesno/zookeeper/data    数据路径\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /home/alinesno/zookeeper/logs    日志路径\n")])])])]),e._v(" "),a("li",[a("p",[e._v("修改配置")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v(" 复制默认配置为zoo.cfg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/alinesno/zookeeper/zookeeper-3.4.6/conf/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" zoo_sample.cfg zoo.cfg\n")])])]),a("p",[e._v("修改以下两项")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim /home/alinesno/zookeeper/zookeeper-3.4.6/conf/zoo.cfg\n\n 修改以下内容\ndataDir=/home/alinesno/zookeeper/data\ndataLogDir=/home/alinesno/zookeeper/data\n")])])])]),e._v(" "),a("li",[a("p",[e._v("启动 zk")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/alinesno/zookeeper/zookeeper-3.4.6/bin    进入zk目录\n\n./zkServer.sh start    启动zk日志\n./zkServer.sh status   查看启动状态\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"添加-zookeeper-开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-zookeeper-开机自启动"}},[e._v("#")]),e._v(" 添加 zookeeper 开机自启动")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc/rc.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" rc.local\n zookeeper开机自启\n/home/alinesno/zookeeper/zookeeper-3.4.6/bin/zkServer.sh start```\n保存后退出\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 集群安装 --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" zk集群安装只能为2n+1单数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("如1/3/5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("，集群数量不能为偶数 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - 环境变量 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - zk配置 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - 集群启动 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Ansible构建 --\x3e")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 镜像 --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - 构建镜像 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - 使用 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 参考资料 --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("-- - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("GitBook官网"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("http://www.baidu.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" --"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);