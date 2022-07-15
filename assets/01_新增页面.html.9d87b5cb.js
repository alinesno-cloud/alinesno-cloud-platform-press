import{_ as s,o as n,c as a,d as e}from"./app.ba8afeb4.js";const p={},t=e(`<h1 id="\u65B0\u589E\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u9875\u9762" aria-hidden="true">#</a> \u65B0\u589E\u9875\u9762</h1><h3 id="\u65B0\u589E\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531" aria-hidden="true">#</a> \u65B0\u589E\u8DEF\u7531</h3><p>\u9996\u5148\u5728 src/router/index.js \u4E2D\u65B0\u589E\u8DEF\u7531\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/tenant&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;noRedirect&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tenant&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;tenant&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-cloudy-and-sunny&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/systenant&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/admin/systenant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;SysTenant&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;systenant&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-cloudy&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u7EA7\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u76EE\u5F55" aria-hidden="true">#</a> \u591A\u7EA7\u76EE\u5F55</h3><p>\u5982\u679C\u8DEF\u7531\u662F\u591A\u7EA7\u76EE\u5F55\uFF0C\u5982 src/views/nested \u90A3\u6837\u6709\u4E09\u7EA7\u8DEF\u7531\u5D4C\u5957\uFF0C\u8FD8\u8981\u624B\u52A8\u5728\u4E8C\u7EA7\u76EE\u5F55\u6DFB\u52A0\u4E00\u4E2A <code>&lt;router-view&gt;</code>\u3002\u6709\u591A\u5C11\u7EA7\u8DEF\u7531\u5D4C\u5957\u5C31\u9700\u8981\u591A\u5C11\u4E2A <code>&lt;router-view&gt;</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u7236\u7EA7\u8DEF\u7531\u7EC4\u4EF6 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> xxx html \u5185\u5BB9  <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>router<span class="token operator">-</span>view <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B0\u589E-view" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E-view" aria-hidden="true">#</a> \u65B0\u589E view</h3><p>\u5728 @/views \u6587\u4EF6\u4E0B \u521B\u5EFA\u5BF9\u5E94\u7684\u6587\u4EF6\u5939\uFF0C\u4E00\u822C\u6027\u4E00\u4E2A\u8DEF\u7531\u5BF9\u5E94\u4E00\u4E2A\u6587\u4EF6\uFF0C \u8BE5\u6A21\u5757\u4E0B\u7684\u529F\u80FD\u5C31\u5EFA\u8BAE\u5728\u672C\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939\uFF0C\u5404\u4E2A\u529F\u80FD\u6A21\u5757\u7EF4\u62A4\u81EA\u5DF1\u7684<code>utils</code>\u6216<code>components</code>\u7EC4\u4EF6\u3002</p><h3 id="\u65B0\u589E-api" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E-api" aria-hidden="true">#</a> \u65B0\u589E api</h3><p>\u5728 @/api \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u672C\u6A21\u5757\u5BF9\u5E94\u7684 api \u670D\u52A1\u3002</p><h3 id="\u65B0\u589E\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u7EC4\u4EF6" aria-hidden="true">#</a> \u65B0\u589E\u7EC4\u4EF6</h3><p>\u5728\u5168\u5C40\u7684 @/components \u5199\u4E00\u4E9B\u5168\u5C40\u7684\u7EC4\u4EF6\uFF0C\u5982\u5BCC\u6587\u672C\uFF0C\u5404\u79CD\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u7684\u5206\u9875\u7EC4\u4EF6\u7B49\u7B49\u80FD\u88AB\u516C\u7528\u7684\u7EC4\u4EF6\u3002 \u6BCF\u4E2A\u9875\u9762\u6216\u8005\u6A21\u5757\u7279\u5B9A\u7684\u4E1A\u52A1\u7EC4\u4EF6\u5219\u4F1A\u5199\u5728\u5F53\u524D @/views \u4E0B\u9762\u3002<br> \u5982\uFF1A<code>@/views/system/user/components/xxx.vue</code>\u3002\u8FD9\u6837\u62C6\u5206\u5927\u5927\u51CF\u8F7B\u4E86\u7EF4\u62A4\u6210\u672C\u3002</p><h3 id="\u65B0\u589E\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6837\u5F0F" aria-hidden="true">#</a> \u65B0\u589E\u6837\u5F0F</h3><p>\u9875\u9762\u7684\u6837\u5F0F\u548C\u7EC4\u4EF6\u662F\u4E00\u4E2A\u9053\u7406\uFF0C\u5168\u5C40\u7684 @/style \u653E\u7F6E\u4E00\u4E0B\u5168\u5C40\u516C\u7528\u7684\u6837\u5F0F\uFF0C\u6BCF\u4E00\u4E2A\u9875\u9762\u7684\u6837\u5F0F\u5C31\u5199\u5728\u5F53\u524D <code>views</code>\u4E0B\u9762\uFF0C\u8BF7\u8BB0\u4F4F\u52A0\u4E0A<code>scoped</code> \u5C31\u53EA\u4F1A\u4F5C\u7528\u5728\u5F53\u524D\u7EC4\u4EF6\u5185\u4E86\uFF0C\u907F\u514D\u9020\u6210\u5168\u5C40\u7684\u6837\u5F0F\u6C61\u67D3\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u7F16\u8BD1\u524D */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u7F16\u8BD1\u540E */</span>
<span class="token selector">.example[_v-f3f3eg9]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function r(l,c){return n(),a("div",null,o)}var d=s(p,[["render",r],["__file","01_\u65B0\u589E\u9875\u9762.html.vue"]]);export{d as default};
