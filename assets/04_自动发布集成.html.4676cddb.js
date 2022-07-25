import{_ as p,o as l,c as o,a as n,e,b as s,d as t,r as c}from"./app.c471abb8.js";var i="/framework/02_person.png",u="/framework/01_dingtalk_jenkins.png";const r={},k=n("h1",{id:"\u81EA\u52A8\u53D1\u5E03\u96C6\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u81EA\u52A8\u53D1\u5E03\u96C6\u6210","aria-hidden":"true"},"#"),s(" \u81EA\u52A8\u53D1\u5E03\u96C6\u6210")],-1),d=n("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B\u5DE5\u7A0B")],-1),v=s("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),m={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},b=s("\u6253\u5F00"),_=t('<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u81EA\u52A8\u53D1\u5E03\u7684\u5F62\u5F0F\uFF0C\u5305\u542B docker/k8s/jenkinsfile/GithubAction</li><li>\u81EA\u52A8\u53D1\u5E03\u4F7F\u7528\u548C\u9488\u5BF9\u7684\u573A\u666F</li><li>\u591A\u73AF\u5883\u914D\u7F6E\u7684\u5207\u6362\u548C\u914D\u7F6E</li><li>\u53D1\u5E03\u96C6\u6210\u9489\u9489\u76D1\u63A7\u548C\u53D1\u5E03\u6548\u679C</li></ul><h2 id="\u81EA\u52A8\u5316\u53D1\u5E03\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u53D1\u5E03\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u53D1\u5E03\u7684\u64CD\u4F5C</h2><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u96C6\u6210\u81EA\u52A8\u5316\u7684\u64CD\u4F5C\uFF0C\u4E5F\u662F devops \u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u4E3B\u8981\u662F CICD \u6574\u5408\uFF0C\u8FBE\u5230\u4EE5\u4E0B\u76EE\u6807:</p><img src="'+i+`"><h3 id="docker-\u53D1\u5E03\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#docker-\u53D1\u5E03\u65B9\u5F0F" aria-hidden="true">#</a> docker \u53D1\u5E03\u65B9\u5F0F</h3><p>docker \u53D1\u5E03\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u8FD9\u90E8\u5206\u4E3A\u9ED8\u8BA4\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u5305\u542B\u524D\u7AEF\u548C\u540E\u53F0\uFF0C\u7ECF\u8FC7\u4E00\u5B9A\u7684\u5904\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u540E\u53F0\u57FA\u7840\u955C\u50CF</span>
registry.cn-shenzhen.aliyuncs.com/alinesno-base/openjdk11:11.0.9

<span class="token comment"># \u524D\u7AEF\u57FA\u7840\u955C\u50CF</span>
registry.cn-shenzhen.aliyuncs.com/alinesno-base/nginx-alpha:1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u76F8\u5173\u95EE\u9898\uFF1A</p><ul><li>nginx \u57FA\u7840\u955C\u50CF\u5DF2\u5904\u7406 vue \u524D\u7AEF\u51FA\u73B0\u7684 404 \u95EE\u9898</li><li>\u540E\u53F0\u57FA\u7840\u955C\u50CF\u76F8\u5BF9\u8F83\u5927\uFF0C\u6B64\u9700\u8981\u6CE8\u610F\uFF0C\u5305\u542B\u6709\u4E00\u5B9A\u7684\u8C03\u8BD5\u547D\u4EE4</li></ul><h3 id="\u540E\u53F0\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03" aria-hidden="true">#</a> \u540E\u53F0\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03</h3><p>\u901A\u8FC7<code>-D</code>\u4F20\u9012\u76F8\u5173\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u591A\u79CD\u73AF\u5883\u5207\u6362\u901A\u8FC7<code>application-env.yml</code>\u8FDB\u884C\u5207\u6362\uFF0C\u8FD0\u884C docker</p><blockquote><p>k8s \u8BF7\u53C2\u8003\u793A\u4F8B\u5DE5\u7A0B</p></blockquote><p>\u8FD0\u884C\u5DE5\u7A0B\uFF0C\u6B64\u5904\u6CE8\u610F\u4E0D\u8981\u51FA\u73B0\u7A7A\u683C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">ALIYUN_CR_HOST</span><span class="token operator">=</span>registry.cn-shenzhen.aliyuncs.com
<span class="token assign-left variable">ALIYUN_CR_NAMESPACE</span><span class="token operator">=</span>alinesno-cloud-incubator
<span class="token assign-left variable">PRO_NAME</span><span class="token operator">=</span>alinesno-cloud-base-authority-boot
<span class="token assign-left variable">PRO_VERSION</span><span class="token operator">=</span><span class="token number">2.1</span>.2-RC
<span class="token assign-left variable">EXPOSE_PORT</span><span class="token operator">=</span><span class="token number">8080</span>
<span class="token assign-left variable">DOCKER_PORT</span><span class="token operator">=</span><span class="token number">8080</span>
<span class="token assign-left variable">PROFILES_ACTIVE</span><span class="token operator">=</span>pro

<span class="token function">docker</span> <span class="token function">rm</span> -f <span class="token variable">$PRO_NAME</span>  <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token function">docker</span> pull <span class="token variable">$ALIYUN_CR_HOST</span>/<span class="token variable">$ALIYUN_CR_NAMESPACE</span>/<span class="token variable">$PRO_NAME</span><span class="token builtin class-name">:</span><span class="token variable">$PRO_VERSION</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">JAVA_TOOL_OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;-Dspring.profiles.active=<span class="token variable">$PROFILES_ACTIVE</span>&quot;</span> <span class="token punctuation">\\</span>
-p <span class="token variable">$EXPOSE_PORT</span><span class="token builtin class-name">:</span><span class="token variable">$DOCKER_PORT</span> <span class="token punctuation">\\</span>
--name <span class="token variable">$PRO_NAME</span>  <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span><span class="token string">&quot;always&quot;</span> <span class="token punctuation">\\</span>
-d <span class="token variable">$ALIYUN_CR_HOST</span>/<span class="token variable">$ALIYUN_CR_NAMESPACE</span>/<span class="token variable">$PRO_NAME</span><span class="token builtin class-name">:</span><span class="token variable">$PRO_VERSION</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u53F0\u67E5\u8BE2\u5BB9\u5668\u8FD0\u884C\u7684\u60C5\u51B5<code>docker ps | grep xxxx</code>\uFF0C\u5373\u53EF\u67E5\u770B\u76D1\u63A7</p><h3 id="\u524D\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03\u548C\u66F4\u65B0\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03\u548C\u66F4\u65B0\u811A\u672C" aria-hidden="true">#</a> \u524D\u7AEF\u5BB9\u5668\u5316\u53D1\u5E03\u548C\u66F4\u65B0\u811A\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">ALIYUN_CR_HOST</span><span class="token operator">=</span>registry.cn-shenzhen.aliyuncs.com
<span class="token assign-left variable">ALIYUN_CR_NAMESPACE</span><span class="token operator">=</span>alinesno-cloud-incubator
<span class="token assign-left variable">PRO_NAME</span><span class="token operator">=</span>alinesno-cloud-demo-ui
<span class="token assign-left variable">PRO_VERSION</span><span class="token operator">=</span><span class="token number">2.1</span>.2-RC
<span class="token assign-left variable">EXPOSE_PORT</span><span class="token operator">=</span><span class="token number">8080</span>
<span class="token assign-left variable">DOCKER_PORT</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token function">docker</span> <span class="token function">rm</span> -f <span class="token variable">$PRO_NAME</span>  <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token function">docker</span> pull <span class="token variable">$ALIYUN_CR_HOST</span>/<span class="token variable">$ALIYUN_CR_NAMESPACE</span>/<span class="token variable">$PRO_NAME</span><span class="token builtin class-name">:</span><span class="token variable">$PRO_VERSION</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
-p <span class="token variable">$EXPOSE_PORT</span><span class="token builtin class-name">:</span><span class="token variable">$DOCKER_PORT</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">API_BASE_URL</span><span class="token operator">=</span><span class="token string">&quot;http://alinesno-demo.admin.beta.linesno.com&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">SERVER_CDN_URL</span><span class="token operator">=</span><span class="token string">&quot;http://data.linesno.com/alinesno-cloud-demo-ui&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">SERVER_STORAGE_UPLOAD_URL</span><span class="token operator">=</span><span class="token string">&quot;http://alinesno-demo.admin.beta.linesno.com/common/storage/upload&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">SERVER_STORAGE_DISPLAY_URL</span><span class="token operator">=</span><span class="token string">&quot;http://alinesno-demo.admin.beta.linesno.com/common/storage/displayImg/&quot;</span> <span class="token punctuation">\\</span>
 --name <span class="token variable">$PRO_NAME</span>  <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span><span class="token string">&quot;always&quot;</span> <span class="token punctuation">\\</span>
-d <span class="token variable">$ALIYUN_CR_HOST</span>/<span class="token variable">$ALIYUN_CR_NAMESPACE</span>/<span class="token variable">$PRO_NAME</span><span class="token builtin class-name">:</span><span class="token variable">$PRO_VERSION</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u53F0\u67E5\u8BE2\u5BB9\u5668\u8FD0\u884C\u7684\u60C5\u51B5<code>docker ps | grep xxxx</code>\uFF0C\u5373\u53EF\u67E5\u770B\u76D1\u63A7</p><h3 id="k8s-\u53D1\u5E03\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#k8s-\u53D1\u5E03\u65B9\u5F0F" aria-hidden="true">#</a> k8s \u53D1\u5E03\u65B9\u5F0F</h3><p>\u8FD9\u91CC\u96C6\u6210\u7684 k8s \u914D\u7F6E\u8BF4\u660E\u5982\u4E0B\uFF0C\u8FD9\u91CC\u53EA\u5217\u51FA\u4E3B\u8981\u7684\u914D\u7F6E\u9879\uFF0C\u8FD9\u91CC\u63A8\u8350\u4E00\u952E\u66FF\u6362\u7684\u65B9\u5F0F<code>alinesno-cloud-shop-manage-boot</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> learner<span class="token punctuation">-</span>project
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>login
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
          <span class="token key atrule">image</span><span class="token punctuation">:</span> registry<span class="token punctuation">-</span>vpc.cn<span class="token punctuation">-</span>shenzhen.aliyuncs.com/alinesno<span class="token punctuation">-</span>cloud/alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot<span class="token punctuation">:</span>0.0.1<span class="token punctuation">-</span>SNAPSHOT
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
              <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRING_APPLICATION_NAME
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;alinesno-cloud-shop-manage-boot&#39;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SERVER_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;8080&#39;</span>
            <span class="token comment"># \u73AF\u5883\u53D8\u91CF\u7684\u914D\u7F6E\uFF0C\u8FD9\u91CC\u5EFA\u8BAE\u4E0Espring\u6574\u5408</span>
          <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
            <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
              <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
            <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">60</span>
            <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
            <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">45</span>
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> learner<span class="token punctuation">-</span>project
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">-</span>boot
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> dubbo<span class="token punctuation">-</span>provider
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8180</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8180</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>shop<span class="token punctuation">-</span>manage<span class="token punctuation">-</span>boot
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u5148\u5728\u547D\u4EE4\u914D\u7F6E\u597D docker-login</li><li>\u955C\u50CF\u7684\u5730\u5740\u662F\u5426\u6B63\u786E</li><li>\u7AEF\u53E3\u662F\u5426\u6B63\u786E</li><li>\u8FD9\u91CC\u662F<code>application-hub.yml</code>\u6574\u5408\u7684\uFF0C\u6CE8\u610F\u73AF\u5883\u53D8\u91CF</li></ul><h3 id="githubaction-\u53D1\u5E03\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#githubaction-\u53D1\u5E03\u65B9\u5F0F" aria-hidden="true">#</a> GithubAction \u53D1\u5E03\u65B9\u5F0F</h3><p>github action \u662F\u4E00\u4E2A\u4F18\u79C0\u7684\uFF0C\u57FA\u4E8E\u5F00\u6E90\u7684\u81EA\u52A8\u5316\u6784\u5EFA\uFF0C\u76F8\u5173\u5BF9\u90E8\u5206\u514D\u8D39\u6216\u8005\u4E2A\u4EBA\u6765\u8BF4\uFF0C\u8FD9\u4E0D\u5931\u4E3A\u4E00\u4E2A\u8F83\u597D\u7684\u9009\u62E9\uFF0C \u540C\u65F6\u63D2\u4EF6\u76F8\u5F53\u591A\uFF0C\u7A33\u5B9A\u6027\u76F8\u5BF9\u8F83\u9AD8\uFF0C\u5F53\u524D\u6587\u6863\u7684\u53D1\u5E03\u5373\u901A\u8FC7\u6B64\u53D1\u5E03\uFF0C\u90E8\u5206\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build the Docker image
  <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    docker version
    docker login --username=\${{ secrets.DOCKER_USERNAME }} --password=\${{ secrets.DOCKER_PASSWORD }} registry.cn-shenzhen.aliyuncs.com
    docker build . --file Dockerfile --tag \${{ env.ALIYUN_CR_HOST }}/\${{ env.ALIYUN_CR_NAMESPACE }}/\${{ env.PRO_NAME }}:\${{ env.PRO_VERSION }}
    docker push \${{ env.ALIYUN_CR_HOST }}/\${{ env.ALIYUN_CR_NAMESPACE }}/\${{ env.PRO_NAME }}:\${{ env.PRO_VERSION }}</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docker multiple command
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      docker rm -f \${{ env.PRO_NAME }} 
      docker pull \${{ env.ALIYUN_CR_HOST }}/\${{ env.ALIYUN_CR_NAMESPACE }}/\${{ env.PRO_NAME }}:\${{ env.PRO_VERSION }}
      docker run -p \${{ env.EXPOSE_PORT }}:80 --name \${{ env.PRO_NAME }} --restart=&quot;always&quot; -d \${{ env.ALIYUN_CR_HOST }}/\${{ env.ALIYUN_CR_NAMESPACE }}/\${{ env.PRO_NAME }}:\${{ env.PRO_VERSION }}</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy k8s yaml file via ssh password
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/scp<span class="token punctuation">-</span>action@master
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.k8S_HOST_PORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&#39;k8s-dev.yaml,k8s-dev-ingress.yaml&#39;</span>
    <span class="token key atrule">target</span><span class="token punctuation">:</span> <span class="token string">&#39;projects/\${{ env.PRO_NAME }}&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docker to K8S
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.K8S_HOST_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.k8S_HOST_PORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      kubectl version
      kubectl apply -f projects/\${{ env.PRO_NAME }}/k8s-dev.yaml
      kubectl apply -f projects/\${{ env.PRO_NAME }}/k8s-dev-ingress.yaml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),h=s("\u5177\u4F53\u53EF\u67E5\u770B\u914D\u7F6E\u793A\u4F8B"),y={href:"https://gitee.com/alinesno-cloud/alinesno-platform-press/blob/master/.github/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"},g=s("\u67E5\u770B"),R=t('<h3 id="jenkinsfile-\u53D1\u5E03\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#jenkinsfile-\u53D1\u5E03\u65B9\u5F0F" aria-hidden="true">#</a> JenkinsFile \u53D1\u5E03\u65B9\u5F0F</h3><blockquote><p>\u5F85\u8865\u5145 jenkinsfile \u8BF4\u660E\uFF0C\u5F53\u524D\u672A\u96C6\u6210</p></blockquote><p>jenkinsfile \u662F\u540E\u9762\u96C6\u6210\u7684\u4E3B\u8981\u53D1\u5E03\u5F62\u5F0F\uFF0C\u540C\u65F6\u63A8\u8350\u4F7F\u7528 jenkinsfile \u66F4\u52A0\u7075\u6D3B\u7684\u914D\u7F6E\u548C\u66F4\u52A0\u5B89\u5168</p><h2 id="\u96C6\u6210\u9489\u9489\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u9489\u9489\u901A\u77E5" aria-hidden="true">#</a> \u96C6\u6210\u9489\u9489\u901A\u77E5</h2><p>\u4E5F\u53EF\u96C6\u6210\u90AE\u4EF6\u901A\u77E5\uFF0C\u8FD9\u91CC\u66F4\u52A0\u63A8\u8350 DingTalk \u901A\u77E5\uFF0C\u65B9\u4FBF\u4E00\u4E2A\u5165\u53E3\u8FD0\u7EF4</p><p>\u5728 jenkins \u4E2D\u5B89\u88C5<code>dingtalk</code>\u63D2\u4EF6\uFF0C\u96C6\u6210\u6548\u679C\u5982\u4E0B:</p><img src="'+u+'" style="width:500px;"><p>\u8FD9\u91CC\u4E3B\u8981\u53E6\u4E00\u4E2A\u8003\u8651\u70B9\u662F\u57FA\u4E8E<code>ChatOps</code>\u7684\u64CD\u4F5C\uFF0C\u96C6\u6210\u76D1\u63A7\u81EA\u52A8\u5316\u4E00\u4F53\u5316</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>',10);function O(E,S){const a=c("ExternalLinkIcon");return l(),o("div",null,[k,d,n("p",null,[v,n("a",m,[b,e(a)])]),_,n("p",null,[h,n("a",y,[g,e(a)])]),R])}var P=p(r,[["render",O],["__file","04_\u81EA\u52A8\u53D1\u5E03\u96C6\u6210.html.vue"]]);export{P as default};
