import{_ as o,o as r,c as t,a,e as p,d as n,b as s,r as i}from"./app.ceba7780.js";const l={},c=n(`<h1 id="sonarqube7-4-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#sonarqube7-4-\u5B89\u88C5" aria-hidden="true">#</a> sonarqube7.4 \u5B89\u88C5</h1><h2 id="snarqube-\u5B89\u88C5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#snarqube-\u5B89\u88C5\u8BF4\u660E" aria-hidden="true">#</a> snarqube \u5B89\u88C5\u8BF4\u660E</h2><p>\u6761\u4EF6\u9650\u5236\uFF1A 1\u3001jdk1.8 2\u3001\u6570\u636E\u5E93 oracle \u7684\u8FD0\u884C\u73AF\u5883\u662F jre8 ,mysql \u652F\u6301 5.6 \uFF0C5.7 3\u3001\u6D4F\u89C8\u5668\u5FC5\u987B\u542F\u52A8\u652F\u6301 javascript \uFF0C\u652F\u6301\u706B\u72D0\uFF0C\u8C37\u6B4C\uFF0C\u82F9\u679C\u7B49\u6D4F\u89C8\u5668\uFF0C\u652F\u6301 IE11 \u4EE5\u4E0A\u7684\u7248\u672C\u3002</p><h2 id="\u4E0B\u8F7D-sonar" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-sonar" aria-hidden="true">#</a> \u4E0B\u8F7D Sonar</h2><p>\u94FE\u63A5\uFF1Ahttps://pan.baidu.com/s/10FIvnR0Me48EFG2kGX1vUg \u63D0\u53D6\u7801\uFF1Av430</p><h2 id="\u4E0A\u4F20\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u89E3\u538B" aria-hidden="true">#</a> \u4E0A\u4F20\u89E3\u538B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> sonarqube
\u4E0A\u4F20\u5230\u76EE\u5F55 /opt/alinesno/sonarqube
\u89E3\u538B: <span class="token function">unzip</span> sonarqube-7.4.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B0\u5EFA-sonar-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA-sonar-\u7528\u6237" aria-hidden="true">#</a> \u65B0\u5EFA sonar \u7528\u6237</h2><p>\u7531\u4E8E sonar \u662F\u4E0D\u5141\u8BB8 root \u7528\u6237\u60C5\u51B5\u4E0B\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2A\u975E root \u7528\u6237\u3002 \u8FD9\u91CC\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A sonar \u7684\u7528\u6237 useradd sonar \u8BBE\u7F6E\u5BC6\u7801 passwd sonar \u5BC6\u7801\u4E3A\uFF1AAlinesno123$%^123</p><h2 id="\u8BBE\u7F6E\u76EE\u5F55\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u76EE\u5F55\u6743\u9650" aria-hidden="true">#</a> \u8BBE\u7F6E\u76EE\u5F55\u6743\u9650</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> -R <span class="token number">777</span> sonarqube-7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u4EE5\u540E,\u4F7F\u7528 ll \u547D\u4EE4\u67E5\u770B\u76EE\u5F55\u4E0B\u6587\u4EF6\u8BE6\u7EC6,\u53D1\u73B0\u6743\u9650\u5DF2\u7ECF\u5168\u90E8\u6253\u5F00\u4E86,\u6240\u6709\u7528\u6237\u90FD\u53EF\u8BBF\u95EE</p><h2 id="\u8BBE\u7F6E\u6587\u4EF6\u6240\u5C5E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6587\u4EF6\u6240\u5C5E\u7528\u6237" aria-hidden="true">#</a> \u8BBE\u7F6E\u6587\u4EF6\u6240\u5C5E\u7528\u6237</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chown</span> -R sonar:sonar /opt/alinesno/sonarqube/sonarqube-7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /sonarqube-7.4/conf
<span class="token function">vim</span> sonar.properties
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9</span>
sonar.jdbc.url<span class="token operator">=</span>jdbc:mysql://47.113.116.150:3306/qjfsonar?useUnicode<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">characterEncoding</span><span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">rewriteBatchedStatements</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useConfigs</span><span class="token operator">=</span>maxPerformance
sonar.jdbc.username<span class="token operator">=</span>root
sonar.jdbc.password<span class="token operator">=</span>HouGuiYu@123<span class="token operator">!</span>@<span class="token comment">#</span>
sonar.sorceEncoding<span class="token operator">=</span>UTF-8
sonar.login<span class="token operator">=</span>admin
sonar.password<span class="token operator">=</span>admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u662F\u4FEE\u6539\u6570\u636E\u5E93\u914D\u7F6E\uFF0C\u8BF7\u52A1\u5FC5\u5728\u4E8B\u5148\u521B\u5EFA\u597D\u540D\u4E3A qjfsonar \u7684\u6570\u636E\u5E93\uFF0C\u5426\u5219\u5C06\u542F\u52A8\u5931\u8D25</p><h2 id="\u542F\u52A8-sonarqube" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-sonarqube" aria-hidden="true">#</a> \u542F\u52A8 sonarqube</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/alinesno/sonarqube/sonarqube-7.4/bin/linux-x86-64

<span class="token function">bash</span> sonar.sh  start     <span class="token comment">#\u542F\u52A8\u670D\u52A1</span>
<span class="token function">bash</span> sonar.sh stop       <span class="token comment">#\u505C\u6B62\u670D\u52A1</span>
<span class="token function">bash</span> sonar.sh restart    <span class="token comment">#\u91CD\u542F\u670D\u52A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tail</span> -F sonarqube-7.4/logs/sonar.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBF\u95EE-sonarqube" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE-sonarqube" aria-hidden="true">#</a> \u8BBF\u95EE sonarqube</h2>`,22),d=s("\u8BBF\u95EE "),u={href:"http://sonarqube.lbxinhu.com/",target:"_blank",rel:"noopener noreferrer"},v=s("http://sonarqube.lbxinhu.com/"),b=s(" \u767B\u5F55\uFF1Aadmin/admin \u8BBE\u7F6E token \u4E3A:alinesno \u8FD9\u91CC\u751F\u6210\u7684\u5BC6\u7801\u4E32\u4E3A alinesno: 37231eae21cf053709a1fc93b99ba4503a91b532\uFF0C\u8BF7\u6CE8\u610F\u4FDD\u5B58"),m=n(`<h2 id="\u4E2D\u6587\u63D2\u4EF6\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u6587\u63D2\u4EF6\u7684\u5B89\u88C5" aria-hidden="true">#</a> \u4E2D\u6587\u63D2\u4EF6\u7684\u5B89\u88C5</h2><p>7.4 \u7248\u672C\u7684\u53EA\u80FD\u4F7F\u7528 sonar-l10n-zh-plugin-1.24 \u7248\u7684\u4E2D\u6587\u63D2\u4EF6 \u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u5C06\u63D2\u4EF6\u5305\u4E0A\u4F20\u81F3/extensions/plugins \u76EE\u5F55\u4E2D\uFF0C\u91CD\u542F sonar \u751F\u6548</p><h1 id="\u6DFB\u52A0-sonarqube-\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-sonarqube-\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0 sonarqube \u5F00\u673A\u81EA\u542F\u52A8</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/rc.d
<span class="token function">vim</span> rc.local
 sonarqube\u5F00\u673A\u81EA\u542F
/opt/alinesno/sonarqube/sonarqube-7.4/bin/sonar.sh  start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9000\u51FA</p><h1 id="\u6DFB\u52A0-maven-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-maven-\u914D\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0 maven \u914D\u7F6E</h1><p>\u5728\u5168\u5C40\u7684 settings \u6587\u4EF6\u4E2D\u52A0\u5165\u5982\u4E0B\u914D\u7F6E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>/profiles<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>profile<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>sonarqube<span class="token operator">&lt;</span>/id<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>activation<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>activeByDefault<span class="token operator">&gt;</span>true<span class="token operator">&lt;</span>/activeByDefault<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>jdk<span class="token operator">&gt;</span><span class="token number">1</span>.<span class="token operator"><span class="token file-descriptor important">8</span>&lt;</span>/jdk<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>/activation<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>properties<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span>--
                        <span class="token operator">&lt;</span>sonar.host.url<span class="token operator">&gt;</span>http://sonarqube.lbxinhu.com<span class="token operator">&lt;</span>/sonar.host.url<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>sonar.host.url<span class="token operator">&gt;</span>http://localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/sonar.host.url<span class="token operator">&gt;</span>
                        --<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>sonar.host.url<span class="token operator">&gt;</span>http://localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/sonar.host.url<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>sonar.login<span class="token operator">&gt;</span>37231eae21cf053709a1fc93b99ba4503a91b53<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>/sonar.login<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>sonar.password<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/sonar.password<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>sonar.inclusions<span class="token operator">&gt;</span>**/*.java,**/*.xml<span class="token operator">&lt;</span>/sonar.inclusions<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>/properties<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>/profile<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/profiles<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span>--\u6FC0\u6D3Bprofile --<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>activeProfiles<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>activeProfile<span class="token operator">&gt;</span>linesno<span class="token operator">&lt;</span>/activeProfile<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>activeProfile<span class="token operator">&gt;</span>sonarqube<span class="token operator">&lt;</span>/activeProfile<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>/activeProfiles<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u662F\u8BBE\u7F6E token \u4E3A sonar \u7684\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u6240\u4EE5 password \u7559\u7A7A\u5373\u53EF</p><h1 id="\u5728-nginx-\u4E2D\u914D\u7F6E\u8D85\u65F6\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5728-nginx-\u4E2D\u914D\u7F6E\u8D85\u65F6\u8BBE\u7F6E" aria-hidden="true">#</a> \u5728 nginx \u4E2D\u914D\u7F6E\u8D85\u65F6\u8BBE\u7F6E</h1><p>vim sonarqube.lbxinhu.com.conf \u6DFB\u52A0\u4E00\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span> <span class="token punctuation">;</span>
        server_name  sonarqube.lbxinhu.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
                 proxy_pass http://47.113.116.150:9000/<span class="token punctuation">;</span>   <span class="token comment">#\u6765\u81EAjsp\u8BF7\u6C42\u4EA4\u7ED9tomcat\u5904\u7406</span>
                proxy_pass http://localhost:9000/<span class="token punctuation">;</span>   <span class="token comment">#\u6765\u81EAjsp\u8BF7\u6C42\u4EA4\u7ED9tomcat\u5904\u7406</span>
                proxy_redirect off<span class="token punctuation">;</span>
                proxy_next_upstream_tries <span class="token number">3</span><span class="token punctuation">;</span>     \u8D85\u65F6\u91CD\u590D\u8BF7\u6C42\u6B21\u6570
                proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>    <span class="token comment">#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
                client_max_body_size 10m<span class="token punctuation">;</span>   <span class="token comment">#\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570</span>
                client_body_buffer_size 128k<span class="token punctuation">;</span> <span class="token comment">#\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570</span>
                proxy_connect_timeout <span class="token number">600</span><span class="token punctuation">;</span>   <span class="token comment">#nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
                proxy_read_timeout <span class="token number">600</span><span class="token punctuation">;</span>      <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
                proxy_buffer_size 4k<span class="token punctuation">;</span>       <span class="token comment">#\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
                proxy_buffers <span class="token number">6</span> 32k<span class="token punctuation">;</span>        <span class="token comment">#proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BDD\uFF0C\u8FD9\u6837\u8BBE\u7F6E</span>
                proxy_busy_buffers_size 64k<span class="token punctuation">;</span><span class="token comment">#\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
                proxy_temp_file_write_size 64k<span class="token punctuation">;</span> <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
        <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4F7F\u7528-sonar-\u6267\u884C\u5206\u6790\u65F6\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-sonar-\u6267\u884C\u5206\u6790\u65F6\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u4F7F\u7528 sonar \u6267\u884C\u5206\u6790\u65F6\u7684\u6CE8\u610F\u4E8B\u9879</h1><p>1\u3001\u51FA\u73B0 sonar \u6743\u9650\u4E0D\u8DB3\u5F02\u5E38 \u53C2\u8003\u89E3\u51B3\u65B9\u6848\uFF1A\u5728 sonar:sonar \u540E\u6DFB\u52A0\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  mvn sonar:sonar <span class="token punctuation">\\</span>
  -Dsonar.host.url<span class="token operator">=</span>http://sonarqube.lbxinhu.com <span class="token punctuation">\\</span>
  -Dsonar.login<span class="token operator">=</span>37231eae21cf053709a1fc93b99ba4503a91b532
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u51FA\u73B0<code>Please provide compiled classes of your project with sonar.java.binaries property</code> \u9519\u8BEF\u5206\u6790\uFF1Asonar \u6267\u884C\u4EE3\u7801\u5206\u6790\u65F6\uFF0C\u4F1A\u6D89\u53CA\u5230\u5176\u4ED6\u7F16\u8BD1\u540E\u6E90\u7801\u7684\u5206\u6790\uFF0C\u7531\u4E8E\u6CA1\u6709\u7F16\u8BD1\u5BFC\u81F4\u6E90\u7801\u7F3A\u5931\u62A5\u9519</p><p>\u53C2\u8003\u89E3\u51B3\u65B9\u6848: \u5728\u6267\u884C maven \u7684 compile \u547D\u4EE4\u540E\u518D\u6267\u884C sonar:sonar \u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn  -B -U -f <span class="token variable">\${WORKSPACE}</span>/pom.xml clean compile sonar:sonar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18);function h(k,g){const e=i("ExternalLinkIcon");return r(),t("div",null,[c,a("p",null,[d,a("a",u,[v,p(e)]),b]),m])}var _=o(l,[["render",h],["__file","01_Sonar\u5B89\u88C5.html.vue"]]);export{_ as default};
