import{_ as e,o as t,c as p,a as n,e as c,b as s,d as o,r as l}from"./app.2d69870c.js";const i={},r=n("h1",{id:"clipboard",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#clipboard","aria-hidden":"true"},"#"),s(" Clipboard")],-1),u=s("\u8FD9\u91CC\u7684\u590D\u5236\u7C98\u8D34\u4F7F\u7528\u4E86 "),d={href:"https://github.com/zenorocha/clipboard.js",target:"_blank",rel:"noopener noreferrer"},k=s("clipboard"),v=o(`<p>\u672C\u9879\u76EE\u63D0\u4F9B\u4E86\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F</p><h2 id="\u76F4\u63A5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4F7F\u7528" aria-hidden="true">#</a> \u76F4\u63A5\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>handleCopy(inputData,$event)<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>copy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> clip <span class="token keyword">from</span> <span class="token string">&#39;@/utils/clipboard&#39;</span> <span class="token comment">// use clipboard directly</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">handleCopy</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clip</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u5F15\u5165\u5C01\u88C5\u597D\u7684 <code>clipboard</code> ,\u8BBE\u7F6E <code>click</code> function\u3002</p><p><code>clip()</code> \u51FD\u6570\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u590D\u5236\u7684\u5185\u5BB9\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A <code>event</code> \u4E8B\u4EF6\u3002\u4E24\u4E2A\u53C2\u6570\u5747\u4E3A\u5FC5\u586B\u9879\u3002</p><br><br><h2 id="\u6307\u4EE4\u5F62\u5F0F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u5F62\u5F0F\u4F7F\u7528" aria-hidden="true">#</a> \u6307\u4EE4\u5F62\u5F0F\u4F7F\u7528</h2><p>\u672C\u9879\u76EE\u540C\u65F6\u4E5F\u5C01\u88C5\u4E86\u4E00\u4E2A\u901A\u8FC7 <code>directives</code> \u7684\u65B9\u5F0F\u6765\u4F7F\u7528 <code>clipboard</code>\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name"><span class="token namespace">v-clipboard:</span>copy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>inputData<span class="token punctuation">&#39;</span></span> <span class="token attr-name"><span class="token namespace">v-clipboard:</span>success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>clipboardSuccess<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>copy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> clipboard <span class="token keyword">from</span> <span class="token string">&#39;@/directive/clipboard/index.js&#39;</span> <span class="token comment">// use clipboard by v-directive</span>

<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  clipboard
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">clipboardSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u590D\u5236\u6210\u529F&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>v-clipboard:copy</code> \u4E3A\u590D\u5236\u7684\u5185\u5BB9\uFF0C<code>v-clipboard:success</code> \u4E3A\u6210\u529F\u4E4B\u540E\u7684\u56DE\u8C03\u3002</p>`,13);function m(b,h){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[u,n("a",d,[k,c(a)])]),v])}var y=e(i,[["render",m],["__file","clipboard.html.vue"]]);export{y as default};
