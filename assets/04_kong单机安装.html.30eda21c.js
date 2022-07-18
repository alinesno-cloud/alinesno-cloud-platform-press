import{_ as n,o as s,c as a,d as e}from"./app.53c39bda.js";const i={},l=e(`<h1 id="kong-\u5355\u70B9\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#kong-\u5355\u70B9\u6559\u7A0B" aria-hidden="true">#</a> Kong \u5355\u70B9\u6559\u7A0B</h1><h2 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h2><h3 id="\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" aria-hidden="true">#</a> \u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</h3><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><h3 id="\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u914D\u7F6E</h3><h4 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh kong-1.3.0.el7.amd64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u65E0\u6570\u636E\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u65E0\u6570\u636E\u5E93\u914D\u7F6E" aria-hidden="true">#</a> \u65E0\u6570\u636E\u5E93\u914D\u7F6E</h4><p>\u751F\u6210\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /opt/kong/
<span class="token builtin class-name">cd</span> /opt/kong/
kong config init // \u521D\u59CB\u5316\u914D\u7F6E
<span class="token function">vim</span> kong.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">database</span> <span class="token punctuation">=</span> <span class="token value attr-value">off</span>
<span class="token key attr-name">declarative_config</span> <span class="token punctuation">=</span> <span class="token value attr-value">/opt/kong/kong.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /opt/kong/start.sh
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KONG_ADMIN_LISTEN</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0:8001,0.0.0.0:8443 ssl
kong start -c /opt/kong/kong.conf

<span class="token function">chmod</span> +x /opt/kong/start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u6210\u529F\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EE:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://IP:8001/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u914D\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> \u914D\u7F6E\u6570\u636E\u5E93</h4><p>\u5B89\u88C5 PostgreSQL</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> kong-community-edition-0.14.1.*.noarch.rpm --nogpgcheck
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E yum \u6E90</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u914D\u7F6E\u5B8Cyum\u5E93\u4E4B\u540E\u5378\u8F7D\u4E4B\u524D\u5B89\u88C5\u7684Postgresql
yum erase postgresql*
 \u5220\u9664\u9057\u7559\u7684\u6570\u636E
<span class="token function">rm</span> -rf /var/lib/pgsql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8F7D RPM\uFF08PostgreSQL YUM \u6E90\uFF09\uFF0C\u627E\u5230\u5BF9\u5E94\u7684\u7248\u672C CentOS 7 - x86_64</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u5B89\u88C5yum\u6E90
yum <span class="token function">install</span> https://download.postgresql.org/pub/repos/yum/9.6/redhat/rhel-7-x86_64/pgdg-centos96-9.6-3.noarch.rpm
 \u5B89\u88C5PostgreSQL
yum <span class="token function">install</span> postgresql96-server postgresql96-contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u521D\u59CB\u5316\u6570\u636E\u5E93
/usr/pgsql-9.6/bin/postgresql96-setup initdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PostgreSQL \u670D\u52A1\u63A7\u5236</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> PostgreSQL \u4F7F\u7528systemctl\u4F5C\u4E3A\u670D\u52A1\u6258\u7BA1
<span class="token function">service</span> postgresql-9.6 start/stop/restart/reload
 \u6216\u662F
systemctl start/stop/restart/status postgresql-9.6
 \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F
systemctl <span class="token builtin class-name">enable</span> postgresql-9.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5378\u8F7D\uFF08\u987A\u4FBF\u63D0\u4F9B\u5378\u8F7D PostgreSQL \u7684\u547D\u4EE4\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u5378\u8F7DPostgreSQL
yum erase postgresql96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5BC6\u7801 PostgreSQL \u6570\u636E\u5E93\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E00\u4E2A Linux \u7CFB\u7EDF\u7528\u6237 postgres\uFF0C\u901A\u8FC7 passwd \u547D\u4EE4\u53EF\u4EE5\u8BBE\u7F6E\u5BC6\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u521B\u5EFApostgres\u6570\u636E\u5E93\u8D26\u53F7
su - postgres
psql
ALTER USER postgres WITH PASSWORD &#39;123456&#39;;
\\q

 \u9000\u51FApostgres\u8D26\u53F7
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBE\u7F6E\u8FDC\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8FDC\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u8BBE\u7F6E\u8FDC\u7A0B\u63A7\u5236</h4><p>\u4FEE\u6539<code>vim /var/lib/pgsql/9.6/data/postgresql.conf</code>\u6587\u4EF6\uFF0C\u914D\u7F6E\u53EF\u4EE5\u8FDC\u7A0B\u8BBF\u95EE\uFF08\u6B63\u5F0F\u73AF\u5883\u6309\u7167\u767D\u540D\u5355\u6B63\u786E\u914D\u7F6E\uFF09 \u5C06 listen_addresses \u524D\u7684#\u53BB\u6389\uFF0C\u5E76\u5C06 listen_addresses = &#39;localhost&#39; \u6539\u6210 listen_addresses = &#39;*&#39;\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#------------------------------------------------------------------------------</span>
 CONNECTIONS AND AUTHENTICATION
<span class="token comment">#------------------------------------------------------------------------------</span>
 - Connection Settings -
 \u653E\u5F00IP\u7684\u9650\u5236
listen_addresses <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span>           what IP address<span class="token punctuation">(</span>es<span class="token punctuation">)</span> to listen on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u914D\u7F6E\u6587\u4EF6 <code>vim /var/lib/pgsql/9.6/data/pg_hba.conf</code> \u5C06 IPv4 \u533A\u4E0B\u7684 127.0.0.1/32 \u4FEE\u6539\u4E3A 0.0.0.0/0\uFF1B \u5C06 ident \u4FEE\u6539\u4E3A md5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> TYPE  DATABASE        <span class="token environment constant">USER</span>            ADDRESS                 METHOD
 <span class="token string">&quot;local&quot;</span> is <span class="token keyword">for</span> Unix domain socket connections only
<span class="token builtin class-name">local</span>   all             all                                     peer
<span class="token builtin class-name">local</span>   all             all                                     md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ipv4-local-connections" tabindex="-1"><a class="header-anchor" href="#ipv4-local-connections" aria-hidden="true">#</a> IPv4 local connections:</h4><h5 id="\u5047\u5982-kong-\u7528\u6237\u8BBE\u7F6E\u4E86\u5BC6\u7801-\u9700\u8981\u914D\u7F6E-md5-\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5047\u5982-kong-\u7528\u6237\u8BBE\u7F6E\u4E86\u5BC6\u7801-\u9700\u8981\u914D\u7F6E-md5-\u8BA4\u8BC1" aria-hidden="true">#</a> \u5047\u5982 Kong \u7528\u6237\u8BBE\u7F6E\u4E86\u5BC6\u7801\uFF0C\u9700\u8981\u914D\u7F6E MD5 \u8BA4\u8BC1</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">host</span>    all             all             <span class="token number">127.0</span>.0.1/32            md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u5BB9\u8BB8\u8FDC\u7A0B\u5411-navicat-\u5BA2\u6237\u7AEF\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u8BB8\u8FDC\u7A0B\u5411-navicat-\u5BA2\u6237\u7AEF\u8BBF\u95EE" aria-hidden="true">#</a> \u5BB9\u8BB8\u8FDC\u7A0B\u5411 Navicat \u5BA2\u6237\u7AEF\u8BBF\u95EE</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">host</span>    all             all             <span class="token number">0.0</span>.0.0/0               md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="ipv6-local-connections" tabindex="-1"><a class="header-anchor" href="#ipv6-local-connections" aria-hidden="true">#</a> IPv6 local connections:</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">host</span>    all             all             ::1/128                 ident
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F\u4F7F\u914D\u7F6E\u751F\u6548 \u6CE8\u610F\uFF1A\u5BF9\u5E94\u865A\u62DF\u673A\u6216\u662F\u5728\u975E\u672C\u673A\u7684\u7528\u6237\uFF0C\u9700\u8981\u6CE8\u610F\u9632\u706B\u5899\u7AEF\u53E3\u5F00\u653E\u3002</p><p>\u6DFB\u52A0 Kong \u8D26\u53F7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E3Apostgres\u7528\u6237\u589E\u52A0work\u5206\u7EC4</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -a -G work postgres
 \u6DFB\u52A0kong\u6570\u636E\u5E93\u8D26\u6237\u53CA\u6570\u636E\u5E93
createuser -s -e kong
createdb -E UTF8 -O kong kong
 \u6DFB\u52A0kong\u7CFB\u7EDF\u7528\u6237\u540D
<span class="token function">sudo</span> adduser kong
 \u53EF\u9009 \u4E3Akong\u7CFB\u7EDF\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801
<span class="token function">sudo</span> <span class="token function">passwd</span> kong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u5EFA Kong \u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> - postgres
psql
CREATE <span class="token environment constant">USER</span> kong<span class="token punctuation">;</span>
CREATE DATABASE kong OWNER kong<span class="token punctuation">;</span>
alter user kong with encrypted password <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">\\</span>q
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="konga-\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#konga-\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> konga \u8F6F\u4EF6\u5B89\u88C5</h2><h3 id="\u914D\u7F6E\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8F6F\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u8F6F\u4EF6</h3><p>\u5B89\u88C5\u57FA\u7840\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yun <span class="token function">install</span> nodejs <span class="token function">npm</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g gulp
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g bower
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g sails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 konga</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/pantsel/konga.git
<span class="token builtin class-name">cd</span> konga
<span class="token function">npm</span> <span class="token function">install</span> konga
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-kong-\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-kong-\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E kong \u7684\u914D\u7F6E\u6587\u4EF6</h3><p>\u8C03\u6574\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">whereis</span> kong
$ <span class="token builtin class-name">cd</span> /etc/kong/
$ <span class="token function">cp</span> kong.conf.default kong.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#### \u5185\u5BB9\u5F00\u59CB #####</span>
database <span class="token operator">=</span> postgres
pg_host <span class="token operator">=</span> <span class="token number">10.10</span>.1.179
pg_port <span class="token operator">=</span> <span class="token number">5432</span>
pg_user <span class="token operator">=</span> kong
pg_password <span class="token operator">=</span> <span class="token number">123456</span>
pg_database <span class="token operator">=</span> kong
<span class="token comment">#### \u5185\u5BB9\u7ED3\u675F #####</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316 kong \u7684\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> kong migrations up -c /etc/kong/kong.conf
\u6216\u8005
kong migrations bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8 kong</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kong start -c /etc/kong/kong.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> \u793A\u4F8B\u914D\u7F6E\u4F4D\u7F6E
<span class="token operator">/</span>config<span class="token operator">/</span>local_example<span class="token punctuation">.</span>js

 \u62F7\u8D1D\u4E00\u4EFD
cd <span class="token punctuation">.</span><span class="token operator">/</span>config<span class="token operator">/</span>
cp local_example<span class="token punctuation">.</span>js <span class="token punctuation">.</span><span class="token operator">/</span>local<span class="token punctuation">.</span>js

 \u914D\u7F6E\u9ED8\u8BA4\u6570\u636E\u5E93
vi <span class="token punctuation">.</span><span class="token operator">/</span>local<span class="token punctuation">.</span>js
<span class="token literal-property property">models</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">connection</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_ADAPTER</span> <span class="token operator">||</span> <span class="token string">&#39;localDiskDb&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
 \u6539\u6210
<span class="token literal-property property">models</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">connection</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_ADAPTER</span> <span class="token operator">||</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u7528\u2018mysql\u2019\uFF0C\u2018mongo\u2019\uFF0C\u2018sqlserver\u2019\uFF0C\u2018postgres\u2019</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
 \u4FDD\u5B58

 \u4FEE\u6539\u6570\u636E\u5E93\u9ED8\u8BA4\u914D\u7F6E
vi connections<span class="token punctuation">.</span>js
<span class="token literal-property property">mysql</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token string">&#39;sails-mysql&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_HOST</span> <span class="token operator">||</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PORT</span> <span class="token operator">||</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_USER</span> <span class="token operator">||</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PASSWORD</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_DATABASE</span> <span class="token operator">||</span> <span class="token string">&#39;konga_database&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
 \u6539\u6210
<span class="token literal-property property">mysql</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token string">&#39;sails-mysql&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_HOST</span> <span class="token operator">||</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PORT</span> <span class="token operator">||</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_USER</span> <span class="token operator">||</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PASSWORD</span> <span class="token operator">||</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_DATABASE</span> <span class="token operator">||</span> <span class="token string">&#39;konga_database&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
 \u4FDD\u5B58
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>proot <span class="token comment">// \u8FD9\u91CC\u4E0D\u5EFA\u8BAE\u7528\u660E\u6587\u5BC6\u7801</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> konga_database <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4F\u89C8\u5668\u8F93\u5165 IP:1338\uFF0C\u7AEF\u53E3\u53EF\u4EE5\u5728 local.js \u6539 <br> \u9ED8\u8BA4\u767B\u5F55\u540D admin\uFF0C\u5BC6\u7801\u662F\u4E09\u4E2A admin <br> \u914D\u7F6E kong API \u5730\u5740\u8981\u586B\u5199\u5B8C\u6574\u5730\u5740\uFF0C\u540E\u9762\u4E0D\u8981\u5E26\u2018/\u2019 <br> http://IP:8001</p>`,70),p=[l];function t(o,c){return s(),a("div",null,p)}var d=n(i,[["render",t],["__file","04_kong\u5355\u673A\u5B89\u88C5.html.vue"]]);export{d as default};
