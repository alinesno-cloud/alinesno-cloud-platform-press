import{_ as t,o as a,c as n,d as s}from"./app.43d4268e.js";const e={},o=s(`<h1 id="\u8868\u5355\u6821\u9A8C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u6821\u9A8C\u8BF4\u660E" aria-hidden="true">#</a> \u8868\u5355\u6821\u9A8C\u8BF4\u660E</h1><p>hibernate Validator \u662F Bean Validation \u7684\u53C2\u8003\u5B9E\u73B0 \u3002 Hibernate Validator \u63D0\u4F9B\u4E86 JSR 303 \u89C4\u8303\u4E2D\u6240\u6709\u5185\u7F6E constraint \u7684\u5B9E\u73B0\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u4E00\u4E9B\u9644\u52A0\u7684 constraint\u3002</p><h2 id="bean-validation-\u4E2D\u5185\u7F6E\u7684-constraint" tabindex="-1"><a class="header-anchor" href="#bean-validation-\u4E2D\u5185\u7F6E\u7684-constraint" aria-hidden="true">#</a> Bean Validation \u4E2D\u5185\u7F6E\u7684 constraint</h2><table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>@Valid</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u9700\u8981\u68C0\u67E5\u6B64\u5BF9\u8C61\u7684\u6240\u6709\u5B57\u6BB5\u503C</td></tr><tr><td>@Null</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u4E3A null</td></tr><tr><td>@NotNull</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u4E0D\u4E3A null</td></tr><tr><td>@AssertTrue</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u4E3A true</td></tr><tr><td>@AssertFalse</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u4E3A false</td></tr><tr><td>@Min(value)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u5176\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E\u6307\u5B9A\u7684\u6700\u5C0F\u503C</td></tr><tr><td>@Max(value)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u5176\u503C\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u6307\u5B9A\u7684\u6700\u5927\u503C</td></tr><tr><td>@DecimalMin(value)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u5176\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E\u6307\u5B9A\u7684\u6700\u5C0F\u503C</td></tr><tr><td>@DecimalMax(value)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u5176\u503C\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u6307\u5B9A\u7684\u6700\u5927\u503C</td></tr><tr><td>@Size(max, min)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u7684\u5927\u5C0F\u5FC5\u987B\u5728\u6307\u5B9A\u7684\u8303\u56F4\u5185</td></tr><tr><td>@Digits (integer, fraction)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u5176\u503C\u5FC5\u987B\u5728\u53EF\u63A5\u53D7\u7684\u8303\u56F4\u5185</td></tr><tr><td>@Past</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u8FC7\u53BB\u7684\u65E5\u671F</td></tr><tr><td>@Future</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u4E00\u4E2A\u5C06\u6765\u7684\u65E5\u671F</td></tr><tr><td>@Pattern(value)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u7B26\u5408\u6307\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</td></tr></tbody></table><h2 id="hibernate-validator-\u9644\u52A0\u7684-constraint" tabindex="-1"><a class="header-anchor" href="#hibernate-validator-\u9644\u52A0\u7684-constraint" aria-hidden="true">#</a> Hibernate Validator \u9644\u52A0\u7684 constraint</h2><table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>@Email</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u662F\u7535\u5B50\u90AE\u7BB1\u5730\u5740</td></tr><tr><td>@Length(min=, max=)</td><td>\u88AB\u6CE8\u91CA\u7684\u5B57\u7B26\u4E32\u7684\u5927\u5C0F\u5FC5\u987B\u5728\u6307\u5B9A\u7684\u8303\u56F4\u5185</td></tr><tr><td>@NotEmpty</td><td>\u88AB\u6CE8\u91CA\u7684\u5B57\u7B26\u4E32\u7684\u5FC5\u987B\u975E\u7A7A</td></tr><tr><td>@Range(min=, max=)</td><td>\u88AB\u6CE8\u91CA\u7684\u5143\u7D20\u5FC5\u987B\u5728\u5408\u9002\u7684\u8303\u56F4\u5185</td></tr><tr><td>@NotBlank</td><td>\u88AB\u6CE8\u91CA\u7684\u5B57\u7B26\u4E32\u7684\u5FC5\u987B\u975E\u7A7A</td></tr><tr><td>@URL(protocol=,host=, \xA0 \xA0port=,regexp=, flags=)</td><td>\u88AB\u6CE8\u91CA\u7684\u5B57\u7B26\u4E32\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684 url</td></tr><tr><td>@CreditCardNumber</td><td>\u88AB\u6CE8\u91CA\u7684\u5B57\u7B26\u4E32\u5FC5\u987B\u901A\u8FC7 Luhn \u6821\u9A8C\u7B97\u6CD5\uFF0C \u94F6\u884C\u5361\uFF0C\u4FE1\u7528\u5361\u7B49\u53F7\u7801\u4E00\u822C\u90FD\u7528 Luhn \u8BA1\u7B97\u5408\u6CD5\u6027</td></tr><tr><td>@ScriptAssert(lang=, script=, alias=)</td><td>\u8981\u6709 Java Scripting API \u5373 JSR 223 (&quot;Scripting for the JavaTM Platform&quot;)\u7684\u5B9E\u73B0</td></tr><tr><td>@SafeHtml(whitelistType=,additionalTags=)</td><td>classpath \u4E2D\u8981\u6709 jsoup \u5305</td></tr></tbody></table><h2 id="\u81EA\u5B9A\u4E49\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6CE8\u89E3" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6CE8\u89E3</h2><table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>@Phone</td><td>\u4E2D\u56FD\u624B\u673A\u53F7\u683C\u5F0F\u6821\u9A8C</td></tr></tbody></table><h2 id="\u6CE8\u610F\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u8BF4\u660E" aria-hidden="true">#</a> \u6CE8\u610F\u8BF4\u660E</h2><p>\u4E3B\u8981\u533A\u5206\u4E0B@NotNull \xA0@NotEmpty \xA0@NotBlank 3 \u4E2A\u6CE8\u89E3\u7684\u533A\u522B\uFF1A</p><table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>@NotNull</td><td>\u4EFB\u4F55\u5BF9\u8C61\u7684 value \u4E0D\u80FD\u4E3A null</td></tr><tr><td>@NotEmpty</td><td>\u96C6\u5408\u5BF9\u8C61\u7684\u5143\u7D20\u4E0D\u4E3A 0\uFF0C\u5373\u96C6\u5408\u4E0D\u4E3A\u7A7A\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5B57\u7B26\u4E32\u4E0D\u4E3A null</td></tr><tr><td>@NotBlank</td><td>\u53EA\u80FD\u7528\u4E8E\u5B57\u7B26\u4E32\u4E0D\u4E3A null\uFF0C\u5E76\u4E14\u5B57\u7B26\u4E32 trim()\u4EE5\u540E length \u8981\u5927\u4E8E 0</td></tr></tbody></table><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><p>Java \u6CE8\u89E3\u5BF9\u63A5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegisterBean</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u6CE8\u518C\u7528\u6237\u540D\u53EA\u80FD\u4E3A\u90AE\u7BB1.&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A.&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Length</span><span class="token punctuation">(</span>max <span class="token operator">=</span> <span class="token number">32</span> <span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token string">&quot;\u90AE\u7BB1\u6700\u5927\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC732\u4F4D&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> loginName <span class="token punctuation">;</span> <span class="token comment">// \u90AE\u7BB1</span>

	<span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A.&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Length</span><span class="token punctuation">(</span>min<span class="token operator">=</span><span class="token number">3</span> <span class="token punctuation">,</span>max <span class="token operator">=</span> <span class="token number">32</span> <span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token string">&quot;\u5BC6\u7801\u6700\u5927\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC732\u4F4D,\u6700\u5C0F\u4E0D\u80FD\u5C0F\u4E8E4\u4F4D&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> password <span class="token punctuation">;</span> <span class="token comment">// \u5BC6\u7801</span>

	<span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A.&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Length</span><span class="token punctuation">(</span>min<span class="token operator">=</span><span class="token number">6</span> <span class="token punctuation">,</span> max<span class="token operator">=</span><span class="token number">6</span> <span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">&quot;\u9A8C\u8BC1\u7801\u957F\u5EA6\u4E3A6\u4F4D&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> phoneCode <span class="token punctuation">;</span> <span class="token comment">// \u624B\u673A\u9A8C\u8BC1\u7801</span>

    <span class="token comment">// \u6B64\u5904\u7701\u7565get/set</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u63A7\u5236\u5C42\u4F7F\u7528\uFF0C\u5728\u7C7B\u4E0A\u6DFB\u52A0<code>@Validated</code>\u5373\u5B9E\u73B0\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ResponseBean</span> <span class="token function">registerSave</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Validated</span> <span class="token class-name">RegisterBean</span> registerBean<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),d=[o];function p(r,i){return a(),n("div",null,d)}var c=t(e,[["render",p],["__file","23_\u8868\u5355\u63D0\u4EA4\u6821\u9A8C.html.vue"]]);export{c as default};
