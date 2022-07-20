import{_ as e,o as i,c as a,d as l}from"./app.4819c177.js";const r={},o=l('<h1 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h1><blockquote><p>\u8FD9\u91CC\u63A8\u8350\u9488\u5BF9\u6027\u573A\u666F\u4F7F\u7528\u914D\u7F6E\u4E2D\u5FC3\uFF0C\u6BD4\u5982nacos/zookeeper\u7B49\uFF0C\u5E76\u4E0D\u662F\u6BCF\u4E2A\u4E1A\u52A1\u573A\u666F\u5C31\u5B58\u5728\u4E0A\u767E\u4E2A\u4E1A\u52A1\u670D\u52A1\u7EC4\u4EF6</p></blockquote><h2 id="\u6280\u672F\u9009\u578B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u9009\u578B\u8BF4\u660E" aria-hidden="true">#</a> \u6280\u672F\u9009\u578B\u8BF4\u660E</h2><ol><li>\u3010\u5B89\u5168\u95EE\u9898\u3011\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u6CA1\u6709\u52A0\u5BC6\uFF1B</li><li>\u3010\u5B89\u5168\u95EE\u9898\u3011\u6570\u636E\u4FDD\u5B58\u5165\u5E93\u4E5F\u6CA1\u6709\u52A0\u5BC6\uFF1B</li><li>\u3010\u5B89\u5168\u95EE\u9898\u3011\u914D\u7F6E\u7F13\u5B58\u672C\u5730\u7684\u65F6\u5019\u4E5F\u52A0\u5BC6\uFF1B</li><li>\u3010\u6743\u9650\u95EE\u9898\u3011\u914D\u7F6E\u6570\u636E\u5E93\u7B49\u4E00\u4E9B\u654F\u611F\u6027\u64CD\u4F5C\u65F6\uFF0C\u662F\u7531\u6307\u5B9A\u7684\u5BA2\u6237\u914D\u7F6E\uFF1B</li><li>\u3010\u6743\u9650\u95EE\u9898\u3011\u5F88\u591A\u914D\u7F6E\u4E2D\u5FC3\u767B\u9646\u8FC7\u4E8E\u7B80\u5355\uFF1B</li><li>\u3010\u90E8\u7F72\u95EE\u9898\u3011\u914D\u7F6E\u4E2D\u5FC3\u90E8\u7F72\u8D77\u8D8A\u7B80\u5355\u8D8A\u597D\uFF0C\u76F8\u5BF9\u4E8E Apollo \u5C31\u8FC7\u4E8E\u590D\u6742\uFF1B</li><li>\u3010\u4F7F\u7528\u95EE\u9898\u3011\u914D\u7F6E\u4E2D\u5FC3\u5176\u5B9E\u5F53\u4E2D\u4F7F\u7528\u7684\u5373\u662F\u5728\u591A\u4E2A\u73AF\u5883\u5F53\u4E2D\u5207\u6362\uFF0C\u8FD8\u6709\u591A\u73AF\u5883\u53D8\u91CF\u7684\u4F7F\u7528\uFF0C\u8FD9\u70B9\u5373\u53EF\u6EE1\u8DB3</li><li>\u3010\u9AD8\u53EF\u7528\u95EE\u9898\u3011\u914D\u7F6E\u4E2D\u5FC3\u8FD8\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u90FD\u662F\u901A\u8FC7\u8D1F\u8F7D\u505A\u8F6C\u53D1\uFF0C\u5982 HAProxy,Nginx \u7B49</li></ol><h1 id="\u4F7F\u7528\u573A\u666F-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F-1" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h1><p>\u914D\u7F6E\u4E2D\u5FC3\u5E76\u4E0D\u662F\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u540C\u65F6\u4E00\u5B9A\u8981\u8003\u8651\u597D\u914D\u7F6E\u4E2D\u5FC3\u7684\u4F7F\u7528\u6210\u672C\u548C\u4EF7\u503C\u4F53\u73B0\uFF0C \u5982\u679C\u5355\u4F53\u5E94\u7528\u7A0B\u5E8F\u4E0D\u592A\u63A8\u8350\u4F7F\u7528\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528 springboot \u7684\u73AF\u5883\u53C2\u6570\u914D\u7F6E,\u5982 dev/test/pro \u7B49</p><h4 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u5728\u5E94\u7528\u751F\u547D\u5468\u671F\u7BA1\u7406\u91CC\u9762\uFF0C\u5F00\u53D1\u4EBA\u5458\u901A\u5E38\u4F1A\u5C06\u5E94\u7528\u4E2D\u9700\u8981\u53D8\u66F4\u7684\u4E00\u4E9B\u914D\u7F6E\u9879\u6216\u5143\u6570\u636E\u4FE1\u606F\u4ECE\u4EE3\u7801\u4E2D\u5206\u79BB\u51FA\u6765\uFF0C\u653E\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6\u91CC\u9762\uFF1B\u8FD9\u4E9B\u5355\u72EC\u7BA1\u7406\u7684\u5185\u5BB9\u5C31\u79F0\u4E3A\u5E94\u7528\u914D\u7F6E\uFF1B\u5BF9\u4E8E\u5E94\u7528\u914D\u7F6E\u7684\u7EF4\u62A4\uFF0C\u5728\u4F20\u7EDF\u7684\u67B6\u6784\u4E2D\uFF0C\u5E94\u7528\u914D\u7F6E\u7684\u53D8\u66F4\uFF0C\u9700\u8981\u767B\u5F55\u670D\u52A1\u5668\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6765\u751F\u6548.</p><p>\u5206\u5E03\u5F0F\u914D\u7F6E\u4E2D\u5FC3\uFF0C\u80FD\u591F\u96C6\u4E2D\u5316\u7BA1\u7406\u5E94\u7528\u4E0D\u540C\u73AF\u5883\u3001\u4E0D\u540C\u96C6\u7FA4\u7684\u914D\u7F6E\uFF0C\u914D\u7F6E\u4FEE\u6539\u540E\u80FD\u591F\u5B9E\u65F6\u63A8\u9001\u5230\u5E94\u7528\u7AEF\uFF0C\u5E76\u4E14\u5177\u5907\u89C4\u8303\u7684\u6743\u9650\u3001\u6D41\u7A0B\u6CBB\u7406\u7B49\u7279\u6027\uFF0C\u9002\u7528\u4E8E\u5FAE\u670D\u52A1\u914D\u7F6E\u7BA1\u7406\u573A\u666F\u3002</p><p>\u4ECE\u4E0A\u8FB9\u7684\u4E24\u4E2A\u5C0F\u9700\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u4F20\u7EDF\u914D\u7F6E\u7684\u65B9\u5F0F\u5DF2\u7ECF\u66B4\u9732\u51FA\u4E86\u5F88\u591A\u95EE\u9898\uFF0C\u5176\u4ED6\u7684\u8BF8\u5982\uFF1A\u5386\u53F2\u7248\u672C\u7BA1\u7406\uFF0C\u6743\u9650\u63A7\u5236\uFF0C\u5B89\u5168\u6027\u7B49\u7B49\u95EE\u9898\uFF0C\u662F\u4F20\u7EDF\u7684\u914D\u7F6E\u6587\u4EF6\u65E0\u6CD5\u89E3\u51B3\u7684\uFF01</p><p>\u968F\u7740\u4E1A\u52A1\u7684\u53D1\u5C55\u3001\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5347\u7EA7\uFF0C\u670D\u52A1\u7684\u6570\u91CF\u3001\u7A0B\u5E8F\u7684\u914D\u7F6E\u65E5\u76CA\u589E\u591A\uFF08\u5404\u79CD\u5FAE\u670D\u52A1\u3001\u5404\u79CD\u670D\u52A1\u5668\u5730\u5740\u3001\u5404\u79CD\u53C2\u6570\uFF09\uFF0C\u4F20\u7EDF\u7684\u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F\u548C\u6570\u636E\u5E93\u7684\u65B9\u5F0F\u5DF2\u65E0\u6CD5\u6EE1\u8DB3\u5F00\u53D1\u4EBA\u5458\u5BF9\u914D\u7F6E\u7BA1\u7406\u7684\u8981\u6C42\uFF1A</p><ul><li>\u5B89\u5168\u6027\uFF1A\u914D\u7F6E\u8DDF\u968F\u6E90\u4EE3\u7801\u4FDD\u5B58\u5728\u4EE3\u7801\u5E93\u4E2D\uFF0C\u5BB9\u6613\u9020\u6210\u914D\u7F6E\u6CC4\u6F0F\uFF1B</li><li>\u65F6\u6548\u6027\uFF1A\u4FEE\u6539\u914D\u7F6E\uFF0C\u9700\u8981\u91CD\u542F\u670D\u52A1\u624D\u80FD\u751F\u6548\uFF1B</li><li>\u5C40\u9650\u6027\uFF1A\u65E0\u6CD5\u652F\u6301\u52A8\u6001\u8C03\u6574\uFF1A\u4F8B\u5982\u65E5\u5FD7\u5F00\u5173\u3001\u529F\u80FD\u5F00\u5173\uFF1B</li></ul><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u4E2D\u5FC3\u6765\u7EDF\u4E00\u7BA1\u7406\u914D\u7F6E\uFF01\u628A\u4E1A\u52A1\u5F00\u53D1\u8005\u4ECE\u590D\u6742\u4EE5\u53CA\u7E41\u7410\u7684\u914D\u7F6E\u4E2D\u89E3\u8131\u51FA\u6765\uFF0C\u53EA\u9700\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u4EE3\u7801\u672C\u8EAB\uFF0C\u4ECE\u800C\u80FD\u591F\u663E\u8457\u63D0\u5347\u5F00\u53D1\u4EE5\u53CA\u8FD0\u7EF4\u6548\u7387\u3002\u540C\u65F6\u5C06\u914D\u7F6E\u548C\u53D1\u5E03\u5305\u89E3\u85D5\u4E5F\u8FDB\u4E00\u6B65\u63D0\u5347\u53D1\u5E03\u7684\u6210\u529F\u7387\uFF0C\u5E76\u4E3A\u8FD0\u7EF4\u7684\u7EC6\u529B\u5EA6\u7BA1\u63A7\u3001\u5E94\u6025\u5904\u7406\u7B49\u63D0\u4F9B\u5F3A\u6709\u529B\u7684\u652F\u6301\u3002</p>',13),t=[o];function d(h,c){return i(),a("div",null,t)}var s=e(r,[["render",d],["__file","01_\u4F7F\u7528\u573A\u666F.html.vue"]]);export{s as default};
