import{_ as s,o as e,c as t,a as n,d as p}from"./app.2b321bc4.js";const l={},o=p(`<h1 id="\u65E5\u5FD7\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5904\u7406" aria-hidden="true">#</a> \u65E5\u5FD7\u5904\u7406</h1><p>\u76F8\u5BF9\u6765\u8BF4\uFF0C\u4E00\u4E2A\u5DE5\u7A0B\u57FA\u7840\u7684\u7528\u6237\u3001\u6743\u9650\u3001\u83DC\u5355\u7B49\u57FA\u7840\u7684\u529F\u80FD\u90FD\u662F\u56FA\u5B9A\u7684\uFF0C\u5F00\u53D1\u53EA\u9700\u8981\u6839\u636E\u9700\u6C42\u5F00\u53D1\u76F8\u5F53\u7684\u4E1A\u52A1\u7CFB\u7EDF\u5373\u53EF\uFF0C \u5E76\u4E0D\u9700\u8981\u5173\u6CE8\u592A\u591A\uFF0C\u6240\u4EE5\u6B64\u5E73\u53F0\u5BF9\u4E8E\u5F00\u53D1\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A\u6240\u5F00\u53D1\u7684\u5E94\u7528\u8D26\u53F7\u6743\u9650\u5373\u53EF</p><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u670D\u52A1\u65E5\u5FD7\u914D\u7F6E,\u4E00\u822C\u6B64\u5E94\u7528\u4E8E\u5C0F\u578B\u9879\u76EE\u4E2D,\u5927\u5C0F\u578B\u9879\u76EE\u4E0D\u592A\u5EFA\u8BAE</li><li>\u5206\u5E03\u5F0F\u65E5\u5FD7\u914D\u7F6E,\u4E00\u822C\u6B64\u5E94\u7528\u4E8E\u5927\u4E2D\u578B\u9879\u76EE\u5F53\u4E2D\uFF0C\u5C0F\u578B\u9879\u76EE\u4E0D\u592A\u5EFA\u8BAE</li></ul><h2 id="\u65E5\u5FD7\u96C6\u6210\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u96C6\u6210\u65B9\u5F0F" aria-hidden="true">#</a> \u65E5\u5FD7\u96C6\u6210\u65B9\u5F0F</h2><h3 id="\u670D\u52A1\u65E5\u5FD7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u65E5\u5FD7\u914D\u7F6E" aria-hidden="true">#</a> \u670D\u52A1\u65E5\u5FD7\u914D\u7F6E</h3><p>\u6B64\u4E3A\u5355\u4E2A\u5E94\u7528\u65E5\u5FD7\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u7684\u65E5\u5FD7\u914D\u7F6E\u5982\u4E0B\uFF0C\u65E5\u5FD7\u4FDD\u5B58\u5728\u5F53\u524D\u7528\u6237<code>alinesno-running-log</code>\u76EE\u5F55\u4E0B\uFF0C\u4E14\u65E5\u5FD7\u540D\u79F0\u4E3A\u5E94\u7528\u540D\u79F0,\u9ED8\u8BA4\u4FDD\u5B58\u5929\u6570 \u4E3A 30 \u5929</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>user.home<span class="token punctuation">}</span>/alinesno<span class="token punctuation">-</span>runing<span class="token punctuation">-</span>log/$<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>.log
    <span class="token key atrule">level</span><span class="token punctuation">:</span>
        <span class="token key atrule">root</span><span class="token punctuation">:</span> info
        <span class="token key atrule">com.alinesno.cloud</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u7528\u6237\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u5728 controller \u65B9\u6CD5\u4E0A\u6DFB\u52A0\u6CE8\u89E3<code>Accountrecord</code>\uFF0C\u8BB0\u5F55\u7528\u6237\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u5982:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@AccountRecord</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token class-name">RecordType</span><span class="token punctuation">.</span>ACCESS_ADD<span class="token punctuation">)</span>
<span class="token annotation punctuation">@FormToken</span><span class="token punctuation">(</span>save<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model <span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u64CD\u4F5C\u8BB0\u5F55\u4E2D\u67E5\u8BE2\u5373\u53EF\uFF0C\u5982:</p><h3 id="\u5206\u5E03\u5F0F\u65E5\u5FD7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u65E5\u5FD7\u914D\u7F6E" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u65E5\u5FD7\u914D\u7F6E</h3><blockquote><p>\u6682\u65F6\u4E0D\u63A8\u8350(\u5207\u6362\u5230 kafka \u5F53\u4E2D)\uFF0C\u4EE5\u4E0B\u65B9\u6848\u6682\u65F6\u4E22\u5F03</p></blockquote><p>\u91C7\u7528\u5206\u5E03\u5F0F\u65E5\u5FD7\u524D\u7F6E\u6761\u4EF6:</p><ul><li>\u914D\u7F6E elk \u7CFB\u7EDF</li><li>\u5728 logback-spring.xml \u4E2D\u914D\u7F6E\u597D logstash \u7684 IP \u914D\u7F6E</li></ul><p>\u5F53\u524D\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u91C7\u7528<code>elk</code>\u91C7\u96C6\uFF0C\u6574\u4E2A\u7ED3\u6784\u65E5\u5FD7\u7ED3\u6784\u5982\u4E0B:</p><blockquote><p>\u56FE\u540E\u8865</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>Spring boot -&gt; logback -&gt; Tcp/IP -&gt; logstash -&gt; elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E94\u7528\u7CFB\u7EDF\u6DFB\u52A0\u65E5\u5FD7\u4F9D\u8D56\u5305:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.monitor.agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-monitor-agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u542F\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u81EA\u52A8\u5C06\u65E5\u5FD7\u53D1\u5230\u5BF9\u5E94\u7684 elk \u7CFB\u7EDF\u4E2D\uFF0C\u5728 elk \u7CFB\u7EDF\u67E5\u770B,\u5982\u56FE:</p>`,21),c=["src"],i=n("p",null,"\u6B64\u5904\u65E5\u5FD7\u914D\u7F6E\u5B8C\u6210",-1);function u(a,d){return e(),t("div",null,[o,n("img",{src:a.$withBase("/technique/kibana_01.jpeg")},null,8,c),i])}var k=s(l,[["render",u],["__file","12_\u65E5\u5FD7\u5904\u7406.html.vue"]]);export{k as default};
