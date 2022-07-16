import{_ as t,o as l,c as p,a as s,e,b as n,d as o,r}from"./app.5d626836.js";const i={},c=s("h1",{id:"\u4E1A\u52A1\u670D\u52A1-docker-\u955C\u50CF\u5316",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E1A\u52A1\u670D\u52A1-docker-\u955C\u50CF\u5316","aria-hidden":"true"},"#"),n(" \u4E1A\u52A1\u670D\u52A1 Docker \u955C\u50CF\u5316")],-1),d=s("h2",{id:"\u5DE5\u7A0B\u793A\u4F8B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5DE5\u7A0B\u793A\u4F8B","aria-hidden":"true"},"#"),n(" \u5DE5\u7A0B\u793A\u4F8B")],-1),v=n("docker \u955C\u50CF\u5316\u5DE5\u7A0B\u793A\u4F8B"),m={href:"http://git.linesno.com/alinsno-cloud-platform-rutron/acp-ini-demo",target:"_blank",rel:"noopener noreferrer"},k=n("\u6253\u5F00"),u=n("docker \u955C\u50CF\u5316\u6F14\u793A\u5E94\u7528"),b={href:"http://demo.ui.lbxinhu.linesno.com/",target:"_blank",rel:"noopener noreferrer"},g=n("\u6253\u5F00"),_=n(" \u6F14\u793A\u8D26\u53F7\u5BC6\u7801: suze_test/123456"),h=o(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u4F7F\u7528 jib \u63D2\u4EF6\u5E2E\u540E\u7AEF\u6253\u955C\u50CF</li><li>\u4F7F\u7528 dockerfile \u5E2E\u524D\u7AEF\u6253\u955C\u50CF</li><li>\u4F7F\u7528 docker-compose \u90E8\u7F72\u5E94\u7528</li></ul><h2 id="\u4F7F\u7528-jib-\u63D2\u4EF6\u5E2E\u540E\u7AEF\u6253\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-jib-\u63D2\u4EF6\u5E2E\u540E\u7AEF\u6253\u955C\u50CF" aria-hidden="true">#</a> \u4F7F\u7528 jib \u63D2\u4EF6\u5E2E\u540E\u7AEF\u6253\u955C\u50CF</h2><p>\u8FD9\u91CC\u6253\u955C\u50CF\u4F7F\u7528\u7684\u63D2\u4EF6\u662F jib-maven-plugin \u5728 pom.xml \u6587\u4EF6\u4E2D\u53F0\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>      <span class="token operator">&lt;</span>build<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>plugins<span class="token operator">&gt;</span>
             <span class="token operator">&lt;</span>plugin<span class="token operator">&gt;</span>
                 <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>com.google.cloud.tools<span class="token operator">&lt;</span>/groupId<span class="token operator">&gt;</span>
                 <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>jib-maven-plugin<span class="token operator">&lt;</span>/artifactId<span class="token operator">&gt;</span>
                 <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">3.1</span>.<span class="token operator"><span class="token file-descriptor important">4</span>&lt;</span>/version<span class="token operator">&gt;</span>
                 <span class="token operator">&lt;</span>configuration<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>from<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span><span class="token operator">!</span>--  \u57FA\u7840\u955C\u50CF\uFF0C\u7531\u4E8E\u4E2D\u53F0\u5DE5\u7A0B\u4F7F\u7528\u7684jdk\u4E3A11\u7248\u672C\uFF0C\u8FD9\u91CC\u4F7F\u7528jdk11\u7684\u57FA\u7840\u955C\u50CF --<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>image<span class="token operator">&gt;</span>registry.cn-shenzhen.aliyuncs.com/alinesno-base/openjdk11:11.0.<span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>/image<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>/from<span class="token operator">&gt;</span>
                      <span class="token operator">&lt;</span>\u6253\u51FA\u7684\u955C\u50CF\u7684tag\u8BBE\u7F6E<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>to<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>image<span class="token operator">&gt;</span>
                                 <span class="token operator">&lt;</span><span class="token operator">!</span>--   docker_repostory  \u4E3A\u955C\u50CF\u4ED3\u5E93\u5730\u5740 \uFF0C docker_registry_name\u4E3A\u955C\u50CF\u4ED3\u5E93\u9879\u76EE\u540D
                                           project.artifactId\u4E3A\u955C\u50CF\u540D\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u5DE5\u7A0BartifactId \uFF0C
                                           project.version\u4E3A\u955C\u50CF\u7248\u672C \uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u5DE5\u7A0B\u7248\u672C--<span class="token operator">&gt;</span>
                                <span class="token operator">&lt;</span>docker_repostory<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>docker_registry_name<span class="token operator">&gt;</span>/<span class="token variable">\${project.artifactId}</span><span class="token builtin class-name">:</span><span class="token variable">\${project.version}</span>
                         <span class="token operator">&lt;</span>/image<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span><span class="token operator">!</span>--
                         <span class="token operator">&lt;</span>tags<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span><span class="token punctuation">{</span>project.version<span class="token punctuation">}</span><span class="token operator">&lt;</span>/tag<span class="token operator">&gt;</span>   <span class="token operator">&lt;</span><span class="token operator">!</span>-- project.version\u5DE5\u7A0B\u7248\u672C\u53F7 --<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>latest<span class="token operator">&lt;</span>/tag<span class="token operator">&gt;</span> --<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>/tags<span class="token operator">&gt;</span>
                          --<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>auth<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span><span class="token operator">!</span>--\u5728docker-hub\u6216\u8005\u963F\u91CC\u4E91\u4E0A\u7684\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u8FD9\u91CC\u7528\u73AF\u5883\u53D8\u91CF\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u9002\u914D--<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span><span class="token variable">\${env.REGISTRY_USERNAME}</span><span class="token operator">&lt;</span>/username<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span><span class="token variable">\${env.REGISTRY_PASSWORD}</span><span class="token operator">&lt;</span>/password<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>/auth<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>/to<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>container<span class="token operator">&gt;</span>
                          <span class="token operator">&lt;</span><span class="token operator">!</span>--  \u670D\u52A1\u542F\u52A8\u914D\u7F6E  --<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>jvmFlags<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Dfile.encoding<span class="token operator">=</span>UTF-<span class="token operator"><span class="token file-descriptor important">8</span>&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                              <span class="token operator">&lt;</span><span class="token operator">!</span>--
                              \u8C03\u6574\u6210 -e <span class="token assign-left variable">JAVA_TOOL_OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;-Xms128m -Xmx512m -Dspring.profiles.active=hub&quot;</span>
                              \u4F20\u9012\u53C2\u6570,\u4EE5\u9002\u5E94\u591A\u79CD\u73AF\u5883
                              <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Xms128m<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                              <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Xmx512m<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                              <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Dspring.profiles.active<span class="token operator">=</span>hub<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                              <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-XX:+UseParNewGC<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                              <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-XX:+UseConcMarkSweepGC<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                               --<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-XX:+DisableExplicitGC<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Xdebug<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Duser.timezone<span class="token operator">=</span>GMT+0<span class="token operator"><span class="token file-descriptor important">8</span>&lt;</span>/jvmFlag<span class="token operator">&gt;</span>
                             <span class="token operator">&lt;</span>jvmFlag<span class="token operator">&gt;</span>-Djava.security.egd<span class="token operator">=</span>file:/dev/./urandom<span class="token operator">&lt;</span>/jvmFlag<span class="token operator">&gt;</span>

                         <span class="token operator">&lt;</span>/jvmFlags<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span><span class="token operator">!</span>--  \u6821\u51C6\u65F6\u95F4,\u8BBE\u7F6E\u6784\u5EFA\u955C\u50CF\u7684\u65F6\u95F4  --<span class="token operator">&gt;</span>
                         <span class="token operator">&lt;</span>useCurrentTimestamp<span class="token operator">&gt;</span>true<span class="token operator">&lt;</span>/useCurrentTimestamp<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>/container<span class="token operator">&gt;</span>
                      <span class="token operator">&lt;</span><span class="token operator">!</span>-- \u5141\u8BB8\u4F7F\u7528http\u8FDE\u63A5\u955C\u50CF\u4ED3\u5E93,\u9ED8\u8BA4\u4E3Afalse,\u53EF\u4EE5\u8BBE\u7F6E\u4E3Atrue --<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>allowInsecureRegistries<span class="token operator">&gt;</span>false<span class="token operator">&lt;</span>/allowInsecureRegistries<span class="token operator">&gt;</span>
                 <span class="token operator">&lt;</span>/configuration<span class="token operator">&gt;</span>
             <span class="token operator">&lt;</span>/plugin<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>/plugins<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>/build<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u597D pom.xml \u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u901A\u8FC7 mvn compile jib:build \u6253\u5305\u955C\u50CF\u5E76\u53D1\u5E03\u5230\u955C\u50CF\u4ED3\u5E93\uFF0C\u901A\u8FC7 mvn compile jib:dockerBuild \u6253\u5305\u955C\u50CF\u5230\u672C\u5730, \u4E2D\u53F0\u5DE5\u7A0B\u5DF2\u7ECF\u96C6\u6210 jib-maven-plugin \u7EC4\u4EF6\uFF0C\u8981\u6539\u53D8\u955C\u50CF\u4ED3\u5E93\u5730\u5740\u65F6\u53EF\u4EE5\u901A\u8FC7\u5728\u6784\u5EFA\u65F6 -Djib.to.image \u6765\u8BBE\u7F6E</p><h2 id="\u4F7F\u7528-dockerfile-\u5E2E\u524D\u7AEF\u6253\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-dockerfile-\u5E2E\u524D\u7AEF\u6253\u955C\u50CF" aria-hidden="true">#</a> \u4F7F\u7528 dockerfile \u5E2E\u524D\u7AEF\u6253\u955C\u50CF</h2><p>\u5728\u5DE5\u7A0B ui \u6A21\u5757\u4E0B\u521B\u5EFA Dockerfile \u6587\u4EF6,\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> FROM registry.cn-shenzhen.aliyuncs.com/alinesno-base/nginx-alpha:1.1.0     <span class="token comment">#\u57FA\u7840\u955C\u50CF</span>
 WORKDIR /usr/share/nginx/html               <span class="token comment"># \u5DE5\u4F5C\u76EE\u5F55</span>

 <span class="token comment"># \u5C06dist\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u590D\u5236\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B\uFF0C\u8FD9\u91CC\u8981\u5DE5\u7A0B\u5148\u6784\u5EFA\u5230 dist \u76EE\u5F55\u4E0B</span>
 COPY ./dist ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u5728 ui \u6A21\u5757\u4E0B\u521B\u5EFA\u6587\u4EF6 build-docker.sh\uFF0C\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># !/bin/sh</span>

<span class="token comment"># \u955C\u50CF\u53C2\u6570</span>
 <span class="token assign-left variable">docker_repostory</span><span class="token operator">=</span>  <span class="token operator">&lt;</span>docker_repostory<span class="token operator">&gt;</span>  <span class="token comment">#docker_repostory\u6307\u955C\u50CF\u4ED3\u5E93\u5730\u5740</span>
 <span class="token assign-left variable">docker_registry_name</span><span class="token operator">=</span><span class="token operator">&lt;</span>docker_registry_name<span class="token operator">&gt;</span>  <span class="token comment">#docker_registry_name\u6307\u955C\u50CF\u4ED3\u5E93\u9879\u76EE\u540D</span>
 <span class="token assign-left variable">project_artifactid</span><span class="token operator">=</span><span class="token operator">&lt;</span>project_artifactid<span class="token operator">&gt;</span>  <span class="token comment">#project_artifactid\u6307\u955C\u50CF\u540D</span>
 <span class="token assign-left variable">project_version</span><span class="token operator">=</span><span class="token operator">&lt;</span>project_version<span class="token operator">&gt;</span>  <span class="token comment">#project_version\u6307\u955C\u50CF\u7248\u672C\u53F7</span>

 <span class="token comment"># \u6784\u5EFA\u955C\u50CF</span>
 <span class="token function">docker</span> build -t <span class="token variable">\${docker_repostory}</span>/<span class="token variable">\${docker_registry_name}</span>/<span class="token variable">\${project_artifactid}</span><span class="token builtin class-name">:</span><span class="token variable">\${project_version}</span> <span class="token builtin class-name">.</span>

 <span class="token comment"># \u53D1\u5E03\u955C\u50CF</span>
 <span class="token function">docker</span> push <span class="token variable">\${docker_repostory}</span>/<span class="token variable">\${docker_registry_name}</span>/<span class="token variable">\${project_artifactid}</span><span class="token builtin class-name">:</span><span class="token variable">\${project_version}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),f=n("\u6CE8\u610F\uFF1A \u4EE3\u7801\u751F\u6210\u5668\u751F\u6210\u5DE5\u7A0B"),j={href:"http://alinesno-platform.linesno.com/technique/09_%E5%BC%80%E5%8F%91%E6%8E%A5%E5%85%A5/02_%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81.html",target:"_blank",rel:"noopener noreferrer"},E=n("\u6253\u5F00"),R=n("\u5DF2\u7ECF\u81EA\u52A8\u751F\u6210\u76F8\u5E94\u7684 dockerfile \u548C build-docker.sh \u6587\u4EF6\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528"),S=o(`<p>\u8FD9\u6837\uFF0C\u7B49\u524D\u7AEF\u6784\u5EFA\u597D\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C build-docker.sh \u6784\u5EFA\u597D\u524D\u7AEF\u955C\u50CF</p><p>\u4F7F\u7528 docker-compose \u90E8\u7F72\u5E94\u7528 docker-compose \u662F\u4E00\u4E2A\u5173\u8054 docker \u5BB9\u5668\u7684\u5DE5\u5177\uFF0C\u4ED6\u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u591A\u4E2A\u5BB9\u5668\uFF0C\u901A\u8FC7 docker-compose \u53EF\u4EE5\u5BF9\u5E94\u7528\u8FDB\u884C\u90E8\u7F72</p><p>docker-compose.yaml \u811A\u672C\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> version: <span class="token string">&quot;3&quot;</span>
 services:
     services_name:
        <span class="token comment">#\u6620\u5C04\u7AEF\u53E3</span>
         ports:
             - <span class="token string">&quot;38080:8080&quot;</span>
          <span class="token comment">#\u526F\u672C\u6570\u91CF\uFF0C\u8FD9\u91CC\u4E3A1</span>
         deploy:
             replicas: <span class="token number">1</span>
         image:   <span class="token operator">&lt;</span>image_url<span class="token operator">&gt;</span>   <span class="token comment">#\u955C\u50CF\u5730\u5740</span>
         <span class="token comment">#  \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</span>
         environment:
             - <span class="token assign-left variable">SPRING_APPLICATION_NAME</span><span class="token operator">=</span>alinesno-cloud-yyt-shop
             - <span class="token assign-left variable">JAVA_TOOL_OPTIONS</span><span class="token operator">=</span>-Xms128m -Xmx512m -Dspring.profiles.active<span class="token operator">=</span>hub
             - <span class="token assign-left variable">SERVER_PORT</span><span class="token operator">=</span><span class="token number">8080</span>                    <span class="token comment">#\u5E94\u7528\u542F\u52A8\u7AEF\u53E3</span>
             - <span class="token assign-left variable">REDIS_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
             - <span class="token assign-left variable">REDIS_PORT</span><span class="token operator">=</span><span class="token number">6379</span>
             - <span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span><span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>   <span class="token comment">#password:  redis\u5BC6\u7801</span>
         <span class="token comment">#\u6570\u636E\u5377</span>
         volumes:
             - <span class="token string">&quot;/etc/localtime:/etc/localtime&quot;</span>
             - <span class="token string">&quot;./app/upload-files:/root/alinesno-upload-files&quot;</span>
             - <span class="token string">&quot;./app/upload-files:/tmp&quot;</span>
 <span class="token comment">#\u5BB9\u5668\u7F51\u7EDC\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u7F51\u6BB5\u4E3A172.201.0.0\uFF0C\u9632\u6B62\u8DEF\u7531\u51B2\u7A81</span>
 networks:
     suinet:
         ipam:
             config:
             - subnet: <span class="token number">172.201</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728 docker-compose \u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7136\u540E\u901A\u8FC7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E \u5982\u4E0A\u9762\u793A\u4F8B\u4E2D\u7684 redis \u914D\u7F6E\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BF9\u5E94\u5982\u4E0B\u914D\u7F6E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   redis:
     host: <span class="token variable">\${REDIS_HOST}</span>
     port: <span class="token variable">\${REDIS_PORT}</span>
     password: <span class="token variable">\${REDIS_PASSWORD}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7 docker-compose.yaml \u5BF9\u9879\u76EE\u8FDB\u884C\u914D\u7F6E\u4E86 \u5C31\u50CF\u6F14\u793A\u5DE5\u7A0B\u4E2D\u7684\u540E\u7AEF\u7684 docker-compose.yaml</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> version: <span class="token string">&quot;3&quot;</span>
 services:
     demo-service:
        <span class="token comment">#\u6620\u5C04\u7AEF\u53E3</span>
         ports:
             - <span class="token string">&quot;38080:8080&quot;</span>
          <span class="token comment">#\u526F\u672C\u6570\u91CF\uFF0C\u8FD9\u91CC\u4E3A1</span>
         deploy:
             replicas: <span class="token number">1</span>
         image: project_image_url   <span class="token comment">#\u955C\u50CF\u5730\u5740</span>
         <span class="token comment">#  \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</span>
         environment:
             - <span class="token assign-left variable">SPRING_APPLICATION_NAME</span><span class="token operator">=</span>SUZE_TEST
             - <span class="token assign-left variable">JAVA_TOOL_OPTIONS</span><span class="token operator">=</span> -Xms128m -Xmx512m -Dspring.profiles.active<span class="token operator">=</span>hub
             - <span class="token assign-left variable">SERVER_PORT</span><span class="token operator">=</span><span class="token number">8080</span>                    <span class="token comment">#\u5E94\u7528\u542F\u52A8\u7AEF\u53E3</span>
             - <span class="token assign-left variable">REDIS_HOST</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>VfKVXnavjlwb42Sfo8oF3H1UB3iJFmgb<span class="token punctuation">)</span>
             - <span class="token assign-left variable">REDIS_PORT</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>l1gtKPHUtWk83ZflT9xNFQ<span class="token operator">==</span><span class="token punctuation">)</span>
             - <span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>ZCcv8B6TyhvMHcARsUj+LvpcMiwndFKOMP/qKsLhBC8<span class="token operator">=</span><span class="token punctuation">)</span>
             - <span class="token assign-left variable">DATASOURCE_URL</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>mUOUukYqxfCd/ZnlgE+SIUJuu8+ldqcJRt1Z8CbWJUwaNwqpPB4YQAP/e9vwJyA0QKuQFPEyfO1cu57E0NKbALaOsBZ/e1xj6lt5eF5vqUFZh8Adgyz2+5hDj+lqHJeXAdfPBv2f7XRVJeM2KF1+QFakACU/MJdjfLvpgHRONlPQeGrehxTGQgpjkrveBB77CXmqDYSjEck<span class="token operator">=</span><span class="token punctuation">)</span>
             - <span class="token assign-left variable">DATASOURCE_USERNAME</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>btFx+DeL1C4/DYK8QFXfIntzcXld/ajo<span class="token punctuation">)</span>
             - <span class="token assign-left variable">DATASOURCE_PASSWORD</span><span class="token operator">=</span>ENC<span class="token punctuation">(</span>9C5Pev/FjL94gVbPJfaoxGEi8nkXHsNQ<span class="token punctuation">)</span>
         <span class="token comment">#\u6570\u636E\u5377</span>
         volumes:
             - <span class="token string">&quot;/etc/localtime:/etc/localtime&quot;</span>
             - <span class="token string">&quot;./app/upload-files:/root/alinesno-upload-files&quot;</span>
             - <span class="token string">&quot;./app/upload-files:/tmp&quot;</span>
 <span class="token comment">#\u5BB9\u5668\u7F51\u7EDC\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u7F51\u6BB5\u4E3A172.201.0.0\uFF0C\u9632\u6B62\u8DEF\u7531\u51B2\u7A81</span>
 networks:
     servicenet:
         ipam:
             config:
             - subnet: <span class="token number">172.201</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D\u7AEF\u7684 docker-compose.yaml</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
    demo-ui:
       <span class="token comment">#\u6620\u5C04\u7AEF\u53E3</span>
        ports:
          - <span class="token string">&quot;38081:80&quot;</span>
         <span class="token comment">#\u526F\u672C\u6570\u91CF\uFF0C\u8FD9\u91CC\u4E3A1</span>
        deploy:
          replicas: <span class="token number">1</span>
        image:   project_image_url   <span class="token comment">#\u955C\u50CF\u5730\u5740</span>
        <span class="token comment">#  \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</span>
        environment:
          - <span class="token assign-left variable">API_BASE_URL</span><span class="token operator">=</span>http://demo.service.lbxinhu.linesno.com
          - <span class="token assign-left variable">SERVER_CDN_URL</span><span class="token operator">=</span>
          - <span class="token assign-left variable">SERVER_STORAGE_UPLOAD_URL</span><span class="token operator">=</span>http://alinesno-saas.admin.dev.rutron.cn/common/storage/upload
          - <span class="token assign-left variable">SERVER_STORAGE_DISPLAY_URL</span><span class="token operator">=</span>http://alinesno-storage.admin.dev.rutron.cn/storage/displayImg/
        <span class="token comment">#\u6570\u636E\u5377</span>
        volumes:
          - <span class="token string">&quot;/etc/localtime:/etc/localtime&quot;</span>
<span class="token comment">#\u5BB9\u5668\u7F51\u7EDC\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u7F51\u6BB5\u4E3A172.202.0.0\uFF0C\u9632\u6B62\u8DEF\u7531\u51B2\u7A81</span>
networks:
    uinet:
        ipam:
            config:
            - subnet: <span class="token number">172.202</span>.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function A(O,D){const a=r("ExternalLinkIcon");return l(),p("div",null,[c,d,s("ul",null,[s("li",null,[v,s("a",m,[k,e(a)])]),s("li",null,[u,s("a",b,[g,e(a)]),_])]),h,s("p",null,[f,s("a",j,[E,e(a)]),R]),S])}var I=t(i,[["render",A],["__file","01_\u4E1A\u52A1\u670D\u52A1Docker\u955C\u50CF\u5316.html.vue"]]);export{I as default};
