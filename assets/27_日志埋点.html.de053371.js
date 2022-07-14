import{_ as n,o as a,c as s,d as t}from"./app.818cd389.js";const p={},e=t(`<h1 id="\u65E5\u5FD7\u57CB\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u57CB\u70B9" aria-hidden="true">#</a> \u65E5\u5FD7\u57CB\u70B9</h1><h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><blockquote><p>\u6B64\u4E3A\u4E1A\u52A1\u4FB5\u5165\u6027\u64CD\u4F5C\uFF0C\u4F7F\u7528\u573A\u666F\u6709\u9650\u5236\uFF0C\u4E0D\u5EFA\u8BAE\u6240\u6709\u7684\u65E5\u5FD7\u90FD\u91C7\u96C6\uFF0C\u5EFA\u7ACB\u9488\u5BF9\u6027\u91C7\u96C6</p></blockquote><p>\u9488\u5BF9\u7684\u573A\u666F\u4E3B\u8981\u662F\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u7528\u6237\u7684\u64CD\u4F5C\u884C\u4E3A\u3001\u67E5\u8BE2\u884C\u4E3A\u3001\u70B9\u51FB\u884C\u4E3A\u3001\u4E1A\u52A1\u6D41\u6C34\u3001 \u4EA4\u6613\u3001\u6570\u636E\u5E93\u64CD\u4F5C\u3001\u7CFB\u7EDF\u7684\u5F02\u5E38\u5F85\u8FDB\u884C\u8BB0\u5F55\uFF0C \u914D\u5408\u4E1A\u52A1\u7CFB\u7EDF\u5BA1\u8BA1\u5904\u7406\u3002</p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u901A\u8FC7 aop \u5BF9\u5E94\u7528\u8FDB\u884C\u5207\u9762\uFF0C\u7136\u540E\u53D1\u9001\u5230 kafka\uFF0C\u65E5\u5FD7\u7EC4\u4EF6\u63A5\u6536 kafka \u65E5\u5FD7\uFF0C\u5E76\u8FDB\u884C\u7ED3\u6784\u5316\u5B58\u50A8</p><h2 id="\u57CB\u70B9\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u57CB\u70B9\u5904\u7406" aria-hidden="true">#</a> \u57CB\u70B9\u5904\u7406</h2><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.monitor.agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-monitor-agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\u6700\u65B0\u7248\u672C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alinesno<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>agent<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MonitorEnums</span><span class="token punctuation">.</span><span class="token class-name">BUSINESS_TRADE</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alinesno<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>agent<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Monitor</span></span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@Monitor</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token class-name">MonitorEnums</span><span class="token punctuation">.</span>BUSINESS_TRADE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">businessTrade</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,13),o=[e];function c(l,i){return a(),s("div",null,o)}var d=n(p,[["render",c],["__file","27_\u65E5\u5FD7\u57CB\u70B9.html.vue"]]);export{d as default};
