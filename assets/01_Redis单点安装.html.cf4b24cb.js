import{_ as a,o as i,c as d,a as n,e as l,d as s,b as r,r as c}from"./app.c471abb8.js";const t={},o=s(`<h1 id="redis-\u5355\u70B9\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#redis-\u5355\u70B9\u5B89\u88C5" aria-hidden="true">#</a> Redis \u5355\u70B9\u5B89\u88C5</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h3><h4 id="\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" aria-hidden="true">#</a> \u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</h4><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><p>\u4F7F\u7528 scp \u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> redis-5.0.0.tar.gz alinesno@192.168.1.110:~/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5</h4><p>\u5B89\u88C5 tcl,\u6B64\u5904<code>make test</code>\u4F7F\u7528</p><div class="language-base ext-base line-numbers-mode"><pre class="language-base"><code>tar xzvf ~/soft/tcl8.6.1-src.tar.gz  -C ~/redis5/
cd  ~/redis5/tcl8.6.1/unix/
sudo ./configure
sudo make
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 redis5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/redis5
<span class="token function">tar</span> -zxvf ~/soft/redis-5.0.0.tar.gz -C ~/redis5/
<span class="token builtin class-name">cd</span> ~/redis5/redis-5.0.0
<span class="token function">make</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/home/alinesno/redis5 <span class="token function">install</span>
<span class="token function">make</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/redis5/conf
<span class="token function">cp</span> ~/redis5/redis5-0.0/redis.conf ~/redis5/conf/
<span class="token function">vim</span> ~/redis5/conf/redis.conf

<span class="token comment"># \u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF0C\u662F\u5426\u5728\u540E\u53F0\u6267\u884C\uFF0Cyes\uFF1A\u540E\u53F0\u8FD0\u884C\uFF1Bno\uFF1A\u4E0D\u662F\u540E\u53F0\u8FD0\u884C\uFF08\u8001\u7248\u672C\u9ED8\u8BA4\uFF09</span>
daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/redis5/redis-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> ./bin/redis-server ./conf/redis.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8 redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> +x ~/redis5/redis-start.sh

<span class="token comment"># \u542F\u52A8\u811A\u672C</span>
~/redis5/redis-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><p>\u9A8C\u8BC1\u662F\u5426\u540E\u53F0\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>~/redis5/bin/redis-cli <span class="token function">ping</span>
<span class="token comment"># \u8FD4\u56DE\u7ED3\u679C\u4E3APONG\u5219\u6B63\u5E38</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BA2\u6237\u7AEF\u8FDE\u63A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>~/redis5/bin/redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u3001\u67E5\u770B\u3001\u5220\u9664 key \u6D4B\u8BD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E00\u6B21\u8BBE\u7F6E 4 \u4E2A key</span>
MSET one <span class="token number">1</span> two <span class="token number">2</span> three <span class="token number">3</span> four <span class="token number">4</span>

<span class="token comment"># \u67E5\u8BE2\u5305\u542B\u6709o\u7684key</span>
KEYS *o*
    <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;four&quot;</span>
    <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
    <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>

redis<span class="token operator">&gt;</span> KEYS t??
    <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>

redis<span class="token operator">&gt;</span> KEYS t<span class="token punctuation">[</span>w<span class="token punctuation">]</span>*
    <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>

KEYS *  <span class="token comment"># \u5339\u914D\u6570\u636E\u5E93\u5185\u6240\u6709 key</span>
    <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;four&quot;</span>
    <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
    <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
    <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ansible-\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#ansible-\u6784\u5EFA" aria-hidden="true">#</a> Ansible \u6784\u5EFA</h2><ul><li>\u811A\u672C\u7F16\u5199</li></ul><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><ul><li>\u6784\u5EFA\u955C\u50CF</li><li>\u4F7F\u7528</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><h3 id="\u8D44\u6599\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6599\u5217\u8868" aria-hidden="true">#</a> \u8D44\u6599\u5217\u8868</h3>`,33),u={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},p=r("GitBook \u5B98\u7F51"),v=s(`<h3 id="redis-\u7684\u4E00\u4E9B\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#redis-\u7684\u4E00\u4E9B\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> redis \u7684\u4E00\u4E9B\u57FA\u672C\u64CD\u4F5C</h3><p>redis \u57FA\u672C\u64CD\u4F5C</p><div class="language-baseh ext-baseh line-numbers-mode"><pre class="language-baseh"><code>cd ~/redis5/bin/

## \u542F\u52A8\u5E76\u540E\u53F0\u8FD0\u884C
./redis-server &amp; nohup

# \u6307\u5B9A\u7AEF\u53E3\u540E\u53F0\u542F\u52A8
./redis-server --port 6380 &amp;

# \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6
./redis-server /etc/redis/6379.conf &amp;

## \u67E5\u662F\u5426\u542F\u52A8
./redis-cli ping

## \u5173\u95ED\u547D\u4EE4
./redis-cli shutdown

# \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\u542F\u52A8
./redis-cli start

# \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\u542F\u52A8
./redis-cli -p 6380

# \u67E5\u770B Redis \u7248\u672C
./redis-cli info | grep redis_version

# \u67E5\u770B\u7AEF\u53E3\u53F7
./redis-cli info | grep tcp_port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(b,h){const e=c("ExternalLinkIcon");return i(),d("div",null,[o,n("ul",null,[n("li",null,[n("a",u,[p,l(e)])])]),v])}var g=a(t,[["render",m],["__file","01_Redis\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{g as default};
