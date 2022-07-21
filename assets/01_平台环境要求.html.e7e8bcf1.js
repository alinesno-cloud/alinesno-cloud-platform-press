import{_ as n,o as s,c as a,d as t}from"./app.2bc6ad52.js";const p={},e=t(`<h1 id="\u5F00\u53D1\u73AF\u5883\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u8981\u6C42" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u8981\u6C42</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5F00\u53D1\u73AF\u5883\u6700\u7B80\u5316\uFF0C\u7BA1\u7406\u548C\u8FD0\u7EF4\u6700\u7B80\u5355\u5316\uFF0C\u907F\u514D\u590D\u6742</p><h2 id="\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h2><p>\u6B64\u6B65\u4E3A\u5F00\u53D1\u4EBA\u5458\u516C\u7F51\u73AF\u5883\u642D\u5EFA\uFF0C\u573A\u666F\u4E3A\u5F00\u53D1\u4EBA\u5458\uFF0C\u5F00\u53D1\u9879\u76EE\u4F7F\u7528\uFF0C\u6253\u5305\u548C\u6784\u5EFA\u7531\u5E73\u53F0\u7EDF\u4E00\u5904\u7406\u3002</p><ul><li>\u3010\u5FC5\u987B\u3011Idea/Eclipse/STS(\u6700\u65B0\u7248\u672C)\uFF1A\u5F00\u53D1\u5DE5\u5177</li><li>\u3010\u5FC5\u987B\u3011Maven3.6+\uFF1A\u6253\u5305\u5DE5\u5177</li><li>\u3010\u975E\u5FC5\u987B\u3011Redis3.2.5+\uFF1A\u7F13\u5B58</li><li>\u3010\u5FC5\u987B\u3011MySQL5.7+\uFF1A\u6570\u636E\u5E93</li></ul><p><code>Redis\u4E5F\u53EF\u4F7F\u7528\u9ED8\u8BA4\u516C\u7F51\u73AF\u5883\uFF0C\u4F46\u5F71\u54CD\u5F00\u53D1\u6548\u7387\uFF0C\u9650\u9A8C\u8BC1\u9891\u7E41\u8FDE\u63A5Redis</code></p><h2 id="\u79C1\u670D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u79C1\u670D\u914D\u7F6E" aria-hidden="true">#</a> \u79C1\u670D\u914D\u7F6E</h2><p>\u5728<code>alinesno-settings.xml</code>\u4E2D\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u672C\u5730\u5730\u5740
             &lt;localRepository&gt;\u672C\u5730\u5730\u5740/repository&lt;/localRepository&gt;
    --&gt;</span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- aliyun docker \u955C\u50CF\u4ED3\u5E93\u7528\u6237\u540D\u5BC6\u7801 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>docker-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>\u8D26\u53F7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>\u5BC6\u7801<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>email</span><span class="token punctuation">&gt;</span></span>\u8D26\u53F7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>email</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*,!alinesno<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alinesno<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>alinesno<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://nexus.lbxinhu.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u5B8C\u6210.</p><h2 id="\u57FA\u7840\u5E73\u53F0\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5E73\u53F0\u642D\u5EFA" aria-hidden="true">#</a> \u57FA\u7840\u5E73\u53F0\u642D\u5EFA</h2><blockquote><p>\u6B64\u6B65\u4E3A\u53EF\u9009\uFF0C\u5982\u4E0D\u5728\u672C\u5730\uFF0C\u4FBF\u4F7F\u7528\u7684\u662F\u516C\u7F51\u7684\u73AF\u5883\uFF0C\u573A\u666F\u4E3A\u56E2\u961F\u5185\u90E8\uFF0C\u5177\u4F53\u642D\u5EFA\u8BF7\u53C2\u8003[\u642D\u5EFA\u672C\u5730\u5E73\u53F0]\u7AE0\u8282</p></blockquote><ul><li>CentOS7.*_x64 \u4F4D</li></ul>`,14),l=[e];function c(o,i){return s(),a("div",null,l)}var k=n(p,[["render",c],["__file","01_\u5E73\u53F0\u73AF\u5883\u8981\u6C42.html.vue"]]);export{k as default};
