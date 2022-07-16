import{_ as e,o as i,c as n,d as s}from"./app.37313d2d.js";const a={},d=s(`<h1 id="minio-\u96C6\u7FA4\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#minio-\u96C6\u7FA4\u5B89\u88C5" aria-hidden="true">#</a> MinIO \u96C6\u7FA4\u5B89\u88C5</h1><p>Minio \u662F Apache License v2.0 \u4E0B\u53D1\u5E03\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u5668\u3002\u5B83\u4E0E Amazon S3 \u4E91\u5B58\u50A8\u670D\u52A1\u517C\u5BB9\u3002 \u5B83\u6700\u9002\u5408\u5B58\u50A8\u975E\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u5982\u7167\u7247\uFF0C\u89C6\u9891\uFF0C\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5907\u4EFD\u548C\u5BB9\u5668/ VM \u6620\u50CF\u3002\u5BF9\u8C61\u7684\u5927\u5C0F\u53EF\u4EE5\u4ECE\u51E0 KB \u5230\u6700\u5927 5TB Minio \u670D\u52A1\u5668\u8DB3\u591F\u8F7B\uFF0C\u53EF\u4EE5\u4E0E\u5E94\u7528\u7A0B\u5E8F\u5806\u6808\u6346\u7ED1\u5728\u4E00\u8D77\uFF0C\u7C7B\u4F3C\u4E8E NodeJS\uFF0CRedis \u548C MySQL\u3002</p><h2 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h2><ol><li>\u5B98\u7F51\u63D0\u4F9B\u4E86\u6BD4\u8F83\u597D\u7684\u73AF\u5883\uFF0C\u6B64\u5904\u76F4\u63A5\u4F7F\u7528\u5B98\u7F51\u6587\u6863</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">wget</span> https://dl.min.io/server/minio/release/linux-amd64/minio
<span class="token function">chmod</span> +x minio
./minio server /mnt/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u542F\u52A8\u4E4B\u540E\uFF0C\u4F1A\u51FA\u73B0\u5BC6\u7801\u548C\u8BBF\u95EE\u94FE\u63A5\uFF0C\u5982\u4E0B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Endpoint: http://127.0.0.1:9000 http://255.255.255.0:9000 http://127.0.0.1:9000
AccessKey: XXXXX  // \u8BB0\u4F4F
SecretKey: XXXX  // \u8BB0\u4F4F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u8BBF\u95EE\u4E91\u5B58\u50A8\u8DEF\u5F84<code>http://127.0.0.1:9000</code>\uFF0C\u5373\u53EF</li></ol>`,8),l=[d];function t(c,o){return i(),n("div",null,l)}var h=e(a,[["render",t],["__file","02_MinIO\u96C6\u7FA4\u5B89\u88C5.html.vue"]]);export{h as default};
