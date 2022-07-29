import{_ as a,o as r,c as n,a as t,e as i,b as d,d as l,r as s}from"./app.f2a0a541.js";const o={},c=t("h1",{id:"\u57FA\u7840\u89C4\u5219",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u7840\u89C4\u5219","aria-hidden":"true"},"#"),d(" \u57FA\u7840\u89C4\u5219")],-1),h=t("h2",{id:"\u6982\u8FF0",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u6982\u8FF0","aria-hidden":"true"},"#"),d(" \u6982\u8FF0")],-1),x=d("\u57FA\u7840\u89C4\u5219\u63D0\u4F9B\u7684\u662F ansible \u64CD\u4F5C\u7684\u89C4\u5219\uFF0C\u5BF9\u5E94\u7684 ansible \u811A\u672C\u57FA\u7EBF"),u={href:"https://gitee.com/alinesno-cloud/alinesno-cloud-operation-incubator",target:"_blank",rel:"noopener noreferrer"},b=d("\u6253\u5F00"),g=d("\uFF0C \u8FD9\u91CC\u5EFA\u8BAE\u4E0E"),_=t("code",null,"jenkinsfile",-1),p=d("\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u548C\u6D41\u7A0B\u5316\uFF0C\u73AF\u5883\u89C4\u5212\u5E76\u4E0D\u4EE3\u8868\u6240\u6709\u7684\u90FD\u9700\u8981\u5B89\u88C5\uFF0C\u6309\u9700\u6C42\u5904\u7406\u5373\u53EF\u3002"),y=l(`<p>\u6BD4\u5982\u7814\u53D1\u4E2D\u53F0\u7684\u73AF\u5883\uFF0C\u5B89\u88C5 mysql/redis/docker \u5373\u53EF</p><h2 id="\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a> \u89C4\u5219</h2><ul><li>\u8F6F\u4EF6\u59CB\u7EC8\u4ECE\u8F6F\u4EF6\u5E93\u4E2D\u83B7\u53D6</li><li>\u8F6F\u4EF6\u53EA\u9488\u5BF9<code>CentOS</code>\u7CFB\u7EDF\uFF0C\u5176\u5B83\u7CFB\u7EDF\u6682\u4E0D\u8003\u8651</li><li>\u8F6F\u4EF6\u653E\u7F6E\u76EE\u5F55<code>/opt/alinesno-soft</code>\uFF0C\u6309\u8F6F\u4EF6\u540D\u79F0\u653E\u7F6E\uFF0C\u5982 tomcat ,\u8DEF\u5F84\u4E3A: <code>/opt/alinesno-soft/tomcat</code></li><li>\u96C6\u6210<code>jenkins</code>\uFF0C\u521D\u59CB\u5316\u5DE5\u7A0B\u524D\u7F00\u4E3A<code>ansible</code></li></ul><h2 id="\u8F6F\u4EF6\u7BA1\u7406\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7BA1\u7406\u89C4\u8303" aria-hidden="true">#</a> \u8F6F\u4EF6\u7BA1\u7406\u89C4\u8303</h2><ul><li>\u7EDF\u4E00\u8F6F\u4EF6\u7BA1\u7406\u53CA\u4E0A\u4F20,\u4E3A\u5E73\u53F0\u5185\u90E8\u7EDF\u4E00\u8F6F\u4EF6\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u53EA\u5141\u8BB8\u4ECE\u7EDF\u4E00\u5E93\u4E2D\u83B7\u53D6</li><li>\u8F6F\u4EF6\u65B0\u7248\u672C\u9700\u53CA\u66F4\u65B0\u81F3\u8F6F\u4EF6\u5E93</li><li>\u8F6F\u4EF6\u540D\u79F0\u89C4\u5219\u6309:<code>\u8F6F\u4EF6\u540D\u79F0</code>+<code>\u7248\u672C\u53F7</code>+<code>\u538B\u7F29\u683C\u5F0F</code><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B: apache-tomcat-8.5.8.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u5982\u65E0\u7248\u672C\u53F7,\u5219\u6309\u65E5\u671F(<code>\u5E74\u6708\u65E5\u65F6\u5206</code>)\u52A0\u540E\u7F00<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B: apache-tomcat-201811130747.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u8F6F\u4EF6\u4E0A\u4F20\u4E4B\u524D\u9700\u8981\u505A\u9A8C\u8BC1\uFF0C\u786E\u5B9A\u8F6F\u4EF6\u53EF\u7528</li><li>\u8F6F\u4EF6\u5982\u9700\u914D\u7F6E\uFF0C\u9700\u5C06\u914D\u7F6E\u6587\u4EF6\u653E\u7F6E\u4E8E\u8F6F\u4EF6\u7BA1\u7406\u6587\u4EF6\u5939\u4E2D<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6B63\u4F8B: apache-maven-3.1.1.tar.gz  // \u8F6F\u4EF6
      person-settings.xml        //\u4E2A\u4EBA\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="linux-\u5B89\u88C5\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#linux-\u5B89\u88C5\u89C4\u8303" aria-hidden="true">#</a> Linux \u5B89\u88C5\u89C4\u8303</h2><blockquote><p>\u4E3A\u4E86\u907F\u514D Linux \u4E0A\u6587\u4EF6\u7684\u4E71\u7F6E\u4E71\u653E\u53CA\u76EE\u5F55\uFF0C\u5B9A\u4EE5\u4E0B\u76EE\u5F55\u7684\u89C4\u8303,\u64CD\u4F5C\u7EDF\u4E00\u4F7F\u7528 alinesno \u7528\u6237</p></blockquote><h3 id="\u76EE\u5F55\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u89C4\u8303" aria-hidden="true">#</a> \u76EE\u5F55\u89C4\u8303</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u8BF4\u660E</th><th>\u8BF4\u660E</th><th>\u662F\u5426\u96C6\u6210</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>/home/alinesno/soft</td><td></td><td></td><td></td></tr><tr><td>2</td><td>/opt/jdk8</td><td></td><td></td><td>\u5168\u5C40</td></tr><tr><td>3</td><td>/opt/alinesno/nginx</td><td></td><td></td><td></td></tr><tr><td>3</td><td>/opt/alinesno/redis5</td><td></td><td></td><td></td></tr><tr><td>4</td><td>/opt/alinesno/keepalived</td><td></td><td></td><td>\u7565</td></tr></tbody></table><h2 id="\u90E8\u7F72\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u73AF\u5883" aria-hidden="true">#</a> \u90E8\u7F72\u73AF\u5883</h2><ul><li>\u57FA\u7840\u73AF\u5883\u5B8C\u5584\u53CA\u914D\u7F6E\uFF0C\u4E3A\u6574\u4E2A\u5F00\u53D1\u5E73\u53F0\u505A\u57FA\u7840\uFF0C\u4EE5\u73AF\u5883\u642D\u5EFA\u4E3A\u4E3B,\u4E3A\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF0C</li><li>\u76EE\u524D\u7684\u670D\u52A1\u5668\u5E94\u8BE5\u662F\u4E0D\u591F\u7684,\u4E5F\u5E76\u4E0D\u662F\u4EE3\u8868\u6240\u6709\u7684\u8F6F\u4EF6\u9700\u8981\u5B8C\u5584\u624D\u53EF\u4EE5\u8FDB\u5165\u4E0B\u4E00\u6B65\u5F00\u53D1\uFF0C\u6BD4\u5982 elk\uFF0C\u524D\u671F\u642D\u5EFA\u5E76\u4E00\u5B9A\u662F\u9700\u8981\u7684\uFF0C</li><li>\u6BD4\u5982\u8BF4\u96C6\u7FA4\uFF0C\u4E5F\u5E76\u4E0D\u4E00\u5B9A\u662F\u4E00\u5F00\u59CB\u5C31\u662F\u96C6\u7FA4,</li><li>\u5E73\u53F0\u642D\u5EFA\u4E00\u4E2A\u4EBA\u7684\u8BDD\u662F\u6BD4\u8F83\u957F\u671F\uFF0C\u6240\u4EE5\uFF0C\u4EE5\u5148\u6295\u5165\u7EC4\u4EF6\u6784\u5EFA\u4E3A\u4E3B\uFF0C\u5728\u5B8C\u6210\u7B2C\u4E00\u6B65\u4E4B\u540E\uFF0C\u518D\u8FDB\u4E00\u6B65\u5B8C\u5584\uFF0C</li><li>\u5373\u4F7F\u5728\u516C\u53F8\uFF0C\u4E5F\u662F\u5982\u6B64\u5EFA\u8BAE\uFF0C\u4E00\u6B65\u5230\u4F4D\uFF0C\u4E5F\u662F\u6BD4\u8F83\u96BE\u7684\uFF0C\u5982\u679C\u53EF\u4EE5\u5C31\u66F4\u597D\u3002</li></ul><h3 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883</h3><ul><li>MacPro_x64_16g_256g(SSD)</li></ul><h3 id="\u670D\u52A1\u5668\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u8D44\u6E90" aria-hidden="true">#</a> \u670D\u52A1\u5668\u8D44\u6E90</h3><blockquote><p>\u963F\u91CC\u4E91\u670D\u52A1\u5668 IP \u4E3A\u516C\u7F51</p></blockquote><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u4F5C\u7528</th><th>\u670D\u52A1\u5668\u8D44\u6E90(\u7CFB\u7EDF/\u5185\u5B58/\u786C\u76D8)</th><th>IP \u89C4\u5212</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>\u5F00\u53D1\u670D\u52A1\u5668_master</td><td>CentOS7.x_x64_16G_40G</td><td>\u963F\u91CC\u4E91\u5206\u914D</td><td></td></tr><tr><td style="text-align:center;">2</td><td>\u57FA\u7840 DevOps \u5E73\u53F0</td><td>CentOS7.x_x64_4G_40G</td><td>\u963F\u91CC\u4E91\u5206\u914D</td><td></td></tr><tr><td style="text-align:center;">3</td><td>\u6CE8\u518C\u4E2D\u5FC3</td><td>CentOS7.x_x64_4G_40G</td><td>\u963F\u91CC\u4E91\u5206\u914D</td><td>.</td></tr></tbody></table><h3 id="\u8D44\u6E90\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u89C4\u5212" aria-hidden="true">#</a> \u8D44\u6E90\u89C4\u5212</h3><blockquote><p>\u6B64\u5904\u7684\u5B8C\u5584\u8FDB\u5EA6\u8868\u793A\u6587\u6863\u5B8C\u6210\u8FDB\u5EA6,\u5373\u53EF\u6839\u636E\u6587\u6863\u67E5\u8BE2\u642D\u5EFA\u7684</p></blockquote><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u8BF4\u660E</th><th>\u5DE5\u5177</th><th>\u6587\u6863\u5B8C\u5584\u8FDB\u5EA6</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>\u57FA\u7840\u73AF\u5883</td><td>JDK</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">2</td><td>\u53CD\u5411\u4EE3\u7406</td><td>Nginx/Kong</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">3</td><td>\u9AD8\u53EF\u7528</td><td>KeepAlived</td><td></td><td></td></tr><tr><td style="text-align:center;">4</td><td>\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177</td><td>Jenkins</td><td>\u5B8C\u5584\u4E2D</td><td></td></tr><tr><td style="text-align:center;">5</td><td>\u79C1\u670D\u5E93</td><td>Nexus</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">6</td><td>\u94FE\u63A5\u8DDF\u8E2A</td><td>zipkin</td><td></td><td></td></tr><tr><td style="text-align:center;">7</td><td>\u4EE3\u7801\u68C0\u6D4B</td><td>Sonar</td><td></td><td></td></tr><tr><td style="text-align:center;">8</td><td>\u7F13\u5B58\u5DE5\u5177</td><td>Redis</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">9</td><td>\u6D88\u606F\u5217\u8868</td><td>Kafka</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">10</td><td>\u5206\u5E03\u5F0F\u6CE8\u518C\u4E2D\u5FC3</td><td>zeekeeper</td><td>\u5B8C\u5584\u4E2D</td><td></td></tr><tr><td style="text-align:center;">11</td><td>\u5206\u5E03\u5F0F\u6CE8\u518C\u4E2D\u5FC3</td><td>DubboAdmin</td><td></td><td></td></tr><tr><td style="text-align:center;">12</td><td>\u5206\u5E03\u5F0F\u914D\u7F6E\u4E2D\u5FC3</td><td>Apollo</td><td></td><td>\u6362\u6210\u81EA\u7814\u914D\u7F6E\u4E2D\u5FC3</td></tr><tr><td style="text-align:center;">13</td><td>\u6570\u636E\u5E93</td><td>MySQL</td><td>\u5DF2\u5B8C\u5584</td><td></td></tr><tr><td style="text-align:center;">14</td><td>\u5F00\u53D1\u8FC7\u7A0B\u7BA1\u7406</td><td>\u7985\u9053</td><td></td><td></td></tr><tr><td style="text-align:center;">15</td><td><s>Redis \u76D1\u63A7\u5DE5\u5177</s></td><td>Redmon</td><td></td><td></td></tr><tr><td style="text-align:center;">16</td><td>\u6D88\u606F\u7BA1\u7406\u5DE5\u5177</td><td>Kafka-Manager</td><td></td><td></td></tr><tr><td style="text-align:center;">17</td><td>\u6570\u636E\u5E93\u4E3B\u4ECE</td><td>MyCAT</td><td></td><td></td></tr><tr><td style="text-align:center;">18</td><td>\u5BB9\u5668\u7BA1\u7406</td><td>Kubernetes</td><td></td><td></td></tr><tr><td style="text-align:center;">19</td><td>\u955C\u50CF\u7BA1\u7406</td><td>Harbor</td><td></td><td></td></tr><tr><td style="text-align:center;">20</td><td>\u81EA\u52A8\u90E8\u7F72</td><td>Ansible</td><td></td><td></td></tr><tr><td style="text-align:center;">21</td><td><s>\u81EA\u52A8\u90E8\u7F72\u7BA1\u7406</s></td><td>Ansible Tower</td><td></td><td>\u7248\u6743\u95EE\u9898</td></tr><tr><td style="text-align:center;">22</td><td><s>\u94FE\u63A5\u8DDF\u8E2A</s></td><td>pinpoint</td><td></td><td>\u91CD\u590D</td></tr><tr><td style="text-align:center;">23</td><td>\u65E5\u5FD7\u76D1\u63A7</td><td>elk</td><td></td><td></td></tr><tr><td style="text-align:center;">24</td><td>\u670D\u52A1\u5668\u76D1\u63A7</td><td>Zabbix</td><td></td><td>.</td></tr></tbody></table><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,21);function m(v,f){const e=s("ExternalLinkIcon");return r(),n("div",null,[c,h,t("p",null,[x,t("a",u,[b,i(e)]),g,_,p]),y])}var S=a(o,[["render",m],["__file","01_\u57FA\u7840\u89C4\u5219.html.vue"]]);export{S as default};
