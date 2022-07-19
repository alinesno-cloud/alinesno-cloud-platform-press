import{_ as l,o as i,c as o,a as s,e as a,d as r,b as e,r as t}from"./app.847a508b.js";const c={},p=r(`<h1 id="mysql-\u5355\u70B9\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#mysql-\u5355\u70B9\u6559\u7A0B" aria-hidden="true">#</a> MySQL \u5355\u70B9\u6559\u7A0B</h1><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><blockquote><p>\u5B89\u88C5\u8FC7\u7A0B\u4F7F\u7528 root \u64CD\u4F5C</p></blockquote><p>\u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -r mysql-server-mysql-5.7.24.tar.gz root@192.168.1.110:/opt/
<span class="token function">scp</span> -r boost_1_59_0.tar.gz root@192.168.1.110:/opt/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y cmake , <span class="token function">make</span> , gcc , gcc-c++ , bison , ncurses , ncurses-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u538B\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">tar</span> -zxvf boost_1_59_0.tar.gz -C /usr/local/
<span class="token function">tar</span> -zxvf mysql-server-mysql-5.7.24.tar.gz
<span class="token builtin class-name">cd</span> mysql-server-mysql-5.7.24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u7528\u6237,\u6DFB\u52A0 mysql \u7528\u6237\u7EC4\u548C mysql \u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> -r -g mysql -s /bin/false mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u6E90\u7801,\u5176\u4E2D\u53C2\u6570\u8BF4\u660E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cmake <span class="token builtin class-name">.</span> -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span>/usr/local/mysql <span class="token punctuation">\\</span>
-DMYSQL_DATADIR<span class="token operator">=</span>/usr/local/mysql/data <span class="token punctuation">\\</span>
-DWITH_BOOST<span class="token operator">=</span>/usr/local/boost_1_59_0 <span class="token punctuation">\\</span>
-DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\\</span>
-DEFAULT_CHARSET<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span>
-DDEFAULT_COLLATION<span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\\</span>
-DENABLED_LOCAL_INFILE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DEXTRA_CHARSETS<span class="token operator">=</span>all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>DCMAKE_INSTALL_PREFIX\uFF1A\u5B89\u88C5\u8DEF\u5F84</li><li>DMYSQL_DATADIR\uFF1A\u6570\u636E\u5B58\u653E\u76EE\u5F55</li><li>DWITH_BOOST\uFF1Aboost \u6E90\u7801\u8DEF\u5F84</li><li>DSYSCONFDIR\uFF1Amy.cnf \u914D\u7F6E\u6587\u4EF6\u76EE\u5F55</li><li>DEFAULT_CHARSET\uFF1A\u6570\u636E\u5E93\u9ED8\u8BA4\u5B57\u7B26\u7F16\u7801</li><li>DDEFAULT_COLLATION\uFF1A\u9ED8\u8BA4\u6392\u5E8F\u89C4\u5219</li><li>DENABLED_LOCAL_INFILE\uFF1A\u5141\u8BB8\u4ECE\u672C\u6587\u4EF6\u5BFC\u5165\u6570\u636E</li><li>DEXTRA_CHARSETS\uFF1A\u5B89\u88C5\u6240\u6709\u5B57\u7B26\u96C6</li></ul><p>\u7F16\u8BD1\u5B89\u88C5</p><blockquote><p>-j \u53C2\u6570\u8868\u793A\u6839\u636E CPU \u6838\u6570\u6307\u5B9A\u7F16\u8BD1\u65F6\u7684\u7EBF\u7A0B\u6570\uFF0C\u53EF\u4EE5\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> -j <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> processor /proc/cpuinfo <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">\`</span></span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> \u914D\u7F6E\u6570\u636E\u5E93</h3><p>\u521D\u59CB\u5316\u6570\u636E\u5E93</p><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u4F7F\u7528\u2013initialize \u53C2\u6570\u521D\u59CB\u5316\u7CFB\u7EDF\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u4F1A\u5728~/.mysql_secret \u6587\u4EF6\u4E2D\u751F\u6210 root \u7528\u6237\u7684\u4E00\u4E2A\u4E34\u65F6\u5BC6\u7801\uFF0C\u540C\u65F6\u4E5F\u5728\u521D\u59CB\u5316\u65E5\u5FD7\u4E2D\u6253\u5370\u51FA\u6765\u4E86,\u5982\u4E0B\u56FE:</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mysql
<span class="token function">chown</span> -R mysql:mysql <span class="token builtin class-name">.</span>
./bin/mysqld --initialize-insecure --user<span class="token operator">=</span>mysql --basedir<span class="token operator">=</span>/usr/local/mysql --datadir<span class="token operator">=</span>/usr/local/mysql/data
./bin/mysql_ssl_rsa_setup
<span class="token function">chown</span> -R root <span class="token builtin class-name">.</span>
<span class="token function">chown</span> -R mysql data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u521D\u59CB\u5BC6\u7801:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.mysql_secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u590D\u5236\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> support-files/my-default.cnf /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u4F18\u5316,\u7F16\u8F91\u6587\u4EF6<code>/etc/my.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/my.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8C03\u6574\u5185\u5BB9\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/mysql.sock
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
character-set-server<span class="token operator">=</span>utf8
collation-server<span class="token operator">=</span>utf8_general_ci

skip-external-locking
skip-name-resolve

<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/usr/local/mysql/data
<span class="token assign-left variable">tmpdir</span><span class="token operator">=</span>/usr/local/mysql/temp

<span class="token comment"># server_id = .....</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/usr/local/mysql/mysql.sock
log-error<span class="token operator">=</span>/usr/local/mysql/logs/mysql_error.log
pid-file<span class="token operator">=</span>/usr/local/mysql/mysql.pid
<span class="token assign-left variable">open_files_limit</span><span class="token operator">=</span><span class="token number">10240</span>
<span class="token assign-left variable">back_log</span><span class="token operator">=</span><span class="token number">600</span>
<span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">500</span>
<span class="token assign-left variable">max_connect_errors</span><span class="token operator">=</span><span class="token number">6000</span>
<span class="token assign-left variable">wait_timeout</span><span class="token operator">=</span><span class="token number">605800</span>
<span class="token comment">#open_tables=600</span>
<span class="token comment">#table_cache = 650</span>
<span class="token comment">#opened_tables = 630</span>

<span class="token assign-left variable">max_allowed_packet</span><span class="token operator">=</span>32M
<span class="token assign-left variable">sort_buffer_size</span><span class="token operator">=</span>4M
<span class="token assign-left variable">join_buffer_size</span><span class="token operator">=</span>4M
<span class="token assign-left variable">thread_cache_size</span><span class="token operator">=</span><span class="token number">300</span>
<span class="token assign-left variable">query_cache_type</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">query_cache_size</span><span class="token operator">=</span>256M
<span class="token assign-left variable">query_cache_limit</span><span class="token operator">=</span>2M
<span class="token assign-left variable">query_cache_min_res_unit</span><span class="token operator">=</span>16k

<span class="token assign-left variable">tmp_table_size</span><span class="token operator">=</span>256M
<span class="token assign-left variable">max_heap_table_size</span><span class="token operator">=</span>256M

<span class="token assign-left variable">key_buffer_size</span><span class="token operator">=</span>256M
<span class="token assign-left variable">read_buffer_size</span><span class="token operator">=</span>1M
<span class="token assign-left variable">read_rnd_buffer_size</span><span class="token operator">=</span>16M
<span class="token assign-left variable">bulk_insert_buffer_size</span><span class="token operator">=</span>64M

<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
default-storage-engine<span class="token operator">=</span>INNODB

<span class="token assign-left variable">innodb_buffer_pool_size</span><span class="token operator">=</span>2G
<span class="token assign-left variable">innodb_log_buffer_size</span><span class="token operator">=</span>32M
<span class="token assign-left variable">innodb_log_file_size</span><span class="token operator">=</span>128M
<span class="token assign-left variable">innodb_flush_method</span><span class="token operator">=</span>O_DIRECT
<span class="token comment">#####################</span>
<span class="token assign-left variable">thread_concurrency</span><span class="token operator">=</span><span class="token number">32</span>
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">2</span>
slow-query-log<span class="token operator">=</span>on
slow-query-log-file<span class="token operator">=</span>/usr/local/mysql/logs/mysql-slow.log

<span class="token punctuation">[</span>mysqldump<span class="token punctuation">]</span>
quick
<span class="token assign-left variable">max_allowed_packet</span><span class="token operator">=</span>32M

<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
log-error<span class="token operator">=</span>/var/log/mysqld.log
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u542F\u52A8\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chkconfig</span> --add mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8mysql\u670D\u52A1</span>
<span class="token function">service</span> mysqld start
<span class="token comment"># \u505C\u6B62mysql\u670D\u52A1</span>
<span class="token function">service</span> mysqld stop
<span class="token comment"># \u91CD\u65B0\u542F\u52A8mysql\u670D\u52A1</span>
<span class="token function">service</span> mysqld restart
<span class="token comment"># \u5F00\u673A\u542F\u52A8</span>
<span class="token function">service</span> mysqld <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u6570\u636E\u5E93\u5BC6\u7801,\u53CA\u8FDC\u7A0B\u767B\u9646</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/mysql/bin/mysql -e <span class="token string">&quot;grant all privileges on *.* to root@&#39;127.0.0.1&#39; identified by &quot;</span>1234qwer<span class="token string">&quot; with grant option;&quot;</span>
/usr/local/mysql/bin/mysql -e <span class="token string">&quot;grant all privileges on *.* to root@&#39;localhost&#39; identified by &quot;</span>1234qwer<span class="token string">&quot; with grant option;&quot;</span>
<span class="token comment"># \u5F00\u542F\u8FDC\u7A0B\u767B\u5F55(\u5C06host\u8BBE\u4E3A%\u5373\u53EF),\u751F\u4EA7\u5F53\u4E2D\u6781\u4E0D\u5EFA\u8BAE\u8FD9\u4E48\u505A</span>
/usr/local/mysql/bin/mysql -e <span class="token string">&quot;grant all privileges on *.* to root@&#39;%&#39; identified by &quot;</span>1234qwer<span class="token string">&quot; with grant option;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF,\u7F16\u8F91<code>/etc/profile</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mysql env</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/mysql/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ansible-\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#ansible-\u6784\u5EFA" aria-hidden="true">#</a> Ansible \u6784\u5EFA</h2><ul><li>\u811A\u672C\u7F16\u5199</li></ul><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><ul><li>\u6784\u5EFA\u955C\u50CF</li><li>\u4F7F\u7528</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,45),d={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},u=e("GitBook \u5B98\u7F51"),v={href:"https://blog.csdn.net/xyang81/article/details/51792144",target:"_blank",rel:"noopener noreferrer"},m=e("MySQL5.7.13 \u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u4E0E\u914D\u7F6E"),b={href:"https://dev.mysql.com/doc/refman/5.7/en/installing-source-distribution.html",target:"_blank",rel:"noopener noreferrer"},k=e("Installing MySQL Using a Standard Source Distribution");function g(h,_){const n=t("ExternalLinkIcon");return i(),o("div",null,[p,s("ul",null,[s("li",null,[s("a",d,[u,a(n)])]),s("li",null,[s("a",v,[m,a(n)])]),s("li",null,[s("a",b,[k,a(n)])])])])}var q=l(c,[["render",g],["__file","01_MySQL\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{q as default};
