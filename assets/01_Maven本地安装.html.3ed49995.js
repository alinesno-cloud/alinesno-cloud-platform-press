import{_ as t,o as p,c as e,a as n,d as a}from"./app.244fac91.js";const l={},c=a(`<h1 id="maven-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#maven-\u914D\u7F6E" aria-hidden="true">#</a> Maven \u914D\u7F6E</h1><h2 id="\u672C\u7AE0\u8282\u4F60\u5C06\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u672C\u7AE0\u8282\u4F60\u5C06\u83B7\u53D6" aria-hidden="true">#</a> \u672C\u7AE0\u8282\u4F60\u5C06\u83B7\u53D6</h2><ul><li>maven \u914D\u7F6E\u79C1\u670D\u5730\u5740</li><li>maven \u63D2\u4EF6\u8D26\u53F7\u914D\u7F6E</li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u6DFB\u52A0\u672C\u5730\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u672C\u5730\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u6DFB\u52A0\u672C\u5730\u73AF\u5883\u53D8\u91CF</h3><p>\u89E3\u538B maven</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf apache-maven-3.6.0-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E\u672C\u5730\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0 maven \u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># maven env</span>
<span class="token comment"># \u6B64\u6309\u672C\u5730\u5B9E\u9645\u76EE\u5F55\u914D\u7F6E</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=~</span>/Downloads/apache-maven-3.6.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2</span><span class="token operator">=</span><span class="token variable">$M2_HOME</span>/bin
<span class="token comment"># export MAVEN_OPTS=&quot;-Xmx1048m -Xms256m -XX:MaxPermSize=312M&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$M2</span><span class="token builtin class-name">:</span><span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bash_profile
mvn -v  \u67E5\u770Bmvn\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u79C1\u670D" aria-hidden="true">#</a> \u914D\u7F6E\u79C1\u670D</h3><p>\u4FEE\u6539<code>conf/settings.xml</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> apache-maven-3.6.0
<span class="token function">vim</span> conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66FF\u6362\u5185\u5BB9\u4E3A:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!-- \u672C\u5730\u5730\u5740 &lt;localRepository&gt;d://m2/repository&lt;/localRepository&gt; --&gt;</span>

	<span class="token comment">&lt;!--\u914D\u7F6E\u6743\u9650,\u4F7F\u7528\u9ED8\u8BA4\u7528\u6237 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>releases<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>deployment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>1234qwer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>deployment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>1234qwer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>linesno-nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>linesno nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://nexus.lbxinhu.com/nexus/content/groups/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alinesno<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdk</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdk</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
				<span class="token comment">&lt;!-- \u79C1\u6709\u5E93\u5730\u5740 --&gt;</span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://nexus.lbxinhu.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepositories</span><span class="token punctuation">&gt;</span></span>
				<span class="token comment">&lt;!--\u63D2\u4EF6\u5E93\u5730\u5740 --&gt;</span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepository</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://nexus.lbxinhu.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepository</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepositories</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>sonarqube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdk</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdk</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sonar.host.url</span><span class="token punctuation">&gt;</span></span>http://localhost:9000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sonar.host.url</span><span class="token punctuation">&gt;</span></span>
				<span class="token comment">&lt;!-- &lt;sonar.login&gt;&lt;/sonar.login&gt;
                &lt;sonar.password&gt;&lt;/sonar.password&gt;
				--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sonar.inclusions</span><span class="token punctuation">&gt;</span></span>**/*.java,**/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sonar.inclusions</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!--\u6FC0\u6D3Bprofile --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfiles</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfile</span><span class="token punctuation">&gt;</span></span>linesno<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfile</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfile</span><span class="token punctuation">&gt;</span></span>sonarqube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfile</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfiles</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><p>\u521D\u59CB\u5316 Maven</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn help:system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u672C\u5730\u6784\u5EFA\u6253\u5305,\u4EE5\u5DE5\u7A0B<code>https://gitee.com/landonniao/alinesno-cloud-guide.git</code>\u4E3A\u4F8B\u5B50</p><blockquote><p>pom.xml \u6587\u4EF6\u4E2D\u7684 nexus.repository \u5C5E\u6027\u4FEE\u6539\u6210\u79C1\u670D\u5730\u5740\u7684 IP,\u5426\u5219\u65E0\u6CD5\u4E0A\u4F20,\u5173\u4E8E\u4F8B\u5B50\uFF0C\u7136\u540E\u5EFA\u7ACB\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u518D\u5177\u4F53\u8BF4\u660E\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/landonniao/alinesno-cloud-guide.git
<span class="token builtin class-name">cd</span> alinesno-cloud-guide
<span class="token comment"># \u6D4B\u8BD5maven\u547D\u4EE4(\u6253\u5305/\u672C\u5730\u5B89\u88C5/\u53D1\u5E03\u5230\u79C1\u670D)</span>
mvn clean package <span class="token function">install</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u79C1\u670D\u4E0A\u67E5\u770B\u5305</p>`,25),o=["src"],i=a(`<p>\u6B64\u914D\u7F6E\u6210\u529F</p><h3 id="\u914D\u7F6E-aliyun-\u955C\u50CF\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-aliyun-\u955C\u50CF\u4E0A\u4F20" aria-hidden="true">#</a> \u914D\u7F6E aliyun \u955C\u50CF\u4E0A\u4F20</h3><p>\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cr.console.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u547D\u540D\u7A7A\u95F4<code>alinesno-cloud</code>,\u5982\u679C\u6CA1\u6709\u521B\u5EFA\u7A7A\u95F4\u5219\u4E0A\u4F20\u7684\u65F6\u5019\u51FA\u5F02\u5E38</p><p>\u914D\u7F6E maven,\u5728 settings.xml \u6DFB\u52A0\u963F\u91CC\u4E91\u8BA4\u8BC1\uFF0C\u5728<code>servers</code>\u6807\u7B7E\u91CC\u9762\u6DFB\u52A0</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>docker-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>\u963F\u91CC\u4E91\u8D26\u53F7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>\u4ED3\u5E93\u5BC6\u7801(\u975E\u963F\u91CC\u4E91\u5BC6\u7801)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>email</span><span class="token punctuation">&gt;</span></span>\u963F\u91CC\u4E91\u8D26\u53F7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>email</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 parent \u7236\u7C7B\u7684<code>pom.xml</code>\u91CC\u9762\u6DFB\u52A0 docker \u6253\u5305\u63D2\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- docker registry \u5FCF\u6094 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.repostory</span><span class="token punctuation">&gt;</span></span>registry.cn-shenzhen.aliyuncs.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.repostory</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.name</span><span class="token punctuation">&gt;</span></span>alinesno-cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.maven.plugin.version</span><span class="token punctuation">&gt;</span></span>0.4.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.maven.plugin.version</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- docker \u63D2\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.spotify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${docker.maven.plugin.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u955C\u50CF\u4E2D\u5FC3 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>serverId</span><span class="token punctuation">&gt;</span></span>docker-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>serverId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>registryUrl</span><span class="token punctuation">&gt;</span></span>\${docker.repostory}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>registryUrl</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- \u4F18\u5316\u53C2\u6570 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>forceTags</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>forceTags</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTags</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTag</span><span class="token punctuation">&gt;</span></span>\${project.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTag</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageTag</span><span class="token punctuation">&gt;</span></span>latest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTag</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageTags</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- \u6253\u5305 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>imageName</span><span class="token punctuation">&gt;</span></span>\${docker.repostory}/\${docker.registry.name}/\${project.artifactId}:\${project.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>imageName</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baseImage</span><span class="token punctuation">&gt;</span></span>java:8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baseImage</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entryPoint</span><span class="token punctuation">&gt;</span></span>[&quot;java&quot;, &quot;-Djava.security.egd=file:/dev/./urandom&quot;, &quot;-jar&quot;, &quot;/ROOT/\${project.build.finalName}.jar&quot;]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entryPoint</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>targetPath</span><span class="token punctuation">&gt;</span></span>/ROOT/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>targetPath</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>\${project.build.finalName}.jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u63D2\u4EF6\u91CC\u9762\u7684serverId\u8981\u4E0Emaven\u914D\u7F6E\u7684server\u7684id\u8981\u4E00\u6837</code></p><p>\u5728 sts \u4E2D\uFF0C\u6253\u5305\u955C\u50CF\u5E76\u4E0A\u4F20\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn clean package docker:build docker:push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),u=["src"],k=n("p",null,[n("code",null,"\u4E0A\u4F20\u901F\u5EA6\u770B\u7F51\u7EDC,\u5EFA\u7ACB\u5728\u547D\u4EE4\u884C\u4E2D\u914D\u7F6E")],-1);function g(s,d){return p(),e("div",null,[c,n("img",{src:s.$withBase("/operation/nexus_07.png")},null,8,o),i,n("img",{src:s.$withBase("/operation/maven_01.jpg")},null,8,u),k])}var v=t(l,[["render",g],["__file","01_Maven\u672C\u5730\u5B89\u88C5.html.vue"]]);export{v as default};
