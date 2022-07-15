import{_ as i,o as l,c as r,a,e as t,d as s,b as d,r as c}from"./app.b0fd3ab3.js";const o={},p=s(`<h1 id="jira-\u8F6F\u4EF6\u5B89\u88C5\u53CA\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#jira-\u8F6F\u4EF6\u5B89\u88C5\u53CA\u4F18\u5316" aria-hidden="true">#</a> Jira \u8F6F\u4EF6\u5B89\u88C5\u53CA\u4F18\u5316</h1><blockquote><p>Jira \u662F\u57FA\u4E8E java \u5F00\u53D1\u7684\u8F6F\u4EF6\uFF0C\u6240\u4EE5 JDK \u662F\u5FC5\u987B\u7684\uFF0CJDK1.7/1.8 \u90FD\u53EF\u4EE5\u3002</p></blockquote><h3 id="\u670D\u52A1\u5668\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5B89\u88C5" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5B89\u88C5</h3><p>\u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -r atlassian-jira-software-7.4.1-x64.bin alinesno@192.168.1.110:~/soft/
<span class="token function">scp</span> -r mysql-connector-java-5.1.39-bin.jar alinesno@192.168.1.110:~/soft/
<span class="token function">scp</span> -r atlassian-extras-3.2.jar alinesno@192.168.1.110:~/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u6570\u636E\u5E93\u8BF7\u770B\u5BF9\u5E94\u7AE0\u8282\uFF0C\u4E3A Jira \u521B\u5EFA\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u3001\u7528\u6237\u540D\u548C\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>create database alinesno_cloud_platform_jira default character <span class="token builtin class-name">set</span> utf8 collate utf8_bin<span class="token punctuation">;</span>
grant all on jira.* to <span class="token string">&#39;jira&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;1234qwer&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u6743\u9650\u5E76\u5B89\u88C5,\u6B64\u5904\u7AEF\u53E3\u8BBE\u7F6E\u4E3A<code>18080</code>\u548C<code>18085</code>,\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u907F\u514D\u51B2\u7A81</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x atlassian-jira-software-7.4.1-x64.bin
./atlassian-jira-software-7.4.1-x64.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --add-port<span class="token operator">=</span><span class="token number">18080</span>/tcp --permanent
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">18005</span>/tco --permanent
firewall-cmd --reload
<span class="token comment"># jira\u65E5\u5FD7:</span>
<span class="token function">tail</span> -f /opt/atlassian/jira/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0 mysql \u6570\u636E\u5E93\u652F\u6301</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0A\u4F20mysql\u9A71\u52A8</span>
<span class="token function">cp</span> -a mysql-connector-java-5.1.39-bin.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
<span class="token comment"># \u66FF\u6362jira\u7834\u89E3\u5305</span>
<span class="token function">cp</span> -a atlassian-extras-3.2.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F jira \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> jira start
<span class="token function">service</span> jira start
<span class="token comment">##\u67E5\u770B\u670D\u52A1\u8FD0\u884C\u60C5\u51B5</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> jira
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jira-\u5BA2\u6237\u7AEF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#jira-\u5BA2\u6237\u7AEF\u914D\u7F6E" aria-hidden="true">#</a> Jira \u5BA2\u6237\u7AEF\u914D\u7F6E</h3><p>\u6D4F\u89C8\u5668\u91CC\u8F93\u5165<code>http://$IP:18080</code> ,\u8BED\u8A00\u9009\u62E9\u4E2D\u6587, \u9009\u62E9\u201C\u6211\u5C06\u8BBE\u7F6E\u5B83\u81EA\u5DF1\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u4E0B\u4E00\u6B65\uFF1A</p><p>\u6570\u636E\u5E93\u8BBE\u7F6E \u70B9\u51FB\u5176\u5B83\u6570\u636E\u5E93\uFF0C\u9009\u62E9 MySQL \u6570\u636E\u5E93\uFF0C\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u914D\u7F6E\u597D\u540E\uFF0C \u5148\u6D4B\u8BD5\u8FDE\u63A5\uFF0C\u518D\u4E0B\u4E00\u6B65\uFF0C\uFF08\u63D0\u793A\uFF1A\u8BF7\u7B49\u5F85\u6570\u636E\u5E93\u7684\u8BBE\u7F6E\u3002\u8FD9\u53EF\u80FD\u4F1A\u82B1\u8D39\u4E00\u5206\u949F\u7684\u65F6\u95F4\uFF09\u5982\u679C\u9875\u9762\u62A5\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\uFF0C\u7B49\u6570\u636E\u5165\u5E93\u5B8C\u6210\u540E\uFF0C\u518D\u6B21\u5237\u65B0\u9875\u9762\u3002 \u8FDE\u63A5\u6570\u636E\u5E93\u7684\u914D\u7F6E\u662F<code>/var/atlassian/application-data/jira/dbconfig.xml</code></p><h3 id="jira-\u4F18\u5316\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#jira-\u4F18\u5316\u7A0B\u5E8F" aria-hidden="true">#</a> Jira \u4F18\u5316\u7A0B\u5E8F</h3><p>\u70B9\u51FB\u751F\u6210 Jira \u8BD5\u7528\u8BB8\u53EF\u8BC1&quot;generate a JIRA trial license&quot;\u7533\u8BF7\u8BD5\u7528\uFF0C30 \u5929\uFF0C\u6B64\u5904\u9700\u8981\u8BBF\u95EE\u5B98\u7F51\uFF0C\u5230\u5B98\u7F51\u7533\u8BF7\u8BD5\u7528</p>`,21),u=["src"],v=s(`<p>\u7533\u8BF7\u5F97\u5230\u5BC6\u94A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>id: B4JH-GAVY-50CF-KU0P
key: AAABfQ0ODAoPeNp9kUFvgkAQhe/8CpJe2sMSRDStCUktbFutqBE1adLLFkfdBnbJ7GLrvy8CTbVij
7Pw5n3vzVUohdnP0HQc0+72nG7P7pp+MDcdu3VnbBBAbGWWAVojHoNQQFdccyk8Op7T2XQ2iKgxz
tN3wMl6oQCVR1qGL4VmsR6zFLwkl0yspLjfpIwnVixT44Mjs85E0xzjLVMQMA3ewZ3YLnEco/ad7
zMoF/qTMKQzf9Af/XyiXxnH/ZGuc9DVEDQsbJsoIsAd4CDwHtzhM3nqL19Jx/YfycvCnlaIGcpVH
mvrMBAl1/qTIVjFTr4DT2MO1W+Xi2morylGQSg0CCbiC1H+oTmrsfYpco0GQUTHZNRqu7dut9U2i
sk7fflncaQZakBvzRIFxgQ3THDFyoQs4QKUkEQDSw0foXz+e7ekAlkWXAeRc9IGFIExQ67qIgNQM
fKsXD8sOMyo5jCvqzvdvPVMumNJXnpV4Jcu0dTxsfmx7ndnNX8DiXwM7DAsAhQtJxzLvtZctApsW
+t4gS12hDJthAIUTRN37qVChweiXfzb5fH2gMFbf10=X02ii
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u4E00\u6B65\u914D\u7F6E\u7533\u8BF7\u6743\u9650\uFF0C\u6B64\u5904\u8FD9\u4E00\u6B65\u9700\u8981\u7B49\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EF\u4EE5\u770B jira \u7684\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tail</span> -100f /opt/atlassian/jira/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),h=["src"],b=a("p",null,"\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210,\u914D\u7F6E\u90AE\u4EF6\u53D1\u9001\u6309\u524D\u671F\u9879\u76EE\u7EC4\u516C\u5171\u90AE\u4EF6\u5373\u53EF.",-1),m=["src"],f=a("p",null,"\u5B89\u88C5\u5B8C\u6210",-1),g=["src"],_=s('<h2 id="ansible-\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#ansible-\u6784\u5EFA" aria-hidden="true">#</a> Ansible \u6784\u5EFA</h2><ul><li>\u811A\u672C\u7F16\u5199</li></ul><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><ul><li>\u6784\u5EFA\u955C\u50CF</li><li>\u4F7F\u7528</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',5),k={href:"https://blog.51cto.com/moerjinrong/2287899",target:"_blank",rel:"noopener noreferrer"},j=d("RHEL/CentOS \u5B89\u88C5 Jira 7.11.2");function x(n,J){const e=c("ExternalLinkIcon");return l(),r("div",null,[p,a("img",{src:n.$withBase("/operation/jira_02.jpg")},null,8,u),v,a("img",{src:n.$withBase("/operation/jira_03.jpg")},null,8,h),b,a("img",{src:n.$withBase("/operation/jira_04.jpeg")},null,8,m),f,a("img",{src:n.$withBase("/operation/jira_05.png")},null,8,g),_,a("ul",null,[a("li",null,[a("a",k,[j,t(e)])])])])}var q=i(o,[["render",x],["__file","01_Jira\u8F6F\u4EF6\u5B89\u88C5\u53CA\u7834\u89E3.html.vue"]]);export{q as default};
