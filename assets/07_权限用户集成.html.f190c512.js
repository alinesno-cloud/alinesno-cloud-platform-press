import{_ as e,o as i,c as p,a as n,e as t,b as s,d as c,r as l}from"./app.ceba7780.js";const o={},d=n("h1",{id:"\u6743\u9650\u670D\u52A1\u96C6\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6743\u9650\u670D\u52A1\u96C6\u6210","aria-hidden":"true"},"#"),s(" \u6743\u9650\u670D\u52A1\u96C6\u6210")],-1),u=n("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B\u5DE5\u7A0B")],-1),r=s("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),k={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},m=s("\u6253\u5F00"),v=c(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><blockquote><p>\u8FD9\u91CC\u7684\u8D44\u6E90\u5F15\u64CE\u5373\u7EC4\u7EC7\u3001\u6743\u9650\u3001\u8D26\u53F7\u3001\u5C97\u4F4D\u7B49\u57FA\u7840\u7BA1\u7406</p></blockquote><ul><li>\u524D\u7AEF\u9ED8\u8BA4\u96C6\u6210\u8D44\u6E90\u5F15\u64CE\u670D\u52A1</li><li>\u81EA\u5B9A\u4E49\u8D44\u6E90\u5F15\u64CE\u670D\u52A1\u573A\u666F</li><li>\u7B2C\u4E09\u65B9\u6743\u9650\u670D\u52A1\u96C6\u6210\u65B9\u5F0F</li></ul><h2 id="\u9ED8\u8BA4\u96C6\u6210\u57FA\u4E8E\u6838\u5FC3\u5305" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u96C6\u6210\u57FA\u4E8E\u6838\u5FC3\u5305" aria-hidden="true">#</a> \u9ED8\u8BA4\u96C6\u6210\u57FA\u4E8E\u6838\u5FC3\u5305</h2><p>\u6B64\u670D\u52A1\u9ED8\u8BA4\u4F9D\u8D56\u4E8E\u5DE5\u7A0B\u5305<code>alinesno-cloud-common-web-api-starter</code>\u4E2D\uFF0C\u5305\u540D<code>consumer</code>\uFF0C\u6B64\u53EA\u4E3A\u4E0E\u524D\u7AEF\u670D\u52A1\u9ED8\u8BA4\u96C6\u6210\uFF0C \u8FD9\u91CC\u4E3B\u8981\u96C6\u6210\u8D26\u53F7\u6743\u9650\u548C\u516C\u5171\u914D\u7F6E\u7684\u63A5\u53E3</p><p>\u914D\u7F6E\u5F15\u64CE\u540E\u53F0\u5730\u5740:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>alinesno<span class="token operator">:</span>
  client<span class="token operator">:</span>
    authorty<span class="token operator">:</span>
      url<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span>$<span class="token punctuation">{</span>server<span class="token punctuation">.</span>port<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u6210\u7684\u6743\u9650\u9ED8\u8BA4\u63A5\u53E3\u5217\u8868\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u83B7\u53D6\u5E94\u7528\u767B\u9646\u4E3B\u9898\u4FE1\u606F
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">EnterpriseThemeEntity</span> <span class="token function">getLoginTheme</span><span class="token punctuation">(</span><span class="token class-name">String</span> springApplication<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\u7528\u6237\u4FE1\u606F\u83B7\u53D6\u4F01\u4E1A\u4FE1\u606F\uFF0C\u6BD4\u5982\u6807\u9898\uFF0C\u4E3B\u9898\u8272\u7B49
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">EnterpriseEntity</span> <span class="token function">getEnterpriseByUserId</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId <span class="token punctuation">,</span> <span class="token class-name">String</span> springApplication<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\u4EE3\u7801\u7C7B\u578B\u67E5\u8BE2\u4EE3\u7801
 *
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerCodeEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">codeListByType</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">)</span>  <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\u4EE3\u7801\u7C7B\u578B\u67E5\u8BE2\u4EE3\u7801
 *
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerCodeEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">codeListByType</span><span class="token punctuation">(</span><span class="token class-name">String</span> codeType<span class="token punctuation">,</span><span class="token class-name">String</span> applicationId<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u67E5\u8BE2\u8D26\u6237
 *
 * <span class="token keyword">@param</span> <span class="token parameter">ids</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerAccountEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAccountEntityByIds</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u67E5\u8BE2\u79DF\u6237
 *
 * <span class="token keyword">@param</span> <span class="token parameter">ids</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerTenantEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">findTenantEntityByIds</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7ids\u67E5\u8BE2\u5E94\u7528
 *
 * <span class="token keyword">@param</span> <span class="token parameter">ids</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerApplicationEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">findApplicationEntityByIds</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EE3\u7801\u67E5\u8BE2
 *
 * <span class="token keyword">@param</span> <span class="token parameter">object</span>
 * <span class="token keyword">@param</span> <span class="token parameter">object2</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerCodeEntity</span> <span class="token function">codeByType</span><span class="token punctuation">(</span><span class="token class-name">Object</span> codeType<span class="token punctuation">,</span> <span class="token class-name">Object</span> codeValue<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\u7528\u6237\u5B9E\u4F53\u67E5\u8BE2\u7528\u6237\u4FE1\u606F
 *
 * <span class="token keyword">@param</span> <span class="token parameter">springApplication</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerApplicationEntity</span> <span class="token function">findEntityByApplicationCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> springApplication<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u67E5\u8BE2\u7528\u6237\u83DC\u5355
 *
 * <span class="token keyword">@param</span> <span class="token parameter">resourceParent</span>
 * <span class="token keyword">@param</span> <span class="token parameter">applicationId</span>
 * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerResourceEntity</span> <span class="token function">findMenusByApplicationAndAccount</span><span class="token punctuation">(</span><span class="token class-name">String</span> resourceParent<span class="token punctuation">,</span> <span class="token class-name">String</span> applicationId<span class="token punctuation">,</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span>  <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u67E5\u8BE2\u5E94\u7528\u90E8\u95E8
 *
 * <span class="token keyword">@param</span> <span class="token parameter">id</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DeptDto</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOrg</span><span class="token punctuation">(</span><span class="token class-name">String</span> applicationId<span class="token punctuation">,</span> <span class="token class-name">String</span> parentDeptId<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7id\u67E5\u8BE2\u7528\u6237
 *
 * <span class="token keyword">@param</span> <span class="token parameter">id</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerAccountEntity</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7\u7528\u6237\u540D\u67E5\u8BE2\u7528\u6237
 *
 * <span class="token keyword">@param</span> <span class="token parameter">loginName</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerAccountEntity</span> <span class="token function">findByLoginName</span><span class="token punctuation">(</span><span class="token class-name">String</span> loginName<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u90E8\u95E8\u4EE3\u7801\u67E5\u8BE2
 *
 * <span class="token keyword">@param</span> <span class="token parameter">ids</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ManagerDepartmentEntity</span><span class="token punctuation">&gt;</span></span> <span class="token function">findDepartmentByIds</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * \u66F4\u65B0\u7528\u6237\u4FE1\u606F
 * <span class="token keyword">@param</span> <span class="token parameter">user</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">updateManagerAccount</span><span class="token punctuation">(</span><span class="token class-name">ManagerAccountDto</span> user<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u66F4\u65B0\u7528\u6237\u5BC6\u7801
 * <span class="token keyword">@param</span> <span class="token parameter">pwdDto</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">updatePwd</span><span class="token punctuation">(</span><span class="token class-name">UpdatePasswordDto</span> pwdDto<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u66F4\u65B0\u7528\u6237\u5934\u50CF
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">updateAvator</span><span class="token punctuation">(</span><span class="token class-name">String</span> avatorId<span class="token punctuation">,</span> <span class="token class-name">String</span> accountId<span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u6210\u7684\u516C\u5171\u914D\u7F6E\u9ED8\u8BA4\u63A5\u53E3\u5217\u8868\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u901A\u8FC7id\u67E5\u8BE2\u914D\u7F6E\u4FE1\u606F
 * <span class="token keyword">@param</span> <span class="token parameter">configId</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerSettingsEntity</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">String</span> configId<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7key\u83B7\u53D6\u914D\u7F6E
 * <span class="token keyword">@param</span> <span class="token parameter">configKey</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ManagerSettingsEntity</span> <span class="token function">getConfigByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> configKey<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u83B7\u53D6\u503C
 * <span class="token keyword">@param</span> <span class="token parameter">configKey</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getConfigValueByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> configKey<span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u66F4\u65B0\u503C\u72B6\u6001
 * <span class="token keyword">@param</span> <span class="token parameter">configKey</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">updateConfigValueByKey</span><span class="token punctuation">(</span><span class="token class-name">ManagerSettingsDto</span> dto<span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5176\u5B83\u5DE5\u7A0B\u7684\u5B9E\u73B0\u548C\u5F15\u7528\u7684\u65B9\u5F0F\uFF0C\u5F53\u524D\u6B64\u53EA\u9488\u5BF9\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u800C\u975E\u524D\u540E\u7AEF\u5206\u79BB\u7684\uFF0C\u53EF\u4E0D\u4F7F\u7528</p><p>\u6DFB\u52A0<code>EnableApi</code>\u6216\u8005<code>EnableSSO</code>\u6CE8\u89E3\uFF0C\u4F7F\u5F15\u7528\u751F\u6548\uFF0C\u4E24\u4E2A\u540C\u65F6\u5F15\u7528\uFF0CSSO \u914D\u7F6E\u4F1A\u8986\u76D6 API \u914D\u7F6E\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//@EnableSSO</span>
<span class="token annotation punctuation">@EnableApi</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5DE5\u7A0B\u901A\u8FC7 spring \u4F9D\u8D56\u6CE8\u5165\u5F15\u7528\uFF0C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5F15\u5165\u6743\u9650\u914D\u7F6E</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">AuthorityPlatformClient</span> authorityConfigClient <span class="token punctuation">;</span>

<span class="token comment">// \u5F15\u5165\u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">AuthorityConfigClient</span> authorityConfigClient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u8D44\u6E90\u5F15\u64CE\u670D\u52A1\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8D44\u6E90\u5F15\u64CE\u670D\u52A1\u5F15\u7528" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8D44\u6E90\u5F15\u64CE\u670D\u52A1\u5F15\u7528</h2><p>\u6B64\u9488\u5BF9\u7684\u662F\u7B2C\u4E09\u65B9\u6743\u9650\u670D\u52A1\u7684\u96C6\u6210\uFF0C\u8FD9\u91CC\u4E3B\u8981\u5207\u6362\u5F15\u64CE\u5730\u5740\u4E3A\u7B2C\u4E09\u65B9\uFF0C\u540C\u65F6\u9488\u5BF9\u4E8E\u63A5\u53E3\u505A\u5BF9\u5E94\u7684\u9002\u914D\u8C03\u6574\u5373\u53EF</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">alinesno</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">authorty</span><span class="token punctuation">:</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token comment"># \u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u5F15\u64CE\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3B\u8981\u9002\u914D\u7684\u63A5\u53E3\u5217\u8868\uFF1A</p><blockquote><p>\u5F85\u8865\u5145</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>`,24);function b(y,g){const a=l("ExternalLinkIcon");return i(),p("div",null,[d,u,n("p",null,[r,n("a",k,[m,t(a)])]),v])}var h=e(o,[["render",b],["__file","07_\u6743\u9650\u7528\u6237\u96C6\u6210.html.vue"]]);export{h as default};
