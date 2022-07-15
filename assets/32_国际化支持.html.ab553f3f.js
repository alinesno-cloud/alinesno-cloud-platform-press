import{_ as a,o as s,c as n,d as e}from"./app.d3ef0c93.js";const t={},l=e(`<h1 id="\u56FD\u9645\u5316\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316\u652F\u6301" aria-hidden="true">#</a> \u56FD\u9645\u5316\u652F\u6301</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5FEB\u901F\u5B66\u4F1A\u5982\u4F55\u5728\u5DE5\u7A0B\u4E2D\u652F\u6301\u56FD\u9645\u5316\u8BED\u8A00\u3002</p><h2 id="\u4F7F\u7528\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6559\u7A0B" aria-hidden="true">#</a> \u4F7F\u7528\u6559\u7A0B</h2><h4 id="\u6DFB\u52A0\u56FD\u9645\u5316\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u56FD\u9645\u5316\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u56FD\u9645\u5316\u6587\u4EF6</h4><p>\u9996\u5148\u5728\u914D\u7F6E\u6587\u4EF6 application.yml \u586B\u5199\u56FD\u9645\u5316\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u8868\u793A\u8BFB\u53D6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>classpath:/i18n/messages_language_country.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  messages:
    basename: i18n/messages #\u76F8\u5BF9\u8DEF\u5F84 \u5F00\u5934\u8BF7\u52FF\u6DFB\u52A0\u659C\u6760
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 classpath:/static/i18n \u76EE\u5F55\u4E2D\u6DFB\u52A0\u5982\u4E0B\u56FD\u9645\u5316\u6587\u4EF6\uFF1A \u9ED8\u8BA4\u6587\u4EF6\uFF1Amessages.properties</p><h4 id="\u56FD\u9645\u5316\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316\u5185\u5BB9" aria-hidden="true">#</a> \u56FD\u9645\u5316\u5185\u5BB9</h4><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code> \u8FD9\u91CC\u586B\u5199\u9ED8\u8BA4\u7FFB\u8BD1\uFF0C\u5185\u5BB9\u53EF\u4EE5\u7559\u7A7A\uFF0C\u4F46\u6587\u4EF6\u5FC5\u987B\u5B58\u5728\u3002
\u7F8E\u5F0F\u82F1\u8BED\uFF1Amessages_en_US.properties

 \u8FD9\u91CC\u586B\u5199\u82F1\u8BED\u7FFB\u8BD1\u3002
<span class="token key attr-name">user.title</span><span class="token punctuation">=</span><span class="token value attr-value">User Login</span>
<span class="token key attr-name">user.welcome</span><span class="token punctuation">=</span><span class="token value attr-value">Welcome</span>
<span class="token key attr-name">user.username</span><span class="token punctuation">=</span><span class="token value attr-value">Username</span>
<span class="token key attr-name">user.password</span><span class="token punctuation">=</span><span class="token value attr-value">Password</span>
<span class="token key attr-name">user.login</span><span class="token punctuation">=</span><span class="token value attr-value">Sign In</span>
\u4E2D\u6587\u7B80\u4F53\uFF1Amessages_zh_CN.properties

<span class="token comment">#\u8FD9\u91CC\u586B\u5199\u4E2D\u6587\u7FFB\u8BD1</span>
<span class="token key attr-name">user.title</span><span class="token punctuation">=</span><span class="token value attr-value">\u7528\u6237\u767B\u9646</span>
<span class="token key attr-name">user.welcome</span><span class="token punctuation">=</span><span class="token value attr-value">\u6B22\u8FCE</span>
<span class="token key attr-name">user.username</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9646\u7528\u6237</span>
<span class="token key attr-name">user.password</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9646\u5BC6\u7801</span>
<span class="token key attr-name">user.login</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9646</span>
\u4E2D\u6587\u7E41\u4F53\uFF1Amessages_zh_TW.properties

<span class="token comment">#\u8FD9\u91CC\u586B\u5199\u7E41\u4F53\u7FFB\u8BD1</span>
<span class="token key attr-name">user.title</span><span class="token punctuation">=</span><span class="token value attr-value">\u7528\u6236\u767B\u9678</span>
<span class="token key attr-name">user.welcome</span><span class="token punctuation">=</span><span class="token value attr-value">\u6B61\u8FCE</span>
<span class="token key attr-name">user.username</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9678\u7528\u6236</span>
<span class="token key attr-name">user.password</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9678\u5BC6\u78BC</span>
<span class="token key attr-name">user.login</span><span class="token punctuation">=</span><span class="token value attr-value">\u767B\u9678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u56FD\u9645\u5316" aria-hidden="true">#</a> \u4EE3\u7801\u56FD\u9645\u5316</h2><p>\u901A\u8FC7\u5DE5\u5177\u7C7B\u7684\u9759\u6001\u65B9\u6CD5 MessageUtils.get(&quot;user.title&quot;) \u5FEB\u901F\u83B7\u53D6\u5F53\u524D\u56FD\u9645\u5316\u7684\u7FFB\u8BD1\u503C\u3002</p><h2 id="\u9875\u9762\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u56FD\u9645\u5316" aria-hidden="true">#</a> \u9875\u9762\u56FD\u9645\u5316</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{user.title}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7528\u6237\u767B\u9646<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BED\u8A00\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5207\u6362" aria-hidden="true">#</a> \u8BED\u8A00\u5207\u6362</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>\u9ED8\u8BA4\u82F1\u8BED\uFF1Ahttp://http://127.0.0.1:8080?lang=en_US
\u4E2D\u6587\u7B80\u4F53\uFF1Ahttp://http://127.0.0.1:8080?lang=zh_CN
\u4E2D\u6587\u7E41\u4F53\uFF1Ahttp://http://127.0.0.1:8080?lang=zh_TW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i=[l];function p(r,c){return s(),n("div",null,i)}var d=a(t,[["render",p],["__file","32_\u56FD\u9645\u5316\u652F\u6301.html.vue"]]);export{d as default};
