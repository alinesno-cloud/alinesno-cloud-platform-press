import{_ as t,o as d,c as e,d as r}from"./app.ca1898a6.js";const o={},a=r('<h1 id="\u57FA\u7840\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u57FA\u7840\u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h1><p>\u6B64\u7AE0\u8282\u5F15\u7528 docker \u5FEB\u901F\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883,\u7ED9\u4E0D\u540C\u90E8\u95E8\u4F7F\u7528,\u5176\u4E2D\u4E3B\u8981\u5305\u62EC\u7684\u90E8\u95E8\u6709\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u8FD0\u7EF4</p><h2 id="\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a> \u76EE\u6807</h2><ul><li>\u57FA\u7840\u6301\u7EED\u96C6\u6210(\u5F00\u53D1)</li><li>\u57FA\u7840\u5E73\u53F0\u5F00\u53D1\u73AF\u5883(\u5F00\u53D1)</li><li>\u57FA\u7840\u96C6\u6210\u73AF\u5883(\u6D4B\u8BD5)</li><li>\u57FA\u7840\u76D1\u63A7\u73AF\u5883(\u8FD0\u7EF4)</li></ul><h2 id="\u5EFA\u8BBE\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BBE\u5185\u5BB9" aria-hidden="true">#</a> \u5EFA\u8BBE\u5185\u5BB9</h2><h3 id="\u7814\u53D1\u6D4B\u8BD5\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7814\u53D1\u6D4B\u8BD5\u9636\u6BB5" aria-hidden="true">#</a> \u7814\u53D1\u6D4B\u8BD5\u9636\u6BB5</h3><blockquote><p>\u642D\u5EFA\u4F7F\u7528 docker-compose \u642D\u5EFA\uFF0C\u653E\u4E8E\u4E00\u53F0\u6216\u8005\u591A\u53F0\u865A\u62DF\u673A\u751A\u81F3\u672C\u5730\u5F00\u53D1\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u53CA\u7EF4\u62A4</p></blockquote><ol><li>\u547D\u4EE4</li></ol><table><thead><tr><th>\u5E8F\u53F7</th><th>\u63CF\u8FF0</th><th>\u5BF9\u5E94\u6587\u4EF6\u8D44\u6E90</th><th>\u5DE5\u5177</th><th>\u5BF9\u5E94\u90E8\u95E8</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u57FA\u7840\u642D\u5EFA\u96C6\u6210</td><td>01_dev_cicd_compose.yml</td><td>jenkins/nexus/harbor(\u53EF\u9009)</td><td>\u4E2D\u53F0</td><td>\u4EE3\u7801\u7BA1\u7406\u7EDF\u4E00\u5B89\u88C5\u7BA1\u7406</td></tr><tr><td>2</td><td>\u57FA\u7840\u5F00\u53D1\u5DE5\u5177</td><td>02_dev_tool_compose.yml</td><td>redis/kafka/mysql</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>3</td><td>\u57FA\u7840\u6CE8\u518C\u73AF\u5883</td><td>03_dev_eureka_compose.yml</td><td>eureka/bootadmin/apollo</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>4</td><td>\u57FA\u7840\u96C6\u6210\u73AF\u5883</td><td>04_dev_boot_compose.yml</td><td>boot/boot-web/logger/notice/message/storage</td><td>\u5F00\u53D1/\u6D4B\u8BD5</td><td></td></tr><tr><td>5</td><td>\u57FA\u7840\u76D1\u63A7\u73AF\u5883</td><td>05_dev_monitor_compse.yml</td><td>elk/skywalking/portainer</td><td>\u5F00\u53D1\u6D4B\u8BD5</td><td></td></tr></tbody></table><p>\u8FD0\u884C\u65B9\u5F0F:docker-compose -f xxxx.yml up -d</p><ol start="2"><li>\u5E73\u53F0\u5730\u5740</li></ol><table><thead><tr><th>\u5E8F\u53F7</th><th>\u63CF\u8FF0</th><th>\u5730\u5740</th><th>\u8D26\u6237\u5BC6\u7801</th><th>\u5BF9\u5E94\u90E8\u95E8</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u57FA\u7840\u642D\u5EFA\u96C6\u6210</td><td>jenkins</td><td>jenkins/nexus/harbor(\u53EF\u9009)</td><td>\u4E2D\u53F0</td><td>\u4EE3\u7801\u7BA1\u7406\u7EDF\u4E00\u5B89\u88C5\u7BA1\u7406</td></tr><tr><td>2</td><td>\u57FA\u7840\u5F00\u53D1\u5DE5\u5177</td><td>nexus</td><td>redis/kafka/mysql</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>3</td><td>\u57FA\u7840\u6CE8\u518C\u73AF\u5883</td><td>mysql</td><td>eureka/bootadmin/apollo</td><td>\u5F00\u53D1</td><td></td></tr><tr><td>4</td><td>\u57FA\u7840\u96C6\u6210\u73AF\u5883</td><td>apollo</td><td>boot/boot-web/logger/notice/message/storage</td><td>\u5F00\u53D1/\u6D4B\u8BD5</td><td></td></tr><tr><td>5</td><td>\u57FA\u7840\u76D1\u63A7\u73AF\u5883</td><td>portainer</td><td>elk/skywalking/portainer</td><td>\u5F00\u53D1\u6D4B\u8BD5</td><td></td></tr></tbody></table><h3 id="\u51C6\u751F\u4EA7\u53CA\u751F\u4EA7\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u51C6\u751F\u4EA7\u53CA\u751F\u4EA7\u9636\u6BB5" aria-hidden="true">#</a> \u51C6\u751F\u4EA7\u53CA\u751F\u4EA7\u9636\u6BB5</h3><blockquote><p>\u642D\u5EFA\u4F7F\u7528 ansible \u642D\u5EFA\uFF0C\u653E\u4E8E\u591A\u53F0\u865A\u62DF\u673A\u4E0A\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u53CA\u7EF4\u62A4</p></blockquote><table><thead><tr><th>\u5E8F\u53F7</th><th>\u63CF\u8FF0</th><th>\u5BF9\u5E94\u6587\u4EF6\u8D44\u6E90</th><th>\u5BF9\u5E94\u90E8\u95E8</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u57FA\u7840\u642D\u5EFA\u96C6\u6210</td><td>01_product_cicd_compose.py</td><td>\u8FD0\u7EF4</td><td></td></tr><tr><td>2</td><td>\u57FA\u7840\u5F00\u53D1\u73AF\u5883</td><td>02_product_dev_compose.py</td><td>\u8FD0\u7EF4</td><td></td></tr><tr><td>3</td><td>\u57FA\u7840\u96C6\u6210\u73AF\u5883</td><td>03_product_boot_compose.py</td><td>\u5F00\u53D1/\u6D4B\u8BD5</td><td></td></tr><tr><td>4</td><td>\u57FA\u7840\u76D1\u63A7\u73AF\u5883</td><td>04_product_monitor_compse.py</td><td>\u8FD0\u7EF4</td><td></td></tr></tbody></table><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u6682\u65E0</li></ul>',17),h=[a];function l(i,s){return d(),e("div",null,h)}var n=t(o,[["render",l],["__file","index.html.vue"]]);export{n as default};
