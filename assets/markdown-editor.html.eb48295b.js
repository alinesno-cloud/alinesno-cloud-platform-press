import{_ as p,o as i,c as l,a as s,e as a,b as n,d as c,r as o}from"./app.abe7257d.js";const r={},d={id:"markdown-\u7F16\u8F91\u5668",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#markdown-\u7F16\u8F91\u5668","aria-hidden":"true"},"#",-1),k=n(" Markdown \u7F16\u8F91\u5668 "),v=n("\u672C\u6765\u4F7F\u7528 "),m={href:"https://github.com/sparksuite/simplemde-markdown-editor",target:"_blank",rel:"noopener noreferrer"},h=n("simplemde-markdown-editor"),g=n(" \u4F5C\u4E3A markdown \u7F16\u8F91\u5668\uFF0C\u4F46\u8FD9\u4E2A\u5E93\u5F88\u4E45\u4E0D\u66F4\u65B0\u548C\u7EF4\u62A4\u4E86\uFF0C\u800C\u4E14\u8FD8\u6709 xss \u98CE\u9669\u3002\u6240\u4EE5\u5728 "),b=n(" \u7248\u672C\u4E4B\u540E\u4F7F\u7528 "),_={href:"https://github.com/nhnent/tui.editor",target:"_blank",rel:"noopener noreferrer"},f=n("tui.editor"),y=n("\u4F5C\u4E3A\u65B0\u7684\u7F16\u8F91\u5668\uFF0C\u63A5\u4E0B\u6765\u6240\u6709\u7684\u6587\u6863\u90FD\u662F\u57FA\u4E8E tui.editor \u5B83\u7684\u3002"),w={href:"https://github.com/nhnent/tui.editor",target:"_blank",rel:"noopener noreferrer"},x=n("\u66F4\u591A\u5185\u5BB9"),S=n("\u3002"),E=c(`<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>String</td><td>&quot; &quot;</td><td>This prop can change content of the editor. <strong>If you using <code>v-model</code>, don&#39;t use it</strong>.</td></tr><tr><td>options</td><td>Object</td><td>following <code>defaultOptions</code></td><td>Options of tui.editor. This is for initailize tui.editor.</td></tr><tr><td>height</td><td>String</td><td>&#39;300px&#39;</td><td>This prop can control the height of the editor.</td></tr><tr><td>mode</td><td>String</td><td>&#39;markdown&#39;</td><td>This prop can change mode of the editor. (<code>markdown</code>or <code>wysiwyg</code>)</td></tr><tr><td>language</td><td>String</td><td>&#39;en_US&#39;</td><td>i18n</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">previewStyle</span><span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useCommandShortcut</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useDefaultHTMLSanitizer</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">usageStatistics</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hideModeSwitch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">toolbarItems</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;heading&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;strike&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divider&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;hr&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;quote&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divider&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ol&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;task&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;indent&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;outdent&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divider&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divider&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;codeblock&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><ul><li>setValue</li><li>getValue</li><li>setHtml</li><li>getHtml</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>markdown-editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MarkdownEditor <span class="token keyword">from</span> <span class="token string">&#39;@/components/MarkdownEditor&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="online-example" tabindex="-1"><a class="header-anchor" href="#online-example" aria-hidden="true">#</a> Online Example</h2>`,8),T={href:"https://panjiachen.github.io/vue-element-admin/#/components/markdown",target:"_blank",rel:"noopener noreferrer"},j=n("link");function q(M,V){const e=o("Badge"),t=o("ExternalLinkIcon");return i(),l("div",null,[s("h1",d,[u,k,a(e,{text:"v3.9.3+"})]),s("p",null,[v,s("a",m,[h,a(t)]),g,a(e,{text:"v3.9.3+"}),b,s("a",_,[f,a(t)]),y,s("a",w,[x,a(t)]),S]),E,s("p",null,[s("a",T,[j,a(t)])])])}var N=p(r,[["render",q],["__file","markdown-editor.html.vue"]]);export{N as default};
