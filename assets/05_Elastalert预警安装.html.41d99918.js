import{_ as n,o as s,c as a,d as e}from"./app.847a508b.js";const t={},l=e(`<h1 id="elastalert-\u9884\u8B66\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#elastalert-\u9884\u8B66\u5B89\u88C5" aria-hidden="true">#</a> Elastalert \u9884\u8B66\u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>Elastalert \u9884\u8B66\u5B89\u88C5</li></ul><h2 id="\u6559\u7A0B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u6559\u7A0B\u5B89\u88C5" aria-hidden="true">#</a> \u6559\u7A0B\u5B89\u88C5</h2><p>\u6B64\u5904\u662F\u5355\u72EC\u627E\u4E86\u4E00\u53F0\u963F\u91CC\u4E91\u670D\u52A1\u5668\u505A\u9884\u8B66\u4F7F\u7528,\u4E0E elk \u670D\u52A1\u5668\u5206\u79BB\uFF0C\u6B64\u5904\u7684 Elastalert \u4F7F\u7528\u7684 python3 \u7248\u672C(python2 \u4E0D\u518D\u652F\u6301)</p><p>\u5B89\u88C5 pip</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> python3   \u4F7F\u7528python3
<span class="token function">curl</span> https://bootstrap.pypa.io/get-pip.py -o get-pip.py
<span class="token function">sudo</span> python3 get-pip.py     \u8FD0\u884C\u5B89\u88C5\u811A\u672C
pip --version   \u67E5\u770B\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u5B89\u88C5\u4F9D\u8D56\u5305
yum <span class="token function">install</span> gcc libffi-devel python3-devel openssl-devel python3-setuptools <span class="token function">git</span>

 \u5B89\u88C5
<span class="token function">git</span> clone https://github.com/Yelp/elastalert.git
pip <span class="token function">install</span> -r requirements.txt
pip <span class="token function">install</span> <span class="token string">&quot;setuptools&gt;=11.3&quot;</span>
python3 setup.py <span class="token function">install</span>

 \u5B89\u88C5 Elasticsearch <span class="token number">5.0</span>+:
pip <span class="token function">install</span> <span class="token string">&quot;elasticsearch&gt;=5.0.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> config.yaml.example config.yaml <span class="token comment">#\u57FA\u672C\u4FE1\u606F</span>
<span class="token function">vim</span> config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539 config.yaml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u5C06\u4ECE\u8BE5\u6587\u4EF6\u5939\u4E0B\u8BFB\u53D6*.yaml\u914D\u7F6E\u6587\u4EF6</span>
<span class="token key atrule">rules_folder</span><span class="token punctuation">:</span> alinesno_rules
<span class="token comment">#\u67E5\u8BE2es\u4E2D elastalert_status \u7D22\u5F15\u7684\u9891\u7387\uFF0C\u4E5F\u53EF\u4EE5\u662Fminutes\uFF0Cdays \u7B49\u7B49</span>
<span class="token key atrule">run_every</span><span class="token punctuation">:</span>
  <span class="token key atrule">hours</span><span class="token punctuation">:</span> <span class="token number">1</span>
 \u6BCF\u4E24\u5206\u949F\u67E5\u8BE2
\u4E00\u6B21es \u5339\u914D rules \u7684\u6570\u636E\uFF0C\u5B58\u653E\u5230elastalert_status\u4E2D
<span class="token key atrule">buffer_time</span><span class="token punctuation">:</span>
  <span class="token key atrule">minutes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#host</span>
<span class="token key atrule">es_host</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token comment">#port</span>
<span class="token key atrule">es_port</span><span class="token punctuation">:</span> <span class="token number">31200</span>

 \u53EF\u9009\u7684\u8BA4\u8BC1\u65B9\u5F0F
 <span class="token key atrule">es_username</span><span class="token punctuation">:</span> username
 <span class="token key atrule">es_password</span><span class="token punctuation">:</span> pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89C4\u5219\u914D\u7F6E alinesno_rule.yaml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">es_host</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token key atrule">es_port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token key atrule">es_username</span><span class="token punctuation">:</span> xxx
<span class="token key atrule">es_password</span><span class="token punctuation">:</span> xxx

 (Required)
 Rule name<span class="token punctuation">,</span> must be unique
 \u7ED9rule\u4E00\u4E2A\u552F\u4E00\u7684\u540D\u5B57
<span class="token key atrule">name</span><span class="token punctuation">:</span> prod

 (Required)
 Type of alert.\u4E0B\u9762\u5404\u79CDtype\u8BE6\u7EC6\u4ECB\u7ECD
<span class="token key atrule">type</span><span class="token punctuation">:</span> any
<span class="token comment">#\u6CE8\u610F\u4E86\uFF01\uFF01\uFF01\uFF01</span>
<span class="token comment">#\u8FD9\u662F\u6700\u5927\u7684\u5751\uFF0C\u800C\u4E14\u5B98\u65B9\u6587\u6863\u4E5F\u6CA1\u6709\u6BD4\u8F83\u660E\u786E\u7684\u8BF4\u660E\uFF0Celastalert\u53EA\u4F1A\u628A\u4E00\u6761hit\u7684\u8BB0\u5F55\u53D1\u9001\u7ED9\u4F60\uFF0C\u5982\u679C\u4F60\u60F3\u83B7\u53D6\u591A\u6761\u9700\u8981\u4F7F\u7528\u805A\u5408\u529F\u80FD\uFF0C</span>
<span class="token key atrule">aggregation</span><span class="token punctuation">:</span>
  &quot;* * * * <span class="token important">*&quot;</span> means<span class="token punctuation">:</span> run as the &quot;run_every&quot; in config.yaml
 <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token string">&quot;* * * * *&quot;</span>
<span class="token key atrule">aggregate_by_match_time</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

 (Required)
 sd asd Index to search<span class="token punctuation">,</span> wildcard supported
<span class="token key atrule">index</span><span class="token punctuation">:</span> <span class="token string">&#39;*-prod-*&#39;</span>


 (Required)
<span class="token comment">#\u8FD9\u91CC\u4F7F\u7528\u7684\u662FES \u7684DSL\u8BED\u53E5\u505A\u8FC7\u6EE4\u6761\u4EF6</span>
<span class="token key atrule">filter</span><span class="token punctuation">:</span>
<span class="token comment">#\u903B\u8F91\u7EC4\u5408</span>
<span class="token punctuation">-</span> <span class="token key atrule">bool</span><span class="token punctuation">:</span>
    <span class="token comment">#\u5FC5\u987B\u5B58\u5728</span>
    <span class="token key atrule">must</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token key atrule">level</span><span class="token punctuation">:</span> <span class="token string">&quot;ERROR&quot;</span>
    <span class="token comment">#\u5FC5\u987B\u4E0D\u5B58\u5728\uFF0C\u5373\u8FC7\u6EE4\u6389\u7684</span>
    <span class="token key atrule">must_not</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token key atrule">stackTrace</span><span class="token punctuation">:</span> <span class="token string">&quot;org.apache.catalina.connector.ClientAbortException: java.io.IOException: Broken pipe&quot;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
          <span class="token key atrule">message</span><span class="token punctuation">:</span> <span class="token string">&quot;[SUCCESS]&quot;</span>

 (Required)
 \u62A5\u8B66\u65B9\u5F0F\uFF0C\u6709\u90AE\u4EF6 jira\u7B49\u7B49\uFF0Cgithub\u4E0A\u8FD8\u6709\u5FAE\u4FE1\u7B49<span class="token punctuation">,</span>\u5B98\u7F51\u4ECB\u7ECDhttps<span class="token punctuation">:</span>//elastalert.readthedocs.io/en/latest/ruletypes.html<span class="token comment">#alerts</span>
<span class="token comment">#\u6211\u7528\u7684\u662Fcommand \u5373\u6267\u884C\u4E00\u4E2A\u547D\u4EE4\uFF0C\u6BD4\u8F83\u7075\u6D3B\u4E00\u4E9B</span>
<span class="token key atrule">alert</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> command
<span class="token comment">#- email</span>
<span class="token key atrule">pipe_match_json</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u628A\u53C2\u6570\u4EE5json\u6587\u4EF6\u6D41\u7684\u5F62\u5F0F\u4F20\u5165\uFF0Cpython\u4E2D\u4EE5 sys.stdin.read()\u63A5\u53D7</span>
<span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/root/elastalert/alinesno_rules/command_alert.py&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rule \u8BBE\u7F6E\u5404\u81EA\u72EC\u7ACB\u4EE5\u6587\u4EF6\u65B9\u5F0F\u5B58\u50A8\u5728 rules_folder \u8BBE\u7F6E\u7684\u76EE\u5F55\u91CC\u3002\u5176\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u4E0B\u9762\u8FD9\u4E9B\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>\u914D\u7F6E\uFF0C\u6BCF\u4E2A\u89C4\u5219\u9700\u8981\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u540D\u79F0\uFF0C\u4E00\u65E6\u91CD\u590D\uFF0C\u8FDB\u7A0B\u5C06\u65E0\u6CD5\u542F\u52A8\u3002</td></tr><tr><td>type</td><td>\u914D\u7F6E\uFF0C\u9009\u62E9\u67D0\u4E00\u79CD\u6570\u636E\u9A8C\u8BC1\u65B9\u5F0F\u3002</td></tr><tr><td>index</td><td>\u914D\u7F6E\uFF0C\u4ECE\u67D0\u7C7B\u7D22\u5F15\u91CC\u8BFB\u53D6\u6570\u636E\uFF0C\u76EE\u524D\u5DF2\u7ECF\u652F\u6301 Ymd \u683C\u5F0F\uFF0C\u9700\u8981\u5148\u8BBE\u7F6E use_strftime_index\uFF1Atrue\uFF0C\u7136\u540E\u5339\u914D\u7D22\u5F15\uFF0C\u914D\u7F6E\u5F62\u5982\uFF1Aindex\uFF1Alogstash-es-test-\uFF05Y\u3002\uFF05m\u3002\uFF05d\uFF0C\u8868\u793A\u5339\u914D logstash-ES-\u6D4B\u8BD5\u540D\u79F0\u5F00\u5934\uFF0C\u4EE5\u5E74\u6708\u65E5\u4F5C\u4E3A\u7D22\u5F15\u540E\u7F00\u7684\u7D22\u5F15\u3002</td></tr><tr><td>filter</td><td>\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u5411 ES \u8BF7\u6C42\u7684\u8FC7\u6EE4\u6761\u4EF6\u3002</td></tr><tr><td>timeframe</td><td>\u914D\u7F6E\uFF0C\u7D2F\u79EF\u89E6\u53D1\u62A5\u8B66\u7684\u65F6\u957F\u3002</td></tr><tr><td>alert</td><td>\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u89E6\u53D1\u62A5\u8B66\u65F6\u6267\u884C\u54EA\u4E9B\u62A5\u8B66\u624B\u6BB5\u3002</td></tr></tbody></table><p>type:\u4E0D\u540C\u7684\u7C7B\u578B\u8FD8\u6709\u81EA\u5DF1\u72EC\u7279\u7684\u914D\u7F6E\u9009\u9879\u3002\u76EE\u524D ElastAlert \u6709\u4EE5\u4E0B\u51E0\u79CD\u81EA\u5E26 ruletype\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>any</td><td>\u53EA\u8981\u6709\u5339\u914D\u5C31\u62A5\u8B66;</td></tr><tr><td>blacklist</td><td>compare_key \u5B57\u6BB5\u7684\u5185\u5BB9\u5339\u914D\u4E0A blacklist \u6570\u7EC4\u91CC\u4EFB\u610F\u5185\u5BB9;</td></tr><tr><td>whitelist</td><td>compare_key \u5B57\u6BB5\u7684\u5185\u5BB9\u4E00\u4E2A\u90FD\u6CA1\u80FD\u5339\u914D\u4E0A whitelist \u6570\u7EC4\u91CC\u5185\u5BB9;</td></tr><tr><td>change</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ccompare_key \u5B57\u6BB5\u7684\u5185\u5BB9\uFF0C\u5728 timeframe \u8303\u56F4\u5185\u53D1\u9001\u53D8\u5316;</td></tr><tr><td>frequency</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ctimeframe \u8303\u56F4\u5185\u6709 num_events \u4E2A\u88AB\u8FC7\u6EE4\u51FA\u6765\u7684\u5F02\u5E38;</td></tr><tr><td>spike</td><td>\u76F8\u540C\u5728 query_key \u6761\u4EF6\u4E0B\uFF0C\u4E24\u4E2A\u524D\u540E timeframe \u8303\u56F4\u5185\u6570\u636E\u91CF\u76F8\u5DEE\u6BD4\u4F8B\u8D85\u8FC7 spike_height\u3002\u53EF\u4EE5\u5176\u4E2D\u901A\u8FC7 spike_type \u8BBE\u7F6E\u5177\u4F53\u6DA8\u8DCC\u65B9\u5411\u7684\u82F1\u6587 up\uFF0Cdown\uFF0Cboth\u3002\u53EF\u4EE5\u8FD8\u901A\u8FC7 threshold_ref \u8BBE\u7F6E\u8981\u6C42\u4E0A\u4E00\u4E2A\u5468\u671F\u6570\u636E\u91CF\u7684\u4E0B\u9650\uFF0Cthreshold_cur \u8BBE\u7F6E\u8981\u6C42\u5F53\u524D\u5468\u671F\u6570\u636E\u91CF\u7684\u4E0B\u9650\uFF0C\u5982\u679C\u6570\u636E\u91CF\u4E0D\u5230\u4E0B\u9650\uFF0C\u4E5F\u4E0D\u89E6\u53D1;</td></tr><tr><td>flatline</td><td>timeframe \u8303\u56F4\u5185\uFF0C\u91CF\u6570\u636E\u5C0F\u4E8E threshold \u9608\u503C;</td></tr><tr><td>new_term</td><td>fields \u5B57\u6BB5\u65B0\u51FA\u73B0\u4E4B\u524D terms_window_size\uFF08\u9ED8\u8BA4 30 \u5929\uFF09\u8303\u56F4\u5185\u6700\u591A\u7684 terms_size\uFF08\u9ED8\u8BA4 50\uFF09\u4E2A\u7ED3\u679C\u4EE5\u5916\u7684\u6570\u636E;</td></tr><tr><td>cardinality</td><td>\u5728\u76F8\u540C query_key \u6761\u4EF6\u4E0B\uFF0Ctimeframe \u8303\u56F4\u5185 cardinality_field \u7684\u503C\u8D85\u8FC7 max_cardinality \u6216\u8005\u4F4E\u4E8E min_cardinality</td></tr></tbody></table><p>\u5B89\u88C5\u5B8C\u6210\u540E\u4F1A\u81EA\u5E26\u4E09\u4E2A\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>elastalert-create-index ElastAlert</td><td>\u4F1A\u628A\u6267\u884C\u8BB0\u5F55\u5B58\u653E\u5230\u4E00\u4E2A ES \u7D22\u5F15\u4E2D\uFF0C\u8BE5\u547D\u4EE4\u5C31\u662F\u7528\u6765\u521B\u5EFA\u8FD9\u4E2A\u7D22\u5F15\u7684\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7D22\u5F15\u540D\u53EB elastalert_status\u3002\u5176\u4E2D\u6709 4 \u4E2A_type\uFF0C\u90FD\u6709\u81EA\u5DF1\u7684 @timestamp \u5B57\u6BB5\uFF0C\u6240\u4EE5\u540C\u6837\u4E5F\u53EF\u4EE5\u7528 kibana \u6765\u67E5\u770B\u8FD9\u4E2A\u7D22\u5F15\u7684\u65E5\u5FD7\u8BB0\u5F55\u60C5\u51B5\u3002</td></tr><tr><td>elastalert-rule-from-kibana</td><td>\u4ECE Kibana3 \u5DF2\u4FDD\u5B58\u7684\u4EEA\u8868\u76D8\u4E2D\u8BFB\u53D6 Filtering \u8BBE\u7F6E\uFF0C\u5E2E\u52A9\u751F\u6210 config.yaml \u91CC\u7684\u914D\u7F6E\u3002\u4E0D\u8FC7\u6CE8\u610F\uFF0C\u5B83\u53EA\u4F1A\u8BFB\u53D6 filtering\uFF0C\u4E0D\u5305\u62EC queries\u3002</td></tr><tr><td>elastalert-test-rule</td><td>\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E2D\u7684 rule \u8BBE\u7F6E\u3002</td></tr></tbody></table><p>\u6700\u540E\uFF0C\u8FD0\u884C\u547D\u4EE4:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>python3 <span class="token operator">-</span>m elastalert<span class="token punctuation">.</span>elastalert <span class="token operator">-</span><span class="token operator">-</span>config <span class="token punctuation">.</span><span class="token operator">/</span>config<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u5355\u72EC\u6267\u884C rules_folder \u91CC\u7684\u67D0\u4E2A rule\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>python3 <span class="token operator">-</span>m elastalert<span class="token punctuation">.</span>elastalert <span class="token operator">-</span><span class="token operator">-</span>config <span class="token punctuation">.</span><span class="token operator">/</span>config<span class="token punctuation">.</span>yaml <span class="token operator">-</span><span class="token operator">-</span>rule <span class="token punctuation">.</span><span class="token operator">/</span>examele_rules<span class="token operator">/</span>one_rule<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),i=[l];function p(c,o){return s(),a("div",null,i)}var d=n(t,[["render",p],["__file","05_Elastalert\u9884\u8B66\u5B89\u88C5.html.vue"]]);export{d as default};
