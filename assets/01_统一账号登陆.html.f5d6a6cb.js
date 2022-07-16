import{_ as n,o as s,c as a,d as e}from"./app.854abe49.js";var t="/sso/sso_01.png",p="/sso/01_sso.png";const o={},c=e('<h1 id="\u7EDF\u4E00\u8D26\u53F7\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u8D26\u53F7\u767B\u9646" aria-hidden="true">#</a> \u7EDF\u4E00\u8D26\u53F7\u767B\u9646</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u4E00\u5957\u7528\u6237\u540D\u5BC6\u7801\u5373\u53EF\u8BBF\u95EE\u6240\u6709\u5E94\u7528\uFF0C\u7EDF\u4E00\u4F01\u4E1A\u5185\u90E8\u8EAB\u4EFD\u8BA4\u8BC1\u673A\u5236\uFF0C\u63D0\u5347\u4F01\u4E1A\u5E94\u7528\u7684\u96C6\u6210\u548C\u7BA1\u7406\u80FD\u529B</p><h2 id="\u5355\u70B9\u767B\u9646\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u767B\u9646\u67B6\u6784" aria-hidden="true">#</a> \u5355\u70B9\u767B\u9646\u67B6\u6784</h2><p>\u96C6\u6210\u591A\u5E94\u7528\u8BA4\u8BC1\u7BA1\u7406\uFF0C\u540C\u65F6\u63D0\u4F9B\u5355\u70B9\u767B\u9646\u7BA1\u7406\u670D\u52A1\uFF0C\u8FDB\u884C\u8D26\u53F7\uFF0C\u9ED1\u767D\u540D\u5355\u3001\u4E2A\u6027\u5316\u3001\u5E94\u7528\u7BA1\u7406\u7B49\u914D\u7F6E</p><img src="'+t+'" width="70%"><h2 id="\u96C6\u6210\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u767B\u9646" aria-hidden="true">#</a> \u96C6\u6210\u767B\u9646</h2><blockquote><p>\u90E8\u5206\u53EA\u4E3A\u793A\u4F8B\uFF0C\u5F85\u4FEE\u6B63</p></blockquote><h3 id="\u914D\u7F6E\u7B2C\u4E09\u65B9\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7B2C\u4E09\u65B9\u5E94\u7528" aria-hidden="true">#</a> \u914D\u7F6E\u7B2C\u4E09\u65B9\u5E94\u7528</h3><p>\u914D\u7F6E\u5E94\u7528\u83B7\u53D6\u5230 clientId</p><img src="'+p+`" width="80%"><h3 id="\u83B7\u53D6-code" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-code" aria-hidden="true">#</a> \u83B7\u53D6 code</h3><p>\u8BF7\u6C42\u83B7\u53D6\u5230 code\uFF0C\u7528\u6237\u767B\u5F55\u5E73\u53F0\u540E\u70B9\u51FB\u8DF3\u8F6C\u5230\u7B2C\u4E09\u65B9\u7CFB\u7EDF\u63D0\u4F9B\u7684 redirect_uri \u83B7\u53D6\u4E34\u65F6\u7968</p><ul><li>\u63A5\u53E3\u8BF7\u6C42\u65B9\u5F0F: POST</li><li>\u63A5\u53E3\u5730\u5740: https://{endpoint}?code=CODE_VALUE&amp;endpoint=endpoint&amp;state=STATE_VALUE</li></ul><p>\u793A\u4F8B\u5730\u5740:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u793A\u4F8B\u8BF7\u6C42</span>
http://alinesno-oauth-server.beta.linesno.com/login.html?response_type<span class="token operator">=</span>code<span class="token operator">&amp;</span><span class="token assign-left variable">redirect_uri</span><span class="token operator">=</span>http://alinesno-oauth-admin.beta.linesno.com<span class="token operator">&amp;</span><span class="token assign-left variable">client_id</span><span class="token operator">=</span>27f87cd0043ae5832c11cfe424e633d5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6-accesstoken" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-accesstoken" aria-hidden="true">#</a> \u83B7\u53D6 AccessToken</h3><p>\u83B7\u53D6\u7684 code\uFF0C\u4EE5\u53CA\u79D8\u94A5\u7B49\u53C2\u6570\uFF0C\u83B7\u53D6 access_token \u548C openid</p><ul><li>\u63A5\u53E3\u8BF7\u6C42\u65B9\u5F0F: POST</li><li>\u8BF7\u6C42 Content-Type: application/json</li><li>\u63A5\u53E3\u5730\u5740: {endpoint}/oauth2/V1.0/access_token</li></ul><p>\u8FD4\u56DE\u6570\u636E\u793A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0400c60e89fa677b98f0ae17b250e1a9&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;refresh_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35416d4c5623b1620f4c5c076b6bbb46&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span> <span class="token number">3600</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;resp_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20210106165820.020&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="openid-\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#openid-\u89E3\u6790" aria-hidden="true">#</a> openId \u89E3\u6790</h3><p>\u89E3\u6790 openId\uFF0C\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u6B64\u5728 accessToken \u91CC\u9762\u83B7\u53D6\uFF0C\u89E3\u6790\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u70B9\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u9000\u51FA" aria-hidden="true">#</a> \u5355\u70B9\u9000\u51FA</h3><p>\u914D\u7F6E\u9000\u51FA\u901A\u77E5\uFF0C\u4F1A\u8C03\u7528\u5BA2\u6237\u5730\u5740\uFF0C\u540C\u65F6\u53D1\u9001\u5F53\u524D\u7528\u6237\u7684 token\uFF0C\u672C\u5730\u5220\u9664\u6389\u7F13\u5B58\u7684 AccessToken\uFF0C\u4E8E\u7CFB\u7EDF\u91CD\u65B0\u8BA4\u8BC1\u9000\u51FA</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u7528\u6237\u9000\u51FA\u901A\u77E5
 * <span class="token keyword">@param</span> <span class="token parameter">token</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sso/notifyUrl&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">ssoNotifyUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// container token</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNoneBlank</span><span class="token punctuation">(</span>tokens<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokenArr <span class="token operator">=</span> tokens<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> tokenArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">AccessToken</span> at <span class="token operator">=</span> <span class="token class-name">IUaaClientActionStrategy</span><span class="token punctuation">.</span>accessTokenContainer<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;at = {}&quot;</span> <span class="token punctuation">,</span> at<span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,29),i=[c];function l(u,r){return s(),a("div",null,i)}var k=n(o,[["render",l],["__file","01_\u7EDF\u4E00\u8D26\u53F7\u767B\u9646.html.vue"]]);export{k as default};
