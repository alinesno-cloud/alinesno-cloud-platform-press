import{_ as e,o as n,c as s,d as a}from"./app.2b321bc4.js";const i={},l=a(`<h1 id="ansible-\u6E90\u7801\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#ansible-\u6E90\u7801\u5B89\u88C5" aria-hidden="true">#</a> Ansible \u6E90\u7801\u5B89\u88C5</h1><h2 id="\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" tabindex="-1"><a class="header-anchor" href="#\u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97" aria-hidden="true">#</a> \u672C\u5185\u5BB9\u4F60\u5C06\u83B7\u5F97</h2><ul><li>Linux \u4E0A Ansible \u6700\u65B0\u7A33\u5B9A\u7248\u672C\u7684\u6E90\u7801\u5B89\u88C5\u6559\u7A0B</li></ul><h2 id="\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h2><ul><li>\u5B89\u88C5 Python 3.x \u73AF\u5883</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y python36 python36-pip <span class="token function">git</span>
<span class="token function">ln</span> -s /usr/bin/pip36 /usr/bin/pip3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5 virtualenv \u73AF\u5883</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> virtualenv
virtualenv -p /bin/python3.6 .py3-a2.5-env
<span class="token builtin class-name">source</span> .py3-a2.5-env/bin/activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5 ansible Python \u4F9D\u8D56\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> paramiko PyYAML jinja2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5176\u4ED6 <code>yum install epel-release -y</code></li></ul><h2 id="\u4E0B\u8F7D\u6E90\u7801\u548C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6E90\u7801\u548C\u5B89\u88C5" aria-hidden="true">#</a> \u4E0B\u8F7D\u6E90\u7801\u548C\u5B89\u88C5</h2><ul><li><p>\u4E0B\u8F7D\u6E90\u7801\uFF1A <code>git clone git://github.com/ansible/ansible.git</code></p></li><li><p>\u5B89\u88C5\uFF1A</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ansible/
python3 setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA Ansible \u914D\u7F6E\u6587\u4EF6\uFF0C\u5F00\u542F Ansible \u65E5\u5FD7(Ansible \u9ED8\u8BA4\u4E0D\u542F\u7528\u65E5\u5FD7)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/ansible
<span class="token function">cp</span> ansible/examples/ansible.cfg /etc/ansible/
<span class="token function">sed</span> -i <span class="token string">&#39;s/#log_path/log_path/&#39;</span> /etc/ansible/ansible.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9A8C\u8BC1\u5B89\u88C5\u662F\u5426\u6210\u529F:<code>ansible --version</code></li></ul>`,17),d=[l];function c(t,r){return n(),s("div",null,d)}var o=e(i,[["render",c],["__file","01_Ansible\u6E90\u7801\u5B89\u88C5.html.vue"]]);export{o as default};
