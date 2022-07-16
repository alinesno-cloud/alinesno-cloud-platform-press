import{_ as n,o as a,c as s,d as t}from"./app.1be6a0c7.js";const p={},e=t(`<h1 id="\u6743\u9650\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u4F7F\u7528" aria-hidden="true">#</a> \u6743\u9650\u4F7F\u7528</h1><p>\u5C01\u88C5\u4E86\u4E00\u4E2A\u6307\u4EE4\u6743\u9650\uFF0C\u80FD\u7B80\u5355\u5FEB\u901F\u7684\u5B9E\u73B0\u6309\u94AE\u7EA7\u522B\u7684\u6743\u9650\u5224\u65AD\u3002v-permission</p><p><strong>\u4F7F\u7528\u6743\u9650\u5B57\u7B26\u4E32 v-hasPermi</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// \u5355\u4E2A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-hasPermi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>system:user:add<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B58\u5728\u6743\u9650\u5B57\u7B26\u4E32\u624D\u80FD\u770B\u5230<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
// \u591A\u4E2A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-hasPermi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>system:user:add<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>system:user:edit<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5305\u542B\u6743\u9650\u5B57\u7B26\u4E32\u624D\u80FD\u770B\u5230<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u89D2\u8272\u5B57\u7B26\u4E32 v-hasRole</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// \u5355\u4E2A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-hasRole</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7BA1\u7406\u5458\u624D\u80FD\u770B\u5230<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
// \u591A\u4E2A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-hasRole</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>role1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>role2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5305\u542B\u89D2\u8272\u624D\u80FD\u770B\u5230<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B83\u662F\u4E0D\u9002\u5408\u4F7F\u7528 v-hasPermi\uFF0C\u5982\u5143\u7D20\u6807\u7B7E\u7EC4\u4EF6\uFF0C\u53EA\u80FD\u901A\u8FC7\u624B\u52A8\u8BBE\u7F6E v-if\u3002 \u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u6743\u9650\u5224\u65AD\u51FD\u6570\uFF0C\u7528\u6CD5\u548C\u6307\u4EE4 v-hasPermi \u7C7B\u4F3C\u3002</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkPermi([<span class="token punctuation">&#39;</span>system:user:add<span class="token punctuation">&#39;</span>])<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7528\u6237\u7BA1\u7406<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7528\u6237\u7BA1\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkPermi([<span class="token punctuation">&#39;</span>system:user:add<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>system:user:edit<span class="token punctuation">&#39;</span>])<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u53C2\u6570\u7BA1\u7406<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53C2\u6570\u7BA1\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkRole([<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>])<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u89D2\u8272\u7BA1\u7406<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u89D2\u8272\u7BA1\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkRole([<span class="token punctuation">&#39;</span>admin<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>common<span class="token punctuation">&#39;</span>])<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5B9A\u65F6\u4EFB\u52A1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>job<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B9A\u65F6\u4EFB\u52A1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> checkPermi<span class="token punctuation">,</span> checkRole <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/permission&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6743\u9650\u5224\u65AD\u51FD\u6570</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    checkPermi<span class="token punctuation">,</span>
    checkRole
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,u){return a(),s("div",null,o)}var k=n(p,[["render",c],["__file","05_\u6743\u9650\u4F7F\u7528.html.vue"]]);export{k as default};
