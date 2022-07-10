import{_ as a,o as e,c as n,d as s}from"./app.9886cc4c.js";const i={},l=s(`<h1 id="swaggerui-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#swaggerui-\u6587\u6863" aria-hidden="true">#</a> SwaggerUI \u6587\u6863</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>SwaggerUI \u7684\u914D\u7F6E</li><li>Swagger \u4E0E\u7F51\u5173\u7684\u96C6\u6210</li></ul><h2 id="swaggerui-\u5728\u5E73\u53F0\u4E2D\u7684\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#swaggerui-\u5728\u5E73\u53F0\u4E2D\u7684\u96C6\u6210" aria-hidden="true">#</a> SwaggerUI \u5728\u5E73\u53F0\u4E2D\u7684\u96C6\u6210</h2><p>\u5E73\u53F0\u96C6\u6210\u7684\u521D\u59CB\u7248\u672C\u7684 swagger-ui\uFF0C\u573A\u666F\u4F7F\u7528\u4E8E api \u6587\u6863\u800C\u975E api \u8C03\u8BD5\uFF0C\u8C03\u8BD5\u5EFA\u8BAE\u4F7F\u7528\u5176\u5B83\u7B2C\u4E09\u65B9\u5DE5\u5177\uFF0C \u6BD4\u5982 yapi\u3001postman \u7B49\uFF0C\u4EE5\u786E\u4FDD\u5B89\u5168\u6027</p><h3 id="\u5F00\u542F-swagger-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-swagger-\u914D\u7F6E" aria-hidden="true">#</a> \u5F00\u542F swagger \u914D\u7F6E</h3><p>\u9ED8\u8BA4\u662F\u5168\u5C40\u652F\u6301 swagger \u914D\u7F6E\uFF0C\u7531\u624B\u5DE5\u6DFB\u52A0\u548C\u5F00\u542F\uFF0C\u5728<code>yaml</code>\u4E2D\u6DFB\u52A0\u914D\u7F6E\u5982\u4E0B:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">swagger</span><span class="token punctuation">:</span>
    <span class="token key atrule">author</span><span class="token punctuation">:</span> WeiXiaoJin
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> \u6587\u6863\u540D\u79F0
    <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6587\u6863\u63CF\u8FF0
    <span class="token key atrule">version</span><span class="token punctuation">:</span> 2.1.2<span class="token punctuation">-</span>RC
    <span class="token key atrule">scan-package</span><span class="token punctuation">:</span> com.alinesno.cloud.base.demo.gateway
    <span class="token comment"># scan-package: package1;package2 \u626B\u63CF\u591A\u4E2A\u5305</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u5BF9\u5916\u516C\u7F51\u73AF\u5883\u4E0D\u5EFA\u8BAE\u5F00\u542F\u6216\u8005\u9700\u8981\u52A0\u5B89\u5168\u7B56\u7565[\u7B56\u7565\u5F85\u8865\u5145]</li><li>\u9ED8\u8BA4\u4F1A\u626B\u63CF\u516C\u5171\u7684\u524D\u7AEF\u5305\uFF0C\u5373<code>alinesno-cloud-common-web-*</code>\u6A21\u5757\u4E0B\u7684\u524D\u7AEF\u5305</li><li>\u5F00\u542F swagger \u5BF9\u542F\u52A8\u901F\u5EA6\u6709\u5F71\u54CD</li></ul><h3 id="swagger-api-\u4E0E\u7F51\u5173\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#swagger-api-\u4E0E\u7F51\u5173\u7684\u5173\u7CFB" aria-hidden="true">#</a> swagger-api \u4E0E\u7F51\u5173\u7684\u5173\u7CFB</h3><p>\u7F51\u5173\u540C\u6B65\u7684\u63A5\u53E3\u662F\u901A\u8FC7 swagger-api \u63A5\u53E3\u8FDB\u884C\u540C\u6B65\uFF0C\u76F8\u5E94\u7684\u63A5\u53E3\u5F00\u5173\u4E0E\u5426\u901A\u8FC7\u7F51\u5173\u5E73\u53F0\u8FDB\u884C\u7BA1\u7406\u7684\uFF0C \u540C\u65F6\u4E0E\u5F00\u653E\u5E73\u53F0\u6574\u5408\u7684</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u540E\u671F\u65B0\u7248\u672C swagger \u6CE8\u89E3\u901A\u8FC7\u4EE3\u7801\u751F\u6210\u5668\u53EF\u9009\u62E9\u6027\u7684\u751F\u6210\uFF0C\u540C\u6B65\u5217\u5165\u5230\u5347\u7EA7\u8BA1\u5212\u4E2D</li></ul>`,14),r=[l];function t(c,d){return e(),n("div",null,r)}var o=a(i,[["render",t],["__file","41_Swagger\u652F\u6301.html.vue"]]);export{o as default};
