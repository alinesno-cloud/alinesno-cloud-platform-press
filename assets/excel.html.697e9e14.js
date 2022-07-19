import{_ as p,o as c,c as i,a as n,e as a,b as s,d as t,r as o}from"./app.33570056.js";const r={},u=n("h1",{id:"excel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excel","aria-hidden":"true"},"#"),s(" Excel")],-1),d=n("h2",{id:"excel-\u5BFC\u51FA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excel-\u5BFC\u51FA","aria-hidden":"true"},"#"),s(" Excel \u5BFC\u51FA")],-1),k=s("Excel \u7684\u5BFC\u5165\u5BFC\u51FA\u90FD\u662F\u4F9D\u8D56\u4E8E"),h={href:"https://github.com/SheetJS/js-xlsx",target:"_blank",rel:"noopener noreferrer"},_=s("js-xlsx"),v=s("\u6765\u5B9E\u73B0\u7684\u3002"),m=s("\u5728 "),b=n("code",null,"js-xlsx",-1),x=s("\u7684\u57FA\u7840\u4E0A\u53C8\u5C01\u88C5\u4E86"),g={href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/vendor/Export2Excel.js",target:"_blank",rel:"noopener noreferrer"},f=s("Export2Excel.js"),y=s("\u6765\u65B9\u4FBF\u5BFC\u51FA\u6570\u636E\u3002"),j=t(`<h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u7531\u4E8E <code>Export2Excel</code>\u4E0D\u4EC5\u4F9D\u8D56<code>js-xlsx</code>\u8FD8\u4F9D\u8D56<code>file-saver</code>\u548C<code>script-loader</code>\u3002</p><p>\u6240\u4EE5\u4F60\u5148\u9700\u8981\u5B89\u88C5\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> xlsx file-saver -S
<span class="token function">npm</span> <span class="token function">install</span> script-loader -S -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E<code>js-xlsx</code>\u4F53\u79EF\u8FD8\u662F\u5F88\u5927\u7684\uFF0C\u5BFC\u51FA\u529F\u80FD\u4E5F\u4E0D\u662F\u4E00\u4E2A\u975E\u5E38\u5E38\u7528\u7684\u529F\u80FD\uFF0C\u6240\u4EE5\u4F7F\u7528\u7684\u65F6\u5019\u5EFA\u8BAE\u4F7F\u7528\u61D2\u52A0\u8F7D\u3002\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/vendor/Export2Excel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">excel</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  excel<span class="token punctuation">.</span><span class="token function">export_json_to_excel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> tHeader<span class="token punctuation">,</span> <span class="token comment">//\u8868\u5934 \u5FC5\u586B</span>
    data<span class="token punctuation">,</span> <span class="token comment">//\u5177\u4F53\u6570\u636E \u5FC5\u586B</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;excel-list&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
    <span class="token literal-property property">autoWidth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
    <span class="token literal-property property">bookType</span><span class="token operator">:</span> <span class="token string">&#39;xlsx&#39;</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),E={class:"custom-container warning"},w={class:"custom-container-title"},S=s("\u6CE8\u610F "),B=s("\u5728"),J=n("code",null,"v3.9.1+",-1),C=s("\u4EE5\u540E\u7684\u7248\u672C\u4E2D\u79FB\u9664\u4E86\u5BF9 Blob \u7684\u517C\u5BB9\u6027\u4EE3\u7801\uFF0C\u5982\u679C\u4F60\u8FD8\u9700\u8981\u517C\u5BB9\u5F88\u4F4E\u7248\u672C\u7684\u6D4F\u89C8\u5668\u53EF\u4EE5\u624B\u52A8\u5F15\u5165"),D={href:"https://www.npmjs.com/package/blob-polyfill",target:"_blank",rel:"noopener noreferrer"},P=s("blob-polyfill"),T=s("\u8FDB\u884C\u517C\u5BB9\u3002"),H=n("h3",{id:"\u53C2\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#"),s(" \u53C2\u6570")],-1),L=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u53EF\u9009\u503C"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),M=n("tr",null,[n("td",null,"header"),n("td",null,"\u5BFC\u51FA\u6570\u636E\u7684\u8868\u5934"),n("td",null,"Array"),n("td",null,"/"),n("td",null,"[]")],-1),N=n("tr",null,[n("td",null,"data"),n("td",null,"\u5BFC\u51FA\u7684\u5177\u4F53\u6570\u636E"),n("td",null,"Array"),n("td",null,"/"),n("td",null,"[]]")],-1),U=n("tr",null,[n("td",null,"filename"),n("td",null,"\u5BFC\u51FA\u6587\u4EF6\u540D"),n("td",null,"String"),n("td",null,"/"),n("td",null,"excel-list")],-1),V=n("tr",null,[n("td",null,"autoWidth"),n("td",null,"\u5355\u5143\u683C\u662F\u5426\u8981\u81EA\u9002\u5E94\u5BBD\u5EA6"),n("td",null,"Boolean"),n("td",null,"true / false"),n("td",null,"true")],-1),A=n("td",null,"bookType",-1),I=n("td",null,"\u5BFC\u51FA\u6587\u4EF6\u7C7B\u578B",-1),W=n("td",null,"String",-1),z=s("xlsx, csv, txt,\xA0"),O={href:"https://github.com/SheetJS/js-xlsx#supported-output-formats",target:"_blank",rel:"noopener noreferrer"},R=s("more"),$=n("td",null,"xlsx",-1),q=t(`<h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/vendor/Export2Excel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">excel</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tHeader <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Author&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Readings&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Date&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list
  excel<span class="token punctuation">.</span><span class="token function">export_json_to_excel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> tHeader<span class="token punctuation">,</span> <span class="token comment">//\u8868\u5934 \u5FC5\u586B</span>
    data<span class="token punctuation">,</span> <span class="token comment">//\u5177\u4F53\u6570\u636E \u5FC5\u586B</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;excel-list&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
    <span class="token literal-property property">autoWidth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
    <span class="token literal-property property">bookType</span><span class="token operator">:</span> <span class="token string">&#39;xlsx&#39;</span> <span class="token comment">//\u975E\u5FC5\u586B</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={href:"https://panjiachen.github.io/vue-element-admin/#/excel/export-excel",target:"_blank",rel:"noopener noreferrer"},G=s("\u5728\u7EBF DEMO"),K={href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/excel/export-excel.vue",target:"_blank",rel:"noopener noreferrer"},Q=s("\u5728\u7EBF\u4EE3\u7801"),X=n("h2",{id:"excel-\u5BFC\u5165",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#excel-\u5BFC\u5165","aria-hidden":"true"},"#"),s(" Excel \u5BFC\u5165")],-1),Y=s("\u5C01\u88C5\u4E86"),Z={href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/UploadExcel/index.vue",target:"_blank",rel:"noopener noreferrer"},nn=s("UploadExcel"),sn=s("Excel \u5BFC\u5165\u7EC4\u4EF6\uFF0C\u652F\u6301\u70B9\u51FB\u548C\u62D6\u62FD\u4E0A\u4F20\uFF0C\u540C\u6837\u5B83\u4E5F\u662F\u4F9D\u8D56"),an=n("code",null,"js-xlsx",-1),en=s("\u7684\u3002"),tn=t(`<p>\u5B83\u63D0\u4F9B\u4E86\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\uFF1A</p><ul><li><p>beforeUpload</p><p>\u4F60\u53EF\u4EE5\u5728\u4E0A\u4F20\u4E4B\u524D\u505A\u4E00\u4E9B\u81EA\u5DF1\u7684\u7279\u6B8A\u5224\u65AD\uFF0C\u5982\u5224\u65AD\u6587\u4EF6\u7684\u5927\u5C0F\u662F\u5426\u5927\u4E8E 1 \u5146\uFF1F\u82E5\u5927\u4E8E 1 \u5146\u5219\u505C\u6B62\u89E3\u6790\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">beforeUpload</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isLt1M <span class="token operator">=</span> file<span class="token punctuation">.</span>size <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">&lt;</span> <span class="token number">1</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLt1M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Please do not upload files larger than 1m in size.&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>onSuccess \u89E3\u6790\u6210\u529F\u65F6\u5019\u4F1A\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u8868\u683C\u7684\u8868\u5934\u548C\u5185\u5BB9\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token function">handleSuccess</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> results<span class="token punctuation">,</span> header <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> results
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableHeader <span class="token operator">=</span> header
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),on={href:"https://panjiachen.github.io/vue-element-admin/#/excel/upload-excel",target:"_blank",rel:"noopener noreferrer"},ln=s("\u5728\u7EBF DEMO"),pn={href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/excel/upload-excel.vue",target:"_blank",rel:"noopener noreferrer"},cn=s("\u5728\u7EBF\u4EE3\u7801");function rn(un,dn){const e=o("ExternalLinkIcon"),l=o("Badge");return c(),i("div",null,[u,d,n("p",null,[k,n("a",h,[_,a(e)]),v]),n("p",null,[m,b,x,n("a",g,[f,a(e)]),y]),j,n("div",E,[n("p",w,[S,a(l,{text:"v3.9.1+"})]),n("p",null,[B,J,C,n("a",D,[P,a(e)]),T])]),H,n("table",null,[L,n("tbody",null,[M,N,U,V,n("tr",null,[A,I,W,n("td",null,[z,n("a",O,[R,a(e)])]),$])])]),q,n("ul",null,[n("li",null,[n("a",F,[G,a(e)])]),n("li",null,[n("a",K,[Q,a(e)])])]),X,n("p",null,[Y,n("a",Z,[nn,a(e)]),sn,an,en]),tn,n("ul",null,[n("li",null,[n("a",on,[ln,a(e)])]),n("li",null,[n("a",pn,[cn,a(e)])])])])}var hn=p(r,[["render",rn],["__file","excel.html.vue"]]);export{hn as default};
