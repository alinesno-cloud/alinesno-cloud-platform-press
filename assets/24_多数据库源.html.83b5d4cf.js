import{_ as e,o as t,c as l,a as n,e as i,d as p,b as s,r as c}from"./app.f76568f5.js";const o={},u=p(`<h1 id="\u591A\u6570\u636E\u5E93\u6E90" tabindex="-1"><a class="header-anchor" href="#\u591A\u6570\u636E\u5E93\u6E90" aria-hidden="true">#</a> \u591A\u6570\u636E\u5E93\u6E90</h1><p>\u591A\u6570\u636E\u5E93\u6E90\uFF0C\u4EE5\u53CA\u5206\u5E03\u5F0F\u4E8B\u52A1\u5904\u7406</p><h2 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u5206\u5E03\u5F0F\u4E8B\u52A1--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jta-atomikos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6559\u7A0B" aria-hidden="true">#</a> \u914D\u7F6E\u6559\u7A0B</h2><p>\u6DFB\u52A0 yaml \u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u65E5\u5FD7\u914D\u7F6E\uFF0C\u6B64\u5904\u4F7F\u7528\u9ED8\u8BA4\u65E5\u5FD7</span>
<span class="token comment">#logging:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>log4j2.yml

 spring
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> test

  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.xa.DruidXADataSource
    <span class="token key atrule">druid</span><span class="token punctuation">:</span>


       WebStatFilter\u914D\u7F6E\uFF0C\u8BF4\u660E\u8BF7\u53C2\u8003Druid Wiki\uFF0C\u914D\u7F6E_\u914D\u7F6EWebStatFilter
      <span class="token key atrule">web-stat-filter</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">urlPattern</span><span class="token punctuation">:</span>
        <span class="token key atrule">exclusions</span><span class="token punctuation">:</span>
        <span class="token key atrule">sessionStatMaxCount</span><span class="token punctuation">:</span>
        <span class="token key atrule">sessionStatEnable</span><span class="token punctuation">:</span>
        <span class="token key atrule">principalSessionName</span><span class="token punctuation">:</span>
        <span class="token key atrule">principalCookieName</span><span class="token punctuation">:</span>
        <span class="token key atrule">profileEnable</span><span class="token punctuation">:</span>
       StatViewServlet\u914D\u7F6E\uFF0C\u8BF4\u660E\u8BF7\u53C2\u8003Druid Wiki\uFF0C\u914D\u7F6E_StatViewServlet\u914D\u7F6E
      <span class="token key atrule">stat-view-servlet</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">urlPattern</span><span class="token punctuation">:</span>
        <span class="token key atrule">resetEnable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">loginUsername</span><span class="token punctuation">:</span> admin
        <span class="token key atrule">loginPassword</span><span class="token punctuation">:</span> <span class="token number">123456</span>
        <span class="token key atrule">allow</span><span class="token punctuation">:</span> 127.0.0.1
        <span class="token key atrule">deny</span><span class="token punctuation">:</span>
      Spring\u76D1\u63A7\u914D\u7F6E\uFF0C\u8BF4\u660E\u8BF7\u53C2\u8003Druid Github Wiki\uFF0C\u914D\u7F6E_Druid\u548CSpring\u5173\u8054\u76D1\u63A7\u914D\u7F6E
      Spring\u76D1\u63A7AOP\u5207\u5165\u70B9\uFF0C\u5982x.y.z.service.*<span class="token punctuation">,</span>\u914D\u7F6E\u591A\u4E2A\u82F1\u6587\u9017\u53F7\u5206\u9694
      <span class="token key atrule">aop-patterns</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> com.chint.springboot.atomikos.<span class="token important">*.service.**</span>


      <span class="token key atrule">systemDB</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> systemDB
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost/test_sys
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> 123456a
         \u4E0B\u9762\u4E3A\u8FDE\u63A5\u6C60\u7684\u8865\u5145\u8BBE\u7F6E\uFF0C\u5E94\u7528\u5230\u4E0A\u9762\u6240\u6709\u6570\u636E\u6E90\u4E2D
         \u521D\u59CB\u5316\u5927\u5C0F\uFF0C\u6700\u5C0F\uFF0C\u6700\u5927
        <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
         \u914D\u7F6E\u83B7\u53D6\u8FDE\u63A5\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4
        <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
         \u914D\u7F6E\u95F4\u9694\u591A\u4E45\u624D\u8FDB\u884C\u4E00\u6B21\u68C0\u6D4B\uFF0C\u68C0\u6D4B\u9700\u8981\u5173\u95ED\u7684\u7A7A\u95F2\u8FDE\u63A5\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
        <span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
         \u914D\u7F6E\u4E00\u4E2A\u8FDE\u63A5\u5728\u6C60\u4E2D\u6700\u5C0F\u751F\u5B58\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
        <span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">30</span>
        <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1
        <span class="token key atrule">validationQueryTimeout</span><span class="token punctuation">:</span> <span class="token number">10000</span>
        <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
         \u6253\u5F00PSCache\uFF0C\u5E76\u4E14\u6307\u5B9A\u6BCF\u4E2A\u8FDE\u63A5\u4E0APSCache\u7684\u5927\u5C0F
        <span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">:</span> <span class="token number">20</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall
         \u901A\u8FC7connectProperties\u5C5E\u6027\u6765\u6253\u5F00mergeSql\u529F\u80FD\uFF1B\u6162SQL\u8BB0\u5F55
        <span class="token key atrule">connectionProperties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000
         \u5408\u5E76\u591A\u4E2ADruidDataSource\u7684\u76D1\u63A7\u6570\u636E
        <span class="token key atrule">useGlobalDataSourceStat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token key atrule">businessDB</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> businessDB

        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost/test_bus
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> 123456a
         \u4E0B\u9762\u4E3A\u8FDE\u63A5\u6C60\u7684\u8865\u5145\u8BBE\u7F6E\uFF0C\u5E94\u7528\u5230\u4E0A\u9762\u6240\u6709\u6570\u636E\u6E90\u4E2D
         \u521D\u59CB\u5316\u5927\u5C0F\uFF0C\u6700\u5C0F\uFF0C\u6700\u5927
        <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
         \u914D\u7F6E\u83B7\u53D6\u8FDE\u63A5\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4
        <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
         \u914D\u7F6E\u95F4\u9694\u591A\u4E45\u624D\u8FDB\u884C\u4E00\u6B21\u68C0\u6D4B\uFF0C\u68C0\u6D4B\u9700\u8981\u5173\u95ED\u7684\u7A7A\u95F2\u8FDE\u63A5\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
        <span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
         \u914D\u7F6E\u4E00\u4E2A\u8FDE\u63A5\u5728\u6C60\u4E2D\u6700\u5C0F\u751F\u5B58\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
        <span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">30</span>
        <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1
        <span class="token key atrule">validationQueryTimeout</span><span class="token punctuation">:</span> <span class="token number">10000</span>
        <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
         \u6253\u5F00PSCache\uFF0C\u5E76\u4E14\u6307\u5B9A\u6BCF\u4E2A\u8FDE\u63A5\u4E0APSCache\u7684\u5927\u5C0F
        <span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">:</span> <span class="token number">20</span>
        <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall
         \u901A\u8FC7connectProperties\u5C5E\u6027\u6765\u6253\u5F00mergeSql\u529F\u80FD\uFF1B\u6162SQL\u8BB0\u5F55
        <span class="token key atrule">connectionProperties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000
         \u5408\u5E76\u591A\u4E2ADruidDataSource\u7684\u76D1\u63A7\u6570\u636E
        <span class="token key atrule">useGlobalDataSourceStat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment">#jta\u76F8\u5173\u53C2\u6570\u914D\u7F6E</span>
  <span class="token key atrule">jta</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-dir</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>tx<span class="token punctuation">-</span>logs
    <span class="token key atrule">transaction-manager-id</span><span class="token punctuation">:</span> txManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u793A\u4F8B</p>`,8),r=s("\u67E5\u770B\u793A\u4F8B: "),d={href:"https://github.com/switchII/springboot-atomikos",target:"_blank",rel:"noopener noreferrer"},k=s("springboot-atomikos"),v=n("p",null,"\u76F4\u63A5\u5BFC\u5165\u8FD0\u884C\u5373\u53EF",-1);function m(b,y){const a=c("ExternalLinkIcon");return t(),l("div",null,[u,n("ul",null,[n("li",null,[r,n("a",d,[k,i(a)])])]),v])}var h=e(o,[["render",m],["__file","24_\u591A\u6570\u636E\u5E93\u6E90.html.vue"]]);export{h as default};
