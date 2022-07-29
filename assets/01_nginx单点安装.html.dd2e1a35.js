import{_ as l,o as d,c,a as n,e as r,d as e,b as i,r as o}from"./app.ec9cabdc.js";const t={},u=e(`<h1 id="nginx-\u5355\u70B9\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#nginx-\u5355\u70B9\u6559\u7A0B" aria-hidden="true">#</a> Nginx \u5355\u70B9\u6559\u7A0B</h1><h2 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h2><h3 id="\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u8F6F\u4EF6\u81F3-linux-\u670D\u52A1\u5668-home-alinesno-soft-\u76EE\u5F55" aria-hidden="true">#</a> \u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</h3><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><h3 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5</h3><p>\u5B89\u88C5\u4F9D\u8D56\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> openssl openssl-devel
yum -y <span class="token function">install</span> pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u89E3\u538B
<span class="token function">tar</span> -zxvf ~/soft/nginx-1.14.1.tar.gz -C ~/nginx/
<span class="token builtin class-name">cd</span> /home/alinesno/nginx/nginx-1.14.1

 \u5B89\u88C5
./configure --prefix<span class="token operator">=</span>/home/alinesno/nginx --with-stream
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
 \u5220\u6389\u6E90\u7801\u5305
<span class="token function">rm</span> -rf ~/nginx/nginx-1.14.1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/alinesno/nginx
 \u521B\u5EFAhttp\u5E94\u7528\u914D\u7F6E\u76EE\u5F55
<span class="token function">mkdir</span> -p conf/http.conf
 \u521B\u5EFAtcp\u8F6C\u53D1\u914D\u7F6E\u76EE\u5F55
<span class="token function">mkdir</span> -p conf/tcp.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8F91<code>nginx.conf</code>\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8C03\u6574\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u4FEE\u6539user
user alinesno

 \u6253\u5F00\u65E5\u5FD7\u683C\u5F0F
log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                  <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                  <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

 \u6DFB\u52A0socket\u914D\u7F6E
include ~/nginx/conf/tcp.conf/*.conf<span class="token punctuation">;</span>

 \u6DFB\u52A0\u914D\u7F6E
include ~/nginx/conf/http.conf/*.conf<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0B\u56FE:</p>`,16),v=["src"],p=e(`<h2 id="\u5E94\u7528\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u542F\u52A8" aria-hidden="true">#</a> \u5E94\u7528\u542F\u52A8</h2><p>\u542F\u52A8\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u542F\u52A8\u547D\u4EE4
<span class="token function">sudo</span> ~/nginx/sbin/nginx

 \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E
<span class="token function">sudo</span> ~/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=i("\u6D4F\u89C8\u5668\u8BBF\u95EE,\u8F93\u5165\u7F51\u5740"),m={href:"http://192.168.1.110",target:"_blank",rel:"noopener noreferrer"},b=i("http://192.168.1.110"),g=["src"],x=e(`<h2 id="\u6DFB\u52A0-nginx-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-nginx-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 nginx \u5F00\u673A\u81EA\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
 nginx\u5F00\u673A\u81EA\u542F
/home/alinesno/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9000\u51FA,\u7ED9 rc.local \u8D4B\u6743</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x /etc/rc.d/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F\u65F6\u67E5\u770B rc.local \u811A\u672C\u6267\u884C\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status rc-local.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h1><ul><li>\u7565</li></ul>`,8);function f(s,_){const a=o("ExternalLinkIcon");return d(),c("div",null,[u,n("img",{src:s.$withBase("/operation/nginx_01.png")},null,8,v),p,n("p",null,[h,n("a",m,[b,r(a)])]),n("img",{src:s.$withBase("/operation/nginx_02.png")},null,8,g),x])}var q=l(t,[["render",f],["__file","01_nginx\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{q as default};
