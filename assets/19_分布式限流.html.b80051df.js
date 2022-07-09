import{_ as t,r as i,o,c as l,a as n,e as c,d as e,b as a}from"./app.675cbf49.js";const r={},d=e(`<h1 id="\u5206\u5E03\u5F0F\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u9650\u6D41" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u9650\u6D41</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5206\u5E03\u5F0F\u9650\u6D41\u4F7F\u7528\u7684\uFF0C\u5305\u62EC\u63A5\u53E3\u7EA7\u522B\u548C\u65B9\u6CD5\u7EA7\u522B\u7684\u9650\u6D41\uFF0C\u4F7F\u7528 dubbo \u9ED8\u8BA4\u7684\u9650\u6D41\u65B9\u5F0F\uFF0C\u6B64\u9650\u6D41\u6709\u4E00\u5B9A\u7684\u4EE3\u7801\u4FB5\u5165\u6027\uFF0C\u4F7F\u7528\u573A\u666F\u6709\u9650\uFF0C \u53E6\u4E00\u4E2A\u662F\u63A5\u53E3\u7F51\u5173\u7684\u9650\u6D41\uFF0C\u6B64\u5904\u4F7F\u7528<code>Nginx</code>\u7F51\u5173\u505A\u5916\u90E8\u9650\u6D41\uFF0C\u9002\u7528\u4E8E\u5916\u90E8\u5E94\u7528\u9650\u6D41</p><h2 id="dubbo-\u9650\u6D41\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#dubbo-\u9650\u6D41\u8BF4\u660E" aria-hidden="true">#</a> Dubbo \u9650\u6D41\u8BF4\u660E</h2><blockquote><p>\u5BF9\u7F16\u7801\u6709\u4FB5\u5165\u6027\uFF0C\u6CE8\u610F\u4F7F\u7528\u573A\u666F</p></blockquote><p>\u63A5\u53E3\u9650\u6D41</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span></span><span class="token class-name">Constants</span></span><span class="token punctuation">;</span>

<span class="token comment">// \u9650\u6D41\u4E3A5\u4E2A\u5E76\u53D1</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span>parameters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">Constants</span><span class="token punctuation">.</span>TPS_LIMIT_RATE_KEY<span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContentCommentsServiceImpl</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u7EA7\u522B\u9650\u6D41</p>`,8),p=a("\u53C2\u8003"),u={href:"http://gitbook.lbxinhu.com/document-platform-service-technique/05_%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD/02_%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD%E8%AF%B4%E6%98%8E.html",target:"_blank",rel:"noopener noreferrer"},m=a("01_Dubbo \u5B9E\u73B0\u670D\u52A1\u7194\u65AD"),v=e(`<h2 id="nginx-\u9650\u6D41\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#nginx-\u9650\u6D41\u4F7F\u7528" aria-hidden="true">#</a> Nginx \u9650\u6D41\u4F7F\u7528</h2><p>\u9650\u6D41\u4F7F\u7528\u7CFB\u7EDF\u5185\u90E8\u9650\u6D41\u673A\u5236</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Syntax: limit_req zone=name [burst=number] [nodelay];
Default:    \u2014
Context:    http, server, location
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u8BF4\u660E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A$binary_remote_addr \u8868\u793A\u901A\u8FC7remote_addr\u8FD9\u4E2A\u6807\u8BC6\u6765\u505A\u9650\u5236\uFF0C\u201Cbinary_\u201D\u7684\u76EE\u7684\u662F\u7F29\u5199\u5185\u5B58\u5360\u7528\u91CF\uFF0C\u662F\u9650\u5236\u540C\u4E00\u5BA2\u6237\u7AEFip\u5730\u5740\u3002
\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1Azone=one:10m\u8868\u793A\u751F\u6210\u4E00\u4E2A\u5927\u5C0F\u4E3A10M\uFF0C\u540D\u5B57\u4E3Aone\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u7528\u6765\u5B58\u50A8\u8BBF\u95EE\u7684\u9891\u6B21\u4FE1\u606F\u3002
\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1Arate=1r/s\u8868\u793A\u5141\u8BB8\u76F8\u540C\u6807\u8BC6\u7684\u5BA2\u6237\u7AEF\u7684\u8BBF\u95EE\u9891\u6B21\uFF0C\u8FD9\u91CC\u9650\u5236\u7684\u662F\u6BCF\u79D21\u6B21\uFF0C\u8FD8\u53EF\u4EE5\u6709\u6BD4\u598230r/m\u7684\u3002

limit_req zone=one burst=5 nodelay;
\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1Azone=one \u8BBE\u7F6E\u4F7F\u7528\u54EA\u4E2A\u914D\u7F6E\u533A\u57DF\u6765\u505A\u9650\u5236\uFF0C\u4E0E\u4E0A\u9762limit_req_zone \u91CC\u7684name\u5BF9\u5E94\u3002
\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1Aburst=5\uFF0C\u91CD\u70B9\u8BF4\u660E\u4E00\u4E0B\u8FD9\u4E2A\u914D\u7F6E\uFF0Cburst\u7206\u53D1\u7684\u610F\u601D\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u7684\u610F\u601D\u662F\u8BBE\u7F6E\u4E00\u4E2A\u5927\u5C0F\u4E3A5\u7684\u7F13\u51B2\u533A\u5F53\u6709\u5927\u91CF\u8BF7\u6C42\uFF08\u7206\u53D1\uFF09\u8FC7\u6765\u65F6\uFF0C\u8D85\u8FC7\u4E86\u8BBF\u95EE\u9891\u6B21\u9650\u5236\u7684\u8BF7\u6C42\u53EF\u4EE5\u5148\u653E\u5230\u8FD9\u4E2A\u7F13\u51B2\u533A\u5185\u3002
\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1Anodelay\uFF0C\u5982\u679C\u8BBE\u7F6E\uFF0C\u8D85\u8FC7\u8BBF\u95EE\u9891\u6B21\u800C\u4E14\u7F13\u51B2\u533A\u4E5F\u6EE1\u4E86\u7684\u65F6\u5019\u5C31\u4F1A\u76F4\u63A5\u8FD4\u56DE503\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u6240\u6709\u8BF7\u6C42\u4F1A\u7B49\u5F85\u6392\u961F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
    server {
        location /search/ {
            limit_req zone=one burst=5 nodelay;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,9);function b(_,h){const s=i("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[p,n("a",u,[m,c(s)])]),v])}var x=t(r,[["render",b],["__file","19_\u5206\u5E03\u5F0F\u9650\u6D41.html.vue"]]);export{x as default};
