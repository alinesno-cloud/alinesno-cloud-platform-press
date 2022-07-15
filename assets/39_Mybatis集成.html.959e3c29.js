import{_ as a,o as n,c as s,d as t}from"./app.a5454e64.js";const e={},p=t(`<h1 id="mybatis-\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#mybatis-\u96C6\u6210" aria-hidden="true">#</a> Mybatis \u96C6\u6210</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>Mybatis \u662F\u901A\u7528\u4E14\u5E38\u7528\u7684\u6570\u636E\u64CD\u4F5C\uFF0C\u5E73\u53F0\u96C6\u6210 jpa+mybatis \u6574\u5408\uFF0C\u4FBF\u4E8E\u5E94\u7528\u591A\u79CD\u4E1A\u52A1\u573A\u666F\u548C\u591A\u79CD\u5F00\u53D1\u6280\u672F\uFF0C\u517C\u5BB9\u524D\u671F\u7684\u6280\u672F\uFF0C\u6B64\u5904\u9009\u578B\u7684 mybatis \u6846\u67B6\u4E3A[tk-mybatis]\uFF0C \u5E73\u53F0\u4F7F\u7528 jpa \u7EF4\u62A4\u6570\u636E\u5E93\u5B57\u6BB5\uFF0Ctk-mybatis \u64CD\u4F5C\u6570\u636E\u5E93\u3002</p><h2 id="\u96C6\u6210\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u65B9\u5F0F" aria-hidden="true">#</a> \u96C6\u6210\u65B9\u5F0F</h2><p>\u6DFB\u52A0\u4F9D\u8D56:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>tk.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mapper-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u626B\u63CF mybatis \u6620\u5C04\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4F8B\u5982</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.example.demo.mapper&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B mapper \u7C7B\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">UserEntity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tk<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">MyMapper</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserEntityMapper</span> <span class="token keyword">extends</span> <span class="token class-name">MyMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u540E\u671F\u5F85\u6574\u5408\u5230\u4EE3\u7801\u751F\u6210\u5668\u4E2D</li></ul>`,12),c=[p];function i(o,l){return n(),s("div",null,c)}var r=a(e,[["render",i],["__file","39_Mybatis\u96C6\u6210.html.vue"]]);export{r as default};
