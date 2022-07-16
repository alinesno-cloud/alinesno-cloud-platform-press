import{_ as n,o as s,c as a,d as t}from"./app.3c431fa4.js";const p={},e=t(`<h1 id="\u914D\u7F6E\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u52A0\u5BC6" aria-hidden="true">#</a> \u914D\u7F6E\u52A0\u5BC6</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u914D\u7F6E\u52A0\u5BC6\u5904\u7406\u4E3A\u4E86\u66F4\u597D\u7684\u8FDB\u884C\u5BA1\u8BA1\u548C\u5B89\u5168\u7684\u914D\u7F6E\uFF0C\u6B64\u591A\u7528\u4E8E\u653F\u5E9C\u9879\u76EE\u6216\u8005\u6743\u9650\u4E25\u683C\u7684\u9879\u76EE\u8FDB\u884C\u52A0\u5BC6\u5904\u7406</p><h2 id="\u52A0\u5BC6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5BC6\u65B9\u5F0F" aria-hidden="true">#</a> \u52A0\u5BC6\u65B9\u5F0F</h2><p>\u5F15\u5165\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common.config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>{\u6700\u65B0\u7248\u672C:2.1.0-SNAPSHOT}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u52A0\u5BC6\u5B57\u7B26</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JasyptUtilsTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">JasyptUtilsTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;\u52A0\u5BC6\u5B57\u7B26&quot;</span> <span class="token punctuation">;</span>
		<span class="token class-name">String</span> p <span class="token operator">=</span> <span class="token class-name">JasyptUtils</span><span class="token punctuation">.</span><span class="token function">encryptPwd</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">;</span>

		log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u52A0\u5BC6\u7ED3\u679C\uFF0C\u8BF7\u590D\u5236:\\nENC({})&quot;</span> <span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[e];function o(l,i){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","25_\u914D\u7F6E\u52A0\u5BC6.html.vue"]]);export{k as default};
