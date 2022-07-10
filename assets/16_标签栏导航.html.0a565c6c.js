import{_ as n,o as a,c as s,d as t}from"./app.477a6555.js";const e={},p=t(`<h1 id="\u6807\u7B7E\u680F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u680F\u5BFC\u822A" aria-hidden="true">#</a> \u6807\u7B7E\u680F\u5BFC\u822A</h1><p>\u76EE\u524D\u65B9\u6848\u5927\u81F4\u4E3A\uFF1A \u8FD0\u7528 keep-alive \u548C router-view \u7684\u7ED3\u5408\u3002\u4EE3\u7801\u5728 src/layout/components/AppMain.vue\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">:include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cachedViews<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9876\u90E8\u6807\u7B7E\u680F\u5BFC\u822A\u5B9E\u9645\u4F5C\u7528\u76F8\u5F53\u4E8E nav \u7684\u53E6\u4E00\u79CD\u5C55\u73B0\u5F62\u5F0F\uFF0C\u90FD\u662F\u4E00\u4E2A\u4E2A router-link\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u5230\u76F8\u5E94\u7684\u9875\u9762\u3002\u7136\u540E\u6211\u4EEC\u901A\u8FC7\u76D1\u542C\u8DEF\u7531 $route \u7684\u53D8\u5316\uFF0C\u6765\u5224\u65AD\u5F53\u524D\u9875\u9762\u662F\u5426\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u6216\u8005\u5DF2\u88AB\u7F13\u5B58\u3002</p><h2 id="visitedviews-cachedviews" tabindex="-1"><a class="header-anchor" href="#visitedviews-cachedviews" aria-hidden="true">#</a> visitedViews &amp;&amp; cachedViews</h2><p>\u76EE\u524D tags-view \u7EF4\u62A4\u4E86\u4E24\u4E2A\u6570\u7EC4\u3002</p><ul><li>visitedViews: \u7528\u6237\u8BBF\u95EE\u8FC7\u7684\u9875\u9762\uFF0C\u662F\u6807\u7B7E\u680F\u5BFC\u822A\u663E\u793A\u7684\u4E00\u4E2A\u4E2A tag \u6570\u7EC4\u96C6\u5408\u3002</li><li>cachedViews: \u5B9E\u9645 keep-alive \u7684\u8DEF\u7531\u3002\u53EF\u4EE5\u5728\u914D\u7F6E\u8DEF\u7531\u7684\u65F6\u5019\u901A\u8FC7 meta.noCache \u8BBE\u7F6E\u662F\u5426\u7F13\u5B58\u8FD9\u4E2A\u8DEF\u7531\uFF0C\u9ED8\u8BA4\u90FD\u7F13\u5B58\u3002</li></ul><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>keep-alive \u548C router-view \u662F\u5F3A\u8026\u5408\u7684\uFF0C\u800C\u4E14 keep-alive \u7684 include \u9ED8\u8BA4\u4F18\u5148\u5339\u914D\u7EC4\u4EF6\u7684 name\uFF0C\u6211\u4EEC\u5728\u7F16\u5199\u8DEF\u7531 router \u548C\u8DEF\u7531\u5BF9\u5E94\u7684 view component \u7684\u65F6\u5019\u8981\u786E\u4FDD\u4E24\u8005\u7684 name \u662F\u5B8C\u5168\u4E00\u81F4\u7684\u3002name \u547D\u540D\u5C3D\u91CF\u4FDD\u8BC1\u552F\u4E00\u6027\uFF0C\u4E0D\u8981\u548C\u67D0\u4E9B\u7EC4\u4EF6\u7684\u547D\u540D\u91CD\u590D\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u9012\u5F52\u5F15\u7528\u5185\u5B58\u6EA2\u51FA\u7B49\u95EE\u9898\u3002\u5982\u679C\u4E0D\u5199 name \u5C31\u4E0D\u4F1A\u88AB\u7F13\u5B58\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router \u8DEF\u7531\u58F0\u660E</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create-form&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/form/create&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;createForm&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;createForm&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;table&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8DEF\u7531\u5BF9\u5E94\u7684 view</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;createForm&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F13\u5B58\u4E0D\u9002\u5408\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u4E0D\u9002\u5408\u573A\u666F" aria-hidden="true">#</a> \u7F13\u5B58\u4E0D\u9002\u5408\u573A\u666F</h2><p>\u76EE\u524D\u7F13\u5B58\u7684\u65B9\u6848\u5BF9\u4E8E\u67D0\u4E9B\u4E1A\u52A1\u662F\u4E0D\u9002\u5408\u7684\uFF0C\u4F8B\u5982\u6587\u7AE0\u8BE6\u60C5\u9875 /article/1 /article/2\uFF0C\u5B83\u4EEC\u7684\u8DEF\u7531\u4E0D\u540C\u4F46\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5374\u662F\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\u5B83\u4EEC\u7684\u7EC4\u4EF6 name \u5C31\u662F\u4E00\u6837\u7684\uFF0C\u800C keep-alive \u7684 include \u53EA\u80FD\u6839\u636E\u7EC4\u4EF6\u540D\u8FDB\u884C\u7F13\u5B58\uFF0C\u6240\u4EE5\u5C31\u6709\u95EE\u9898\u3002\u76EE\u524D\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li>\u4E0D\u4F7F\u7528 keep-alive \u7684 include \u529F\u80FD\uFF0C\u76F4\u63A5\u7528 keep-alive \u7F13\u5B58\u6240\u6709\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u5C31\u652F\u6301\u6B64\u4E1A\u52A1\u60C5\u51B5\u3002 \u5728 src/layout/components/AppMain.vue \u79FB\u9664 include \u76F8\u5173\u4EE3\u7801\u5373\u53EF\u3002\u76F4\u63A5\u4F7F\u7528 keep-alive \u4E5F\u6709\u5F0A\u7AEF\uFF0C\u5B83\u4E0D\u80FD\u52A8\u6001\u5730\u5220\u9664\u7F13\u5B58\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u7F13\u5B58\u5B9E\u4F8B\u7684\u4E2A\u6570 limit\u3002</li><li>\u4F7F\u7528 localStorage \u7B49\u6D4F\u89C8\u5668\u7F13\u5B58\u65B9\u6848\u8FDB\u884C\u7F13\u5B58\u5904\u7406\u3002</li></ul><h2 id="affix-\u56FA\u9489" tabindex="-1"><a class="header-anchor" href="#affix-\u56FA\u9489" aria-hidden="true">#</a> Affix \u56FA\u9489</h2><p>\u5F53\u58F0\u660E\u8DEF\u7531\u6DFB\u52A0\u4E86 Affix \u5C5E\u6027\uFF0C\u5F53\u524D tag \u88AB\u56FA\u5B9A\u5728 tags-view \u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/workbench&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-s-home&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/home/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;workbench&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">affix</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h2><p>\u5982\u679C\u6CA1\u6709\u6807\u7B7E\u5BFC\u822A\u680F\u9700\u6C42\uFF0C\u53EF\u4EE5\u79FB\u9664\u6B64\u529F\u80FD\u3002\u9996\u5148\u627E\u5230 src/layout/components/AppMain.vue \u79FB\u9664 keep-alive</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-main<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-height</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-transform<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u79FB\u9664\u6574\u4E2A src/layout/components/TagsView \u6587\u4EF6\u5939\uFF0C\u5E76\u5728 src/layout/components/index.js \u548C src/layout/index.vue \u79FB\u9664\u76F8\u5E94\u7684\u4F9D\u8D56\uFF0C\u6700\u540E\u628A src/store/modules/tagsView.js \u5220\u9664\u5373\u53EF\u3002</p>`,21),o=[p];function l(c,i){return a(),s("div",null,o)}var u=n(e,[["render",l],["__file","16_\u6807\u7B7E\u680F\u5BFC\u822A.html.vue"]]);export{u as default};
