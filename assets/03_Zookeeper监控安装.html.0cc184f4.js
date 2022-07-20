import{_ as n,o as s,c as i,a as e,e as o,d as l,b as r,r as d}from"./app.5803e911.js";const c={},t=l(`<h1 id="zookeeper-\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#zookeeper-\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> zookeeper \u5B89\u88C5\u914D\u7F6E</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>Linux \u4E0A zookeeper \u7684\u5355\u70B9\u5B89\u88C5\u6559\u7A0B</li><li>Linux \u4E0A zookeeper \u7684\u96C6\u7FA4\u5B89\u88C5\u6559\u7A0B</li></ul><h2 id="\u5355\u70B9\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u5B89\u88C5" aria-hidden="true">#</a> \u5355\u70B9\u5B89\u88C5</h2><ul><li><p>\u4E0A\u4F20 zookeeper3.4.6 \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/zookeeper</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote></li><li><p>\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/alinesno/zookeeper
<span class="token function">tar</span> -zxvf zookeeper-3.4.6.tar.gz  <span class="token comment"># \u89E3\u538B\u4E4B\u540Ezk\u8DEF\u5F84\u4E3A /home/alinesno/zookeeper/zookeeper-3.4.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u73AF\u5883\u53D8\u91CF\u914D\u7F6E \u521B\u5EFA\u65E5\u5FD7\u548C\u6570\u636E\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/alinesno/zookeeper/data   <span class="token comment"># \u6570\u636E\u8DEF\u5F84</span>
<span class="token function">mkdir</span> -p /home/alinesno/zookeeper/logs   <span class="token comment"># \u65E5\u5FD7\u8DEF\u5F84</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u590D\u5236\u9ED8\u8BA4\u914D\u7F6E\u4E3Azoo.cfg</span>
<span class="token builtin class-name">cd</span> /home/alinesno/zookeeper/zookeeper-3.4.6/conf/
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4EE5\u4E0B\u4E24\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /home/alinesno/zookeeper/zookeeper-3.4.6/conf/zoo.cfg

# \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9
dataDir=/home/alinesno/zookeeper/data
dataLogDir=/home/alinesno/zookeeper/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8 zk</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/alinesno/zookeeper/zookeeper-3.4.6/bin   <span class="token comment"># \u8FDB\u5165zk\u76EE\u5F55</span>

./zkServer.sh start   <span class="token comment"># \u542F\u52A8zk\u65E5\u5FD7</span>
./zkServer.sh status  <span class="token comment"># \u67E5\u770B\u542F\u52A8\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u96C6\u7FA4\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u5B89\u88C5" aria-hidden="true">#</a> \u96C6\u7FA4\u5B89\u88C5</h2><blockquote><p>zk \u96C6\u7FA4\u5B89\u88C5\u53EA\u80FD\u4E3A 2n+1 \u5355\u6570(\u5982 1/3/5)\uFF0C\u96C6\u7FA4\u6570\u91CF\u4E0D\u80FD\u4E3A\u5076\u6570</p></blockquote><ul><li>\u73AF\u5883\u53D8\u91CF</li><li>zk \u914D\u7F6E</li><li>\u96C6\u7FA4\u542F\u52A8</li></ul><h2 id="ansible-\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#ansible-\u6784\u5EFA" aria-hidden="true">#</a> Ansible \u6784\u5EFA</h2><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><ul><li>\u6784\u5EFA\u955C\u50CF</li><li>\u4F7F\u7528</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,12),p={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},h=r("GitBook \u5B98\u7F51");function u(m,v){const a=d("ExternalLinkIcon");return s(),i("div",null,[t,e("ul",null,[e("li",null,[e("a",p,[h,o(a)])])])])}var b=n(c,[["render",u],["__file","03_Zookeeper\u76D1\u63A7\u5B89\u88C5.html.vue"]]);export{b as default};
