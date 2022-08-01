import{_ as s,o as n,c as a,d as e}from"./app.2f1587fd.js";const i={},l=e(`<h1 id="mariadb-\u7F51\u7EDC\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mariadb-\u7F51\u7EDC\u5B89\u88C5" aria-hidden="true">#</a> MariaDB \u7F51\u7EDC\u5B89\u88C5</h1><h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><ol><li>\u5047\u8BBE\u5B89\u88C5\u7684\u670D\u52A1\u5668\u4E3A:123.1.1.1</li></ol><p><strong>\u91C7\u8D2D\u4E86\u767E\u5EA6\u4E91\u670D\u52A1\u5668\uFF0C\u53D1\u73B0\uFF0C\u4F53\u9A8C\u592A\u5DEE\u4E86\uFF0C\u63A8\u8350\u8FD8\u662F\u963F\u91CC\u4E91</strong></p><h2 id="\u5B89\u88C5-mariadb" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mariadb" aria-hidden="true">#</a> \u5B89\u88C5 MariaDB</h2><blockquote><p>\u5B89\u88C5\u8FC7\u7A0B\u4F7F\u7528 root \u64CD\u4F5C</p></blockquote><p>\u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y cmake , <span class="token function">make</span> , gcc , gcc-c++ , bison , ncurses , ncurses-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/MariaDB.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u6570\u636E\u6E90</p><blockquote><p>\u7CFB\u7EDF\u53CA\u7248\u672C\u9009\u62E9\uFF1Ahttps://downloads.mariadb.org/mariadb/repositories/#mirror=tuna</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># MariaDB 10.3 CentOS repository list - created 2019-03-29 02:33 UTC</span>
<span class="token comment"># http://downloads.mariadb.org/mariadb/repositories/</span>
<span class="token punctuation">[</span>mariadb<span class="token punctuation">]</span>
name <span class="token operator">=</span> MariaDB
baseurl <span class="token operator">=</span> http://yum.mariadb.org/10.3/centos7-amd64
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E05\u7406 yum \u7F13\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum clean headers  <span class="token comment">#\u6E05\u7406/var/cache/yum\u7684headers</span>
yum clean packages <span class="token comment">#\u6E05\u7406/var/cache/yum\u4E0B\u7684\u8F6F\u4EF6\u5305</span>
yum clean metadata

yum clean all   <span class="token comment">#\u6E05\u9664Yum\u7F13\u5B58</span>
yum makecache   <span class="token comment">#\u628A\u670D\u52A1\u5668\u7684\u5305\u4FE1\u606F\u4E0B\u8F7D\u5230\u672C\u5730\u7535\u8111\u7F13\u5B58\u8D77\u6765</span>
yum update   <span class="token comment">#\u5347\u7EA7\u5305\u540C\u65F6\u4E5F\u5347\u7EA7\u8F6F\u4EF6\u548C\u7CFB\u7EDF\u5185\u6838</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CA\u653E\u5185\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sync</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches
<span class="token function">sync</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches

<span class="token function">free</span> -m    <span class="token comment">#\u67E5\u770B\u5185\u5B58</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 mariadb</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> MariaDB-server MariaDB-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart mariadb
systemctl status mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u5982\u5BC6\u7801\u5FD8\u8BB0: \u4FEE\u6539/etc/my.cnf \u6587\u4EF6,\u5728[mysqld]\u4E0B\u6DFB\u52A0 skip-grant-tables , \u518D\u542F\u52A8 mariadb</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>client-server<span class="token punctuation">]</span>
<span class="token comment"># [mysqld]</span>
<span class="token comment"># skip-grant-tables</span>
<span class="token comment">#</span>
<span class="token comment"># include all files from the config directory</span>
<span class="token comment">#</span>
<span class="token operator">!</span>includedir /etc/my.cnf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u767B\u9646</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql

// \u5B89\u5168\u914D\u7F6E
mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u9632\u706B\u5899</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-service<span class="token operator">=</span>mysql
<span class="token function">sudo</span> systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u7F6E\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u91CD\u542F\u670D\u52A1
systemctl restart mysqld
systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u7F6E\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p
use mysql<span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">password</span><span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;HouGuiYu@123!@#&#39;</span><span class="token punctuation">)</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p

// %\u8868\u793A\u662F\u6240\u6709\u7684\u5916\u90E8\u673A\u5668\uFF0C\u5982\u679C\u6307\u5B9A\u67D0\u4E00\u53F0\u673A\uFF0C\u5C31\u5C06%\u6539\u4E3A\u76F8\u5E94\u7684\u673A\u5668\u540D\uFF1B\u2018root\u2019\u5219\u662F\u6307\u8981\u4F7F\u7528\u7684\u7528\u6237\u540D
grant all privileges on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;HouGuiYu@123!@#&#39;</span> with grant option<span class="token punctuation">;</span>

// \u8FD0\u884C\u6B64\u53E5\u624D\u751F\u6548\uFF0C\u6216\u8005\u91CD\u542FMySQL
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-phpadmin" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-phpadmin" aria-hidden="true">#</a> \u5B89\u88C5 phpadmin</h2><blockquote><p>mysql \u7684\u754C\u9762\u7BA1\u7406\u5DE5\u5177\uFF0C\u7528\u4E8E mysql \u7684\u53EF\u89C6\u5316\u7BA1\u7406</p></blockquote><ol><li>\u5B89\u88C5\u4F9D\u8D56\u5305</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> httpd php php-fpm php-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5347\u7EA7 php</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm <span class="token comment">#\u66F4\u65B0\u6E90</span>
<span class="token function">rpm</span> -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum remove php-common -y  <span class="token comment">#\u79FB\u9664\u7CFB\u7EDF\u81EA\u5E26\u7684php-common</span>
yum <span class="token function">install</span> -y php72w php72w-opcache php72w-xml php72w-mcrypt php72w-gd php72w-devel php72w-mysql php72w-intl php72w-mbstring  <span class="token comment">#\u5B89\u88C5\u4F9D\u8D56\u5305</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5B89\u88C5 apache</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u5B89\u88C5
yum <span class="token function">install</span> httpd

// \u91CD\u542F
systemctl restart httpd

// \u67E5\u770B\u8FD0\u884C\u72B6\u6001
systemctl status httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u5730\u5740:http://123.1.1.1/</p><ol start="4"><li>\u5B89\u88C5 phpadmin</li></ol><blockquote><p>\u6B64\u9700\u8FDB\u5165\u76EE\u5F55 /var/www/html \u76EE\u5F55\u64CD\u4F5C</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u4E0B\u8F7Dphpadmin
<span class="token function">wget</span> https://files.phpmyadmin.net/phpMyAdmin/4.8.5/phpMyAdmin-4.8.5-all-languages.zip

// \u89E3\u538B
<span class="token function">unzip</span> phpMyAdmin-4.8.5-all-languages.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4FEE\u6539\u540D\u79F0</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> phpMyAdmin-4.8.5-all-languages phpMyAdmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,47),d=[l];function c(r,p){return n(),a("div",null,d)}var o=s(i,[["render",c],["__file","04_MySQL\u7F51\u7EDC\u5B89\u88C5.html.vue"]]);export{o as default};
