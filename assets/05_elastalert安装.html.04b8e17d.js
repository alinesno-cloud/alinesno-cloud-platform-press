import{_ as e,o as s,c as t,d as a}from"./app.9a61e826.js";const n={},l=a(`<h1 id="elastalert-\u5B89\u88C5\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#elastalert-\u5B89\u88C5\u6559\u7A0B" aria-hidden="true">#</a> ElastAlert \u5B89\u88C5\u6559\u7A0B</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u5B89\u88C5\u9884\u8B66</li></ul><h2 id="\u5B89\u88C5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5\u73AF\u5883</h2><ul><li>Centos7.4_x64</li><li>Elasticsearch 6.4.0</li><li>Kibana 6.4.0</li></ul><h2 id="\u5B89\u88C5\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6559\u7A0B" aria-hidden="true">#</a> \u5B89\u88C5\u6559\u7A0B</h2><p>\u4E0B\u8F7D\u4EE3\u7801\uFF0C\u6CE8\u610F\u4F7F\u7528\u7684\u7248\u672C\u53F7\u548C python \u7248\u672C\uFF0Ces \u4F7F\u7528\u7684\u7248\u672C\u662F 6.4.0,\u6240\u4EE5\u4F7F\u7528\u7684 elastalert \u7248\u672C\u4E0D\u80FD\u592A\u9AD8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5\u4F9D\u8D56\u5305</span>
yum <span class="token function">install</span> gcc libffi-devel python-devel openssl-devel python-setuptools <span class="token function">git</span>

<span class="token function">curl</span> https://bootstrap.pypa.io/get-pip.py -o get-pip.py    \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C
<span class="token function">sudo</span> python get-pip.py     \u8FD0\u884C\u5B89\u88C5\u811A\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 python</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 elastalert</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --branch v0.1.39 https://github.com/Yelp/elastalert.git
<span class="token builtin class-name">cd</span> elastalert

<span class="token comment">#\u5B89\u88C5</span>
 pip <span class="token function">install</span> <span class="token string">&quot;setuptools&gt;=11.3&quot;</span>

 centos7.4
pip  <span class="token function">install</span> <span class="token assign-left variable">setuptools</span><span class="token operator">==</span><span class="token number">32.2</span>.0
pip <span class="token function">install</span> -r requirements.txt

python setup.py <span class="token function">install</span>

 \u6216\u8005 pip <span class="token function">install</span> elastalert
 Elasticsearch <span class="token number">5.0</span>+:
pip <span class="token function">install</span> <span class="token string">&quot;elasticsearch&gt;=5.0.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u89C4\u5219</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> elastalert
<span class="token function">cp</span> config.yaml.example config.yaml <span class="token comment">#\u57FA\u672C\u4FE1\u606F</span>
<span class="token function">vim</span> config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u89C4\u5219\u76EE\u5F55</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u5C06\u4ECE\u8BE5\u6587\u4EF6\u5939\u4E0B\u8BFB\u53D6*.yaml\u914D\u7F6E\u6587\u4EF6</span>
<span class="token key atrule">rules_folder</span><span class="token punctuation">:</span> alinesno_rules
<span class="token comment">#\u67E5\u8BE2es\u4E2D elastalert_status \u7D22\u5F15\u7684\u9891\u7387\uFF0C\u4E5F\u53EF\u4EE5\u662Fminutes\uFF0Cdays \u7B49\u7B49</span>
<span class="token key atrule">run_every</span><span class="token punctuation">:</span>
  <span class="token key atrule">hours</span><span class="token punctuation">:</span> <span class="token number">1</span>
 \u6BCF\u4E24\u5206\u949F\u67E5\u8BE2\u4E00\u6B21es \u5339\u914D rules \u7684\u6570\u636E\uFF0C\u5B58\u653E\u5230elastalert_status\u4E2D
<span class="token key atrule">buffer_time</span><span class="token punctuation">:</span>
  <span class="token key atrule">minutes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#host</span>
<span class="token key atrule">es_host</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token comment">#port</span>
<span class="token key atrule">es_port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
 Option basic<span class="token punctuation">-</span>auth username and password for Elasticsearch
 <span class="token key atrule">es_username</span><span class="token punctuation">:</span> username
 <span class="token key atrule">es_password</span><span class="token punctuation">:</span> pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89C4\u5219\u76EE\u5F55\u8BF4\u660E\uFF0C\u6B64\u5904\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u6307 config.yaml \u6587\u4EF6</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>rules_folder</td><td>ElastAlert \u5C06\u52A0\u8F7D\u89C4\u5219\u914D\u7F6E\u6587\u4EF6\u7684\u5730\u65B9\uFF0C\u5B83\u5C06\u5C1D\u8BD5\u52A0\u8F7D\u6587\u4EF6\u5939\u4E2D\u7684\u6BCF\u4E2A.yaml \u6587\u4EF6\u3002</td></tr><tr><td>run_every</td><td>ElastAlert \u67E5\u8BE2 Elasticsearch \u7684\u9891\u7387\u3002</td></tr><tr><td>buffer_time</td><td>\u662F\u67E5\u8BE2\u7A97\u53E3\u7684\u5927\u5C0F\uFF0C\u4ECE\u6BCF\u4E2A\u67E5\u8BE2\u8FD0\u884C\u7684\u65F6\u95F4\u5411\u540E\u5EF6\u4F38\u3002\u5BF9\u4E8E\u5176\u4E2D use_count_query \u6216 use_terms_query \u8BBE\u7F6E\u4E3A true \u7684\u89C4\u5219\uFF0C\u6B64\u503C\u5C06\u88AB\u5FFD\u7565\u3002</td></tr><tr><td>es_host</td><td>\u662F Elasticsearch \u96C6\u7FA4\u7684\u5730\u5740\uFF0CElastAlert \u5C06\u5B58\u50A8\u6709\u5173\u5176\u72B6\u6001\u3001\u67E5\u8BE2\u8FD0\u884C\u3001\u8B66\u62A5\u548C\u9519\u8BEF\u7684\u6570\u636E\u3002\u6BCF\u4E2A\u89C4\u5219\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684 elasticsearch \u4E3B\u673A\u8FDB\u884C\u67E5\u8BE2\u3002</td></tr><tr><td>es_port</td><td>Elasticsearch \u5BF9\u5E94\u7684\u7AEF\u53E3\u3002</td></tr><tr><td>use_ssl</td><td>\uFF08\u53EF\u9009\u7684\uFF09\u662F\u5426\u4F7F\u7528 TLS;\u8FDE\u63A5\u5230 es_host\uFF1B\u8BBE\u7F6E\u4E3A True \u6216 False\u3002</td></tr><tr><td>verify_certs</td><td>\uFF08\u53EF\u9009\u7684\uFF09\u662F\u5426\u9A8C\u8BC1 TLS \u8BC1\u4E66; \u8BBE\u7F6E\u4E3A True \u6216 False\uFF0C\u9ED8\u8BA4\u662F True\u3002</td></tr><tr><td>client_cert</td><td>\uFF08\u53EF\u9009\u7684\uFF09PEM \u8BC1\u4E66\u7684\u8DEF\u5F84\u3002</td></tr><tr><td>client_key</td><td>\uFF08\u53EF\u9009\u7684\uFF09 \u4F5C\u4E3A\u5BA2\u6237\u7AEF\u5BC6\u94A5\u4F7F\u7528\u7684\u79C1\u94A5\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</td></tr><tr><td>ca_certs</td><td>\uFF08\u53EF\u9009\u7684\uFF09 \u7528\u4E8E\u9A8C\u8BC1 SSL \u8FDE\u63A5\u7684 CA \u8BC1\u4E66\u7684\u8DEF\u5F84\u3002</td></tr><tr><td>es_username</td><td>\uFF08\u53EF\u9009\u7684\uFF09 \u7528\u4E8E\u8FDE\u63A5 Elasticsearch \u7684 basic-auth \u7528\u6237\u540D\u3002</td></tr><tr><td>es_password</td><td>\uFF08\u53EF\u9009\u7684\uFF09 \u7528\u4E8E\u8FDE\u63A5 Elasticsearch \u7684\u5BC6\u7801\u3002</td></tr><tr><td>es_url_prefix</td><td>\uFF08\u53EF\u9009\u7684\uFF09 Elasticsearch \u7AEF\u70B9\u7684 URL \u524D\u7F00\u3002</td></tr><tr><td>es_send_get_body_as</td><td>\uFF08\u53EF\u9009\u7684\uFF09 \u67E5\u8BE2 Elasticsearch \u65B9\u6CD5- GET\uFF0CPOST \u6216 source\uFF0C\u9ED8\u8BA4\u662F GET\u3002</td></tr><tr><td>writeback_index</td><td>\u662F ElastAlert \u5C06\u5B58\u50A8\u6570\u636E\u7684\u7D22\u5F15\u540D\u79F0\u3002</td></tr><tr><td>alert_time_limit</td><td>\u662F\u5931\u8D25\u8B66\u62A5\u7684\u91CD\u8BD5\u7A97\u53E3\u3002</td></tr></tbody></table><p>\u914D\u7F6E\u89C4\u5219</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code> \u89C4\u5219\u540D\u79F0(\u552F\u4E00)
<span class="token key atrule">name</span><span class="token punctuation">:</span> Aalinesno\u670D\u52A1\u5F02\u5E38
<span class="token key atrule">type</span><span class="token punctuation">:</span> change
 \u7D22\u5F15
<span class="token key atrule">index</span><span class="token punctuation">:</span> alinesno<span class="token punctuation">-</span>*
 The field to look for changes in
<span class="token key atrule">compare_key</span><span class="token punctuation">:</span> message
 Ignore documents without the compare_key (country_name) field
<span class="token key atrule">ignore_null</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
 (Required<span class="token punctuation">,</span> change specific)
 \u5173\u952E\u5B57\u67E5\u8BE2
<span class="token key atrule">query_key</span><span class="token punctuation">:</span> ERROR
 (Required<span class="token punctuation">,</span> change specific)
 The value of compare_key must change in two events that are less than timeframe apart to trigger an alert
<span class="token key atrule">timeframe</span><span class="token punctuation">:</span>
  <span class="token key atrule">minutes</span><span class="token punctuation">:</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rule" tabindex="-1"><a class="header-anchor" href="#rule" aria-hidden="true">#</a> rule</h4><p>\u8BBE\u7F6E\u5404\u81EA\u72EC\u7ACB\u4EE5\u6587\u4EF6\u65B9\u5F0F\u5B58\u50A8\u5728 rules_folder \u8BBE\u7F6E\u7684\u76EE\u5F55\u91CC\u3002\u5176\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u4E0B\u9762\u8FD9\u4E9B\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>\u6BCF\u4E2A\u89C4\u5219\u9700\u8981\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u540D\u79F0\uFF0C\u4E00\u65E6\u91CD\u590D\uFF0C\u8FDB\u7A0B\u5C06\u65E0\u6CD5\u542F\u52A8\u3002</td></tr><tr><td>type</td><td>\u9009\u62E9\u67D0\u4E00\u79CD\u6570\u636E\u9A8C\u8BC1\u65B9\u5F0F\u3002</td></tr><tr><td>index</td><td>\u4ECE\u67D0\u7C7B\u7D22\u5F15\u91CC\u8BFB\u53D6\u6570\u636E\uFF0C\u76EE\u524D\u5DF2\u7ECF\u652F\u6301 Ymd \u683C\u5F0F\uFF0C\u9700\u8981\u5148\u8BBE\u7F6E use_strftime_index\uFF1Atrue\uFF0C<br>\u7136\u540E\u5339\u914D\u7D22\u5F15\uFF0C\u914D\u7F6E\u5F62\u5982\uFF1Aindex\uFF1Alogstash-es-test-\uFF05Y\u3002\uFF05m\u3002\uFF05d\uFF0C\u8868\u793A\u5339\u914D logstash-ES-\u6D4B\u8BD5\u540D\u79F0\u5F00\u5934\uFF0C\u4EE5\u5E74\u6708\u65E5\u4F5C\u4E3A\u7D22\u5F15\u540E\u7F00\u7684\u7D22\u5F15\u3002</td></tr><tr><td>filter</td><td>\u8BBE\u7F6E\u5411 ES \u8BF7\u6C42\u7684\u8FC7\u6EE4\u6761\u4EF6\u3002</td></tr><tr><td>timeframe</td><td>\u7D2F\u79EF\u89E6\u53D1\u62A5\u8B66\u7684\u65F6\u957F\u3002</td></tr><tr><td>alert</td><td>\u8BBE\u7F6E\u89E6\u53D1\u62A5\u8B66\u65F6\u6267\u884C\u54EA\u4E9B\u62A5\u8B66\u624B\u6BB5\u3002</td></tr></tbody></table><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p>\u4E0D\u540C\u7684\u7C7B\u578B\u8FD8\u6709\u81EA\u5DF1\u72EC\u7279\u7684\u914D\u7F6E\u9009\u9879\u3002\u76EE\u524D ElastAlert \u6709\u4EE5\u4E0B\u51E0\u79CD\u81EA\u5E26 ruletype\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>any</td><td>\u53EA\u8981\u6709\u5339\u914D\u5C31\u62A5\u8B66;</td></tr><tr><td>blacklist</td><td>compare_key \u5B57\u6BB5\u7684\u5185\u5BB9\u5339\u914D\u4E0A blacklist \u6570\u7EC4\u91CC\u4EFB\u610F\u5185\u5BB9;</td></tr><tr><td>whitelist</td><td>compare_key \u5B57\u6BB5\u7684\u5185\u5BB9\u4E00\u4E2A\u90FD\u6CA1\u80FD\u5339\u914D\u4E0A whitelist \u6570\u7EC4\u91CC\u5185\u5BB9;</td></tr><tr><td>change</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ccompare_key \u5B57\u6BB5\u7684\u5185\u5BB9\uFF0C\u5728 timeframe \u8303\u56F4\u5185\u53D1\u9001\u53D8\u5316;</td></tr><tr><td>frequency</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ctimeframe \u8303\u56F4\u5185\u6709 num_events \u4E2A\u88AB\u8FC7\u6EE4\u51FA\u6765\u7684\u5F02\u5E38;</td></tr><tr><td>spike</td><td>\u76F8\u540C\u5728 query_key \u6761\u4EF6\u4E0B\uFF0C\u4E24\u4E2A\u524D\u540E timeframe \u8303\u56F4\u5185\u6570\u636E\u91CF\u76F8\u5DEE\u6BD4\u4F8B\u8D85\u8FC7 spike_height\u3002<br>\u53EF\u4EE5\u5176\u4E2D\u901A\u8FC7 spike_type \u8BBE\u7F6E\u5177\u4F53\u6DA8\u8DCC\u65B9\u5411\u7684\u82F1\u6587 up\uFF0Cdown\uFF0Cboth\u3002\u53EF\u4EE5\u8FD8\u901A\u8FC7 threshold_ref \u8BBE\u7F6E\u8981<br>\u6C42\u4E0A\u4E00\u4E2A\u5468\u671F\u6570\u636E\u91CF\u7684\u4E0B\u9650\uFF0Cthreshold_cur \u8BBE\u7F6E<br>\u8981\u6C42\u5F53\u524D\u5468\u671F\u6570\u636E\u91CF\u7684\u4E0B\u9650\uFF0C\u5982\u679C\u6570\u636E\u91CF\u4E0D\u5230\u4E0B\u9650\uFF0C\u4E5F\u4E0D\u89E6\u53D1;</td></tr><tr><td>flatline</td><td>timeframe \u8303\u56F4\u5185\uFF0C\u91CF\u6570\u636E\u5C0F\u4E8E threshold \u9608\u503C;</td></tr><tr><td>new_term</td><td>fields \u5B57\u6BB5\u65B0\u51FA\u73B0\u4E4B\u524D terms_window_size\uFF08\u9ED8\u8BA4 30 \u5929\uFF09<br>\u8303\u56F4\u5185\u6700\u591A\u7684 terms_size\uFF08\u9ED8\u8BA4 50\uFF09\u4E2A\u7ED3\u679C\u4EE5\u5916\u7684\u6570\u636E;</td></tr><tr><td>cardinality</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ctimeframe \u8303\u56F4\u5185 cardinality_field \u7684<br>\u503C\u8D85\u8FC7 max_cardinality \u6216\u8005\u4F4E\u4E8E min_cardinality\u3002</td></tr></tbody></table><p>\u521D\u59CB\u5316</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>elastalert-create-index
elastalert-test-rule alinesno_rules/alinesno_rule.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>elastalert-create-index</td><td>ElastAlert \u4F1A\u811A\u6267\u884C\u8BB0\u5F55\u5B58\u653E\u5230\u4E00\u4E2A ES \u7D22\u5F15\u4E2D\uFF0C\u8BE5\u547D\u4EE4\u5C31\u662F\u7528\u6765\u521B\u5EFA\u8FD9\u4E2A\u7D22\u5F15\u7684\uFF0C<br>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7D22\u5F15\u540D\u53EB elastalert_status\u3002\u5176\u4E2D\u6709 4 \u4E2A_type\uFF0C\u90FD\u6709\u81EA\u5DF1\u7684@timestamp \u5B57\u6BB5\uFF0C<br>\u6240\u4EE5\u540C\u6837\u4E5F\u53EF\u4EE5\u7528 kibana \u6765\u67E5\u770B\u8FD9\u4E2A\u7D22\u5F15\u7684\u65E5\u5FD7\u8BB0\u5F55\u60C5\u51B5\u3002</td></tr><tr><td>elastalert-rule-from-kibana</td><td>\u4ECE Kibana \u5DF2\u4FDD\u5B58\u7684\u4EEA\u8868\u76D8\u4E2D\u8BFB\u53D6 Filtering \u8BBE\u7F6E\uFF0C\u5E2E\u52A9\u751F\u6210 config.yaml \u91CC\u7684\u914D\u7F6E\u3002<br>\u4E0D\u8FC7\u6CE8\u610F\uFF0C\u5B83\u53EA\u4F1A\u8BFB\u53D6\u8FC7\u6EE4\uFF0C\u4E0D\u5305\u62EC\u67E5\u8BE2\u3002</td></tr><tr><td>elastalert-test-rule</td><td>\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E2D\u7684\u89C4\u5219\u8BBE\u7F6E\u3002</td></tr></tbody></table><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python -m elastalert.elastalert --config ./config.yaml --verbose --rule alinesno_rules/alinesno_rule.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>`,33),i=[l];function d(r,c){return s(),t("div",null,i)}var u=e(n,[["render",d],["__file","05_elastalert\u5B89\u88C5.html.vue"]]);export{u as default};
