import{_ as n,o as s,c as a,d as e}from"./app.14643acd.js";const t={},p=e(`<h1 id="\u4F7F\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u6570" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u6570</h1><p>\u53C2\u6570\u8BBE\u7F6E\u662F\u63D0\u4F9B\u5F00\u53D1\u4EBA\u5458\u3001\u5B9E\u65BD\u4EBA\u5458\u7684\u52A8\u6001\u7CFB\u7EDF\u914D\u7F6E\u53C2\u6570\uFF0C\u4E0D\u9700\u8981\u53BB\u9891\u7E41\u4FEE\u6539\u540E\u53F0\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u65E0\u9700\u91CD\u542F\u670D\u52A1\u5668\u5373\u53EF\u751F\u6548\u3002</p><p>1\u3001main.js \u4E2D\u5F15\u5165\u5168\u5C40\u53D8\u91CF\u548C\u65B9\u6CD5\uFF08\u5DF2\u6709\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getConfigKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/system/config&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>getConfigKey <span class="token operator">=</span> getConfigKey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u9875\u9762\u4F7F\u7528\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token string">&#39;\u53C2\u6570\u952E\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>xxxxx <span class="token operator">=</span> response<span class="token punctuation">.</span>msg
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","10_\u4F7F\u7528\u53C2\u6570.html.vue"]]);export{u as default};
