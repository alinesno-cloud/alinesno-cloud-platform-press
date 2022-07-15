import{_ as t,o as n,c as s,d as a}from"./app.6b256f62.js";const e={},d=a(`<h1 id="\u8BBF\u95EE\u6570\u636E\u91C7\u96C6" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6570\u636E\u91C7\u96C6" aria-hidden="true">#</a> \u8BBF\u95EE\u6570\u636E\u91C7\u96C6</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u7528\u6237\u8BBF\u95EE\u7F51\u7AD9\u7684\u6570\u636E\u91C7\u96C6\u548C\u5206\u6790\uFF0C\u7528\u4E8E\u5206\u6790\u8BBF\u95EE\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u5305\u62EC\u65F6\u95F4\uFF0C\u5730\u7406\u4F4D\u7F6E\u7B49</p><h2 id="http-\u7F51\u7AD9\u91C7\u96C6" tabindex="-1"><a class="header-anchor" href="#http-\u7F51\u7AD9\u91C7\u96C6" aria-hidden="true">#</a> http \u7F51\u7AD9\u91C7\u96C6</h2><blockquote><p>\u4E3B\u8981\u7528\u4E8E\u57FA\u7840\u73AF\u5883\u573A\u666F</p></blockquote><h3 id="\u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> \u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>nginx \u6807\u8BC6</th><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>$remote_addr</td><td>\u5BA2\u6237\u7AEF IP</td><td></td></tr><tr><td>1</td><td>$time_local</td><td>\u901A\u7528\u65E5\u5FD7\u683C\u5F0F\u4E0B\u7684\u672C\u5730\u65F6\u95F4</td><td></td></tr><tr><td>1</td><td>$status</td><td>\u72B6\u6001\u7801</td><td></td></tr><tr><td>1</td><td>$body_bytes_sent</td><td>\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u5B57\u8282\u6570\uFF0C\u4E0D\u5305\u62EC\u54CD\u5E94\u5934\u7684\u5927\u5C0F</td><td></td></tr><tr><td>1</td><td>$http_user_agent</td><td>\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u4FE1\u606F</td><td></td></tr><tr><td>1</td><td>$http_referer</td><td>\u8BF7\u6C42\u7684 referer \u5730\u5740\u3002</td><td></td></tr><tr><td>1</td><td>$request</td><td>\u5B8C\u6574\u7684\u539F\u59CB\u8BF7\u6C42</td><td></td></tr><tr><td>1</td><td>$request_method</td><td>HTTP \u8BF7\u6C42\u65B9\u6CD5\uFF0C\u901A\u5E38\u4E3A&quot;GET&quot;\u6216&quot;POST&quot;</td><td></td></tr><tr><td>1</td><td>$request_time</td><td>\u8BF7\u6C42\u5904\u7406\u65F6\u957F</td><td></td></tr><tr><td>1</td><td>$request_uri</td><td>\u5B8C\u6574\u7684\u8BF7\u6C42\u5730\u5740</td><td></td></tr><tr><td>1</td><td>$server_protocol</td><td>\u670D\u52A1\u5668\u7684 HTTP \u7248\u672C\uFF0C\u901A\u5E38\u4E3A &quot;HTTP/1.0&quot; \u6216 &quot;HTTP/1.1&quot;</td><td></td></tr><tr><td>1</td><td>$request_body</td><td>POST \u8BF7\u6C42\u53C2\u6570,\u53C2\u6570\u9700\u653E form \u4E2D</td><td></td></tr><tr><td>1</td><td>token $http_token</td><td>(\u81EA\u5B9A\u4E49 header \u5B57\u6BB5\u524D\u52A0 http_\uFF0C\u5373\u53EF\u5C06\u6307\u5B9A\u7684\u81EA\u5B9A\u4E49 header \u5B57\u6BB5\u6253\u5370\u5230 log \u4E2D)</td><td></td></tr></tbody></table><h3 id="\u91C7\u96C6\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u91C7\u96C6\u683C\u5F0F" aria-hidden="true">#</a> \u91C7\u96C6\u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>log_format user_log_format <span class="token string">&quot;<span class="token variable">$remote_addr</span>,
    <span class="token variable">$time_local</span>,
    <span class="token variable">$status</span>,
    <span class="token variable">$body_bytes_sent</span>,
    <span class="token variable">$http_user_agent</span>,
    <span class="token variable">$http_referer</span>,
    <span class="token variable">$request_method</span>,
    <span class="token variable">$request_time</span>,
    <span class="token variable">$request_uri</span>,
    <span class="token variable">$server_protocol</span>,
    <span class="token variable">$request_body</span>,<span class="token variable">$http_token</span>&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u5E94\u7684-hive-\u6570\u636E\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5E94\u7684-hive-\u6570\u636E\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u5BF9\u5E94\u7684 hive \u6570\u636E\u8868\u7ED3\u6784</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> ods_nginx_access_log<span class="token punctuation">(</span>
    remote_addr string<span class="token punctuation">,</span>
    time_local string<span class="token punctuation">,</span>
    <span class="token keyword">status</span> string<span class="token punctuation">,</span>
    body_bytes_sent string<span class="token punctuation">,</span>
    http_user_agent string<span class="token punctuation">,</span>
    http_referer string<span class="token punctuation">,</span>
    request_method string<span class="token punctuation">,</span>
    request_time string<span class="token punctuation">,</span>
    request_uri string<span class="token punctuation">,</span>
    server_protocol string<span class="token punctuation">,</span>
    request_body string<span class="token punctuation">,</span>
    http_token string<span class="token punctuation">,</span>
    id string<span class="token punctuation">,</span>
    appkey string<span class="token punctuation">,</span>
    sing string<span class="token punctuation">,</span>
    VERSION string<span class="token punctuation">)</span> <span class="token keyword">clustered</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token number">5</span> buckets stored <span class="token keyword">AS</span> orc TBLPROPERTIES <span class="token punctuation">(</span><span class="token string">&#39;transactional&#39;</span><span class="token operator">=</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-\u4EE3\u7406\u6570\u636E\u91C7\u96C6" tabindex="-1"><a class="header-anchor" href="#proxy-\u4EE3\u7406\u6570\u636E\u91C7\u96C6" aria-hidden="true">#</a> proxy \u4EE3\u7406\u6570\u636E\u91C7\u96C6</h2><blockquote><p>\u4E3B\u8981\u7528\u4E8E k8s \u8BBF\u95EE\u65E5\u5FD7\u573A\u666F\uFF0C\u4EE3\u7406 ingress \u6570\u636E\u8BBF\u95EE</p></blockquote><h3 id="\u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E-1" aria-hidden="true">#</a> \u91C7\u96C6\u5B57\u6BB5\u8BF4\u660E</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>nginx \u6807\u8BC6</th><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>$remote_addr</td><td>\u5BA2\u6237\u7AEF IP</td><td></td></tr><tr><td>1</td><td>$time_local</td><td>\u901A\u7528\u65E5\u5FD7\u683C\u5F0F\u4E0B\u7684\u672C\u5730\u65F6\u95F4</td><td></td></tr><tr><td>1</td><td>$status</td><td>\u72B6\u6001\u7801</td><td></td></tr><tr><td>1</td><td>$binary_remote_addr</td><td>\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u5BA2\u6237\u7AEF\u5730\u5740</td><td></td></tr><tr><td>1</td><td>$bytes_received</td><td>\u4ECE\u5BA2\u6237\u7AEF\u63A5\u6536\u7684\u5B57\u8282\u6570(1.11.4)</td><td></td></tr><tr><td>1</td><td>$bytes_sent</td><td>\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\u7684\u5B57\u8282\u6570</td><td></td></tr><tr><td>1</td><td>$connection</td><td>\u8FDE\u63A5\u5E8F\u5217\u53F7</td><td></td></tr><tr><td>1</td><td>$hostname</td><td>\u4E3B\u673A\u540D</td><td></td></tr><tr><td>1</td><td>$msec</td><td>\u5F53\u524D\u65F6\u95F4\u5728\u79D2\u548C\u6BEB\u79D2\u5206\u8FA8\u7387</td><td></td></tr><tr><td>1</td><td>$nginx_version</td><td>nginx \u7248\u672C</td><td></td></tr><tr><td>1</td><td>$pid</td><td>\u5DE5\u4F5C\u8FDB\u7A0B\u7684 PID</td><td></td></tr><tr><td>1</td><td>$protocol</td><td>\u534F\u8BAE\u7528\u4E8E\u4E0E\u5BA2\u6237\u6C9F\u901A: TCP \u6216 UDP(1.11.4)</td><td></td></tr><tr><td>1</td><td>$proxy_protocol_addr</td><td>\u5BA2\u6237\u7AEF\u5730\u5740\u4ECE\u4EE3\u7406\u534F\u8BAE\u5934,\u5426\u5219\u6216\u7A7A\u5B57\u7B26\u4E32(1.11.4)</td><td></td></tr><tr><td>1</td><td>$proxy_protocol_port</td><td>\u4EE3\u7406\u534F\u8BAE\u4E4B\u524D\u5FC5\u987B\u901A\u8FC7\u8BBE\u7F6E\u542F\u7528 proxy_protocol \u53C2\u6570\u542C\u6307\u4EE4</td><td></td></tr><tr><td>1</td><td>$remote_addr</td><td>\u5BA2\u6237\u7AEF\u5730\u5740</td><td></td></tr><tr><td>1</td><td>$remote_port</td><td>\u5BA2\u6237\u7AEF\u7AEF\u53E3</td><td></td></tr><tr><td>1</td><td>$server_addr</td><td>\u63A5\u53D7\u8FDE\u63A5\u8FC7\u6765\u7684\u670D\u52A1\u5668\u7684\u5730\u5740</td><td></td></tr><tr><td>1</td><td>$server_port</td><td>\u63A5\u53D7\u4E86\u4E00\u4E2A\u8FDE\u63A5\u7AEF\u53E3\u7684\u670D\u52A1\u5668</td><td></td></tr><tr><td>1</td><td>$session_time</td><td>\u4F1A\u8BDD\u6301\u7EED\u65F6\u95F4\u5728\u79D2\u548C\u6BEB\u79D2\u5206\u8FA8\u7387(1.11.4);</td><td></td></tr><tr><td>1</td><td>$status</td><td>\u4F1A\u8BDD\u72B6\u6001</td><td></td></tr><tr><td>1</td><td>$time_iso8601</td><td>\u5F53\u5730\u65F6\u95F4\u7684 ISO 8601 \u6807\u51C6\u683C\u5F0F</td><td></td></tr></tbody></table><h3 id="\u91C7\u96C6\u683C\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u91C7\u96C6\u683C\u5F0F-1" aria-hidden="true">#</a> \u91C7\u96C6\u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>log_format proxy_format  <span class="token string">&quot;<span class="token variable">$remote_addr</span>,
    <span class="token variable">$time_local</span>,
    <span class="token variable">$status</span>,
    <span class="token variable">$upstream_bytes_sent</span>,
    <span class="token variable">$protocol</span>,
    <span class="token variable">$upstream_addr</span>,
    <span class="token variable">$bytes_sent</span>,
    <span class="token variable">$bytes_received</span>,
    <span class="token variable">$session_time</span>,
    <span class="token variable">$upstream_bytes_received</span>,
    <span class="token variable">$upstream_connect_time</span>&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u5E94\u7684-hive-\u6570\u636E\u8868\u7ED3\u6784-1" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5E94\u7684-hive-\u6570\u636E\u8868\u7ED3\u6784-1" aria-hidden="true">#</a> \u5BF9\u5E94\u7684 hive \u6570\u636E\u8868\u7ED3\u6784</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> ods_nginx_proxy_log<span class="token punctuation">(</span>
    remote_addr string<span class="token punctuation">,</span>
    time_local string<span class="token punctuation">,</span>
    <span class="token keyword">status</span> string<span class="token punctuation">,</span>
    upstream_bytes_sent string<span class="token punctuation">,</span>
    protocol string <span class="token punctuation">,</span>
    upstream_addr string <span class="token punctuation">,</span>
    bytes_sent string <span class="token punctuation">,</span>
    bytes_received string <span class="token punctuation">,</span>
    session_time string <span class="token punctuation">,</span>
    upstream_bytes_received string <span class="token punctuation">,</span>
    upstream_connect_time string <span class="token punctuation">,</span>
    id string<span class="token punctuation">,</span>
    appkey string<span class="token punctuation">,</span>
    sing string<span class="token punctuation">,</span>
    VERSION string<span class="token punctuation">)</span> <span class="token keyword">clustered</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token number">5</span> buckets stored <span class="token keyword">AS</span> orc TBLPROPERTIES <span class="token punctuation">(</span><span class="token string">&#39;transactional&#39;</span><span class="token operator">=</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,21),r=[d];function i(l,o){return n(),s("div",null,r)}var c=t(e,[["render",i],["__file","03_\u8BBF\u95EE\u65E5\u5FD7\u6570\u636E\u91C7\u96C6.html.vue"]]);export{c as default};
