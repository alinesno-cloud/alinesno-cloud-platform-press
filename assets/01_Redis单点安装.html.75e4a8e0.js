import{_ as s,o as e,c as n,d as a}from"./app.8b75e2cf.js";const i={},d=a(`<h2 id="redis-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#redis-\u914D\u7F6E" aria-hidden="true">#</a> Redis \u914D\u7F6E</h2><h3 id="redis-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#redis-\u5B89\u88C5" aria-hidden="true">#</a> Redis \u5B89\u88C5</h3><h4 id="\u4E0A\u4F20\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5B89\u88C5" aria-hidden="true">#</a> \u4E0A\u4F20\u5B89\u88C5</h4><p>\u4E0A\u4F20 Redis \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u793A\u4F8B: <span class="token function">scp</span> -r redis-5.0.0.tar.gz alinesno@192.168.1.110:~/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5</h4><p>\u5B89\u88C5\u6E90\u7801\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> <span class="token function">make</span> gcc*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> /opt/alinesno/redis5
<span class="token function">tar</span> -zxvf /home/alinesno/soft/redis-5.0.0.tar.gz -C /opt/alinesno/redis5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1 redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis5
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-5.0.0/conf
<span class="token function">vim</span> redis.conf
daemonize <span class="token function">yes</span> --\u539F\u4E3Ano,\u540E\u53F0\u8FD0\u884Credis<span class="token punctuation">(</span>\u4FEE\u6539\u540E\u542F\u52A8redis,\u4E0D\u51FA\u73B0\u90A3\u79CD\u6240\u8C13\u7684\u86CB\u7CD5\u56FE<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#redis-\u542F\u52A8" aria-hidden="true">#</a> redis \u542F\u52A8</h2><p>\u7F16\u5199 redis-start.sh \u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> redis-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5185\u5BB9\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> ./bin/redis-server ./conf/redis.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u53EF\u6267\u884C\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u6DFB\u52A0\u53EF\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> +x redis-start.sh
<span class="token comment">## \u542F\u52A8</span>
~/redis-5.0.0/redis-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0-redis-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-redis-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 redis \u5F00\u673A\u81EA\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
<span class="token comment"># redis\u5F00\u673A\u81EA\u542F</span>
<span class="token function">sh</span> /opt/alinesno/redis5/redis-5.0.0/redis-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9000\u51FA</p>`,24),l=[d];function r(c,t){return e(),n("div",null,l)}var u=s(i,[["render",r],["__file","01_Redis\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{u as default};
