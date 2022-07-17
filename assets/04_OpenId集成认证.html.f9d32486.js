import{_ as n,o as s,c as a,d as e}from"./app.5d1e5d79.js";const t={},p=e(`<h1 id="openid-\u96C6\u6210\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#openid-\u96C6\u6210\u8BA4\u8BC1" aria-hidden="true">#</a> OpenId \u96C6\u6210\u8BA4\u8BC1</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>openId \u4E0E oauth2 \u6574\u5408\uFF0C\u96C6\u6210\u5728\u653E\u5728 token \u5F53\u4E2D\uFF0C\u89E3\u6790 token \u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F</p><h2 id="\u89E3\u6790\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u4EE3\u7801" aria-hidden="true">#</a> \u89E3\u6790\u4EE3\u7801</h2><p>\u89E3\u6790 openId\uFF0C\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u6B64\u5728 accessToken \u91CC\u9762\u83B7\u53D6\uFF0C\u89E3\u6790\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4ECE\u4EE4\u724C\u4E2D\u83B7\u53D6\u6570\u636E\u58F0\u660E
 *
 * <span class="token keyword">@param</span> <span class="token parameter">token</span> \u4EE4\u724C
 * <span class="token keyword">@return</span> \u6570\u636E\u58F0\u660E
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Claims</span> <span class="token function">parseToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> key <span class="token operator">=</span> tokenProperties<span class="token punctuation">.</span><span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BC6\u94A5\u5F02\u5E38:{}&quot;</span> <span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;\u767B\u9646\u5BC6\u94A5\u5DF2\u8FC7\u671F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,8),c=[p];function o(i,l){return s(),a("div",null,c)}var r=n(t,[["render",o],["__file","04_OpenId\u96C6\u6210\u8BA4\u8BC1.html.vue"]]);export{r as default};
