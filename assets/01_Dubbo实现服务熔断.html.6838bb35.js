import{_ as t,o as e,c as o,a as n,d as s}from"./app.8fe28911.js";const p={},i=s(`<h1 id="dubbo-provider-\u6DFB\u52A0\u7194\u65AD\u5668" tabindex="-1"><a class="header-anchor" href="#dubbo-provider-\u6DFB\u52A0\u7194\u65AD\u5668" aria-hidden="true">#</a> dubbo provider \u6DFB\u52A0\u7194\u65AD\u5668</h1><p>\u5728 Application \u4E2D\u589E\u52A0<code>@EnableHystrix</code>\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>funtl<span class="token punctuation">.</span>hello<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>service<span class="token punctuation">.</span>user<span class="token punctuation">.</span>provider</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>container<span class="token punctuation">.</span></span><span class="token class-name">Main</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrix</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableHystrix</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloDubboServiceUserProviderApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HelloDubboServiceUserProviderApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Service \u4E2D\u589E\u52A0<code>@HystrixCommand</code>\u6CE8\u89E3 \u5728\u8C03\u7528\u65B9\u6CD5\u4E0A\u589E\u52A0<code>@HystrixCommand</code>\u914D\u7F6E\uFF0C\u6B64\u65F6\u8C03\u7528\u4F1A\u7ECF\u8FC7 Hystrix \u4EE3\u7406</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u65E5\u5FD7\u8BB0\u5F55</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">LogRecordServiceImpl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *  \u6D4B\u8BD5\u7194\u65AD\u5668
 */</span>
<span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.requestVolumeThreshold&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;execution.isolation.thread.timeoutInMilliseconds&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;2000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;helloHystrixFallback&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloHystrix</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Exception to show hystrix enabled.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;name:{}&quot;</span> <span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello , &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloHystrixFallback</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hystrix fallback , &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7194\u65AD\u5668</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">ILogRecordService</span> logRecordService <span class="token punctuation">;</span>

<span class="token annotation punctuation">@PerfTest</span><span class="token punctuation">(</span>invocations <span class="token operator">=</span> <span class="token number">10000</span> <span class="token punctuation">,</span> threads <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// \u5E76\u53D1\u6D4B\u8BD5</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testHelloHystrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span> <span class="token comment">// &quot;zhangnsan&quot; ;</span>

    <span class="token class-name">String</span> hello <span class="token operator">=</span> logRecordService<span class="token punctuation">.</span><span class="token function">helloHystrix</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5F00 Hystrix \u7194\u65AD\u5668\u4EEA\u8868\u76D8</p><p>\u5728 Application \u4E2D\u589E\u52A0 @EnableHystrixDashboard \u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableHystrix</span>
<span class="token annotation punctuation">@EnableHystrixDashboard</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloDubboServiceUserConsumerApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HelloDubboServiceUserConsumerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5 Hystrix Dashboard , \u6D4F\u89C8\u5668\u7AEF\u8BBF\u95EE http://localhost:9090/hystrix \u754C\u9762\u5982\u4E0B:</p>`,11),c=["src"],l=n("p",null,"\u5728\u5F02\u5E38\u51FA\u9519\u7684\u65F6\u5019\uFF0C\u4F1A\u663E\u793A\u5982\u4E0B\u4FE1\u606F",-1),r=["src"],u=s('<p>\u53C2\u6570\u8BF4\u660E</p><p>hystrix.command.default \u548C hystrix.threadpool.default \u4E2D\u7684 default \u4E3A\u9ED8\u8BA4 CommandKey</p><h2 id="command-properties" tabindex="-1"><a class="header-anchor" href="#command-properties" aria-hidden="true">#</a> Command Properties</h2><p>Execution \u76F8\u5173\u7684\u5C5E\u6027\u7684\u914D\u7F6E\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.command.default.execution.isolation.strategy</td><td>\u9694\u79BB\u7B56\u7565\uFF0C\u9ED8\u8BA4\u662F Thread, \u53EF\u9009 Thread/Semaphore</td></tr><tr><td>hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds</td><td>\u547D\u4EE4\u6267\u884C\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4 1000ms</td></tr><tr><td>hystrix.command.default.execution.timeout.enabled</td><td>\u6267\u884C\u662F\u5426\u542F\u7528\u8D85\u65F6\uFF0C\u9ED8\u8BA4\u542F\u7528 true</td></tr><tr><td>hystrix.command.default.execution.isolation.thread.interruptOnTimeout</td><td>\u53D1\u751F\u8D85\u65F6\u662F\u662F\u5426\u4E2D\u65AD\uFF0C\u9ED8\u8BA4 true</td></tr><tr><td>hystrix.command.default.execution.isolation.semaphore.maxConcurrentRequests</td><td>\u6700\u5927\u5E76\u53D1\u8BF7\u6C42\u6570\uFF0C\u9ED8\u8BA4 10\uFF0C\u8BE5\u53C2\u6570\u5F53\u4F7F\u7528 ExecutionIsolationStrategy.SEMAPHORE \u7B56\u7565\u65F6\u624D\u6709\u6548\u3002\u5982\u679C\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u8BF7\u6C42\u6570\uFF0C\u8BF7\u6C42\u4F1A\u88AB\u62D2\u7EDD\u3002\u7406\u8BBA\u4E0A\u9009\u62E9 semaphore size \u7684\u539F\u5219\u548C\u9009\u62E9 thread size \u4E00\u81F4\uFF0C\u4F46\u9009\u7528 semaphore \u65F6\u6BCF\u6B21\u6267\u884C\u7684\u5355\u5143\u8981\u6BD4\u8F83\u5C0F\u4E14\u6267\u884C\u901F\u5EA6\u5FEB\uFF08ms \u7EA7\u522B\uFF09\uFF0C\u5426\u5219\u7684\u8BDD\u5E94\u8BE5\u7528 thread\u3002</td></tr></tbody></table><p>semaphore \u5E94\u8BE5\u5360\u6574\u4E2A\u5BB9\u5668\uFF08tomcat\uFF09\u7684\u7EBF\u7A0B\u6C60\u7684\u4E00\u5C0F\u90E8\u5206\u3002</p><h2 id="fallback-\u76F8\u5173\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#fallback-\u76F8\u5173\u7684\u5C5E\u6027" aria-hidden="true">#</a> Fallback \u76F8\u5173\u7684\u5C5E\u6027</h2><p>\u8FD9\u4E9B\u53C2\u6570\u53EF\u4EE5\u5E94\u7528\u4E8E Hystrix \u7684 THREAD \u548C SEMAPHORE \u7B56\u7565</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.command.default.fallback.isolation.semaphore.maxConcurrentRequests</td><td>\u5982\u679C\u5E76\u53D1\u6570\u8FBE\u5230\u8BE5\u8BBE\u7F6E\u503C\uFF0C\u8BF7\u6C42\u4F1A\u88AB\u62D2\u7EDD\u548C\u629B\u51FA\u5F02\u5E38\u5E76\u4E14 fallback \u4E0D\u4F1A\u88AB\u8C03\u7528\u3002\u9ED8\u8BA4 10</td></tr><tr><td>hystrix.command.default.fallback.enabled</td><td>\u5F53\u6267\u884C\u5931\u8D25\u6216\u8005\u8BF7\u6C42\u88AB\u62D2\u7EDD\uFF0C\u662F\u5426\u4F1A\u5C1D\u8BD5\u8C03\u7528 hystrixCommand.getFallback() \u3002\u9ED8\u8BA4 true</td></tr></tbody></table><h2 id="circuit-breaker-\u76F8\u5173\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#circuit-breaker-\u76F8\u5173\u7684\u5C5E\u6027" aria-hidden="true">#</a> Circuit Breaker \u76F8\u5173\u7684\u5C5E\u6027</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.command.default.circuitBreaker.enabled</td><td>\u7528\u6765\u8DDF\u8E2A circuit \u7684\u5065\u5EB7\u6027\uFF0C\u5982\u679C\u672A\u8FBE\u6807\u5219\u8BA9 request \u77ED\u8DEF\u3002\u9ED8\u8BA4 true</td></tr><tr><td>hystrix.command.default.circuitBreaker.requestVolumeThreshold</td><td>\u4E00\u4E2A rolling window \u5185\u6700\u5C0F\u7684\u8BF7\u6C42\u6570\u3002\u5982\u679C\u8BBE\u4E3A 20\uFF0C\u90A3\u4E48\u5F53\u4E00\u4E2A rolling window \u7684\u65F6\u95F4\u5185\uFF08\u6BD4\u5982\u8BF4 1 \u4E2A rolling window \u662F 10 \u79D2\uFF09\u6536\u5230 19 \u4E2A\u8BF7\u6C42\uFF0C\u5373\u4F7F 19 \u4E2A\u8BF7\u6C42\u90FD\u5931\u8D25\uFF0C\u4E5F\u4E0D\u4F1A\u89E6\u53D1 circuit break\u3002\u9ED8\u8BA4 20</td></tr><tr><td>hystrix.command.default.circuitBreaker.sleepWindowInMilliseconds</td><td>\u89E6\u53D1\u77ED\u8DEF\u7684\u65F6\u95F4\u503C\uFF0C\u5F53\u8BE5\u503C\u8BBE\u4E3A 5000 \u65F6\uFF0C\u5219\u5F53\u89E6\u53D1 circuit break \u540E\u7684 5000 \u6BEB\u79D2\u5185\u90FD\u4F1A\u62D2\u7EDD request\uFF0C\u4E5F\u5C31\u662F 5000 \u6BEB\u79D2\u540E\u624D\u4F1A\u5173\u95ED circuit\u3002\u9ED8\u8BA4 5000</td></tr><tr><td>hystrix.command.default.circuitBreaker.errorThresholdPercentage</td><td>\u9519\u8BEF\u6BD4\u7387\u9600\u503C\uFF0C\u5982\u679C\u9519\u8BEF\u7387&gt;=\u8BE5\u503C\uFF0Ccircuit \u4F1A\u88AB\u6253\u5F00\uFF0C\u5E76\u77ED\u8DEF\u6240\u6709\u8BF7\u6C42\u89E6\u53D1 fallback\u3002\u9ED8\u8BA4 50</td></tr><tr><td>hystrix.command.default.circuitBreaker.forceOpen</td><td>\u5F3A\u5236\u6253\u5F00\u7194\u65AD\u5668\uFF0C\u5982\u679C\u6253\u5F00\u8FD9\u4E2A\u5F00\u5173\uFF0C\u90A3\u4E48\u62D2\u7EDD\u6240\u6709 request\uFF0C\u9ED8\u8BA4 false</td></tr><tr><td>hystrix.command.default.circuitBreaker.forceClosed</td><td>\u5F3A\u5236\u5173\u95ED\u7194\u65AD\u5668 \u5982\u679C\u8FD9\u4E2A\u5F00\u5173\u6253\u5F00\uFF0Ccircuit \u5C06\u4E00\u76F4\u5173\u95ED\u4E14\u5FFD\u7565 circuitBreaker.errorThresholdPercentage</td></tr></tbody></table><h2 id="metrics-\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#metrics-\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> Metrics \u76F8\u5173\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.command.default.metrics.rollingStats.timeInMilliseconds</td><td>\u8BBE\u7F6E\u7EDF\u8BA1\u7684\u65F6\u95F4\u7A97\u53E3\u503C\u7684\uFF0C\u6BEB\u79D2\u503C\uFF0Ccircuit break \u7684\u6253\u5F00\u4F1A\u6839\u636E 1 \u4E2A rolling window \u7684\u7EDF\u8BA1\u6765\u8BA1\u7B97\u3002\u82E5 rolling window \u88AB\u8BBE\u4E3A 10000 \u6BEB\u79D2\uFF0C\u5219 rolling window \u4F1A\u88AB\u5206\u6210 n \u4E2A buckets\uFF0C\u6BCF\u4E2A bucket \u5305\u542B success\uFF0Cfailure\uFF0Ctimeout\uFF0Crejection \u7684\u6B21\u6570\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002\u9ED8\u8BA4 10000</td></tr><tr><td>hystrix.command.default.metrics.rollingStats.numBuckets</td><td>\u8BBE\u7F6E\u4E00\u4E2A rolling window \u88AB\u5212\u5206\u7684\u6570\u91CF\uFF0C\u82E5 numBuckets \uFF1D 10\uFF0Crolling window \uFF1D 10000\uFF0C\u90A3\u4E48\u4E00\u4E2A bucket \u7684\u65F6\u95F4\u5373 1 \u79D2\u3002\u5FC5\u987B\u7B26\u5408 rolling window % numberBuckets == 0\u3002\u9ED8\u8BA4 10</td></tr><tr><td>hystrix.command.default.metrics.rollingPercentile.enabled</td><td>\u6267\u884C\u65F6\u662F\u5426 enable \u6307\u6807\u7684\u8BA1\u7B97\u548C\u8DDF\u8E2A\uFF0C\u9ED8\u8BA4 true</td></tr><tr><td>hystrix.command.default.metrics.rollingPercentile.timeInMilliseconds</td><td>\u8BBE\u7F6E rolling percentile window \u7684\u65F6\u95F4\uFF0C\u9ED8\u8BA4 60000</td></tr><tr><td>hystrix.command.default.metrics.rollingPercentile.numBuckets</td><td>\u8BBE\u7F6E rolling percentile window \u7684 numberBuckets\u3002\u903B\u8F91\u540C\u4E0A\u3002\u9ED8\u8BA4 6</td></tr><tr><td>hystrix.command.default.metrics.rollingPercentile.bucketSize</td><td>\u5982\u679C bucket size \uFF1D 100\uFF0Cwindow \uFF1D 10s\uFF0C\u82E5\u8FD9 10s \u91CC\u6709 500 \u6B21\u6267\u884C\uFF0C\u53EA\u6709\u6700\u540E 100 \u6B21\u6267\u884C\u4F1A\u88AB\u7EDF\u8BA1\u5230 bucket \u91CC\u53BB\u3002\u589E\u52A0\u8BE5\u503C\u4F1A\u589E\u52A0\u5185\u5B58\u5F00\u9500\u4EE5\u53CA\u6392\u5E8F\u7684\u5F00\u9500\u3002\u9ED8\u8BA4 100</td></tr><tr><td>hystrix.command.default.metrics.healthSnapshot.intervalInMilliseconds</td><td>\u8BB0\u5F55 health \u5FEB\u7167\uFF08\u7528\u6765\u7EDF\u8BA1\u6210\u529F\u548C\u9519\u8BEF\u7EFF\uFF09\u7684\u95F4\u9694\uFF0C\u9ED8\u8BA4 500ms</td></tr></tbody></table><h2 id="request-context-\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#request-context-\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> Request Context \u76F8\u5173\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.command.default.requestCache.enabled</td><td>\u9ED8\u8BA4 true\uFF0C\u9700\u8981\u91CD\u8F7D getCacheKey()\uFF0C\u8FD4\u56DE null \u65F6\u4E0D\u7F13\u5B58</td></tr><tr><td>hystrix.command.default.requestLog.enabled</td><td>\u8BB0\u5F55\u65E5\u5FD7\u5230 HystrixRequestLog\uFF0C\u9ED8\u8BA4 true</td></tr></tbody></table><h2 id="collapser-properties-\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#collapser-properties-\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> Collapser Properties \u76F8\u5173\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.collapser.default.maxRequestsInBatch</td><td>\u5355\u6B21\u6279\u5904\u7406\u7684\u6700\u5927\u8BF7\u6C42\u6570\uFF0C\u8FBE\u5230\u8BE5\u6570\u91CF\u89E6\u53D1\u6279\u5904\u7406\uFF0C\u9ED8\u8BA4 Integer.MAX_VALUE</td></tr><tr><td>hystrix.collapser.default.timerDelayInMilliseconds</td><td>\u89E6\u53D1\u6279\u5904\u7406\u7684\u5EF6\u8FDF\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u521B\u5EFA\u6279\u5904\u7406\u7684\u65F6\u95F4\uFF0B\u8BE5\u503C\uFF0C\u9ED8\u8BA4 10</td></tr><tr><td>hystrix.collapser.default.requestCache.enabled</td><td>\u662F\u5426\u5BF9 HystrixCollapser.execute() and HystrixCollapser.queue()\u7684 cache\uFF0C\u9ED8\u8BA4 true</td></tr></tbody></table><h2 id="threadpool-\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#threadpool-\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> ThreadPool \u76F8\u5173\u53C2\u6570</h2><p>\u7EBF\u7A0B\u6570\u9ED8\u8BA4\u503C 10 \u9002\u7528\u4E8E\u5927\u90E8\u5206\u60C5\u51B5\uFF08\u6709\u65F6\u53EF\u4EE5\u8BBE\u7F6E\u5F97\u66F4\u5C0F\uFF09\uFF0C\u5982\u679C\u9700\u8981\u8BBE\u7F6E\u5F97\u66F4\u5927\uFF0C\u90A3\u6709\u4E2A\u57FA\u672C\u5F97\u516C\u5F0F\u53EF\u4EE5 follow\uFF1A requests per second at peak when healthy \xD7 99th percentile latency in seconds + some breathing room \u6BCF\u79D2\u6700\u5927\u652F\u6491\u7684\u8BF7\u6C42\u6570 (99%\u5E73\u5747\u54CD\u5E94\u65F6\u95F4 + \u7F13\u5B58\u503C) \u6BD4\u5982\uFF1A\u6BCF\u79D2\u80FD\u5904\u7406 1000 \u4E2A\u8BF7\u6C42\uFF0C99%\u7684\u8BF7\u6C42\u54CD\u5E94\u65F6\u95F4\u662F 60ms\uFF0C\u90A3\u4E48\u516C\u5F0F\u662F\uFF1A \uFF080.060+0.012\uFF09</p><p>\u57FA\u672C\u5F97\u539F\u5219\u65F6\u4FDD\u6301\u7EBF\u7A0B\u6C60\u5C3D\u53EF\u80FD\u5C0F\uFF0C\u4ED6\u4E3B\u8981\u662F\u4E3A\u4E86\u91CA\u653E\u538B\u529B\uFF0C\u9632\u6B62\u8D44\u6E90\u88AB\u963B\u585E\u3002 \u5F53\u4E00\u5207\u90FD\u662F\u6B63\u5E38\u7684\u65F6\u5019\uFF0C\u7EBF\u7A0B\u6C60\u4E00\u822C\u4EC5\u4F1A\u6709 1 \u5230 2 \u4E2A\u7EBF\u7A0B\u6FC0\u6D3B\u6765\u63D0\u4F9B\u670D\u52A1</p><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hystrix.threadpool.default.coreSize</td><td>\u5E76\u53D1\u6267\u884C\u7684\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4 10</td></tr><tr><td>hystrix.threadpool.default.maxQueueSize</td><td>BlockingQueue \u7684\u6700\u5927\u961F\u5217\u6570\uFF0C\u5F53\u8BBE\u4E3A\uFF0D1\uFF0C\u4F1A\u4F7F\u7528 SynchronousQueue\uFF0C\u503C\u4E3A\u6B63\u65F6\u4F7F\u7528 LinkedBlcokingQueue\u3002\u8BE5\u8BBE\u7F6E\u53EA\u4F1A\u5728\u521D\u59CB\u5316\u65F6\u6709\u6548\uFF0C\u4E4B\u540E\u4E0D\u80FD\u4FEE\u6539 threadpool \u7684 queue size\uFF0C\u9664\u975E reinitialising thread executor\u3002\u9ED8\u8BA4\uFF0D1\u3002</td></tr><tr><td>hystrix.threadpool.default.queueSizeRejectionThreshold</td><td>\u5373\u4F7F maxQueueSize \u6CA1\u6709\u8FBE\u5230\uFF0C\u8FBE\u5230 queueSizeRejectionThreshold \u8BE5\u503C\u540E\uFF0C\u8BF7\u6C42\u4E5F\u4F1A\u88AB\u62D2\u7EDD\u3002\u56E0\u4E3A maxQueueSize \u4E0D\u80FD\u88AB\u52A8\u6001\u4FEE\u6539\uFF0C\u8FD9\u4E2A\u53C2\u6570\u5C06\u5141\u8BB8\u6211\u4EEC\u52A8\u6001\u8BBE\u7F6E\u8BE5\u503C\u3002if maxQueueSize == -1\uFF0C\u8BE5\u5B57\u6BB5\u5C06\u4E0D\u8D77\u4F5C\u7528</td></tr><tr><td>hystrix.threadpool.default.keepAliveTimeMinutes</td><td>\u5982\u679C corePoolSize \u548C maxPoolSize \u8BBE\u6210\u4E00\u6837\uFF08\u9ED8\u8BA4\u5B9E\u73B0\uFF09\u8BE5\u8BBE\u7F6E\u65E0\u6548\u3002\u5982\u679C\u901A\u8FC7 plugin\uFF08https://github.com/Netflix/Hystrix/wiki/Plugins\uFF09\u4F7F\u7528\u81EA\u5B9A\u4E49\u5B9E\u73B0\uFF0C\u8BE5\u8BBE\u7F6E\u624D\u6709\u7528\uFF0C\u9ED8\u8BA41.</td></tr><tr><td>hystrix.threadpool.default.metrics.rollingStats.timeInMilliseconds</td><td>\u7EBF\u7A0B\u6C60\u7EDF\u8BA1\u6307\u6807\u7684\u65F6\u95F4\uFF0C\u9ED8\u8BA4 10000</td></tr><tr><td>hystrix.threadpool.default.metrics.rollingStats.numBuckets</td><td>\u5C06 rolling window \u5212\u5206\u4E3A n \u4E2A buckets\uFF0C\u9ED8\u8BA4 10</td></tr></tbody></table>',21);function d(a,k){return e(),o("div",null,[i,n("img",{src:a.$withBase("/technique/hystric_02.png")},null,8,c),l,n("img",{src:a.$withBase("/technique/hystric_01.png")},null,8,r),u])}var h=t(p,[["render",d],["__file","01_Dubbo\u5B9E\u73B0\u670D\u52A1\u7194\u65AD.html.vue"]]);export{h as default};
