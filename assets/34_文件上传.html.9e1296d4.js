import{_ as s,o as t,c as p,a as e,d as n}from"./app.cbb5065b.js";const o={},c=n(`<h1 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6587\u4EF6\u4E0A\u4F20\u63D0\u4F9B\u7684\u662F\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u548C\u4E91\u5B58\u50A8\u4E0A\u4F20\u529F\u80FD,\u540C\u65F6\u8FD4\u56DE\u4E0A\u4F20\u540E\u7684\u8DEF\u5F84</p><h3 id="\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD" aria-hidden="true">#</a> \u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD</h3><p>\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\u662F\u7CFB\u7EDF\u9ED8\u8BA4\u4E0A\u4F20\u529F\u80FD\u3002</p><p>\u5F15\u5165\u811A\u672C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u6587\u4EF6\u4E0A\u4F20\u8F93\u5165\u6846 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputFiles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u6587\u4EF6\u4E0A\u4F20_start , \u540E\u671F\u505A\u4F18\u5316\u8C03\u6574 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/asserts/ajax/libs/bootstrap-fileinput/fileinput.min.css}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/asserts/ajax/libs/bootstrap-fileinput/themes/explorer/theme.min.css}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/asserts/ajax/libs/bootstrap-fileinput/fileinput.min.js}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/asserts/ajax/libs/bootstrap-fileinput/themes/explorer/theme.min.js}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u6587\u4EF6\u4E0A\u4F20_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u8F93\u5165\u6846</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      $<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">initBootstrapInput</span><span class="token punctuation">(</span><span class="token string">&quot;inputFiles&quot;</span> <span class="token punctuation">,</span> ctx <span class="token operator">+</span> <span class="token string">&quot;web/storage/bootstrapInputMultiUpload&quot;</span> <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data <span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> path <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>filepath <span class="token punctuation">;</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;path = &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span> <span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B</p>`,10),l=["src"],u=n(`<h3 id="\u4E91\u5B58\u50A8\u4E0A\u4F20\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E91\u5B58\u50A8\u4E0A\u4F20\u529F\u80FD" aria-hidden="true">#</a> \u4E91\u5B58\u50A8\u4E0A\u4F20\u529F\u80FD</h3><p>\u4E91\u5B58\u50A8\u4E0A\u4F20\u6709\u4E00\u5B9A\u7684\u5927\u5C0F\u9650\u5236\u548C\u573A\u666F\u9650\u5236\uFF0C\u6EE1\u8DB3\u4E00\u822C\u7684\u5B58\u50A8\u529F\u80FD\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u4E3A<code>\u4E03\u725B\u4E91\u5B58\u50A8</code>\uFF0C\u9002\u7528\u4E8E\u591A\u4E2A\u5206\u5E03\u5F0F\u7EC4\u4EF6\u7684\u5B58\u50A8\u8C03\u7528\u3002</p><p>\u5F15\u5165\u4E91\u5B58\u50A8\u63A5\u53E3\u8DEF\u5F84</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">cloud.path</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>25003/storageFile/upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E91\u5B58\u50A8\u4E0A\u4F20\u8DEF\u5F84\u505A\u8C03\u6574\uFF0C\u5373</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    $<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">initBootstrapInput</span><span class="token punctuation">(</span><span class="token string">&quot;inputFiles&quot;</span> <span class="token punctuation">,</span> ctx <span class="token operator">+</span> <span class="token string">&quot;web/storage/bootstrapInputCloudUpload&quot;</span> <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data <span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> path <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>filepath <span class="token punctuation">;</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;path = &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,8);function i(a,r){return t(),p("div",null,[c,e("img",{src:a.$withBase("/technique/06_upload.png")},null,8,l),u])}var d=s(o,[["render",i],["__file","34_\u6587\u4EF6\u4E0A\u4F20.html.vue"]]);export{d as default};
