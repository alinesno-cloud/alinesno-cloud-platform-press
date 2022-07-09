import{_ as i,r as s,o as r,c as l,a as e,e as d,d as o,b as a}from"./app.675cbf49.js";const h={},t=o(`<h1 id="\u90E8\u7F72\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6559\u7A0B" aria-hidden="true">#</a> \u90E8\u7F72\u6559\u7A0B</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6B64\u6559\u7A0B\u9488\u5BF9\u7684\u662F\u5BA2\u6237\u90E8\u7F72\u3001\u5185\u7F51\u90E8\u7F72\u573A\u666F\uFF0C\u5373\u8131\u79BB\u5E73\u53F0\u6253\u5305\u53D1\u5E03\u751F\u4EA7\u4F7F\u7528\uFF0C\u6B64\u4E3A\u81EA\u52A8\u5316\u8FD0\u7EF4\u57FA\u7EBF\u3002</p><h2 id="\u5185\u7F51\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F51\u90E8\u7F72" aria-hidden="true">#</a> \u5185\u7F51\u90E8\u7F72</h2><p>\u6B64\u73AF\u5883\u4E3B\u8981\u9488\u5BF9\u7684\u662F CentOS7.x \u670D\u52A1\u5668\uFF0C\u9002\u7528\u4E8E\u5185\u7F51</p><h3 id="\u57FA\u7840\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u73AF\u5883" aria-hidden="true">#</a> \u57FA\u7840\u73AF\u5883</h3><ul><li>\u3010\u5FC5\u987B\u3011MySQL5.7\uFF1A\u6570\u636E\u5B58\u50A8</li><li>\u3010\u5FC5\u987B\u3011Redis3.2.5\uFF1A\u4F1A\u8BDD\u548C\u7F13\u5B58</li><li>\u3010\u53EF\u9009\u3011Zookeeper\uFF1A\u6CE8\u518C\u4E0E\u53D1\u73B0</li></ul><h3 id="\u5E73\u53F0\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u670D\u52A1" aria-hidden="true">#</a> \u5E73\u53F0\u670D\u52A1</h3><p>\u57FA\u7840\u670D\u52A1\u6309\u9700\u5F15\u5165\u5373\u53EF\uFF0C\u4EE5\u4E0B\u3010\u53EF\u9009\u3011\u4E3A\u4E24\u4E2A\u4F8B\u5B50\uFF0C\u5176\u5B83\u7EC4\u4EF6\u7C7B\u4F3C</p><ul><li>\u3010\u5FC5\u987B\u3011\u5F15\u5BFC\u670D\u52A1</li><li>\u3010\u5FC5\u987B\u3011\u7EDF\u4E00\u7BA1\u7406\u5E73\u53F0</li><li>\u3010\u53EF\u9009\u3011\u901A\u77E5\u670D\u52A1</li><li>\u3010\u53EF\u9009\u3011\u5BA1\u8BA1\u65E5\u5FD7</li></ul><h3 id="\u90E8\u7F72\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u8BF4\u660E" aria-hidden="true">#</a> \u90E8\u7F72\u8BF4\u660E</h3><p>\u73AF\u5883\u521D\u59CB\u5316\uFF0C\u9700\u4E86\u89E3 ansible \u7684\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF0C\u5982 hosts \u914D\u7F6E\uFF0C\u8FD9\u91CC\u9488\u5BF9\u7684\u662F\u5355\u70B9\u914D\u7F6E\uFF0C \u96C6\u7FA4\u914D\u7F6E\u5EFA\u8BAE\u4E13\u4E1A\u4EBA\u58EB\u64CD\u4F5C\uFF0C\u6216\u8005\u53C2\u8003\u8FD0\u7EF4\u6587\u6863</p><h4 id="\u521D\u59CB\u5316\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u73AF\u5883" aria-hidden="true">#</a> \u521D\u59CB\u5316\u73AF\u5883</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-playbook -f 01.prepared.yml
ansible-playbook -f 02.jdk.yml
ansible-playbook -f 03.mysql.yml
ansible-playbook -f <span class="token number">18</span>.redis.yml
ansible-playbook -f <span class="token number">25</span>.zookeeper.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B89\u88C5\u57FA\u7840\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u57FA\u7840\u670D\u52A1" aria-hidden="true">#</a> \u5B89\u88C5\u57FA\u7840\u670D\u52A1</h4><p>\u57FA\u7840\u670D\u52A1\u53EF\u4EE5\u4F7F\u7528 jenkins \u6784\u5EFA\u6216\u8005\u5176\u5B83\u65B9\u5F0F\u6784\u5EFA\uFF0C\u8FD9\u91CC\u6F14\u793A\u7684\u662F ansible \u53D1\u5E03\u7684\u5F62\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-playbook -f <span class="token number">90</span>.alinesno-platform-base.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u81EA\u52A8\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u90E8\u7F72" aria-hidden="true">#</a> \u81EA\u52A8\u90E8\u7F72</h2>`,18),c=a("\u6B64\u53C2\u8003\u73AF\u5883\u642D\u5EFA\u90E8\u7F72\u7AE0\u8282\uFF0C\u8BBF\u95EE "),b={href:"http://gitbook.lbxinhu.com/document-platform-operation/",target:"_blank",rel:"noopener noreferrer"},u=a("\u81EA\u52A8\u5316\u90E8\u7F72\u6587\u6863"),p=e("h2",{id:"\u5176\u5B83",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5176\u5B83","aria-hidden":"true"},"#"),a(" \u5176\u5B83")],-1),m=e("ul",null,[e("li",null,"\u7565")],-1);function _(f,v){const n=s("ExternalLinkIcon");return r(),l("div",null,[t,e("p",null,[c,e("a",b,[u,d(n)])]),p,m])}var k=i(h,[["render",_],["__file","33_\u90E8\u7F72\u6559\u7A0B.html.vue"]]);export{k as default};
