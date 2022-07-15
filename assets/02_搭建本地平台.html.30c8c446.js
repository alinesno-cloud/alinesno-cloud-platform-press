import{_ as a}from"./undraw_online_friends_x73e.963316f3.js";import{_ as o,o as d,c as s,a as t,e as n,d as r,b as l,r as i}from"./app.aad0590e.js";const c={},h=r('<h2 id="\u672C\u5730\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u521D\u59CB\u5316" aria-hidden="true">#</a> \u672C\u5730\u521D\u59CB\u5316</h2><p class="show-images"><img src="'+a+`" width="40%"></p><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><blockquote><p>\u6B64\u64CD\u4F5C\u662F\u53EF\u9009\u6A21\u5F0F(\u53EF\u4EE5\u4F7F\u7528\u516C\u7F51,\u4E0D\u8FC7\u4E3A\u4E86\u6548\u7387\u8C03\u6574\u4E3A\u672C\u5730\u6F14\u793A,\u540C\u65F6\u4FBF\u4E8E\u5E73\u53F0\u7684\u8FC1\u79FB\u642D\u5EFA)</p></blockquote><p>\u7531\u4E8E\u516C\u7F51\u7684\u7F51\u7EDC\u548C\u8FDE\u63A5\u7B49\u901F\u5EA6\u6548\u7387\u90FD\u4E0D\u662F\u7279\u522B\u9AD8,\u6240\u4EE5\u4F7F\u7528\u672C\u5730\u642D\u5EFA\u5E73\u53F0,\u6216\u8005\u5E73\u53F0\u8FC1\u79FB\uFF0C\u6B64\u5904\u4F7F\u7528<code>docker-compose</code>\u96C6\u6210\uFF0C \u6216\u8005 k8s \u8FC1\u79FB\uFF0C\u4FBF\u4E8E\u56E2\u961F\u5185\u90E8\u73AF\u5883\u96C6\u6210\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u57FA\u7840 Jar \u5305\u96C6\u6210\u65B9\u5F0F\u505A\u4E3A\u53C2\u8003</p><h3 id="fastjar-\u672C\u5730\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#fastjar-\u672C\u5730\u90E8\u7F72" aria-hidden="true">#</a> FastJar \u672C\u5730\u90E8\u7F72</h3><blockquote><p>\u4F01\u4E1A\u5185\u90E8\u63A8\u8350\u6B64\u65B9\u5F0F</p></blockquote><h4 id="\u57FA\u7840\u5DE5\u7A0B\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5DE5\u7A0B\u90E8\u7F72" aria-hidden="true">#</a> \u57FA\u7840\u5DE5\u7A0B\u90E8\u7F72</h4><p>\u57FA\u7840\u5DE5\u7A0B\u90E8\u7F72\u6309\u9700\u90E8\u7F72\u5373\u53EF\uFF0C\u4EE5\u4E0B\u90E8\u7F72\u7684\u5DE5\u7A0B</p><h4 id="jenkins-\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#jenkins-\u96C6\u6210" aria-hidden="true">#</a> Jenkins \u96C6\u6210</h4><p>\u6B64\u5904\u4E3A\u63D0\u4F9B\u53C2\u8003</p><blockquote><p>\u56FE</p></blockquote><h3 id="docker-compose-\u672C\u5730\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u672C\u5730\u5B89\u88C5" aria-hidden="true">#</a> Docker-Compose \u672C\u5730\u5B89\u88C5</h3><p>\u9488\u5BF9\u4E8E CentOS7 \u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL http://gitbook.alinesno.com/document-platform-guide/tools/install-platform-local.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u672C\u5730\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u73AF\u5883" aria-hidden="true">#</a> \u672C\u5730\u73AF\u5883</h4><p>\u8BBF\u95EE\u5730\u5740</p><table><thead><tr><th>\u670D\u52A1</th><th>\u5730\u5740</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>mysql5.7</td><td>localhost:3306</td><td>\u8D26\u53F7:root/admin</td></tr><tr><td>phpmyadmin</td><td>localhost:8081</td><td>\u8D26\u53F7:root/admin</td></tr><tr><td>zookeeper</td><td>localhost:2181</td><td></td></tr><tr><td>dubbo-admin</td><td>localhost:8080</td><td></td></tr><tr><td>redis</td><td>localhost:6379</td><td>\u5BC6\u7801:alinesno</td></tr><tr><td>alinesno-base-boot</td><td>localhost:30002</td><td>\u57FA\u7840\u670D\u52A1</td></tr><tr><td>alinesno-base-portal-web</td><td>localhost:27001</td><td>\u95E8\u6237\u670D\u52A1</td></tr></tbody></table><p>\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u901A\u8FC7\u754C\u9762\u5BFC\u5165\u6570\u636E\u5E93,\u4E0B\u8F7D\u5730\u5740:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://gitbook.alinesno.com/document-platform-guide/tools/mysql-init.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F8\u5173\u8D44\u6599:</p>`,21),p={href:"http://gitbook.lbxinhu.com/document-platform-service-technique/06_%E5%BC%80%E5%8F%91%E6%95%99%E7%A8%8B/01_%E6%9C%AC%E5%9C%B0%E8%B0%83%E8%AF%95.html",target:"_blank",rel:"noopener noreferrer"},u=l("\u914D\u7F6E\u672C\u5730\u5F00\u53D1");function m(b,_){const e=i("ExternalLinkIcon");return d(),s("div",null,[h,t("ul",null,[t("li",null,[t("a",p,[u,n(e)])])])])}var v=o(c,[["render",m],["__file","02_\u642D\u5EFA\u672C\u5730\u5E73\u53F0.html.vue"]]);export{v as default};
