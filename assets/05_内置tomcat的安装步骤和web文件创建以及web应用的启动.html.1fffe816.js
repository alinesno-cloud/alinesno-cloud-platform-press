import{_ as a,o as n,c as s,d as t}from"./app.477a6555.js";var p="/firstlearn/dubbo/111.png";const e={},c=t(`<h1 id="\u5185\u7F6E-tomcat-\u7684\u5B89\u88C5\u5E94\u7528\u7684\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E-tomcat-\u7684\u5B89\u88C5\u5E94\u7528\u7684\u542F\u52A8" aria-hidden="true">#</a> \u5185\u7F6E tomcat \u7684\u5B89\u88C5\u5E94\u7528\u7684\u542F\u52A8</h1><ul><li>\u5728 pom \u6587\u4EF6\u7684\u7ED3\u5C3E\uFF0C\u52A0\u4E0A tomcat \u7684\u914D\u7F6E\u8BED\u53E5\uFF1B</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>

			<span class="token comment">&lt;!-- tomcat7 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useBodyEncodingForURI</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>useBodyEncodingForURI</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">&gt;</span></span>8082<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728 src-main \u6587\u4EF6\u5939\u4E0B\uFF0C\u521B\u5EFA webapp-WEB-INF \u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u5728 webapp \u4E0B\u521B\u5EFA index.html\uFF0C\u5728 WEB-INF \u4E0B\u521B\u5EFA web.xml\u3002</li></ul><p>web.xml \u4E0B\u7684\u521B\u5EFA\u8BED\u53E5\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>	<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>web</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WebApp_ID<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>display-name</span><span class="token punctuation">&gt;</span></span>db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>display-name</span><span class="token punctuation">&gt;</span></span>

	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file-list</span><span class="token punctuation">&gt;</span></span>
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>index.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file-list</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ps\uFF1A\uFF081\uFF09\u521B\u5EFA\u6210\u529F\u540E tomcat \u7684\u63D2\u4EF6\u4F1A\u81EA\u52A8\u52A0\u8F7D\u3002\uFF082\uFF09\u521B\u5EFA\u6587\u4EF6\u5939\u548C xml\u3001html \u6587\u4EF6\u662F\u540D\u5B57\u4E0D\u8981\u8F93\u9519\u3002</p></blockquote><h4 id="\u8981\u5C06-pom-\u4E2D\u7684-packaging-\u6539\u6210-war\u3002" tabindex="-1"><a class="header-anchor" href="#\u8981\u5C06-pom-\u4E2D\u7684-packaging-\u6539\u6210-war\u3002" aria-hidden="true">#</a> \u8981\u5C06 pom \u4E2D\u7684 packaging \u6539\u6210 war\u3002</h4><p class="show-images"><img src="`+p+'" width="%60"></p><h4 id="web-\u7684\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#web-\u7684\u542F\u52A8" aria-hidden="true">#</a> web \u7684\u542F\u52A8</h4><p>\u53F3\u51FB\u9879\u76EE\uFF0C\u73B0\u5728 run as-maven build\u3002\u542F\u7528\u8BED\u53E5\uFF1Atomcat7\uFF1Arun</p><blockquote><p>Ps\uFF1Atomcat \u662F\u54EA\u4E2A\u7248\u672C\u5C31\u5199\u54EA\u4E2A\u7248\u672C\u3002</p></blockquote><h4 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h4><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF1A\u8F93\u5165\uFF1Ahttp://localhost:\u7AEF\u53E3\u3002</p>',14),l=[c];function o(u,i){return n(),s("div",null,l)}var d=a(e,[["render",o],["__file","05_\u5185\u7F6Etomcat\u7684\u5B89\u88C5\u6B65\u9AA4\u548Cweb\u6587\u4EF6\u521B\u5EFA\u4EE5\u53CAweb\u5E94\u7528\u7684\u542F\u52A8.html.vue"]]);export{d as default};
