import{_ as a,o as e,c as n,d as s}from"./app.d3ef0c93.js";const i={},r=s(`<h1 id="kafka-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#kafka-\u5B89\u88C5" aria-hidden="true">#</a> kafka \u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5982\u4F55\u5728 centos7 \u670D\u52A1\u5668\u4E0A\u5B89\u88C5 kafka</li></ul><h2 id="kafka-\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#kafka-\u5B89\u88C5-1" aria-hidden="true">#</a> kafka \u5B89\u88C5</h2><p>\u767B\u5F55\u5B98\u7F51https://kafka.apache.org/</p><p>\u4E0B\u8F7D kafka_2.12-3.2.0.tgz \u5E76\u4E0A\u4F20\u81F3 Linux \u670D\u52A1\u5668/root/flink \u76EE\u5F55\u3002</p><p>1\u3001\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/flink
<span class="token function">tar</span> -zxvf kafka_2.12-3.2.0.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 server.properties</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/flink/kafka_2.12-3.2.0/config
<span class="token function">vi</span> server.properties
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3A147\uFF0C\u8981\u6C42kafka\u96C6\u7FA4\u4E2D\u552F\u4E00</span>
broker.id<span class="token operator">=</span><span class="token number">147</span>

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3APLAINTEXT://192.168.17.147:9092</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://192.168.17.147:9092

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3A192.168.17.147:2181\uFF0C\u590D\u7528CDH6.2.0\u7684zookeeper</span>
zookeeper.connect<span class="token operator">=</span><span class="token number">192.168</span>.17.147:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u590D\u5236 kafka_2.12-3.2.0.tgz \u5230 kafka \u96C6\u7FA4\u7684\u5176\u4ED6\u670D\u52A1\u5668\uFF0C\u6309\u7167\u7B2C 2 \u70B9\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 server.properties</p>`,11),l=[r];function c(d,t){return e(),n("div",null,l)}var p=a(i,[["render",c],["__file","02_Apachekafka\u5B89\u88C5.html.vue"]]);export{p as default};
