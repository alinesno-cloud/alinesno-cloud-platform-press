import{_ as n,o as a,c as s,d as e}from"./app.dd55aad1.js";var t="/images/zipkin_01.png",p="/images/zipkin_02.png";const i={},c=e(`<h2 id="\u94FE\u8DEF\u8DDF\u8E2A" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8DEF\u8DDF\u8E2A" aria-hidden="true">#</a> \u94FE\u8DEF\u8DDF\u8E2A</h2><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u6B64\u5904\u4F7F\u7528\u7684\u662F zikpin \u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A</p><h3 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h3><p>\u6B64\u5904\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u516C\u7F51\u7684<code>zikpin</code>\uFF0C\u5373\u8FDE\u63A5\u7684\u5730\u5740\u4E3A:<code>http://zipkin.alinesno.com</code>\uFF0C\u5982\u9700\u8C03\u6574\uFF0C \u53EF\u5728\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F20\u9012\u53C2\u6570\uFF0C\u4EE5\u4E0B\u4E3A\u94FE\u8DEF\u8DDF\u8E2A\u76D1\u63A7\u914D\u7F6E</p><p>\u6DFB\u52A0 maven \u6587\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- zipkin_start --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zipkin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- zipkin_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u914D\u7F6E\u5DF2\u7ECF\u5728<code>monitor</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5E94\u7528\u76D1\u63A7,zipkin/springbootadmin</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">zipkin</span><span class="token punctuation">:</span>
    <span class="token key atrule">base-url</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>SPRING_ZIPKIN_BASE_URL<span class="token punctuation">:</span>http<span class="token punctuation">:</span>//zipkin.alinesno.com/<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u65F6\u6DFB\u52A0<code>monitor</code>\u914D\u7F6E:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">--</span>spring<span class="token punctuation">.</span>active<span class="token punctuation">.</span>profile<span class="token operator">=</span>monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76D1\u63A7\u754C\u9762\u5982\u4E0B:</p><p style="text-align:center;"><img src="`+t+'" width="80%"></p><p>\u94FE\u8DEF\u8DDF\u8E2A:</p><p style="text-align:center;"><img src="'+p+'" width="80%"></p>',15),o=[c];function l(d,r){return a(),s("div",null,o)}var k=n(i,[["render",l],["__file","03_\u94FE\u8DEF\u8DDF\u8E2A.html.vue"]]);export{k as default};
