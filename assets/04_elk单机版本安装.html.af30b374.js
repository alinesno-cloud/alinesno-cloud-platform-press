import{_ as s,o as a,c as e,a as i,d as l}from"./app.675cbf49.js";const c={},t=l(`<h1 id="elk-\u5355\u673A\u7248\u672C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#elk-\u5355\u673A\u7248\u672C\u5B89\u88C5" aria-hidden="true">#</a> ELK \u5355\u673A\u7248\u672C\u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>ELK \u5355\u673A\u7248\u672C\u5B89\u88C5</li><li>\u542F\u52A8\u5E76\u914D\u7F6E logstash \u914D\u7F6E(\u6B64\u5904\u53EA\u4E3A demo)</li></ul><h2 id="elk-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#elk-\u5B89\u88C5" aria-hidden="true">#</a> elk \u5B89\u88C5</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p>\u5355\u673A\u7248\u5B89\u88C5\u53EA\u4E3A\u7528\u4E8E\u5B66\u4E60\u4F7F\u7528\uFF0C\u751F\u4EA7\u4E2D\u8BF7\u4F7F\u7528\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u6B64\u5904\u4EE5\u963F\u91CC\u4E91\u670D\u52A1\u5668\u505A\u4E3A\u793A\u4F8B\u7528\u4E8E\u5B66\u4E60,</p><h3 id="\u4E0A\u4F20\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u8F6F\u4EF6" aria-hidden="true">#</a> \u4E0A\u4F20\u8F6F\u4EF6</h3><p>\u4E0A\u4F20 Jenkins \u81F3 Linux \u670D\u52A1\u5668<code>/home/alinesno/elk</code>\u76EE\u5F55</p><blockquote><p>\u6B64\u5904\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 xftp \u6216\u8005 xshell \u7B49\u5DE5\u5177\uFF0C\u4E66\u8981\u7B80\u8A00</p></blockquote><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><blockquote><p>elk \u542F\u52A8\u9700\u8981\u4F7F\u7528\u975E root \u7528\u6237\u64CD\u4F5C\uFF0C\u6240\u4EE5\u6B64\u5904\u6DFB\u52A0 elk \u7528\u6237\uFF0C\u5E76\u7528\u6B64\u7528\u6237\u64CD\u4F5C\uFF0C\u751F\u4EA7\u4E5F\u5F3A\u70C8\u5EFA\u8BAE\u4EE5\u975E root \u64CD\u4F5C</p></blockquote><p>\u6DFB\u52A0 elk \u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> elk
<span class="token comment"># \u5982\u679C\u9700\u8981\u8BBE\u7F6E\u5BC6\u7801\u5219\u505A\u5982\u6B64\u64CD\u4F5C</span>
<span class="token function">passwd</span> elk
<span class="token function">su</span> elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u538B es,\u5E76\u542F\u52A8\uFF0C\u4E00\u822C\u65E0\u975E\u7AEF\u53E3\u6216\u8005\u5185\u5B58\u7684\u539F\u56E0\uFF0C\u8FD9\u6B65\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u5F88\u987A\u5229\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf elasticsearch-6.5.1.tar.gz
<span class="token comment"># \u91CD\u547D\u540D\u6587\u4EF6\u5939</span>
<span class="token function">mv</span> elasticsearch-6.5.1  elasticsearch
<span class="token builtin class-name">cd</span> elasticsearch
<span class="token comment"># -d \u8868\u793A\u540E\u9762\u8FD0\u884C</span>
./bin/elasticsearch -d
<span class="token comment"># \u67E5\u770B\u542F\u52A8\u65E5\u5FD7</span>
<span class="token function">tail</span> -f logs/elasticsearch.log
<span class="token comment"># \u67E5\u770B\u8FDB\u7A0B\u662F\u5426\u5B58\u5728</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u538B logstash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf logstash-6.5.1.tar.gz
<span class="token function">mv</span> logstash-6.5.1 logstash
<span class="token builtin class-name">cd</span> logstash
<span class="token comment"># \u67E5\u770B\u793A\u4F8B\u914D\u7F6E</span>
<span class="token function">cat</span> config/logstash-sample.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u4E3A\u4E0E alinesno-cloud \u5E73\u53F0\u6574\u5408\uFF0C\u6240\u4EE5\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E,\u7F16\u8F91\u6587\u4EF6\u540D\u79F0\u4E3A<code>logstash.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> config/logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E\u5185\u5BB9\u5982\u4E0B\uFF0C\u8FD9\u91CC\u542F\u52A8\u4E86\u4E00\u4E2A tcp \u670D\u52A1\uFF0C\u7AEF\u53E3\u662F 4567\uFF0C\u7136\u540E\u5411\u672C\u5730\u7684 es \u8F93\u5165</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>input<span class="token punctuation">{</span>
    tcp <span class="token punctuation">{</span>
        mode =&gt; <span class="token string">&quot;server&quot;</span>
        host =&gt; <span class="token string">&quot;0.0.0.0&quot;</span>
        port =&gt; <span class="token number">4567</span>
        codec =&gt; json_lines
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
        hosts=&gt;<span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
        index =&gt; <span class="token string">&quot;alinesno-cloud-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
    stdout<span class="token punctuation">{</span>
        codec =&gt; rubydebug
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8 logstash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> logstash
<span class="token function">nohup</span> ./bin/logstash -f ./config/logstash
<span class="token function">tail</span> -f nohup.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 kibana \u5BA2\u6237\u7AEF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf kibana-6.5.1-linux-x86_64.tar.gz
<span class="token function">mv</span> kibana-6.5.1-linux-x86_64 kibana
<span class="token function">nohup</span> bin/kibana <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE<code>http://localhost:5601</code>\uFF0C\u89C1\u5982\u4E0B\u754C\u9762:</p>`,26),d=["src"];function o(n,u){return a(),e("div",null,[t,i("img",{src:n.$withBase("/operation/kibana_01.png")},null,8,d)])}var r=s(c,[["render",o],["__file","04_elk\u5355\u673A\u7248\u672C\u5B89\u88C5.html.vue"]]);export{r as default};
