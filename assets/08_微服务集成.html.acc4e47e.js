import{_ as e,r as t,o as p,c as o,a as n,e as c,b as a,d as l}from"./app.dd55aad1.js";const i={},u=n("h1",{id:"\u5FAE\u670D\u52A1\u96C6\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FAE\u670D\u52A1\u96C6\u6210","aria-hidden":"true"},"#"),a(" \u5FAE\u670D\u52A1\u96C6\u6210")],-1),r=n("h2",{id:"\u5DE5\u7A0B\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5DE5\u7A0B\u793A\u4F8B","aria-hidden":"true"},"#"),a(" \u5DE5\u7A0B\u793A\u4F8B")],-1),k=a("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),d={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},v=a("\u6253\u5F00"),m=l(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u57FA\u4E8E\u591A\u79CD\u65B9\u5F0F\u7684\u5FAE\u670D\u52A1\u6A21\u5F0F\uFF0C\u5305\u62EC OpenFeign/Dubbo/Forest</li><li>\u5FAE\u670D\u52A1\u573A\u666F\u6A21\u5F0F\u7684\u5207\u6362</li><li>\u65B0\u65E7\u7CFB\u7EDF\u573A\u666F\u4E0B\u7684\u5FAE\u670D\u52A1\u517C\u5BB9\u5207\u6362</li></ul><h2 id="\u5FAE\u670D\u52A1\u8C03\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u8C03\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u8C03\u7528\u8BF4\u660E</h2><p>\u8FD9\u91CC\u4E3B\u8981\u6F14\u793A openFeign/Forest/dubbo \u573A\u666F\u4E0B\u7684\uFF0C\u5176\u5B83\u7684 k8s/Mesh \u4E0B\u7684\u7C7B\u540C</p><h3 id="\u914D\u7F6E-nacos-\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-nacos-\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> \u914D\u7F6E nacos \u6CE8\u518C\u4E2D\u5FC3</h3><blockquote><p>\u6B64\u6B65\u9AA4\u53EF\u7701\u7565</p></blockquote><p>\u6DFB\u52A0\u6CE8\u518C\u4E2D\u5FC3\u914D\u7F6E\uFF0C\u5728 yml \u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF0CopenFeign \u8BF7\u81EA\u884C\u767E\u5EA6\u8FDB\u884C\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dubbo</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">address</span><span class="token punctuation">:</span> nacos<span class="token punctuation">:</span>//nacos.lbxinhu.linesno.com<span class="token punctuation">:</span><span class="token number">23456</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">60000</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>user.home<span class="token punctuation">}</span>/alinesno<span class="token punctuation">-</span>dubbo<span class="token punctuation">-</span>output/$<span class="token punctuation">{</span>dubbo.area.city<span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>/dubbo.cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u96C6\u6210-openfeign" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-openfeign" aria-hidden="true">#</a> \u96C6\u6210 OpenFeign</h3><p>\u96C6\u6210 Forest \u4E0E OpenFeign \u7C7B\u4F3C\uFF0C\u8FD9\u91CC\u4E0D\u518D\u505A\u9610\u8FF0\uFF0C\u6DFB\u52A0 openFeign \u7EC4\u4EF6\u5305</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-common-feign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${alinesno.cloud.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>gateway</code>\u6A21\u5757\u4E2D\u63D0\u4F9B\u63A5\u53E3\u670D\u52A1\u5373\u53EF</p><h3 id="\u96C6\u6210-dubbo" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210-dubbo" aria-hidden="true">#</a> \u96C6\u6210 Dubbo</h3><blockquote><p>\u6B64\u5904\u4E0D\u5EFA\u8BAE\u548C\u4E0D\u63A8\u8350\u4F7F\u7528 dubbo \u6CE8\u89E3\u7684\u6A21\u5F0F\uFF0C\u540E\u671F\u96BE\u4EE5\u7EF4\u62A4\u548C\u5207\u6362\u6280\u672F</p></blockquote><p>\u9488\u5BF9\u4E8E\u8001\u7CFB\u7EDF\u7684\u6539\u9020\u914D\u7F6E\uFF0C\u8FD9\u91CC\u66F4\u52A0\u5207\u5408</p><p>\u6DFB\u52A0 RPC \u6CE8\u89E3\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableRpc</span> <span class="token comment">// \u6DFB\u52A0RPC\u6CE8\u89E3</span>
<span class="token annotation punctuation">@EnableApi</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.alinesno.cloud.busines.shop.manage.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;com.alinesno.cloud.busines.shop.manage&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E RPC \u670D\u52A1\uFF0C\u5728<code>resource/spring</code>\u76EE\u5F55\u4E2D\uFF0C\u914D\u7F6E\u63D0\u4F9B\u6216\u8005\u6D88\u8D39\u7684\u670D\u52A1\u5982\u4E0B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u751F\u6210\u8FDC\u7A0B\u670D\u52A1\u4EE3\u7406\uFF0C\u53EF\u4EE5\u548C\u672C\u5730bean\u4E00\u6837\u4F7F\u7528demoService
&lt;dubbo:reference id=&quot;demoService&quot; interface=&quot;org.apache.dubbo.demo.DemoService&quot; /&gt;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u8BF4\u660E\uFF1A</p><ul><li>rpc-consumer.xml: \u6D88\u8D39 dubbo \u670D\u52A1</li><li>rpc-provider.xml: \u63D0\u4F9B dubbo \u670D\u52A1</li></ul><p>\u5177\u4F53\u914D\u7F6E\u67E5\u770B<code>alinesno-cloud-common-config</code>\u76EE\u5F55\u4E0B spring-rpc \u5F00\u5934\u7684\u914D\u7F6E\uFF0C\u5982\u4E0B:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dubbo</span><span class="token punctuation">:</span>
  <span class="token key atrule">area</span><span class="token punctuation">:</span>
    <span class="token key atrule">city</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_AREA<span class="token punctuation">:</span>guangxi<span class="token punctuation">}</span>
  <span class="token key atrule">protocol</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> dubbo
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">-1</span>
  <span class="token key atrule">monitor</span><span class="token punctuation">:</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> registry
  <span class="token key atrule">consumer</span><span class="token punctuation">:</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_CONSUMER_TIMEOUT<span class="token punctuation">:</span><span class="token number">9000000</span><span class="token punctuation">}</span>
    <span class="token key atrule">check</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token key atrule">cache</span><span class="token punctuation">:</span> threadlocal
    <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_GROUP<span class="token punctuation">:</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">}</span>
    <span class="token key atrule">loadbalance</span><span class="token punctuation">:</span> leastactive
    <span class="token key atrule">version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_CONSUMER_VERSION<span class="token punctuation">:</span>2.1.2<span class="token punctuation">-</span>Alpha<span class="token punctuation">}</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span>
    <span class="token key atrule">token</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PRIVIDER_VERSION<span class="token punctuation">:</span>2.1.2<span class="token punctuation">-</span>Alpha<span class="token punctuation">}</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_GROUP<span class="token punctuation">:</span>alinesno<span class="token punctuation">-</span>cloud<span class="token punctuation">}</span>
    <span class="token key atrule">loadbalance</span><span class="token punctuation">:</span> leastactive
    <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PRIVIDER_TIMEOUT<span class="token punctuation">:</span><span class="token number">1800000</span><span class="token punctuation">}</span>
    <span class="token key atrule">threadpool</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PROVIDER_THREADPOOL<span class="token punctuation">:</span>fixed<span class="token punctuation">}</span>
    <span class="token key atrule">threads</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PROVIDER_THREADS<span class="token punctuation">:</span><span class="token number">300</span><span class="token punctuation">}</span>
    <span class="token key atrule">accepts</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PROVIDER_ACCEPTS<span class="token punctuation">:</span><span class="token number">280</span><span class="token punctuation">}</span>
    <span class="token key atrule">register</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DUBBO_PRIVIDER_REGISTER<span class="token punctuation">:</span><span class="token boolean important">true</span><span class="token punctuation">}</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">logger</span><span class="token punctuation">:</span> slf4j
    <span class="token key atrule">name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">address</span><span class="token punctuation">:</span> nacos<span class="token punctuation">:</span>//nacos.lbxinhu.linesno.com<span class="token punctuation">:</span><span class="token number">23456</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">60000</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>user.home<span class="token punctuation">}</span>/alinesno<span class="token punctuation">-</span>dubbo<span class="token punctuation">-</span>output/$<span class="token punctuation">{</span>dubbo.area.city<span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>/dubbo.cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u63D0\u4F9B\u670D\u52A1\u5373\u53EF</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,26);function b(g,h){const s=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[k,n("a",d,[v,c(s)])]),m])}var _=e(i,[["render",b],["__file","08_\u5FAE\u670D\u52A1\u96C6\u6210.html.vue"]]);export{_ as default};
