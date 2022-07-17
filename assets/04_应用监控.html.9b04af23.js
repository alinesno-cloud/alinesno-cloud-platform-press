import{_ as n,o as a,c as s,d as t}from"./app.10b344e9.js";var p="/images/bootadmin_01.png";const e={},c=t(`<h2 id="\u5E94\u7528\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u76D1\u63A7" aria-hidden="true">#</a> \u5E94\u7528\u76D1\u63A7</h2><blockquote><p>\u6B64\u65B9\u5F0F\u5B58\u5728\u5B89\u5168\u6027\u95EE\u9898\uFF0C\u8BF7\u6CE8\u610F\u4F7F\u7528</p></blockquote><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u6B64\u5904\u4F7F\u7528\u7684\u662F<code>Spring Boot Admin</code>\u505A\u4E3A\u5E94\u7528\u76D1\u63A7\uFF0C\u5E76\u7ED3\u5408\u9489\u9489\u901A\u77E5(\u4E0D\u4F7F\u7528\u90AE\u4EF6\u901A\u77E5\u7684\u539F\u56E0\u662F\u90AE\u4EF6\u901A\u77E5\u7684\u5B9E\u65F6\u6027\u4E0D\u8DB3)</p><blockquote><p>\u5176\u4E2D\u901A\u77E5\u7EC4\u4EF6\u4E5F\u7ED3\u5408\u4E86\u9489\u9489\uFF0C\u540C\u65F6\u76D1\u63A7\u653E\u5728\u516C\u7F51\u4E0A\uFF0C\u9700\u8981\u53EF\u4EE5\u8BBF\u95EE\u5230\u4F60\u7684\u5E94\u7528\uFF0C\u624D\u80FD\u76D1\u63A7\u5F97\u5230</p></blockquote><h3 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h3><p>\u6DFB\u52A0\u4F9D\u8D56\u914D\u7F6E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- springboot admin_start --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-spring-boot-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- springboot admin_end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53BB\u6389\u5B89\u5168\u914D\u7F6E\uFF0C\u6B64\u5904\u9700\u624B\u52A8\u6DFB\u52A0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SecurityPermitAllConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frameOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u6DFB\u52A0\u76D1\u63A7\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span><span class="token punctuation">-</span>spring.active.profile=monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u76D1\u63A7" aria-hidden="true">#</a> \u67E5\u770B\u76D1\u63A7</h3><p>\u8BBF\u95EE\u5730\u5740\uFF0C\u8D26\u53F7\u5BC6\u7801\u4E3A:admin/admin</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://bootadmin.alinesno.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76D1\u63A7\u754C\u9762\u5982\u4E0B:</p><p style="text-align:center;"><img src="`+p+'" width="80%"></p>',17),o=[c];function l(i,u){return a(),s("div",null,o)}var k=n(e,[["render",l],["__file","04_\u5E94\u7528\u76D1\u63A7.html.vue"]]);export{k as default};
