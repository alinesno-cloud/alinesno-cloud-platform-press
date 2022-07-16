import{_ as t,o as i,c as l,a as n,e,d as o,b as s,r as c}from"./app.3c431fa4.js";const d={},r=o(`<h1 id="gitbook-\u5B89\u88C5\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#gitbook-\u5B89\u88C5\u6559\u7A0B" aria-hidden="true">#</a> GitBook \u5B89\u88C5\u6559\u7A0B</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><blockquote><p>\u6CE8:\u672C\u6559\u7A0B\u53EA\u4E3A Mac \u5B89\u88C5\u4F7F\u7528 gitbook,\u4E3A\u672C\u5730\u7535\u8111\u4F7F\u7528,Windows \u7248\u672C\u8BF7\u4E0B\u8F7D windows \u7248\u672C node\uFF0Cwindows \u7684\u547D\u4EE4\u7C7B\u4F3C</p></blockquote><ul><li>gitbook \u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6559\u7A0B</li><li>gitbook \u81EA\u5B9A\u4E49\u6837\u5F0F</li></ul><h2 id="\u5B89\u88C5-gitbook" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-gitbook" aria-hidden="true">#</a> \u5B89\u88C5 gitbook</h2><h3 id="\u5B89\u88C5-node" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-node" aria-hidden="true">#</a> \u5B89\u88C5 node</h3><p>\u8F6F\u4EF6\u4ECE\u7F51\u76D8\u4E0B\u8F7D,\u8F6F\u4EF6\u70B9\u51FB\u5B89\u88C5\u5373\u53EF,\u4E00\u8DEF<code>next</code></p><h3 id="\u67E5\u770B-node-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-node-\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B node \u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> -v
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-gitbook-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-gitbook-1" aria-hidden="true">#</a> \u5B89\u88C5 gitbook</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g gitbook  // \u5B89\u88C5gitbook
<span class="token function">npm</span> <span class="token function">install</span> -g gitbook-cli  // \u5B89\u88C5gitbook\u547D\u4EE4\u5DE5\u5177\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528
gitbook -V  //\u67E5\u770Bgitbook\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C-gitbook-\u7535\u5B50\u4E66" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-gitbook-\u7535\u5B50\u4E66" aria-hidden="true">#</a> \u8FD0\u884C gitbook \u7535\u5B50\u4E66</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/Desktop/mybook   // \u5176\u4E2D~\u4EE3\u8868\u5F53\u524D\u7528\u6237\u4E0B
<span class="token builtin class-name">cd</span> ~/Desktop/mybook
gitbook init  //\u521D\u59CB\u5316\u811A\u672C,\u6B64\u547D\u4EE4\u6267\u884C\u5B8C\u6210,\u4F1A\u51FA\u73B0\u4E24\u4E2A\u6587\u4EF6<span class="token punctuation">(</span>README.md/SUMMARY.md<span class="token punctuation">)</span>
gitbook serve  //\u8FD0\u884Cgitbook,\u540C\u65F6\u751F\u6210_book\u6587\u4EF6\u5939,\u6D4F\u89C8\u5668\u8BBF\u95EE\u7684\u5C31\u662F\u8FD9\u4E2A\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=s("\u8BBF\u95EE\u5730\u5740"),u={href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"},b=s("http://localhost:4000"),h=s(",\u67E5\u770B\u7535\u5B50\u4E66"),k=o(`<h3 id="\u81EA\u5B9A\u4E49\u6837\u5F0F\u53CA\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6837\u5F0F\u53CA\u6807\u9898" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6837\u5F0F\u53CA\u6807\u9898</h3><p>\u65B0\u5EFA\u8BAE<code>book.json</code>\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> book.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9,\u9ED8\u8BA4\u7684 gitbook \u6837\u5F0F\u6587\u672C\u5BBD\u5EA6\u592A\u5C0F(max-width:800px),\u8FD9\u91CC\u5B9A\u4E49\u6210<code>980px</code>,\u4FBF\u4E8E\u67E5\u770B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u57FA\u7840\u73AF\u5883\u5B89\u88C5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;978-3-16-148410-0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ltr&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;styles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;website&quot;</span><span class="token operator">:</span> <span class="token string">&quot;styles/website.css&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>styles \u6587\u4EF6\u5939\u4E0E REAME.md \u540C\u7EA7\uFF0C\u5728\u6784\u5EFA\u7684\u65F6\u5019\uFF0Cgitbook \u4F1A\u81EA\u52A8\u52A0\u8F7D\u6784\u5EFA,\u653E\u5728<code>_book</code>\u76EE\u5F55\u6587\u4EF6\u5939\u4E0B\u9762\uFF0C\u91CD\u65B0\u6784\u5EFA\u4F1A\u88AB\u5220\u9664</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.page-inner</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 980px <span class="token important">!important</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,8),v={href:"https://github.com/GitbookIO/gitbook",target:"_blank",rel:"noopener noreferrer"},m=s("GitBook \u5B98\u7F51");function g(_,f){const a=c("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[p,n("a",u,[b,e(a)]),h]),k,n("ul",null,[n("li",null,[n("a",v,[m,e(a)])])])])}var q=t(d,[["render",g],["__file","01_GitBook\u5B89\u88C5.html.vue"]]);export{q as default};
