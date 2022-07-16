import{_ as s,o as n,c as a,d as e}from"./app.15e6ac31.js";const t={},l=e(`<h2 id="\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h2><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><p>Vue \u524D\u7AEF\u9879\u76EE\u7684\u6240\u6709\u5168\u5C40\u6837\u5F0F\u90FD\u5728 src/styles \u4E0B\u8BBE\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 styles
\u2502   \u251C\u2500\u2500 btn.scss                 # \u6309\u94AE\u6837\u5F0F
\u2502   \u251C\u2500\u2500 element-ui.scss          # \u5168\u5C40\u81EA\u5B9A\u4E49 element-ui \u6837\u5F0F
\u2502   \u251C\u2500\u2500 index.scss               # \u5168\u5C40\u901A\u7528\u6837\u5F0F
\u2502   \u251C\u2500\u2500 mixin.scss               # \u5168\u5C40 mixin
\u2502   \u251C\u2500\u2500 sidebar.scss             # sidebar css
\u2502   \u251C\u2500\u2500 transition.scss          # vue transition \u52A8\u753B
\u2502   \u2514\u2500\u2500 variables.scss           # \u5168\u5C40\u53D8\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u5C40\u6837\u5F0F\u90FD\u5199\u5728 src/styles \u76EE\u5F55\u4E0B\uFF0C\u6BCF\u4E2A\u9875\u9762\u5BF9\u5E94\u7684\u6837\u5F0F\u90FD\u5199\u5728\u81EA\u5DF1\u7684 .vue \u6587\u4EF6\u4E2D\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* global styles */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* local styles */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49-element-ui-\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-element-ui-\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 element-ui \u6837\u5F0F</h2><p>\u7531\u4E8E element-ui \u7684\u6837\u5F0F\u662F\u5728\u5168\u5C40\u5F15\u5165\u7684\uFF0C\u6240\u4EE5\u82E5\u60F3\u5728\u67D0\u4E2A\u9875\u9762\u91CC\u8986\u76D6\u5B83\u7684\u6837\u5F0F\u5C31\u4E0D\u80FD\u52A0 scoped\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u5B83\u7684\u7236\u7EA7\u52A0\u4E00\u4E2A class\uFF0C\u7528\u547D\u540D\u7A7A\u95F4\u5B9E\u73B0\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.article-page</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u547D\u540D\u7A7A\u95F4 */</span>
  <span class="token selector">.el-tag</span> <span class="token punctuation">{</span>
    <span class="token comment">/* element-ui \u5143\u7D20 */</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF1\u5EA6\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u9009\u62E9\u5668" aria-hidden="true">#</a> \u6DF1\u5EA6\u9009\u62E9\u5668</h2><p>\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u4E86 scoped\uFF0C\u800C\u7236\u7EC4\u4EF6\u53C8\u8981\u4FEE\u6539\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>&gt;&gt;&gt;</code> \u6765\u5B9E\u73B0\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.a &gt;&gt;&gt; .b</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u7F16\u8BD1\u6210</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a[data-v-f3f3eg9] .b</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u9884\u5904\u7406 sass\uFF0C\u53EF\u4EE5\u901A\u8FC7 /deep/ \u4EE3\u66FF <code>&gt;&gt;&gt;</code> \u5B9E\u73B0\u60F3\u8981\u7684\u6548\u679C\u3002</p><p>\u8986\u76D6\u67D0\u4E2A\u7279\u5B9A\u9875\u9762 element \u7684 button \u7684\u6837\u5F0F\u793A\u4F8B\u3002</p><h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> PostCSS</h2><p>\u65B0\u7248 vue-cli webpack \u6A21\u677F init \u4E4B\u540E\u6839\u76EE\u5F55\u4E0B\u9ED8\u8BA4\u6709\u4E00\u4E2A postcss.config.js\u3002vue-loader \u7684 postcss \u9ED8\u8BA4\u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\u91CC\u7684\u914D\u7F6E\u9879\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u76F4\u63A5\u6539\u914D\u7F6E\u6587\u4EF6\u5C31\u53EF\u4EE5\u4E86\u3002\u914D\u7F6E\u548C postcss \u662F\u4E00\u6837\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// postcss.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// package.json</span>
<span class="token string-property property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;not ie &lt;= 8&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6240\u8FF0\uFF0Cautoprefixer \u8BFB\u53D6 package.json \u91CC browserslist \u7684\u914D\u7F6E\u53C2\u6570</p><ul><li><p><code>1%\uFF1A\u517C\u5BB9\u5168\u7403\u4F7F\u7528\u7387\u5927\u4E8E1%\u7684\u6D4F\u89C8\u5668</code></p></li><li><p>last 2 versions\uFF1A\u517C\u5BB9\u6BCF\u4E2A\u6D4F\u89C8\u5668\u7684\u6700\u8FD1\u4E24\u4E2A\u7248\u672C</p></li><li><p>not ie &lt;= 8\uFF1A\u4E0D\u517C\u5BB9 ie8 \u53CA\u4EE5\u4E0B</p></li></ul><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><p>Vue \u524D\u7AEF\u9879\u76EE\u6CA1\u6709\u8BBE\u7F6E\u81EA\u52A8\u6CE8\u5165 sass \u7684 mixin \u5230\u5168\u5C40\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u4F7F\u7528\u7684\u5730\u65B9\u624B\u52A8\u5F15\u5165 mixin</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet/scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;src/styles/mixin.scss&quot;</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u9700\u81EA\u52A8\u5C06 mixin \u6CE8\u5165\u5230\u5168\u5C40 \uFF0C\u53EF\u4EE5\u4F7F\u7528 sass-resources-loader\u3002</p>`,25),p=[l];function i(c,o){return n(),a("div",null,p)}var d=s(t,[["render",i],["__file","17_\u6837\u5F0F.html.vue"]]);export{d as default};
