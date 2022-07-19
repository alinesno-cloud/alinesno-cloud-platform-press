import{_ as n,o as s,c as a,d as t}from"./app.847a508b.js";var e="/images/contiperf_01.png";const p={},o=t(`<h2 id="contiperf-\u538B\u529B\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#contiperf-\u538B\u529B\u6D4B\u8BD5" aria-hidden="true">#</a> ContiPerf \u538B\u529B\u6D4B\u8BD5</h2><h4 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h4><p>\u53EF\u4EE5\u6307\u5B9A\u5728\u7EBF\u7A0B\u6570\u91CF\u548C\u6267\u884C\u6B21\u6570\uFF0C\u901A\u8FC7\u9650\u5236\u6700\u5927\u65F6\u95F4\u548C\u5E73\u5747\u6267\u884C\u65F6\u95F4\u6765\u8FDB\u884C\u6548\u7387\u6D4B\u8BD5\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContiPerfTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Rule</span>
    <span class="token keyword">public</span> <span class="token class-name">ContiPerfRule</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContiPerfRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token annotation punctuation">@PerfTest</span><span class="token punctuation">(</span>invocations <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span> threads <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Required</span><span class="token punctuation">(</span>max <span class="token operator">=</span> <span class="token number">1200</span><span class="token punctuation">,</span> average <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">,</span> totalTime <span class="token operator">=</span> <span class="token number">60000</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528@Rule \u6CE8\u91CA\u6FC0\u6D3B ContiPerf\uFF0C\u901A\u8FC7@Test \u6307\u5B9A\u6D4B\u8BD5\u65B9\u6CD5\uFF0C@PerfTest \u6307\u5B9A\u8C03\u7528\u6B21\u6570\u548C\u7EBF\u7A0B\u6570\u91CF\uFF0C@Required \u6307\u5B9A\u6027\u80FD\u8981\u6C42\uFF08\u6BCF\u6B21\u6267\u884C\u7684\u6700\u957F\u65F6\u95F4\uFF0C\u5E73\u5747\u65F6\u95F4\uFF0C\u603B\u65F6\u95F4\u7B49\uFF09\u3002 \u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BF9\u7C7B\u6307\u5B9A@PerfTest \u548C@Required\uFF0C\u8868\u793A\u7C7B\u4E2D\u65B9\u6CD5\u7684\u9ED8\u8BA4\u8BBE\u7F6E\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PerfTest</span><span class="token punctuation">(</span>invocations <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span> threads <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Required</span><span class="token punctuation">(</span>max <span class="token operator">=</span> <span class="token number">1200</span><span class="token punctuation">,</span> average <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">,</span> totalTime <span class="token operator">=</span> <span class="token number">60000</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContiPerfTest</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Rule</span>
	<span class="token keyword">public</span> <span class="token class-name">ContiPerfRule</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContiPerfRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E3B\u8981\u53C2\u6570\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u53C2\u6570\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E3B\u8981\u53C2\u6570\u4ECB\u7ECD</h4><p>1\uFF09PerfTest \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>@PerfTest(invocations = 300)</td><td>\u6267\u884C 300 \u6B21\uFF0C\u548C\u7EBF\u7A0B\u6570\u91CF\u65E0\u5173\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\uFF0C\u8868\u793A\u6267\u884C 1 \u6B21</td></tr><tr><td>@PerfTest(threads=30)</td><td>\u5E76\u53D1\u6267\u884C 30 \u4E2A\u7EBF\u7A0B\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1 \u4E2A\u7EBF\u7A0B</td></tr><tr><td>@PerfTest(duration = 20000)</td><td>\u91CD\u590D\u5730\u6267\u884C\u6D4B\u8BD5\u81F3\u5C11\u6267\u884C 20s</td></tr></tbody></table><p>2\uFF09Required \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>@Required(throughput = 20)</td><td>\u8981\u6C42\u6BCF\u79D2\u81F3\u5C11\u6267\u884C 20 \u4E2A\u6D4B\u8BD5</td></tr><tr><td>@Required(average = 50)</td><td>\u8981\u6C42\u5E73\u5747\u6267\u884C\u65F6\u95F4\u4E0D\u8D85\u8FC7 50ms</td></tr><tr><td>@Required(median = 45)</td><td>\u8981\u6C42\u6240\u6709\u6267\u884C\u7684 50%\u4E0D\u8D85\u8FC7 45ms</td></tr><tr><td>@Required(max = 2000)</td><td>\u8981\u6C42\u6CA1\u6709\u6D4B\u8BD5\u8D85\u8FC7 2s</td></tr><tr><td>@Required(totalTime = 5000)</td><td>\u8981\u6C42\u603B\u7684\u6267\u884C\u65F6\u95F4\u4E0D\u8D85\u8FC7 5s</td></tr><tr><td>@Required(percentile90 = 3000)</td><td>\u8981\u6C42 90%\u7684\u6D4B\u8BD5\u4E0D\u8D85\u8FC7 3s</td></tr><tr><td>@Required(percentile95 = 5000)</td><td>\u8981\u6C42 95%\u7684\u6D4B\u8BD5\u4E0D\u8D85\u8FC7 5s</td></tr><tr><td>@Required(percentile99 = 10000)</td><td>\u8981\u6C42 99%\u7684\u6D4B\u8BD5\u4E0D\u8D85\u8FC7 10s</td></tr><tr><td>@Required(percentiles = &quot;66:200,96:500&quot;)</td><td>\u8981\u6C42 66%\u7684\u6D4B\u8BD5\u4E0D\u8D85\u8FC7 200ms\uFF0C96%\u7684\u6D4B\u8BD5\u4E0D\u8D85\u8FC7 500ms</td></tr></tbody></table><ol start="3"><li>\u6D4B\u8BD5\u7ED3\u679C\u5C55\u793A</li></ol><p style="text-align:center;"><img src="`+e+'" width="80%"></p>',13),c=[o];function i(l,r){return s(),a("div",null,c)}var d=n(p,[["render",i],["__file","01_ContiPerf\u538B\u529B\u6D4B\u8BD5.html.vue"]]);export{d as default};
