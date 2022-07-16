import{_ as t,o as d,c as e,d as a}from"./app.a2106346.js";const r={},o=a('<h1 id="\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>docker-compose \u811A\u672C</li><li>\u5F00\u53D1\u73AF\u5883\u642D\u5EFA</li></ul><h2 id="\u8BBF\u95EE\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u94FE\u63A5" aria-hidden="true">#</a> \u8BBF\u95EE\u94FE\u63A5</h2><blockquote><p>\u6B64\u53EA\u4E3A\u5F00\u53D1\u8FC7\u7A0B\u73AF\u5883\u8FDE\u63A5\uFF0C\u4FBF\u4E8E\u5206\u914D\u7ED9\u5176\u5B83\u5F00\u53D1\u4EBA\u5458,\u6B64\u9002\u5408\u4E8E\u4E3A\u5C0F\u56E2\u961F\u6587\u6863\u800C\u975E\u4E2A\u4EBA\u5F00\u53D1\u8005\uFF0C\u4E2A\u4EBA\u5F00\u53D1\u8BF7\u770B\u4EE5\u4E0B\u672C\u5730\u5F00\u53D1\u6761\u4EF6,\u6B64\u5904\u53EA\u63D0\u4F9B\u6A21\u677F</p></blockquote><table><thead><tr><th>\u5E8F\u53F7</th><th>\u8BF4\u660E</th><th>\u5730\u5740(\u8D26\u53F7/\u5BC6\u7801)</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>MySQL</td><td></td><td></td></tr><tr><td>2</td><td>Eureka</td><td></td><td></td></tr><tr><td>3</td><td>Git</td><td></td><td></td></tr><tr><td>4</td><td>\u5DE5\u4F5C\u6D41</td><td></td><td></td></tr><tr><td>5</td><td>\u5206\u5E03\u5F0F\u914D\u7F6E\u4E2D\u5FC3</td><td></td><td></td></tr></tbody></table><h2 id="\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u73AF\u5883\u642D\u5EFA</h2><blockquote><p>\u642D\u5EFA\u4F7F\u7528 docker-compose \u642D\u5EFA\uFF0C\u653E\u4E8E\u4E00\u53F0\u6216\u8005\u591A\u53F0\u865A\u62DF\u673A\u751A\u81F3\u672C\u5730\u5F00\u53D1\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u53CA\u7EF4\u62A4,\u6B64\u5904\u53EA\u4E3A\u5FEB\u901F\u642D\u5EFA\u73AF\u5883\u4F7F\u7528,\u9002\u5408\u4E8E\u5C0F\u56E2\u961F\u5185\u90E8\u534F\u4F5C</p></blockquote><h3 id="\u73AF\u5883\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5DE5\u5177" aria-hidden="true">#</a> \u73AF\u5883\u5DE5\u5177</h3><p>\u5F00\u53D1\u73AF\u5883\u5DE5\u5177\u5217\u8868,\u6587\u4EF6\u4F4D\u4E8E<code>80_base</code>\u76EE\u5F55</p><table><thead><tr><th>\u5E8F\u53F7</th><th>\u63CF\u8FF0</th><th>\u5BF9\u5E94\u6587\u4EF6\u8D44\u6E90</th><th>\u5DE5\u5177</th><th>\u5BF9\u5E94\u90E8\u95E8</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u57FA\u7840\u642D\u5EFA\u96C6\u6210</td><td>01_dev_cicd_compose.yml</td><td>jenkins/nexus/harbor(\u53EF\u9009)</td><td>\u4E2D\u53F0</td><td>\u4EE3\u7801\u7BA1\u7406\u7EDF\u4E00\u5B89\u88C5\u7BA1\u7406</td></tr><tr><td>2</td><td>\u57FA\u7840\u5F00\u53D1\u5DE5\u5177</td><td>02_dev_tool_compose.yml</td><td>redis/kafka/mysql</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>3</td><td>\u57FA\u7840\u6CE8\u518C\u73AF\u5883</td><td>03_dev_eureka_compose.yml</td><td>eureka/bootadmin/apollo</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>4</td><td>\u57FA\u7840\u96C6\u6210\u73AF\u5883</td><td>04_dev_boot_compose.yml</td><td>boot/boot-web/logger/notice/message/storage</td><td>\u5F00\u53D1/\u6D4B\u8BD5</td><td></td></tr><tr><td>5</td><td>\u57FA\u7840\u76D1\u63A7\u73AF\u5883</td><td>05_dev_monitor_compse.yml</td><td>elk/skywalking/portainer</td><td>\u5F00\u53D1\u6D4B\u8BD5</td><td>.</td></tr></tbody></table><p><code>\u8FD0\u884C\u65B9\u5F0F:docker-compose -f xxxx.yml up -d</code></p><p>\u5F00\u53D1\u8FC7\u7A0B\u76F4\u63A5\u542F\u52A8<code>03_dev_eureka_compose.yml</code>\u6587\u4EF6\u5373\u53EF</p><h3 id="\u672C\u5730\u5F00\u53D1\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5F00\u53D1\u6761\u4EF6" aria-hidden="true">#</a> \u672C\u5730\u5F00\u53D1\u6761\u4EF6</h3><p>\u57FA\u672C\u6761\u4EF6,\u5982 windows \u7528\u6237\u5EFA\u8BAE\u672C\u5730\u5B89\u88C5\u5373\u53EF</p><ul><li>Redis/MySQL</li><li>Eureke</li></ul><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2>',17),h=[o];function c(i,l){return d(),e("div",null,h)}var _=t(r,[["render",c],["__file","20_\u5F00\u53D1\u73AF\u5883\u642D\u5EFA.html.vue"]]);export{_ as default};
