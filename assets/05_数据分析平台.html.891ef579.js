import{_ as t,o as d,c as e,d as a}from"./app.72c96be6.js";const i={},r=a('<h1 id="\u6570\u636E\u5206\u6790\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5206\u6790\u5E73\u53F0" aria-hidden="true">#</a> \u6570\u636E\u5206\u6790\u5E73\u53F0</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u6570\u636E\u5206\u6790\u5E73\u53F0\u89C4\u5212\u548C\u5212\u5206\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6570\u636E\u4E2D\u53F0\u7684\u80FD\u529B\uFF0C\u7528\u4E8E\u6570\u636E\u5206\u6790\u5E76\u63D0\u4F9B\u5BF9\u5E94\u7684\u7B2C\u4E09\u65B9\u63A5\u53E3\u3002</p><h2 id="\u4E1A\u52A1\u8BE6\u7EC6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u8BE6\u7EC6\u8BF4\u660E" aria-hidden="true">#</a> \u4E1A\u52A1\u8BE6\u7EC6\u8BF4\u660E</h2><h3 id="\u6570\u636E\u91C7\u96C6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u91C7\u96C6" aria-hidden="true">#</a> \u6570\u636E\u91C7\u96C6</h3><ul><li>\u7528\u6237\u5BF9\u7269\u54C1\u7684\u64CD\u4F5C(\u67E5\u770B,\u6D4F\u89C8\uFF0C\u8D2D\u4E70)ugcLOG</li><li>\u901A\u8FC7 flume \u91C7\u96C6 ugcLOG \u65E5\u5FD7\u5230 Hive</li></ul><h3 id="\u79BB\u7EBF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u79BB\u7EBF\u5904\u7406" aria-hidden="true">#</a> \u79BB\u7EBF\u5904\u7406</h3><ul><li>\u901A\u8FC7\u5B9A\u65F6(oozie\u3001crontab)\u4EFB\u52A1(mr)\uFF0C\u5904\u7406 Hive \u4E0A\u9762\u7684 ugcLOG</li><li>\u6E05\u7406\u540E\u7684\u6570\u636E(\u7528\u6237 id,itemID,\u8BC4\u5206)\uFF0C\u7ED9 mahout</li><li>mahout \u6E05\u7406\u4E4B\u540E\u5C31\u662F\u6BCF\u4E2A\u7528\u6237\u5BF9\u5E94\u7684 item \u7269\u54C1\u5217\u8868</li><li>\u6E05\u6D17\u540E\u7684\u7ED3\u679C\u6570\u636E\uFF0C\u7136\u540E\u901A\u8FC7 sqoop \u5BFC\u5165\u5230\u6570\u636E\u5E93 mysql \u4E2D\u6216\u8005\u653E\u5165\u5230 hive \u4E2D(web \u5C55\u73B0\u6216\u8005\u4EA4\u7ED9\u6570\u636E\u5206\u6790\u4EBA\u5458)</li><li>\u5F53\u5929\u7684\u6570\u636E\uFF1A\u5F53\u65E5\u51CC\u6668\u622A\u81F3\u5230\u7EDF\u8BA1\u65F6\u95F4\u70B9\u7684\u6570\u636E</li><li>\u4E4B\u524D\u7684\u5386\u53F2\u6570\u636E\uFF1A\u622A\u81F3\u5230\u4ECA\u5929\u51CC\u6668\u7684\u5386\u53F2\u6570\u636E</li></ul><h3 id="\u5B9E\u65F6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u65F6\u5904\u7406" aria-hidden="true">#</a> \u5B9E\u65F6\u5904\u7406</h3><ul><li>\u6536\u96C6: \u6536\u96C6\u7528\u6237\u7684\u7279\u5F81\u5411\u91CF(\u7528\u6237\u548C\u6807\u7B7E\u7684\u77E9\u9635),(userID tag1 tag2)</li><li>\u6536\u96C6: \u6536\u96C6\u7269\u54C1\u7684\u7279\u5F81\u5411\u91CF(\u7269\u54C1\u548C\u6807\u7B7E\u7684\u77E9\u9635),(itemID tag1 tag2 tag5)</li><li>\u8BA1\u7B97: \u7136\u540E\u901A\u8FC7 1,2 \u8BA1\u7B97\u51FA\u7528\u6237\u548C\u7269\u54C1\u7684\u7279\u5F81\u503C(\u77E9\u9635\u4E58\u79EF)</li><li>\u8FC7\u6EE4: \u901A\u8FC7 userID item \u5217\u8868\u8FC7\u6EE4\u6389\u5DF2\u7ECF\u4EA7\u751F\u884C\u4E3A\u7684\u7269\u54C1/\u901A\u8FC7\u8FD0\u8425\u51B3\u7B56\u8FC7\u6EE4/\u7528\u6237\u81EA\u5B9A\u4E49\u8FC7\u6EE4</li><li>\u6392\u5E8F: topN(\u5305\u62EC\u81EA\u5B9A\u4E49\u6743\u91CD\uFF0C\u6BD4\u5982\u60F3\u5728\u5468\u672B\u63A8\u9500\u67D0\u4E2A\u4EA7\u54C1\u7B49)</li><li>\u901A\u8FC7 web \u6536\u96C6\u7279\u5F81\u884C\u4E3A\u6570\u636E(\u7528\u6237\u6807\u7B7E\uFF0C\u8BC4\u8BBA\u6570\u636E)</li><li>\u628A\u6536\u96C6\u7684\u6570\u636E\u5B9E\u65F6\u4F20\u5165 kafka</li><li>\u7279\u5F81\u884C\u4E3A\u6570\u636E\u548C\u7528\u6237\u5C5E\u6027\u7279\u5F81\u6570\u636E(\u6570\u636E\u5E93)\u5171\u540C\u7EC4\u88C5\u6210\u7528\u6237\u7279\u5F81\u5411\u91CF</li><li>\u7528\u6237\u7279\u5F81\u5411\u91CF\u548C\u7269\u54C1\u7684\u7279\u5F81\u77E9\u9635(\u7528\u6237\u548C\u7CFB\u7EDF\u6253\u7684\u6807\u7B7E\uFF0C\u6743\u91CD\u7B49)\u8BA1\u7B97\u51FA\u77E9\u9635\u4E58\u79EF</li><li>\u8FC7\u6EE4\uFF0C\u8BA1\u7B97 topN</li></ul><h3 id="\u5DE5\u7A0B\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u7BA1\u7406" aria-hidden="true">#</a> \u5DE5\u7A0B\u7BA1\u7406</h3><ul><li>\u6570\u636E\u8FDB\u884C\u79BB\u7EBF\u548C\u5B9E\u65F6\u5904\u7406\u4E4B\u540E\u5BF9\u5916\u63D0\u4F9B\u7B2C\u4E09\u65B9 api \u63A5\u53E3</li><li>\u63D0\u4F9B\u6570\u636E\u540E\u53F0\u7BA1\u7406\u548C\u76D1\u63A7</li><li>\u63D0\u4F9B\u6807\u7B7E\u7BA1\u7406\u4F53\u7CFB</li><li>\u63D0\u4F9B\u5176\u5B83\u76F8\u5E94\u7684\u5927\u6570\u636E\u76D1\u63A7\u548C\u63A5\u53E3\u7BA1\u7406\u7B49\u529F\u80FD</li></ul><h2 id="\u5DE5\u7A0B\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u89C4\u5212" aria-hidden="true">#</a> \u5DE5\u7A0B\u89C4\u5212</h2><table><thead><tr><th>\u5E8F\u53F7</th><th>\u89D2\u8272</th><th>\u5DE5\u7A0B</th><th>\u7AEF\u53E3</th><th>\u63CF\u8FF0</th><th>\u8D1F\u8D23\u4EBA</th><th>\u8FDB\u5EA6</th></tr></thead><tbody><tr><td>1</td><td>\u6570\u636E\u91C7\u96C6</td><td>alinesno-data-recommender-flume</td><td>28000</td><td>\u6570\u636E\u91C7\u96C6(\u884C\u4E3A/\u4E1A\u52A1)\u5230 hive \u8868</td><td>WeiXiaoJin</td><td></td></tr><tr><td>2</td><td></td><td>alinesno-data-recommender-etl</td><td>28001</td><td>\u6570\u636E\u6E05\u6D17\u8F6C\u6362\u5230\u6570\u636E\u4ED3\u5E93\u5206\u5C42</td><td>WeiXiaoJin</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td>\u79BB\u7EBF\u5904\u7406</td><td>alinesno-data-recommender-hive</td><td></td><td>\u6570\u636E\u4ED3\u5E93\u5C42</td><td>WeiXiaoJin</td><td></td></tr><tr><td>4</td><td></td><td>alinesno-data-recommender-spark</td><td></td><td>\u79BB\u7EBF\u8BA1\u7B97\u5F15\u64CE</td><td>WeiXiaoJin</td><td></td></tr><tr><td>4</td><td></td><td>alinesno-data-recommender-mahout</td><td>28002</td><td>\u57FA\u4E8E\u7528\u6237\u548C\u7269\u54C1\u7684\u534F\u540C\u8FC7\u6EE4\u7B97\u6CD5</td><td>WeiXiaoJin</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td>\u5B9E\u65F6\u5904\u7406</td><td>alinesno-data-recommender-kafka</td><td></td><td>Kafka \u4E1A\u52A1\u64CD\u4F5C\u5C42</td><td>WeiXiaoJin</td><td></td></tr><tr><td>6</td><td></td><td>alinesno-data-recommender-flink</td><td></td><td>\u5B9E\u65F6\u8BA1\u7B97\u6D41\u5F15\u64CE</td><td>WeiXiaoJin</td><td></td></tr><tr><td>7</td><td></td><td>alinesno-data-recommender-mahout</td><td>28003</td><td>\u57FA\u4E8E\u7528\u6237\u548C\u7269\u54C1\u6807\u7B7E\u7B97\u6CD5</td><td>WeiXiaoJin</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td>\u5DE5\u7A0B\u7BA1\u7406</td><td>alinesno-data-recommender-tools</td><td></td><td>\u516C\u5171\u5DE5\u5177\u5BF9\u8C61</td><td>WeiXiaoJin</td><td></td></tr><tr><td>9</td><td></td><td>alinesno-data-recommender-starter</td><td></td><td>\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91</td><td>WeiXiaoJin</td><td></td></tr><tr><td>10</td><td></td><td>alinesno-data-recommender-api</td><td></td><td>\u4E1A\u52A1 Dubbo \u670D\u52A1</td><td>WeiXiaoJin</td><td></td></tr><tr><td>11</td><td></td><td>alinesno-data-recommender-gateway</td><td></td><td>\u4E1A\u52A1\u5BF9\u5916 http \u63A5\u53E3</td><td>WeiXiaoJin</td><td></td></tr><tr><td>12</td><td></td><td>alinesno-data-recommender-web</td><td></td><td>\u540E\u53F0\u7BA1\u7406\u754C\u9762</td><td>WeiXiaoJin</td><td></td></tr><tr><td>13</td><td></td><td>alinesno-data-recommender-boot</td><td>28004</td><td>\u7CFB\u7EDF\u542F\u52A8\u7BA1\u7406</td><td>WeiXiaoJin</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h2><ul><li>\u7565</li></ul>',16),n=[r];function l(o,h){return d(),e("div",null,n)}var s=t(i,[["render",l],["__file","05_\u6570\u636E\u5206\u6790\u5E73\u53F0.html.vue"]]);export{s as default};
