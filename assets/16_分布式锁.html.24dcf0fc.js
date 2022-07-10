import{_ as n,o as a,c as s,d as e}from"./app.21a32176.js";const t={},p=e(`<h1 id="\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u9501</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5206\u5E03\u5F0F\u9501\u5B9A\u53EF\u786E\u4FDD\u60A8\u7684\u65B9\u6CD5\u65E0\u6CD5\u4ECE\u591A\u4E2A\u5FAE\u670D\u52A1\u96C6\u7FA4\u5E76\u884C\u8FD0\u884C\u3002\u5B83\u4F7F\u7528\u516C\u7528\u5B58\u50A8\u6765\u8DDF\u8E2A\u5DF2\u4F7F\u7528\u7684\u9501\uFF0C\u5E76\u4E14\u60A8\u7684\u65B9\u6CD5\u9700\u8981\u83B7\u53D6\u4E00\u4E2A\u6216\u591A\u4E2A\u9501\u624D\u80FD\u8FD0\u884C\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.compoment.distributed.lock<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-component-distributed-lock<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${\u6700\u65B0\u7248\u672C}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>@EnableRedisDistributedLock</code>\u4EE5\u542F\u7528 Redis \u5206\u5E03\u5F0F\u9501</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u542F\u7528\u5206\u5E03\u5F0F\u9501\u914D\u7F6E</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableRedisDistributedLock</span>
<span class="token keyword">public</span> <span class="token class-name">LockConfiguration</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u4E2A\u9501\u5173\u952E\u5B57\u5904\u7406\uFF0C\u4F7F\u7528<code>SpEL</code>\u8868\u8FBE\u5F0F\uFF0C\u5982:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RedisMultiLocked</span><span class="token punctuation">(</span>expression <span class="token operator">=</span> <span class="token string">&quot;T(com.example.MyUtils).getNamesWithId(#p0)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runLockedWithRedis</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// locked code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u57FA\u4E8E\u6574\u6570\u5B57\u6BB5\u503C\u7684\u81EA\u5B9A\u4E49\u9501\u5B9A\u5B9E\u73B0\u8FDB\u884C\u9501\u5B9A<code>count</code>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Locked</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">MyCustomLock</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> expression <span class="token operator">=</span> <span class="token string">&quot;getCount&quot;</span><span class="token punctuation">,</span> prefix <span class="token operator">=</span> <span class="token string">&quot;using:&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runLockedWithMyCustomLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// locked code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,14),o=[p];function c(i,l){return a(),s("div",null,o)}var d=n(t,[["render",c],["__file","16_\u5206\u5E03\u5F0F\u9501.html.vue"]]);export{d as default};
