import{_ as n,o as s,c as a,d as e}from"./app.0077dad6.js";const t={},c=e(`<h1 id="\u83B7\u53D6\u5F53\u524D\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u7528\u6237" aria-hidden="true">#</a> \u83B7\u53D6\u5F53\u524D\u7528\u6237</h1><h2 id="\u83B7\u53D6\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6559\u7A0B" aria-hidden="true">#</a> \u83B7\u53D6\u6559\u7A0B</h2><p>\u6B64\u529F\u80FD\u53EA\u80FD\u5728 web \u524D\u7AEF\u5DE5\u7A0B\u4E2D\u83B7\u53D6\uFF0C\u800C\u4E14\u7528\u6237\u5DF2\u767B\u9646\uFF0C\u83B7\u53D6\u4EE3\u7801:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u83B7\u53D6\u5F53\u524D\u767B\u9646\u7528\u6237</span>
<span class="token class-name">ManagerAccountEntity</span> currentAccount <span class="token operator">=</span> <span class="token class-name">CurrentAccountJwt</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u767B\u9646\u7684UserVo</span>
<span class="token class-name">LoginUserVo</span> loginUser <span class="token operator">=</span> <span class="token class-name">CurrentAccountJwt</span><span class="token punctuation">.</span><span class="token function">getUserVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u767B\u9646\u7684\u7528\u6237id</span>
<span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token class-name">CurrentAccountJwt</span><span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D\u7AEF\u901A\u8FC7\u6B64\u83B7\u53D6\u5373\u53EF.</p>`,5),o=[c];function p(i,l){return s(),a("div",null,o)}var u=n(t,[["render",p],["__file","20_\u83B7\u53D6\u5F53\u524D\u7528\u6237.html.vue"]]);export{u as default};
