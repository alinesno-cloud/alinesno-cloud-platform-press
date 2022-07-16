import{_ as n,o as s,c as a,d as e}from"./app.2e54ed41.js";const t={},p=e(`<h1 id="\u8DEF\u7531\u548C\u4FA7\u8FB9\u680F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u548C\u4FA7\u8FB9\u680F" aria-hidden="true">#</a> \u8DEF\u7531\u548C\u4FA7\u8FB9\u680F</h1><p>\u8DEF\u7531\u548C\u4FA7\u8FB9\u680F\u662F\u7EC4\u7EC7\u8D77\u4E00\u4E2A\u540E\u53F0\u5E94\u7528\u7684\u5173\u952E\u9AA8\u67B6\u3002</p><p>Vue \u524D\u7AEF\u9879\u76EE\u4FA7\u8FB9\u680F\u548C\u8DEF\u7531\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u53EA\u8981\u5728 src/router/index.js \u914D\u7F6E\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u4FA7\u8FB9\u680F\u5C31\u80FD\u52A8\u6001\u751F\u6210\u3002\u5927\u5927\u51CF\u8F7B\u4E86\u624B\u52A8\u91CD\u590D\u7F16\u8F91\u4FA7\u8FB9\u680F\u7684\u5DE5\u4F5C\u91CF\u3002\u5F53\u7136\u9700\u8981\u5728\u914D\u7F6E\u8DEF\u7531\u7684\u65F6\u5019\u9075\u5FAA\u4E00\u4E9B\u7EA6\u5B9A\u7684\u89C4\u5219\u3002</p><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><p>\u4EE5\u4E0B\u662F Vue \u524D\u7AEF\u9879\u76EE\u914D\u7F6E\u8DEF\u7531\u65F6\u63D0\u4F9B\u7684\u914D\u7F6E\u9879\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F53\u8BBE\u7F6E true \u7684\u65F6\u5019\u8BE5\u8DEF\u7531\u4E0D\u4F1A\u5728\u4FA7\u8FB9\u680F\u51FA\u73B0\uFF0C\u5982 401\uFF0Clogin \u7B49\u9875\u9762\uFF0C\u6216\u8005\u5982\u4E00\u4E9B\u7F16\u8F91\u9875\u9762 /edit/1</span>
<span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// (\u9ED8\u8BA4 false)</span>
<span class="token comment">//\u5F53\u8BBE\u7F6E noRedirect \u7684\u65F6\u5019\u8BE5\u8DEF\u7531\u5728\u9762\u5305\u5C51\u5BFC\u822A\u4E2D\u4E0D\u53EF\u88AB\u70B9\u51FB</span>
<span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;noRedirect&#39;</span>
<span class="token comment">// \u5F53\u4E00\u4E2A\u8DEF\u7531\u7684 children \u58F0\u660E\u7684\u8DEF\u7531\u5927\u4E8E\u4E00\u4E2A\u65F6\uFF0C\u81EA\u52A8\u4F1A\u53D8\u6210\u5D4C\u5957\u7684\u6A21\u5F0F</span>
<span class="token comment">// \u53EA\u6709\u4E00\u4E2A\u65F6\uFF0C\u4F1A\u5C06\u90A3\u4E2A\u5B50\u8DEF\u7531\u5F53\u4F5C\u6839\u8DEF\u7531\u663E\u793A\u5728\u4FA7\u8FB9\u680F</span>
<span class="token comment">// \u82E5\u60F3\u4E0D\u7BA1\u8DEF\u7531\u7684 children \u58F0\u660E\u7684\u4E2A\u6570\u90FD\u663E\u793A\u6839\u8DEF\u7531\uFF0C\u53EF\u4EE5\u8BBE\u7F6E alwaysShow: true\uFF0C\u8FD9\u6837\u5B83\u4F1A\u5FFD\u7565\u4E4B\u524D\u5B9A\u4E49\u7684\u89C4\u5219\uFF0C\u4E00\u76F4\u663E\u793A\u6839\u8DEF\u7531</span>
<span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;router-name&#39;</span> <span class="token comment">// \u8BBE\u5B9A\u8DEF\u7531\u7684\u540D\u5B57\uFF0C\u4E00\u5B9A\u8981\u586B\u5199\uFF0C\u4E0D\u7136\u4F7F\u7528 &lt;keep-alive&gt; \u65F6\u4F1A\u51FA\u73B0\u5404\u79CD\u95EE\u9898</span>
<span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ROLE_ADMIN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ROLE_EDITOR&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u8BBE\u7F6E\u8BE5\u8DEF\u7531\u8FDB\u5165\u7684\u6743\u9650\uFF0C\u652F\u6301\u591A\u4E2A\u6743\u9650\u53E0\u52A0</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span> <span class="token comment">// \u8BBE\u7F6E\u8BE5\u8DEF\u7531\u5728\u4FA7\u8FB9\u680F\u548C\u9762\u5305\u5C51\u4E2D\u5C55\u793A\u7684\u540D\u5B57</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;svg-name&#39;</span> <span class="token comment">// \u8BBE\u7F6E\u8BE5\u8DEF\u7531\u7684\u56FE\u6807\uFF0C\u652F\u6301 svg-class\uFF0C\u4E5F\u652F\u6301 element-ui \u7684 el-icon-x</span>
  <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u4E0D\u4F1A\u88AB &lt;keep-alive&gt; \u7F13\u5B58(\u9ED8\u8BA4 false)</span>
  <span class="token literal-property property">breadcrumb</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//  \u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5219\u4E0D\u4F1A\u5728 breadcrumb \u9762\u5305\u5C51\u4E2D\u663E\u793A(\u9ED8\u8BA4 true)</span>
  <span class="token literal-property property">affix</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u4F1A\u56FA\u5B9A\u5728 tags-view \u4E2D(\u9ED8\u8BA4 false)</span>
  <span class="token comment">// \u5F53\u8DEF\u7531\u8BBE\u7F6E\u4E86\u8BE5\u5C5E\u6027\uFF0C\u5219\u4F1A\u9AD8\u4EAE\u76F8\u5BF9\u5E94\u7684\u4FA7\u8FB9\u680F\u3002\u8FD9\u5728\u67D0\u4E9B\u573A\u666F\u975E\u5E38\u6709\u7528\uFF0C\u4F8B\u5982\u4E00\u7BC7\u6587\u7AE0\u7684\u5217\u8868\u9875\u8DEF\u7531\u4E3A\uFF1A/article/list</span>
  <span class="token comment">// \u70B9\u51FB\u6587\u7AE0\u8FDB\u5165\u6587\u7AE0\u8BE6\u60C5\u9875\uFF0C\u8FD9\u65F6\u5019\u8DEF\u7531\u4E3A /article/1\uFF0C\u82E5\u60F3\u5728\u4FA7\u8FB9\u680F\u9AD8\u4EAE\u6587\u7AE0\u5217\u8868\u7684\u8DEF\u7531\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u8BBE\u7F6E</span>
  <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/article/list&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/permission&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/permission/index&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u91CD\u5B9A\u5411\u5730\u5740\uFF0C\u5728\u9762\u5305\u5C51\u4E2D\u70B9\u51FB\u4F1A\u91CD\u5B9A\u5411\u5230\u7684\u5730\u5740</span>
  <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u5728\u4FA7\u8FB9\u680F</span>
  <span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u76F4\u663E\u793A\u6839\u8DEF\u7531</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ROLE_ADMIN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ROLE_EDITOR&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u5728\u6839\u8DEF\u7531\u8BBE\u7F6E\u6743\u9650\uFF0C\u6240\u6709\u5B50\u8DEF\u7531\u90FD\u7EE7\u627F\u4E86\u8FD9\u4E2A\u6743\u9650</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;permission/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;lock&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u56FE\u6807</span>
      <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ROLE_ADMIN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ROLE_EDITOR&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u4E5F\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A\u5B50\u8DEF\u7531\u8BBE\u7F6E\u81EA\u5DF1\u7684\u6743\u9650</span>
      <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u4E0D\u4F1A\u88AB &lt;keep-alive&gt; \u7F13\u5B58</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2><p>\u8DEF\u7531\u5206\u4E3A\u4E24\u79CD\uFF1AconstantRoutes \u548C asyncRoutes\u3002</p><p>constantRoutes\uFF1A \u4EE3\u8868\u90A3\u4E9B\u4E0D\u9700\u8981\u52A8\u6001\u5224\u65AD\u6743\u9650\u7684\u8DEF\u7531\uFF0C\u5982\u767B\u5F55\u9875\u3001404 \u7B49\u901A\u7528\u9875\u9762\u3002</p><p>asyncRoutes\uFF1A \u4EE3\u8868\u90A3\u4E9B\u9700\u8981\u52A8\u6001\u5224\u65AD\u6743\u9650\u5E76\u901A\u8FC7 addRoutes \u52A8\u6001\u6DFB\u52A0\u7684\u9875\u9762\u3002</p><p>\u6240\u6709\u7684\u8DEF\u7531\u9875\u9762\u90FD\u5DF2\u4F7F\u7528\u8DEF\u7531\u61D2\u52A0\u8F7D\u3002\u5176\u4ED6\u914D\u7F6E\u548C vue-router \u5B98\u65B9\u6CA1\u6709\u533A\u522B\u3002</p><p>404 \u9875\u9762\u4E00\u5B9A\u8981\u6700\u540E\u52A0\u8F7D\uFF0C\u5426\u5219\u540E\u9762\u7684\u6240\u6709\u9875\u9762\u90FD\u4F1A\u88AB\u62E6\u622A\u5230 404\u3002</p><h2 id="\u4FA7\u8FB9\u680F" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u8FB9\u680F" aria-hidden="true">#</a> \u4FA7\u8FB9\u680F</h2><p>\u4FA7\u8FB9\u680F\u4E3B\u8981\u57FA\u4E8E element-ui \u7684 el-menu \u6539\u9020\u3002</p><p>\u4FA7\u8FB9\u680F\u901A\u8FC7\u8BFB\u53D6\u8DEF\u7531\u5E76\u7ED3\u5408\u6743\u9650\u5224\u65AD\u800C\u52A8\u6001\u751F\u6210\uFF0C\u800C\u4E14\u8FD8\u9700\u8981\u652F\u6301\u8DEF\u7531\u65E0\u9650\u5D4C\u5957\uFF0C\u6240\u4EE5\u8FD8\u4F7F\u7528\u5230\u4E86\u9012\u5F52\u7EC4\u4EF6\uFF0C\u4EE3\u7801\u5728 src/layout/components/Sidebar\u3002</p><p>\u6539\u9020\u4E86 element-ui \u9ED8\u8BA4\u4FA7\u8FB9\u680F\u4E0D\u5C11\u7684\u6837\u5F0F\uFF0C\u6240\u6709\u7684 css \u90FD\u53EF\u4EE5\u5728 src/styles/sidebar.scss \u627E\u5230\uFF0C\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\u3002</p><h2 id="unique-opened" tabindex="-1"><a class="header-anchor" href="#unique-opened" aria-hidden="true">#</a> unique-opened</h2><p>\u53EF\u4EE5\u5728 src/layout/components/Sidebar/index.vue \u4E2D\u8BBE\u7F6E unique-opened \u63A7\u5236\u4FA7\u8FB9\u680F\u662F\u5426\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00\u3002</p><h2 id="\u591A\u7EA7\u76EE\u5F55-\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u76EE\u5F55-\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u591A\u7EA7\u76EE\u5F55(\u5D4C\u5957\u8DEF\u7531)</h2><p>\u5982\u679C\u8DEF\u7531\u662F\u591A\u7EA7\u76EE\u5F55\uFF0C\u4F8B\u5982\u672C\u9879\u76EE src/views/nested \u6709\u4E09\u7EA7\u8DEF\u7531\u5D4C\u5957\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u8981\u5FD8\u8BB0\u8FD8\u8981\u624B\u52A8\u5728\u4E8C\u7EA7\u76EE\u5F55\u7684\u6839\u6587\u4EF6\u4E0B\u6DFB\u52A0\u4E00\u4E2A <code>&lt;router-view&gt;</code>\uFF0C\u6709\u591A\u5C11\u7EA7\u8DEF\u7531\u5D4C\u5957\u5C31\u9700\u8981\u591A\u5C11\u4E2A <code>&lt;router-view&gt;</code>\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u7236\u7EA7\u8DEF\u7531\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- xxx html \u5185\u5BB9  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u70B9\u51FB\u4FA7\u8FB9\u680F-\u5237\u65B0\u5F53\u524D\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u4FA7\u8FB9\u680F-\u5237\u65B0\u5F53\u524D\u8DEF\u7531" aria-hidden="true">#</a> \u70B9\u51FB\u4FA7\u8FB9\u680F \u5237\u65B0\u5F53\u524D\u8DEF\u7531</h2><p>\u5728\u7528 SPA(\u5355\u9875\u9762\u5E94\u7528) \u5F00\u53D1\u6A21\u5F0F\u4E4B\u524D\uFF0C\u7528\u6237\u6BCF\u6B21\u70B9\u51FB\u4FA7\u8FB9\u680F\u90FD\u4F1A\u91CD\u65B0\u8BF7\u6C42\u8FD9\u4E2A\u9875\u9762\uFF0C\u6E10\u6E10\u517B\u6210\u4E86\u70B9\u51FB\u4FA7\u8FB9\u680F\u5F53\u524D\u8DEF\u7531\u6765\u5237\u65B0 view \u7684\u4E60\u60EF\u3002\u4F46\u73B0\u5728 SPA \u5DF2\u4E0D\u4E00\u6837\uFF0C\u7528\u6237\u70B9\u51FB\u5F53\u524D\u9AD8\u4EAE\u7684\u8DEF\u7531\u5E76\u4E0D\u4F1A\u5237\u65B0 view\uFF0C\u56E0\u4E3A vue-router \u4F1A\u62E6\u622A\u8FD9\u4E2A\u8DEF\u7531\uFF1B\u5B83\u4F1A\u5224\u65AD url \u82E5\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\uFF0C\u5C31\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u94A9\u5B50\u6216\u8005\u662F view \u7684\u53D8\u5316\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0D\u65AD\u6539\u53D8 url \u7684 query \u6765\u89E6\u53D1 view \u7684\u53D8\u5316\u3002\u76D1\u542C\u4FA7\u8FB9\u680F\u6BCF\u4E2A link \u7684 click \u4E8B\u4EF6\uFF0C\u6BCF\u6B21\u70B9\u51FB\u90FD\u7ED9 router push \u4E00\u4E2A\u4E0D\u4E00\u6837\u7684 query \u6765\u786E\u4FDD\u91CD\u65B0\u5237\u65B0 view\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">clickLink</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    path<span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">t</span><span class="token operator">:</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4FDD\u8BC1\u6BCF\u6B21\u70B9\u51FB\u8DEF\u7531\u7684 query \u9879\u90FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u786E\u4FDD\u91CD\u65B0\u5237\u65B0 view</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8981\u5FD8\u4E86\u5728 router-view \u52A0\u4E0A\u4E00\u4E2A\u7279\u5B9A\u552F\u4E00\u7684 key\uFF0C\u5982 <code>&lt;router-view :key=&quot;$route.path&quot;&gt;&lt;/router-view&gt;</code></p><h2 id="\u9762\u5305\u5C51" tabindex="-1"><a class="header-anchor" href="#\u9762\u5305\u5C51" aria-hidden="true">#</a> \u9762\u5305\u5C51</h2><p>Vue \u524D\u7AEF\u9879\u76EE\u4E5F\u5C01\u88C5\u4E86\u4E00\u4E2A\u9762\u5305\u5C51\u5BFC\u822A\uFF0C\u901A\u8FC7 watch $route \u53D8\u5316\u52A8\u6001\u751F\u6210\u3002\u5B83\u548C menu \u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E4B\u524D\u90A3\u4E9B\u914D\u7F6E\u9879\u63A7\u5236\u4E00\u4E9B\u8DEF\u7531\u5728\u9762\u5305\u5C51\u4E2D\u7684\u5C55\u73B0\u3002\u4F8B\u5982\u53EF\u4EE5\u5728\u8DEF\u7531\u4E2D\u58F0\u660E breadcrumb:false \u8BA9\u5176\u4E0D\u5728 breadcrumb \u9762\u5305\u5C51\u663E\u793A\u3002</p><p>\u4EE3\u7801\u5728 src/components/Breadcrumb\u3002</p><h2 id="\u4FA7\u8FB9\u680F\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u8FB9\u680F\u6EDA\u52A8" aria-hidden="true">#</a> \u4FA7\u8FB9\u680F\u6EDA\u52A8</h2><p>Vue \u524D\u7AEF\u9879\u76EE\u4F7F\u7528 el-scrollbar \u5904\u7406\u4FA7\u8FB9\u680F\u6EDA\u52A8\uFF0C\u4EE3\u7801\u5728 src/layout/components/Sidebar\u3002</p><h2 id="\u4FA7\u8FB9\u680F\u5916\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u8FB9\u680F\u5916\u94FE" aria-hidden="true">#</a> \u4FA7\u8FB9\u680F\u5916\u94FE</h2><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u4FA7\u8FB9\u680F\u914D\u7F6E\u4E00\u4E2A\u5916\u94FE\uFF0C\u53EA\u8981\u5728 path \u4E2D\u586B\u5199\u5408\u6CD5\u7684 url \u8DEF\u5F84\uFF0C\u5F53\u70B9\u51FB\u4FA7\u8FB9\u680F\u7684\u65F6\u5019\u5C31\u4F1A\u65B0\u5F00\u4E00\u4E2A\u9875\u9762\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external-link&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;component&quot;</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;externalLink&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FA7\u8FB9\u680F\u9ED8\u8BA4\u5C55\u5F00" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u8FB9\u680F\u9ED8\u8BA4\u5C55\u5F00" aria-hidden="true">#</a> \u4FA7\u8FB9\u680F\u9ED8\u8BA4\u5C55\u5F00</h2><p>\u82E5\u9700\u8981\u9ED8\u8BA4\u5C55\u5F00\u4FA7\u8FB9\u680F\u7684\u67D0\u4E9B sub-menu\uFF0C\u53EF\u4EE5\u901A\u8FC7 default-openeds \u6765\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4EE3\u7801\u5728 src/layout/components/Sidebar/index.vue\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;el-menu
  :default-openeds=&quot;[&#39;/example&#39;,&#39;/nested&#39;]&quot; // \u6DFB\u52A0\u672C\u884C\u4EE3\u7801
  :default-active=&quot;activeMenu&quot;
  :collapse=&quot;isCollapse&quot;
  :background-color=&quot;variables.menuBg&quot;
  :text-color=&quot;variables.menuText&quot;
  :unique-opened=&quot;false&quot;
  :active-text-color=&quot;variables.menuActiveText&quot;
  :collapse-transition=&quot;false&quot;
  mode=&quot;vertical&quot;
&gt;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sidebar-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route in permission_routes<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route.path<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:base-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route.path<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[p];function l(r,c){return s(),a("div",null,o)}var u=n(t,[["render",l],["__file","14_\u8DEF\u7531\u548C\u5BFC\u822A\u680F.html.vue"]]);export{u as default};
