import{_ as o,o as i,c,a as n,e as a,b as t,d as l,r as e}from"./app.5803e911.js";const r={},d={id:"pagination-\u5206\u9875",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#pagination-\u5206\u9875","aria-hidden":"true"},"#",-1),k=t(" Pagination \u5206\u9875 "),m=l(`<p>Pagination \u7EC4\u4EF6\u4E3B\u8981\u662F\u57FA\u4E8E Element \u7684 <code>el-pagination</code>\u8FDB\u884C\u4E86\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5E76\u62D3\u5C55\u4E86\u81EA\u52A8\u6EDA\u52A8\u7684\u529F\u80FD\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span>
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:page.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listQuery.page<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:limit.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listQuery.limit<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getList<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Pagination <span class="token keyword">from</span> <span class="token string">&#39;@/components/Pagination&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">listQuery</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u6570\u636E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">total</td><td style="text-align:left;">\u603B\u6761\u76EE\u6570</td><td style="text-align:center;">Number</td><td style="text-align:center;">/</td></tr><tr><td style="text-align:center;">page</td><td style="text-align:left;">\u5F53\u524D\u9875\u6570 \xA0 \u652F\u6301 .sync \u4FEE\u9970\u7B26</td><td style="text-align:center;">Number</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">limit</td><td style="text-align:left;">\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26</td><td style="text-align:center;">Number</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">page-sizes</td><td style="text-align:left;">\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td style="text-align:center;">Number []</td><td style="text-align:center;">10, 20, 30, 50]</td></tr><tr><td style="text-align:center;">hidden</td><td style="text-align:left;">\u662F\u5426\u9690\u85CF</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">auto-scroll</td><td style="text-align:left;">\u5206\u9875\u4E4B\u540E\u662F\u5426\u81EA\u52A8\u6EDA\u52A8\u5230\u9876\u90E8</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td></tr></tbody></table>`,5),g=t("\u5176\u5B83 Element \u7684 "),h=n("code",null,"el-pagination",-1),v=t("\u652F\u6301\u7684\u5C5E\u6027\uFF0C\u5B83\u4E5F\u90FD\u652F\u6301\u3002\u8BE6\u60C5\u89C1"),b={href:"http://element.eleme.io/#/zh-CN/component/pagination",target:"_blank",rel:"noopener noreferrer"},y=t("\u6587\u6863"),_=l('<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>pagination</td><td>\u5F53 limit \u6216\u8005 page \u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>{page,limit}</td></tr></tbody></table><h2 id="\u6E90\u7801-demo" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801-demo" aria-hidden="true">#</a> \u6E90\u7801 &amp;&amp; Demo</h2>',3),x={href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Pagination/index.vue",target:"_blank",rel:"noopener noreferrer"},f=t("\u5728\u7EBF\u6E90\u7801"),q={href:"https://panjiachen.github.io/vue-element-admin/#/table/complex-table",target:"_blank",rel:"noopener noreferrer"},N=t("\u5728\u7EBF Demo");function B(P,E){const p=e("Badge"),s=e("ExternalLinkIcon");return i(),c("div",null,[n("h1",d,[u,k,a(p,{text:"v3.9.2+"})]),m,n("p",null,[g,h,v,n("a",b,[y,a(s)])]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",x,[f,a(s)])])]),n("li",null,[n("p",null,[n("a",q,[N,a(s)])])])])])}var L=o(r,[["render",B],["__file","pagination.html.vue"]]);export{L as default};
