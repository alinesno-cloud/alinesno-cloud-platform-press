import{_ as t,o as e,c as n,d}from"./app.f2a0a541.js";const r={},a=d(`<h1 id="\u7F13\u5B58\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u4F7F\u7528" aria-hidden="true">#</a> \u7F13\u5B58\u4F7F\u7528</h1><p>\u6574\u4E2A\u7CFB\u7EDF\u914D\u7F6E\u4E86\u9ED8\u8BA4\u7684\u7F13\u5B58\u65B9\u6848\u548C\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u4F7F\u7528 redis \u7F13\u5B58\uFF0C\u5E76\u81EA\u5B9A\u4E49\u7F13\u5B58\u6CE8\u89E3\uFF0C \u5728<code>Boot</code>\u542F\u52A8\u7C7B\u4E0A\u9762\u6DFB\u52A0<code>@EnableCaching</code>\u6CE8\u89E3\uFF0Cweb \u5E94\u7528\u5DF2\u96C6\u6210\uFF0C\u5219\u4E0D\u7528\u6DFB\u52A0\u3002</p><h2 id="\u6CE8\u89E3\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u89E3\u65B9\u5F0F" aria-hidden="true">#</a> \u6CE8\u89E3\u65B9\u5F0F</h2><p>\u6CE8\u89E3\u4F7F\u7528\u793A\u4F8B\u548C\u65B9\u5F0F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span><span class="token string">&quot;manager_account#300&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token class-name">ManagerAccountRecordEntity</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">findAllByWrapperAndPageable</span><span class="token punctuation">(</span><span class="token class-name">RestWrapper</span> restWrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">findAllByWrapperAndPageable</span><span class="token punctuation">(</span>restWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E:</p><ul><li>cacheNames \u4EE5#\u4E3A\u5206\u9694\u7B26\uFF0C\u7B2C\u4E00\u4E2A\u4E3A\u5B58\u50A8\u7684\u540D\u79F0\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u8D85\u65F6\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\uFF08\u79D2\uFF09</li><li>key \u751F\u6210\u7B56\u7565\u5982\u4E0B\uFF0C\u9700\u8981\u6CE8\u89E3<code>hash</code>\u503C\uFF0C\u7C7B\u4F7F\u7528<code>toString()</code>\u64CD\u4F5C:<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">KeyGenerator</span> <span class="token function">keyGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> method<span class="token punctuation">,</span> params<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u65B9\u6CD5\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u8C03\u7528" aria-hidden="true">#</a> \u65B9\u6CD5\u8C03\u7528</h2><p>\u65B9\u6CD5\u7EA7\u8C03\u7528\u4F7F\u7528 spring \u6CE8\u5165\uFF0C\u4F7F\u7528\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">RedisOperationUtil</span> redisUtil<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="keys-\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#keys-\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> keys \u76F8\u5173\u547D\u4EE4</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>void delete(String key)</td><td>key \u5B58\u5728\u65F6\u5220\u9664 key</td></tr><tr><td style="text-align:center;">2</td><td>void delete(Collection keys)</td><td>\u6279\u91CF\u5220\u9664 key</td></tr><tr><td style="text-align:center;">3</td><td>byte[] dump(String key)</td><td>\u5E8F\u5217\u5316 key\uFF0C\u8FD4\u56DE\u88AB\u5E8F\u5217\u5316\u7684\u503C</td></tr><tr><td style="text-align:center;">4</td><td>Boolean hasKey(String key)</td><td>\u68C0\u67E5 key \u662F\u5426\u5B58\u5728</td></tr><tr><td style="text-align:center;">5</td><td>Boolean expire(String key, long timeout, TimeUnit unit)</td><td>\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</td></tr><tr><td style="text-align:center;">6</td><td>Boolean expireAt(String key, Date date)</td><td>\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</td></tr><tr><td style="text-align:center;">7</td><td>Set &lt;String&gt; keys(String pattern)</td><td>\u67E5\u627E\u6240\u6709\u7B26\u5408\u7ED9\u5B9A\u6A21\u5F0F(pattern)\u7684 key</td></tr><tr><td style="text-align:center;">8</td><td>Boolean move(String key, int dbIndex)</td><td>\u5C06\u5F53\u524D\u6570\u636E\u5E93\u7684 key \u79FB\u52A8\u5230\u7ED9\u5B9A\u7684\u6570\u636E\u5E93 db \u5F53\u4E2D</td></tr><tr><td style="text-align:center;">9</td><td>Boolean persist(String key)</td><td>\u79FB\u9664 key \u7684\u8FC7\u671F\u65F6\u95F4\uFF0Ckey \u5C06\u6301\u4E45\u4FDD\u6301</td></tr><tr><td style="text-align:center;">10</td><td>Long getExpire(String key, TimeUnit unit)</td><td>\u8FD4\u56DE key \u7684\u5269\u4F59\u7684\u8FC7\u671F\u65F6\u95F4</td></tr><tr><td style="text-align:center;">11</td><td>Long getExpire(String key)</td><td>\u8FD4\u56DE key \u7684\u5269\u4F59\u7684\u8FC7\u671F\u65F6\u95F4</td></tr><tr><td style="text-align:center;">12</td><td>String randomKey()</td><td>\u4ECE\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u968F\u673A\u8FD4\u56DE\u4E00\u4E2A key</td></tr><tr><td style="text-align:center;">13</td><td>void rename(String oldKey, String newKey)</td><td>\u4FEE\u6539 key \u7684\u540D\u79F0</td></tr><tr><td style="text-align:center;">14</td><td>Boolean renameIfAbsent(String oldKey, String newKey)</td><td>\u4EC5\u5F53 newkey \u4E0D\u5B58\u5728\u65F6\uFF0C\u5C06 oldKey \u6539\u540D\u4E3A newkey</td></tr><tr><td style="text-align:center;">15</td><td>DataType type(String key)</td><td>\u8FD4\u56DE key \u6240\u50A8\u5B58\u7684\u503C\u7684\u7C7B\u578B</td></tr></tbody></table><p><strong>TimeUnit \u662F\u65F6\u95F4\u5355\u4F4D\uFF0C\u53EF\u9009\u503C\u6709\uFF1A</strong></p><ul><li>\u5929:TimeUnit.DAYS\u3001\u5C0F\u65F6:TimeUnit.HOURS\u3001\u5206\u949F:TimeUnit.MINUTES\u3001\u79D2:TimeUnit.SECONDS\u3001\u6BEB\u79D2:TimeUnit.MILLISECONDS\u3002</li></ul><h4 id="string-\u6570\u636E\u7C7B\u578B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#string-\u6570\u636E\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a> String \u6570\u636E\u7C7B\u578B\u64CD\u4F5C</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>String get(String key)</td><td>\u83B7\u53D6\u6307\u5B9A key \u7684\u503C</td></tr><tr><td style="text-align:center;">2</td><td>String getRange(String key, long start, long end)</td><td>\u8FD4\u56DE key \u4E2D\u5B57\u7B26\u4E32\u503C\u7684\u5B50\u5B57\u7B26</td></tr><tr><td style="text-align:center;">3</td><td>String getAndSet(String key, String value)</td><td>\u5C06 key \u7684\u503C\u8BBE\u4E3A value\uFF0C\u5E76\u8FD4\u56DE key \u65E7\u503C</td></tr><tr><td style="text-align:center;">4</td><td>Boolean getBit(String key, long offset)</td><td>\u5BF9 key \u6240\u50A8\u5B58\u7684\u503C\uFF0C\u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684 bit</td></tr><tr><td style="text-align:center;">5</td><td>List multiGet(Collection keys)</td><td>\u6279\u91CF\u83B7\u53D6</td></tr><tr><td style="text-align:center;"></td><td>\u6DFB\u52A0\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">6</td><td>void set(String key, String value)</td><td>\u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C</td></tr><tr><td style="text-align:center;">7</td><td>boolean setBit(String key, long offset, boolean value)</td><td>\u8BBE\u7F6E\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684 ASCII \u7801</td></tr><tr><td style="text-align:center;">8</td><td>void setEx(String key,String value,long timeout,TimeUnit unit)</td><td>\u5C06\u503C value \u5173\u8054\u5230 key\uFF0C\u5E76\u8BBE\u7F6E key \u8FC7\u671F\u65F6\u95F4</td></tr><tr><td style="text-align:center;">9</td><td>boolean setIfAbsent(String key, String value)</td><td>\u53EA\u6709\u5728 key \u4E0D\u5B58\u5728\u65F6\u8BBE\u7F6E key \u7684\u503C</td></tr><tr><td style="text-align:center;">10</td><td>void setRange(String key, String value, long offset)</td><td>\u7528 value \u8986\u5199 key \u7684\u503C\uFF0C\u4ECE\u504F\u79FB\u91CF offset \u5F00\u59CB</td></tr><tr><td style="text-align:center;">11</td><td>void multiSet(Map&lt;String,String&gt; maps)</td><td>\u6279\u91CF\u6DFB\u52A0</td></tr><tr><td style="text-align:center;">12</td><td>boolean multiSetIfAbsent(Map&lt;String,String&gt; maps)</td><td>\u6279\u91CF\u6DFB\u52A0\uFF0C\u4EC5\u5F53\u6240\u6709 key \u90FD\u4E0D\u5B58\u5728</td></tr><tr><td style="text-align:center;"></td><td>\u5176\u4ED6\u65B9\u6CD5</td><td></td></tr><tr><td style="text-align:center;">13</td><td>Integer append(String key, String value)</td><td>\u8FFD\u52A0\u5230\u672B\u5C3E</td></tr><tr><td style="text-align:center;">14</td><td>Long incrBy(String key, long increment)</td><td>\u589E\u52A0(\u81EA\u589E\u957F), \u8D1F\u6570\u5219\u4E3A\u81EA\u51CF</td></tr><tr><td style="text-align:center;">15</td><td>Double incrByFloat(String key, double increment)</td><td>\u589E\u52A0(\u81EA\u589E\u957F), \u8D1F\u6570\u5219\u4E3A\u81EA\u51CF</td></tr><tr><td style="text-align:center;">16</td><td>Long size(String key)</td><td>\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</td></tr></tbody></table><p><strong>\u5173\u4E8E\u4E0A\u9762 xxBit \u65B9\u6CD5\u7684\u4F7F\u7528\uFF1A</strong></p><ul><li>\u4F8B\u5982\u5B57\u7B26&#39;a&#39;\u7684 ASCII \u7801\u662F 97\uFF0C\u8F6C\u4E3A\u4E8C\u8FDB\u5236\u662F&#39;01100001&#39;\uFF0CsetBit \u65B9\u6CD5\u5C31\u662F\u628A\u7B2C offset \u4F4D\u7F6E\u4E0A\u53D8\u6210 0 \u6216\u8005 1\uFF0Ctrue \u662F 1\uFF0Cfalse \u662F 0\u3002</li></ul><h4 id="hash-\u76F8\u5173\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#hash-\u76F8\u5173\u7684\u64CD\u4F5C" aria-hidden="true">#</a> Hash \u76F8\u5173\u7684\u64CD\u4F5C</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>Object hGet(String key, String field)</td><td>\u83B7\u53D6\u5B58\u50A8\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C</td></tr><tr><td style="text-align:center;">2</td><td>Map hGetAll(String key)</td><td>\u83B7\u53D6\u6240\u6709\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C</td></tr><tr><td style="text-align:center;">3</td><td>List hMultiGet(String key, Collection fields)</td><td>\u83B7\u53D6\u6240\u6709\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C</td></tr><tr><td style="text-align:center;"></td><td>\u6DFB\u52A0\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">4</td><td>void hPut(String key, String hashKey, String value)</td><td>\u6DFB\u52A0\u5B57\u6BB5</td></tr><tr><td style="text-align:center;">5</td><td>void hPutAll(String key, Map maps)</td><td>\u6DFB\u52A0\u591A\u4E2A\u5B57\u6BB5</td></tr><tr><td style="text-align:center;">6</td><td>Boolean hPutIfAbsent(String key,String hashKey,String value)</td><td>\u4EC5\u5F53 hashKey \u4E0D\u5B58\u5728\u65F6\u624D\u8BBE\u7F6E</td></tr><tr><td style="text-align:center;"></td><td>\u5176\u4ED6\u65B9\u6CD5</td><td></td></tr><tr><td style="text-align:center;">7</td><td>Long hDelete(String key, Object... fields)</td><td>\u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u54C8\u5E0C\u8868\u5B57\u6BB5</td></tr><tr><td style="text-align:center;">8</td><td>boolean hExists(String key, String field)</td><td>\u67E5\u770B\u54C8\u5E0C\u8868 key \u4E2D\u6307\u5B9A\u7684\u5B57\u6BB5\u662F\u5426\u5B58\u5728</td></tr><tr><td style="text-align:center;">9</td><td>Long hIncrBy(String key, Object field, long increment)</td><td>\u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C\u589E\u52A0 increment</td></tr><tr><td style="text-align:center;">10</td><td>Double hIncrByFloat(String key, Object field, double delta)</td><td>\u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C\u589E\u52A0 increment</td></tr><tr><td style="text-align:center;">11</td><td>Set hKeys(String key)</td><td>\u83B7\u53D6\u6240\u6709\u54C8\u5E0C\u8868\u4E2D\u7684\u5B57\u6BB5</td></tr><tr><td style="text-align:center;">12</td><td>Long hSize(String key)</td><td>\u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u5B57\u6BB5\u7684\u6570\u91CF</td></tr><tr><td style="text-align:center;">13</td><td>List hValues(String key)</td><td>\u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u503C</td></tr><tr><td style="text-align:center;">14</td><td>Cursor hScan(String key, ScanOptions options)</td><td>\u8FED\u4EE3\u54C8\u5E0C\u8868\u4E2D\u7684\u952E\u503C\u5BF9</td></tr><tr><td style="text-align:center;">15</td><td>getListCache(final String key, Class&lt;T&gt; targetClass)</td><td>\u83B7\u53D6\u7F13\u5B58\u4E2D\u7684 List\uFF0CtargetClass \u662F\u5E8F\u5217\u5316\u7684\u7C7B</td></tr><tr><td style="text-align:center;">16</td><td>putListCacheWithExpireTime(String key, List&lt;T&gt; objList, final long expireTime)</td><td>\u628A List \u653E\u5230\u7F13\u5B58\uFF0CexpireTime \u662F\u8FC7\u671F\u7B56\u7565</td></tr></tbody></table><h4 id="list-\u76F8\u5173\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#list-\u76F8\u5173\u7684\u64CD\u4F5C" aria-hidden="true">#</a> List \u76F8\u5173\u7684\u64CD\u4F5C</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>String lIndex(String key, long index)</td><td>\u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5217\u8868\u4E2D\u7684\u5143\u7D20</td></tr><tr><td style="text-align:center;">2</td><td>List lRange(String key, long start, long end)</td><td>\u83B7\u53D6\u5217\u8868\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5143\u7D20</td></tr><tr><td style="text-align:center;"></td><td>\u6DFB\u52A0\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">3</td><td>Long lLeftPush(String key, String value)</td><td>\u5B58\u50A8\u5728 list \u5934\u90E8</td></tr><tr><td style="text-align:center;">4</td><td>Long lLeftPushAll(String key, String... value)</td><td>\u5B58\u50A8\u5728 list \u5934\u90E8</td></tr><tr><td style="text-align:center;">5</td><td>Long lLeftPushAll(String key, Collection value)</td><td>\u5B58\u50A8\u5728 list \u5934\u90E8</td></tr><tr><td style="text-align:center;">6</td><td>Long lLeftPushIfPresent(String key, String value)</td><td>\u5F53 list \u5B58\u5728\u7684\u65F6\u5019\u624D\u52A0\u5165</td></tr><tr><td style="text-align:center;">7</td><td>lLeftPush(String key, String pivot, String value)</td><td>\u5982\u679C pivot \u5B58\u5728,\u518D pivot \u524D\u9762\u6DFB\u52A0</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">8</td><td>Long lRightPush(String key, String value)</td><td>\u5B58\u50A8\u5728 list \u5C3E\u90E8</td></tr><tr><td style="text-align:center;">9</td><td>Long lRightPushAll(String key, String... value)</td><td>\u5B58\u50A8\u5728 list \u5C3E\u90E8</td></tr><tr><td style="text-align:center;">10</td><td>Long lRightPushAll(String key, Collection value)</td><td>\u5B58\u50A8\u5728 list \u5C3E\u90E8</td></tr><tr><td style="text-align:center;">11</td><td>Long lRightPushIfPresent(String key, String value)</td><td>\u5F53 list \u5B58\u5728\u7684\u65F6\u5019\u624D\u52A0\u5165</td></tr><tr><td style="text-align:center;">12</td><td>lRightPush(String key, String pivot, String value)</td><td>\u5728 pivot \u5143\u7D20\u7684\u53F3\u8FB9\u6DFB\u52A0\u503C</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">13</td><td>void lSet(String key, long index, String value)</td><td>\u901A\u8FC7\u7D22\u5F15\u8BBE\u7F6E\u5217\u8868\u5143\u7D20\u7684\u503C</td></tr><tr><td style="text-align:center;"></td><td>\u5220\u9664\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">14</td><td>String lLeftPop(String key)</td><td>\u79FB\u51FA\u5E76\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td style="text-align:center;">15</td><td>String lBLeftPop(String key,long timeout,TimeUnit unit)</td><td>\u79FB\u51FA\u5E76\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20,\u6CA1\u6709\u5219\u963B\u585E\u76F4\u5230\u8D85\u65F6\u6216\u6709\u4E3A\u6B62</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">16</td><td>String lRightPop(String key)</td><td>\u79FB\u9664\u5E76\u83B7\u53D6\u5217\u8868\u6700\u540E\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td style="text-align:center;">17</td><td>String lBRightPop(String key,long timeout,TimeUnit unit)</td><td>\u79FB\u51FA\u5E76\u83B7\u53D6\u6700\u540E\u4E2A\u5143\u7D20,\u6CA1\u6709\u5219\u963B\u585E\u76F4\u5230\u8D85\u65F6\u6216\u6709\u4E3A\u6B62</td></tr><tr><td style="text-align:center;">18</td><td>String lRightPopAndLeftPush(String sKey,String dKey)</td><td>\u79FB\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5E76\u52A0\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u5E76\u8FD4\u56DE</td></tr><tr><td style="text-align:center;">19</td><td>String lBRightPopAndLeftPush(sKey,dKey,timeout,unit)</td><td>\u79FB\u9664\u6700\u540E\u4E2A\u5143\u7D20\u5E76\u52A0\u5230\u53E6\u4E2A\u5217\u8868\u5E76\u8FD4\u56DE,\u963B\u585E\u8D85\u65F6\u6216\u6709</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">20</td><td>Long lRemove(String key, long index, String value)</td><td>\u5220\u9664\u96C6\u5408\u4E2D\u503C\u7B49\u4E8E value \u5F97\u5143\u7D20</td></tr><tr><td style="text-align:center;">21</td><td>void lTrim(String key, long start, long end)</td><td>\u88C1\u526A list</td></tr><tr><td style="text-align:center;"></td><td>\u5176\u4ED6\u65B9\u6CD5</td><td></td></tr><tr><td style="text-align:center;">22</td><td>Long lLen(String key)</td><td>\u83B7\u53D6\u5217\u8868\u957F\u5EA6</td></tr></tbody></table><h4 id="set-\u76F8\u5173\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#set-\u76F8\u5173\u7684\u64CD\u4F5C" aria-hidden="true">#</a> Set \u76F8\u5173\u7684\u64CD\u4F5C</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>Set&lt;String&gt; sMembers(String key)</td><td>\u83B7\u53D6\u96C6\u5408\u6240\u6709\u5143\u7D20</td></tr><tr><td style="text-align:center;">2</td><td>Long sSize(String key)</td><td>\u83B7\u53D6\u96C6\u5408\u5927\u5C0F</td></tr><tr><td style="text-align:center;">3</td><td>Boolean sIsMember(String key, Object value)</td><td>\u5224\u65AD\u96C6\u5408\u662F\u5426\u5305\u542B value</td></tr><tr><td style="text-align:center;">4</td><td>String sRandomMember(String key)</td><td>\u968F\u673A\u83B7\u53D6\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td style="text-align:center;">5</td><td>List&lt;String&gt; sRandomMembers(String key, long count)</td><td>\u968F\u673A\u83B7\u53D6\u96C6\u5408 count \u4E2A\u5143\u7D20</td></tr><tr><td style="text-align:center;">6</td><td>Set&lt;String&gt; sDistinctRandomMembers(String key, long count)</td><td>\u968F\u673A\u83B7\u53D6 count \u4E2A\u5143\u7D20\u5E76\u53BB\u9664\u91CD\u590D\u7684</td></tr><tr><td style="text-align:center;">7</td><td>Cursor&lt;String&gt; sScan(String key, ScanOptions options)</td><td>\u4F7F\u7528\u8FED\u4EE3\u5668\u83B7\u53D6\u5143\u7D20</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">8</td><td>Set&lt;String&gt; sIntersect(String key, String otherKey)</td><td>\u83B7\u53D6\u4E24\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6</td></tr><tr><td style="text-align:center;">9</td><td>Set&lt;String&gt; sIntersect(String key, Collection&lt;String&gt; otherKeys)</td><td>\u83B7\u53D6 key \u96C6\u5408\u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6</td></tr><tr><td style="text-align:center;">10</td><td>Long sIntersectAndStore(String key, String oKey, String dKey)</td><td>key \u96C6\u5408\u4E0E oKey \u7684\u4EA4\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;">11</td><td>Long sIntersectAndStore(String key,Collection&lt;String&gt; oKeys,String dKey)</td><td>key \u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">12</td><td>Set&lt;String&gt; sUnion(String key, String otherKeys)</td><td>\u83B7\u53D6\u4E24\u4E2A\u96C6\u5408\u7684\u5E76\u96C6</td></tr><tr><td style="text-align:center;">13</td><td>Set&lt;String&gt; sUnion(String key, Collection&lt;String&gt; otherKeys)</td><td>\u83B7\u53D6 key \u96C6\u5408\u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6</td></tr><tr><td style="text-align:center;">14</td><td>Long sUnionAndStore(String key, String otherKey, String destKey)</td><td>key \u96C6\u5408\u4E0E oKey \u7684\u5E76\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;">15</td><td>Long sUnionAndStore(String key,Collection&lt;String&gt; oKeys,String dKey)</td><td>key \u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">16</td><td>Set&lt;String&gt; sDifference(String key, String otherKey)</td><td>\u83B7\u53D6\u4E24\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6</td></tr><tr><td style="text-align:center;">17</td><td>Set&lt;String&gt; sDifference(String key, Collection&lt;String&gt; otherKeys)</td><td>\u83B7\u53D6 key \u96C6\u5408\u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6</td></tr><tr><td style="text-align:center;">18</td><td>Long sDifference(String key, String otherKey, String destKey)</td><td>key \u4E0E oKey \u96C6\u5408\u7684\u5DEE\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;">19</td><td>Long sDifference(String key,Collection&lt;String&gt; otherKeys,String dKey)</td><td>key \u4E0E\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\u5B58\u50A8\u5230 dKey \u4E2D</td></tr><tr><td style="text-align:center;"></td><td>\u6DFB\u52A0\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">20</td><td>Long sAdd(String key, String... values)</td><td>\u6DFB\u52A0</td></tr><tr><td style="text-align:center;"></td><td>\u5220\u9664\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">21</td><td>Long sRemove(String key, Object... values)</td><td>\u79FB\u9664</td></tr><tr><td style="text-align:center;">22</td><td>String sPop(String key)</td><td>\u968F\u673A\u79FB\u9664\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td style="text-align:center;">23</td><td>Boolean sMove(String key, String value, String destKey)</td><td>\u5C06 key \u96C6\u5408\u4E2D value \u79FB\u5230 destKey \u4E2D</td></tr></tbody></table><h4 id="zset-\u6570\u636E\u7C7B\u578B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#zset-\u6570\u636E\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a> zset \u6570\u636E\u7C7B\u578B\u64CD\u4F5C</h4><table><thead><tr><th style="text-align:center;">NO</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>Set&lt;String&gt; zRange(String key, long start, long end)</td><td>\u83B7\u53D6\u5143\u7D20,\u5C0F\u5230\u5927\u6392\u5E8F,s \u5F00\u59CB e \u7ED3\u675F\u4F4D\u7F6E</td></tr><tr><td style="text-align:center;">2</td><td>Set&lt;TypedTuple&lt;String&gt;&gt; zRangeWithScores(String key, long start, long end)</td><td>\u83B7\u53D6\u96C6\u5408\u5143\u7D20, \u5E76\u4E14\u628A score \u503C\u4E5F\u83B7\u53D6</td></tr><tr><td style="text-align:center;">3</td><td>Set&lt;String&gt; zRangeByScore(String key, double min, double max)</td><td>\u6839\u636E score \u8303\u56F4\u67E5\u8BE2\u5143\u7D20,\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F</td></tr><tr><td style="text-align:center;">4</td><td>Set&lt;TypedTuple&lt;String&gt;&gt; zRangeByScoreWithScores(key,double min,double max)</td><td>\u6839\u636E score \u8303\u56F4\u67E5\u8BE2\u5143\u7D20,\u5E76\u8FD4\u56DE score</td></tr><tr><td style="text-align:center;">5</td><td>Set&lt;TypedTuple&gt; zRangeByScoreWithScores(key,double min,max,long start,end)</td><td>\u6839\u636E score \u67E5\u8BE2\u5143\u7D20,s \u5F00\u59CB e \u7ED3\u675F\u4F4D\u7F6E</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">6</td><td>Set&lt;String&gt; zReverseRange(String key, long start, long end)</td><td>\u83B7\u53D6\u96C6\u5408\u5143\u7D20, \u4ECE\u5927\u5230\u5C0F\u6392\u5E8F</td></tr><tr><td style="text-align:center;">7</td><td>Set&lt;TypedTuple&lt;String&gt;&gt; zReverseRangeWithScores(key, long start, long end)</td><td>\u83B7\u53D6\u5143\u7D20,\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F,\u5E76\u8FD4\u56DE score</td></tr><tr><td style="text-align:center;">8</td><td>Set&lt;String&gt; zReverseRangeByScore(String key, double min, double max)</td><td>\u6839\u636E score \u8303\u56F4\u67E5\u8BE2\u5143\u7D20,\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F</td></tr><tr><td style="text-align:center;">9</td><td>Set&lt;TypedTuple&gt; zReverseRangeByScoreWithScores(key,double min,double max)</td><td>\u6839\u636E score \u67E5\u8BE2,\u5927\u5230\u5C0F\u6392\u5E8F\u8FD4\u56DE score</td></tr><tr><td style="text-align:center;">10</td><td>Set&lt;String&gt; zReverseRangeByScore(key, double min, max, long start, end)</td><td>\u6839\u636E score \u67E5\u8BE2,\u5927\u5230\u5C0F,s \u5F00\u59CB e \u7ED3\u675F</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">11</td><td>Long zRank(String key, Object value)</td><td>\u8FD4\u56DE\u5143\u7D20\u5728\u96C6\u5408\u7684\u6392\u540D,score \u7531\u5C0F\u5230\u5927</td></tr><tr><td style="text-align:center;">12</td><td>Long zReverseRank(String key, Object value)</td><td>\u8FD4\u56DE\u5143\u7D20\u5728\u96C6\u5408\u7684\u6392\u540D,score \u7531\u5927\u5230\u5C0F</td></tr><tr><td style="text-align:center;">13</td><td>Long zCount(String key, double min, double max)</td><td>\u6839\u636E score \u503C\u8303\u56F4\u83B7\u53D6\u96C6\u5408\u5143\u7D20\u7684\u6570\u91CF</td></tr><tr><td style="text-align:center;">14</td><td>Long zSize(String key)</td><td>\u83B7\u53D6\u96C6\u5408\u5927\u5C0F</td></tr><tr><td style="text-align:center;">15</td><td>Long zZCard(String key)</td><td>\u83B7\u53D6\u96C6\u5408\u5927\u5C0F</td></tr><tr><td style="text-align:center;">16</td><td>Double zScore(String key, Object value)</td><td>\u83B7\u53D6\u96C6\u5408\u4E2D value \u5143\u7D20\u7684 score \u503C</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">17</td><td>Long zUnionAndStore(String key, String otherKey, String destKey)</td><td>\u83B7\u53D6 key \u548C oKey \u7684\u5E76\u96C6\u5E76\u5B58\u50A8\u5728 dKey \u4E2D</td></tr><tr><td style="text-align:center;">18</td><td>Long zUnionAndStore(String key,Collection&lt;String&gt; otherKeys,String dKey)</td><td>\u83B7\u53D6 key \u548C\u591A\u4E2A\u96C6\u5408\u5E76\u96C6\u5E76\u5B58\u5728 dKey \u4E2D</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">19</td><td>Long zIntersectAndStore(String key, String otherKey, String destKey)</td><td>\u83B7\u53D6 key \u548C oKey \u4EA4\u96C6\u5E76\u5B58\u5728 destKey \u4E2D</td></tr><tr><td style="text-align:center;">20</td><td>Long zIntersectAndStore(String key,Collection&lt;String&gt; oKeys,String dKey)</td><td>\u83B7\u53D6 key \u548C\u591A\u4E2A\u96C6\u5408\u4EA4\u96C6\u5E76\u5B58\u5728 dKey \u4E2D</td></tr><tr><td style="text-align:center;"></td><td></td><td></td></tr><tr><td style="text-align:center;">21</td><td>Cursor&lt;TypedTuple&lt;String&gt;&gt; zScan(String key, ScanOptions options)</td><td>\u4F7F\u7528\u8FED\u4EE3\u5668\u83B7\u53D6</td></tr><tr><td style="text-align:center;"></td><td>\u6DFB\u52A0\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">22</td><td>Boolean zAdd(String key, String value, double score)</td><td>\u6DFB\u52A0\u5143\u7D20,zSet \u6309 score \u7531\u5C0F\u5230\u5927\u6392\u5217</td></tr><tr><td style="text-align:center;">23</td><td>Long zAdd(String key, Set&lt;TypedTuple&lt;String&gt;&gt; values)</td><td>\u6279\u91CF\u6DFB\u52A0,TypedTuple \u4F7F\u7528\u89C1\u4E0B\u9762\u4ECB\u7ECD</td></tr><tr><td style="text-align:center;"></td><td>\u5220\u9664\u76F8\u5173</td><td></td></tr><tr><td style="text-align:center;">24</td><td>Long zRemove(String key, Object... values)</td><td>\u79FB\u9664</td></tr><tr><td style="text-align:center;">25</td><td>Double zIncrementScore(String key, String value, double delta)</td><td>\u589E\u52A0\u5143\u7D20\u7684 score \u503C,\u5E76\u8FD4\u56DE\u589E\u52A0\u540E\u7684\u503C</td></tr><tr><td style="text-align:center;">26</td><td>Long zRemoveRange(String key, long start, long end)</td><td>\u79FB\u9664\u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u7684\u6210\u5458</td></tr><tr><td style="text-align:center;">27</td><td>Long zRemoveRangeByScore(String key, double min, double max)</td><td>\u6839\u636E\u6307\u5B9A\u7684 score \u503C\u7684\u8303\u56F4\u6765\u79FB\u9664\u6210\u5458</td></tr></tbody></table><p><strong>\u6279\u91CF\u6DFB\u52A0\u65F6TypedTuple\u7684\u4F7F\u7528\uFF1A</strong></p><ul><li>TypedTuple&lt;String&gt; typedTuple = new DefaultTypedTuple&lt;String&gt;(value,score)</li><li>TypedTuple&lt;String&gt; typedTuple = new DefaultTypedTuple&lt;String&gt;(value,score)</li><li>TypedTuple&lt;String&gt; typedTuple = new DefaultTypedTuple&lt;String&gt;(value,score)</li><li>TypedTuple&lt;String&gt; typedTuple = new DefaultTypedTuple&lt;String&gt;(value,score)</li></ul>`,28),s=[a];function l(i,o){return e(),n("div",null,s)}var c=t(r,[["render",l],["__file","13_\u7F13\u5B58\u4F7F\u7528.html.vue"]]);export{c as default};
