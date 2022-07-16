import{_ as a,o as n,c as s,d as e}from"./app.1d29d204.js";const t={},p=e(`<h1 id="\u57FA\u7840\u6743\u9650\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6743\u9650\u5E73\u53F0" aria-hidden="true">#</a> \u57FA\u7840\u6743\u9650\u5E73\u53F0</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u57FA\u7840\u6743\u9650\u5E73\u53F0\u63D0\u4F9B\u57FA\u672C\u7684\u8D26\u6237\u7BA1\u7406\uFF0C\u6743\u9650\u7BA1\u7406\u529F\u80FD\uFF0C\u96C6\u6210\u53EF\u4EE5\u4F7F\u7528\u4E2D\u53F0\u6743\u9650\u529F\u80FD\uFF0C\u4E2D\u53F0\u6743\u9650\u529F\u80FD\u57FA\u4E8E SaaS \u5E73\u53F0\u670D\u52A1\uFF0C\u63D0\u4F9B\u591A\u79DF\u6237\u6A21\u5F0F\uFF0C\u4FBF\u4E8E\u591A\u4E2A\u9879\u76EE\u96C6\u6210\u3002</p><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h2><h3 id="\u914D\u7F6E-xml-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-xml-\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E xml \u6587\u4EF6</h3><p>\u5F15\u5165\u670D\u52A1\u63A5\u53E3</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.base.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-base-cloud-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${project.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F51\u5173\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7F51\u5173\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u7F51\u5173\u57FA\u7840\u914D\u7F6E</h3><p>\u914D\u7F6E\u7F51\u5173\u8FDE\u63A5\u5730\u5740</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">connect</span><span class="token punctuation">:</span>
    <span class="token key atrule">base-cloud</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//test.oauth.local<span class="token punctuation">:</span><span class="token number">1111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h3><p>\u8DDF spring \u63A5\u53E3\u670D\u52A1\u4E00\u6837\u8C03\u7528\uFF0C\u4E0D\u6539\u53D8\u4E4B\u524D\u7684\u4E60\u60EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CE8\u5165\u670D\u52A1</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">AuthorityPlatformClient</span> managerCodeService <span class="token punctuation">;</span>

<span class="token comment">// \u670D\u52A1\u8C03\u7528</span>
managerCodeService<span class="token punctuation">.</span><span class="token function">codeListByType</span><span class="token punctuation">(</span><span class="token string">&quot;initializr.admin.project.type&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,15),c=[p];function i(l,o){return n(),s("div",null,c)}var u=a(t,[["render",i],["__file","01_\u57FA\u7840\u6743\u9650\u5E73\u53F0.html.vue"]]);export{u as default};
