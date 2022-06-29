(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{242:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"企业开发环境私有云环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#企业开发环境私有云环境"}},[s._v("#")]),s._v(" 企业开发环境私有云环境")]),s._v(" "),t("h2",{attrs:{id:"本内容你将获得"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[s._v("#")]),s._v(" 本内容你将获得")]),s._v(" "),t("ul",[t("li",[s._v("centos7 上部署 kubernetes 环境")]),s._v(" "),t("li",[s._v("centos7 上部署 kuboard")])]),s._v(" "),t("h2",{attrs:{id:"环境要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[s._v("#")]),s._v(" 环境要求")]),s._v(" "),t("ul",[t("li",[s._v("ansible")]),s._v(" "),t("li",[s._v("nfs")]),s._v(" "),t("li",[s._v("各服务器时间同步")])]),s._v(" "),t("h2",{attrs:{id:"centos7-上部署-kubernetes-环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-上部署-kubernetes-环境"}},[s._v("#")]),s._v(" centos7 上部署 kubernetes 环境")]),s._v(" "),t("p",[s._v("在服务器中选一个节点下载工具脚本 ezdown")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/easzlab/kubeasz/releases/download/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${release}")]),s._v("/ezdown\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./ezdown  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#授予可执行权限")]),s._v("\n")])])]),t("p",[s._v("使用工具脚本安装 kubeasz")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./ezdown -D\n安装完成所有文件（kubeasz代码、二进制、离线镜像）均已整理好放入目录/etc/kubeasz\n")])])]),t("p",[s._v("集群配置\n创建集群配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" ezctl new default    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default是集群名称，可以更改")]),s._v("\n")])])]),t("p",[s._v("修改/etc/kubeasz/clusters/default/hosts,设置集群节点")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nMaster的ip\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kube_master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主节点")]),s._v("\nMaster的ip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# work node(s)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kube_node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作节点")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [optional] harbor server, a private docker registry")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'NEW_INSTALL': 'yes' to install a harbor server; 'no' to integrate with existed one")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'SELF_SIGNED_CERT': 'no' you need put files of certificates named harbor.pem and harbor-key.pem in directory 'down'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("harbor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#192.168.1.8 HARBOR_DOMAIN="harbor.yourdomain.com" NEW_INSTALL=no SELF_SIGNED_CERT=yes')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [optional] loadbalance for accessing k8s from outside")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ex_lb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#192.168.1.6 LB_ROLE=backup EX_APISERVER_VIP=192.168.1.250 EX_APISERVER_PORT=8443")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#192.168.1.7 LB_ROLE=master EX_APISERVER_VIP=192.168.1.250 EX_APISERVER_PORT=8443")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [optional] ntp server for the cluster")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("chrony"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#192.168.1.1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("all:vars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------- Main Variables ---------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cluster container-runtime supported: docker, containerd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONTAINER_RUNTIME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Network plugins supported: calico, flannel, kube-router, cilium, kube-ovn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLUSTER_NETWORK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flannel"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service proxy mode of kube-proxy: 'iptables' or 'ipvs'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ipvs"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# K8S Service CIDR, not overlap with node(host) networking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SERVICE_CIDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.68.0.0/16"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cluster CIDR (Pod CIDR), not overlap with node(host) networking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLUSTER_CIDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.20.0.0/16"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NodePort Range")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_PORT_RANGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20000-42767"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cluster DNS Domain")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLUSTER_DNS_DOMAIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster.local."')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -------- Additional Variables (don't change the default value right now) ---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Binaries Directory")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bin_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/kube/bin"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deploy Directory (kubeasz workspace)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("base_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/kubeasz"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Directory for a specific cluster")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cluster_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ base_dir }}/clusters/default"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CA and other components cert/key Directory")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ca_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/kubernetes/ssl"')]),s._v("\n")])])]),t("p",[s._v("安装集群")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" ezctl setup default all\n")])])]),t("h2",{attrs:{id:"centos7-上部署-kuboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-上部署-kuboard"}},[s._v("#")]),s._v(" centos7 上部署 kuboard")]),s._v(" "),t("p",[s._v("这里部署 kuboard 实际是在 k8s 中跑个 deployment,我们用 yaml 脚本部署 kuboard")]),s._v(" "),t("h3",{attrs:{id:"部署-storageclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-storageclass"}},[s._v("#")]),s._v(" 部署 storageClass")]),s._v(" "),t("p",[s._v("部署 kubarod 之前要先部署存储类(storageClass)，下面是 storageClass 的 yaml 脚本")]),s._v(" "),t("p",[s._v("class.yaml：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" apiVersion: storage.k8s.io/v1\n kind: StorageClass\n metadata:\n name: managed-nfs-storage\n namespace: alinesno-storageclass\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or choose another name, must match deployment's env PROVISIONER_NAME'")]),s._v("\n provisioner: fuseim.pri/ifs\n parameters:\n archiveOnDelete: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n 注意： provisioner 要和 deployment中的环境变量PROVISIONER_NAME 的值相对应\n")])])]),t("p",[s._v("rbac.yaml：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" apiVersion: v1\n kind: ServiceAccount\n metadata:\n name: nfs-client-provisioner\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace with namespace where provisioner is deployed")]),s._v("\n namespace: alinesno-storageclass\n ---\n kind: ClusterRole\n apiVersion: rbac.authorization.k8s.io/v1\n metadata:\n name: nfs-client-provisioner-runner\n namespace: alinesno-storageclass\n rules:\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"persistentvolumes"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"list"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delete"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"persistentvolumeclaims"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"list"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"storage.k8s.io"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"storageclasses"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"list"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"events"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"patch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"services"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"endpoints"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extensions"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"podsecuritypolicies"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resourceNames: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nfs-provisioner"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n ---\n kind: ClusterRoleBinding\n apiVersion: rbac.authorization.k8s.io/v1\n metadata:\n name: run-nfs-client-provisioner\n namespace: alinesno-storageclass\n subjects:\n - kind: ServiceAccount\n name: nfs-client-provisioner\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace with namespace where provisioner is deployed")]),s._v("\n namespace: alinesno-storageclass\n roleRef:\n kind: ClusterRole\n name: nfs-client-provisioner-runner\n apiGroup: rbac.authorization.k8s.io\n ---\n kind: Role\n apiVersion: rbac.authorization.k8s.io/v1\n metadata:\n name: leader-locking-nfs-client-provisioner\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace with namespace where provisioner is deployed")]),s._v("\n namespace: alinesno-storageclass\n rules:\n - apiGroups: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n resources: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"endpoints"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n verbs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"list"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"patch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n ---\n kind: RoleBinding\n apiVersion: rbac.authorization.k8s.io/v1\n metadata:\n name: leader-locking-nfs-client-provisioner\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace with namespace where provisioner is deployed")]),s._v("\n namespace: alinesno-storageclass\n subjects:\n - kind: ServiceAccount\n name: nfs-client-provisioner\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replace with namespace where provisioner is deployed")]),s._v("\n namespace: alinesno-storageclass\n roleRef:\n kind: Role\n name: leader-locking-nfs-client-provisioner\n apiGroup: rbac.authorization.k8s.io\n\n ServiceAccount： 服务账户\n ClusterRole： 集群角色\n Role： 命名空间角色\n ***Binding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ClusterRoleBinding, ClusterRole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：给ServiceAccount授予角色权限\n\n 服务账户：服务账户与Namespace绑定，关联一套凭证，存储在Secret中，Pod创建时挂载Secret，从而允许与API Server之间调用\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("deployment.yaml\n apiVersion: apps/v1\n kind: Deployment\n metadata:\n name: nfs-client-provisioner\n labels:\n app: nfs-client-provisioner\n namespace: alinesno-storageclass\n spec:\n replicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n strategy:\n type: Recreate\n selector:\n matchLabels:\n app: nfs-client-provisioner\n template:\n metadata:\n labels:\n app: nfs-client-provisioner\n spec:\n serviceAccountName: nfs-client-provisioner\n containers:\n        - name: nfs-client-provisioner\n image: easzlab/nfs-subdir-external-provisioner:v4.0.1\n volumeMounts:\n - name: nfs-client-root\n mountPath: /persistentvolumes\n env:\n - name: PROVISIONER_NAME\n value: fuseim.pri/ifs\n - name: NFS_SERVER\n value: k8s-master-01\n - name: NFS_PATH\n value: /home/wjw_data/nfsdata\n volumes:\n - name: nfs-client-root\n nfs:\n server: k8s-master-01\n path: /home/wjw_data/nfsdata\n\n 存储服务： 调用存储类的PROVISIONER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fuseim.pri/ifs）自动生成pv和pvc,注意nfs存储路径要是本地nfs的存储路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/wjw_data/nfsdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n Pv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" persisentvolum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 配置好的一段存储\n Pvc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PersistentVolumeClaim"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 用户pod使用PV的申请声明\n pv提供存储资源"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("生产者"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npvc使用存储资源"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("消费者"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n 使用pvc绑定pv\n")])])]),t("p",[s._v("执行下面命令即可部署 storageClass")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" kubectl apply –f class.yaml  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建存储类")]),s._v("\n kubectl apply –f rbac.yaml   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建服务账户并授权")]),s._v("\n kubectl apply –f deployment.yaml "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建存储服务")]),s._v("\n")])])]),t("h3",{attrs:{id:"部署-kuboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-kuboard"}},[s._v("#")]),s._v(" 部署 kuboard")]),s._v(" "),t("p",[s._v("yaml 脚本为 kuboard-v3-storage-class.yaml")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" ---\n apiVersion: v1\n kind: Namespace\n metadata:\n   name: kuboard\n\n ---\n apiVersion: v1\n kind: ConfigMap\n metadata:\n   name: kuboard-v3-config\n   namespace: kuboard\n data:\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关于如下参数的解释，请参考文档 [https://kuboard.cn/install/v3/install-built-in.html](https://kuboard.cn/install/v3/install-built-in.html)")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [common]")]),s._v("\n   KUBOARD_ENDPOINT: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://节点:30080'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点指k8s集群节点")]),s._v("\n   KUBOARD_AGENT_SERVER_UDP_PORT: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'30081'")]),s._v("\n   KUBOARD_AGENT_SERVER_TCP_PORT: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'30081'")]),s._v("\n   KUBOARD_SERVER_LOGRUS_LEVEL: info  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# error / debug / trace")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# KUBOARD_AGENT_KEY 是 Agent 与 Kuboard 通信时的密钥，请修改为一个任意的包含字母、数字的32位字符串，此密钥变更后，需要删除 Kuboard Agent 重新导入。")]),s._v("\n   KUBOARD_AGENT_KEY: 32b7d6572c6255211b4eec9009e4a816\n\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关于如下参数的解释，请参考文档 [https://kuboard.cn/install/v3/install-gitlab.html](https://kuboard.cn/install/v3/install-gitlab.html)")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [gitlab login]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_LOGIN_TYPE: "gitlab"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_ROOT_USER: "your-user-name-in-gitlab"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GITLAB_BASE_URL: "http://gitlab.mycompany.com"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GITLAB_APPLICATION_ID: "7c10882aa46810a0402d17c66103894ac5e43d6130b81c17f7f2d8ae182040b5"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GITLAB_CLIENT_SECRET: "77c149bd3a4b6870bffa1a1afaf37cba28a1817f4cf518699065f5a8fe958889"')]),s._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关于如下参数的解释，请参考文档 [https://kuboard.cn/install/v3/install-github.html](https://kuboard.cn/install/v3/install-github.html)")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [github login]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_LOGIN_TYPE: "github"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_ROOT_USER: "your-user-name-in-github"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GITHUB_CLIENT_ID: "17577d45e4de7dad88e0"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GITHUB_CLIENT_SECRET: "ff738553a8c7e9ad39569c8d02c1d85ec19115a7"')]),s._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关于如下参数的解释，请参考文档 [https://kuboard.cn/install/v3/install-ldap.html](https://kuboard.cn/install/v3/install-ldap.html)")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [ldap login]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_LOGIN_TYPE: "ldap"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# KUBOARD_ROOT_USER: "your-user-name-in-ldap"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_HOST: "ldap-ip-address:389"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_BIND_DN: "cn=admin,dc=example,dc=org"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_BIND_PASSWORD: "admin"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_BASE_DN: "dc=example,dc=org"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_FILTER: "(objectClass=posixAccount)"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_ID_ATTRIBUTE: "uid"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_USER_NAME_ATTRIBUTE: "uid"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_EMAIL_ATTRIBUTE: "mail"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_DISPLAY_NAME_ATTRIBUTE: "cn"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_GROUP_SEARCH_BASE_DN: "dc=example,dc=org"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_GROUP_SEARCH_FILTER: "(objectClass=posixGroup)"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_USER_MACHER_USER_ATTRIBUTE: "gidNumber"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_USER_MACHER_GROUP_ATTRIBUTE: "gidNumber"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# LDAP_GROUP_NAME_ATTRIBUTE: "cn"')]),s._v("\n\n ---\n apiVersion: apps/v1\n kind: StatefulSet\n metadata:\n   name: kuboard-etcd\n   namespace: kuboard\n   labels:\n     app: kuboard-etcd\n spec:\n   serviceName: kuboard-etcd\n   replicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n   selector:\n     matchLabels:\n       app: kuboard-etcd\n   template:\n     metadata:\n       name: kuboard-etcd\n       labels:\n         app: kuboard-etcd\n     spec:\n       containers:\n       - name: kuboard-etcd\n         image: swr.cn-east-2.myhuaweicloud.com/kuboard/etcd:v3.4.14\n         ports:\n         - containerPort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2379")]),s._v("\n           name: client\n         - containerPort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2380")]),s._v("\n           name: peer\n         env:\n         - name: KUBOARD_ETCD_ENDPOINTS\n           value: -\n             kuboard-etcd-0.kuboard-etcd:2379,kuboard-etcd-1.kuboard-etcd:2379,kuboard-etcd-2.kuboard-etcd:2379\n         volumeMounts:\n         - name: data\n           mountPath: /data\n         command:\n           - /bin/sh\n           - -c\n           - "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kuboard-etcd-0=http://kuboard-etcd-0.kuboard-etcd:2380,kuboard-etcd-1=http://kuboard-etcd-1.kuboard-etcd:2380,kuboard-etcd-2=http://kuboard-etcd-2.kuboard-etcd:2380"')]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" etcd --name "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")]),s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --listen-peer-urls "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http://0.0.0.0:2380"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://0.0.0.0:2380"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --listen-client-urls "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http://0.0.0.0:2379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://0.0.0.0:2379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --advertise-client-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")]),s._v("}")]),s._v(".kuboard-etcd:2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --initial-advertise-peer-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")]),s._v("}")]),s._v(":2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --initial-cluster-token kuboard-etcd-cluster-1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --initial-cluster "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PEERS}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --initial-cluster-state new "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               --data-dir /data/kuboard.etcd\n   volumeClaimTemplates:\n   - metadata:\n       name: data\n     spec:\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请填写一个有效的 StorageClass name")]),s._v("\n       storageClassName: managed-nfs-storage\n       accessModes: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ReadWriteMany"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n       resources:\n         requests:\n           storage: 5Gi\n\n ---\n apiVersion: v1\n kind: Service\n metadata:\n   name: kuboard-etcd\n   namespace: kuboard\n spec:\n   type: ClusterIP\n   ports:\n   - port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2379")]),s._v("\n     name: client\n   - port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2380")]),s._v("\n     name: peer\n   selector:\n     app: kuboard-etcd\n\n ---\n apiVersion: apps/v1\n kind: Deployment\n metadata:\n   annotations:\n     deployment.kubernetes.io/revision: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),s._v("\n     k8s.kuboard.cn/ingress: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v("\n     k8s.kuboard.cn/service: NodePort\n     k8s.kuboard.cn/workload: kuboard-v3\n   labels:\n     k8s.kuboard.cn/name: kuboard-v3\n   name: kuboard-v3\n   namespace: kuboard\n spec:\n   replicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n   selector:\n     matchLabels:\n       k8s.kuboard.cn/name: kuboard-v3\n   template:\n     metadata:\n       labels:\n         k8s.kuboard.cn/name: kuboard-v3\n     spec:\n       containers:\n         - env:\n             - name: KUBOARD_ETCD_ENDPOINTS\n               value: -\n                 kuboard-etcd-0.kuboard-etcd:2379,kuboard-etcd-1.kuboard-etcd:2379,kuboard-etcd-2.kuboard-etcd:2379\n           envFrom:\n             - configMapRef:\n                 name: kuboard-v3-config\n           image: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'swr.cn-east-2.myhuaweicloud.com/kuboard/kuboard:v3'")]),s._v("\n           imagePullPolicy: Always\n           name: kuboard\n\n ---\n apiVersion: v1\n kind: Service\n metadata:\n   annotations:\n     k8s.kuboard.cn/workload: kuboard-v3\n   labels:\n     k8s.kuboard.cn/name: kuboard-v3\n   name: kuboard-v3\n   namespace: kuboard\n spec:\n   ports:\n     - name: webui\n       nodePort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30080")]),s._v("\n       port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n       protocol: TCP\n       targetPort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n     - name: agentservertcp\n       nodePort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30081")]),s._v("\n       port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10081")]),s._v("\n       protocol: TCP\n       targetPort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10081")]),s._v("\n     - name: agentserverudp\n       nodePort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30081")]),s._v("\n       port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10081")]),s._v("\n       protocol: UDP\n       targetPort: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10081")]),s._v("\n   selector:\n     k8s.kuboard.cn/name: kuboard-v3\n   sessionAffinity: None\n   type: NodePort\n")])])]),t("p",[s._v("执行下面命令就可以部署 kuboard")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" Kubectl apply –f kuboard-v3-storage-class.yaml  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#部署kuboard")]),s._v("\n")])])])])}],!1,null,null,null);n.default=e.exports}}]);