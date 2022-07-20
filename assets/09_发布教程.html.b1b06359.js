import{_ as a,o as e,c as s,d as n}from"./app.17e76216.js";const i={},d=n(`<h1 id="\u53D1\u5E03\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u6559\u7A0B" aria-hidden="true">#</a> \u53D1\u5E03\u6559\u7A0B</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5E73\u53F0\u53D1\u5E03\u96C6\u6210\u4E09\u79CD\u53D1\u5E03\u5F62\u5F0F\uFF0C\u4FBF\u4E8E\u9002\u7528\u4E8E\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u5206\u522B\u4E3A:</p><ul><li>[\u4E0D\u63A8\u8350]FastJar \u53D1\u5E03: \u6B64\u9002\u5E94\u4E8E\u4E00\u822C\u670D\u52A1\u5668\u53D1\u5E03\uFF0C\u4FBF\u4E8E\u7BA1\u7406\uFF0C\u901A\u8FC7\u4FEE\u6539<code>yml</code>\u6587\u4EF6\u53CA\u540E\u7F00\uFF0C\u8C03\u6574<code>\u5F00\u53D1</code>\u3001<code>\u6D4B\u8BD5</code>\u3001<code>\u751F\u4EA7</code>\u7B49\u591A\u79CD\u73AF\u5883;</li><li>[\u63A8\u8350]\u5BB9\u5668\u53D1\u5E03\uFF1A\u6B64\u9002\u4E8E k8s \u5BB9\u5668(docker-compose)\u96C6\u6210\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u5BB9\u5668\uFF0C\u901A\u8FC7\u8C03\u6574\u4E0D\u540C\u7684\u53C2\u6570\u9002\u5E94\u591A\u79CD\u73AF\u5883\uFF1B</li></ul><h2 id="\u53D1\u5E03\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u7C7B\u578B" aria-hidden="true">#</a> \u53D1\u5E03\u7C7B\u578B</h2><p>\u53D1\u5E03\u9ED8\u8BA4\u6309\u96C6\u6210 jenkins \u8BF4\u660E</p><h3 id="fastjar-\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#fastjar-\u53D1\u5E03" aria-hidden="true">#</a> FastJar \u53D1\u5E03</h3><blockquote><p>\u6B64\u9002\u5408\u4E8E\u5F00\u53D1\u8FC7\u7A0B</p></blockquote><h4 id="\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h4><ul><li>jenkins \u73AF\u5883</li><li>Linux \u670D\u52A1\u5668</li><li>\u914D\u7F6E\u597D jdk \u53CA\u73AF\u5883</li></ul><h4 id="\u53D1\u5E03\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8FC7\u7A0B" aria-hidden="true">#</a> \u53D1\u5E03\u8FC7\u7A0B</h4><p>\u6B64\u53D1\u5E03\u7C7B\u578B\u4E3A springboot \u81EA\u5E26\u7684\uFF0C\u76F4\u63A5 maven \u547D\u4EE4\u6253\u5305\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn -B -f <span class="token variable">\${WORKSPACE}</span>/pom.xml clean package -U

<span class="token assign-left variable">BUILD_ID</span><span class="token operator">=</span>dontKillMe
<span class="token function">bash</span> ./start.sh restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8:<code>\u5176\u4E2Dstart.sh\u811A\u672C\u4E3A\u5E73\u53F0\u63D0\u4F9B\u7684\u811A\u672C</code></p><h3 id="docker-\u955C\u50CF\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#docker-\u955C\u50CF\u53D1\u5E03" aria-hidden="true">#</a> Docker \u955C\u50CF\u53D1\u5E03</h3><p>Docker \u955C\u50CF\u662F\u5E73\u53F0\u96C6\u6210\u7684\u9ED8\u8BA4\u6253\u5305\u955C\u50CF\uFF0C\u5E73\u53F0\u53EF\u4EE5\u76F4\u63A5\u6253\u5305\u6210 docker \u955C\u50CF\uFF0C\u4FBF\u4E8E\u76F4\u63A5\u53D1\u5E03\u5230\u6D4B\u8BD5\u73AF\u5883</p><h4 id="\u955C\u50CF\u53D1\u5E03\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u53D1\u5E03\u547D\u4EE4" aria-hidden="true">#</a> \u955C\u50CF\u53D1\u5E03\u547D\u4EE4</h4><p>\u542F\u52A8\u793A\u4F8B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run -p <span class="token number">8080</span>:8080 registry.cn-shenzhen.aliyuncs.com/alinesno-cloud/test-student-projcet:<span class="token punctuation">[</span>\u955C\u50CF\u7248\u672C\u53F7<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">JAVA_TOOL_OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;-Xms128m -Xmx512m -Dspring.profiles.active=dev&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="k8s-\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#k8s-\u53D1\u5E03" aria-hidden="true">#</a> K8S \u53D1\u5E03</h3><h4 id="\u524D\u7F6E\u6761\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6-1" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h4><ul><li>jenkins \u73AF\u5883</li><li>k8s \u73AF\u5883</li></ul><h4 id="\u53D1\u5E03\u8FC7\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8FC7\u7A0B-1" aria-hidden="true">#</a> \u53D1\u5E03\u8FC7\u7A0B</h4><p>\u5E73\u53F0\u81EA\u52A8\u751F\u6210\u5F00\u53D1\u73AF\u5883\u7684 k8s.yml \u811A\u672C\u5728\u5DE5\u7A0B\u76EE\u5F55\u4E0B\u9762\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u96C6\u6210\u53D1\u5E03\uFF0C\u540C\u65F6 k8s \u53D1\u5E03\u9700\u8981\u540C\u6B65\u6253\u6210 docker \u955C\u50CF\uFF0C\u53D1\u5E03\u547D\u4EE4\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn -B -f <span class="token variable">\${WORKSPACE}</span>/pom.xml clean compile jib:build

 \u53D1\u5E03k8s
kubectl delete -f  <span class="token variable">\${WORKSPACE}</span>/k8s-dev.yaml
kubectl apply -f  <span class="token variable">\${WORKSPACE}</span>/k8s-dev.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8:<code>\u5148delete\u662F\u5B8C\u5168\u6E05\u9664\uFF0C\u76EE\u524D\u6682\u65F6\u6CA1\u6709\u66F4\u597D\u7684\u529E\u6CD5\uFF0C\u7406\u8BBA\u4E0A\u5E94\u8BE5apply\u547D\u4EE4\u5C31\u53EF\u4EE5</code></p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,28),r=[d];function l(c,t){return e(),s("div",null,r)}var h=a(i,[["render",l],["__file","09_\u53D1\u5E03\u6559\u7A0B.html.vue"]]);export{h as default};
