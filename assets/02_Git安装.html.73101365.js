import{_ as n,o as e,c as t,a,e as o,d as i,b as r,r as c}from"./app.0077dad6.js";const l={},p=i(`<h1 id="git-\u5B89\u88C5\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#git-\u5B89\u88C5\u6559\u7A0B" aria-hidden="true">#</a> Git \u5B89\u88C5\u6559\u7A0B</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><blockquote><p>\u6CE8:\u672C\u6559\u7A0B\u53EA\u4E3A Mac \u5B89\u88C5\u4F7F\u7528 git,\u4E3A\u672C\u5730\u7535\u8111\u4F7F\u7528,Windows \u7248\u672C\u8BF7\u4E0B\u8F7D windows \u7248\u672C\uFF0Cwindows \u7684\u547D\u4EE4\u7C7B\u4F3C</p></blockquote><ul><li>git \u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6559\u7A0B</li><li>gitee \u914D\u7F6E\u53CA\u4F7F\u7528</li><li>SourceTree \u5B89\u88C5\u53CA\u4F7F\u7528</li></ul><h2 id="\u5B89\u88C5-git" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-git" aria-hidden="true">#</a> \u5B89\u88C5 Git</h2><h3 id="\u5B89\u88C5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8BF4\u660E" aria-hidden="true">#</a> \u5B89\u88C5\u8BF4\u660E</h3><ul><li>\u65B9\u6CD5\u4E00:\u8F6F\u4EF6\u4ECE\u7F51\u76D8\u4E0B\u8F7D,\u8F6F\u4EF6\u70B9\u51FB\u5B89\u88C5\u5373\u53EF,\u4E00\u8DEF<code>next</code></li><li>\u65B9\u6CD5\u4E8C:\u4F7F\u7528 brew \u5B89\u88C5<code>brew install git</code></li></ul><h3 id="\u751F\u6210-ssh" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-ssh" aria-hidden="true">#</a> \u751F\u6210 SSH</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh-keygen -t rsa  // \u751F\u6210\u4E2A\u4EBA\u5BC6\u94A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u751F\u6210\u7684\u5BC6\u94A5\u4F1A\u5728~/.ssh \u76EE\u5F55\u4E0B\u6709<code>id_rsa.pub</code>,\u8FD9\u4E2A\u662F\u516C\u94A5,\u4E00\u4E0B\u914D\u7F6E gitee \u7684\u65F6\u5019\u9700\u8981\u7528\u5230</p></blockquote><h2 id="gitee-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#gitee-\u7684\u4F7F\u7528" aria-hidden="true">#</a> gitee \u7684\u4F7F\u7528</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528 gitee \u7684\u539F\u56E0\uFF0C\u4E00\u65B9\u9762\u662F\u901F\u5EA6\u4E0A\uFF0C\u53E6\u4E00\u4E2A\u65B9\u9762\u662F\u56FD\u5185\u8F6F\u4EF6\u7684\u652F\u6301\uFF0C\u4E0D\u8FC7\u88C5 B \u683C\u8C03\u786E\u5B9E\u4E0B\u964D\u4E86\u4E0D\u5C11\uFF0C\u5F53\u7136\uFF0C\u4E0D\u60F3\u540C\u65F6\u7EF4\u62A4\u4E24\u4E2A\u8D26\u53F7\uFF0C\u611F\u89C9\u6CA1\u4EC0\u4E48\u5FC5\u8981,\u8FD8\u6709\u4E00\u4E2A\u4E3B\u8981\u7684\u539F\u56E0\u662F\u53EF\u4EE5\u521B\u5EFA\u79C1\u4EBA\u9879\u76EE\uFF0C\u800C\u5728<code>github</code>\u4E0A\u9762\u8C8C\u4F3C\u8981\u4ED8\u8D39\uFF0C\u65E0\u6CD5\u63A5\u53D7:-(</p><blockquote><p>\u4F01\u4E1A\u5185\u90E8\u5EFA\u8BAE\u4F7F\u7528 gitlab</p></blockquote><h3 id="\u914D\u7F6E-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> \u914D\u7F6E ssh \u5BC6\u94A5</h3><ul><li>\u7533\u8BF7\u6CE8\u518C\u8D26\u53F7: http://gitee.com \uFF0C\u6B64\u5904\u4E66\u5230\u7B80\u8A00</li><li><strong>[\u53F3\u4E0A\u89D2\u5934\u50CF]</strong>--&gt; <strong>[\u8BBE\u7F6E]</strong> --&gt; <strong>[SSH \u516C\u94A5]</strong>,\u8FDB\u5165\u5230\u516C\u94A5\u8BBE\u7F6E\u754C\u9762\u6709\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u6B64\u5904\u4E66\u5230\u7B80\u8A00</li></ul><h3 id="\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684-gitbook-\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684-gitbook-\u5DE5\u7A0B" aria-hidden="true">#</a> \u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684 gitbook \u5DE5\u7A0B</h3><ul><li>\u6B64\u5904\u4E66\u5230\u7B80\u8A00</li></ul><h2 id="\u5B89\u88C5-sourcetree" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-sourcetree" aria-hidden="true">#</a> \u5B89\u88C5 SourceTree</h2><blockquote><p>\u6B64\u5F97\u8BF4\u660E\uFF0C\u6B64\u73AF\u5883\u4E3A\u4E2A\u4EBA\u5F00\u53D1\u73AF\u5883\u4F7F\u7528\uFF0C\u56E2\u961F\u8BF7\u652F\u6301\u6B63\u7248\uFF0C\u5F53\u7136\uFF0C\u6211\u80AF\u5B9A\u662F\u6709\u5FC3\u65E0\u529B\u7684 \u{1F603}</p></blockquote><h3 id="\u5B89\u88C5\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8BF4\u660E-1" aria-hidden="true">#</a> \u5B89\u88C5\u8BF4\u660E</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u7248\u672C</th><th>\u7CFB\u7EDF</th><th>\u662F\u5426\u53EF\u7834\u89E3</th></tr></thead><tbody><tr><td>1</td><td>2.7.6</td><td>MacOS</td><td>\u53EF\u4EE5</td></tr><tr><td>2</td><td>1.9.6.1</td><td>Windows10</td><td>\u53EF\u4EE5</td></tr></tbody></table><p><code>\u5176\u5B83\u7248\u672C\u672A\u5B89\u88C5\u8FC7</code></p><h3 id="\u4F18\u96C5\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u5B89\u88C5" aria-hidden="true">#</a> \u4F18\u96C5\u5B89\u88C5</h3><ul><li>\u7B2C\u4E00\u6B21\u5B89\u88C5\u4E0D\u9700\u8981\u5B89\u88C5\u5B8C\u6210,\u5728\u8FDB\u5165\u5230\u9700\u8981\u767B\u9646\u754C\u9762\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u505C\u6B62\u5B89\u88C5\uFF0C\u5173\u95ED\u5373\u53EF,\u7136\u540E\u6309\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C</li><li>\u8FDB\u5165\u7528\u6237\u7A7A\u95F4\u4E0B\u7684\u76EE\u5F55<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/xxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Windows10 \u7684\u76EE\u5F55\u6709\u70B9\u5DEE\u522B,Windows10 \u4E0D\u662F\u9ED8\u8BA4 Administrator \u7528\u6237</p></blockquote></li><li>\u6DFB\u52A0<code>account.json</code>\u6587\u4EF6,\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B:<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;$id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Authenticate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HostInstance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;$id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlassian account&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://id.atlassian.com/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Credentials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;$id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username@email.com&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;IsDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u4FEE\u6539\u4E4B\u540E\uFF0C\u91CD\u65B0\u6253\u5F00\u5373\u53EF\uFF0C\u5B89\u88C5\u7684\u65F6\u5019\uFF0C\u9009\u62E9\u4E2D\u6587(\u5982\u679C\u82F1\u6587\u4E5F\u53EF\u4EE5)</li></ul><h3 id="\u4F7F\u7528-sourcetree" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-sourcetree" aria-hidden="true">#</a> \u4F7F\u7528 SourceTree</h3><h4 id="clone-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#clone-\u9879\u76EE" aria-hidden="true">#</a> Clone \u9879\u76EE</h4><ul><li>\u6253\u5F00 SourceTree\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2<code>\u514B\u9686</code>,\u5C06\u521A\u521A\u7684 gitee \u5EFA\u7ACB\u7684\u5DE5\u7A0B\u590D\u5236\u5230 SourceTree \u7684\u5730\u5740\u4E2D</li><li>\u8FDB\u5165\u5230\u76EE\u5F55 git \u76EE\u5F55\u4E2D\u6267\u884C<code>gitbook</code>\u547D\u4EE4<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitbook init    //\u521D\u59CB\u5316book
gitbook serve   //\u542F\u52A8gitbook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="commit-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#commit-\u9879\u76EE" aria-hidden="true">#</a> Commit \u9879\u76EE</h4><ul><li>\u6DFB\u52A0<code>_book</code>\u5230\u6587\u4EF6<code>.gitignore</code>(\u6CA1\u6709\u5219\u521B\u5EFA),\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u4E0D\u5FC5\u8981\u63D0\u4EA4</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,31),d={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},u=r("GitBook \u5B98\u7F51");function h(k,b){const s=c("ExternalLinkIcon");return e(),t("div",null,[p,a("ul",null,[a("li",null,[a("a",d,[u,o(s)])])])])}var g=n(l,[["render",h],["__file","02_Git\u5B89\u88C5.html.vue"]]);export{g as default};
