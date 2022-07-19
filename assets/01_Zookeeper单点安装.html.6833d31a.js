import{_ as e,o as n,c as s,d as a}from"./app.879cb312.js";const o={},i=a(`<h1 id="zookeeper-\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#zookeeper-\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> zookeeper \u5B89\u88C5\u914D\u7F6E</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>Linux \u4E0A zookeeper \u7684\u5355\u70B9\u5B89\u88C5\u6559\u7A0B</li><li>Linux \u4E0A zookeeper \u7684\u96C6\u7FA4\u5B89\u88C5\u6559\u7A0B</li></ul><h2 id="\u5355\u70B9\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u5B89\u88C5" aria-hidden="true">#</a> \u5355\u70B9\u5B89\u88C5</h2><ul><li><p>\u4E0A\u4F20 zookeeper3.4.6 \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/zookeeper</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote></li><li><p>\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/alinesno/zookeeper
<span class="token function">tar</span> -zxvf zookeeper-3.4.6.tar.gz   \u89E3\u538B\u4E4B\u540Ezk\u8DEF\u5F84\u4E3A /home/alinesno/zookeeper/zookeeper-3.4.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u73AF\u5883\u53D8\u91CF\u914D\u7F6E \u521B\u5EFA\u65E5\u5FD7\u548C\u6570\u636E\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/alinesno/zookeeper/data    \u6570\u636E\u8DEF\u5F84
<span class="token function">mkdir</span> -p /home/alinesno/zookeeper/logs    \u65E5\u5FD7\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u590D\u5236\u9ED8\u8BA4\u914D\u7F6E\u4E3Azoo.cfg
<span class="token builtin class-name">cd</span> /home/alinesno/zookeeper/zookeeper-3.4.6/conf/
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u4EE5\u4E0B\u4E24\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /home/alinesno/zookeeper/zookeeper-3.4.6/conf/zoo.cfg

 \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9
dataDir=/home/alinesno/zookeeper/data
dataLogDir=/home/alinesno/zookeeper/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8 zk</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/alinesno/zookeeper/zookeeper-3.4.6/bin    \u8FDB\u5165zk\u76EE\u5F55

./zkServer.sh start    \u542F\u52A8zk\u65E5\u5FD7
./zkServer.sh status   \u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u6DFB\u52A0-zookeeper-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-zookeeper-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 zookeeper \u5F00\u673A\u81EA\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
 zookeeper\u5F00\u673A\u81EA\u542F
/home/alinesno/zookeeper/zookeeper-3.4.6/bin/zkServer.sh start\`\`\`
\u4FDD\u5B58\u540E\u9000\u51FA

<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token comment">## \u96C6\u7FA4\u5B89\u88C5 --&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token operator">&gt;</span> zk\u96C6\u7FA4\u5B89\u88C5\u53EA\u80FD\u4E3A2n+1\u5355\u6570<span class="token punctuation">(</span>\u59821/3/5<span class="token punctuation">)</span>\uFF0C\u96C6\u7FA4\u6570\u91CF\u4E0D\u80FD\u4E3A\u5076\u6570 --<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- - \u73AF\u5883\u53D8\u91CF --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- - zk\u914D\u7F6E --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- - \u96C6\u7FA4\u542F\u52A8 --<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token comment">## Ansible\u6784\u5EFA --&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token comment">## \u955C\u50CF --&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- - \u6784\u5EFA\u955C\u50CF --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- - \u4F7F\u7528 --<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token comment">## \u53C2\u8003\u8D44\u6599 --&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- - <span class="token punctuation">[</span>GitBook\u5B98\u7F51<span class="token punctuation">]</span><span class="token punctuation">(</span>http://www.baidu.com<span class="token punctuation">)</span> --<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[i];function r(p,t){return n(),s("div",null,l)}var d=e(o,[["render",r],["__file","01_Zookeeper\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{d as default};
