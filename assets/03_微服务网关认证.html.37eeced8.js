import{_ as a,o as e,c as i,d as s}from"./app.605be9d2.js";var n="/sso/gateway_oauth2.png";const d={},r=s('<h1 id="\u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1</h1><p>\u5DE5\u7A0B\u793A\u4F8B \u7CFB\u7EDF\u5E94\u7528\u5355\u70B9\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B<a href="#">\u5F85\u96C6\u6210</a></p><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1\u573A\u666F</li><li>\u57FA\u4E8Eoauth2\u7684\u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1</li><li>\u914D\u7F6E\u5FAE\u670D\u52A1\u7F51\u5173\u793A\u4F8B</li></ul><h2 id="\u8BA4\u8BC1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u6D41\u7A0B" aria-hidden="true">#</a> \u8BA4\u8BC1\u6D41\u7A0B</h2><p>\u7ED3\u5408\u7F51\u5173\u7ED3\u6784\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u505A\u4E3A\u5FAE\u670D\u52A1\u7EDF\u4E00\u6388\u6743\u5165\u53E3\uFF1A</p><img src="'+n+`" width="70%"><p>\u6D41\u7A0B\u8BF4\u660E\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u901A\u8FC7\u7F51\u5173\u8BF7\u6C42\u670D\u52A1</li><li>API\u7F51\u5173\u670D\u52A1\u901A\u8FC7\u53BBoauth2\u6388\u6743\u4E2D\u5FC3\u83B7\u53D6token</li><li>\u5BA2\u6237\u7AEF\u5E26\u7740token\u8BBF\u95EE\u5404\u4E2A\u5B50\u670D\u52A1\u63A5\u53E3</li></ul><h2 id="\u8BA4\u8BC1\u6D41\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u6D41\u7A0B-1" aria-hidden="true">#</a> \u8BA4\u8BC1\u6D41\u7A0B</h2><p>\u8FD9\u91CC\u63CF\u8FF0\u4E24\u79CD\u65B9\u6848\uFF0C\u4E00\u79CD\u5373\u539F\u6709\u56E2\u961F\u7684gateway\u96C6\u6210\u7684\u65B9\u6848\uFF0C\u53E6\u4E00\u79CD\u662F\u4F7F\u7528ACP\u7F51\u5173\u7684\u65B9\u6848\uFF0C\u6574\u4F53\u5982\u4E0B\uFF1A</p><h3 id="\u9879\u76EE\u529F\u80FD\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u529F\u80FD\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u529F\u80FD\u914D\u7F6E</h3><p>\u5728\u8BA4\u8BC1\u5E73\u53F0\u6DFB\u52A0\u5E94\u7528\uFF0C\u83B7\u53D6\u5230\u5BC6\u94A5\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u83B7\u53D6\u5230key\u548Csec:

<span class="token assign-left variable">key</span><span class="token operator">=</span>xxx
<span class="token assign-left variable">sec</span><span class="token operator">=</span>xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728gateway\u4E2D\u83B7\u53D6\u8BA4\u8BC1\u793A\u4F8B\u4EE3\u7801\uFF0C\u8FD9\u91CC\u67E5\u770B\u8BA4\u8BC1\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>acp\u5DF2\u7ECF\u9ED8\u8BA4\u96C6\u6210\u4E86oauth2\u7684\u8BA4\u8BC1\u96C6\u6210\uFF0C\u7ED3\u5408acp\u7F51\u5173\u8BA4\u8BC1\u914D\u7F6E\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BA4\u8BC1\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u9A8C\u8BC1" aria-hidden="true">#</a> \u8BA4\u8BC1\u9A8C\u8BC1</h3><p>\u4EE5\u4E0B\u4E3A\u4EE5acp\u7F51\u5173\u5E73\u53F0\u4E3A\u793A\u4F8B\uFF0C\u8BF7\u6C42\u83B7\u53D6accessToken\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BF7\u6C42\u7F51\u5173\u914D\u7F6E:</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,24),l=[r];function c(h,t){return e(),i("div",null,l)}var u=a(d,[["render",c],["__file","03_\u5FAE\u670D\u52A1\u7F51\u5173\u8BA4\u8BC1.html.vue"]]);export{u as default};
