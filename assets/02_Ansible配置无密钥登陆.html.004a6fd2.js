import{_ as e,o as s,c as a,d as i}from"./app.7737c23a.js";const n={},d=i(`<h2 id="ansible-\u914D\u7F6E\u65E0\u79D8\u94A5\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#ansible-\u914D\u7F6E\u65E0\u79D8\u94A5\u767B\u5F55" aria-hidden="true">#</a> Ansible \u914D\u7F6E\u65E0\u79D8\u94A5\u767B\u5F55</h2><p>Ansible \u514D\u5BC6\u767B\u5F55\u4F7F\u7528\u7684\u662F ssh \u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u914D\u7F6E\u6BD4\u8F83\u7B80\u5355</p><h3 id="\u751F\u6210\u7BA1\u7406\u8282\u70B9\u673A\u7684\u516C\u94A5\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u7BA1\u7406\u8282\u70B9\u673A\u7684\u516C\u94A5\u548C\u79C1\u94A5" aria-hidden="true">#</a> \u751F\u6210\u7BA1\u7406\u8282\u70B9\u673A\u7684\u516C\u94A5\u548C\u79C1\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u76EE\u6807\u8282\u70B9\u7684-ssh-\u8BA4\u8BC1\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u76EE\u6807\u8282\u70B9\u7684-ssh-\u8BA4\u8BC1\u4FE1\u606F" aria-hidden="true">#</a> \u6DFB\u52A0\u76EE\u6807\u8282\u70B9\u7684 ssh \u8BA4\u8BC1\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-copy-id root@ip\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5\u514D\u5BC6\u767B\u5F55\u662F\u5426\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u514D\u5BC6\u767B\u5F55\u662F\u5426\u6210\u529F" aria-hidden="true">#</a> \u6D4B\u8BD5\u514D\u5BC6\u767B\u5F55\u662F\u5426\u6210\u529F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible testserver -i hosts -m <span class="token function">ping</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),r=[d];function h(l,c){return s(),a("div",null,r)}var o=e(n,[["render",h],["__file","02_Ansible\u914D\u7F6E\u65E0\u5BC6\u94A5\u767B\u9646.html.vue"]]);export{o as default};
