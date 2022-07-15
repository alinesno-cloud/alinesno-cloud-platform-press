import{_ as n,o as s,c as a,d as t}from"./app.4d984c6b.js";var p="/images/undraw_art_0tat.svg",c="/images/iframe_login.png",e="/images/iframe_success.png";const o={},l=t('<h2 id="\u5BA2\u6237\u7AEF\u4F7F\u7528-iframe-\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u4F7F\u7528-iframe-\u5D4C\u5957" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u4F7F\u7528 iframe \u5D4C\u5957</h2><p class="show-images"><img src="'+p+`" width="40%"></p><h3 id="\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a> \u6982\u8981</h3><p>\u4E0D\u540C\u7684\u7CFB\u7EDF\u5404\u81EA\u90FD\u6709\u81EA\u5DF1\u98CE\u683C\u7684\u767B\u5F55\u754C\u9762\uFF0C\u63A5\u5165 CAS \u7684\u5355\u70B9\u767B\u5F55\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 iframe \u5D4C\u5957\u7684\u65B9\u5F0F\u5B9E\u73B0 SSO\u3002</p><h3 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h3><p>\u9700\u8981\u4E00\u4E2A\u80FD\u591F\u8BBF\u95EE\u9875\u9762\u7684 https \u9879\u76EE\uFF0C\u4E0D\u7136 Cas \u4F1A\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF0C\u8BBF\u95EE Cas \u57DF\u540D\u5E26\u4E0A iframe \u53C2\u6570\u83B7\u53D6\u767B\u5F55\u6846\u6837\u5F0F\u3002 \u8FD9\u91CC\u505A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684 setTimeout \u51FD\u6570\u7528\u4E8E\u7F51\u9875\u8DF3\u8F6C\uFF0C\u63A5\u5165\u7AEF\u5E94\u7528\u524D\u7AEF\u9875\u9762\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u767B\u5F55\u754C\u9762<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">var</span> cas_loginUrl <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8280/cas/login?iframe&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// \u83B7\u53D6\u8BBF\u95EE\u8DEF\u5F84\u56DE\u8C03\u5730\u5740</span>
        <span class="token keyword">var</span> service <span class="token operator">=</span> <span class="token function">GetQueryString</span><span class="token punctuation">(</span><span class="token string">&quot;service&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>service <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#myIframe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> cas_loginUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cas_loginUrl <span class="token operator">=</span> cas_loginUrl <span class="token operator">+</span> <span class="token string">&quot;&amp;service=&quot;</span> <span class="token operator">+</span> service<span class="token punctuation">;</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#myIframe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> cas_loginUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Iframe\u65B9\u5F0F\u5D4C\u5165Cas Server\u81EA\u5B9A\u4E49\u767B\u5F55\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myIframe<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 430px<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//\u63A5\u6536\u5B50\u7A97\u53E3\u6D88\u606F</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u6765\u81EA\u5B50\u7A97\u53E3:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5FC5\u987BdecodeURIComponent\u9875\u9762\u624D\u5237\u65B0\uFF0C\u5426\u5219\u6709\u95EE\u9898</span>
            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u7F51\u9875 url \u53EA\u505A\u6F14\u793A\uFF0C\u70B9\u51FB\u767B\u5F55\u540E\u4F1A\u8FDB\u884C\u7236\u7EA7\u8DF3\u8F6C\u3002</p><p class="show-images"><img src="`+c+'" width="100%"></p><p class="show-images"><img src="'+e+'" width="100%"></p><h3 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h3><ul><li>\u7565</li></ul>',12),i=[l];function u(k,r){return s(),a("div",null,i)}var v=n(o,[["render",u],["__file","07_\u5BA2\u6237\u7AEF\u4F7F\u7528iframe\u5D4C\u5957.html.vue"]]);export{v as default};
