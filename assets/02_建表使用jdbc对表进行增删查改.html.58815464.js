import{_ as a,o as s,c as e,d as n}from"./app.8d06a132.js";var i="/firstlearn/dubbo/101.png",t="/firstlearn/dubbo/102.png",r="/firstlearn/dubbo/103.png",l="/firstlearn/dubbo/104.png",c="/firstlearn/dubbo/105.png",p="/firstlearn/dubbo/106.png",d="/firstlearn/dubbo/107.png";const o={},h=n(`<h1 id="\u5EFA\u8868\u4F7F\u7528-jdbc-\u5BF9\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8868\u4F7F\u7528-jdbc-\u5BF9\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539" aria-hidden="true">#</a> \u5EFA\u8868\u4F7F\u7528 jdbc \u5BF9\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539</h1><h3 id="\u6570\u636E\u5E93\u5EFA\u8868\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u5EFA\u8868\u8BED\u53E5" aria-hidden="true">#</a> \u6570\u636E\u5E93\u5EFA\u8868\u8BED\u53E5</h3><p>\u6253\u5F00 mysql \u7F16\u8F91\u7A97\u53E3\uFF0C\u4F7F\u7528\u67E5\u770B\u548C\u5EFA\u8868\u8BED\u53E5\u64CD\u4F5C\u6570\u636E\u5E93\u5EFA\u8868\uFF1A\uFF08\u7B2C\u4E00\u4E2A\u8868\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u5B66\u751F\u8868\uFF0C\u6DFB\u52A0\u4E86\u4E2A\u4EBA id \u548C\u59D3\u540D\u5217\uFF09</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span> <span class="token punctuation">;</span>
<span class="token keyword">use</span> test <span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span>id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u4F7F\u7528\u7A0B\u5E8F\u5BF9\u6570\u636E\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u7A0B\u5E8F\u5BF9\u6570\u636E\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u7A0B\u5E8F\u5BF9\u6570\u636E\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539\uFF1F</h3><h5 id="\u521D\u59CB\u5316\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u76EE\u5F55" aria-hidden="true">#</a> \u521D\u59CB\u5316\u76EE\u5F55</h5><p>\u5728\u9879\u76EE\u4E2D\u521B\u5EFA\u4E0B\u9762\u56DB\u4E2A\u76EE\u5F55\uFF1Asrc/main/java src/main/resources src/test/java src/test/resources\u3002 \u521B\u5EFA\u6B65\u9AA4\uFF1A\u53F3\u51FB\u4E0B\u9762 src \u6587\u4EF6\u5939\uFF0C\u70B9\u51FB new\uFF0C\u9009\u62E9 folder\uFF0C\u5F55\u5165\u521B\u5EFA\u540D\u5373\u53EF\u3002\uFF08\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\uFF09</p><p><code>\u6CE8\uFF1A\u4E3B\u7A0B\u5E8F\u4E00\u822C\u653E\u5728src/main/java\u8FD9\u4E00\u5C42\u4E0B\u9762\uFF0C\u5355\u4F4D\u6D4B\u8BD5\u7684\u7A0B\u5E8F\u4E00\u822C\u653E\u5728src/test/java\u8FD9\u4E00\u5C42\u4E0B\u9762</code></p><p class="show-images"><img src="`+i+'" width="60%"></p><h5 id="\u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5" aria-hidden="true">#</a> \u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5</h5><p>\u5EFA\u7ACB\u8FDE\u63A5\u6570\u636E\u5E93\u7684 java \u6587\u4EF6\uFF0C\u53D6\u540D\uFF1ADatabaseUtils.java\u3002\u518D\u5EFA\u7ACB\u4E00\u4E2A\u5305\uFF0C\u53D6\u540D\uFF1Acom.learning.helloworld\uFF0C \u628A\u521B\u5EFA\u597D\u7684 java \u6587\u4EF6\u653E\u5230\u8FD9\u4E2A\u5305\u91CC\u9762\uFF08\u5982\u679C\u9879\u76EE\u6BD4\u8F83\u5927\u7684\u8BDD\uFF0C\u4FBF\u4E8E\u7BA1\u7406\uFF09</p><p class="show-images"><img src="'+t+`" width="60%"></p><h5 id="\u521B\u5EFA-java-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-java-\u64CD\u4F5C" aria-hidden="true">#</a> \u521B\u5EFA java \u64CD\u4F5C</h5><p>\u6253\u5F00 java \u6587\u4EF6\uFF0C\u5F00\u59CB\u7F16\u5199\u8FDE\u63A5\u7A0B\u5E8F\uFF1B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>\uFF08\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.cnblogs.com/wuyuegb2312/p/3872607.html#tittle35\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u9996\u5148\u5F15\u5165\u76F8\u5173\u7684\u5305\uFF1B</p><p class="show-images"><img src="`+r+'" width="60%"></p></li><li><p>\u83B7\u53D6\u8FDE\u63A5\uFF0C\u4FEE\u6539 driver \u91CC\u7684\u6570\u636E\u5E93\uFF08\u4FEE\u6539\u6210\u672C\u5730\u5B89\u88C5\u7684\u6570\u636E\u5E93\uFF09\uFF0C\u4FEE\u6539\u6570\u636E\u5E93\u94FE\u63A5\uFF08\u6539\u6210\u81EA\u5DF1\u672C\u5730\u7684\u5E93\u548C\u8868\uFF09\uFF0C\u4FEE\u6539\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</p><p class="show-images"><img src="'+l+`" width="60%"></p></li><li><p>\u521B\u5EFA insert \u65B9\u6CD5\uFF08select\u3001update\u3001delete \u65B9\u6CD5\u7C7B\u4F3C\uFF09 PreparedStatement \u7684\u7528\u6CD5\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>http://www.cnblogs.com/raymond19840709/archive/2008/05/12/1192948.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6570\u636E\u5E93\u6267\u884C\u4E4B\u540E\u4E00\u5B9A\u8981\u8BB0\u5F97\u5173\u95ED\uFF0C\u8BED\u53E5\u5982\u4E0B\u9762\u622A\u56FE\uFF1A</p><p class="show-images"><img src="`+c+'" width="60%"></p></li></ul><ul><li>\u589E\u5220\u67E5\u6539\u7684\u65B9\u6CD5\u5199\u597D\u4E4B\u540E\uFF0C\u521B\u5EFA main \u65B9\u6CD5\u6267\u884C\uFF1A<p class="show-images"><img src="'+p+'" width="60%"></p></li></ul><p>Java \u7A0B\u5E8F\u5199\u597D\u4E4B\u540E\uFF0C\u6267\u884C\u8BED\u53E5\uFF0C\u540E\u53F0\u5C31\u4F1A\u8F93\u51FA\u7ED3\u679C\u3002\uFF08\u5982\u4F55\u67E5\u770B\u6267\u884C\u7684\u9519\u8BEF\uFF1F\uFF09</p><p class="show-images"><img src="'+d+'" width="60%"></p>',19),u=[h];function m(v,b){return s(),e("div",null,u)}var g=a(o,[["render",m],["__file","02_\u5EFA\u8868\u4F7F\u7528jdbc\u5BF9\u8868\u8FDB\u884C\u589E\u5220\u67E5\u6539.html.vue"]]);export{g as default};
