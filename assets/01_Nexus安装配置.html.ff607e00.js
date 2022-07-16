import{_ as a,o as i,c as t,a as n,d as e}from"./app.2b321bc4.js";const o={},l=e(`<h1 id="nexus-\u5B89\u88C5\u53CA\u6743\u9650\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nexus-\u5B89\u88C5\u53CA\u6743\u9650\u914D\u7F6E" aria-hidden="true">#</a> Nexus \u5B89\u88C5\u53CA\u6743\u9650\u914D\u7F6E</h1><h2 id="nexus-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nexus-\u5B89\u88C5" aria-hidden="true">#</a> Nexus \u5B89\u88C5</h2><h3 id="\u4E0A\u4F20\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5B89\u88C5" aria-hidden="true">#</a> \u4E0A\u4F20\u5B89\u88C5</h3><p>\u4E0A\u4F20 Nexus \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u793A\u4F8B: <span class="token function">scp</span> -r nexus-2.14.1-01-bundle.tar.gz alinesno@192.168.1.110:~/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 nexus</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> -p ~/nexus
<span class="token function">tar</span> -zxvf ~/soft/nexus-2.14.1-01-bundle.tar.gz -C ~/nexus/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Nexus \u7684\u79C1\u670D\u5E93\u4F1A\u9ED8\u8BA4\u5B89\u88C5\u5728~/.m2 \u76EE\u5F55\u4E0B\u9762\uFF0C\u6B64\u5904\u6211\u4EEC\u4F7F\u7528\u7684\u9ED8\u8BA4\u7684\u5373\u53EF</p></blockquote><p>\u542F\u52A8 nexus</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/nexus/nexus-2.14.1-01/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RUN_AS_USER</span><span class="token operator">=</span>root
./nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EEhttp://192.168.1.110:8081/nexus ,\u51FA\u73B0\u5982\u4E0B\u754C\u9762:</p>`,12),c=["src"],p=e('<h3 id="\u56FD\u5185\u4EE3\u7406\u5E93" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5185\u4EE3\u7406\u5E93" aria-hidden="true">#</a> \u56FD\u5185\u4EE3\u7406\u5E93</h3><blockquote><p>\u7BA1\u7406\u5458\u8D26\u53F7:<code>admin/1234qwer</code></p></blockquote><blockquote><p>\u5F00\u53D1\u4EBA\u5458\u8D26\u53F7:<code>deployment/1234qwer</code>(\u540E\u9762\u914D\u7F6E\u4F7F\u7528\u7EDF\u4E00\u4F7F\u7528\u5F00\u53D1\u4EBA\u5458\u8D26\u53F7)</p></blockquote><p>\u767B\u9646 nexus,\u9ED8\u8BA4\u5BC6\u7801<code>admin/admin1234</code>,\u4FEE\u6539\u5BC6\u7801\u4E3A:<code>1234qwer</code>:</p>',4),r=["src"],d=n("p",null,"\u4FEE\u6539\u5F00\u53D1\u4EBA\u5458\u5BC6\u7801",-1),u=["src"],m=n("p",null,"\u6DFB\u52A0\u963F\u91CC\u4E91\u5E93",-1),v=["src"],b=e(`<p>\u586B\u5199\u914D\u7F6E\u5E93\u914D\u7F6E\u4FE1\u606F,\u70B9\u51FB\u4FDD\u5B58\u5373\u53EF</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">Repository</span> <span class="token value attr-value">ID: Aliyun</span>
<span class="token key attr-name">Repository</span> <span class="token value attr-value">Name: Aliyun</span>
<span class="token key attr-name">Remote</span> <span class="token value attr-value">Storage Location: http://maven.aliyun.com/nexus/content/groups/public/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=["src"],_=n("p",null,"\u5C06\u963F\u91CC\u4E91\u5E93\u6DFB\u52A0\u5230\u516C\u5171\u5E93\u4E2D\uFF08\u516C\u5171\u5E93\u4E3A\u5BF9\u5916\u7EDF\u4E00\u5E93\uFF0Cmaven \u8FDE\u63A5\u4F7F\u7528\u7684\u5C31\u662F\u8FD9\u4E2A\u5E93)",-1),x=["src"],k=e(`<p>\u914D\u7F6E\u70B9\u51FB\u4FDD\u5B58\u5373\u53EF</p><h2 id="\u6DFB\u52A0-nexus-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-nexus-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 nexus \u5F00\u673A\u81EA\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
 nexus\u5F00\u673A\u81EA\u542F
/root/nexus/nexus-2.14.1-01/bin/nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9000\u51FA</p><h2 id="\u6DFB\u52A0-nexus-\u5728-nginx-\u4E2D\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-nexus-\u5728-nginx-\u4E2D\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0 nexus \u5728 nginx \u4E2D\u7684\u914D\u7F6E</h2><p>vim nexus.lbxinhu.com.conf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span> <span class="token punctuation">;</span>
        server_name  nexus.lbxinhu.com<span class="token punctuation">;</span>

        location /nexus <span class="token punctuation">{</span>
         http://47.113.116.150 :8081/nexus/<span class="token comment">#welcome</span>
                proxy_pass http://127.0.0.1:8081/nexus <span class="token punctuation">;</span>   <span class="token comment">#\u6765\u81EAjsp\u8BF7\u6C42\u4EA4\u7ED9tomcat\u5904\u7406</span>
                proxy_cookie_path  / /<span class="token punctuation">;</span>
                proxy_redirect off<span class="token punctuation">;</span>
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>    <span class="token comment">#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        client_max_body_size 100m<span class="token punctuation">;</span>   <span class="token comment">#\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570</span>
        client_body_buffer_size 100m<span class="token punctuation">;</span> <span class="token comment">#\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570</span>
        proxy_connect_timeout <span class="token number">600</span><span class="token punctuation">;</span>   <span class="token comment">#nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
        proxy_read_timeout <span class="token number">600</span><span class="token punctuation">;</span>      <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
         proxy_buffer_size 32k<span class="token punctuation">;</span>       <span class="token comment">#\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
         proxy_busy_buffers_size 128k<span class="token punctuation">;</span> <span class="token comment">#\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
        proxy_temp_file_write_size 24m<span class="token punctuation">;</span> <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
        <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(s,f){return i(),t("div",null,[l,n("img",{src:s.$withBase("/operation/nexus_01.png")},null,8,c),p,n("img",{src:s.$withBase("/operation/nexus_02.png")},null,8,r),d,n("img",{src:s.$withBase("/operation/nexus_06.png")},null,8,u),m,n("img",{src:s.$withBase("/operation/nexus_03.png")},null,8,v),b,n("img",{src:s.$withBase("/operation/nexus_04.png")},null,8,h),_,n("img",{src:s.$withBase("/operation/nexus_05.png")},null,8,x),k])}var w=a(o,[["render",g],["__file","01_Nexus\u5B89\u88C5\u914D\u7F6E.html.vue"]]);export{w as default};
