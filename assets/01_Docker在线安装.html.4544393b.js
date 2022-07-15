import{_ as n,o as d,c as i,a as e,d as a}from"./app.2e01da9e.js";const r={},c=a(`<h1 id="docker-\u5728\u7EBF\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker-\u5728\u7EBF\u5B89\u88C5" aria-hidden="true">#</a> Docker \u5728\u7EBF\u5B89\u88C5</h1><h2 id="\u68C0\u67E5\u670D\u52A1\u5668\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u670D\u52A1\u5668\u73AF\u5883" aria-hidden="true">#</a> \u68C0\u67E5\u670D\u52A1\u5668\u73AF\u5883</h2><p>\u4F7F\u7528 centos7 \u8FDB\u884C\u5B89\u88C5\uFF0C\u9996\u5148\u786E\u5B9A\u7CFB\u7EDF\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lsb_release -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),l=["src"],o=e("p",null,"docker \u5B89\u88C5\u9700\u8981\u7CFB\u7EDF 64 \u4F4D\u3001\u7CFB\u7EDF\u5185\u6838\u7248\u672C\u4E3A 3.10 \u4EE5\u4E0A",-1),t=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`uanme -r
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),u=["src"],h=a(`<p>\u68C0\u67E5\u672C\u673A\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5 docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list installed <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-yum-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-yum-\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528 yum \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-y \u8868\u793A\u4E0D\u8BE2\u95EE\uFF0C\u9ED8\u8BA4 yes \u9009\u62E9</p><h2 id="\u542F\u52A8-docker" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-docker" aria-hidden="true">#</a> \u542F\u52A8 docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u670D\u52A1\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),p=["src"],m=a(`<p>\u663E\u793A running \u8BF4\u660E docker \u5DF2\u7ECF\u5B89\u88C5\u4E14\u8FD0\u884C\u6210\u529F</p><h2 id="\u8BBE\u7F6E-docker-\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-docker-\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> \u8BBE\u7F6E docker \u5F00\u673A\u81EA\u542F</h2><p>\u7ED9 docker.service \u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x /etc/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u6587\u4EF6\u540E\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u5E76\u8BBE\u7F6E\u670D\u52A1\u5F00\u673A\u81EA\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>          //\u542F\u52A8\u670D\u52A1

systemctl <span class="token builtin class-name">enable</span> docker.service //\u5F00\u673A\u81EA\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(s,b){return d(),i("div",null,[c,e("img",{src:s.$withBase("/operation/jenkins_01.png")},null,8,l),o,t,e("img",{src:s.$withBase("/operation/docker_02.png")},null,8,u),h,e("img",{src:s.$withBase("/operation/docker_03.png")},null,8,p),m])}var k=n(r,[["render",v],["__file","01_Docker\u5728\u7EBF\u5B89\u88C5.html.vue"]]);export{k as default};
