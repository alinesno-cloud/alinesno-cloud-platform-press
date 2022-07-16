import{_ as e,o as a,c as n,d as s}from"./app.da414333.js";const i={},l=s(`<h1 id="\u767B\u9646\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u767B\u9646\u914D\u7F6E" aria-hidden="true">#</a> \u767B\u9646\u914D\u7F6E</h1><p>\u767B\u9646\u7684\u4E00\u4E9B\u914D\u7F6E\uFF0C\u5E38\u7528\u7684\u9A8C\u8BC1\u7801\u548C\u9519\u8BEF\u6B21\u6570\uFF0C\u624B\u673A\u9A8C\u8BC1\u7801\u6216\u8005\u90AE\u7BB1\u9A8C\u8BC1\u7801\u5F00\u542F</p><h2 id="\u81EA\u5B9A\u4E49-realm-\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-realm-\u767B\u9646" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 realm \u767B\u9646</h2><p>\u4E3B\u8981\u7528\u4E8E\u81EA\u5B9A\u4E49\u573A\u666F\uFF0C\u6BD4\u5982\u9875\u9762\uFF0C\u767B\u9646\u65B9\u5F0F\uFF0C\u5982 qq\u3001\u5FAE\u4FE1\u3001\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u7801\u7B49\u591A\u79CD\u573A\u666F\u767B\u9646\uFF0C\u5728<code>classpath</code>\u4E0B\u6DFB\u52A0<code>shiro.properties</code>\u914D\u7F6E\uFF0C\u4F8B\u5982:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>[main]
 \u5355\u4E2A
<span class="token key attr-name">shiro.realm.person</span><span class="token punctuation">=</span><span class="token value attr-value">com.alinesno.cloud.lad.simple.student.manager.shiro.PersonRealm</span>

 \u591A\u4E2A
<span class="token key attr-name">shiro.realm.person</span><span class="token punctuation">=</span><span class="token value attr-value">com.alinesno.cloud.shiro.QQRealm|com.alinesno.cloud.lad.shiro.WechatRealm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u767B\u9646\u9519\u8BEF\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u767B\u9646\u9519\u8BEF\u6B21\u6570" aria-hidden="true">#</a> \u767B\u9646\u9519\u8BEF\u6B21\u6570</h2><p>yaml \u6587\u4EF6\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code> \u9ED8\u8BA4\u4E3A5\u6B21
<span class="token key atrule">alinesno.login.max-retry</span><span class="token punctuation">:</span> <span class="token number">5</span>

 \u9519\u8BEF\u8D26\u6237\u9501\u4F4F\u65F6\u95F4(\u5206\u949F)\uFF0C\u9ED8\u8BA460\u5206\u949F
<span class="token key atrule">alinesno.login.lock-time</span><span class="token punctuation">:</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9A8C\u8BC1\u7801\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u7801\u5F00\u542F" aria-hidden="true">#</a> \u9A8C\u8BC1\u7801\u5F00\u542F</h2><p>\u9A8C\u8BC1\u7801\u5F00\u542F\u5728\u540E\u53F0<code>\u7CFB\u7EDF\u53C2\u6570</code>\uFF0C\u8BBE\u7F6E<code>sys.captcha.status</code>\u5373\u53EF\uFF0C\u9ED8\u8BA4\u4E3A\u5F00\u542F\u9A8C\u8BC1\u7801\u3002</p><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,12),r=[l];function d(c,o){return a(),n("div",null,r)}var p=e(i,[["render",d],["__file","30_\u767B\u9646\u914D\u7F6E.html.vue"]]);export{p as default};
