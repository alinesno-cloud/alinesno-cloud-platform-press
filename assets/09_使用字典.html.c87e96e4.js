import{_ as s,o as n,c as a,d as e}from"./app.c3b22246.js";const t={},p=e(`<h1 id="\u4F7F\u7528\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B57\u5178" aria-hidden="true">#</a> \u4F7F\u7528\u5B57\u5178</h1><p>\u5B57\u5178\u7BA1\u7406\u662F\u7528\u6765\u7EF4\u62A4\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5982\u4E0B\u62C9\u6846\u3001\u5355\u9009\u6309\u94AE\u3001\u590D\u9009\u6846\u3001\u6811\u9009\u62E9\u7684\u6570\u636E\uFF0C\u65B9\u4FBF\u7CFB\u7EDF\u7BA1\u7406\u5458\u7EF4\u62A4\u3002\u4E3B\u8981\u529F\u80FD\u5305\u62EC\uFF1A\u5B57\u5178\u5206\u7C7B\u7BA1\u7406\u3001\u5B57\u5178\u6570\u636E\u7BA1\u7406</p><p>1\u3001main.js \u4E2D\u5F15\u5165\u5168\u5C40\u53D8\u91CF\u548C\u65B9\u6CD5\uFF08\u5DF2\u6709\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDicts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/system/dict/data&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>getDicts <span class="token operator">=</span> getDicts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u9875\u9762\u4F7F\u7528\u6570\u636E\u5B57\u5178</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDicts</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B57\u5178\u7C7B\u578B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>xxxxx <span class="token operator">=</span> response<span class="token punctuation">.</span>data
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function o(i,l){return n(),a("div",null,c)}var u=s(t,[["render",o],["__file","09_\u4F7F\u7528\u5B57\u5178.html.vue"]]);export{u as default};
