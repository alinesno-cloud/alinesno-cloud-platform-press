import{_ as a,o as s,c as e,a as t,d,b as o}from"./app.6b256f62.js";const p={},l=d(`<h1 id="excel-\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#excel-\u5BFC\u51FA" aria-hidden="true">#</a> Excel \u5BFC\u51FA</h1><h2 id="\u6CE8\u91CA\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA\u4ECB\u7ECD" aria-hidden="true">#</a> \u6CE8\u91CA\u4ECB\u7ECD</h2><ul><li>@Excel \u4F5C\u7528\u5230 filed \u4E0A\u9762,\u662F\u5BF9 Excel \u4E00\u5217\u7684\u4E00\u4E2A\u63CF\u8FF0</li><li>@ExcelCollection \u8868\u793A\u4E00\u4E2A\u96C6\u5408,\u4E3B\u8981\u9488\u5BF9\u4E00\u5BF9\u591A\u7684\u5BFC\u51FA,\u6BD4\u5982\u4E00\u4E2A\u8001\u5E08\u5BF9\u5E94\u591A\u4E2A\u79D1\u76EE,\u79D1\u76EE\u5C31\u53EF\u4EE5\u7528\u96C6\u5408\u8868\u793A</li><li>@ExcelEntity \u8868\u793A\u4E00\u4E2A\u7EE7\u7EED\u6DF1\u5165\u5BFC\u51FA\u7684\u5B9E\u4F53,\u4F46\u4ED6\u6CA1\u6709\u592A\u591A\u7684\u5B9E\u9645\u610F\u4E49,\u53EA\u662F\u544A\u8BC9\u7CFB\u7EDF\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u540C\u6837\u6709\u5BFC\u51FA\u7684\u5B57\u6BB5</li><li>@ExcelIgnore \u548C\u540D\u5B57\u4E00\u6837\u8868\u793A\u8FD9\u4E2A\u5B57\u6BB5\u88AB\u5FFD\u7565\u8DF3\u8FC7\u8FD9\u4E2A\u5BFC\u5BFC\u51FA</li><li>@ExcelTarget \u8FD9\u4E2A\u662F\u4F5C\u7528\u4E8E\u6700\u5916\u5C42\u7684\u5BF9\u8C61,\u63CF\u8FF0\u8FD9\u4E2A\u5BF9\u8C61\u7684 id,\u4EE5\u4FBF\u652F\u6301\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u5BFC\u51FA\u505A\u51FA\u4E0D\u540C\u5904\u7406</li></ul><h2 id="excel" tabindex="-1"><a class="header-anchor" href="#excel" aria-hidden="true">#</a> @Excel</h2><p>\u8FD9\u4E2A\u662F\u5FC5\u987B\u4F7F\u7528\u7684\u6CE8\u89E3,\u5982\u679C\u9700\u6C42\u7B80\u5355\u53EA\u4F7F\u7528\u8FD9\u4E00\u4E2A\u6CE8\u89E3\u4E5F\u662F\u53EF\u4EE5\u7684,\u6DB5\u76D6\u4E86\u5E38\u7528\u7684 Excel \u9700\u6C42,\u4E3B\u8981\u5206\u4E3A\u57FA\u7840,\u56FE\u7247\u5904\u7406,\u65F6\u95F4\u5904\u7406,\u5408\u5E76\u5904\u7406\u51E0\u5757,name_id \u662F\u4E0A\u9762\u8BB2\u7684 id \u7528\u6CD5\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>null</td><td>\u5217\u540D,\u652F\u6301 name_id</td></tr><tr><td>needMerge</td><td>boolean</td><td>fasle</td><td>\u662F\u5426\u9700\u8981\u7EB5\u5411\u5408\u5E76\u5355\u5143\u683C(\u7528\u4E8E\u542B\u6709 list \u4E2D,\u5355\u4E2A\u7684\u5355\u5143\u683C,\u5408\u5E76 list \u521B\u5EFA\u7684\u591A\u4E2A row)</td></tr><tr><td>orderNum</td><td>String</td><td>&quot;0&quot;</td><td>\u5217\u7684\u6392\u5E8F,\u652F\u6301 name_id</td></tr><tr><td>replace</td><td>String[]</td><td>{}</td><td>\u503C\u5F97\u66FF\u6362 \u5BFC\u51FA\u662F{a_id,b_id} \u5BFC\u5165\u53CD\u8FC7\u6765</td></tr><tr><td>savePath</td><td>String</td><td>&quot;upload&quot;</td><td>\u5BFC\u5165\u6587\u4EF6\u4FDD\u5B58\u8DEF\u5F84,\u5982\u679C\u662F\u56FE\u7247\u53EF\u4EE5\u586B\u5199,\u9ED8\u8BA4\u662F upload/className/ IconEntity \u8FD9\u4E2A\u7C7B\u5BF9\u5E94\u7684\u5C31\u662F upload/Icon/</td></tr><tr><td>type</td><td>int</td><td>1</td><td>\u5BFC\u51FA\u7C7B\u578B 1 \u662F\u6587\u672C 2 \u662F\u56FE\u7247,3 \u662F\u51FD\u6570,10 \u662F\u6570\u5B57 \u9ED8\u8BA4\u662F\u6587\u672C</td></tr><tr><td>width</td><td>double</td><td>10</td><td>\u5217\u5BBD</td></tr><tr><td>height</td><td>double</td><td>10</td><td>\u5217\u9AD8</td></tr><tr><td>isStatistics</td><td>boolean</td><td>fasle</td><td>\u81EA\u52A8\u7EDF\u8BA1\u6570\u636E,\u5728\u8FFD\u52A0\u4E00\u884C\u7EDF\u8BA1,\u628A\u6240\u6709\u6570\u636E\u90FD\u548C\u8F93\u51FA[\u8FD9\u4E2A\u5904\u7406\u4F1A\u541E\u6CA1\u5F02\u5E38,\u8BF7\u6CE8\u610F\u8FD9\u4E00\u70B9]</td></tr><tr><td>isHyperlink</td><td>boolean</td><td>false</td><td>\u8D85\u94FE\u63A5,\u5982\u679C\u662F\u9700\u8981\u5B9E\u73B0\u63A5\u53E3\u8FD4\u56DE\u5BF9\u8C61</td></tr><tr><td>isImportField</td><td>boolean</td><td>true</td><td>\u6821\u9A8C\u5B57\u6BB5,\u770B\u770B\u8FD9\u4E2A\u5B57\u6BB5\u662F\u4E0D\u662F\u5BFC\u5165\u7684 Excel \u4E2D\u6709,\u5982\u679C\u6CA1\u6709\u8BF4\u660E\u662F\u9519\u8BEF\u7684 Excel,\u8BFB\u53D6\u5931\u8D25,\u652F\u6301 name_id</td></tr><tr><td>exportFormat</td><td>String</td><td>&quot;&quot;</td><td>\u5BFC\u51FA\u7684\u65F6\u95F4\u683C\u5F0F,\u4EE5\u8FD9\u4E2A\u662F\u5426\u4E3A\u7A7A\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u683C\u5F0F\u5316\u65E5\u671F</td></tr><tr><td>importFormat</td><td>String</td><td>&quot;&quot;</td><td>\u5BFC\u5165\u7684\u65F6\u95F4\u683C\u5F0F,\u4EE5\u8FD9\u4E2A\u662F\u5426\u4E3A\u7A7A\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u683C\u5F0F\u5316\u65E5\u671F</td></tr><tr><td>format</td><td>String</td><td>&quot;&quot;</td><td>\u65F6\u95F4\u683C\u5F0F,\u76F8\u5F53\u4E8E\u540C\u65F6\u8BBE\u7F6E\u4E86 exportFormat \u548C importFormat</td></tr><tr><td>databaseFormat</td><td>String</td><td>&quot;yyyyMMddHHmmss&quot;</td><td>\u5BFC\u51FA\u65F6\u95F4\u8BBE\u7F6E,\u5982\u679C\u5B57\u6BB5\u662F Date \u7C7B\u578B\u5219\u4E0D\u9700\u8981\u8BBE\u7F6E \u6570\u636E\u5E93\u5982\u679C\u662F string \u7C7B\u578B,\u8FD9\u4E2A\u9700\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u6570\u636E\u5E93\u683C\u5F0F,\u7528\u4EE5\u8F6C\u6362\u65F6\u95F4\u683C\u5F0F\u8F93\u51FA</td></tr><tr><td>numFormat</td><td>String</td><td>&quot;&quot;</td><td>\u6570\u5B57\u683C\u5F0F\u5316,\u53C2\u6570\u662F Pattern,\u4F7F\u7528\u7684\u5BF9\u8C61\u662F DecimalFormat</td></tr><tr><td>imageType</td><td>int</td><td>1</td><td>\u5BFC\u51FA\u7C7B\u578B 1 \u4ECE file \u8BFB\u53D6 2 \u662F\u4ECE\u6570\u636E\u5E93\u4E2D\u8BFB\u53D6 \u9ED8\u8BA4\u662F\u6587\u4EF6 \u540C\u6837\u5BFC\u5165\u4E5F\u662F\u4E00\u6837\u7684</td></tr><tr><td>suffix</td><td>String</td><td>&quot;&quot;</td><td>\u6587\u5B57\u540E\u7F00,\u5982% 90 \u53D8\u6210 90%</td></tr><tr><td>isWrap</td><td>boolean</td><td>true</td><td>\u662F\u5426\u6362\u884C \u5373\u652F\u6301\\n</td></tr><tr><td>mergeRely</td><td>int[]</td><td>{}</td><td>\u5408\u5E76\u5355\u5143\u683C\u4F9D\u8D56\u5173\u7CFB,\u6BD4\u5982\u7B2C\u4E8C\u5217\u5408\u5E76\u662F\u57FA\u4E8E\u7B2C\u4E00\u5217 \u5219{0}\u5C31\u53EF\u4EE5\u4E86</td></tr><tr><td>mergeVertical</td><td>boolean</td><td>fasle</td><td>\u7EB5\u5411\u5408\u5E76\u5185\u5BB9\u76F8\u540C\u7684\u5355\u5143\u683C</td></tr><tr><td>fixedIndex</td><td>int</td><td>-1</td><td>\u5BF9\u5E94 excel \u7684\u5217,\u5FFD\u7565\u540D\u5B57</td></tr><tr><td>isColumnHidden</td><td>boolean</td><td>false</td><td>\u5BFC\u51FA\u9690\u85CF\u5217</td></tr></tbody></table><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><p>\u5BF9\u8C61\u5B9A\u4E49</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentEntity</span>  <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u5B66\u751F\u59D3\u540D
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5B66\u751F\u59D3\u540D&quot;</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span> isImportField <span class="token operator">=</span> <span class="token string">&quot;true_st&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u5B66\u751F\u6027\u522B
     */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5B66\u751F\u6027\u522B&quot;</span><span class="token punctuation">,</span> replace <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;\u7537_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5973_2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> suffix <span class="token operator">=</span> <span class="token string">&quot;\u751F&quot;</span><span class="token punctuation">,</span> isImportField <span class="token operator">=</span> <span class="token string">&quot;true_st&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sex<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u51FA\u751F\u65E5\u671F&quot;</span><span class="token punctuation">,</span> databaseFormat <span class="token operator">=</span> <span class="token string">&quot;yyyyMMddHHmmss&quot;</span><span class="token punctuation">,</span> format <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">,</span> isImportField <span class="token operator">=</span> <span class="token string">&quot;true_st&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u8FDB\u6821\u65E5\u671F&quot;</span><span class="token punctuation">,</span> databaseFormat <span class="token operator">=</span> <span class="token string">&quot;yyyyMMddHHmmss&quot;</span><span class="token punctuation">,</span> format <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> registrationDate<span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6709\u7279\u6B8A\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u5728\u63A7\u5236\u5C42\u91CD\u5199 exportExcel()\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseBean</span> <span class="token function">exportExcel</span><span class="token punctuation">(</span>
    	<span class="token class-name">DatatablesPageBean</span> page <span class="token punctuation">,</span>
    	<span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B</p>`,12),i=["src"],c=t("h2",{id:"\u5176\u5B83",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u5176\u5B83","aria-hidden":"true"},"#"),o(" \u5176\u5B83")],-1),r=t("ul",null,[t("li",null,"\u7565")],-1);function u(n,k){return s(),e("div",null,[l,t("img",{src:n.$withBase("/technique/exportExcel_example.png")},null,8,i),c,r])}var v=a(p,[["render",u],["__file","14_Excel\u5BFC\u51FA.html.vue"]]);export{v as default};
