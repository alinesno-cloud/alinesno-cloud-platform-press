import{_ as n,o as s,c as a,d as e}from"./app.03b7bd48.js";const i={},l=e(`<h1 id="\u4F01\u4E1A\u5F00\u53D1\u73AF\u5883\u79C1\u6709\u4E91\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F01\u4E1A\u5F00\u53D1\u73AF\u5883\u79C1\u6709\u4E91\u73AF\u5883" aria-hidden="true">#</a> \u4F01\u4E1A\u5F00\u53D1\u73AF\u5883\u79C1\u6709\u4E91\u73AF\u5883</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>centos7 \u4E0A\u90E8\u7F72 kubernetes \u73AF\u5883</li><li>centos7 \u4E0A\u90E8\u7F72 kuboard</li></ul><h2 id="\u73AF\u5883\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u8981\u6C42" aria-hidden="true">#</a> \u73AF\u5883\u8981\u6C42</h2><ul><li>ansible</li><li>nfs</li><li>\u5404\u670D\u52A1\u5668\u65F6\u95F4\u540C\u6B65</li></ul><h2 id="centos7-\u4E0A\u90E8\u7F72-kubernetes-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#centos7-\u4E0A\u90E8\u7F72-kubernetes-\u73AF\u5883" aria-hidden="true">#</a> centos7 \u4E0A\u90E8\u7F72 kubernetes \u73AF\u5883</h2><p>\u5728\u670D\u52A1\u5668\u4E2D\u9009\u4E00\u4E2A\u8282\u70B9\u4E0B\u8F7D\u5DE5\u5177\u811A\u672C ezdown</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">release</span><span class="token operator">=</span><span class="token number">3.0</span>.0
<span class="token function">wget</span> https://github.com/easzlab/kubeasz/releases/download/<span class="token variable">\${release}</span>/ezdown
<span class="token function">chmod</span> +x ./ezdown  <span class="token comment">#\u6388\u4E88\u53EF\u6267\u884C\u6743\u9650</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u5DE5\u5177\u811A\u672C\u5B89\u88C5 kubeasz</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./ezdown -D
\u5B89\u88C5\u5B8C\u6210\u6240\u6709\u6587\u4EF6\uFF08kubeasz\u4EE3\u7801\u3001\u4E8C\u8FDB\u5236\u3001\u79BB\u7EBF\u955C\u50CF\uFF09\u5747\u5DF2\u6574\u7406\u597D\u653E\u5165\u76EE\u5F55/etc/kubeasz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u7FA4\u914D\u7F6E \u521B\u5EFA\u96C6\u7FA4\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ezctl new default    <span class="token comment"># default\u662F\u96C6\u7FA4\u540D\u79F0\uFF0C\u53EF\u4EE5\u66F4\u6539</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539/etc/kubeasz/clusters/default/hosts,\u8BBE\u7F6E\u96C6\u7FA4\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>etcd<span class="token punctuation">]</span>
Master\u7684ip
<span class="token punctuation">[</span>kube_master<span class="token punctuation">]</span> <span class="token comment">#\u4E3B\u8282\u70B9</span>
Master\u7684ip

<span class="token comment"># work node(s)</span>
<span class="token punctuation">[</span>kube_node<span class="token punctuation">]</span>  <span class="token comment"># \u5DE5\u4F5C\u8282\u70B9</span>

<span class="token comment"># [optional] harbor server, a private docker registry</span>
<span class="token comment"># &#39;NEW_INSTALL&#39;: &#39;yes&#39; to install a harbor server; &#39;no&#39; to integrate with existed one</span>
<span class="token comment"># &#39;SELF_SIGNED_CERT&#39;: &#39;no&#39; you need put files of certificates named harbor.pem and harbor-key.pem in directory &#39;down&#39;</span>
<span class="token punctuation">[</span>harbor<span class="token punctuation">]</span>
<span class="token comment">#192.168.1.8 HARBOR_DOMAIN=&quot;harbor.yourdomain.com&quot; NEW_INSTALL=no SELF_SIGNED_CERT=yes</span>

<span class="token comment"># [optional] loadbalance for accessing k8s from outside</span>
<span class="token punctuation">[</span>ex_lb<span class="token punctuation">]</span>
<span class="token comment">#192.168.1.6 LB_ROLE=backup EX_APISERVER_VIP=192.168.1.250 EX_APISERVER_PORT=8443</span>
<span class="token comment">#192.168.1.7 LB_ROLE=master EX_APISERVER_VIP=192.168.1.250 EX_APISERVER_PORT=8443</span>

<span class="token comment"># [optional] ntp server for the cluster</span>
<span class="token punctuation">[</span>chrony<span class="token punctuation">]</span>
<span class="token comment">#192.168.1.1</span>

<span class="token punctuation">[</span>all:vars<span class="token punctuation">]</span>
<span class="token comment"># --------- Main Variables ---------------</span>
<span class="token comment"># Cluster container-runtime supported: docker, containerd</span>
<span class="token assign-left variable">CONTAINER_RUNTIME</span><span class="token operator">=</span><span class="token string">&quot;docker&quot;</span>

<span class="token comment"># Network plugins supported: calico, flannel, kube-router, cilium, kube-ovn</span>
<span class="token assign-left variable">CLUSTER_NETWORK</span><span class="token operator">=</span><span class="token string">&quot;flannel&quot;</span>

<span class="token comment"># Service proxy mode of kube-proxy: &#39;iptables&#39; or &#39;ipvs&#39;</span>
<span class="token assign-left variable">PROXY_MODE</span><span class="token operator">=</span><span class="token string">&quot;ipvs&quot;</span>

<span class="token comment"># K8S Service CIDR, not overlap with node(host) networking</span>
<span class="token assign-left variable">SERVICE_CIDR</span><span class="token operator">=</span><span class="token string">&quot;10.68.0.0/16&quot;</span>

<span class="token comment"># Cluster CIDR (Pod CIDR), not overlap with node(host) networking</span>
<span class="token assign-left variable">CLUSTER_CIDR</span><span class="token operator">=</span><span class="token string">&quot;172.20.0.0/16&quot;</span>

<span class="token comment"># NodePort Range</span>
<span class="token assign-left variable">NODE_PORT_RANGE</span><span class="token operator">=</span><span class="token string">&quot;20000-42767&quot;</span>

<span class="token comment"># Cluster DNS Domain</span>
<span class="token assign-left variable">CLUSTER_DNS_DOMAIN</span><span class="token operator">=</span><span class="token string">&quot;cluster.local.&quot;</span>

<span class="token comment"># -------- Additional Variables (don&#39;t change the default value right now) ---</span>
<span class="token comment"># Binaries Directory</span>
<span class="token assign-left variable">bin_dir</span><span class="token operator">=</span><span class="token string">&quot;/opt/kube/bin&quot;</span>

<span class="token comment"># Deploy Directory (kubeasz workspace)</span>
<span class="token assign-left variable">base_dir</span><span class="token operator">=</span><span class="token string">&quot;/etc/kubeasz&quot;</span>

<span class="token comment"># Directory for a specific cluster</span>
<span class="token assign-left variable">cluster_dir</span><span class="token operator">=</span><span class="token string">&quot;{{ base_dir }}/clusters/default&quot;</span>

<span class="token comment"># CA and other components cert/key Directory</span>
<span class="token assign-left variable">ca_dir</span><span class="token operator">=</span><span class="token string">&quot;/etc/kubernetes/ssl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u96C6\u7FA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ezctl setup default all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="centos7-\u4E0A\u90E8\u7F72-kuboard" tabindex="-1"><a class="header-anchor" href="#centos7-\u4E0A\u90E8\u7F72-kuboard" aria-hidden="true">#</a> centos7 \u4E0A\u90E8\u7F72 kuboard</h2><p>\u8FD9\u91CC\u90E8\u7F72 kuboard \u5B9E\u9645\u662F\u5728 k8s \u4E2D\u8DD1\u4E2A deployment,\u6211\u4EEC\u7528 yaml \u811A\u672C\u90E8\u7F72 kuboard</p><h3 id="\u90E8\u7F72-storageclass" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-storageclass" aria-hidden="true">#</a> \u90E8\u7F72 storageClass</h3><p>\u90E8\u7F72 kubarod \u4E4B\u524D\u8981\u5148\u90E8\u7F72\u5B58\u50A8\u7C7B(storageClass)\uFF0C\u4E0B\u9762\u662F storageClass \u7684 yaml \u811A\u672C</p><p>class.yaml\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> apiVersion: storage.k8s.io/v1
 kind: StorageClass
 metadata:
 name: managed-nfs-storage
 namespace: alinesno-storageclass
 <span class="token comment"># or choose another name, must match deployment&#39;s env PROVISIONER_NAME&#39;</span>
 provisioner: fuseim.pri/ifs
 parameters:
 archiveOnDelete: <span class="token string">&quot;false&quot;</span>
 \u6CE8\u610F\uFF1A provisioner \u8981\u548C deployment\u4E2D\u7684\u73AF\u5883\u53D8\u91CFPROVISIONER_NAME \u7684\u503C\u76F8\u5BF9\u5E94
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rbac.yaml\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> apiVersion: v1
 kind: ServiceAccount
 metadata:
 name: nfs-client-provisioner
 <span class="token comment"># replace with namespace where provisioner is deployed</span>
 namespace: alinesno-storageclass
 ---
 kind: ClusterRole
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
 name: nfs-client-provisioner-runner
 namespace: alinesno-storageclass
 rules:
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumes&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span>, <span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;watch&quot;</span>, <span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;delete&quot;</span><span class="token punctuation">]</span>
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumeclaims&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span>, <span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;watch&quot;</span>, <span class="token string">&quot;update&quot;</span><span class="token punctuation">]</span>
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;storage.k8s.io&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;storageclasses&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span>, <span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;watch&quot;</span>, <span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;update&quot;</span>, <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;services&quot;</span>, <span class="token string">&quot;endpoints&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">]</span>
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;extensions&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;podsecuritypolicies&quot;</span><span class="token punctuation">]</span>
 resourceNames: <span class="token punctuation">[</span><span class="token string">&quot;nfs-provisioner&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;use&quot;</span><span class="token punctuation">]</span>
 ---
 kind: ClusterRoleBinding
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
 name: run-nfs-client-provisioner
 namespace: alinesno-storageclass
 subjects:
 - kind: ServiceAccount
 name: nfs-client-provisioner
 <span class="token comment"># replace with namespace where provisioner is deployed</span>
 namespace: alinesno-storageclass
 roleRef:
 kind: ClusterRole
 name: nfs-client-provisioner-runner
 apiGroup: rbac.authorization.k8s.io
 ---
 kind: Role
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
 name: leader-locking-nfs-client-provisioner
 <span class="token comment"># replace with namespace where provisioner is deployed</span>
 namespace: alinesno-storageclass
 rules:
 - apiGroups: <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 resources: <span class="token punctuation">[</span><span class="token string">&quot;endpoints&quot;</span><span class="token punctuation">]</span>
 verbs: <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span>, <span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;watch&quot;</span>, <span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;update&quot;</span>, <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
 ---
 kind: RoleBinding
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
 name: leader-locking-nfs-client-provisioner
 <span class="token comment"># replace with namespace where provisioner is deployed</span>
 namespace: alinesno-storageclass
 subjects:
 - kind: ServiceAccount
 name: nfs-client-provisioner
 <span class="token comment"># replace with namespace where provisioner is deployed</span>
 namespace: alinesno-storageclass
 roleRef:
 kind: Role
 name: leader-locking-nfs-client-provisioner
 apiGroup: rbac.authorization.k8s.io

 ServiceAccount\uFF1A \u670D\u52A1\u8D26\u6237
 ClusterRole\uFF1A \u96C6\u7FA4\u89D2\u8272
 Role\uFF1A \u547D\u540D\u7A7A\u95F4\u89D2\u8272
 ***Binding<span class="token punctuation">(</span>ClusterRoleBinding, ClusterRole<span class="token punctuation">)</span>\uFF1A\u7ED9ServiceAccount\u6388\u4E88\u89D2\u8272\u6743\u9650

 \u670D\u52A1\u8D26\u6237\uFF1A\u670D\u52A1\u8D26\u6237\u4E0ENamespace\u7ED1\u5B9A\uFF0C\u5173\u8054\u4E00\u5957\u51ED\u8BC1\uFF0C\u5B58\u50A8\u5728Secret\u4E2D\uFF0CPod\u521B\u5EFA\u65F6\u6302\u8F7DSecret\uFF0C\u4ECE\u800C\u5141\u8BB8\u4E0EAPI Server\u4E4B\u95F4\u8C03\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deployment.yaml
 apiVersion: apps/v1
 kind: Deployment
 metadata:
 name: nfs-client-provisioner
 labels:
 app: nfs-client-provisioner
 namespace: alinesno-storageclass
 spec:
 replicas: <span class="token number">1</span>
 strategy:
 type: Recreate
 selector:
 matchLabels:
 app: nfs-client-provisioner
 template:
 metadata:
 labels:
 app: nfs-client-provisioner
 spec:
 serviceAccountName: nfs-client-provisioner
 containers:
        - name: nfs-client-provisioner
 image: easzlab/nfs-subdir-external-provisioner:v4.0.1
 volumeMounts:
 - name: nfs-client-root
 mountPath: /persistentvolumes
 env:
 - name: PROVISIONER_NAME
 value: fuseim.pri/ifs
 - name: NFS_SERVER
 value: k8s-master-01
 - name: NFS_PATH
 value: /home/wjw_data/nfsdata
 volumes:
 - name: nfs-client-root
 nfs:
 server: k8s-master-01
 path: /home/wjw_data/nfsdata

 \u5B58\u50A8\u670D\u52A1\uFF1A \u8C03\u7528\u5B58\u50A8\u7C7B\u7684PROVISIONER<span class="token punctuation">(</span>fuseim.pri/ifs\uFF09\u81EA\u52A8\u751F\u6210pv\u548Cpvc,\u6CE8\u610Fnfs\u5B58\u50A8\u8DEF\u5F84\u8981\u662F\u672C\u5730nfs\u7684\u5B58\u50A8\u8DEF\u5F84<span class="token punctuation">(</span>/home/wjw_data/nfsdata<span class="token punctuation">)</span>

 Pv<span class="token punctuation">(</span> persisentvolum<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> \u914D\u7F6E\u597D\u7684\u4E00\u6BB5\u5B58\u50A8
 Pvc <span class="token punctuation">(</span>PersistentVolumeClaim<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> \u7528\u6237pod\u4F7F\u7528PV\u7684\u7533\u8BF7\u58F0\u660E
 pv\u63D0\u4F9B\u5B58\u50A8\u8D44\u6E90<span class="token punctuation">(</span>\u751F\u4EA7\u8005<span class="token punctuation">)</span>
pvc\u4F7F\u7528\u5B58\u50A8\u8D44\u6E90<span class="token punctuation">(</span>\u6D88\u8D39\u8005<span class="token punctuation">)</span>
 \u4F7F\u7528pvc\u7ED1\u5B9Apv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u5373\u53EF\u90E8\u7F72 storageClass</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> kubectl apply \u2013f class.yaml  <span class="token comment">#\u521B\u5EFA\u5B58\u50A8\u7C7B</span>
 kubectl apply \u2013f rbac.yaml   <span class="token comment">#\u521B\u5EFA\u670D\u52A1\u8D26\u6237\u5E76\u6388\u6743</span>
 kubectl apply \u2013f deployment.yaml <span class="token comment">#\u521B\u5EFA\u5B58\u50A8\u670D\u52A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72-kuboard" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-kuboard" aria-hidden="true">#</a> \u90E8\u7F72 kuboard</h3><p>yaml \u811A\u672C\u4E3A kuboard-v3-storage-class.yaml</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ---
 apiVersion: v1
 kind: Namespace
 metadata:
   name: kuboard

 ---
 apiVersion: v1
 kind: ConfigMap
 metadata:
   name: kuboard-v3-config
   namespace: kuboard
 data:
   <span class="token comment"># \u5173\u4E8E\u5982\u4E0B\u53C2\u6570\u7684\u89E3\u91CA\uFF0C\u8BF7\u53C2\u8003\u6587\u6863 [https://kuboard.cn/install/v3/install-built-in.html](https://kuboard.cn/install/v3/install-built-in.html)</span>
   <span class="token comment"># [common]</span>
   KUBOARD_ENDPOINT: <span class="token string">&#39;http://\u8282\u70B9:30080&#39;</span>  <span class="token comment"># \u8282\u70B9\u6307k8s\u96C6\u7FA4\u8282\u70B9</span>
   KUBOARD_AGENT_SERVER_UDP_PORT: <span class="token string">&#39;30081&#39;</span>
   KUBOARD_AGENT_SERVER_TCP_PORT: <span class="token string">&#39;30081&#39;</span>
   KUBOARD_SERVER_LOGRUS_LEVEL: info  <span class="token comment"># error / debug / trace</span>
   <span class="token comment"># KUBOARD_AGENT_KEY \u662F Agent \u4E0E Kuboard \u901A\u4FE1\u65F6\u7684\u5BC6\u94A5\uFF0C\u8BF7\u4FEE\u6539\u4E3A\u4E00\u4E2A\u4EFB\u610F\u7684\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u768432\u4F4D\u5B57\u7B26\u4E32\uFF0C\u6B64\u5BC6\u94A5\u53D8\u66F4\u540E\uFF0C\u9700\u8981\u5220\u9664 Kuboard Agent \u91CD\u65B0\u5BFC\u5165\u3002</span>
   KUBOARD_AGENT_KEY: 32b7d6572c6255211b4eec9009e4a816

   <span class="token comment"># \u5173\u4E8E\u5982\u4E0B\u53C2\u6570\u7684\u89E3\u91CA\uFF0C\u8BF7\u53C2\u8003\u6587\u6863 [https://kuboard.cn/install/v3/install-gitlab.html](https://kuboard.cn/install/v3/install-gitlab.html)</span>
   <span class="token comment"># [gitlab login]</span>
   <span class="token comment"># KUBOARD_LOGIN_TYPE: &quot;gitlab&quot;</span>
   <span class="token comment"># KUBOARD_ROOT_USER: &quot;your-user-name-in-gitlab&quot;</span>
   <span class="token comment"># GITLAB_BASE_URL: &quot;http://gitlab.mycompany.com&quot;</span>
   <span class="token comment"># GITLAB_APPLICATION_ID: &quot;7c10882aa46810a0402d17c66103894ac5e43d6130b81c17f7f2d8ae182040b5&quot;</span>
   <span class="token comment"># GITLAB_CLIENT_SECRET: &quot;77c149bd3a4b6870bffa1a1afaf37cba28a1817f4cf518699065f5a8fe958889&quot;</span>

   <span class="token comment"># \u5173\u4E8E\u5982\u4E0B\u53C2\u6570\u7684\u89E3\u91CA\uFF0C\u8BF7\u53C2\u8003\u6587\u6863 [https://kuboard.cn/install/v3/install-github.html](https://kuboard.cn/install/v3/install-github.html)</span>
   <span class="token comment"># [github login]</span>
   <span class="token comment"># KUBOARD_LOGIN_TYPE: &quot;github&quot;</span>
   <span class="token comment"># KUBOARD_ROOT_USER: &quot;your-user-name-in-github&quot;</span>
   <span class="token comment"># GITHUB_CLIENT_ID: &quot;17577d45e4de7dad88e0&quot;</span>
   <span class="token comment"># GITHUB_CLIENT_SECRET: &quot;ff738553a8c7e9ad39569c8d02c1d85ec19115a7&quot;</span>

   <span class="token comment"># \u5173\u4E8E\u5982\u4E0B\u53C2\u6570\u7684\u89E3\u91CA\uFF0C\u8BF7\u53C2\u8003\u6587\u6863 [https://kuboard.cn/install/v3/install-ldap.html](https://kuboard.cn/install/v3/install-ldap.html)</span>
   <span class="token comment"># [ldap login]</span>
   <span class="token comment"># KUBOARD_LOGIN_TYPE: &quot;ldap&quot;</span>
   <span class="token comment"># KUBOARD_ROOT_USER: &quot;your-user-name-in-ldap&quot;</span>
   <span class="token comment"># LDAP_HOST: &quot;ldap-ip-address:389&quot;</span>
   <span class="token comment"># LDAP_BIND_DN: &quot;cn=admin,dc=example,dc=org&quot;</span>
   <span class="token comment"># LDAP_BIND_PASSWORD: &quot;admin&quot;</span>
   <span class="token comment"># LDAP_BASE_DN: &quot;dc=example,dc=org&quot;</span>
   <span class="token comment"># LDAP_FILTER: &quot;(objectClass=posixAccount)&quot;</span>
   <span class="token comment"># LDAP_ID_ATTRIBUTE: &quot;uid&quot;</span>
   <span class="token comment"># LDAP_USER_NAME_ATTRIBUTE: &quot;uid&quot;</span>
   <span class="token comment"># LDAP_EMAIL_ATTRIBUTE: &quot;mail&quot;</span>
   <span class="token comment"># LDAP_DISPLAY_NAME_ATTRIBUTE: &quot;cn&quot;</span>
   <span class="token comment"># LDAP_GROUP_SEARCH_BASE_DN: &quot;dc=example,dc=org&quot;</span>
   <span class="token comment"># LDAP_GROUP_SEARCH_FILTER: &quot;(objectClass=posixGroup)&quot;</span>
   <span class="token comment"># LDAP_USER_MACHER_USER_ATTRIBUTE: &quot;gidNumber&quot;</span>
   <span class="token comment"># LDAP_USER_MACHER_GROUP_ATTRIBUTE: &quot;gidNumber&quot;</span>
   <span class="token comment"># LDAP_GROUP_NAME_ATTRIBUTE: &quot;cn&quot;</span>

 ---
 apiVersion: apps/v1
 kind: StatefulSet
 metadata:
   name: kuboard-etcd
   namespace: kuboard
   labels:
     app: kuboard-etcd
 spec:
   serviceName: kuboard-etcd
   replicas: <span class="token number">3</span>
   selector:
     matchLabels:
       app: kuboard-etcd
   template:
     metadata:
       name: kuboard-etcd
       labels:
         app: kuboard-etcd
     spec:
       containers:
       - name: kuboard-etcd
         image: swr.cn-east-2.myhuaweicloud.com/kuboard/etcd:v3.4.14
         ports:
         - containerPort: <span class="token number">2379</span>
           name: client
         - containerPort: <span class="token number">2380</span>
           name: peer
         env:
         - name: KUBOARD_ETCD_ENDPOINTS
           value: -
             kuboard-etcd-0.kuboard-etcd:2379,kuboard-etcd-1.kuboard-etcd:2379,kuboard-etcd-2.kuboard-etcd:2379
         volumeMounts:
         - name: data
           mountPath: /data
         command:
           - /bin/sh
           - -c
           - <span class="token operator">|</span>
             <span class="token assign-left variable">PEERS</span><span class="token operator">=</span><span class="token string">&quot;kuboard-etcd-0=http://kuboard-etcd-0.kuboard-etcd:2380,kuboard-etcd-1=http://kuboard-etcd-1.kuboard-etcd:2380,kuboard-etcd-2=http://kuboard-etcd-2.kuboard-etcd:2380&quot;</span>
             <span class="token builtin class-name">exec</span> etcd --name <span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span> <span class="token punctuation">\\</span>
               --listen-peer-urls <span class="token punctuation">[</span>http://0.0.0.0:2380<span class="token punctuation">]</span><span class="token punctuation">(</span>http://0.0.0.0:2380<span class="token punctuation">)</span> <span class="token punctuation">\\</span>
               --listen-client-urls <span class="token punctuation">[</span>http://0.0.0.0:2379<span class="token punctuation">]</span><span class="token punctuation">(</span>http://0.0.0.0:2379<span class="token punctuation">)</span> <span class="token punctuation">\\</span>
               --advertise-client-urls http://<span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span>.kuboard-etcd:2379 <span class="token punctuation">\\</span>
               --initial-advertise-peer-urls http://<span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span>:2380 <span class="token punctuation">\\</span>
               --initial-cluster-token kuboard-etcd-cluster-1 <span class="token punctuation">\\</span>
               --initial-cluster <span class="token variable">\${PEERS}</span> <span class="token punctuation">\\</span>
               --initial-cluster-state new <span class="token punctuation">\\</span>
               --data-dir /data/kuboard.etcd
   volumeClaimTemplates:
   - metadata:
       name: data
     spec:
       <span class="token comment"># \u8BF7\u586B\u5199\u4E00\u4E2A\u6709\u6548\u7684 StorageClass name</span>
       storageClassName: managed-nfs-storage
       accessModes: <span class="token punctuation">[</span> <span class="token string">&quot;ReadWriteMany&quot;</span> <span class="token punctuation">]</span>
       resources:
         requests:
           storage: 5Gi

 ---
 apiVersion: v1
 kind: Service
 metadata:
   name: kuboard-etcd
   namespace: kuboard
 spec:
   type: ClusterIP
   ports:
   - port: <span class="token number">2379</span>
     name: client
   - port: <span class="token number">2380</span>
     name: peer
   selector:
     app: kuboard-etcd

 ---
 apiVersion: apps/v1
 kind: Deployment
 metadata:
   annotations:
     deployment.kubernetes.io/revision: <span class="token string">&#39;9&#39;</span>
     k8s.kuboard.cn/ingress: <span class="token string">&#39;false&#39;</span>
     k8s.kuboard.cn/service: NodePort
     k8s.kuboard.cn/workload: kuboard-v3
   labels:
     k8s.kuboard.cn/name: kuboard-v3
   name: kuboard-v3
   namespace: kuboard
 spec:
   replicas: <span class="token number">1</span>
   selector:
     matchLabels:
       k8s.kuboard.cn/name: kuboard-v3
   template:
     metadata:
       labels:
         k8s.kuboard.cn/name: kuboard-v3
     spec:
       containers:
         - env:
             - name: KUBOARD_ETCD_ENDPOINTS
               value: -
                 kuboard-etcd-0.kuboard-etcd:2379,kuboard-etcd-1.kuboard-etcd:2379,kuboard-etcd-2.kuboard-etcd:2379
           envFrom:
             - configMapRef:
                 name: kuboard-v3-config
           image: <span class="token string">&#39;swr.cn-east-2.myhuaweicloud.com/kuboard/kuboard:v3&#39;</span>
           imagePullPolicy: Always
           name: kuboard

 ---
 apiVersion: v1
 kind: Service
 metadata:
   annotations:
     k8s.kuboard.cn/workload: kuboard-v3
   labels:
     k8s.kuboard.cn/name: kuboard-v3
   name: kuboard-v3
   namespace: kuboard
 spec:
   ports:
     - name: webui
       nodePort: <span class="token number">30080</span>
       port: <span class="token number">80</span>
       protocol: TCP
       targetPort: <span class="token number">80</span>
     - name: agentservertcp
       nodePort: <span class="token number">30081</span>
       port: <span class="token number">10081</span>
       protocol: TCP
       targetPort: <span class="token number">10081</span>
     - name: agentserverudp
       nodePort: <span class="token number">30081</span>
       port: <span class="token number">10081</span>
       protocol: UDP
       targetPort: <span class="token number">10081</span>
   selector:
     k8s.kuboard.cn/name: kuboard-v3
   sessionAffinity: None
   type: NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u5C31\u53EF\u4EE5\u90E8\u7F72 kuboard</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> Kubectl apply \u2013f kuboard-v3-storage-class.yaml  <span class="token comment">#\u90E8\u7F72kuboard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,32),t=[l];function c(d,o){return s(),a("div",null,t)}var u=n(i,[["render",c],["__file","03_\u4F01\u4E1A\u5F00\u53D1\u73AF\u5883\u79C1\u6709\u4E91\u73AF\u5883.html.vue"]]);export{u as default};
