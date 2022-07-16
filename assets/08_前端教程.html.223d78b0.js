import{_ as t,o as p,c as e,a as n,d as a,b as c}from"./app.674cd562.js";const o={},l=a(`<h1 id="\u524D\u7AEF\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u96C6\u6210" aria-hidden="true">#</a> \u524D\u7AEF\u96C6\u6210</h1><p>\u524D\u7AEF\u96C6\u6210\u6709\u4E09\u79CD\u65B9\u5F0F\uFF0C\u5206\u522B\u5982\u4E0B:</p><ul><li>\u7528\u6237\u6743\u9650\u96C6\u6210:\u6B64\u4E00\u822C\u7528\u4E8E\u540E\u53F0\uFF0C\u9700\u8981\u5206\u914D\u6743\u9650\u624D\u80FD\u8FDB\u5165</li><li>\u524D\u7AEF\u6837\u5F0F\u96C6\u6210:\u53EA\u662F\u96C6\u6210\u540E\u53F0\u6837\u5F0F\uFF0C\u53EA\u9700\u8981\u663E\u793A</li><li>\u7B80\u5355\u767B\u9646\u9A8C\u8BC1\u96C6\u6210:\u7528\u4E8E\u4E00\u822C\u540E\u53F0\uFF0C\u5982\u7EC4\u4EF6\u5316\u7684\uFF0C\u9700\u8981\u7B80\u5355\u7684\u767B\u9646\u9A8C\u8BC1</li></ul><h2 id="\u524D\u7AEF\u96C6\u6210-1" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u96C6\u6210-1" aria-hidden="true">#</a> \u524D\u7AEF\u96C6\u6210</h2><h3 id="\u7528\u6237\u6743\u9650\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6743\u9650\u96C6\u6210" aria-hidden="true">#</a> \u7528\u6237\u6743\u9650\u96C6\u6210</h3><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- web_start --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common.web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-web-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${project.parent.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- web_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u529F\u80FD</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6DFB\u52A0EnableLogin\u6CE8\u89E3</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableLogin</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseBootWebApplication</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BaseBootWebApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u767B\u9646\u6548\u679C\u56FE</p>`,10),i=["src"],u=a(`<h3 id="\u7B80\u5355\u767B\u9646\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u767B\u9646\u96C6\u6210" aria-hidden="true">#</a> \u7B80\u5355\u767B\u9646\u96C6\u6210</h3><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- common_start --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common.web.basic.auth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-web-starter-basic-auth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${project.parent.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${project.parent.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- common_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u529F\u80FD</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6DFB\u52A0EnableBasicAuth\u6CE8\u89E3</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableBasicAuth</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseBootWebApplication</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BaseBootWebApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u767B\u9646\u6548\u679C\u56FE</p>`,6),d=["src"],k=n("h2",{id:"\u5176\u5B83",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5176\u5B83","aria-hidden":"true"},"#"),c(" \u5176\u5B83")],-1),r=n("ul",null,[n("li",null,"\u7565")],-1);function g(s,v){return p(),e("div",null,[l,n("img",{src:s.$withBase("/technique/12_login.png")},null,8,i),u,n("img",{src:s.$withBase("/technique/11_login_auth.png")},null,8,d),k,r])}var b=t(o,[["render",g],["__file","08_\u524D\u7AEF\u6559\u7A0B.html.vue"]]);export{b as default};
