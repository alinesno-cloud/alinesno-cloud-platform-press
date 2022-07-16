import{_ as n,o as a,c as s,d as e}from"./app.7aabf06d.js";const t={},p=e(`<h1 id="\u79DF\u6237\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u79DF\u6237\u914D\u7F6E" aria-hidden="true">#</a> \u79DF\u6237\u914D\u7F6E</h1><h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>\u6B64\u6587\u6863\u9488\u5BF9\u7684\u662F:\u79DF\u6237\u5728\u95E8\u6237\u914D\u7F6E\u597D\u5E94\u7528\u53C2\u6570,\u6BD4\u5982\u7CFB\u7EDF\u53C2\u6570\uFF0C\u6570\u636E\u5B57\u5178\uFF0C\u5E94\u7528\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u8C03\u7528\uFF0C\u540C\u65F6\u4E5F\u6DFB\u52A0\u4E86\u79DF\u6237\u6570\u636E\u6743\u9650\uFF0C \u79DF\u6237\u6743\u9650\u662F SaaS \u8F6F\u4EF6\u7684\u57FA\u7840\u8BBE\u8BA1\u7406\u5FF5\u548C\u4E1A\u52A1\u4E2D\u53F0\u7684\u57FA\u7840\u3002</p><h2 id="\u79DF\u6237\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u79DF\u6237\u539F\u7406" aria-hidden="true">#</a> \u79DF\u6237\u539F\u7406</h2><p>\u79DF\u6237\u662F\u901A\u8FC7<code>tenantId</code>\u5B57\u6BB5\u8FDB\u884C\u6570\u636E\u8FC7\u6EE4\uFF0C\u5728\u4FDD\u5B58\u6570\u636E\u7684\u65F6\u5019\uFF0C\u540C\u65F6\u63D2\u5165\u79DF\u6237\u7684\u6570\u636E\u6743\u9650\uFF0C\u4FBF\u4E8E\u540E\u671F\u7684\u79DF\u6237\u8FC7\u6EE4\u62C6\u5206\uFF0C\u5E73\u53F0\u9ED8\u8BA4\u7684\u79DF\u6237\u6570\u636E \u9488\u5BF9\u7684\u662F\u5355\u4E2A\u7528\u6237\u8868\uFF0C\u6216\u8005\u7B80\u5355\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u590D\u6742\u7684\u4E1A\u52A1\u6570\u636E\u6743\u9650\uFF0C\u5219\u901A\u8FC7\u81EA\u5B9A\u4E49\u6570\u636E\u6743\u9650\u8FC7\u6EE4\u3002</p><p>\u5E38\u7528\u6570\u636E\u6743\u9650\u914D\u7F6E\uFF0C\u4F7F\u7528<code>DataFilter</code>\u6CE8\u89E3\uFF0C\u5982:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@DataFilter</span>
<span class="token annotation punctuation">@TranslateCode</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;[{hasStatus:has_status}]&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/datatables&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">DatatablesPageBean</span> <span class="token function">datatables</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request <span class="token punctuation">,</span> <span class="token class-name">Model</span> model <span class="token punctuation">,</span>  <span class="token class-name">DatatablesPageBean</span> page<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toPage</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> iManagerAccountService <span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5B9A\u4E49\u6570\u636E\u6743\u9650\uFF0C\u5B9E\u73B0\u7C7B<code>DateFilterParent</code>\u63A5\u53E3\u3002</p><h2 id="\u8C03\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u8C03\u7528\u65B9\u6CD5</h2><p>\u914D\u7F6E\u5E94\u7528 id \u548C\u79DF\u6237 id</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dubbo</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">key-id</span><span class="token punctuation">:</span> 629589307002191872   \u5E94\u7528id
    <span class="token key atrule">tenant-id</span><span class="token punctuation">:</span> 622470063085060096   \u7528\u6237id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u53E3\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u79DF\u6237list\u67E5\u8BE2
 * <span class="token keyword">@param</span> <span class="token parameter">restWrapper</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entity</span><span class="token punctuation">&gt;</span></span> <span class="token function">tenantFindList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">RestWrapper</span> restWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u79DF\u6237one\u67E5\u8BE2
 * <span class="token keyword">@param</span> <span class="token parameter">restWrapper</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token class-name">Entity</span> <span class="token function">tenantFindOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">RestWrapper</span> restWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u793A\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5F15\u7528\u53C2\u6570\u670D\u52A1</span>
<span class="token annotation punctuation">@Reference</span>
<span class="token keyword">private</span> <span class="token class-name">IManagerSettingsService</span> managerSettingsService

<span class="token comment">// \u8C03\u7528\u7CFB\u7EDF\u53C2\u6570</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerSettingsEntity</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> managerSettingsService<span class="token punctuation">.</span><span class="token function">tenantFindList</span><span class="token punctuation">(</span><span class="token class-name">RestWrapper</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;configKey&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sys.portal.style&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;list : &quot;</span> <span class="token operator">+</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,17),c=[p];function i(o,l){return a(),s("div",null,c)}var r=n(t,[["render",i],["__file","28_\u79DF\u6237\u914D\u7F6E.html.vue"]]);export{r as default};
