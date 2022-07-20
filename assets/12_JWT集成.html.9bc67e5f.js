import{_ as e,o as t,c as p,a as n,e as o,b as a,d as c,r as i}from"./app.3511e8d2.js";const l={},u=n("h1",{id:"jwt\u8BA4\u8BC1\u96C6\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jwt\u8BA4\u8BC1\u96C6\u6210","aria-hidden":"true"},"#"),a(" JWT\u8BA4\u8BC1\u96C6\u6210")],-1),d=n("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),a(" \u793A\u4F8B\u5DE5\u7A0B")],-1),r=a("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),k={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},m=a("\u6253\u5F00"),v=c(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5E73\u53F0\u4EE3\u7801\u751F\u6210\u7684\u9ED8\u8BA4 JWT \u65B9\u5F0F</li><li>\u524D\u540E\u7AEF\u63A5\u53E3\u7684\u96C6\u6210\u8BA4\u8BC1\u65B9\u5F0F</li><li>\u63A5\u53E3\u8DEF\u5F84\u767D\u540D\u5355\u7684\u914D\u7F6E</li></ul><h2 id="\u914D\u7F6E\u96C6\u6210\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u96C6\u6210\u6559\u7A0B" aria-hidden="true">#</a> \u914D\u7F6E\u96C6\u6210\u6559\u7A0B</h2><h3 id="\u5DE5\u7A0B\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u96C6\u6210" aria-hidden="true">#</a> \u5DE5\u7A0B\u96C6\u6210</h3><p>jwt \u96C6\u6210\u4F7F\u7528\u7684\u662F Spring Security \u751F\u6210\u65B9\u5F0F\uFF0C\u4E0E<code>authority</code>\u8D44\u6E90\u5F15\u64CE\u8FDB\u884C\u7684\u4EA4\u4E92\u83B7\u53D6\u7528\u6237\u76F8\u5173\u4FE1\u606F\uFF0C\u5DE5\u7A0B\u6DFB\u52A0\u4F9D\u8D56:</p><blockquote><p>\u6B64\u5DE5\u7A0B\u5EFA\u8BAE\u5728 gateway \u5DE5\u7A0B\u91CC\u9762\u6DFB\u52A0</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common.web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-web-api-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${alinesno.cloud.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u7C7B\u6DFB\u52A0\u6CE8\u89E3\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableApi</span> <span class="token comment">// \u6743\u9650\u8BA4\u8BC1\u6CE8\u89E3</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u5355\u72EC\u7684\u5FAE\u670D\u52A1\u5DE5\u7A0B\uFF0C\u53EF\u4E0D\u7528\u96C6\u6210 jwt \u8BA4\u8BC1\u3002</p><h3 id="\u767D\u540D\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u767D\u540D\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u767D\u540D\u5355\u914D\u7F6E</h3><p>\u5728 yaml \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0\u767D\u540D\u5355\u914D\u7F6E\uFF0C\u5982\u4E0B</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">anons</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /public/<span class="token important">**</span>
    <span class="token punctuation">-</span> /common/mypath/<span class="token important">**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,15);function h(g,b){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,d,n("p",null,[r,n("a",k,[m,o(s)])]),v])}var f=e(l,[["render",h],["__file","12_JWT\u96C6\u6210.html.vue"]]);export{f as default};
