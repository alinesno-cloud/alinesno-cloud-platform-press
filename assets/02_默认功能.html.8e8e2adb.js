import{_ as t,o as d,c as e,d as l}from"./app.5bed8122.js";const n={},i=l('<h1 id="\u670D\u52A1\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u9ED8\u8BA4" aria-hidden="true">#</a> \u670D\u52A1\u9ED8\u8BA4</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5E73\u53F0\u4F1A\u62BD\u53D6\u5E38\u7528\u529F\u80FD\u653E\u81F3\u57FA\u7840\u7C7B\u4E2D\uFF0C\u5E73\u53F0\u63D0\u4F9B\u5E38\u7528\u7A33\u5B9A\u7684\u65B9\u6CD5\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u76F4\u63A5\u8C03\u7528\u3002</p><h2 id="repository-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#repository-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" aria-hidden="true">#</a> Repository \u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5</h2><p>\u4EE3\u7801\u751F\u6210\u5668\u4F1A\u81EA\u52A8\u751F\u6210\u57FA\u7840\u64CD\u4F5C\u4EE3\u7801\uFF0C\u63D0\u4F9B\u9ED8\u8BA4\u7684\u65B9\u6CD5,\u65B9\u6CD5\u63D0\u4F9B\u5982\u4E0B</p><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th><th>\u662F\u5426\u96C6\u6210</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>List&lt;Entity&gt; findAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">2</td><td>List&lt;Entity&gt; findAll(Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">3</td><td>List&lt;Entity&gt; findAllById(Iterable&lt;ID&gt; ids)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">4</td><td>&lt;S extends Entity&gt; List&lt;S&gt; saveAll(Iterable&lt;S&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">5</td><td>void flush()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">6</td><td>&lt;S extends Entity&gt; S saveAndFlush(S entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">7</td><td>void deleteInBatch(Iterable&lt;Entity&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">8</td><td>void deleteAllInBatch()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">9</td><td>Entity getOne(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">10</td><td>&lt;S extends Entity&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">11</td><td>&lt;S extends Entity&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example, Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">12</td><td>Page&lt;Entity&gt; findAll(Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">13</td><td>&lt;S extends Entity&gt; S save(S entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">14</td><td>Optional&lt;Entity&gt; findById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">15</td><td>boolean existsById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">16</td><td>long count()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">17</td><td>void deleteById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">18</td><td>void delete(Entity entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">19</td><td>void deleteAll(Iterable&lt;? extends Entity&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">20</td><td>void deleteAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">21</td><td>&lt;S extends Entity&gt; Optional&lt;S&gt; findOne(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">22</td><td>&lt;S extends Entity&gt; Page&lt;S&gt; findAll(Example&lt;S&gt; example, Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">23</td><td>&lt;S extends Entity&gt; long count(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">24</td><td>&lt;S extends Entity&gt; boolean exists(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">25</td><td>Optional&lt;Entity&gt; findOne(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">26</td><td>List&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">27</td><td>Page&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec, Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">28</td><td>List&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec, Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">29</td><td>long count(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td>.</td></tr></tbody></table><h2 id="service-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#service-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" aria-hidden="true">#</a> Service \u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5</h2><p>\u4EE3\u7801\u751F\u6210\u5668\u4F1A\u81EA\u52A8\u751F\u6210\u57FA\u7840\u64CD\u4F5C\u4EE3\u7801\uFF0C\u63D0\u4F9B\u9ED8\u8BA4\u7684\u65B9\u6CD5,\u65B9\u6CD5\u63D0\u4F9B\u5982\u4E0B</p><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th><th>\u662F\u5426\u96C6\u6210</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>List&lt;Entity&gt; findAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">2</td><td>List&lt;Entity&gt; findAll(Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">3</td><td>List&lt;Entity&gt; findAllById(Iterable&lt;ID&gt; ids)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">4</td><td>&lt;S extends Entity&gt; List&lt;S&gt; saveAll(Iterable&lt;S&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">5</td><td>void flush()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">6</td><td>&lt;S extends Entity&gt; S saveAndFlush(S entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">7</td><td>void deleteInBatch(Iterable&lt;Entity&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">8</td><td>void deleteAllInBatch()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">9</td><td>Entity getOne(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">10</td><td>&lt;S extends Entity&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">11</td><td>&lt;S extends Entity&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example, Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">12</td><td>Page&lt;Entity&gt; findAll(Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">13</td><td>&lt;S extends Entity&gt; S save(S entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">14</td><td>Optional&lt;Entity&gt; findById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">15</td><td>boolean existsById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">16</td><td>long count()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">17</td><td>void deleteById(ID id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">18</td><td>void delete(Entity entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">19</td><td>void deleteAll(Iterable&lt;? extends Entity&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">20</td><td>void deleteAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">21</td><td>&lt;S extends Entity&gt; Optional&lt;S&gt; findOne(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">22</td><td>&lt;S extends Entity&gt; Page&lt;S&gt; findAll(Example&lt;S&gt; example, Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">23</td><td>&lt;S extends Entity&gt; long count(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">24</td><td>&lt;S extends Entity&gt; boolean exists(Example&lt;S&gt; example)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">25</td><td>Optional&lt;Entity&gt; findOne(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">26</td><td>List&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">27</td><td>Page&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec, Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">28</td><td>List&lt;Entity&gt; findAll(Specification&lt;Entity&gt; spec, Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">29</td><td>long count(Specification&lt;Entity&gt; spec)</td><td></td><td>\u96C6\u6210</td><td>.</td></tr></tbody></table><h2 id="controller-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#controller-\u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5" aria-hidden="true">#</a> Controller \u9ED8\u8BA4\u63D0\u4F9B\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th><th>\u662F\u5426\u96C6\u6210</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>@GetMapping(&quot;findAll&quot;)<br>public List&lt;E&gt; findAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">2</td><td>@PostMapping(&quot;findAllBySort&quot;)<br>public List&lt;E&gt; findAll(@RequestBody Sort sort)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">3</td><td>@PostMapping(&quot;findAllById&quot;)<br>public List&lt;E&gt; findAllById(@RequestBody Iterable&lt;String&gt; ids)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">4</td><td>@PostMapping(&quot;saveAll&quot;)<br>public List&lt;E&gt; saveall(@RequestBody Iterable&lt;E&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">5</td><td>@PostMapping(&quot;saveAndFlush&quot;)<br>public E saveAndFlush(@RequestBody E entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">6</td><td>@PostMapping(&quot;deleteInBatch&quot;)<br>public void deleteInBatch(@RequestBody Iterable&lt;E&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">7</td><td>@GetMapping(&quot;deleteAllInBatch&quot;)<br>public void deleteAllInBatch()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">8</td><td>@GetMapping(&quot;getOne&quot;)<br>public E getOne(String id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">9</td><td>@PostMapping(&quot;findAllByPageable&quot;)<br>public RestPage&lt;E&gt; findAll(Pageable pageable)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">10</td><td>@PostMapping(&quot;save&quot;)<br>public E save(E entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">11</td><td>@GetMapping(&quot;findById&quot;)<br>public Optional&lt;E&gt; findById(String id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">12</td><td>@GetMapping(&quot;existsById&quot;)<br>public boolean existsById(String id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">13</td><td>@GetMapping(&quot;count&quot;)<br>public long count()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">14</td><td>@GetMapping(&quot;deleteById&quot;)<br>public void deleteById(String id)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">15</td><td>@PostMapping(&quot;delete&quot;)<br>public void delete(@RequestBody E entity)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">16</td><td>@PostMapping(&quot;deleteAllByIterable&quot;)<br>public void deleteAll(@RequestBody Iterable&lt;E&gt; entities)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">17</td><td>@PostMapping(&quot;deleteAll&quot;)<br>public void deleteAll()</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">18</td><td>@PostMapping(&quot;findOneByWrapper&quot;)<br>public Optional&lt;E&gt; findOne(@RequestBody RestWrapper restWrapper)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">19</td><td>@PostMapping(&quot;findAllByWrapper&quot;)<br>public List&lt;E&gt; findAll(@RequestBody RestWrapper restWrapper)</td><td></td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">20</td><td>@PostMapping(&quot;findAllByWrapperAndPageable&quot;)<br>public RestPage&lt;E&gt; findAllByWrapperAndPageable(@RequestBody RestWrapper restWrapper)</td><td></td><td>\u96C6\u6210</td><td>.</td></tr></tbody></table><h2 id="\u9ED8\u8BA4\u751F\u6210\u9875" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u751F\u6210\u9875" aria-hidden="true">#</a> \u9ED8\u8BA4\u751F\u6210\u9875</h2><table><thead><tr><th style="text-align:center;">\u5E8F\u53F7</th><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th><th>\u662F\u5426\u96C6\u6210</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>add.html</td><td>\u6DFB\u52A0\u9875\u9762</td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">2</td><td>modify.html</td><td>\u4FEE\u6539\u9875\u9762</td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">3</td><td>detail.html</td><td>\u8BE6\u60C5\u9875\u9762</td><td>\u96C6\u6210</td><td></td></tr><tr><td style="text-align:center;">4</td><td>list.html</td><td>\u5217\u8868\u9875\u9762</td><td>\u96C6\u6210</td><td>.</td></tr></tbody></table>',13),r=[i];function a(s,g){return d(),e("div",null,r)}var c=t(n,[["render",a],["__file","02_\u9ED8\u8BA4\u529F\u80FD.html.vue"]]);export{c as default};
