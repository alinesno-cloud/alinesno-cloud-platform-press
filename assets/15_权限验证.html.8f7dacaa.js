import{_ as s,o as n,c as a,d as t}from"./app.37313d2d.js";const p={},e=t(`<h1 id="\u6743\u9650\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u9A8C\u8BC1" aria-hidden="true">#</a> \u6743\u9650\u9A8C\u8BC1</h1><p>Vue \u524D\u7AEF\u9879\u76EE\u7684\u6743\u9650\u9A8C\u8BC1</p><p>Vue \u524D\u7AEF\u9879\u76EE\u6743\u9650\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF1A\u901A\u8FC7\u83B7\u53D6\u5F53\u524D\u7528\u6237\u7684\u6743\u9650\u53BB\u6BD4\u5BF9\u8DEF\u7531\u8868\uFF0C\u751F\u6210\u5F53\u524D\u7528\u6237\u5177\u6709\u6743\u9650\u7684\u53EF\u8BBF\u95EE\u8DEF\u7531\u8868\uFF0C\u901A\u8FC7 router.addRoutes \u52A8\u6001\u6302\u8F7D\u5230 router \u4E0A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> map<span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;login/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token comment">// \u540C\u6B65\u7684\u65B9\u5F0F</span>
 <span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;login/index&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// \u5F02\u6B65\u7684\u65B9\u5F0F</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B58\u5728\u670D\u52A1\u7AEF\u7684 map \u7C7B\u4F3C\u4E8E</span>
<span class="token keyword">const</span> serviceMap <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">//\u904D\u5386\u8FD9\u4E2A map\uFF0C\u52A8\u6001\u751F\u6210 asyncRoutes\u3002\u5C06 component \u66FF\u6362\u4E3A map[component]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u903B\u8F91\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u4FEE\u6539" aria-hidden="true">#</a> \u903B\u8F91\u4FEE\u6539</h2><p>\u8DEF\u7531\u5C42\u9762\u6743\u9650\u7684\u63A7\u5236\u4EE3\u7801\u90FD\u5728 src/permission.js \u4E2D\uFF0C\u5982\u679C\u60F3\u4FEE\u6539\u903B\u8F91\uFF0C\u76F4\u63A5\u5728\u9002\u5F53\u7684\u5224\u65AD\u903B\u8F91\u4E2D next() \u91CA\u653E\u94A9\u5B50\u5373\u53EF\u3002</p><h2 id="\u6307\u4EE4\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u6743\u9650" aria-hidden="true">#</a> \u6307\u4EE4\u6743\u9650</h2><p>\u5C01\u88C5\u4E86\u4E00\u4E2A\u6307\u4EE4\u6743\u9650\uFF0C\u80FD\u7B80\u5355\u5FEB\u901F\u5730\u5B9E\u73B0\u6309\u94AE\u7EA7\u522B\u7684\u6743\u9650\u5224\u65AD\uFF0C\u4EE3\u7801\u5728 src/directive/permission\u3002</p><p>\u4F7F\u7528</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Admin can see this --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>ROLE_ADMIN<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Editor can see this --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>ROLE_EDITOR<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>editor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Editor can see this --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>ROLE_ADMIN<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>ROLE_EDITOR<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Both admin or editor can see this<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u4E5F\u53EF\u4EE5\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\uFF0C\u5C06\u5B83\u6CE8\u518C\u5230\u5168\u5C40</span>
<span class="token keyword">import</span> permission <span class="token keyword">from</span> <span class="token string">&#39;@/directive/permission/index.js&#39;</span> <span class="token comment">// \u6743\u9650\u5224\u65AD\u6307\u4EE4</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span> permission <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u6743\u9650\u5224\u65AD\u51FD\u6570\uFF0C\u7528\u6CD5\u548C\u6307\u4EE4\u8DDF v-permission \u7C7B\u4F3C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;checkPermission([&#39;ROLE_ADMIN&#39;])&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;Admin&quot;</span><span class="token operator">&gt;</span>Admin can see <span class="token keyword">this</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;checkPermission([&#39;ROLE_EDITOR&#39;])&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;Editor&quot;</span><span class="token operator">&gt;</span>Editor can see <span class="token keyword">this</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;checkPermission([&#39;ROLE_ADMIN&#39;,&#39;ROLE_EDITOR&#39;])&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;Admin-OR-Editor&quot;</span><span class="token operator">&gt;</span>Both admin or editor can see <span class="token keyword">this</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> checkPermission <span class="token keyword">from</span> <span class="token string">&#39;@/utils/permission&#39;</span> <span class="token comment">// \u6743\u9650\u5224\u65AD\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    checkPermission
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function l(c,i){return n(),a("div",null,o)}var u=s(p,[["render",l],["__file","15_\u6743\u9650\u9A8C\u8BC1.html.vue"]]);export{u as default};
