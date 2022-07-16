import{_ as a}from"./undraw_online_page_cq94.099f9cd6.js";import{_ as e,o as n,c as s,d as t}from"./app.da414333.js";const r={},i=t('<h2 id="\u670D\u52A1\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5B9E\u8DF5" aria-hidden="true">#</a> \u670D\u52A1\u5B9E\u8DF5</h2><p class="show-images"><img src="'+a+`" width="40%"></p><h5 id="\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#\u5206\u5305" aria-hidden="true">#</a> \u5206\u5305</h5><p>\u5EFA\u8BAE\u5C06\u670D\u52A1\u63A5\u53E3\uFF0C\u670D\u52A1\u6A21\u578B\uFF0C\u670D\u52A1\u5F02\u5E38\u7B49\u5747\u653E\u5728 API \u5305\u4E2D\uFF0C\u56E0\u4E3A\u670D\u52A1\u6A21\u578B\u53CA\u5F02\u5E38\u4E5F\u662F API \u7684\u4E00\u90E8\u5206\uFF0C\u540C\u65F6\uFF0C\u8FD9\u6837\u505A\u4E5F\u7B26\u5408\u5206\u5305\u539F\u5219\uFF1A\u91CD\u7528\u53D1\u5E03\u7B49\u4EF7\u539F\u5219(REP)\uFF0C\u5171\u540C\u91CD\u7528\u539F\u5219(CRP)\u3002 \u5982\u679C\u9700\u8981\uFF0C\u4E5F\u53EF\u4EE5\u8003\u8651\u5728 API \u5305\u4E2D\u653E\u7F6E\u4E00\u4EFD spring \u7684\u5F15\u7528\u914D\u7F6E\uFF0C\u8FD9\u6837\u4F7F\u7528\u65B9\uFF0C\u53EA\u9700\u5728 spring \u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u5F15\u7528\u6B64\u914D\u7F6E\u5373\u53EF\uFF0C\u914D\u7F6E\u5EFA\u8BAE\u653E\u5728\u6A21\u5757\u7684\u5305\u76EE\u5F55\u4E0B\uFF0C\u4EE5\u514D\u51B2\u7A81.</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>// \u5982\uFF1A
com/alibaba/china/xxx/dubbo-reference.xml\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u7C92\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7C92\u5EA6" aria-hidden="true">#</a> \u7C92\u5EA6</h5><p>\u670D\u52A1\u63A5\u53E3\u5C3D\u53EF\u80FD\u5927\u7C92\u5EA6\uFF0C\u6BCF\u4E2A\u670D\u52A1\u65B9\u6CD5\u5E94\u4EE3\u8868\u4E00\u4E2A\u529F\u80FD\uFF0C\u800C\u4E0D\u662F\u67D0\u529F\u80FD\u7684\u4E00\u4E2A\u6B65\u9AA4\uFF0C\u5426\u5219\u5C06\u9762\u4E34\u5206\u5E03\u5F0F\u4E8B\u52A1\u95EE\u9898\uFF0CDubbo \u6682\u672A\u63D0\u4F9B\u5206\u5E03\u5F0F\u4E8B\u52A1\u652F\u6301\u3002 \u670D\u52A1\u63A5\u53E3\u5EFA\u8BAE\u4EE5\u4E1A\u52A1\u573A\u666F\u4E3A\u5355\u4F4D\u5212\u5206\uFF0C\u5E76\u5BF9\u76F8\u8FD1\u4E1A\u52A1\u505A\u62BD\u8C61\uFF0C\u9632\u6B62\u63A5\u53E3\u6570\u91CF\u7206\u70B8\u3002 \u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FC7\u4E8E\u62BD\u8C61\u7684\u901A\u7528\u63A5\u53E3\uFF0C\u5982\uFF1AMap query(Map)\uFF0C\u8FD9\u6837\u7684\u63A5\u53E3\u6CA1\u6709\u660E\u786E\u8BED\u4E49\uFF0C\u4F1A\u7ED9\u540E\u671F\u7EF4\u62A4\u5E26\u6765\u4E0D\u4FBF\u3002</p><h5 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h5><p>\u6BCF\u4E2A\u63A5\u53E3\u90FD\u5E94\u5B9A\u4E49\u7248\u672C\u53F7\uFF0C\u4E3A\u540E\u7EED\u4E0D\u517C\u5BB9\u5347\u7EA7\u63D0\u4F9B\u53EF\u80FD\uFF0C\u5982\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>service</span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xxx.XxxService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5EFA\u8BAE\u4F7F\u7528\u4E24\u4F4D\u7248\u672C\u53F7\uFF0C\u56E0\u4E3A\u7B2C\u4E09\u4F4D\u7248\u672C\u53F7\u901A\u5E38\u8868\u793A\u517C\u5BB9\u5347\u7EA7\uFF0C\u53EA\u6709\u4E0D\u517C\u5BB9\u65F6\u624D\u9700\u8981\u53D8\u66F4\u670D\u52A1\u7248\u672C\u3002 \u5F53\u4E0D\u517C\u5BB9\u65F6\uFF0C\u5148\u5347\u7EA7\u4E00\u534A\u63D0\u4F9B\u8005\u4E3A\u65B0\u7248\u672C\uFF0C\u518D\u5C06\u6D88\u8D39\u8005\u5168\u90E8\u5347\u4E3A\u65B0\u7248\u672C\uFF0C\u7136\u540E\u5C06\u5269\u4E0B\u7684\u4E00\u534A\u63D0\u4F9B\u8005\u5347\u4E3A\u65B0\u7248\u672C\u3002</p><h5 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h5><p>\u670D\u52A1\u63A5\u53E3\u589E\u52A0\u65B9\u6CD5\uFF0C\u6216\u670D\u52A1\u6A21\u578B\u589E\u52A0\u5B57\u6BB5\uFF0C\u53EF\u5411\u540E\u517C\u5BB9\uFF0C\u5220\u9664\u65B9\u6CD5\u6216\u5220\u9664\u5B57\u6BB5\uFF0C\u5C06\u4E0D\u517C\u5BB9\uFF0C\u679A\u4E3E\u7C7B\u578B\u65B0\u589E\u5B57\u6BB5\u4E5F\u4E0D\u517C\u5BB9\uFF0C\u9700\u901A\u8FC7\u53D8\u66F4\u7248\u672C\u53F7\u5347\u7EA7\u3002 \u5404\u534F\u8BAE\u7684\u517C\u5BB9\u6027\u4E0D\u540C\uFF0C\u53C2\u89C1\uFF1A\xA0 \u670D\u52A1\u534F\u8BAE</p><h5 id="\u679A\u4E3E\u503C" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u503C" aria-hidden="true">#</a> \u679A\u4E3E\u503C</h5><p>\u5982\u679C\u662F\u5B8C\u5907\u96C6\uFF0C\u53EF\u4EE5\u7528 \xA0Enum\uFF0C\u6BD4\u5982\uFF1AENABLE,\xA0DISABLE\u3002 \u5982\u679C\u662F\u4E1A\u52A1\u79CD\u7C7B\uFF0C\u4EE5\u540E\u660E\u663E\u4F1A\u6709\u7C7B\u578B\u589E\u52A0\uFF0C\u4E0D\u5EFA\u8BAE\u7528 \xA0Enum\uFF0C\u53EF\u4EE5\u7528 \xA0String\xA0 \u4EE3\u66FF\u3002 \u5982\u679C\u662F\u5728\u8FD4\u56DE\u503C\u4E2D\u7528\u4E86 \xA0Enum\uFF0C\u5E76\u65B0\u589E\u4E86 \xA0Enum\xA0 \u503C\uFF0C\u5EFA\u8BAE\u5148\u5347\u7EA7\u670D\u52A1\u6D88\u8D39\u65B9\uFF0C\u8FD9\u6837\u670D\u52A1\u63D0\u4F9B\u65B9\u4E0D\u4F1A\u8FD4\u56DE\u65B0\u503C\u3002 \u5982\u679C\u662F\u5728\u4F20\u5165\u53C2\u6570\u4E2D\u7528\u4E86 \xA0Enum\uFF0C\u5E76\u65B0\u589E\u4E86 \xA0Enum\xA0 \u503C\uFF0C\u5EFA\u8BAE\u5148\u5347\u7EA7\u670D\u52A1\u63D0\u4F9B\u65B9\uFF0C\u8FD9\u6837\u670D\u52A1\u6D88\u8D39\u65B9\u4E0D\u4F1A\u4F20\u5165\u65B0\u503C\u3002</p><h5 id="\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u5E8F\u5217\u5316</h5><p>\u670D\u52A1\u53C2\u6570\u53CA\u8FD4\u56DE\u503C\u5EFA\u8BAE\u4F7F\u7528 POJO \u5BF9\u8C61\uFF0C\u5373\u901A\u8FC7 \xA0setter,\xA0getter\xA0 \u65B9\u6CD5\u8868\u793A\u5C5E\u6027\u7684\u5BF9\u8C61\u3002 \u670D\u52A1\u53C2\u6570\u53CA\u8FD4\u56DE\u503C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u63A5\u53E3\uFF0C\u56E0\u4E3A\u6570\u636E\u6A21\u578B\u62BD\u8C61\u7684\u610F\u4E49\u4E0D\u5927\uFF0C\u5E76\u4E14\u5E8F\u5217\u5316\u9700\u8981\u63A5\u53E3\u5B9E\u73B0\u7C7B\u7684\u5143\u4FE1\u606F\uFF0C\u5E76\u4E0D\u80FD\u8D77\u5230\u9690\u85CF\u5B9E\u73B0\u7684\u610F\u56FE\u3002 \u670D\u52A1\u53C2\u6570\u53CA\u8FD4\u56DE\u503C\u90FD\u5FC5\u9700\u662F byValue \u7684\uFF0C\u800C\u4E0D\u80FD\u662F byReference \u7684\uFF0C\u6D88\u8D39\u65B9\u548C\u63D0\u4F9B\u65B9\u7684\u53C2\u6570\u6216\u8FD4\u56DE\u503C\u5F15\u7528\u5E76\u4E0D\u662F\u540C\u4E00\u4E2A\uFF0C\u53EA\u662F\u503C\u76F8\u540C\uFF0CDubbo \u4E0D\u652F\u6301\u5F15\u7528\u8FDC\u7A0B\u5BF9\u8C61\u3002</p><h5 id="\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u5E38</h5><p>\u5EFA\u8BAE\u4F7F\u7528\u5F02\u5E38\u6C47\u62A5\u9519\u8BEF\uFF0C\u800C\u4E0D\u662F\u8FD4\u56DE\u9519\u8BEF\u7801\uFF0C\u5F02\u5E38\u4FE1\u606F\u80FD\u643A\u5E26\u66F4\u591A\u4FE1\u606F\uFF0C\u4EE5\u53CA\u8BED\u4E49\u66F4\u53CB\u597D\u3002 \u5982\u679C\u62C5\u5FC3\u6027\u80FD\u95EE\u9898\uFF0C\u5728\u5FC5\u8981\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 override \u6389\u5F02\u5E38\u7C7B\u7684 \xA0fillInStackTrace()\xA0 \u65B9\u6CD5\u4E3A\u7A7A\u65B9\u6CD5\uFF0C\u4F7F\u5176\u4E0D\u62F7\u8D1D\u6808\u4FE1\u606F\u3002 \u67E5\u8BE2\u65B9\u6CD5\u4E0D\u5EFA\u8BAE\u629B\u51FA checked \u5F02\u5E38\uFF0C\u5426\u5219\u8C03\u7528\u65B9\u5728\u67E5\u8BE2\u65F6\u5C06\u8FC7\u591A\u7684 \xA0try...catch\uFF0C\u5E76\u4E14\u4E0D\u80FD\u8FDB\u884C\u6709\u6548\u5904\u7406\u3002 \u670D\u52A1\u63D0\u4F9B\u65B9\u4E0D\u5E94\u5C06 DAO \u6216 SQL \u7B49\u5F02\u5E38\u629B\u7ED9\u6D88\u8D39\u65B9\uFF0C\u5E94\u5728\u670D\u52A1\u5B9E\u73B0\u4E2D\u5BF9\u6D88\u8D39\u65B9\u4E0D\u5173\u5FC3\u7684\u5F02\u5E38\u8FDB\u884C\u5305\u88C5\uFF0C\u5426\u5219\u53EF\u80FD\u51FA\u73B0\u6D88\u8D39\u65B9\u65E0\u6CD5\u53CD\u5E8F\u5217\u5316\u76F8\u5E94\u5F02\u5E38\u3002</p><h5 id="\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a> \u8C03\u7528</h5><p>\u4E0D\u8981\u53EA\u662F\u56E0\u4E3A\u662F Dubbo \u8C03\u7528\uFF0C\u800C\u628A\u8C03\u7528 \xA0try...catch\xA0 \u8D77\u6765\u3002try...catch\xA0 \u5E94\u8BE5\u52A0\u4E0A\u5408\u9002\u7684\u56DE\u6EDA\u8FB9\u754C\u4E0A\u3002 \u5BF9\u4E8E\u8F93\u5165\u53C2\u6570\u7684\u6821\u9A8C\u903B\u8F91\u5728 Provider \u7AEF\u8981\u6709\u3002\u5982\u6709\u6027\u80FD\u4E0A\u7684\u8003\u8651\uFF0C\u670D\u52A1\u5B9E\u73B0\u8005\u53EF\u4EE5\u8003\u8651\u5728 API \u5305\u4E0A\u52A0\u4E0A\u670D\u52A1 Stub \u7C7B\u6765\u5B8C\u6210\u68C0\u9A8C</p>`,21),c=[i];function d(p,o){return n(),s("div",null,c)}var u=e(r,[["render",d],["__file","02_\u670D\u52A1\u5B9E\u8DF5.html.vue"]]);export{u as default};
