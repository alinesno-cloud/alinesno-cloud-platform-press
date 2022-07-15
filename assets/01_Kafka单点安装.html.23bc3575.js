import{_ as s,o as n,c as i,a as e,d as o,b as l}from"./app.4d984c6b.js";const t={},r=o(`<h1 id="kafka-\u5355\u70B9\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#kafka-\u5355\u70B9\u6559\u7A0B" aria-hidden="true">#</a> Kafka \u5355\u70B9\u6559\u7A0B</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4E0A\u4F20\u8F6F\u4EF6\u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/soft/</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -r kafka_2.11-2.0.1.tgz alinesno@192.168.1.110:~/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u538B\u5B89\u88C5\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/kafka
<span class="token function">tar</span> -xzvf ~/soft/kafka_2.11-2.0.1.tgz -C ~/kafka
<span class="token builtin class-name">cd</span> ~/kafka/kafka_2.11-2.0.1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8 kafka \u670D\u52A1</p><blockquote><p>kafka \u6CE8\u518C\u4E2D\u5FC3\u9700\u8981 zk\uFF0C\u4F46\u662F\u8003\u8651\u5230\u5355\u70B9\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u4F7F\u7528 kafka \u5185\u7F6E\u7684 zk \u670D\u52A1\u5373\u53EF,\u5728\u96C6\u7FA4\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u518D\u914D\u7F6E zk \u96C6\u7FA4,\u540E\u9762\u5982\u679C\u9700\u8981\u4F7F\u7528\u5230 zk \u7684\u5730\u65B9\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u6682\u65F6\u8FDE\u63A5\u6B64 zk</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u542F\u52A8zk\u670D\u52A1,\u5E76\u67E5\u770B\u542F\u52A8\u65E5\u5FD7
<span class="token function">nohup</span> bin/zookeeper-server-start.sh config/zookeeper.properties <span class="token operator">&gt;&gt;</span> zookeeper.nohup.out <span class="token operator">&amp;</span>
<span class="token function">tail</span> -f zookeeper.nohup.out
 \u542F\u52A8kafka\u670D\u52A1,\u5E76\u67E5\u770B\u542F\u52A8\u65E5\u5FD7
<span class="token function">nohup</span> bin/kafka-server-start.sh config/server.properties <span class="token operator">&gt;&gt;</span> producer.nohup.out <span class="token operator">&amp;</span>
<span class="token function">tail</span> -f producer.nohup.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D88\u606F\u6536\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u6536\u53D1" aria-hidden="true">#</a> \u6D88\u606F\u6536\u53D1</h2><p>\u521B\u5EFA\u4E00\u4E2A<code>test</code>\u4E3B\u9898</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u521B\u5EFA\u4E3B\u9898
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor <span class="token number">1</span> --partitions <span class="token number">1</span> --topic <span class="token builtin class-name">test</span>
 \u67E5\u770B\u4E3B\u9898
bin/kafka-topics.sh --list --zookeeper localhost:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u6D88\u606F\u63A5\u6536\u670D\u52A1,\u76D1\u542C<code>test</code>\u4E3B\u9898,\u6D88\u606F\u4F1A\u4E0D\u65AD\u7684\u76D1\u542C\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u8D77\u53E6\u4E00\u4E2A\u7A97\u53E3\u7528\u4E8E\u4E13\u95E8\u63A5\u6536\u6D88\u606F\uFF0C\u5F00\u59CB\u542F\u52A8\u7684\u65F6\u5019\u662F\u6CA1\u6709\u6D88\u606F\u7684\uFF0C\u4FDD\u7559\u7740\u5C31\u53EF\u4EE5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic <span class="token builtin class-name">test</span> --from-beginning
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u6D88\u606F\u53D1\u9001\u670D\u52A1,\u53D1\u9001\u7ED9<code>test</code>\u4E3B\u9898,\u5728\u542F\u52A8\u53D1\u9001\u670D\u52A1\u4E4B\u540E\uFF0C\u4F60\u518D\u8F93\u5165\u5B57\u7B26\uFF0C\u7136\u540E\u518D\u770B\u6D88\u606F\u670D\u52A1\u7A97\u53E3\u662F\u5426\u80FD\u63A5\u6536\u5F97\u5230</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-console-producer.sh --broker-list localhost:9092 --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53D1\u9001\u4E00\u6761\u6D88\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this is a test from message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\u56FE,\u7528\u4E86<code>tmux</code>\u505A\u4E86\u7A97\u53E3\u5206\u9694\u5904\u7406:</p>`,20),c=["src"],d=e("h1",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),l(" \u53C2\u8003\u8D44\u6599")],-1),p=e("ul",null,[e("li",null,"\u7565")],-1);function u(a,k){return n(),i("div",null,[r,e("img",{src:a.$withBase("/operation/kafka_01.png")},null,8,c),d,p])}var v=s(t,[["render",u],["__file","01_Kafka\u5355\u70B9\u5B89\u88C5.html.vue"]]);export{v as default};
