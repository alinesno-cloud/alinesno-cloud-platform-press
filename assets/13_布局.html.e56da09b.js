import{_ as n,o as s,c as a,d as t}from"./app.53c39bda.js";const e={},p=t(`<h1 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h1><h2 id="\u5E03\u5C40-1" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40-1" aria-hidden="true">#</a> \u5E03\u5C40</h2><p>\u5E03\u5C40\u4EE3\u7801\u5728 src/layout \u91CC\u3002</p><p>Vue \u524D\u7AEF\u9879\u76EE\u5927\u90E8\u5206\u9875\u9762\u90FD\u57FA\u4E8E\u8FD9\u4E2A layout\uFF0C\u9664\u4E86\u4E2A\u522B\u9875\u9762\u4F8B\u5982\uFF1Alogin\uFF0C404\uFF0C401 \u7B49\u9875\u9762\u3002\u5982\u679C\u60F3\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\u6709\u591A\u79CD\u4E0D\u540C\u7684 layout\uFF0C\u53EA\u8981\u5728\u4E00\u7EA7\u8DEF\u7531\u9009\u62E9\u4E0D\u540C\u7684 layout \u7EC4\u4EF6\u5C31\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// No layout</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/401&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;errorPage/401&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// Has layout</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/documentation&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F60\u53EF\u4EE5\u9009\u62E9\u4E0D\u540C\u7684 layout \u7EC4\u4EF6</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u91CC\u5F00\u59CB\u5BF9\u5E94\u7684\u8DEF\u7531\u90FD\u4F1A\u663E\u793A\u5728\u5185\u5BB9\u533A\u57DF\u4E2D</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;documentation/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;documentation&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u5BB9\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9\u533A\u57DF" aria-hidden="true">#</a> \u5185\u5BB9\u533A\u57DF</h2><p>\u5185\u5BB9\u533A\u57DF\u4EE3\u7801\u5728 src/layout/components/AppMain.vue\u3002</p><p>\u5728\u5185\u5BB9\u533A\u57DF\u5916\u90E8\u5305\u4E86\u4E00\u5C42 keep-alive \u4E3B\u8981\u4E3A\u4E86\u7F13\u5B58 \uFF0C\u914D\u5408\u9875\u9762\u7684 tabs-view \u6807\u7B7E\u5BFC\u822A\u4F7F\u7528\uFF0C\u82E5\u4E0D\u9700\u8981\u53EF\u81EA\u884C\u53BB\u9664\u3002</p><p>\u5176\u4E2D transition \u5B9A\u4E49\u9875\u9762\u4E4B\u95F4\u5207\u6362\u52A8\u753B\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u81EA\u884C\u4FEE\u6539\u8F6C\u573A\u52A8\u753B\u3002\u9ED8\u8BA4\u63D0\u4F9B fade \u548C fade-transform \u4E24\u4E2A\u8F6C\u573A\u52A8\u753B\uFF0C\u5177\u4F53 css \u5B9E\u73B0\u89C1 src/styles/transition.scss\u3002\u5982\u679C\u9700\u8981\u8C03\u6574\u53EF\u5728 AppMain.vue \u4E2D\u8C03\u6574 transition \u7684 name\u3002</p><h2 id="router-view" tabindex="-1"><a class="header-anchor" href="#router-view" aria-hidden="true">#</a> router-view</h2><p>\u8DEF\u7531\u4E0D\u540C\u4F46 Vue \u7EC4\u4EF6\u76F8\u540C\u5728\u771F\u5B9E\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\u5F88\u591A\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> PostCreate<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u521B\u5EFA\u6587\u7AE0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;edit/:id(\\\\d+)&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> PostCreate<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91\u6587\u7AE0&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u548C\u7F16\u8F91\u7684\u9875\u9762\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A component\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u4E24\u4E2A\u9875\u9762\u5207\u6362\u65F6\u4E0D\u4F1A\u89E6\u53D1 Vue \u7684 created \u6216\u8005 mounted \u94A9\u5B50\uFF0CVue \u5B98\u65B9\u8BF4\u53EF\u4EE5\u901A\u8FC7 watch $route \u7684\u53D8\u5316\u8FDB\u884C\u5904\u7406\u3002\u4F46\u66F4\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u5728 router-view \u52A0\u4E0A\u4E00\u4E2A\u552F\u4E00\u7684 key\uFF0C\u4FDD\u8BC1\u8DEF\u7531\u5207\u6362\u65F6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\u89E6\u53D1\u94A9\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-view :key=&quot;key&quot;&gt;&lt;/router-view&gt;

computed: {
  key() {
    // \u53EA\u8981\u4FDD\u8BC1 key \u552F\u4E00\u6027\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4FDD\u8BC1\u4E0D\u540C\u9875\u9762\u7684 key \u4E0D\u76F8\u540C
    return this.$route.fullPath
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u50CF src/views/example \u4E2D editForm \u548C createForm \u58F0\u660E\u4E24\u4E2A\u4E0D\u540C\u7684 view \u4F46\u5F15\u5165\u540C\u4E00\u4E2A component\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- create.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article-detail</span> <span class="token attr-name">:is-edit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article-detail</span><span class="token punctuation">&gt;</span></span> //create
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> ArticleDetail <span class="token keyword">from</span> <span class="token string">&#39;./components/ArticleDetail&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- edit.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article-detail</span> <span class="token attr-name">:is-edit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>true<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article-detail</span><span class="token punctuation">&gt;</span></span> //edit
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> ArticleDetail <span class="token keyword">from</span> <span class="token string">&#39;./components/ArticleDetail&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function l(c,i){return s(),a("div",null,o)}var u=n(e,[["render",l],["__file","13_\u5E03\u5C40.html.vue"]]);export{u as default};
