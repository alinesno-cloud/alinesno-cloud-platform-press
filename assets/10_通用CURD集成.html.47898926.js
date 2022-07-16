import{_ as t,o as p,c as e,a as n,e as o,b as s,d as c,r as i}from"./app.abe7257d.js";const l={},u=n("h1",{id:"\u901A\u7528\u524D\u7AEF\u63A5\u53E3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u901A\u7528\u524D\u7AEF\u63A5\u53E3","aria-hidden":"true"},"#"),s(" \u901A\u7528\u524D\u7AEF\u63A5\u53E3")],-1),k=n("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B\u5DE5\u7A0B")],-1),d=s("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),r={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},v=s("\u6253\u5F00"),m=c(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5E73\u53F0\u4EE3\u7801\u751F\u6210\u7684\u9ED8\u8BA4 CURD \u96C6\u6210</li><li>\u5E73\u53F0\u524D\u7AEF\u63D0\u4F9B\u7684\u9ED8\u8BA4 rest \u63A5\u53E3</li><li>\u4E0E\u524D\u7AEF\u754C\u9762\u9ED8\u8BA4\u96C6\u6210\u7684\u63A5\u53E3</li><li>rest \u63A5\u53E3\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4F20\u9012\u5BF9\u8C61</li></ul><h2 id="\u901A\u7528\u7684\u524D\u7AEF\u63A5\u53E3\u5DE5\u7A0B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u7684\u524D\u7AEF\u63A5\u53E3\u5DE5\u7A0B\u8BF4\u660E" aria-hidden="true">#</a> \u901A\u7528\u7684\u524D\u7AEF\u63A5\u53E3\u5DE5\u7A0B\u8BF4\u660E</h2><h3 id="\u540E\u53F0\u7684-curd-\u901A\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u7684-curd-\u901A\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u540E\u53F0\u7684 CURD \u901A\u7528\u65B9\u6CD5</h3><p>\u6B64\u5904\u4E3A\u524D\u7AEF\u5DE5\u7A0B\u9ED8\u8BA4\u7684\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u72B6\u6001\u6B63\u5E38\u5217\u8868&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findAllHasStatus&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">protected</span> <span class="token class-name">AjaxResult</span> <span class="token function">findAllHasStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6240\u6709\u5217\u8868&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findAll&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">protected</span> <span class="token class-name">AjaxResult</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">FEIGN</span> feign<span class="token punctuation">,</span> <span class="token class-name">String</span> applicationId<span class="token punctuation">)</span>  <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FDD\u5B58\u5B9E\u4F53&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Entity</span> entity<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u901A\u8FC7id\u5217\u8868\u67E5\u8BE2&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findIds&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">findIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span>  <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u901A\u8FC7id\u5220\u9664&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;delete/{ids}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> ids<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u901A\u8FC7id\u83B7\u53D6\u5B9E\u4F53&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;detail/{id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">detail</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u66F4\u65B0\u5B9E\u4F53&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;modify&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Entity</span> <span class="token class-name">Entity</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u901A\u8FC7id\u67E5\u8BE2\u5B9E\u4F53&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;findOne&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9E\u4F53\u6570\u91CF\u7EDF\u8BA1&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u901A\u8FC7id\u5220\u9664\u5B9E\u4F53&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;deleteById&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u5B9E\u4F53\u72B6\u6001&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;changeStatus&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">changeStatus</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">HasStatusVo</span> status<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u67D0\u5B57\u6BB5\u7684\u503C&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;changeField&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">changeFiled</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">FieldDto</span> field<span class="token punctuation">)</span>  <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6DFB\u52A0\u5206\u9875\u67E5\u8BE2\u7684\u65B9\u6CD5\uFF0C\u5728\u5404\u4E2A\u5DE5\u7A0B\u91CC\u9762\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@TranslateCode</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/datatables&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">TableDataInfo</span> <span class="token function">datatables</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">,</span> <span class="token class-name">DatatablesPageBean</span> page<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;page = {}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">ToStringBuilder</span><span class="token punctuation">.</span><span class="token function">reflectionToString</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toPage</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getFeign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u524D\u7AEF\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210\u65B9\u6CD5" aria-hidden="true">#</a> \u524D\u7AEF\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210\u65B9\u6CD5</h3><p>\u6B64\u63A5\u53E3\u5728\u524D\u7AEF\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u96C6\u6210\uFF0C\u5177\u4F53\u63A5\u53E3\u5730\u5740\u4F4D\u4E8E<code>alinesno-cloud-common-web-api-starter</code>\u4E0B\u7684<code>rest</code>\u6A21\u5757\uFF0C \u8FD9\u91CC\u4E3B\u8981\u5305\u542B\u51E0\u4E2A\u6A21\u5757\uFF1A</p><ul><li>\u767B\u9646\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210</li><li>\u914D\u7F6E\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210</li><li>\u4E0A\u4F20\u4E0B\u8F7D\u56FE\u7247\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210</li><li>\u5B57\u5178\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210</li><li>\u7EC4\u7EC7\u673A\u6784\u63A5\u53E3\u7684\u9ED8\u8BA4\u96C6\u6210</li></ul><p>\u5177\u4F53\u8F83\u591A\uFF0C\u53EF\u914D\u7F6E swagger \u67E5\u770B\uFF0C</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,14);function b(g,h){const a=i("ExternalLinkIcon");return p(),e("div",null,[u,k,n("p",null,[d,n("a",r,[v,o(a)])]),m])}var f=t(l,[["render",b],["__file","10_\u901A\u7528CURD\u96C6\u6210.html.vue"]]);export{f as default};
