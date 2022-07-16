import{_ as e,o as i,c as l,a,e as o,b as s,d as r,r as t}from"./app.abe7257d.js";const c={},p=a("h1",{id:"\u5BB9\u5668\u5316\u96C6\u6210",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5BB9\u5668\u5316\u96C6\u6210","aria-hidden":"true"},"#"),s(" \u5BB9\u5668\u5316\u96C6\u6210")],-1),d=a("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B\u5DE5\u7A0B")],-1),u=s("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),b={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},v=s("\u6253\u5F00"),m=r(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5FEB\u901F\u96C6\u6210\u5BB9\u5668\u6253\u5305\u7684\u65B9\u5F0F\u548C\u591A\u79CD\u6253\u5305\u65B9\u5F0F</li><li>\u524D\u540E\u7AEF\u6253\u5305\u7684\u65B9\u5F0F</li><li>\u524D\u7AEF\u6253\u5305\u81EA\u5B9A\u4E49\u540E\u7AEF\u57DF\u540D\u65B9\u5F0F</li><li>\u5BB9\u5668\u4E0A\u4F20\u955C\u50CF\u4E2D\u5FC3\u65B9\u5F0F</li></ul><h2 id="\u670D\u52A1\u5DE5\u7A0B\u5BB9\u5668\u5316" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5DE5\u7A0B\u5BB9\u5668\u5316" aria-hidden="true">#</a> \u670D\u52A1\u5DE5\u7A0B\u5BB9\u5668\u5316</h2><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u96C6\u6210<code>jib-maven-plugin</code>\u63D2\u4EF6\uFF0C\u96C6\u6210\u7684\u662F\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93</p><h3 id="\u914D\u7F6E\u670D\u52A1\u5668\u955C\u50CF\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u670D\u52A1\u5668\u955C\u50CF\u8BA4\u8BC1" aria-hidden="true">#</a> \u914D\u7F6E\u670D\u52A1\u5668\u955C\u50CF\u8BA4\u8BC1</h3><p>\u670D\u52A1\u5668\u914D\u7F6E docker-login\uFF0C\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">REGISTRY_USERNAME</span><span class="token operator">=</span>
<span class="token assign-left variable">REGISTRY_PASSWORD</span><span class="token operator">=</span>

<span class="token function">docker</span> login --username<span class="token operator">=</span><span class="token variable">$REGISTRY_USERNAME</span> --password<span class="token operator">=</span><span class="token variable">$REGISTRY_PASSWORD</span> registry.cn-shenzhen.aliyuncs.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BB9\u5668\u5316\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5316\u6253\u5305" aria-hidden="true">#</a> \u5BB9\u5668\u5316\u6253\u5305</h3><blockquote><p>\u8D26\u53F7\u540D\u5BC6\u7801\u53EF\u4EE5\u4F7F\u7528 jenkinsfile \u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u8FD9\u91CC\u505A\u4E86\u663E\u793A\u914D\u7F6E\uFF0C\u4E0D\u592A\u5B89\u5168\uFF0C\u4F8B\u5B50\u5F85\u8865\u5145</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">projectName</span><span class="token operator">=</span>alinesno-cloud-demo-boot

<span class="token comment"># \u81EA\u5B9A\u4E49\u955C\u50CF\u521B\u5EFA\u548C\u8BA4\u8BC1</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_REGISTRY</span><span class="token operator">=</span>registry.cn-shenzhen.aliyuncs.com
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REGISTRY_NAMESPACE</span><span class="token operator">=</span>alinesno-cloud-incubator
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REGISTRY_USERNAME</span><span class="token operator">=</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REGISTRY_PASSWORD</span><span class="token operator">=</span>

mvn -B -U -f <span class="token variable">\${projectName}</span>/pom.xml <span class="token function">install</span> package
mvn -B -U -f <span class="token variable">\${projectName}</span>/pom.xml clean compile jib:build -Ddocker.registry.name<span class="token operator">=</span><span class="token variable">\${REGISTRY_NAMESPACE}</span> -Djib.to.auth.username<span class="token operator">=</span><span class="token variable">\${REGISTRY_USERNAME}</span>  -Djib.to.auth.password<span class="token operator">=</span><span class="token variable">\${REGISTRY_PASSWORD}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u524D\u7AEF\u5DE5\u7A0B\u5BB9\u5668\u5316" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u5BB9\u5668\u5316" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u5BB9\u5668\u5316</h2><p>\u8FD9\u91CC\u4E3B\u8981\u96C6\u6210\u7684\u662F maven \u6253\u5305\u63D2\u4EF6\uFF0C\u4E0E maven \u5DE5\u7A0B\u6574\u5408\u6784\u5EFA\u6253\u5305</p><h3 id="\u524D\u7AEF\u5DE5\u7A0B\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u6253\u5305" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u6253\u5305</h3><p>\u524D\u7AEF\u5DE5\u7A0B\u6253\u6210\u5BB9\u5668\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">projectName</span><span class="token operator">=</span>alinesno-cloud-demo-ui

<span class="token comment"># \u955C\u50CF\u6784\u5EFA\u8BBE\u7F6E\u53D8\u91CF</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">docker_repostory</span><span class="token operator">=</span>registry.cn-shenzhen.aliyuncs.com
<span class="token builtin class-name">export</span> <span class="token assign-left variable">docker_registry_name</span><span class="token operator">=</span>alinesno-cloud-incubator
<span class="token builtin class-name">export</span> <span class="token assign-left variable">project_artifactid</span><span class="token operator">=</span>alinesno-cloud-demo-ui
<span class="token builtin class-name">export</span> <span class="token assign-left variable">project_version</span><span class="token operator">=</span><span class="token number">2.1</span>.2-RC

<span class="token builtin class-name">cd</span> <span class="token variable">\${projectName}</span>/docker
<span class="token function">bash</span> <span class="token variable">\${projectName}</span>/docker/build-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B83<code>build-docker.sh</code>\u8BF7\u67E5\u770B\u793A\u4F8B\u5DE5\u7A0B</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,18);function h(k,_){const n=t("ExternalLinkIcon");return i(),l("div",null,[p,d,a("p",null,[u,a("a",b,[v,o(n)])]),m])}var g=e(c,[["render",h],["__file","09_\u5BB9\u5668\u5316\u96C6\u6210.html.vue"]]);export{g as default};
