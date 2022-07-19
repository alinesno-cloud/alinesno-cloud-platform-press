import{_ as n,o as s,c as a,d as t}from"./app.879cb312.js";const p={},e=t(`<h1 id="\u53BB\u6389\u5DE5\u7A0B\u5355\u70B9\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u5DE5\u7A0B\u5355\u70B9\u767B\u9646" aria-hidden="true">#</a> \u53BB\u6389\u5DE5\u7A0B\u5355\u70B9\u767B\u9646</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u53BB\u6389\u5355\u70B9\u767B\u9646\u7684\u5207\u6362</li><li>ACP \u5207\u6362\u5355\u70B9\u548C\u975E\u5355\u70B9\u7684\u65B9\u5F0F</li></ul><h2 id="\u7248\u672C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u8BF4\u660E" aria-hidden="true">#</a> \u7248\u672C\u8BF4\u660E</h2><ul><li>alinesno-ui:1.7 +</li><li>alinesno-cloud-platform:2.1.2-Alpha +</li></ul><h2 id="\u96C6\u6210\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u6B65\u9AA4" aria-hidden="true">#</a> \u96C6\u6210\u6B65\u9AA4</h2><h3 id="\u524D\u7AEF\u914D\u7F6E\u5355\u70B9\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u914D\u7F6E\u5355\u70B9\u767B\u9646" aria-hidden="true">#</a> \u524D\u7AEF\u914D\u7F6E\u5355\u70B9\u767B\u9646</h3><p>\u53BB\u6389\u62E6\u622A\u914D\u7F6E</p><p>\u5728<code>main.js</code>\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6CE8\u91CA\u6389\u5355\u70B9\u7684\u914D\u7F6E</span>
<span class="token comment">// Vue.use(EnableUaaClient, {routerInstance: router})</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5F00<code>permission.js</code>\u7684\u6587\u4EF6\u914D\u7F6E\u8DEF\u5F84\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* has token*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u5F53\u524D\u7528\u6237\u662F\u5426\u5DF2\u62C9\u53D6\u5B8Cuser_info\u4FE1\u606F</span>
        store
          <span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;GetInfo&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;GenerateRoutes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">accessRoutes</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token comment">// \u6839\u636Eroles\u6743\u9650\u751F\u6210\u53EF\u8BBF\u95EE\u7684\u8DEF\u7531\u8868</span>
              router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>accessRoutes<span class="token punctuation">)</span> <span class="token comment">// \u52A8\u6001\u6DFB\u52A0\u53EF\u8BBF\u95EE\u8DEF\u7531\u8868</span>
              <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>to<span class="token punctuation">,</span> <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// hack\u65B9\u6CD5 \u786E\u4FDDaddRoutes\u5DF2\u5B8C\u6210</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;LogOut&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err = &#39;</span> <span class="token operator">+</span> err<span class="token punctuation">)</span>
              Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
              <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CA1\u6709token</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u514D\u767B\u5F55\u767D\u540D\u5355\uFF0C\u76F4\u63A5\u8FDB\u5165</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// next(\`/login?redirect=\${to.fullPath}\`) // \u5426\u5219\u5168\u90E8\u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>fullPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// \u5426\u5219\u5168\u90E8\u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u53F0\u5207\u6362\u975E\u5355\u70B9\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u5207\u6362\u975E\u5355\u70B9\u767B\u9646" aria-hidden="true">#</a> \u540E\u53F0\u5207\u6362\u975E\u5355\u70B9\u767B\u9646</h3><p>\u5207\u6362 API \u8BA4\u8BC1\u6CE8\u89E3\uFF0C\u8C03\u7528<code>EnableSSO</code>\u6CE8\u89E3\u4E3A<code>EnableApi</code>\uFF0C\u5982\u4E0B\u56FE:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableApi</span>
<span class="token comment">// @EnableSSO  // \u5355\u70B9\u767B\u9646\u6CE8\u89E3</span>
<span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SaasWebApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SaasWebApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","07_\u53BB\u6389\u5355\u70B9\u767B\u9646\u96C6\u6210.html.vue"]]);export{r as default};
