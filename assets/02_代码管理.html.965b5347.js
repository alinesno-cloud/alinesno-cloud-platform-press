import{_ as e,o as p,c as l,a as n,d as a,b as t}from"./app.ff0a0a0e.js";const i={},o=a('<h1 id="\u4EE3\u7801\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7BA1\u7406" aria-hidden="true">#</a> \u4EE3\u7801\u7BA1\u7406</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6B64\u5904\u4EE3\u7801\u7BA1\u7406\u4E3B\u8981\u4F7F\u7528 gitflow \u6A21\u578B\u8FDB\u884C\u7EDF\u4E00\u4EE3\u7801\u7BA1\u7406\u3002</p><h2 id="gitflow-\u5F00\u53D1\u6A21\u578B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#gitflow-\u5F00\u53D1\u6A21\u578B\u4ECB\u7ECD" aria-hidden="true">#</a> GitFlow \u5F00\u53D1\u6A21\u578B\u4ECB\u7ECD</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>Git Flow \u5B9A\u4E49\u4E86\u4E00\u4E2A\u9879\u76EE\u53D1\u5E03\u7684\u5206\u652F\u6A21\u578B\uFF0C\u4E3A\u7BA1\u7406\u5177\u6709\u9884\u5B9A\u53D1\u5E03\u5468\u671F\u7684\u5927\u578B\u9879\u76EE\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5065\u58EE\u7684\u6846\u67B6\u3002</p><h3 id="\u6D41\u7A0B\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u89E3\u6790" aria-hidden="true">#</a> \u6D41\u7A0B\u89E3\u6790</h3><ul><li><p>master \u5206\u652F\u5B58\u653E\u6240\u6709\u6B63\u5F0F\u53D1\u5E03\u7684\u7248\u672C\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u9879\u76EE\u5386\u53F2\u7248\u672C\u8BB0\u5F55\u5206\u652F\uFF0C\u4E0D\u76F4\u63A5\u63D0\u4EA4\u4EE3\u7801\u3002\u4EC5\u7528\u4E8E\u4FDD\u6301\u4E00\u4E2A\u5BF9\u5E94\u7EBF\u4E0A\u8FD0\u884C\u4EE3\u7801\u7684 code base\u3002</p></li><li><p>develop \u5206\u652F\u4E3A\u4E3B\u5F00\u53D1\u5206\u652F\uFF0C\u4E00\u822C\u4E0D\u76F4\u63A5\u63D0\u4EA4\u4EE3\u7801</p></li><li><p>feature \u5206\u652F\u4E3A\u65B0\u529F\u80FD\u5206\u652F\uFF0Cfeature \u5206\u652F\u90FD\u662F\u57FA\u4E8E develop \u521B\u5EFA\u7684\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\u4F1A\u5408\u5E76\u5230 develop \u5206\u652F\u4E0A\u3002\u540C\u65F6\u5B58\u5728\u591A\u4E2A</p></li><li><p>release \u5206\u652F\u57FA\u4E8E\u6700\u65B0 develop \u5206\u652F\u521B\u5EFA\uFF0C\u5F53\u65B0\u529F\u80FD\u8DB3\u591F\u53D1\u5E03\u4E00\u4E2A\u65B0\u7248\u672C(\u6216\u8005\u63A5\u8FD1\u65B0\u7248\u672C\u53D1\u5E03\u7684\u622A\u6B62\u65E5\u671F)\uFF0C \u4ECE develop \u5206\u652F\u521B\u5EFA\u4E00\u4E2A release \u5206\u652F\u4F5C\u4E3A\u65B0\u7248\u672C\u7684\u8D77\u70B9\uFF0C\u7528\u4E8E\u6D4B\u8BD5\uFF0C\u6240\u6709\u7684\u6D4B\u8BD5 bug \u5728\u8FD9\u4E2A\u5206\u652F\u6539\u3002\u6D4B\u8BD5\u5B8C\u6210\u540E\u5408\u5E76\u5230 master \u5E76\u6253\u4E0A\u7248\u672C\u53F7\uFF0C \u540C\u65F6\u4E5F\u5408\u5E76\u5230 develop\uFF0C\u66F4\u65B0\u6700\u65B0\u5F00\u53D1\u5206\u652F\u3002(\u4E00\u65E6\u6253\u4E86 release \u5206\u652F\u4E4B\u540E\u4E0D\u8981\u4ECE develop \u5206\u652F\u4E0A\u5408\u5E76\u65B0\u7684\u6539\u52A8\u5230 release \u5206\u652F)\uFF0C \u540C\u4E00\u65F6\u95F4\u53EA\u6709 1 \u4E2A\uFF0C\u751F\u547D\u5468\u671F\u5F88\u77ED\uFF0C\u53EA\u662F\u4E3A\u4E86\u53D1\u5E03\u3002</p></li><li><p>hotfix \u5206\u652F\u57FA\u4E8E master \u5206\u652F\u521B\u5EFA\uFF0C\u5BF9\u7EBF\u4E0A\u7248\u672C\u7684 bug \u8FDB\u884C\u4FEE\u590D\uFF0C\u5B8C\u6210\u540E\u76F4\u63A5\u5408\u5E76\u5230 master \u5206\u652F\u548C develop \u5206\u652F\uFF0C</p></li><li><p>\u5982\u679C\u5F53\u524D\u8FD8\u6709\u65B0\u529F\u80FD release \u5206\u652F\uFF0C\u4E5F\u540C\u6B65\u5230 release \u5206\u652F\u4E0A\u3002\u540C\u4E00\u65F6\u95F4\u53EA\u6709 1 \u4E2A\uFF0C\u751F\u547D\u5468\u671F\u8F83\u77ED</p></li></ul>',8),c=["src"],u=n("p",null,"\u5206\u652F\u4ECB\u7ECD",-1),r=["src"],d=a(`<h3 id="\u6D41\u7A0B\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u4ECB\u7ECD" aria-hidden="true">#</a> \u6D41\u7A0B\u4ECB\u7ECD</h3><p>\u7B2C\u4E00\u6B65\u4E3A master \u5206\u652F\u914D\u5957\u4E00\u4E2A develop \u5206\u652F\u3002\u7B80\u5355\u6765\u505A\u53EF\u4EE5\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 develop \u5206\u652F\uFF0Cpush \u5230\u670D\u52A1\u5668\u4E0A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch \u2013b develop
<span class="token function">git</span> push -u origin develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u540E\u8FD9\u4E2A\u5206\u652F\u5C06\u4F1A\u5305\u542B\u4E86\u9879\u76EE\u7684\u5168\u90E8\u5386\u53F2\uFF0C\u800C master \u5206\u652F\u5C06\u53EA\u5305\u542B\u4E86\u90E8\u5206\u5386\u53F2\u3002\u5176\u5B83\u5F00\u53D1\u8005\u8FD9\u65F6\u5E94\u8BE5\u514B\u9686\u4E2D\u592E\u4ED3\u5E93\uFF0C\u5EFA\u597D develop \u5206\u652F\u7684\u8DDF\u8E2A\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone ssh://user@host/path/to/repo.git
<span class="token function">git</span> checkout -b develop origin/develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6BCF\u4E2A\u5F00\u53D1\u90FD\u6709\u4E86\u8FD9\u4E9B\u5386\u53F2\u5206\u652F\u7684\u672C\u5730\u62F7\u8D1D\u3002\u4ECE develop \u5206\u652F\u62C9\u4E00\u4E2A\u7279\u6027\u5206\u652F\u8FDB\u884C\u5F00\u53D1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b some-feature develop
<span class="token function">git</span> push<span class="token punctuation">(</span>\u5982\u679C\u8FD9\u4E2A\u529F\u80FD\u9700\u8981\u591A\u4E2A\u4EBA\u534F\u4F5C\uFF0C\u5EFA\u8BAEpush<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u8001\u5957\u8DEF\u6DFB\u52A0\u63D0\u4EA4\u5230\u5404\u81EA\u529F\u80FD\u5206\u652F\u4E0A\uFF1A\u7F16\u8F91\u3001\u6682\u5B58\u3001\u63D0\u4EA4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> status
<span class="token function">git</span> <span class="token function">add</span>
<span class="token function">git</span> commit
<span class="token function">git</span> push<span class="token punctuation">(</span>\u5982\u679C\u8FD9\u4E2A\u529F\u80FD\u9700\u8981\u591A\u4E2A\u4EBA\u534F\u4F5C<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4E86\u63D0\u4EA4\u540E\uFF0C\u5982\u679C\u56E2\u961F\u4F7F\u7528 Pull Requests\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u53D1\u8D77\u4E00\u4E2A\u7528\u4E8E\u5408\u5E76\u5230 develop \u5206\u652F\u3002\u5426\u5219\u5C31\u76F4\u63A5\u5408\u5E76\u5230\u672C\u5730\u7684 develop \u5206\u652F\u540E push \u5230\u4E2D\u592E\u4ED3\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin develop
<span class="token function">git</span> checkout develop
<span class="token function">git</span> merge some-feature
<span class="token function">git</span> push
<span class="token function">git</span> branch -d some-feature
<span class="token function">git</span> push origin --delete some-feature <span class="token punctuation">(</span>\u5982\u679C\u8FD9\u4E2A\u529F\u80FD\u9700\u8981\u591A\u4E2A\u4EBA\u534F\u4F5C<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u6761\u547D\u4EE4\u5728\u5408\u5E76\u529F\u80FD\u524D\u786E\u4FDD develop \u5206\u652F\u662F\u6700\u65B0\u7684\u3002\u6CE8\u610F\uFF0C\u529F\u80FD\u51B3\u4E0D\u5E94\u8BE5\u76F4\u63A5\u5408\u5E76\u5230 master \u5206\u652F\u3002 \u7136\u540E\u7528\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u6765\u505A\u53D1\u5E03\u51C6\u5907\u3002\u8FD9\u4E00\u6B65\u4E5F\u786E\u5B9A\u4E86\u53D1\u5E03\u7684\u7248\u672C\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b release-1.0.0 develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u5206\u652F\u662F\u6E05\u7406\u53D1\u5E03\u3001\u6267\u884C\u6240\u6709\u6D4B\u8BD5\u3001\u66F4\u65B0\u6587\u6863\u548C\u5176\u5B83\u4E3A\u4E0B\u4E2A\u53D1\u5E03\u505A\u51C6\u5907\u64CD\u4F5C\u7684\u5730\u65B9\uFF0C\u50CF\u662F\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u6539\u5584\u53D1\u5E03\u7684\u529F\u80FD\u5206\u652F\u3002 \u53EA\u8981\u521B\u5EFA\u8FD9\u4E2A\u5206\u652F\u5E76 push \u5230\u4E2D\u592E\u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u53D1\u5E03\u5C31\u662F\u529F\u80FD\u51BB\u7ED3\u7684\u3002\u4EFB\u4F55\u4E0D\u5728 develop \u5206\u652F\u4E2D\u7684\u65B0\u529F\u80FD\u90FD\u63A8\u5230\u4E0B\u4E2A\u53D1\u5E03\u5FAA\u73AF\u4E2D\u3002 \u4E00\u65E6\u51C6\u5907\u597D\u4E86\u5BF9\u5916\u53D1\u5E03\uFF0C\u5408\u5E76\u4FEE\u6539\u5230 master \u5206\u652F\u548C develop \u5206\u652F\u4E0A\uFF0C\u5220\u9664\u53D1\u5E03\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge release-1.0.0
<span class="token function">git</span> push
<span class="token function">git</span> checkout develop
<span class="token function">git</span> merge release-1.0.0
<span class="token function">git</span> push
<span class="token function">git</span> branch -d release-1.0.0
<span class="token function">git</span> push origin --delete release-1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u5E03\u5206\u652F\u662F\u4F5C\u4E3A\u529F\u80FD\u5F00\u53D1\uFF08develop \u5206\u652F\uFF09\u548C\u5BF9\u5916\u53D1\u5E03\uFF08master \u5206\u652F\uFF09\u95F4\u7684\u7F13\u51B2\u3002\u53EA\u8981\u6709\u5408\u5E76\u5230 master \u5206\u652F\uFF0C\u5C31\u5E94\u8BE5\u6253\u597D Tag \u4EE5\u65B9\u4FBF\u8DDF\u8E2A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> tag -a <span class="token number">1.0</span>.0 -m <span class="token string">&quot;Initial public release&quot;</span> master
<span class="token function">git</span> push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u5916\u53D1\u5E03\u540E\uFF0C\u53D1\u73B0\u4E86\u5F53\u524D\u7248\u672C\u7684\u4E00\u4E2A Bug\uFF0C\u4ECE master \u5206\u652F\u4E0A\u62C9\u51FA\u4E86\u4E00\u4E2A Hotfix \u5206\u652F\uFF0C\u63D0\u4EA4\u4FEE\u6539\u4EE5\u89E3\u51B3\u95EE\u9898\uFF0C\u7136\u540E\u76F4\u63A5\u5408\u5E76\u56DE master \u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b issue-<span class="token comment">#001 master</span>
Fix the bug\u2026<span class="token punctuation">..</span>
<span class="token function">git</span> checkout master
<span class="token function">git</span> merge issue-<span class="token comment">#001</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C31\u50CF\u53D1\u5E03\u5206\u652F\uFF0C\u7EF4\u62A4\u5206\u652F\u4E2D\u65B0\u52A0\u8FD9\u4E9B\u91CD\u8981\u4FEE\u6539\u9700\u8981\u5305\u542B\u5230 develop \u5206\u652F\u4E2D\uFF0C\u7136\u540E\u624D\u5220\u9664\u8FD9\u4E2A Hotfix \u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout develop
<span class="token function">git</span> merge issue-<span class="token comment">#001</span>
<span class="token function">git</span> push
<span class="token function">git</span> branch -d issue-<span class="token comment">#001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-flow-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-flow-\u4F7F\u7528" aria-hidden="true">#</a> Git Flow \u4F7F\u7528</h3><p>\u5B89\u88C5 Git Flow(\u6700\u65B0\u7684 git bash \u5DF2\u7ECF\u652F\u6301\uFF0C\u4E0D\u7528\u5B89\u88C5) \u5728 git bash \u4E2D\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --recursive git://github.com/nvie/gitflow.git d:<span class="token punctuation">\\</span>gitflow<span class="token punctuation">(</span>\u6307\u5B9Agit flow \u5B89\u88C5\u76EE\u5F55<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u8FDB\u5165 gitflow\\contrib \u8DEF\u5F84\u4E0B\uFF0C\u6267\u884C\uFF1Amsysgit-install.cmd d:\\git\uFF08git \u7684\u5B89\u88C5\u76EE\u5F55\uFF09</li></ol><p>\u6253\u5F00 Git Bash \u547D\u4EE4\u7A97\u53E3\uFF0C\u6267\u884C git flow,\u8F93\u51FA\u5982\u4E0B\uFF1A</p>`,26),g=["src"],k=a(`<p>\u8BF4\u660E git flow \u5B89\u88C5\u6210\u529F!</p><p>Git Flow \u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> flow init\uFF1A\u521D\u59CB\u5316\u4E00\u4E2A\u73B0\u6709\u7684 <span class="token function">git</span> \u5E93,\u5C06\u4F1A\u8BBE\u7F6E\u4E00\u4E9B\u521D\u59CB\u7684\u53C2\u6570\uFF0C\u5982\u5206\u652F\u524D\u7F00\u540D\u7B49\uFF0C\u5EFA\u8BAE\u7528\u9ED8\u8BA4\u503C\u3002
<span class="token function">git</span> flow feature start <span class="token punctuation">[</span>featureBranchName<span class="token punctuation">]</span>: \u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E<span class="token string">&#39;develop&#39;</span>\u7684feature\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8FD9\u4E2A\u5206\u652F\u4E4B\u4E0B\u3002
<span class="token function">git</span> flow feature finish <span class="token punctuation">[</span>featureBranchName<span class="token punctuation">]</span>: \u5B8C\u6210\u5F00\u53D1\u65B0\u7279\u6027, \u5408\u5E76 MYFEATURE \u5206\u652F\u5230 <span class="token string">&#39;develop&#39;</span>, \u5220\u9664\u8FD9\u4E2A\u65B0\u7279\u6027\u5206\u652F, \u5207\u6362\u56DE <span class="token string">&#39;develop&#39;</span> \u5206\u652F\u3002
<span class="token function">git</span> flow feature publish <span class="token punctuation">[</span>featureBranchName<span class="token punctuation">]</span>\uFF1A\u53D1\u5E03\u65B0\u7279\u6027\u5206\u652F\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528git\u7684push\u547D\u4EE4
<span class="token function">git</span> flow feature pull origin <span class="token punctuation">[</span>featureBranchName<span class="token punctuation">]</span>\uFF1A\u53D6\u5F97\u5176\u5B83\u7528\u6237\u53D1\u5E03\u7684\u65B0\u7279\u6027\u5206\u652F\uFF0C\u5E76\u7B7E\u51FA\u8FDC\u7A0B\u7684\u53D8\u66F4\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528git\u7684pull\u547D\u4EE4
<span class="token function">git</span> flow feature track <span class="token punctuation">[</span>featureBranchName<span class="token punctuation">]</span>\uFF1A\u8DDF\u8E2A\u5728origin\u4E0A\u7684feature\u5206\u652F\u3002
<span class="token function">git</span> flow release start <span class="token punctuation">[</span>releaseBranchName<span class="token punctuation">]</span>\uFF1A\u5F00\u59CB\u51C6\u5907release\u7248\u672C\uFF0C\u4ECE <span class="token string">&#39;develop&#39;</span> \u5206\u652F\u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A release \u5206\u652F\u3002
<span class="token function">git</span> flow release publish <span class="token punctuation">[</span>releaseBranchName<span class="token punctuation">]</span>\uFF1A\u521B\u5EFA release \u5206\u652F\u4E4B\u540E\u7ACB\u5373\u53D1\u5E03\u5141\u8BB8\u5176\u5B83\u7528\u6237\u5411\u8FD9\u4E2A release \u5206\u652F\u63D0\u4EA4\u5185\u5BB9\u3002
<span class="token function">git</span> flow release track <span class="token punctuation">[</span>releaseBranchName<span class="token punctuation">]</span>\uFF1A\u7B7E\u51FA release \u7248\u672C\u7684\u8FDC\u7A0B\u53D8\u66F4\u3002
<span class="token function">git</span> flow release finish <span class="token punctuation">[</span>releaseBranchName<span class="token punctuation">]</span>\uFF1A\u5F52\u5E76 release \u5206\u652F\u5230 <span class="token string">&#39;master&#39;</span> \u5206\u652F\uFF0C\u7528 release \u5206\u652F\u540D\u6253 Tag\uFF0C\u5F52\u5E76 release \u5206\u652F\u5230 <span class="token string">&#39;develop&#39;</span>\uFF0C\u79FB\u9664 release \u5206\u652F\u3002
<span class="token function">git</span> flow hotfix start <span class="token punctuation">[</span>hotfixBranchName<span class="token punctuation">]</span>\uFF1A\u5F00\u59CB <span class="token function">git</span> flow \u7D27\u6025\u4FEE\u590D\uFF0C\u4ECEmaster\u4E0A\u5EFA\u7ACBhotfix\u5206\u652F\u3002
<span class="token function">git</span> flow hotfix finish <span class="token punctuation">[</span>hotfixBranchName<span class="token punctuation">]</span>\uFF1A\u7ED3\u675F <span class="token function">git</span> flow \u7D27\u6025\u4FEE\u590D\uFF0C\u4EE3\u7801\u5F52\u5E76\u56DE develop \u548C master \u5206\u652F\u3002\u76F8\u5E94\u5730\uFF0Cmaster \u5206\u652F\u6253\u4E0A\u4FEE\u6B63\u7248\u672C\u7684 TAG\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=["src"],m=n("p",null,[t("Tips: "),n("code",null,"\u4F60\u4F9D\u65E7\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u4F60\u6240\u77E5\u9053\u548C\u4E86\u89E3\u7684git\u547D\u4EE4\u6309\u7167git flow\u7684\u6D41\u7A0B\u8D70\uFF0Cgit flow\u53EA\u662F\u4E00\u4E2A\u5DE5\u5177\u96C6\u5408\u3002")],-1),h=n("h3",{id:"\u4F7F\u7528-git-flow-\u547D\u4EE4\u5B9E\u73B0\u5206\u652F\u7BA1\u7406\u6D41\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-git-flow-\u547D\u4EE4\u5B9E\u73B0\u5206\u652F\u7BA1\u7406\u6D41\u7A0B","aria-hidden":"true"},"#"),t(" \u4F7F\u7528 git flow \u547D\u4EE4\u5B9E\u73B0\u5206\u652F\u7BA1\u7406\u6D41\u7A0B")],-1),f=["src"],b=a(`<p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E0A\u9762\u7684\u64CD\u4F5C\u53C8\u662F\u62C9\u5206\u652F\u53C8\u662F\u6539\u7248\u672C\u53C8\u662F\u5408\u5E76\uFF0C \u5F88\u7E41\u7410\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E00\u6B3E\u63D2\u4EF6\uFF0C\u7B80\u5316\u6574\u4E2A\u6D41\u7A0B\uFF0C\u8BA9\u5F88\u591A\u64CD\u4F5C\u81EA\u52A8\u5316\u3002</p><h3 id="\u4F7F\u7528-jgitflow-maven-plugin" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-jgitflow-maven-plugin" aria-hidden="true">#</a> \u4F7F\u7528 jgitflow-maven-plugin</h3><p>4.1 \u914D\u7F6E maven</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>external.atlassian.jgitflow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jgitflow-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-m5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localOnly</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localOnly</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pushFeatures</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pushFeatures</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--\u662F\u5426\u5728feature start \u4E4B\u540E\u5C06feature\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pushReleases</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pushReleases</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--\u662F\u5426\u5728release start \u4E4B\u540E\u5C06feature\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pushHotfixes</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pushHotfixes</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--\u662F\u5426\u5728hotfix start \u4E4B\u540E\u5C06feature\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>squash</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>squash</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allowSnapshots</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allowSnapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>clean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noHotfixBuild</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noHotfixBuild</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--\u662F\u5426\u5728feature\u671F\u95F4build\u9879\u76EE--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noFeatureBuild</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noFeatureBuild</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noReleaseBuild</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noReleaseBuild</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- see goals wiki page for configuration options --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flowInitContext</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>masterBranchName</span><span class="token punctuation">&gt;</span></span>master<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>masterBranchName</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>developBranchName</span><span class="token punctuation">&gt;</span></span>develop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>developBranchName</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>featureBranchPrefix</span><span class="token punctuation">&gt;</span></span>feature-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>featureBranchPrefix</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releaseBranchPrefix</span><span class="token punctuation">&gt;</span></span>release-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releaseBranchPrefix</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hotfixBranchPrefix</span><span class="token punctuation">&gt;</span></span>hotfix-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hotfixBranchPrefix</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>versionTagPrefix</span><span class="token punctuation">&gt;</span></span>loan-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>versionTagPrefix</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flowInitContext</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u7248\u672C\u53F7\u7BA1\u7406\u63D2\u4EF6--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.codehaus.mojo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>versions-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generateBackupPoms</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generateBackupPoms</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B98\u65B9\u6587\u6863\uFF1Ahttps://bitbucket.org/atlassian/jgit-flow/wiki/Home</p><p>4.2 \u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn jgitflow:feature-start
mvn jgitflow:feature-finish
mvn jgitflow:release-start
mvn jgitflow:release-finish
mvn jgitflow:hotfix-start
mvn jgitflow:hotfix-finish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u547D\u4EE4\u7684\u5927\u6982\u610F\u601D\u53C2\u8003\u7B2C\u4E09\u8282\u7684 git flow \u547D\u4EE4\uFF0C\u5177\u4F53\u7684\u533A\u522B\u770B\u4E0B\u4E00\u8282\u3002</p><p>jgitflow-maven-plugin \u7BA1\u7406\u6D41\u7A0B</p><p>\u65E0\u9700\u5B89\u88C5 Git Flow</p><p>\u65E0\u9700 git flow init\uFF0C\u5728 pom \u6587\u4EF6\u4E2D\u5C31\u53EF\u4EE5\u914D\u7F6E\u5404\u4E2A\u5206\u652F\u7684\u524D\u7F00\u540D\u7B49\u4FE1\u606F \u53EF\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u5728 start \u7684\u65F6\u5019 feature\u3001release\u3001hotfix \u5206\u652F\u662F\u5426\u81EA\u52A8\u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u5EFA\u8BAE\u5F00\u542F</p><p>feature-finish \u540E\uFF0C\u81EA\u52A8\u5220\u9664 feature \u672C\u5730\u548C\u8FDC\u7A0B\u5206\u652F\uFF0C\u540C\u7406 release \u548C hotfix \u4E00\u6837 feature-finish \u540E\uFF0C\u81EA\u52A8\u5408\u5E76\u5230 develop \u5206\u652F\uFF0Crelease-finish \u540E\uFF0C\u81EA\u52A8\u5408\u5E76\u5230 master \u548C develop \u5206\u652F</p>`,12),w=["src"],x=n("h3",{id:"\u5176\u5B83",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5176\u5B83","aria-hidden":"true"},"#"),t(" \u5176\u5B83")],-1),_=n("p",null,"\u7531\u4E8E Git Flow \u53EA\u662F\u5B9A\u4E49\u7684\u4E00\u5957\u5E38\u89C4\u7684\u5F00\u53D1\u6D41\u7A0B\u6A21\u578B\uFF0C\u5982\u679C\u56E2\u961F\u6709\u7279\u6B8A\u7684\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u7075\u6D3B\u8FD0\u7528 Git Flow\uFF0C \u589E\u52A0\u6216\u8005\u4FEE\u6539\u4E00\u4E9B\u8282\u70B9\u4F7F\u4E4B\u6210\u4E3A\u9002\u5408\u81EA\u5DF1\u7684\u6D41\u7A0B\u3002",-1);function B(s,N){return p(),l("div",null,[o,n("img",{src:s.$withBase("/framework/git_flow_01.png")},null,8,c),u,n("img",{src:s.$withBase("/framework/git_flow_02.png")},null,8,r),d,n("img",{src:s.$withBase("/framework/git_flow_03.png")},null,8,g),k,n("img",{src:s.$withBase("/framework/git_flow_04.png")},null,8,v),m,h,n("img",{src:s.$withBase("/framework/git_flow_05.png")},null,8,f),b,n("img",{src:s.$withBase("/framework/git_flow_06.png")},null,8,w),x,_])}var F=e(i,[["render",B],["__file","02_\u4EE3\u7801\u7BA1\u7406.html.vue"]]);export{F as default};
