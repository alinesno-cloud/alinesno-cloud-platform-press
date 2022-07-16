import{_ as e,o as t,c as i,a as s,e as o,d as c,b as n,r as p}from"./app.d0203023.js";const l={},r=c(`<h1 id="\u5206\u5E03\u5F0F\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u5B9A\u65F6\u4EFB\u52A1</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h2><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.job.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-job-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${\u6700\u65B0\u7248\u672C}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u589E\u52A0 Zookeeper \u6CE8\u518C\u4E2D\u5FC3\u7684\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">elastic</span><span class="token punctuation">:</span>
  <span class="token key atrule">job</span><span class="token punctuation">:</span>
    <span class="token key atrule">MySimpleJob.cron</span><span class="token punctuation">:</span> 0/10 * * * * <span class="token punctuation">?</span>
    <span class="token key atrule">zk.serverLists</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
    <span class="token key atrule">zk.namespace</span><span class="token punctuation">:</span> cxytiandi_job2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542F\u81EA\u52A8\u914D\u7F6E\u53EA\u9700\u8981\u5728 Spring Boot \u7684\u542F\u52A8\u7C7B\u4E0A\u589E\u52A0<code>@EnableElasticJob</code>\u6CE8\u89E3</p><p>\u914D\u7F6E\u4EFB\u52A1\u53CA\u4E8B\u4EF6\u8FFD\u8E2A\u529F\u80FD\u5728\u6CE8\u89E3\u4E2D\u4E5F\u53EA\u9700\u8981\u914D\u7F6E eventTraceRdbDataSource=\u4F60\u7684\u6570\u636E\u6E90,\u5C31\u53EF\u4EE5\u4F7F\u7528</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// eventTraceRdbDataSource = &quot;datasource&quot;</span>

<span class="token annotation punctuation">@ElasticJobConf</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;MySimpleJob-2&quot;</span><span class="token punctuation">,</span> cron <span class="token operator">=</span> <span class="token string">&quot;0/10 * * * * ?&quot;</span><span class="token punctuation">,</span>
				shardingItemParameters <span class="token operator">=</span> <span class="token string">&quot;0=0,1=1&quot;</span><span class="token punctuation">,</span>
				description <span class="token operator">=</span> <span class="token string">&quot;\u7B80\u5355\u4EFB\u52A1&quot;</span> <span class="token punctuation">,</span>
				eventTraceRdbDataSource <span class="token operator">=</span> <span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySimpleJob</span> <span class="token keyword">implements</span> <span class="token class-name">SimpleJob</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">MySimpleJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">ShardingContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> shardParamter <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getShardingParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u5206\u7247\u53C2\u6570:{} , \u5F00\u59CB\u6267\u884C\u7B80\u5355\u4EFB\u52A1: {}&quot;</span> <span class="token punctuation">,</span> shardParamter<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u8BF4\u660E</h2><h4 id="application-properties-\u4E2D\u914D\u7F6E\u4EFB\u52A1\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#application-properties-\u4E2D\u914D\u7F6E\u4EFB\u52A1\u4FE1\u606F" aria-hidden="true">#</a> application.properties \u4E2D\u914D\u7F6E\u4EFB\u52A1\u4FE1\u606F</h4><p>\u4F7F\u7528\u6CE8\u89E3\u662F\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u4F46\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4E0D\u540C\u7684\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\uFF0C\u6D4B\u8BD5\u73AF\u5883\u8DDF\u751F\u4EA7\u73AF\u5883\u7684\u914D\u7F6E\u80AF\u5B9A\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5728\u53D1\u5E03\u4E4B\u524D\u5C06\u6CE8\u89E3\u4E2D\u7684\u914D\u7F6E\u8C03\u6574\u597D\u7136\u540E\u53D1\u5E03\u3002 \u4E3A\u4E86\u80FD\u591F\u8BA9\u4EFB\u52A1\u7684\u914D\u7F6E\u533A\u5206\u73AF\u5883\uFF0C\u8FD8\u53EF\u4EE5\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u914D\u7F6E\u4EFB\u52A1\u7684\u4FE1\u606F\uFF0C\u5F53\u5C5E\u6027\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E86\u4EFB\u52A1\u7684\u4FE1\u606F\uFF0C\u4F18\u5148\u7EA7\u5C31\u6BD4\u6CE8\u89E3\u4E2D\u7684\u9AD8\u3002 \u9996\u5148\u8FD8\u662F\u5728\u4EFB\u52A1\u7C7B\u4E0A\u52A0@ElasticJobConf(name = &quot;MySimpleJob&quot;)\u6CE8\u89E3\uFF0C\u53EA\u9700\u8981\u589E\u52A0\u4E00\u4E2A name \u5373\u53EF\uFF0C\u4EFB\u52A1\u540D\u662F\u552F\u4E00\u7684\u3002 \u5269\u4E0B\u7684\u914D\u7F6E\u90FD\u53EF\u4EE5\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u683C\u5F0F\u4E3A elasticJob.\u4EFB\u52A1\u540D.\u914D\u7F6E\u5C5E\u6027=\u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>elastic.job.MySimpleJob.cron=0/10 * * * * ?
elastic.job.MySimpleJob.overwrite=true
elastic.job.MySimpleJob.shardingTotalCount=1
elastic.job.MySimpleJob.shardingItemParameters=0=0,1=1
elastic.job.MySimpleJob.jobParameter=test
elastic.job.MySimpleJob.failover=true
elastic.job.MySimpleJob.misfire=true
elastic.job.MySimpleJob.description=simple job
elastic.job.MySimpleJob.monitorExecution=false
elastic.job.MySimpleJob.listener=com.cxytiandi.job.core.MessageElasticJobListener
elastic.job.MySimpleJob.jobExceptionHandler=com.cxytiandi.job.core.CustomJobExceptionHandler
elastic.job.MySimpleJob.disabled=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="script-\u4EFB\u52A1\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#script-\u4EFB\u52A1\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> Script \u4EFB\u52A1\u4F7F\u7528\u8BF4\u660E</h4><p>\u7531\u4E8E Script \u4EFB\u52A1\u7684\u6267\u884C\u903B\u8F91\u662F\u5728\u5177\u4F53\u7684\u811A\u672C\u4E2D\uFF0C\u662F\u901A\u8FC7 scriptCommandLine \u6765\u6307\u5B9A\u6267\u884C\u811A\u672C\u7684\u8DEF\u5F84\u3002\u6211\u8FD9\u8FB9\u4E3A\u4E86\u7EDF\u4E00\u7684\u53BB\u53D1\u73B0\u9879\u76EE\u4E2D\u7684\u4EFB\u52A1\u5217\u8868\uFF0C\u8FD8\u662F\u9700\u8981\u5EFA\u4E00\u4E2A\u811A\u672C\u7684 Java \u7C7B\uFF0C\u52A0\u4E0A ElasticJobConf \u6CE8\u89E3\uFF0C\u53EA\u662F\u4E0D\u9700\u8981\u5199\u903B\u8F91\u800C\u5DF2\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u811A\u672C\u4EFB\u52A1\u4E0D\u9700\u8981\u5199\u903B\u8F91\uFF0C\u903B\u8F91\u5728\u88AB\u6267\u884C\u7684\u811A\u672C\u4E2D\uFF0C\u8FD9\u8FB9\u53EA\u662F\u5B9A\u4E49\u4E00\u4E2A\u4EFB\u52A1\u800C\u5DF2
 * @author yinjihuan
 *
 */
@ElasticJobConf(name = &quot;MyScriptJob&quot;)
public class MyScriptJob implements ScriptJob {
	public void execute(ShardingContext context) {
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>elastic.job.MyScriptJob.cron=0/10 * * * * ?
elastic.job.MyScriptJob.overwrite=true
elastic.job.MyScriptJob.scriptCommandLine=/User/local/apache-tomcat/bin/startup.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9E23\u8C22" tabindex="-1"><a class="header-anchor" href="#\u9E23\u8C22" aria-hidden="true">#</a> \u9E23\u8C22</h2><blockquote><p>\u6B64\u5904\u611F\u8C22\u76F8\u5173\u5F00\u6E90\u9879\u76EE</p></blockquote>`,21),u=n("\u6B64\u9879\u76EE\u57FA\u4E8E"),d={href:"https://github.com/yinjihuan/elastic-job-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"},m=n("elastic-job-spring-boot-starter"),v=n("\u6539\u9020");function b(k,g){const a=p("ExternalLinkIcon");return t(),i("div",null,[r,s("p",null,[u,s("a",d,[m,o(a)]),v])])}var y=e(l,[["render",b],["__file","27_\u5206\u5E03\u5F0F\u5B9A\u65F6\u4EFB\u52A1.html.vue"]]);export{y as default};
