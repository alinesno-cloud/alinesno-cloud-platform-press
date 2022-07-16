import{_ as n,o as s,c as a,d as t}from"./app.3c431fa4.js";var p="/images/undraw_circles_y7s2.svg";const e={},c=t('<h2 id="\u81EA\u5B9A\u4E49\u5BC6\u7801\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BC6\u7801\u9A8C\u8BC1" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BC6\u7801\u9A8C\u8BC1</h2><p class="show-images"><img src="'+p+`" width="40%"></p><h3 id="\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a> \u6982\u8981</h3><p>\u5BA2\u6237\u7AEF\u767B\u5F55\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E\u5BC6\u7801\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u81EA\u5B9A\u4E49\u5BC6\u7801\u6821\u9A8C\u3002</p><h3 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h3><p>\u9002\u7528\u4E8E cas4.0 \u7248\u672C\u3002Cas \u670D\u52A1\u7AEF\u4E2D\u627E\u5230 Md5PasswordEncoder \u81EA\u5B9A\u4E49\u7C7B\uFF0C\u7528\u6237\u767B\u5F55\u65F6\u4F1A\u7ECF\u8FC7\u8BE5\u9A8C\u8BC1\u65B9\u6CD5\u3002</p><p>\u5176\u4E2D\u914D\u7F6E\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Md5PasswordEncoder</span> <span class="token keyword">implements</span> <span class="token class-name">PasswordEncoder</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u7ED9\u6570\u636E\u8FDB\u884Cmd5\u52A0\u5BC6</span>
            <span class="token class-name">MessageDigest</span> md <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;MD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            md<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>password<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> md<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;encode\u65B9\u6CD5\uFF1A\u52A0\u5BC6\u524D\uFF08&quot;</span> <span class="token operator">+</span> password <span class="token operator">+</span> <span class="token string">&quot;\uFF09\uFF0C\u52A0\u5BC6\u540E\uFF08&quot;</span> <span class="token operator">+</span> pwd <span class="token operator">+</span> <span class="token string">&quot;\uFF09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> pwd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u9700\u901A\u8FC7\u5176\u5B83\u9A8C\u8BC1\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u903B\u8F91\u5373\u53EF\u3002</p><h3 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h3><ul><li>\u7565</li></ul>`,11),o=[c];function l(i,u){return s(),a("div",null,o)}var d=n(e,[["render",l],["__file","07_\u81EA\u5B9A\u4E49\u5BC6\u7801\u9A8C\u8BC1.html.vue"]]);export{d as default};
