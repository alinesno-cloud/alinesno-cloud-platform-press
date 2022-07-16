import{_ as e,o as t,c as p,a,e as l,d as o,b as n,r as c}from"./app.5d626836.js";const i={},r=o(`<h1 id="tree-table-\u6811\u5F62\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#tree-table-\u6811\u5F62\u8868\u683C" aria-hidden="true">#</a> Tree Table \u6811\u5F62\u8868\u683C</h1><h2 id="\u5199\u5728\u524D\u9762" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u524D\u9762" aria-hidden="true">#</a> \u5199\u5728\u524D\u9762</h2><p>\u6B64\u7EC4\u4EF6\u4EC5\u63D0\u4F9B\u4E00\u4E2A\u521B\u5EFA <code>TreeTable</code> \u7684\u89E3\u51B3\u601D\u8DEF\u3002\u5B83\u57FA\u4E8E<code>element-ui</code>\u7684 table \u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u901A\u8FC7<code>el-table</code>\u7684<code>row-style</code>\u65B9\u6CD5\uFF0C\u5728\u91CC\u9762\u5224\u65AD\u5143\u7D20\u662F\u5426\u9700\u8981\u9690\u85CF\u6216\u8005\u663E\u793A\uFF0C\u4ECE\u800C\u5B9E\u73B0<code>TreeTable</code>\u7684\u5C55\u5F00\u4E0E\u6536\u8D77\u3002</p><p>\u5E76\u4E14\u672C\u7EC4\u4EF6\u5145\u5206\u5229\u7528 <code>vue</code> \u63D2\u69FD\u7684\u7279\u6027\u6765\u65B9\u4FBF\u7528\u6237\u81EA\u5B9A\u4E49\u3002</p><p><code>evel.js</code> \u91CC\u9762\uFF0C<code>addAttrs</code> \u65B9\u6CD5\u4F1A\u7ED9\u6570\u636E\u6DFB\u52A0\u51E0\u4E2A\u5C5E\u6027\uFF0C<code>treeTotable</code> \u4F1A\u5BF9\u6570\u7EC4\u6241\u5E73\u5316\u3002\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u4E0D\u4F1A\u7834\u574F\u6E90\u6570\u636E\uFF0C\u53EA\u662F\u4F1A\u65B0\u589E\u5C5E\u6027\u3002</p><h2 id="props-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#props-\u8BF4\u660E" aria-hidden="true">#</a> Props \u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th></tr></thead><tbody><tr><td style="text-align:center;">data</td><td style="text-align:left;">\u539F\u59CB\u5C55\u793A\u6570\u636E</td><td style="text-align:center;">Array</td><td style="text-align:center;">[]</td></tr><tr><td style="text-align:center;">columns</td><td style="text-align:left;">\u5217\u5C5E\u6027</td><td style="text-align:center;">Array</td><td style="text-align:center;">[]</td></tr><tr><td style="text-align:center;">defaultExpandAll</td><td style="text-align:left;">\u9ED8\u8BA4\u662F\u5426\u5168\u90E8\u5C55\u5F00</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">defaultChildren</td><td style="text-align:left;">\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td style="text-align:center;">String</td><td style="text-align:center;">children</td></tr><tr><td style="text-align:center;">indent</td><td style="text-align:left;">\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td style="text-align:center;">Number</td><td style="text-align:center;">50</td></tr></tbody></table><blockquote><p>\u4EFB\u4F55 <code>el-table</code> \u7684\u5C5E\u6027\u90FD\u652F\u6301\uFF0C\u4F8B\u5982<code>border</code>\u3001<code>fit</code>\u3001<code>size</code>\u6216\u8005<code>@select</code>\u3001<code>@cell-click</code>\u7B49\u65B9\u6CD5\u3002\u8BE6\u60C5\u5C5E\u6027\u89C1<code>el-table</code>\u6587\u6863\u3002</p></blockquote><hr><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tree-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="data-\u5FC5\u586B" tabindex="-1"><a class="header-anchor" href="#data-\u5FC5\u586B" aria-hidden="true">#</a> data(<strong>\u5FC5\u586B</strong>)</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1-1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1-2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">2</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="columns-\u5FC5\u586B" tabindex="-1"><a class="header-anchor" href="#columns-\u5FC5\u586B" aria-hidden="true">#</a> columns(<strong>\u5FC5\u586B</strong>)</h4><ul><li>label: \u663E\u793A\u5728\u8868\u5934\u7684\u6587\u5B57</li><li>key: \u5BF9\u5E94 data \u7684 key\u3002treeTable \u5C06\u663E\u793A\u76F8\u5E94\u7684 value</li><li>expand: <code>true</code> or <code>false</code>\u3002\u82E5\u4E3A true\uFF0C\u5219\u5728\u8BE5\u5217\u663E\u793A\u5C55\u5F00\u6536\u8D77\u56FE\u6807</li><li>checkbox: <code>true</code> or <code>false</code>\u3002\u82E5\u4E3A true\uFF0C\u5219\u5728\u8BE5\u5217\u663E\u793A<code>checkbox</code></li><li>width: \u6BCF\u5217\u7684\u5BBD\u5EA6\uFF0C\u4E3A\u4E00\u4E2A\u6570\u5B57(\u53EF\u9009)\u3002\u4F8B\u5982<code>200</code></li><li>align: \u5BF9\u9F50\u65B9\u5F0F <code>left/center/right</code></li><li>header-align: \u8868\u5934\u5BF9\u9F50\u65B9\u5F0F <code>left/center/right</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Checkbox&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">checkbox</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Event&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Scope&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;scope&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6811\u8868\u7EC4\u4EF6\u5C06\u4F1A\u6839\u636E columns \u7684 key \u5C5E\u6027\u751F\u6210\u5177\u540D\u63D2\u69FD\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5BF9\u5217\u6570\u636E\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u901A\u8FC7\u63D2\u69FD\u5373\u53EF\u5B9E\u73B0</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>your key<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{scope}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span><span class="token punctuation">&gt;</span></span>level: {{ scope.row._level }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span><span class="token punctuation">&gt;</span></span>expand: {{ scope.row._expand }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span><span class="token punctuation">&gt;</span></span>select: {{ scope.row._select }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>\u76EE\u524D\u63D0\u4F9B\u4E86\u51E0\u4E2A\u65B9\u6CD5\uFF0C\u4E0D\u8FC7\u53EA\u662F<code>beta</code>\u7248\u672C\uFF0C\u4E4B\u540E\u5F88\u53EF\u80FD\u4F1A\u4FEE\u6539\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>TreeTable<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0\u5B50\u5143\u7D20</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>TreeTable<span class="token punctuation">.</span><span class="token function">addBrother</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0\u5144\u5F1F\u5143\u7D20</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>TreeTable<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token comment">//\u5220\u9664\u8BE5\u5143\u7D20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>`,22),d=n("\u5982\u679C\u6709\u5176\u4ED6\u7684\u9700\u6C42\uFF0C\u8BF7\u53C2\u8003"),u={href:"http://element-cn.eleme.io/#/en-US/component/table",target:"_blank",rel:"noopener noreferrer"},k=n("el-table"),v=n("\u7684 api \u81EA\u884C\u4FEE\u6539 index.vue");function b(m,g){const s=c("ExternalLinkIcon");return t(),p("div",null,[r,a("p",null,[d,a("a",u,[k,l(s)]),v])])}var y=e(i,[["render",b],["__file","tree-table.html.vue"]]);export{y as default};
