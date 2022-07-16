import{_ as t,o as e,c as p,a as n,d as a,b as o}from"./app.674cd562.js";const c={},l=a('<h1 id="\u7EC4\u4EF6\u8F6C-sdk" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u8F6C-sdk" aria-hidden="true">#</a> \u7EC4\u4EF6\u8F6C SDK</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u7EC4\u4EF6\u8F6C SDK \u662F\u5E73\u53F0\u7EC4\u4EF6\u5316\u7684\u91CD\u8981\u4E00\u6B65\uFF0C\u7531\u4E8E\u4E1A\u52A1\u7684\u5DEE\u5F02\u6027\u548C\u7B97\u6CD5\u7684\u5DEE\u5F02\u6027\uFF0C\u540C\u65F6\u4E5F\u5305\u542B\u4E2A\u6027\u5316\u8981\u6C42\u7B49\uFF0C \u6240\u4EE5\u7EC4\u4EF6\u8F6C SDK\uFF0C\u4FBF\u4E8E\u5176\u5B83\u7EC4\u4EF6\u4F9D\u8D56</p><h2 id="sdk-\u67B6\u6784\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#sdk-\u67B6\u6784\u8BBE\u8BA1" aria-hidden="true">#</a> SDK \u67B6\u6784\u8BBE\u8BA1</h2>',4),i=["src"],u=a(`<h4 id="\u67B6\u6784\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u8BF4\u660E" aria-hidden="true">#</a> \u67B6\u6784\u8BF4\u660E</h4><ul><li>SDK \u7EC4\u4EF6\uFF1ASDK \u7EC4\u4EF6\u4E00\u5B9A\u662F Jar \u5305\uFF0C\u4E0E\u57FA\u7840\u7EC4\u4EF6\u4E0D\u4E00\u6837</li><li>\u7A33\u5B9A\u6027\uFF1ASDK \u7EC4\u4EF6\u662F<code>Release</code>\u7248\u672C\uFF0C\u5373\u4F7F\u6709\u9519\u8BEF\uFF0C\u4E5F\u53EA\u80FD\u5728\u65B0\u7248\u672C\u4FEE\u590D</li><li>\u53EF\u6269\u5C55\u6027\uFF1ASDK \u7EC4\u4EF6\u7EC4\u4EF6\u8981\u53EF\u7EE7\u627F\u7684\uFF0C\u53EF\u4F9D\u8D56\u7684\uFF0C\u53EF\u6269\u5C55\u7684\uFF0C\u6240\u4EE5\u53D8\u91CF\u7684\u4FEE\u9970\u7B26\u548C\u63A5\u53E3\u5B9A\u4E49\u975E\u5E38\u91CD\u8981</li><li>\u53EF\u62D4\u63D2\u6027\uFF1ASDK \u7684\u4F9D\u8D56\u9700\u8981\u4E00\u5B9A\u7684\u4FBF\u5229\u6027\uFF0C\u53EF\u62D4\u63D2</li><li>\u4E0D\u53EF\u4F20\u9012\u6027\uFF1ASDK \u7684\u4F9D\u8D56\u9700\u8981\u81EA\u5DF1\u7684\u5355\u72EC\u5305\uFF0C\u800C\u907F\u514D\u5BF9\u5176\u5B83\u5DE5\u7A0B\u7684\u5F71\u54CD\uFF0C\u90E8\u5206\u5305\u4E0D\u53EF\u4F20\u9012\u6027\u6709\u4E00\u5B9A\u7684\u5FC5\u8981\u6027</li></ul><p><code>\u4E0D\u53EF\u4F20\u9012\u6027\u4F7F\u7528maven\u7684&lt;optional&gt;true&lt;/optional&gt;\u5B57\u6BB5\u5904\u7406</code></p><h2 id="\u7EC4\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u7EC4\u4EF6\u64CD\u4F5C</h2><p>\u4EE5\u4E0B\u4E3A\u6DFB\u52A0\u5DE5\u4F5C\u6D41\u7EC4\u4EF6\u4E3A\u793A\u4F8B</p><p>\u6DFB\u52A0<code>Enable</code>\u8BF4\u660E\uFF0C\u4F8B\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@EnableJpaRepositories</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token class-name">WorkflowConfigurationSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
	<span class="token class-name">WorkflowEntityDefinitionRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
	<span class="token class-name">WorkflowRepositoryDefinitionRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableWorkflow</span> <span class="token punctuation">{</span>

	<span class="token keyword">boolean</span> <span class="token function">autoRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">jpa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">//--------------- JPA\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u4E3A\u4E0E\u9ED8\u8BA4JPA\u7684\u517C\u5BB9\uFF0C\u4FDD\u7559\u4E0D\u5FC5\u4FEE\u6539----------------------</span>
	<span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">includeFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">excludeFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">repositoryFactoryBeanClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">JpaRepositoryFactoryBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> <span class="token function">namedQueriesLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> <span class="token function">repositoryImplementationPostfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;Impl&quot;</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> <span class="token function">transactionManagerRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;transactionManager&quot;</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> <span class="token function">entityManagerFactoryRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;entityManagerFactory&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> <span class="token function">enableDefaultTransactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token comment">//--------------- JPA\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u4E3A\u4E0E\u9ED8\u8BA4JPA\u7684\u517C\u5BB9\uFF0C\u4FDD\u7559\u4E0D\u5FC5\u4FEE\u6539----------------------</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0<code>Entity</code>\u6CE8\u518C\u8BF4\u660E\uFF0C\u4F8B\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkflowEntityDefinitionRegistrar</span> <span class="token keyword">extends</span> <span class="token class-name">ConstomEntityDefinitionRegistrar</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBusinessBackPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token class-name">EnableWorkflow</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.entity&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">EnableWorkflow</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0<code>Repository</code>\u6CE8\u518C\u64CD\u4F5C\uFF0C\u4F8B\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkflowRepositoryDefinitionRegistrar</span> <span class="token keyword">extends</span> <span class="token class-name">ConstomRepositoryDefinitionRegistrar</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBusinessBackPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token class-name">EnableWorkflow</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.repository&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">EnableWorkflow</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0<code>Componse</code>\u64CD\u4F5C\uFF0C\u4F8B\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkflowConfigurationSelector</span> <span class="token keyword">extends</span> <span class="token class-name">CustomAutoConfigurationImportSelector</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scanComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAnnotationClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">EnableWorkflow</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5DE5\u7A0B\u7ED3\u6784\u5982\u4E0B\uFF1A</p>`,14),k=["src"],r=n("h2",{id:"\u5176\u5B83",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5176\u5B83","aria-hidden":"true"},"#"),o(" \u5176\u5B83")],-1),d=n("ul",null,[n("li",null,"\u540E\u671F\u5F85\u6574\u5408\u5230\u4EE3\u7801\u751F\u6210\u5668\u4E2D")],-1);function v(s,m){return e(),p("div",null,[l,n("img",{src:s.$withBase("/technique/sdk_02.png")},null,8,i),u,n("img",{src:s.$withBase("/technique/sdk_01.jpg")},null,8,k),r,d])}var g=t(c,[["render",v],["__file","38_\u7EC4\u4EF6\u8F6CSDK.html.vue"]]);export{g as default};
