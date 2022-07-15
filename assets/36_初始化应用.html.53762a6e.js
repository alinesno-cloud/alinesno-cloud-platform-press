import{_ as a,o as s,c as n,d as e}from"./app.a5454e64.js";const t={},p=e(`<h1 id="springboot-\u521D\u59CB\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#springboot-\u521D\u59CB\u5316\u811A\u672C" aria-hidden="true">#</a> SpringBoot \u521D\u59CB\u5316\u811A\u672C</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6B64\u9488\u5BF9\u7684\u662F SpringBoot \u521D\u59CB\u5316\u7684\u95EE\u9898\uFF0C\u5373\u7B2C\u4E00\u6B21\u90E8\u7F72\uFF0C\u81EA\u52A8\u521D\u59CB\u5316\u811A\u672C\u548C\u76F8\u5173\u73AF\u5883\u53D8\u91CF\uFF0C \u9879\u76EE\u542F\u52A8\u65F6\uFF0C\u626B\u63CF\u67D0\u5F20\u8868\uFF0C\u5F53\u8868\u8BB0\u5F55\u6570\u4E3A 0 \u65F6\uFF0C\u63D2\u5165\u591A\u6761\u8BB0\u5F55\uFF1B\u5927\u4E8E 0 \u65F6\uFF0C\u8DF3\u8FC7\u3002</p><h2 id="\u521D\u59CB\u5316\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8FC7\u7A0B" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8FC7\u7A0B</h2><p>\u6267\u884C\u6587\u4EF6\u4E2D\u7684 sql \u8BED\u53E5\u53EF\u4EE5\u662F DDL \u811A\u672C\u6216 DML \u811A\u672C</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>schema.sql  schema.sql\u4E2D\u4E00\u822C\u5B58\u653E\u7684\u662FDDL\u811A\u672C\uFF0C\u5373\u901A\u5E38\u4E3A\u521B\u5EFA\u6216\u66F4\u65B0\u5E93\u8868\u7684\u811A\u672C
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>data.sql  data.sql\u4E2D\u4E00\u822C\u662FDML\u811A\u672C\uFF0C\u5373\u901A\u5E38\u4E3A\u6570\u636E\u63D2\u5165\u811A\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u591A\u4E2A sql \u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">pring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>schema_1.sql<span class="token punctuation">,</span> classpath<span class="token punctuation">:</span>schema_2.sql
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>data_1.sql<span class="token punctuation">,</span> classpath<span class="token punctuation">:</span>data_2.sql

 \u6216
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>schema_1.sql
      <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>schema_2.sql
    <span class="token key atrule">data</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>data_1.sql
      <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>data_2.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u73AF\u5883\u4E0D\u540C\u811A\u672C</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">:</span>dev<span class="token punctuation">}</span>/schema.sql
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">:</span>dev<span class="token punctuation">}</span>/data.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u6570\u636E\u5E93</p><blockquote><p>\u63D0\u9192\uFF1Aplatform \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u662F&#39;all&#39;\uFF0C\u6240\u4EE5\u5F53\u6709\u5728\u4E0D\u540C\u6570\u636E\u5E93\u5207\u6362\u7684\u60C5\u51B5\u4E0B\u624D\u4F7F\u7528\u5982\u4E0A\u914D\u7F6E\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u503C\u7684\u60C5\u51B5\u4E0B\uFF0Cspring boot \u4F1A\u81EA\u52A8\u68C0\u6D4B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">:</span>dev<span class="token punctuation">}</span>/schema<span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.datasource.platform<span class="token punctuation">}</span>.sql
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">:</span>dev<span class="token punctuation">}</span>/data<span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.datasource.platform<span class="token punctuation">}</span>.sql
    <span class="token key atrule">platform</span><span class="token punctuation">:</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u793A\u4F8B\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u811A\u672C" aria-hidden="true">#</a> \u793A\u4F8B\u811A\u672C</h2><blockquote><p>\u5F85\u8865\u5145</p></blockquote><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,17),l=[p];function c(i,u){return s(),n("div",null,l)}var d=a(t,[["render",c],["__file","36_\u521D\u59CB\u5316\u5E94\u7528.html.vue"]]);export{d as default};
