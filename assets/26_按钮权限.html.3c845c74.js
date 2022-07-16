import{_ as a,o as n,c as s,d as t}from"./app.7aabf06d.js";const e={},p=t(`<h1 id="\u6309\u94AE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE\u6743\u9650" aria-hidden="true">#</a> \u6309\u94AE\u6743\u9650</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5E94\u7528\u6743\u9650\u7684\u63A7\u5236\u529B\u5EA6\u5230\u6309\u94AE\u7EA7\u522B,\u5E94\u7528\u591A\u79CD\u4E1A\u52A1\u573A\u666F\u7684\u6309\u94AE\u6743\u9650\u3002 \u7531\u4E8E\u4E00\u4E9B\u7279\u6B8A\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\uFF08\u5982\u63D0\u53D6\u516C\u5171\u65B9\u6CD5\u7C7B)\uFF0C\u6743\u9650\u63A7\u5236\u7531\u81EA\u5B9A\u4E49\u5904\u7406, \u4EFF<code>shiro</code>\u914D\u7F6E.</p><h2 id="\u9ED8\u8BA4\u6309\u94AE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u6309\u94AE\u6743\u9650" aria-hidden="true">#</a> \u9ED8\u8BA4\u6309\u94AE\u6743\u9650</h2><blockquote><p>\u6B64\u53EA\u4E3A\u9875\u9762\u7EA7\u9690\u85CF</p></blockquote><p>\u6B64\u573A\u666F\u4E3A\u9ED8\u8BA4\u7684 \u83DC\u5355--&gt;\u6309\u94AE \u6743\u9650\u64CD\u4F5C\uFF0C\u901A\u8FC7\u8DEF\u5F84\u7684<code>menuId</code>\u63A7\u5236</p><p>\u8C03\u7528\u65B9\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">page:</span>permission</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7684\u7ED3\u679C\u5982\u4E0B\uFF0C\u5047\u8BBE\u7528\u6237\u62E5\u6709<code>\u6DFB\u52A0</code>\u548C<code>\u5220\u9664</code>\u4E24\u79CD\u6743\u9650:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-success<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">$<span class="token punctuation">.</span>operate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> \u65B0\u589E
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-danger btn-del disabled<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">$<span class="token punctuation">.</span>operate<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-remove<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> \u5220\u9664
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u89C4\u5219\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u89C4\u5219\u9875\u9762" aria-hidden="true">#</a> \u4E0D\u89C4\u5219\u9875\u9762</h2><blockquote><p>\u6B64\u53EA\u4E3A\u9875\u9762\u7EA7\u9690\u85CF</p></blockquote><p>\u6B64\u573A\u666F\u4E3A\u4E00\u7EA7\u5F39\u7A97\uFF0C\u6216\u8005\u4E8C\u7EA7\u5F39\u7A97\u6743\u9650\uFF0C\u901A\u8FC7\u6309\u952E\u6807\u8BC6\u7684<code>permission</code>\u63A7\u5236.</p><p>\u8C03\u7528\u65B9\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// \u5176\u4E2D\u4F20\u9012\u53C2\u6570\u4E3A\u6309\u94AE\u6807\u8BC6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-success<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">$<span class="token punctuation">.</span>operate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name"><span class="token namespace">page:</span>hasPermission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sys:user:save<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> \u65B0\u589E
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F3A\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u63A7\u5236" aria-hidden="true">#</a> \u5F3A\u63A7\u5236</h2><blockquote><p>\u6B64\u53EA\u4E3A\u65B9\u6CD5\u7EA7\u62E6\u622A</p></blockquote><p>\u4EE5\u4E0A\u4E24\u79CD\u6743\u9650\u63A7\u5236\u5E76\u4E0D\u80FD\u62E6\u622A\u540E\u53F0\u6743\u9650\uFF0C\u53EA\u5728\u9875\u9762\u505A\u4E86\u6309\u94AE\u9690\u85CF\uFF0C\u5E76\u4E0D\u80FD\u5230\u63A7\u5236\u5C42 \u8FDB\u884C\u63A7\u5236\uFF0C\u5F3A\u63A7\u5236\u53EF\u4EE5\u505A\u5230\u65B9\u6CD5\u7EA7\u62E6\u622A</p><p>\u5728\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u6CE8\u89E3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u4FDD\u5B58\u6309\u94AE, \u5176\u4E2Dsys:user:save\u4E3A\u6309\u94AE\u6807\u8BC6
 */
@OperationPermissions(&quot;sys:user:save&quot;)
@ResponseBody
@PostMapping(&quot;buttonSave&quot;)
public ResponseBean buttonSave(@Validated ManagerResourceBean bean) {
    // \u6B64\u5904\u7701\u7565\u5904\u7406\u903B\u8F91

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><p>\u6B64\u5904\u4EFF<code>shiro</code>\u6743\u9650\u914D\u7F6E\uFF0C\u6807\u8BC6\u4E5F\u662F\u6309 shiro \u7684\u6807\u8BC6\u63A7\u5236\uFF0C\u5177\u4F53\u89C4\u5219\u5982\u4E0B:</p><ul><li>\u5F85\u8865</li></ul>`,23),c=[p];function o(l,u){return n(),s("div",null,c)}var r=a(e,[["render",o],["__file","26_\u6309\u94AE\u6743\u9650.html.vue"]]);export{r as default};
