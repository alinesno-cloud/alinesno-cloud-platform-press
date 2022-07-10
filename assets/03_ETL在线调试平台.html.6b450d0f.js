import{_ as r,o as a,c as e,a as h,d as t}from"./app.431a527c.js";const i={},n=t('<h1 id="etl-\u5728\u7EBF\u76D1\u63A7\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#etl-\u5728\u7EBF\u76D1\u63A7\u5E73\u53F0" aria-hidden="true">#</a> ETL \u5728\u7EBF\u76D1\u63A7\u5E73\u53F0</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>ETL(extract \u63D0\u53D6\u3001transform \u8F6C\u6362\u3001load \u52A0\u8F7D)\u3002ETL \u8D1F\u8D23\u5C06\u5206\u6563\u7684\u3001\u5F02\u6784\u6570\u636E\u6E90\u4E2D\u7684\u6570\u636E\u5982\u5173\u7CFB\u6570\u636E\u3001 \u5E73\u9762\u6570\u636E\u6587\u4EF6\u7B49\u62BD\u53D6\u5230\u4E34\u65F6\u4E2D\u95F4\u5C42\u540E\uFF0C\u8FDB\u884C\u6E05\u6D17\u3001\u8F6C\u6362\u3001\u96C6\u6210\uFF0C\u6700\u540E\u52A0\u8F7D\u5230\u6570\u636E\u4ED3\u5E93\u6216\u6570\u636E\u96C6\u5E02\u4E2D\uFF0C \u6210\u4E3A\u8054\u673A\u5206\u6790\u5904\u7406\u3001\u6570\u636E\u6316\u6398\u63D0\u4F9B\u51B3\u7B56\u652F\u6301\u7684\u6570\u636E</p><h2 id="\u67B6\u6784\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u89C4\u5212" aria-hidden="true">#</a> \u67B6\u6784\u89C4\u5212</h2><h3 id="etl-\u67B6\u6784\u56FE" tabindex="-1"><a class="header-anchor" href="#etl-\u67B6\u6784\u56FE" aria-hidden="true">#</a> ETL \u67B6\u6784\u56FE</h3>',5),o=["src"],l=t('<h3 id="\u6570\u636E\u6E05\u6D17" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6E05\u6D17" aria-hidden="true">#</a> \u6570\u636E\u6E05\u6D17</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u529F\u80FD</th><th>\u63CF\u8FF0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u6570\u636E\u8865\u7F3A</td><td>\u5BF9\u7A7A\u6570\u636E\u3001\u7F3A\u5931\u6570\u636E\u8FDB\u884C\u6570\u636E\u8865\u7F3A\u64CD\u4F5C\uFF0C\u65E0\u6CD5\u5904\u7406\u7684\u505A\u6807\u8BB0</td><td></td></tr><tr><td>2</td><td>\u6570\u636E\u66FF\u6362</td><td>\u5BF9\u65E0\u6548\u6570\u636E\u8FDB\u884C\u6570\u636E\u7684\u66FF\u6362</td><td></td></tr><tr><td>3</td><td>\u683C\u5F0F\u89C4\u8303\u5316</td><td>\u5C06\u6E90\u6570\u636E\u62BD\u53D6\u7684\u6570\u636E\u683C\u5F0F\u8F6C\u6362\u6210\u4E3A\u4FBF\u4E8E\u8FDB\u5165\u4ED3\u5E93\u5904\u7406\u7684\u76EE\u6807\u6570\u636E\u683C\u5F0F</td><td></td></tr><tr><td>4</td><td>\u4E3B\u5916\u952E\u7EA6\u675F</td><td>\u901A\u8FC7\u5EFA\u7ACB\u4E3B\u5916\u952E\u7EA6\u675F\uFF0C\u5BF9\u975E\u6CD5\u6570\u636E\u8FDB\u884C\u6570\u636E\u66FF\u6362\u6216\u5BFC\u51FA\u5230\u9519\u8BEF\u6587\u4EF6\u91CD\u65B0\u5904\u7406</td><td></td></tr></tbody></table><h3 id="\u6570\u636E\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u636E\u8F6C\u6362</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u529F\u80FD</th><th>\u63CF\u8FF0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u6570\u636E\u5408\u5E76</td><td>\u591A\u7528\u8868\u5173\u8054\u5B9E\u73B0\uFF0C\u5927\u5C0F\u8868\u5173\u8054\u7528 lookup\uFF0C\u5927\u5927\u8868\u76F8\u4EA4\u7528 join(\u6BCF\u4E2A\u5B57\u6BB5\u5BB6\u7D22\u5F15\uFF0C\u4FDD\u8BC1\u5173\u8054\u67E5\u8BE2\u7684\u6548\u7387)</td><td></td></tr><tr><td>2</td><td>\u6570\u636E\u62C6\u5206</td><td>\u6309\u4E00\u5B9A\u89C4\u5219\u8FDB\u884C\u6570\u636E\u62C6\u5206</td><td></td></tr><tr><td>3</td><td>\u884C\u5217\u4E92\u6362</td><td>\u6392\u5E8F/\u4FEE\u6539\u5E8F\u53F7\u3001\u53BB\u9664\u91CD\u590D\u8BB0\u5F55</td><td></td></tr><tr><td>4</td><td>\u6570\u636E\u9A8C\u8BC1</td><td>loolup\u3001sum\u3001count</td><td></td></tr></tbody></table><h3 id="\u6570\u636E\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u52A0\u8F7D" aria-hidden="true">#</a> \u6570\u636E\u52A0\u8F7D</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u529F\u80FD</th><th>\u63CF\u8FF0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u65F6\u95F4\u6233\u65B9\u5F0F</td><td>\u5728\u4E1A\u52A1\u8868\u4E2D\u7EDF\u4E00\u6DFB\u52A0\u5B57\u6BB5\u4F5C\u4E3A\u65F6\u95F4\u6233\uFF0C\u5F53 OLAP \u7CFB\u7EDF\u66F4\u65B0\u4FEE\u6539\u4E1A\u52A1\u6570\u636E\u65F6\uFF0C\u540C\u65F6\u4FEE\u6539\u65F6\u95F4\u6233\u5B57\u6BB5\u503C</td><td></td></tr><tr><td>2</td><td>\u65E5\u5FD7\u8868\u65B9\u5F0F</td><td>\u5728 OLAP \u7CFB\u7EDF\u4E2D\u6DFB\u52A0\u65E5\u5FD7\u8868\uFF0C\u4E1A\u52A1\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u66F4\u65B0\u7EF4\u62A4\u65E5\u5FD7\u8868\u5185\u5BB9</td><td></td></tr><tr><td>3</td><td>\u5168\u8868\u5BF9\u6BD4\u65B9\u5F0F</td><td>\u62BD\u53D6\u6240\u6709\u6E90\u6570\u636E\uFF0C\u5728\u66F4\u65B0\u76EE\u6807\u8868\u4E4B\u524D\u5148\u6839\u636E\u4E3B\u952E\u548C\u5B57\u6BB5\u8FDB\u884C\u6570\u636E\u6BD4\u5BF9\uFF0C\u6709\u66F4\u65B0\u7684\u8FDB\u884C update \u6216 insert</td><td></td></tr><tr><td>4</td><td>\u5168\u8868\u5220\u9664\u63D2\u5165\u65B9\u5F0F</td><td>\u5220\u9664\u76EE\u6807\u8868\u6570\u636E\uFF0C\u5C06\u6E90\u6570\u636E\u5168\u90E8\u63D2\u5165</td><td></td></tr></tbody></table><h2 id="\u529F\u80FD\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u8BBE\u8BA1" aria-hidden="true">#</a> \u529F\u80FD\u8BBE\u8BA1</h2><p>\u5982\u679C\u52A8\u8F84\u4E0A\u767E\u6216\u51E0\u5341\u4E2A job \u9700\u8981\u7BA1\u7406\uFF0C\u8FD9\u65F6\u5728\u4F7F\u7528\u5BA2\u6237\u7AEF\u7BA1\u7406\u5DF2\u7ECF\u5F88\u96BE\u7F16\u6392,\u8BBE\u8BA1\u5728\u7EBF job \u7BA1\u7406\u529F\u80FD,\u4FBF\u4E8E\u7BA1\u7406</p><table><thead><tr><th>\u5E8F\u53F7</th><th>\u529F\u80FD</th><th>\u8FDB\u5EA6</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u5B9A\u65F6\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u6309\u7167 cron \u7684\u65B9\u5F0F\uFF0C\u8BBE\u7F6E\u5B9A\u65F6\u7684\u5468\u671F\u548C\u65F6\u95F4</td><td></td><td></td></tr><tr><td>2</td><td>\u53EF\u4EE5\u8FDB\u884C\u4F5C\u4E1A\u8C03\u5EA6\u548C\u8F6C\u6362\u8C03\u5EA6</td><td></td><td></td></tr><tr><td>3</td><td>\u5BF9\u4F5C\u4E1A\u548C\u8F6C\u6362\u7684\u6267\u884C\u60C5\u51B5\u8FDB\u884C\u76D1\u63A7</td><td></td><td></td></tr><tr><td>4</td><td>\u5B9E\u65F6\u67E5\u770B\u4F5C\u4E1A\u8FD0\u884C\u65E5\u5FD7\uFF0C\u67E5\u770B log \u65E5\u5FD7\uFF0C\u67E5\u770B kettle \u5185\u90E8\u7684\u8FD0\u884C\u65E5\u5FD7</td><td></td><td></td></tr><tr><td>5</td><td>\u652F\u6301\u6570\u636E\u5E93\u8D44\u6E90\u5E93\u548C\u6587\u4EF6\u8D44\u6E90\u5E93\uFF0C\u53EF\u4EE5\u5171\u4EAB\u8FDB\u884C\u591A\u4EBA\u5F00\u53D1</td><td></td><td></td></tr><tr><td>6</td><td>\u652F\u6301\u591A\u4EBA\u534F\u4F5C\u7684\u591A\u7528\u6237\u6A21\u5F0F\uFF0C\u6743\u9650\u9694\u79BB</td><td></td><td></td></tr><tr><td>7</td><td>\u91C7\u7528 B/S \u7ED3\u6784\uFF0C\u7075\u6D3B\u90E8\u7F72</td><td></td><td></td></tr><tr><td>8</td><td>\u53EF\u4EE5\u8FDB\u884C\u96C6\u7FA4\u90E8\u7F72\u3001\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u63D0\u9AD8\u627F\u8F7D\u80FD\u529B</td><td></td><td></td></tr><tr><td>9</td><td>\u53EF\u4EE5\u8FDB\u884C\u4EFB\u52A1\u5224\u65AD\u548C\u8865\u53D1\uFF0C\u63D0\u9AD8\u5BB9\u9519\u80FD\u529B</td><td></td><td></td></tr></tbody></table><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>',11);function s(d,c){return a(),e("div",null,[n,h("img",{src:d.$withBase("/data/etl.png")},null,8,o),l])}var _=r(i,[["render",s],["__file","03_ETL\u5728\u7EBF\u8C03\u8BD5\u5E73\u53F0.html.vue"]]);export{_ as default};
