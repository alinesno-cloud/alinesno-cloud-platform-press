import{_ as s,o as n,c as a,d as e}from"./app.14f410dc.js";const t={},p=e(`<h1 id="\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> \u8BF7\u6C42\u6D41\u7A0B</h1><h3 id="\u4EA4\u4E92\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u4E92\u6D41\u7A0B" aria-hidden="true">#</a> \u4EA4\u4E92\u6D41\u7A0B</h3><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u524D\u7AEF UI \u4EA4\u4E92\u5230\u670D\u52A1\u7AEF\u5904\u7406\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><ol><li>UI \u7EC4\u4EF6\u4EA4\u4E92\u64CD\u4F5C\uFF1B</li><li>\u8C03\u7528\u7EDF\u4E00\u7BA1\u7406\u7684 api service \u8BF7\u6C42\u51FD\u6570\uFF1B</li><li>\u4F7F\u7528\u5C01\u88C5\u7684 request.js \u53D1\u9001\u8BF7\u6C42\uFF1B</li><li>\u83B7\u53D6\u670D\u52A1\u7AEF\u8FD4\u56DE\uFF1B</li><li>\u66F4\u65B0 data\uFF1B</li></ol><p>\u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\u7EF4\u62A4\uFF0C\u7EDF\u4E00\u7684\u8BF7\u6C42\u5904\u7406\u90FD\u653E\u5728 <code>@/src/api</code> \u6587\u4EF6\u5939\u4E2D\uFF0C\u5E76\u4E14\u4E00\u822C\u6309\u7167 model \u7EAC\u5EA6\u8FDB\u884C\u62C6\u5206\u6587\u4EF6\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>api/
  system/
    user.js
    role.js
  monitor/
    operlog.js
	logininfor.js
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5176\u4E2D\uFF0C@/src/utils/request.js \u662F\u57FA\u4E8E axios \u7684\u5C01\u88C5\uFF0C\u4FBF\u4E8E\u7EDF\u4E00\u5904\u7406 POST\uFF0CGET \u7B49\u8BF7\u6C42\u53C2\u6570\uFF0C\u8BF7\u6C42\u5934\uFF0C\u4EE5\u53CA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7B49\u3002 \u5B83\u5C01\u88C5\u4E86\u5168\u5C40 request \u62E6\u622A\u5668\u3001response \u62E6\u622A\u5668\u3001\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u3001\u7EDF\u4E00\u505A\u4E86\u8D85\u65F6\u5904\u7406\u3001baseURL \u8BBE\u7F6E\u7B49\u3002</p></div><h3 id="\u8BF7\u6C42\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u793A\u4F8B" aria-hidden="true">#</a> \u8BF7\u6C42\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// api/system/user.js</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token comment">// \u67E5\u8BE2\u7528\u6237\u5217\u8868</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">listUser</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/system/user/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> query
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// views/system/user/index.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> listUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/system/user&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userList</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">listUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userList <span class="token operator">=</span> response<span class="token punctuation">.</span>rows
        <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u6709\u4E0D\u540C\u7684<code>baseURL</code>\uFF0C\u76F4\u63A5\u901A\u8FC7\u8986\u76D6\u7684\u65B9\u5F0F\uFF0C\u8BA9\u5B83\u5177\u6709\u4E0D\u540C\u7684<code>baseURL</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">listUser</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/system/user/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> query<span class="token punctuation">,</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_API</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,10),o=[p];function i(l,c){return n(),a("div",null,o)}var u=s(t,[["render",i],["__file","02_\u8BF7\u6C42\u6D41\u7A0B.html.vue"]]);export{u as default};
