import{_ as t,o as p,c as e,a as n,e as o,b as s,d as l,r as c}from"./app.4b14ea83.js";const i={},u=n("h1",{id:"\u9875\u9762\u641C\u7D22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9875\u9762\u641C\u7D22","aria-hidden":"true"},"#"),s(" \u9875\u9762\u641C\u7D22")],-1),r=n("blockquote",null,[n("p",null,"\u6CE8\uFF1A\u6B64\u641C\u7D22\u6CE8\u610F\u5B89\u5168\u8FC7\u6EE4\u7684\u95EE\u9898\uFF0C\u5F53\u524D\u7248\u672C\u96C6\u6210\u5904\u7406\u4E3A\u5B89\u5168\u7B49\u4FDD\u4E09\u7EA7\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u4E0D\u8FC7\u5728\u9879\u76EE\u4E2D\u4F9D\u7136\u8981\u6CE8\u610F\u6B64\u95EE\u9898")],-1),k=n("h2",{id:"\u793A\u4F8B\u5DE5\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B\u5DE5\u7A0B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B\u5DE5\u7A0B")],-1),d=s("\u7CFB\u7EDF\u5E94\u7528\u96C6\u6210\u793A\u4F8B\u5DE5\u7A0B"),v={href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"},m=s("\u6253\u5F00"),b=l(`<h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>\u7075\u6D3B\u914D\u7F6E\u524D\u7AEF\u641C\u7D22</li><li>\u524D\u540E\u7AEF\u641C\u7D22\u6574\u5408\u7684\u601D\u8DEF</li></ul><h2 id="\u754C\u9762\u641C\u7D22\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u754C\u9762\u641C\u7D22\u914D\u7F6E" aria-hidden="true">#</a> \u754C\u9762\u641C\u7D22\u914D\u7F6E</h2><p>\u672C\u6587\u8BF4\u660E\u548C\u9610\u8FF0\u5982\u4F55\u5728\u524D\u540E\u7AEF\u5206\u79BB\u573A\u666F\u4E0B\u4F7F\u7528\u5951\u5408\u5E73\u53F0\u7684\u81EA\u5B9A\u4E49\u6570\u636E\u5217\u8868\u641C\u7D22\u65B9\u5F0F\uFF0C\u5982\u4E0B\uFF1A</p><ol><li>\u641C\u7D22\u8868\u5355\u4F7F\u7528 v-model \u7ED1\u5B9A\u6570\u636E\u5B57\u6BB5\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryParams<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showSearch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>68px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8FD0\u5355id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transportOrderId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryParams.transportOrderId<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u8FD0\u5355id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">@keyup.enter.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleQuery<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F02\u5E38\u7C7B\u578Bid\u3002\u53D6\u81EA\u5B57\u5178\u8868<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abnormalTypeId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryParams.abnormalTypeId<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u5F02\u5E38\u7C7B\u578Bid\u3002\u53D6\u81EA\u5B57\u5178\u8868<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">@keyup.enter.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleQuery<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleQuery<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u641C\u7D22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resetQuery<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u91CD\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F7F\u7528\u5B57\u6BB5\u641C\u7D22\u7C7B\u578B\u914D\u7F6E\u5B9A\u4E49\u5B57\u6BB5\u5339\u914D\u6A21\u5F0F\uFF0C\u5C06\u914D\u7F6E\u5BF9\u8C61\u5199\u5728\u7EC4\u4EF6\u7684 data \u5185\uFF0C\u5B9A\u4E49\u5404\u4E2A\u5B57\u6BB5\u7684\u641C\u7D22\u5339\u914D\u6A21\u5F0F\uFF0C\u5982\u4E0B\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>

        <span class="token comment">// \u67E5\u8BE2\u6570\u636E\u5BF9\u8C61</span>
        <span class="token literal-property property">queryParams</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">pageNum</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token literal-property property">transportOrderId</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token literal-property property">abnormalTypeId</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token literal-property property">abnormalTypeName</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pics</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token literal-property property">operator</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lastUpdateOperator</span><span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//\u641C\u7D22\u53C2\u6570\u5B57\u6BB5\u7C7B\u578B\u914D\u7F6E\uFF0C\u914D\u7F6E\u5BF9\u8C61\u7684key\u5FC5\u987B\u548C\u641C\u7D22\u5B57\u6BB5\u540C\u540D</span>
        <span class="token comment">// \u672A\u505A\u914D\u7F6E\u5B9A\u4E49\u7684\u5B57\u6BB5\u5C06\u4F1A\u539F\u6837\u8F93\u51FA\u5230\u540E\u7AEF\uFF0C\u901A\u5E38\u5206\u9875\u53C2\u6570\u4E0D\u9700\u8981\u914D\u7F6E</span>
        <span class="token comment">// Condition \u5BF9\u8C61\u5C01\u88C5\u4E86\u5FEB\u6377\u51FD\u6570\u76F4\u63A5\u751F\u6210\u5339\u914D\u89C4\u5219,</span>
        <span class="token comment">// import Condition from &#39;alinesno-ui/packages/Search/Condition&#39;</span>
        <span class="token literal-property property">queryParamsConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">transportOrderId</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">abnormalTypeId</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">abnormalTypeName</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pics</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">operator</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lastUpdateOperator</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">//\u6307\u5B9A\u6392\u5E8F\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u503C\u4E3A true \u5347\u5E8F,false \u964D\u5E8F</span>
          <span class="token literal-property property">addTime</span><span class="token operator">:</span> Condition<span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token doc-comment comment">/** \u641C\u7D22\u6309\u94AE\u64CD\u4F5C */</span>
      <span class="token function">handleQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F7F\u7528\u5168\u5C40\u7684\u641C\u7D22\u53C2\u6570\u5904\u7406\u65B9\u6CD5\u9884\u5904\u7406</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>searchParams <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">searchParam</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queryParamsConfig<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queryParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queryParams<span class="token punctuation">.</span>pageNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u811A\u624B\u67B6\u751F\u6210\u7684\u9875\u9762\u4F1A\u5305\u542B\u9ED8\u8BA4\u884C\u4E3A\u548C\u6570\u636E\u5B57\u6BB5\u914D\u7F6E\uFF0C\u5982\u4E0D\u6EE1\u8DB3\u53EF\u6309\u9700\u4FEE\u6539\u914D\u7F6E\uFF0C\u5F53\u524D\u652F\u6301\u5982\u4E0B\u7684\u5B57\u6BB5\u5339\u914D\u6A21\u5F0F:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Condition <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u6A21\u7CCA\u641C\u7D22
   */</span>
  <span class="token function-variable function">like</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> likeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u76F8\u7B49\u641C\u7D22
   */</span>
  <span class="token function-variable function">eq</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> eqBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u4E0D\u7B49\u641C\u7D22
   */</span>
  <span class="token function-variable function">ne</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> neBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u8303\u56F4\u641C\u7D22
   */</span>
  <span class="token function-variable function">rangeDate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> rangeDateBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u6570\u503C\u8303\u56F4\u641C\u7D22
   */</span>
  <span class="token function-variable function">rangeSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> rangeSizeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u5217\u8868\u5305\u542B\u641C\u7D22
   */</span>
  <span class="token function-variable function">contains</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> containsBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u5927\u4E8E\u7B49\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">ge</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> geBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u5927\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">gt</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> gtBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u5C0F\u7B49\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">le</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> leBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u5C0F\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">lt</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ltBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u5B57\u6BB5\u5927\u4E8E\u7B49\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">geTime</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> geTimeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u5B57\u6BB5\u5927\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">gtTime</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> gtTimeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u5B57\u6BB5\u5C0F\u4E8E\u7B49\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">leTime</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> leTimeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u65F6\u95F4\u5B57\u6BB5\u5C0F\u4E8E\u641C\u7D22
   */</span>
  <span class="token function-variable function">ltTime</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ltTimeBuilder<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * \u6392\u5E8F\u5B57\u6BB5,\u5B57\u6BB5\u503C\u7C7B\u578B\u4E3A Boolean
   */</span>
  <span class="token function-variable function">orderBy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">orderByBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><p>\u4EE5\u4E0B\u4E3A\u5F85\u4ECE\u9879\u76EE\u4E2D\u62BD\u53D6\u6574\u5408\u7684\u5185\u5BB9</p><ol><li>\u6FC0\u6D3B\u4E0B\u62C9\u641C\u7D22\u5EFA\u8BBE;</li><li>\u516C\u5171\u5F39\u51FA\u641C\u7D22\uFF1B</li><li>\u4EBA\u5458\u7EC4\u7EC7\u673A\u6784;</li></ol>`,13);function g(q,y){const a=c("ExternalLinkIcon");return p(),e("div",null,[u,r,k,n("p",null,[d,n("a",v,[m,o(a)])]),b])}var h=t(i,[["render",g],["__file","37_\u9875\u9762\u641C\u7D22.html.vue"]]);export{h as default};
