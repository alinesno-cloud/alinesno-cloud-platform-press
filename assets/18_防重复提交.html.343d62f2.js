import{_ as n,o as a,c as s,d as t}from"./app.c4f755d4.js";const e={},p=t(`<h1 id="\u9632\u91CD\u590D\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u9632\u91CD\u590D\u63D0\u4EA4" aria-hidden="true">#</a> \u9632\u91CD\u590D\u63D0\u4EA4</h1><p>\u5EFA\u8BAE\u9632\u91CD\u590D\u63D0\u4EA4\u5E94\u7528\u573A\u5408\u6709\u4E00\u5B9A\u7684\u9650\u5236,\u6309\u5B9E\u9645\u573A\u666F\u8003\u8651</p><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u9632\u91CD\u590D\u63D0\u4EA4\u96C6\u6210</li></ul><h2 id="\u91CD\u590D\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u96C6\u6210" aria-hidden="true">#</a> \u91CD\u590D\u96C6\u6210</h2><h3 id="\u8BBE\u8BA1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6D41\u7A0B" aria-hidden="true">#</a> \u8BBE\u8BA1\u6D41\u7A0B</h3><p>\u6B64\u5904\u9632\u91CD\u590D\u63D0\u4EA4\u57FA\u4E8E token \u8BBE\u8BA1\uFF0C\u9632\u91CD\u590D\u63D0\u4EA4\u6D41\u7A0B:</p><ul><li>\u5728\u8FDB\u5165\u9875\u9762\u7684\u65F6\u5019\uFF0C\u751F\u6210 token\uFF0C\u5E76\u4FDD\u5B58\u5728 Session \u4E2D</li><li>\u5728\u6DFB\u52A0\u9875\u9762\u6DFB\u52A0 token \u6807\u9898</li><li>\u9996\u6B21\u63D0\u4EA4\uFF0C\u9A8C\u8BC1 token\uFF0C\u540C\u65F6\u6E05\u7406</li><li>\u4E8C\u6B21\u63D0\u4EA4\u9A8C\u8BC1\u662F\u5426\u6709 token\uFF0C\u5982\u6CA1\u6709\u5219\u8FD4\u56DE token \u9519\u8BEF\uFF0C\u4E14\u540E\u53F0\u62A5\u9519</li></ul><h3 id="\u9A8C\u8BC1\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u64CD\u4F5C" aria-hidden="true">#</a> \u9A8C\u8BC1\u64CD\u4F5C</h3><p>\u8FDB\u5165\u9875\u9762\u63A7\u5236\u5C42\uFF0C\u6DFB\u52A0\u6CE8\u89E3<code>@FormToken</code>,\u6CE8\u610F\u6B64\u5904\u53C2\u6570\u4E00\u5B9A\u8981\u6DFB\u52A0<code>Httpservletrequest</code>\uFF0C\u5426\u5219\u4E0D\u751F\u6548\uFF0C\u5982:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FormToken</span><span class="token punctuation">(</span>save<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model <span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9875\u9762<code>&lt;form&gt;</code>\u6807\u7B7E\u4E2D\u6DFB\u52A0 token \u503C,\u5982:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-horizontal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formToken<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${session.formToken}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- \u4EE5\u4E0B\u4E3A\u8868\u5355\u5B57\u6BB5 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4FDD\u5B58\u7684\u65B9\u6CD5\u4E2D\u53BB\u6389 token\uFF0C\u5982:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FormToken</span><span class="token punctuation">(</span>remove<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseBean</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model <span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">DTO</span> dto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E1A\u52A1\u5185\u5BB9</span>

    <span class="token keyword">return</span> <span class="token class-name">ResponseGenerator</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u6B64\u96C6\u6210\u5373\u53EF</p>`,16),o=[p];function c(l,u){return a(),s("div",null,o)}var r=n(e,[["render",c],["__file","18_\u9632\u91CD\u590D\u63D0\u4EA4.html.vue"]]);export{r as default};
