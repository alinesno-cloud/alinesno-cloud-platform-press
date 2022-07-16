import{_ as a,o as n,c as s,d as t}from"./app.0077dad6.js";const e={},p=t(`<h1 id="\u9875\u9762\u4EE3\u7801\u8F6C\u6362\u548C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4EE3\u7801\u8F6C\u6362\u548C\u89C4\u8303" aria-hidden="true">#</a> \u9875\u9762\u4EE3\u7801\u8F6C\u6362\u548C\u89C4\u8303</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6B64\u5904\u9488\u5BF9\u7684\u662F\u9875\u9762\u8C03\u7528 bean(\u4EE5\u4E0B\u7EDF\u79F0\u4E3A<code>pageBean</code>)\u5B9E\u4F53\u8FDB\u884C\u4EE3\u7801\u8F6C\u6362\uFF0C\u6BD4\u5982\u5217\u8868\uFF0C\u6BD4\u5982\u516C\u5171\u4EE3\u7801\uFF0C\u7CFB\u7EDF\u53C2\u6570\uFF0C\u6216\u8005\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0Cproperties \u6587\u4EF6\u7B49\uFF0C \u5373\u7531\u9875\u9762\u76F4\u63A5\u8C03\u7528\u540E\u53F0<code>bean</code>\u5B9E\u4F53\u7684\u573A\u666F\u800C\u8FDB\u884C\u7684\u8BF4\u660E</p><blockquote><p>\u4E89\u8BAE\u70B9\uFF1A\u5E73\u53F0\u5E76\u4E0D\u53CD\u5BF9\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u5E73\u53F0\u63D0\u5021\u7684\u662F\u65B9\u4FBF\u7814\u53D1\u6548\u7387\u548C\u4EA4\u4ED8\u5468\u671F\uFF0C\u901A\u8FC7\u89C4\u8303\u8FDB\u884C\u7EA6\u675F\u5F00\u53D1\u884C\u4E3A\uFF0C\u907F\u514D\u968F\u610F\u8C03\u7528\u540E\u53F0\u670D\u52A1</p></blockquote><h2 id="\u4EE3\u7801\u8F6C\u6362\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u8F6C\u6362\u529F\u80FD" aria-hidden="true">#</a> \u4EE3\u7801\u8F6C\u6362\u529F\u80FD</h2><h3 id="\u57FA\u7840\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8F6C\u6362" aria-hidden="true">#</a> \u57FA\u7840\u8F6C\u6362</h3><p>\u57FA\u7840\u8F6C\u6362\u662F\u5E73\u53F0\u63D0\u4F9B\u7684\u57FA\u7840\u8F6C\u6362\u7C7B\u5B9E\u73B0\uFF0C\u53EF\u5728\u9875\u9762\u76F4\u63A5\u8C03\u7528</p><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>bean \u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u63D0\u4F9B\u65B9\u6CD5</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>pageHandle</td><td>\u901A\u8FC7\u4EE3\u7801\u7C7B\u578B\u83B7\u53D6\u4EE3\u7801\u5217\u8868</td><td>direcitorylist(String codeType)</td><td></td></tr><tr><td style="text-align:center;">2</td><td>pageHandle</td><td>\u5E94\u7528\u540D\u79F0\u8F6C\u6362</td><td>applicationLabel(String id)</td><td></td></tr><tr><td style="text-align:center;">3</td><td>pageHandle</td><td>\u90E8\u95E8\u540D\u79F0\u8F6C\u6362</td><td>departmentLabel(String id)</td><td></td></tr><tr><td style="text-align:center;">4</td><td>pageHandle</td><td>\u5217\u51FA\u4EE3\u7801\u7C7B\u578B\u4EE3\u7801</td><td>direcitoryList(String typeName)</td><td>.</td></tr></tbody></table><p>html \u793A\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  \u72B6\u6001\uFF1A
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition[hasStatus]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BF7\u9009\u62E9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item:\${@pageHandle.direcitoryList(<span class="token punctuation">&#39;</span>has_status<span class="token punctuation">&#39;</span>)}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${item.codeValue}<span class="token punctuation">&quot;</span></span>  <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${item.codeName}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u4EE3\u7801\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4EE3\u7801\u8F6C\u6362" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4EE3\u7801\u8F6C\u6362</h3><blockquote><p><strong>\u6B64\u4E3A\u5F3A\u5236\u8981\u6C42\uFF0C\u5982\u4E1A\u52A1\u7EC4\u51FA\u73B0\u8C03\u7528\u4E0D\u89C4\u8303\uFF0C\u5219\u76F4\u63A5\u4F1A\u8BAE\u6279\u8BC4\u6216\u8005\u8B66\u544A</strong></p></blockquote><p>\u89C4\u8303\u5982\u4E0B:</p><ol><li>\u6BCF\u4E00\u4E2A\u5DE5\u7A0B\u7684 pageBean \u7EDF\u4E00\u653E\u5728<code>thymeleaf</code>\u5305\u4E0B\uFF0C\u4E14\u4E0E\u542F\u52A8\u7C7B\u540C\u7EA7</li><li>\u63D0\u4F9B\u7684\u5B9E\u4F53\u540D\u79F0\u7EDF\u4E00\u4EE5<code>PageHandle</code>\u7ED3\u5C3E\uFF0C\u524D\u7F00\u4EE5\u5DE5\u7A0B\u540D\u6807\u8BC6\u4E3A\u524D\u7F00</li><li>\u6BCF\u4E2A\u5B9E\u4F53\u5BF9\u8C61\u5FC5\u987B\u7EE7\u627F<code>com.alinesno.cloud.common.web.base.bean.PageService</code>\u57FA\u7C7B</li></ol><p>\u5982\u5DE5\u7A0B\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>alinesno-cloud-portal-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pageBean \u5B9A\u4E49\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u9875\u9762\u670D\u52A1(\u4F9B\u9875\u9762\u8C03\u7528)
 */</span>
<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">&quot;portalPageHandle&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PortalThymeleafPageService</span> <span class="token keyword">extends</span> <span class="token class-name">PageService</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,20),l=[p];function c(o,i){return n(),s("div",null,l)}var u=a(e,[["render",c],["__file","35_\u4EE3\u7801\u8F6C\u6362\u548C\u89C4\u8303.html.vue"]]);export{u as default};
