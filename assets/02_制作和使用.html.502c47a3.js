import{_ as n,o as s,c as a,d as e}from"./app.675cbf49.js";const i={},l=e(`<h1 id="\u5236\u4F5C\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C\u548C\u4F7F\u7528" aria-hidden="true">#</a> \u5236\u4F5C\u548C\u4F7F\u7528</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u4F7F\u7528 docker-build\uFF0C\u7ED3\u5408\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\uFF08300 \u4E2A\u4EBA\u514D\u8D39\u4ED3\u5E93\uFF09</p><h2 id="\u6784\u5EFA\u811A\u672C\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u811A\u672C\u5982\u4E0B" aria-hidden="true">#</a> \u6784\u5EFA\u811A\u672C\u5982\u4E0B\uFF1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6784\u5EFA\u57FA\u7840yolov5\u5B66\u4E60\u73AF\u5883\u955C\u50CF</span>
<span class="token comment"># \u5148\u767B\u9646\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93</span>

<span class="token comment"># \u63A5\u6536\u6307\u5B9A\u73AF\u5883\u53C2\u6570</span>
<span class="token assign-left variable">VER</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$VER</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">VER</span><span class="token operator">=</span><span class="token string">&quot;1.0.0&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F53\u524D\u7248\u672C\u4E3A:<span class="token variable">$VER</span>&quot;</span>

<span class="token comment"># 1. \u6784\u5EFA\u955C\u50CF</span>
<span class="token function">docker</span> build <span class="token builtin class-name">.</span> -t registry-vpc.cn-shenzhen.aliyuncs.com/alinesno-base/vision-yolov5-base:<span class="token variable">$VER</span>

<span class="token comment"># 2. \u63A8\u9001\u955C\u50CF</span>
<span class="token function">docker</span> push registry-vpc.cn-shenzhen.aliyuncs.com/alinesno-base/vision-yolov5-base:<span class="token variable">$VER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,7),c=[l];function o(t,r){return s(),a("div",null,c)}var p=n(i,[["render",o],["__file","02_\u5236\u4F5C\u548C\u4F7F\u7528.html.vue"]]);export{p as default};
