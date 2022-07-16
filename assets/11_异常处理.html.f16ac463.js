import{_ as n,o as s,c as a,d as p}from"./app.1be6a0c7.js";const t={},e=p(`<h2 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h2><p><code>@/utils/request.js</code> \u662F\u57FA\u4E8E <code>axios</code> \u7684\u5C01\u88C5\uFF0C\u4FBF\u4E8E\u7EDF\u4E00\u5904\u7406 POST\uFF0CGET \u7B49\u8BF7\u6C42\u53C2\u6570\uFF0C\u8BF7\u6C42\u5934\uFF0C\u4EE5\u53CA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7B49\u3002\u5B83\u5C01\u88C5\u4E86\u5168\u5C40 <code>request\u62E6\u622A\u5668</code>\u3001<code>response\u62E6\u622A\u5668</code>\u3001<code>\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406</code>\u3001<code>\u7EDF\u4E00\u505A\u4E86\u8D85\u65F6\u5904\u7406</code>\u3001<code>baseURL\u8BBE\u7F6E\u7B49</code>\u3002 \u5982\u679C\u6709\u81EA\u5B9A\u4E49\u9519\u8BEF\u7801\u53EF\u4EE5\u5728<code>errorCode.js</code>\u4E2D\u8BBE\u7F6E\u5BF9\u5E94<code>key</code> <code>value</code>\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Notification<span class="token punctuation">,</span> MessageBox<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span>
<span class="token keyword">import</span> errorCode <span class="token keyword">from</span> <span class="token string">&#39;@/utils/errorCode&#39;</span>

axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span>
<span class="token comment">// \u521B\u5EFAaxios\u5B9E\u4F8B</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// axios\u4E2D\u8BF7\u6C42\u914D\u7F6E\u6709baseURL\u9009\u9879\uFF0C\u8868\u793A\u8BF7\u6C42URL\u516C\u5171\u90E8\u5206</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8D85\u65F6</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// request\u62E6\u622A\u5668</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u5426\u9700\u8981\u8BBE\u7F6E token</span>
    <span class="token keyword">const</span> isToken <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isToken <span class="token operator">===</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BA9\u6BCF\u4E2A\u8BF7\u6C42\u643A\u5E26\u81EA\u5B9A\u4E49token \u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u81EA\u884C\u4FEE\u6539</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u54CD\u5E94\u62E6\u622A\u5668</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u672A\u8BBE\u7F6E\u72B6\u6001\u7801\u5219\u9ED8\u8BA4\u6210\u529F\u72B6\u6001</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">||</span> <span class="token number">200</span>
    <span class="token comment">// \u83B7\u53D6\u9519\u8BEF\u4FE1\u606F</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> errorCode<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">||</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg <span class="token operator">||</span> errorCode<span class="token punctuation">[</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      MessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>
        <span class="token string">&#39;\u767B\u5F55\u72B6\u6001\u5DF2\u8FC7\u671F\uFF0C\u60A8\u53EF\u4EE5\u7EE7\u7EED\u7559\u5728\u8BE5\u9875\u9762\uFF0C\u6216\u8005\u91CD\u65B0\u767B\u5F55&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;\u7CFB\u7EDF\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&#39;\u91CD\u65B0\u767B\u5F55&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;\u53D6\u6D88&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;LogOut&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/index&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> msg<span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> msg
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span> <span class="token operator">+</span> error<span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">==</span> <span class="token string">&#39;Network Error&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message <span class="token operator">=</span> <span class="token string">&#39;\u540E\u7AEF\u63A5\u53E3\u8FDE\u63A5\u5F02\u5E38&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message <span class="token operator">=</span> <span class="token string">&#39;\u7CFB\u7EDF\u63A5\u53E3\u8BF7\u6C42\u8D85\u65F6&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;Request failed with status code&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message <span class="token operator">=</span> <span class="token string">&#39;\u7CFB\u7EDF\u63A5\u53E3&#39;</span> <span class="token operator">+</span> message<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\u5F02\u5E38&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> message<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u6709\u4E9B\u4E0D\u9700\u8981\u4F20\u9012 token \u7684\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>headers</code>\u4E2D\u7684\u5C5E\u6027<code>isToken</code>\u4E3A<code>false</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> code<span class="token punctuation">,</span> uuid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isToken</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token comment">// \u53EF\u4EE5\u81EA\u5B9A\u4E49 Authorization</span>
      <span class="token comment">// &#39;Authorization&#39;: &#39;Basic d2ViOg==&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","11_\u5F02\u5E38\u5904\u7406.html.vue"]]);export{r as default};
