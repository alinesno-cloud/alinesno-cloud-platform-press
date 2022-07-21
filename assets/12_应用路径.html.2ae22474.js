import{_ as n,o as s,c as a,d as e}from"./app.2bc6ad52.js";const t={},o=e(`<h2 id="\u5E94\u7528\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u8DEF\u5F84" aria-hidden="true">#</a> \u5E94\u7528\u8DEF\u5F84</h2><p>\u6709\u4E9B\u7279\u6B8A\u60C5\u51B5\u9700\u8981\u90E8\u7F72\u5230\u5B50\u8DEF\u5F84\u4E0B\uFF0C\u53EF\u4EE5\u6309\u7167\u4E0B\u9762\u6D41\u7A0B\u4FEE\u6539\u3002</p><p>1\u3001\u4FEE\u6539<code>vue.config.js</code>\u4E2D\u7684<code>publicPath</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;/admin/&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/admin/&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u4FEE\u6539<code>router/index.js</code>\uFF0C\u6DFB\u52A0\u4E00\u884C<code>base</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/admin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u6389url\u4E2D\u7684#</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> constantRoutes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u4FEE\u6539<code>layout/components/Navbar.vue</code>\u4E2D\u7684<code>location.href</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>base <span class="token operator">+</span> <span class="token string">&#39;/index&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4\u3001\u4FEE\u6539<code>nginx</code>\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /admin {
	alias   /home/ruoyi/projects/ruoyi-ui;
	try_files $uri $uri/ /index.html =404;
	index  index.html index.htm;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function c(i,r){return s(),a("div",null,p)}var d=n(t,[["render",c],["__file","12_\u5E94\u7528\u8DEF\u5F84.html.vue"]]);export{d as default};
