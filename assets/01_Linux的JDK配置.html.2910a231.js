import{_ as n,o as s,c as i,a as e,e as l,d,b as r,r as t}from"./app.10779e78.js";const c={},o=d(`<h1 id="linux-\u7684-jdk-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#linux-\u7684-jdk-\u914D\u7F6E" aria-hidden="true">#</a> Linux \u7684 JDK \u914D\u7F6E</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>CentOS7 \u4E0A JDK \u7684\u914D\u7F6E</li><li>JDK \u7684\u73AF\u5883\u53D8\u91CF</li></ul><h2 id="jdk-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#jdk-\u5B89\u88C5" aria-hidden="true">#</a> JDK \u5B89\u88C5</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><ul><li>Linux \u73AF\u5883\u53D8\u91CF\u6709 2 \u79CD\uFF0C\u4E00\u79CD\u662F\u5168\u5C40\u53D8\u91CF\u53CA\u7528\u6237\u53D8\u91CF</li><li>\u5168\u5C40\u5373\u6574\u4E2A\u7CFB\u7EDF\u90FD\u5171\u4EAB\uFF0C\u7528\u6237\u5373\u5355\u4E2A\u7528\u6237\u4F7F\u7528</li></ul><h3 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5</h3><p>\u4E0A\u4F20 jdk8 \u81F3 Linux \u670D\u52A1\u5668<code>/opt</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xbash \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><p>\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">sudo</span> <span class="token function">tar</span> -zxvf jdk-8u112-linux-x64.tar.gz   \u6700\u7EC8jdk\u8DEF\u5F84\u4E3A/opt/jdk1.8.0_112
<span class="token builtin class-name">cd</span> /opt/jdk1.8.0_112
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7F16\u8F91<code>/etc/profile</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># java env</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk1.8.0_112
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile
javac -version
java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u67E5\u770B\u8F93\u51FA\u7248\u672C</p></blockquote><h3 id="\u7528\u6237\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u5B89\u88C5" aria-hidden="true">#</a> \u7528\u6237\u5B89\u88C5</h3><p>\u5355\u7528\u6237\u5B89\u88C5\uFF0C\u4FEE\u6539\u7684\u4E3A<code>~/.bash_profile</code>,\u6DFB\u52A0 java \u73AF\u5883\u53D8\u91CF\uFF0C\u7136\u540E<code>source ~/.bash_profile</code>\u5373\u53EF</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,21),p={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},u=r("GitBook \u5B98\u7F51");function h(v,b){const a=t("ExternalLinkIcon");return s(),i("div",null,[o,e("ul",null,[e("li",null,[e("a",p,[u,l(a)])])])])}var k=n(c,[["render",h],["__file","01_Linux\u7684JDK\u914D\u7F6E.html.vue"]]);export{k as default};
