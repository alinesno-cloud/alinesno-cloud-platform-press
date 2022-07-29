import{_ as n,o as s,c as e,d as i}from"./app.f2a0a541.js";const a={},l=i(`<h1 id="flink-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#flink-\u5B89\u88C5" aria-hidden="true">#</a> Flink \u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5982\u4F55\u5728 centos7 \u670D\u52A1\u5668\u4E0A\u5B89\u88C5 flink</li></ul><h2 id="flink-\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#flink-\u5B89\u88C5-1" aria-hidden="true">#</a> Flink \u5B89\u88C5</h2><p>\u767B\u5F55\u5B98\u7F51https://flink.apache.org/downloads.html</p><p>\u4E0B\u8F7D flink-1.14.4-bin-scala_2.12.tgz \u5E76\u4E0A\u4F20 \u81F3 Linux \u670D\u52A1\u5668/root/flink \u76EE\u5F55\u3002\u6B64\u670D\u52A1\u5668\u4E3A CDH6.2.0 \u7684 dataNode \u8282\u70B9\u3002</p><p>1\u3001\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/flink
<span class="token function">tar</span> -zxvf flink-1.14.4-bin-scala_2.12.tgz

\u521B\u5EFA\u4E34\u65F6\u76EE\u5F55\u6587\u4EF6
<span class="token function">mkdir</span> -p /root/flink/tmp
<span class="token function">mkdir</span> -p /root/flink/flink-1.14.4/tmp/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 flink-conf.yaml</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/flink/flink-1.14.4/conf
<span class="token function">vi</span> flink-conf.yaml
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3A4</span>
taskmanager.numberOfTaskSlots: <span class="token number">4</span>

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3Arocksdb</span>
state.backend: rocksdb

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3Ahdfs:///user/flink/flink-checkpoints</span>
state.checkpoints.dir: hdfs:///user/flink/flink-checkpoints

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3Ahdfs:///user/flink/savepoints-data</span>
state.savepoints.dir: hdfs:///user/flink/savepoints-data

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3Atrue</span>
state.backend.incremental: <span class="token boolean">true</span>

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3A/root/flink/tmp</span>
io.tmp.dirs: /root/flink/tmp

<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3Aparent-first</span>
classloader.resolve-order: parent-first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 zoo.cfg</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/flink/flink-1.14.4/conf
<span class="token function">vi</span> zoo.cfg
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u4E3A/root/flink/flink-1.14.4/tmp/zookeeper</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/root/flink/flink-1.14.4/tmp/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u590D\u5236 hadoop \u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/hadoop/conf/
<span class="token function">cp</span> hdfs-site.xml /root/flink/flink-1.14.4/conf
<span class="token function">cp</span> core-site.xml /root/flink/flink-1.14.4/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[l];function c(o,r){return s(),e("div",null,d)}var p=n(a,[["render",c],["__file","01_ApacheFlink\u5B89\u88C5.html.vue"]]);export{p as default};
