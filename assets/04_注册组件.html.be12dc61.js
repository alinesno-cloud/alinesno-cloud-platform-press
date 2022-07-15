import{_ as n,o as a,c as s,d as t}from"./app.b7d50fbe.js";const p={},e=t(`<h1 id="\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a> \u6CE8\u518C\u7EC4\u4EF6</h1><p>vue \u6CE8\u518C\u7EC4\u4EF6\u7684\u4E24\u79CD\u65B9\u5F0F</p><h3 id="\u5C40\u90E8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a> \u5C40\u90E8\u6CE8\u518C</h3><p>\u5728\u5BF9\u5E94\u9875\u4F7F\u7528 components \u6CE8\u518C\u7EC4\u4EF6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>count-to</span> <span class="token attr-name">:startVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>startVal<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:endVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>endVal<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3000<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>count-to</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> countTo <span class="token keyword">from</span> <span class="token string">&#39;vue-count-to&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> countTo <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">startVal</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endVal</span><span class="token operator">:</span> <span class="token number">2020</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u5C40\u6CE8\u518C</h3><p>\u5728 @/main.js \u6587\u4EF6\u4E0B\u6CE8\u518C\u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> countTo <span class="token keyword">from</span> <span class="token string">&#39;vue-count-to&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;countTo&#39;</span><span class="token punctuation">,</span> countTo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>count-to</span> <span class="token attr-name">:startVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>startVal<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:endVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>endVal<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3000<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>count-to</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,10),o=[e];function c(l,u){return a(),s("div",null,o)}var r=n(p,[["render",c],["__file","04_\u6CE8\u518C\u7EC4\u4EF6.html.vue"]]);export{r as default};
