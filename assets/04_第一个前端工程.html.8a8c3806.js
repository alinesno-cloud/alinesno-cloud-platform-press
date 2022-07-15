import{_ as n,o as a,c as s,d as e}from"./app.a9c8f2dc.js";var p="/images/dev_07.png",t="/images/login_01.png",o="/images/dev_08.png";const c={},i=e('<h1 id="\u5EFA\u7ACB-web-\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB-web-\u5DE5\u7A0B" aria-hidden="true">#</a> \u5EFA\u7ACB web \u5DE5\u7A0B</h1><p>\u590D\u5236<code>controller</code>\u4EE3\u7801\u8FDB\u5165\u5DE5\u7A0B,<code>pages</code>\u590D\u5236\u5230<code>templates</code>\u76EE\u5F55\u4E0B,\u7136\u540E\u6DFB\u52A0<code>facade</code>\u5DE5\u7A0B\u4F9D\u8D56,\u5982\u56FE:</p><p align="center"><img src="'+p+`" width="100%"></p><p>\u6B64\u5904\u7684\u542F\u52A8\u7C7B\u4E0E service \u5DE5\u7A0B\u7565\u6709\u4E0D\u540C\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B\u793A\u4F8B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">// \u53BB\u6389datasources\u914D\u7F6E</span>
<span class="token annotation punctuation">@EnableAlinesnoBaseBoot</span>
<span class="token annotation punctuation">@EnableAlinesnoCommonLogin</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AlinesnoApplication</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AlinesnoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE<code>http://xxxxxx/</code>\uFF0C\u8FDB\u5165\u767B\u9646\u754C\u9762</p><p>\u7528\u6237\u540D: crm@gmail.com <br> \u5BC6\u7801: admin</p><p align="center"><img src="`+t+'" width="100%"></p><p>\u70B9\u51FB\u529F\u80FD\u5373\u53EF\u76F4\u63A5\u67E5\u770B\u5217\u8868\uFF0C\u5982\u56FE:</p><p align="center"><img src="'+o+'" width="100%"></p><p>\u5B8C\u6210\u57FA\u7840 web \u5DE5\u7A0B\u521D\u7A3F</p>',11),l=[i];function u(r,d){return a(),s("div",null,l)}var m=n(c,[["render",u],["__file","04_\u7B2C\u4E00\u4E2A\u524D\u7AEF\u5DE5\u7A0B.html.vue"]]);export{m as default};
