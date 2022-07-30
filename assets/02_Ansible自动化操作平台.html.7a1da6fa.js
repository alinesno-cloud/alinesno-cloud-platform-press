import{_ as a,o as e,c as i,d as h}from"./app.9e4ae57a.js";var r="/platform/ansible_01.png";const d={},l=h('<h1 id="\u81EA\u52A8\u5316\u64CD\u4F5C\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u64CD\u4F5C\u5E73\u53F0" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u64CD\u4F5C\u5E73\u53F0</h1><blockquote><p>\u81EA\u52A8\u5316\u63A7\u5236\u5668\u5141\u8BB8\u7528\u6237\u5728\u6574\u4E2A\u4F01\u4E1A\u4E2D\u5B9A\u4E49\u3001\u64CD\u4F5C\u3001\u6269\u5C55\u548C\u5206\u53D1\u81EA\u52A8\u5316\u3002</p></blockquote><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>Ansible \u81EA\u52A8\u5316\u64CD\u4F5C\u5E73\u53F0\u4E00\u4E2A\u4E2D\u5FC3\u5316\u7684\u7BA1\u7406\u8282\u70B9\u7F51\u7AD9\uFF0C\u9700\u8981\u89E3\u51B3\u4F01\u4E1A\u7EA7\u7684 \u7528\u6237\u7684\u4E24\u4E2A\u96BE\u9898\uFF0C\u4E00\u4E2A\u662F\u76F4\u63A5\u5728\u6BCF\u4E2A\u7BA1\u7406\u5458\u81EA\u5DF1\u7684\u7535\u8111\u4E0A\u653E\u7F6E ssh \u6709\u5B89\u5168\u7684\u9690\u60A3\uFF0C \u53E6\u5916\u4E00\u4E2A\u662F\u5982\u679C\u6709\u65B0\u7BA1\u7406\u5458\u52A0\u5165\uFF0C\u9762\u5BF9\u6D77\u91CF\u7684\u673A\u7FA4\u914D\u7F6E ssh \u8FDE\u63A5\u6709\u5DE5\u4F5C\u91CF\u5DE8\u5927\uFF0C\u6548\u7387\u4F4E\u4E0B</p><h2 id="\u9488\u5BF9\u4EBA\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u9488\u5BF9\u4EBA\u7FA4" aria-hidden="true">#</a> \u9488\u5BF9\u4EBA\u7FA4</h2><ul><li>\u4E1A\u52A1\u64CD\u4F5C\u4EBA\u5458</li><li>\u8FD0\u7EF4\u4EBA\u5458</li><li>\u9879\u76EE\u7ECF\u7406</li><li>\u4EA7\u54C1\u7ECF\u7406</li><li>\u6280\u672F\u7ECF\u7406</li></ul><h2 id="\u4E1A\u52A1\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u67B6\u6784" aria-hidden="true">#</a> \u4E1A\u52A1\u67B6\u6784</h2><blockquote><p>\u4EE5\u4E0B\u56FE\u7247\u6682\u65F6\u4ECE\u7F51\u4E0A\u83B7\u53D6\uFF0C\u540E\u671F\u8C03\u6574\uFF0C\u5982\u4FB5\u6743\uFF0C\u8BF7\u544A\u77E5</p></blockquote><img src="'+r+'" style="width:70%;"><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u4E00\u5957\u5B8C\u5584\u7684\u81EA\u52A8\u5316\u5DE5\u5177\uFF0C\u9664\u9700\u8981\u5177\u5907\u8DE8\u5E73\u53F0\u7279\u6027\u4E4B\u5916\uFF0C\u4E5F\u5177\u5907\u6613\u7528\u3001\u6613\u8BFB\u7684\u7279\u6027\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u5E94\u7528\u74B0\u5883\u7684\u60C5\u5883\u9700\u6C42</p><h2 id="\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#\u7279\u5F81" aria-hidden="true">#</a> \u7279\u5F81</h2><h3 id="\u6267\u884C\u7684\u53EF\u89C6\u5316\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u7684\u53EF\u89C6\u5316\u64CD\u4F5C" aria-hidden="true">#</a> \u6267\u884C\u7684\u53EF\u89C6\u5316\u64CD\u4F5C</h3><p>\u5B83\u5305\u62EC\u7528\u6237\u754C\u9762 (UI)\u3001\u57FA\u4E8E\u89D2\u8272\u7684\u8BBF\u95EE\u63A7\u5236 (RBAC)\u3001 \u5DE5\u4F5C\u6D41\u4EE5\u53CA\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u4EA4\u4ED8 (CI/CD)\uFF0C\u53EF\u5E2E\u52A9\u60A8\u7684\u56E2\u961F\u4EE5\u66F4\u9AD8\u7684\u6548\u7387\u548C\u7075\u6D3B\u6027\u8FDB\u884C\u6269\u5C55\u3002</p><h3 id="\u81EA\u52A8\u5316\u4F5C\u4E1A\u64CD\u4F5C\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u4F5C\u4E1A\u64CD\u4F5C\u7BA1\u7406" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u4F5C\u4E1A\u64CD\u4F5C\u7BA1\u7406</h3><p>\u81EA\u52A8\u5316\u63A7\u5236\u5668\u6709\u52A9\u4E8E\u6807\u51C6\u5316\u81EA\u52A8\u5316\u7684\u90E8\u7F72\u3001\u542F\u52A8\u3001\u59D4\u6D3E\u548C\u5BA1\u8BA1\u65B9\u5F0F\uFF0C\u4F7F\u4F01\u4E1A\u80FD\u591F\u81EA\u4FE1\u5730\u5B9E\u73B0\u81EA\u52A8\u5316\uFF0C \u540C\u65F6\u51CF\u5C11\u8513\u5EF6\u548C\u5DEE\u5F02\u3002\u7BA1\u7406\u5E93\u5B58\u3001\u542F\u52A8\u548C\u5B89\u6392\u5DE5\u4F5C\u6D41\u7A0B\u3001\u8DDF\u8E2A\u66F4\u6539\u5E76\u96C6\u6210\u5230\u62A5\u544A\u4E2D</p><h3 id="\u751F\u4EA7\u529B\u6709\u6548\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u529B\u6709\u6548\u63D0\u5347" aria-hidden="true">#</a> \u751F\u4EA7\u529B\u6709\u6548\u63D0\u5347</h3><p>\u6BCF\u4E2A\u4F01\u4E1A\u90FD\u662F\u6570\u5B57\u4F01\u4E1A\uFF0C\u9700\u8981\u5927\u91CF\u7684\u4EBA\u5DE5\u548C\u590D\u6742\u7684\u534F\u8C03\uFF0C\u7B80\u5355\u4F46\u529F\u80FD\u5F3A\u5927\u7684 IT \u81EA\u52A8\u5316\u5F15\u64CE\uFF0C \u4F7F\u7528\u5B83\u6765\u6D88\u9664\u5176\u73AF\u5883\u7684\u590D\u6742\u6027\u5E76\u52A0\u901F\u4F01\u4E1A\u81EA\u52A8\u5316\u96C6\u6210</p><h3 id="\u8282\u7701\u751F\u4EA7\u8FC7\u7A0B\u6210\u672C" tabindex="-1"><a class="header-anchor" href="#\u8282\u7701\u751F\u4EA7\u8FC7\u7A0B\u6210\u672C" aria-hidden="true">#</a> \u8282\u7701\u751F\u4EA7\u8FC7\u7A0B\u6210\u672C</h3><p>\u8282\u7701\u65F6\u95F4\u5E76\u63D0\u9AD8\u751F\u4EA7\u529B\uFF0C\u6D88\u9664\u91CD\u590D\u6027\u4EFB\u52A1\uFF0C\u66F4\u5C11\u7684\u9519\u8BEF\u548C\u9519\u8BEF\uFF0C\u63D0\u9AD8\u534F\u4F5C\u548C\u5DE5\u4F5C\u6EE1\u610F\u5EA6\uFF0C \u514B\u670D\u590D\u6742\u6027\uFF0C\u96C6\u4E2D\u529B\u91CF\u5230\u66F4\u591A\u521B\u65B0\u8D44\u6E90\uFF0C\u63D0\u9AD8\u56E2\u961F\u7BA1\u7406\u95EE\u8D23\u5236\u548C\u5408\u89C4\u6027</p><h3 id="\u53BB\u6389\u91CD\u590D\u6027\u7E41\u7410\u6027\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u91CD\u590D\u6027\u7E41\u7410\u6027\u5DE5\u4F5C" aria-hidden="true">#</a> \u53BB\u6389\u91CD\u590D\u6027\u7E41\u7410\u6027\u5DE5\u4F5C</h3><p>\u6CA1\u6709\u4EBA\u559C\u6B22\u91CD\u590D\u6027\u7684\u5DE5\u4F5C\uFF0C\u501F\u52A9\u81EA\u52A8\u5316\u5E73\u53F0\u53EF\u4EE5\u5F00\u59CB\u5C06\u65E5\u5E38\u4EFB\u52A1\u4E2D\u7684\u7E41\u7410\u5DE5\u4F5C\u81EA\u52A8\u5316\u3002\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u901A\u8FC7\u52A0\u5FEB\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4ED8\u65F6\u95F4\u548C\u5EFA\u7ACB\u6210\u529F\u6587\u5316\u6765\u5E2E\u52A9\u4E3A\u4E1A\u52A1\u521B\u9020\u66F4\u591A\u4EF7\u503C\u7684\u5DE5\u4F5C\u3002 \u8BA9\u56E2\u961F\u66F4\u52A0\u4E13\u6CE8\u4E8E\u6838\u5FC3\u4E1A\u52A1\u9886\u57DF\uFF0C\u63D0\u9AD8\u521B\u65B0</p><h2 id="\u529F\u80FD\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u5217\u8868" aria-hidden="true">#</a> \u529F\u80FD\u5217\u8868</h2><ul><li>\u8FD0\u884C\u4EEA\u76D8\u8868\uFF1A\u76D1\u63A7\u4EFB\u52A1\u7684\u8FD0\u884C\u72B6\u6001\uFF0C\u5931\u8D25\u6B21\u6570\uFF0C\u6210\u529F\u6B21\u6570\uFF0C\u5305\u62EC\u5E94\u7528\u7EDF\u8BA1\u7BA1\u7406\uFF0C\u53EF\u89C6\u5316\u7684\u7EDF\u8BA1\u56FE</li><li>\u4EFB\u52A1\u6A21\u677F\uFF1A\u591A\u79CD\u4EFB\u52A1\u7684\u6A21\u677F\u7BA1\u7406\uFF0C\u5305\u62EC\u5E94\u7528\u5DE1\u68C0/\u5B9A\u65F6\u5907\u4EFD/\u81EA\u52A8\u5316\u8FC1\u79FB/\u5DE5\u5177\u5B89\u88C5/\u73AF\u5883\u521D\u59CB\u5316\u7B49</li><li>\u4EFB\u52A1\u7BA1\u7406\uFF1A\u6267\u884C\u4EFB\u52A1\u72B6\u6001\u7684\u7BA1\u7406\uFF0C\u4E3B\u8981\u662F\u4EFB\u52A1\u7684\u6267\u884C\u65E5\u5FD7\uFF0C\u6267\u884C\u65F6\u95F4\uFF0C\u6267\u884C\u8FDB\u5EA6\u8FD8\u6709\u6267\u884C\u7684\u8FC7\u7A0B\u7B49\uFF1B</li><li>\u4EFB\u52A1\u7C7B\u578B\u7BA1\u7406\uFF1A\u4EFB\u52A1\u7684\u5206\u7C7B\u7BA1\u7406\uFF0C\u4E3B\u8981\u7528\u4E8E\u4EFB\u52A1\u7684\u573A\u666F\u548C\u5404\u7C7B\u533A\u5206</li><li>\u4EFB\u52A1\u7F16\u8F91\uFF1A\u53EF\u89C6\u5316\u7684\u5728\u7EBF\u6A21\u677F\u7F16\u8F91\uFF0C\u53EF\u5B9A\u5236\u5316\u7684\u4EFB\u52A1\u7BA1\u7406\uFF0C\u5305\u62EC\u96C6\u6210\u7B2C\u4E09\u65B9\u7B49\uFF1B</li><li>\u6267\u884C\u5F15\u64CE\u7BA1\u7406\uFF1A\u6839\u636E\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u9009\u62E9\u4E0D\u540C\u7684\u6267\u884C\u5F15\u64CE\uFF0C\u9488\u5BF9\u4E8E\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u7075\u6D3B\u914D\u7F6E\u7BA1\u7406</li></ul><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u65E0</li></ul>',26),n=[l];function t(s,c){return e(),i("div",null,n)}var _=a(d,[["render",t],["__file","02_Ansible\u81EA\u52A8\u5316\u64CD\u4F5C\u5E73\u53F0.html.vue"]]);export{_ as default};
