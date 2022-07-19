import{_ as a,o as n,c as s,d as t}from"./app.33570056.js";const e={},p=t(`<h1 id="cdn-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#cdn-\u914D\u7F6E" aria-hidden="true">#</a> CDN \u914D\u7F6E</h1><h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>CDN \u914D\u7F6E\u662F\u4E3A\u4E86\u52A0\u5FEB\u9875\u9762\u8BBF\u95EE\u901F\u5EA6\uFF0C\u505A\u5230\u52A8\u9759\u5206\u79BB\uFF0C\u9002\u7528\u4E8E\u7EDF\u4E00\u7684\u9759\u6001\u6587\u4EF6</p><h2 id="\u914D\u7F6E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u6CD5</h2><p>\u914D\u7F6E yaml \u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">global</span><span class="token punctuation">:</span>
    <span class="token key atrule">cdn</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>CDN<span class="token punctuation">:</span>http<span class="token punctuation">:</span>//training<span class="token punctuation">-</span>static.alinesno.com<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN \u914D\u7F6E\u5728\u9759\u6001\u6587\u4EF6\u524D\u9762\u6DFB\u52A0<code>\${cdn}</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// css\u6587\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{\${cdn}+<span class="token punctuation">&#39;</span>/asserts/constom/css/ry-ui.css<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

// js\u6587\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{\${cdn}+<span class="token punctuation">&#39;</span>/asserts/ajax/libs/bootstrap-table/bootstrap-table.min.css<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,10),c=[p];function l(o,u){return n(),s("div",null,c)}var r=a(e,[["render",l],["__file","31_CDN\u914D\u7F6E.html.vue"]]);export{r as default};
