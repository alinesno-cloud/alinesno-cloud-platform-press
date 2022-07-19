import{_ as a}from"./undraw_winter_designer_a2m7.4aaa7b29.js";import{_ as s,o as n,c as t,d as e}from"./app.0b432d60.js";var p="/images/01_prometheus.png",o="/images/02_prometheus.png";const c={},l=e('<h2 id="prometheus-\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#prometheus-\u76D1\u63A7" aria-hidden="true">#</a> Prometheus \u76D1\u63A7</h2><p class="show-images"><img src="'+a+`" width="40%"></p><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u6B64\u5904\u9488\u5BF9\u7684\u662F prometheus \u76D1\u63A7\uFF0C\u901A\u8FC7\u63D0\u4F9B\u53C2\u6570\u503C\u7ED9 prometheus\uFF0C\u7136\u540E\u5728 grafana \u663E\u793A</p><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3><p>\u76D1\u63A7\u914D\u7F6E\u5DF2\u7ECF\u5728\u914D\u7F6E\u9879\u76EE\u4E2D\u6DFB\u52A0\uFF0C\u5728\u6240\u9700\u8981\u63D0\u4F9B\u6307\u6807\u7684\u5E94\u7528\u6DFB\u52A0\u76D1\u63A7\u4F9D\u8D56\u5373\u53EF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- prometheus\u76D1\u63A7_start --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.micrometer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>micrometer-registry-prometheus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- prometheus\u76D1\u63A7_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u94FE\u63A5<code>http://localhost:8080/actuator/prometheus</code>\uFF0C\u6548\u679C\u5982\u4E0B:</p><p class="show-images"><img src="`+p+'" width="100%"></p><p>\u5728 grafana \u7684\u663E\u793A\u6548\u679C\u5982\u4E0B:</p><p class="show-images"><img src="'+o+'" width="100%"></p><h3 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h3><ul><li>\u7565</li></ul>',13),i=[l];function r(u,d){return n(),t("div",null,i)}var k=s(c,[["render",r],["__file","06_prometheus\u76D1\u63A7.html.vue"]]);export{k as default};
