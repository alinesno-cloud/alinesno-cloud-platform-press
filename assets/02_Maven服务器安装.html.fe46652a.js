import{_ as n,r as s,o as i,c as l,a,e as c,d as t,b as r}from"./app.244fac91.js";const d={},o=t(`<h1 id="maven-\u672C\u5730\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#maven-\u672C\u5730\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> Maven \u672C\u5730\u5B89\u88C5\u53CA\u914D\u7F6E</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="\u914D\u7F6E-maven" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-maven" aria-hidden="true">#</a> \u914D\u7F6E Maven</h3><p>\u4E0A\u4F20 \u4E0A\u4F20 maven \u81F3 Linux \u670D\u52A1\u5668<code>/opt/</code>\u76EE\u5F55</p><p>\u5B89\u88C5 maven</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt
<span class="token function">sudo</span> <span class="token function">tar</span> -zxvf apache-maven-3.6.0-bin.tar.gz  <span class="token comment"># \u89E3\u538B\u51FA\u6765\u7684\u8DEF\u5F84\u4E3A:/opt/apache-maven-3.6.0</span>
<span class="token builtin class-name">cd</span> /opt/apache-maven-3.6.0
<span class="token builtin class-name">pwd</span> <span class="token comment"># \u83B7\u53D6\u8DEF\u5F84\uFF0C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0 maven \u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># maven env</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/opt/apache-maven-3.6.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2</span><span class="token operator">=</span><span class="token variable">$M2_HOME</span>/bin
<span class="token comment"># export MAVEN_OPTS=&quot;-Xmx1048m -Xms256m -XX:MaxPermSize=312M&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$M2</span><span class="token builtin class-name">:</span><span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
mvn -v <span class="token comment"># \u67E5\u770Bmvn\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F20\u672C\u5730 maven \u81F3\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -r settings.xml root@192.168.1.110:/opt/apache-maven-3.6.0/conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316 Maven</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn help:system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ansible-\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#ansible-\u6784\u5EFA" aria-hidden="true">#</a> Ansible \u6784\u5EFA</h2><ul><li>\u811A\u672C\u7F16\u5199</li></ul><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><ul><li>\u6784\u5EFA\u955C\u50CF</li><li>\u4F7F\u7528</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,21),p={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},v=r("GitBook \u5B98\u7F51");function m(u,h){const e=s("ExternalLinkIcon");return i(),l("div",null,[o,a("ul",null,[a("li",null,[a("a",p,[v,c(e)])])])])}var k=n(d,[["render",m],["__file","02_Maven\u670D\u52A1\u5668\u5B89\u88C5.html.vue"]]);export{k as default};
