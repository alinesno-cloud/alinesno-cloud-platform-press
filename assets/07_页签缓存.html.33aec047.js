import{_ as n,o as s,c as a,d as e}from"./app.da414333.js";const t={},p=e(`<h1 id="\u9875\u7B7E\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u9875\u7B7E\u7F13\u5B58" aria-hidden="true">#</a> \u9875\u7B7E\u7F13\u5B58</h1><p>\u7531\u4E8E\u76EE\u524D <code>keep-alive</code> \u548C <code>router-view</code> \u662F\u5F3A\u8026\u5408\u7684\uFF0C\u800C\u4E14\u67E5\u770B\u6587\u6863\u548C\u6E90\u7801\u4E0D\u96BE\u53D1\u73B0 <code>keep-alive</code> \u7684 include \u9ED8\u8BA4\u662F\u4F18\u5148\u5339\u914D\u7EC4\u4EF6\u7684 <strong>name</strong> \uFF0C\u6240\u4EE5\u5728\u7F16\u5199\u8DEF\u7531 router \u548C\u8DEF\u7531\u5BF9\u5E94\u7684 view component \u7684\u65F6\u5019\u4E00\u5B9A\u8981\u786E\u4FDD \u4E24\u8005\u7684 name \u662F\u5B8C\u5168\u4E00\u81F4\u7684\u3002(\u5207\u8BB0 name \u547D\u540D\u65F6\u5019\u5C3D\u91CF\u4FDD\u8BC1\u552F\u4E00\u6027 \u5207\u8BB0\u4E0D\u8981\u548C\u67D0\u4E9B\u7EC4\u4EF6\u7684\u547D\u540D\u91CD\u590D\u4E86\uFF0C\u4E0D\u7136\u4F1A\u9012\u5F52\u5F15\u7528\u6700\u540E\u5185\u5B58\u6EA2\u51FA\u7B49\u95EE\u9898)</p><p><strong>DEMO:</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//router \u8DEF\u7531\u58F0\u660E</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;config&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/system/config/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Config&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u53C2\u6570\u8BBE\u7F6E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8DEF\u7531\u5BF9\u5E94\u7684view  system/config/index</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Config&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5B9A\u8981\u4FDD\u8BC1\u4E24\u7740\u7684\u540D\u5B57\u76F8\u540C\uFF0C\u5207\u8BB0\u5199\u91CD\u6216\u8005\u5199\u9519\u3002\u9ED8\u8BA4\u5982\u679C\u4E0D\u5199 name \u5C31\u4E0D\u4F1A\u88AB\u7F13\u5B58.</p>`,6),o=[p];function c(r,i){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","07_\u9875\u7B7E\u7F13\u5B58.html.vue"]]);export{d as default};
