import{_ as o,o as t,c as l,a as s,e,b as n,d as i,r as c}from"./app.13c2a595.js";const p={},r=s("h1",{id:"\u524D\u7AEF\u4EE3\u7801\u751F\u6210",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u524D\u7AEF\u4EE3\u7801\u751F\u6210","aria-hidden":"true"},"#"),n(" \u524D\u7AEF\u4EE3\u7801\u751F\u6210")],-1),d=s("h2",{id:"\u5DE5\u7A0B\u793A\u4F8B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5DE5\u7A0B\u793A\u4F8B","aria-hidden":"true"},"#"),n(" \u5DE5\u7A0B\u793A\u4F8B")],-1),u=n("\u7CFB\u7EDF\u5E94\u7528\u524D\u7AEF\u793A\u4F8B\u5DE5\u7A0B"),m={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-manager-ui",target:"_blank",rel:"noopener noreferrer"},v=n("\u6253\u5F00"),k=i('<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u524D\u7AEF\u4EE3\u7801\u5DE5\u7A0B\u7ED3\u6784</li><li>\u524D\u7AEF\u5DE5\u7A0B\u6253\u5305\u65B9\u5F0F</li><li>\u524D\u7AEF\u7684\u53D8\u91CF\u914D\u7F6E</li><li>\u524D\u7AEF\u52A8\u6001\u540E\u7AEF\u5730\u5740\u914D\u7F6E</li><li>\u524D\u7AEF\u5BB9\u5668\u5316\u6253\u5305\u65B9\u5F0F</li><li>\u524D\u7AEF\u6574\u5408\u4E03\u725B cdn \u65B9\u5F0F</li><li>\u524D\u7AEF\u8986\u76D6\u539F\u754C\u9762\u65B9\u5F0F</li></ul><h2 id="\u81EA\u52A8\u751F\u6210\u524D\u7AEF\u5DE5\u7A0B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210\u524D\u7AEF\u5DE5\u7A0B\u8BF4\u660E" aria-hidden="true">#</a> \u81EA\u52A8\u751F\u6210\u524D\u7AEF\u5DE5\u7A0B\u8BF4\u660E</h2><p>\u524D\u7AEF\u5DE5\u7A0B\u5305\u542B\u4E3A\u57FA\u7840\u7684\u5DE5\u7A0B\u9AA8\u67B6\uFF0C\u7C7B\u4F3C\u4E8E seed \u5DE5\u7A0B\u6A21\u5F0F\uFF0C\u6B64\u4E3A\u540E\u53F0\u7684\u7BA1\u7406\u754C\u9762\uFF0C\u9700\u914D\u7F6E\u540E\u53F0\u5730\u5740\u624D\u53EF\u4EE5\u8DD1\u8D77\u6765\uFF0C \u5982\u6709\u5355\u72EC\u7684\u524D\u7AEF\u7EF4\u62A4\uFF0C\u53EF\u6309\u5B9E\u9645\u56E2\u961F\u67B6\u6784\u8FDB\u884C\u8C03\u6574</p><h3 id="\u524D\u7AEF\u5DE5\u7A0B\u7ED3\u6784\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u7ED3\u6784\u8BF4\u660E</h3>',5),b=n("\u524D\u7AEF\u5DE5\u7A0B\u57FA\u4E8E\u7EC4\u4EF6\u5316\u601D\u8DEF\u8FDB\u884C\u7684\u5F00\u53D1\uFF0C\u63D0\u53D6\u51FA"),h={href:"https://gitee.com/alinesno-cloud/alinesno-cloud-front",target:"_blank",rel:"noopener noreferrer"},g=n("alinesno-ui"),_=n("\u57FA\u7840\u524D\u7AEF\u7EC4\u4EF6\uFF0C\u6B64\u7EC4\u4EF6\u7531\u5E73\u53F0\u7EF4\u62A4\uFF0C\u9ED8\u8BA4\u7684\u4E1A\u52A1\u5DE5\u7A0B\u7ED3\u6784\u5982\u4E0B:"),f=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 babel.config.js
\u251C\u2500\u2500 <span class="token function">docker</span>                       <span class="token comment"># docker\u6253\u5305\u914D\u7F6E</span>
\u2502   \u251C\u2500\u2500 Dockerfile               <span class="token comment"># Dockerfile\u914D\u7F6E</span>
\u2502   \u251C\u2500\u2500 build-docker.sh          <span class="token comment"># \u96C6\u6210\u4E00\u952E\u6253\u5305\u811A\u672C\uFF0C\u5305\u542B\u955C\u50CF\u4E0A\u4F20</span>
\u2502   \u2514\u2500\u2500 replace_api_url.sh       <span class="token comment"># \u524D\u7AEF\u53D8\u91CF/\u5360\u4F4D\u7B26\u53D8\u6362\uFF0C\u8FD9\u91CC\u914D\u7F6E\u52A8\u6001\u540E\u53F0\u5730\u5740</span>
\u251C\u2500\u2500 k8s-dev-ingress.yaml         <span class="token comment"># k8s-ingress\u914D\u7F6E</span>
\u251C\u2500\u2500 k8s-dev.yaml                 <span class="token comment"># k8s-\u670D\u52A1\u914D\u7F6E</span>
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 pom.xml                      <span class="token comment"># \u6253\u5305\u7684\u76F8\u5173\u914D\u7F6E\uFF0C\u8FD9\u91CC\u914D\u7F6E\u4E86yarn\u7684\u7248\u672C\u548C\u6253\u5305dist\u7684\u76EE\u5F55\uFF0C\u96C6\u6210maven\u5DE5\u5177</span>
\u251C\u2500\u2500 public                       <span class="token comment"># \u516C\u5171\u8DEF\u5F84</span>
\u2502   \u251C\u2500\u2500 config.js                <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u76F8\u5173\u73AF\u5883\u53D8\u91CF</span>
\u2502   \u251C\u2500\u2500 favicon.ico
\u2502   \u2514\u2500\u2500 index.html
\u251C\u2500\u2500 qiniu-upload.sh              <span class="token comment"># \u4E03\u725Bcdn\u4E0A\u4F20\u5DE5\u5177\u7C7B\uFF0C\u8FD9\u91CC\u81EA\u5DF1\u5199\u4E86\u4E00\u4E2A\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u4E3B\u8981\u7ED3\u5408jenkins\u4F7F\u7528</span>
\u251C\u2500\u2500 src                          <span class="token comment"># \u5F00\u53D1\u6E90\u7801\u8DEF\u5F84\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662F\u4EE5vue\u7684\u89C4\u8303\u4E3A\u4E3B</span>
\u2502   \u251C\u2500\u2500 api
\u2502   \u251C\u2500\u2500 asserts
\u2502   \u251C\u2500\u2500 components
\u2502   \u251C\u2500\u2500 main.js
\u2502   \u251C\u2500\u2500 permission.js
\u2502   \u251C\u2500\u2500 router
\u2502   \u251C\u2500\u2500 store
\u2502   \u2514\u2500\u2500 views
\u251C\u2500\u2500 vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u53EF\u4EE5\u6309\u81EA\u5DF1\u5B9E\u9645\u7684\u60C5\u51B5\u81EA\u52A8\u914D\u7F6E\u548C\u4FEE\u6539\uFF0C\u4EE5\u7B26\u5408\u81EA\u5DF1\u7684\u67B6\u6784\u4E60\u60EF</p><h3 id="\u524D\u7AEF\u5DE5\u7A0B\u6253\u5305\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u6253\u5305\u65B9\u5F0F" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u6253\u5305\u65B9\u5F0F</h3><p>\u8FD9\u91CC\u4E3B\u8981\u4F7F\u7528<code>yarn + maven</code>\u7ED3\u5408\u6253\u5305\u7684\u65B9\u5F0F\uFF0C\u5F53\u524D yarn \u7684\u4E0B\u8F7D\u8DEF\u5F84\u4E3A\u81EA\u5B9A\u4E49\u7684\u914D\u7F6E\u8DEF\u5F84\uFF0C\u539F\u4E0B\u8F7D\u5730\u5740\u65E0\u6CD5\u4E0B\u8F7D\uFF0C\u914D\u7F6E\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u5176\u5B83\u5177\u4F53\u914D\u7F6E\uFF0C\u8BF7\u67E5\u770B[frontend-maven-plugin]\u63D2\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nodeDownloadRoot</span><span class="token punctuation">&gt;</span></span>https://npm.taobao.org/mirrors/node/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nodeDownloadRoot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>npmDownloadRoot</span><span class="token punctuation">&gt;</span></span>https://registry.npm.taobao.org/npm/-/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>npmDownloadRoot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>yarnDownloadRoot</span><span class="token punctuation">&gt;</span></span>http://data.linesno.com/web-tools/yarn/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>yarnDownloadRoot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D\u7AEF\u6574\u4E2A\u6253\u5305\u8FC7\u7A0B\u5982\u4E0B</p><ul><li>\u4F7F\u7528 mvn \u6253\u5305\u751F\u6210 dist \u76EE\u5F55\uFF0C\u8FD9\u91CC\u7684 node \u548C yarn \u7248\u672C\u4E3A\u56FA\u5B9A\u7248\u672C\uFF0C\u5DE5\u7A0B\u4F1A\u81EA\u52A8\u4E0B\u8F7D</li><li>\u6253\u5305\u751F\u6210\u7684\u76EE\u5F55\u4F1A\u4FDD\u5B58\u5230<code>docker</code>\u76EE\u5F55\u4E0B\u9762\uFF0C\u7ED3\u5408\u955C\u50CF\u6253\u5305</li><li>\u914D\u7F6E build-docker.sh \u6253\u5305\u53D8\u91CF\uFF0C\u6267\u884C build-docker.sh \u547D\u4EE4</li><li>\u6253\u5305\u4E4B\u540E\u4E0A\u4F20\u955C\u50CF\u4ED3\u5E93</li></ul>`,7),x=n("\u914D\u7F6E\u6253\u5305\u53D8\u91CF\u8BF4\u660E\uFF0C\u6B64\u5904\u53EF\u4EE5\u7ED3\u5408"),y=s("code",null,"jenkinsfile",-1),j=n("\u8FDB\u884C\u6574\u5408\u6548\u679C\u66F4\u4F73\uFF0C\u8FD9\u91CC\u7684\u955C\u50CF\u4EE5"),w={href:"https://cr.console.aliyun.com",target:"_blank",rel:"noopener noreferrer"},P=n("\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93"),R=n("\u4E3A\u6574\u5408\u4F8B\u5B50"),S=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u955C\u50CF\u53C2\u6570</span>
<span class="token assign-left variable">docker_repostory</span><span class="token operator">=</span><span class="token variable">$docker_repostory</span>            <span class="token comment"># \u955C\u50CF\u4ED3\u5E93\u5730\u5740</span>
<span class="token assign-left variable">docker_registry_name</span><span class="token operator">=</span><span class="token variable">$docker_registry_name</span>    <span class="token comment"># \u955C\u50CF\u4ED3\u5E93\u7A7A\u95F4</span>
<span class="token assign-left variable">project_artifactid</span><span class="token operator">=</span><span class="token variable">$project_artifactid</span>        <span class="token comment"># \u6253\u5305\u7684\u540D\u79F0</span>
<span class="token assign-left variable">project_version</span><span class="token operator">=</span><span class="token variable">$project_version</span>              <span class="token comment"># \u955C\u50CF\u7248\u672C\u53F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u52A0\u4E86\u663E\u793A\u7684\u5BC6\u7801\u914D\u7F6E\uFF0C\u6B64\u4E3A\u4E0D\u5B89\u5168\uFF0C\u53EF\u901A\u8FC7 jenkins \u6743\u9650\u62E6\u622A\u8FDB\u884C\u914D\u7F6E\uFF0C \u9690\u533F\u7684\u53EF\u4F7F\u7528 jenkins \u7684\u7279\u6027</p><h3 id="\u524D\u7AEF\u7684\u53D8\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u7684\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u524D\u7AEF\u7684\u53D8\u91CF\u914D\u7F6E</h3><p>\u524D\u7AEF\u73AF\u5883\u53D8\u91CF\u4F7F\u7528\u7684 config.js \u4E0E env \u914D\u7F6E\uFF0C\u6709\u51E0\u4E2A\u56FA\u5B9A\u53D8\u91CF\u7684\u8BF4\u660E\uFF1A</p><p>\u5176\u4E2D<code>env.develope</code>\u73AF\u5883\u53D8\u91CF\u8BF4\u660E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u53D1\u73AF\u5883\u914D\u7F6E</span>
ENV <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>

<span class="token comment"># \u5F00\u53D1\u73AF\u5883</span>
VUE_APP_ENV <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>                     <span class="token comment"># \u6B64\u53D8\u91CF\u5FC5\u987B\uFF0C\u5728alinesno-ui\u4E2D\u4F1A\u6709\u90E8\u5206\u901A\u8FC7\u6B64\u5B57\u6BB5\u8FDB\u884C\u5224\u65AD\u73AF\u5883\uFF0C\u4E14\u4E3A\u56FA\u5B9A\u503C</span>
VUE_APP_BASE_API <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>                           <span class="token comment"># \u540E\u7AEF\u5730\u5740</span>
CDN_PATH <span class="token operator">=</span> <span class="token string">&#39;SERVER_CDN_URL&#39;</span>                     <span class="token comment"># CDN\u8DEF\u5F84\u914D\u7F6E\uFF0C\u4F1A\u5728vue.config.js\u4E2D\u4F7F\u7528\u6B64\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u4E3A\u6839\u8DEF\u5F84&#39;/&#39;</span>

<span class="token comment"># \u6587\u4EF6\u4E0A\u4F20_start</span>
VUE_APP_UPLOAD_URL <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>                         <span class="token comment"># \u6587\u4EF6\u4E0A\u4F20\u5730\u5740\uFF0C\u6B64\u5904\u9700\u8981\u6587\u4EF6\u4E0A\u4F20\u4E91\u6587\u4EF6\u7684\u65F6\u5019\u9700\u8981\uFF0C\u524D\u7AEF\u7EC4\u4EF6\u9ED8\u8BA4\u96C6\u6210\u5934\u50CF\u4E0A\u4F20\u901A\u8FC7\u6B64\u53D8\u91CF\u914D\u7F6E</span>
VUE_APP_DISPLAY_URL <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>                        <span class="token comment"># \u6587\u4EF6\u9884\u89C8\u8DEF\u5F84\uFF0C\u524D\u7AEF\u7EC4\u4EF6\u9ED8\u8BA4\u96C6\u6210\u5934\u50CF\u663E\u793A\u53D8\u91CF\u548C\u9ED8\u8BA4\u7684\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u901A\u8FC7\u6B64\u53D8\u91CF</span>
<span class="token comment"># \u6587\u4EF6\u4E0A\u4F20_end</span>

<span class="token comment"># saas env                                      # \u4EE5\u4E0B\u73AF\u5883\u4E3A\u9ED8\u8BA4\u7684\u5E73\u53F0\u53D8\u91CF\uFF0C\u5982\u56E2\u961F\u81EA\u5B9A\u4E49\u4E86\u4E3B\u9898\uFF0C\u4EE5\u4E0B\u4F1A\u88AB\u8986\u76D6</span>
<span class="token assign-left variable">VUE_APP_SASS_TITLE</span><span class="token operator">=</span><span class="token string">&#39;\u4F01\u4E1A\u7EA7\u6570\u5B57\u5316\u4E2D\u53F0&#39;</span>
<span class="token assign-left variable">VUE_APP_SASS_URL</span><span class="token operator">=</span><span class="token string">&#39;http://alinesno-saas.beta.linesno.com&#39;</span>
<span class="token assign-left variable">VUE_APP_SAAS_LOGO_URL</span><span class="token operator">=</span><span class="token string">&#39;http://training-static.linesno.com/fox_cloud/fox_header_color.png&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u524D\u7AEF\u52A8\u6001\u540E\u7AEF\u5730\u5740\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u52A8\u6001\u540E\u7AEF\u5730\u5740\u914D\u7F6E" aria-hidden="true">#</a> \u524D\u7AEF\u52A8\u6001\u540E\u7AEF\u5730\u5740\u914D\u7F6E</h3><p>\u524D\u540E\u7AEF\u57FA\u4E8E\u5BB9\u5668\u5316\u7684\u5206\u5F00\u90E8\u7F72\uFF0C\u53CD\u5411\u4EE3\u7406\u8BF7\u6C42\uFF0C\u52A8\u6001\u914D\u7F6E\u76F8\u5173\u6253\u5305\u4E4B\u540E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684\u662F<code>sed</code>\u547D\u4EE4\u8FDB\u884C\u7684\u5207\u6362</p><p>\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u91CC\u955C\u50CF\u4E2D\u9ED8\u8BA4\u7684\u5DE5\u5177\u7A7A\u95F4\u662F/usr/share/nginx/html</span>
<span class="token function">find</span> <span class="token string">&#39;/usr/share/nginx/html&#39;</span> -name <span class="token string">&#39;*.js&#39;</span> -exec <span class="token function">sed</span> -i -e <span class="token string">&#39;s,SERVER_URL,&#39;</span><span class="token string">&quot;<span class="token variable">$API_BASE_URL</span>&quot;</span>&#39;,g&#39; <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0D\u8003\u8651\u4FEE\u6539\u6216\u8005\u7279\u6B8A\u7684\u53D8\u91CF\uFF0C\u4E0D\u4FEE\u6539<code>replace_api_url.sh</code>\u6587\u4EF6\uFF0C\u6B64\u5904\u4EA6\u53EF\u5728\u6253\u5305\u4E4B\u540E\uFF0C\u901A\u8FC7 jenkins \u63D0\u524D\u66FF\u6362\u53D8\u91CF</p><h3 id="\u524D\u7AEF\u6574\u5408\u4E03\u725B-cdn-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u6574\u5408\u4E03\u725B-cdn-\u65B9\u5F0F" aria-hidden="true">#</a> \u524D\u7AEF\u6574\u5408\u4E03\u725B cdn \u65B9\u5F0F</h3>`,12),A=n("\u8FD9\u91CC\u6574\u5408 cdn \u4E3B\u8981\u662F\u8003\u8651\u5230\u76F8\u5173\u4E92\u8054\u7F51\u8BBF\u95EE\u7684\u60C5\u51B5\u4E0B\u7684\u573A\u666F\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662F\u96C6\u6210\u4E03\u725B cdn"),E={href:"https://gitee.com/landonniao/alinenso-tools-qiniu-upload",target:"_blank",rel:"noopener noreferrer"},L=n("\u67E5\u770B"),V=n("\uFF0C\u5176\u5B83\u7684 sdk \u53EF\u53C2\u8003"),U=i(`<p>\u914D\u7F6E\u4E03\u725B\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u6B64\u90E8\u5206\u5BC6\u94A5\u53EF\u7ED3\u5408 jenkins \u8FDB\u884C\u914D\u7F6E\u6216\u8005\u96C6\u6210\u5230\u670D\u52A1\u5668\u4E2D\uFF0C\u9690\u5F0F\u58F0\u660E\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">accessKey</span><span class="token operator">=</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">secretKey</span><span class="token operator">=</span>-
<span class="token builtin class-name">export</span> <span class="token assign-left variable">spaceBucket</span><span class="token operator">=</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">remoteFolder</span><span class="token operator">=</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">domain</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6784\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u6267\u884C\u4E0A\u4F20\u547D\u4EE4\uFF0C\u4F1A\u81EA\u52A8\u5237\u65B0\u4E03\u725B\u76EE\u5F55\uFF0C\u4E0A\u4F20\u6548\u679C\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>+ <span class="token function">bash</span> qiniu-upload.sh \u4E0A\u4F20\u7684\u76EE\u5F55

\u6587\u4EF6 path <span class="token operator">=</span> alinesno-cloud-authority-ui/config.js \u4E0A\u4F20\u6210\u529F.
<span class="token punctuation">..</span>.

refreshFloder <span class="token comment"># \u5237\u65B0\u76EE\u5F55</span>
<span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u901A\u8FC7<code>domain+remoteFolder</code>\u5373\u53EF\u8BBF\u95EE</p><h3 id="\u524D\u7AEF\u8986\u76D6\u539F\u754C\u9762\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u8986\u76D6\u539F\u754C\u9762\u65B9\u5F0F" aria-hidden="true">#</a> \u524D\u7AEF\u8986\u76D6\u539F\u754C\u9762\u65B9\u5F0F</h3>`,6),D=n("\u8FD9\u91CC\u91C7\u7528\u7684\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u539F\u7EC4\u4EF6\u7684\u7279\u6027\u7684\u65B9\u5F0F\uFF0C\u4EE5\u7EC4\u4EF6\u5316\u7684\u65B9\u5F0F\u8FDB\u884C\u7684\u8C03\u6574\uFF0C\u5177\u4F53\u53EF"),N={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/blob/master/demo-manager-ui/src/components/Layout/SaaSLayout.vue",target:"_blank",rel:"noopener noreferrer"},T=n("\u67E5\u770B\u4F8B\u5B50"),B=i(`<p>\u4EE5\u4E0B\u4E3A\u65B0\u5E03\u5C40\u793A\u4F8B\u8BF4\u660E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u91CC\u4E3A\u5E73\u53F0\u9ED8\u8BA4\u7684\u7EC4\u4EF6</span>
<span class="token keyword">import</span> RightPanel <span class="token keyword">from</span> <span class="token string">&#39;alinesno-ui/packages/Layout/components/RightPanel&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  AppMain<span class="token punctuation">,</span>
  Navbar<span class="token punctuation">,</span>
  Settings<span class="token punctuation">,</span>
  Sidebar<span class="token punctuation">,</span>
  TagsView
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;alinesno-ui/packages/Layout/components&#39;</span>
<span class="token keyword">import</span> ResizeMixin <span class="token keyword">from</span> <span class="token string">&#39;alinesno-ui/packages/Layout/mixin/ResizeHandler&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> variables <span class="token keyword">from</span> <span class="token string">&#39;alinesno-ui/src/assets/styles/variables.scss&#39;</span>

<span class="token comment">// \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6</span>
<span class="token keyword">import</span> SaasTopHeader <span class="token keyword">from</span> <span class="token string">&#39;./TopHeader/index&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B83\u7684\u65B9\u5F0F\uFF0C\u5F85\u5728\u68B3\u7406</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,5);function I(q,$){const a=c("ExternalLinkIcon");return t(),l("div",null,[r,d,s("p",null,[u,s("a",m,[v,e(a)])]),k,s("p",null,[b,s("a",h,[g,e(a)]),_]),f,s("p",null,[x,y,j,s("a",w,[P,e(a)]),R]),S,s("p",null,[A,s("a",E,[L,e(a)]),V]),U,s("p",null,[D,s("a",N,[T,e(a)])]),B])}var H=o(p,[["render",I],["__file","02_\u524D\u7AEF\u4EE3\u7801\u751F\u6210.html.vue"]]);export{H as default};
