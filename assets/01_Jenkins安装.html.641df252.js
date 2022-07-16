import{_ as i,o as l,c as o,a as n,d as a,b as e}from"./app.85d3d40c.js";const t={},d=a('<h1 id="jenkins-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#jenkins-\u5B89\u88C5" aria-hidden="true">#</a> Jenkins \u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>Jenkins \u5B89\u88C5\u53CA\u63D2\u4EF6\u914D\u7F6E</li></ul><h2 id="jenkins-\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#jenkins-\u5B89\u88C5-1" aria-hidden="true">#</a> Jenkins \u5B89\u88C5</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p>1.Jenkins \u672C\u8EAB\u662F\u6CA1\u6709\u6570\u636E\u5E93\u7684,\u4EE5<code>JENKINS_HOME</code>\u4E3A\u73AF\u5883\u53D8\u91CF,\u6784\u5EFA\u7684\u5305\u90FD\u4F1A\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u9762\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u53D8\u5F97\u975E\u5E38\u5927(\u51E0\u5341\u4E0A\u767E G \u90FD\u6709\u53EF\u80FD)</p><p>2.Jenkins \u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u7684\u5185\u5B58\u8FD8\u6709\u73AF\u5883\u8981\u6C42\u8F83\u9AD8\uFF0C\u5EFA\u8BAE\u4F7F\u7528 jdk8 \u8FD0\u884C</p><p>3.Jenkins \u5B89\u88C5\u5305\u63A8\u8350\u4F7F\u7528\u5B98\u7F51\u7684\u957F\u671F\u652F\u6301\u7248\u672C (LTS)\uFF0C\u907F\u514D\u51FA\u73B0\u63D2\u4EF6\u65E0\u6CD5\u5B89\u88C5\u7684\u60C5\u51B5</p>',8),c=["src"],r=a(`<h3 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h3><p>\u4E0A\u4F20 Jenkins \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/jenkins</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><p>\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> -p ~/jenkins/JENKINS_HOME
<span class="token builtin class-name">cd</span> ~/jenkins
<span class="token function">mv</span> jenkins.war jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF(\u53EF\u9009\u64CD\u4F5C)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.bash_profile
<span class="token comment"># \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment"># jenkins env</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JENKINS_HOME</span><span class="token operator">=~</span>/jenkins/JENKINS_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u547D\u4EE4 \u521B\u5EFA<code>jenkins_start.sh</code>\u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/jenkins/jenkins-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5185\u5BB9\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># jenkins env</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JENKINS_HOME</span><span class="token operator">=~</span>/jenkins/JENKINS_HOME
<span class="token assign-left variable">LOGFILE</span><span class="token operator">=</span>jenkins.log
<span class="token function">nohup</span> java -Dhudson.util.ProcessTree.disable<span class="token operator">=</span>true -jar ~/jenkins/jenkins.war --httpPort<span class="token operator">=</span><span class="token number">8088</span> <span class="token operator">&gt;</span> <span class="token variable">$LOGFILE</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8 jenkins</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/jenkins
<span class="token comment"># \u6DFB\u52A0\u53EF\u6267\u884C\u6743\u9650</span>
<span class="token function">chmod</span> +x jenkins-start.sh
<span class="token comment"># \u542F\u52A8</span>
~/jenkins/jenkins-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u542F\u52A8\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tail</span> -f ~/jenkins.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u542F\u52A8\u65E5\u5FD7\u4E2D\u5305\u542B\u6709\u7BA1\u7406\u5458\u5BC6\u94A5\uFF0C\u8BF7\u6CE8\u610F\u590D\u5236\u4E0B\u6765\uFF0C\u5982\u679C\u6CA1\u6709\u770B\u5230\u65E5\u5FD7\u4E5F\u6CA1\u4E8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6</p>`,16),p=["src"],h=n("h3",{id:"\u767B\u9646\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u767B\u9646\u914D\u7F6E","aria-hidden":"true"},"#"),e(" \u767B\u9646\u914D\u7F6E")],-1),u=n("p",null,"\u8BBF\u95EE jenkins\uFF0Chttp://192.168.1.110:8088 ,\u663E\u793A\u4E0B\u56FE:",-1),k=["src"],_=a(`<p>\u9700\u8981\u83B7\u53D6\u5B89\u88C5\u7684\u5BC6\u94A5\uFF0C\u5728\u670D\u52A1\u5668\u4E0A\u9762\u83B7\u53D6\uFF0C\u590D\u5236\u5230\u8F93\u5165\u6846\u4E2D\uFF0C\u70B9\u51FB\u7EE7\u7EED</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /home/alinesno/jenkins/JENKINS_HOME/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63D2\u4EF6\u5B89\u88C5\u6211\u4EEC\u9009\u62E9\u793E\u533A\u63A8\u8350\u63D2\u4EF6\u5373\u53EF\uFF0C\u8FDB\u5165\u5230\u63D2\u4EF6\u5B89\u88C5\u8FC7\u7A0B\u65F6\u95F4\u6BD4\u8F83\u957F\uFF0C\u4E5F\u6BD4\u8F83\u6D88\u8017\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85.</p>`,3),m=["src"],v=n("p",null,"\u914D\u7F6E\u8D85\u7EA7\u7BA1\u7406\u5458\uFF0C\u8D85\u7EA7\u7BA1\u7406\u5458\u4F1A\u770B\u5230\u5F88\u591A\u9879\u76EE\uFF0C\u5E76\u4E0D\u5408\u9002\u4E8E\u5927\u578B\u6216\u8005\u591A\u9879\u76EE\u7684\u534F\u52A9\uFF0C\u540E\u671F\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u8D26\u6237\u5206\u914D\u6743\u9650\u5373\u53EF,\u8D85\u7EA7\u7BA1\u7406\u5458\u53EA\u7528\u4E8E\u914D\u7F6E\uFF0C\u5E76\u4E0D\u7528\u4E8E\u5DE5\u7A0B\u7684\u53D1\u5E03\u3002",-1),b=n("blockquote",null,[n("p",null,"\u8FD9\u91CC\u8BBE\u7F6E\u8D85\u7EA7\u7BA1\u7406\u5458\u5BC6\u7801\u4E3A:1234qwer")],-1),g=["src"],j=n("p",null,"\u914D\u7F6E\u5B8C\u6210\uFF0C\u70B9\u51FB\u767B\u9646\u5373\u53EF",-1),f=["src"],w=n("h3",{id:"jenkins-\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenkins-\u914D\u7F6E","aria-hidden":"true"},"#"),e(" Jenkins \u914D\u7F6E")],-1),J=n("blockquote",null,[n("p",null,"Jenkins \u662F\u4E00\u4E2A\u6784\u5EFA\u5DE5\u5177\uFF0C\u9700\u8981\u5F15\u7528\u7684\u73AF\u5883\u7684\u5DE5\u5177\uFF0C\u5982 maven,jdk,node \u7B49")],-1),B=n("h4",{id:"\u914D\u7F6E\u5F00\u53D1\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u5F00\u53D1\u5DE5\u5177","aria-hidden":"true"},"#"),e(" \u914D\u7F6E\u5F00\u53D1\u5DE5\u5177")],-1),E=n("p",null,"Jenkins \u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A jdk \u4F9B\u7528\u6237\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u9009\u62E9\uFF0C\u6B64\u5904\u6211\u4EEC\u7EDF\u4E00\u4E86 jdk \u7248\u672C\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u914D\u7F6E\u4E00\u4E2A\u5373\u53EF",-1),N=n("p",null,"\u8FDB\u5165\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D",-1),$=["src"],x=n("p",null,[e("\u914D\u7F6E jdk \u8DEF\u5F84,"),n("em",null,"\u4E00\u5B9A\u4E0D\u8981\u52FE\u9009\u81EA\u52A8\u5B89\u88C5")],-1),I=["src"],M=n("p",null,[e("\u914D\u7F6E maven \u8DEF\u5F84,"),n("em",null,"\u4E00\u5B9A\u4E0D\u8981\u52FE\u9009\u81EA\u52A8\u5B89\u88C5")],-1),O=n("p",null,[n("code",null,"\u670D\u52A1\u5668\u914D\u7F6EMaven\u8BF7\u67E5\u9605\u4E4B\u524D\u6587\u6863")],-1),S=["src"],H=n("p",null,"\u70B9\u51FB\u4FDD\u5B58\u73AF\u5883\u53D8\u91CF\u5373\u53EF",-1),K=n("h4",{id:"\u914D\u7F6E\u9884\u8B66\u90AE\u7BB1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u9884\u8B66\u90AE\u7BB1","aria-hidden":"true"},"#"),e(" \u914D\u7F6E\u9884\u8B66\u90AE\u7BB1")],-1),L=n("p",null,"\u8FDB\u5165\u7CFB\u7EDF\u914D\u7F6E\uFF0C\u914D\u7F6E\u7BA1\u7406\u5458\u90AE\u7BB1\uFF0C\u6B64\u6B65\u5F88\u91CD\u8981\uFF0C\u5426\u5219\u53EF\u80FD\u51FA\u73B0\u90AE\u4EF6\u8BA4\u8BC1\u51FA\u9519\u7684\u60C5\u51B5",-1),q=["src"],G=n("p",null,[e("\u8FDB\u5165\u7CFB\u7EDF\u914D\u7F6E,\u70B9\u51FB\u90AE\u7BB1\u914D\u7F6E,\u70B9\u51FB"),n("code",null,"\u9AD8\u7EA7"),e("\uFF0C\u5982\u4E0B\u56FE:")],-1),P=["src"],T=n("p",null,"\u767B\u9646\u90AE\u7BB1\u67E5\u770B\u662F\u5426\u6536\u53D1\u6210\u529F",-1),V=["src"],F=n("h3",{id:"\u6784\u5EFA-helloworld-\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6784\u5EFA-helloworld-\u5DE5\u7A0B","aria-hidden":"true"},"#"),e(" \u6784\u5EFA HelloWorld \u5DE5\u7A0B")],-1),A=n("p",null,[e("\u5B89\u88C5 maven \u63D2\u4EF6"),n("code",null,"Maven Integration"),e(",\u70B9\u51FB\u76F4\u63A5\u5B89\u88C5\u5373\u53EF")],-1),D=["src"],W=n("p",null,"\u521B\u5EFA maven \u5DE5\u7A0B\uFF0C\u6784\u5EFA\u5B8C\u6210\u90AE\u7BB1\u63D0\u9192,\u6574\u4F53\u914D\u7F6E\u754C\u9762\u5982\u56FE:",-1),y=["src"],z=n("p",null,"\u6784\u5EFA\u6210\u529F\u6216\u5931\u8D25\uFF0C\u67E5\u6536\u90AE\u4EF6:",-1),C=["src"],Q=a(`<h2 id="\u6DFB\u52A0-jenkins-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-jenkins-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 jenkins \u5F00\u673A\u81EA\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
 jenkins\u5F00\u673A\u81EA\u542F
<span class="token function">sh</span> /root/jenkins/jenkins-start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9000\u51FA</p>`,3);function R(s,U){return l(),o("div",null,[d,n("img",{src:s.$withBase("/operation/jenkins_17.png")},null,8,c),r,n("img",{src:s.$withBase("/operation/jenkins_02.png")},null,8,p),h,u,n("img",{src:s.$withBase("/operation/jenkins_01.png")},null,8,k),_,n("img",{src:s.$withBase("/operation/jenkins_03.png")},null,8,m),v,b,n("img",{src:s.$withBase("/operation/jenkins_04.png")},null,8,g),j,n("img",{src:s.$withBase("/operation/jenkins_05.png")},null,8,f),w,J,B,E,N,n("img",{src:s.$withBase("/operation/jenkins_06.png")},null,8,$),x,n("img",{src:s.$withBase("/operation/jenkins_07.png")},null,8,I),M,O,n("img",{src:s.$withBase("/operation/jenkins_08.png")},null,8,S),H,K,L,n("img",{src:s.$withBase("/operation/jenkins_09.png")},null,8,q),G,n("img",{src:s.$withBase("/operation/jenkins_10.png")},null,8,P),T,n("img",{src:s.$withBase("/operation/jenkins_11.png")},null,8,V),F,A,n("img",{src:s.$withBase("/operation/jenkins_12.png")},null,8,D),W,n("img",{src:s.$withBase("/operation/jenkins_13.png")},null,8,y),z,n("img",{src:s.$withBase("/operation/jenkins_14.png")},null,8,C),Q])}var Y=i(t,[["render",R],["__file","01_Jenkins\u5B89\u88C5.html.vue"]]);export{Y as default};
