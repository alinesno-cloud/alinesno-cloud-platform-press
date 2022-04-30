(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{837:function(a,_,e){"use strict";e.r(_);var s=e(0),t=Object(s.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,_=a.$createElement,e=a._self._c||_;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"mysql-运维及开发规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-运维及开发规范"}},[a._v("#")]),a._v(" MySQL 运维及开发规范")]),a._v(" "),e("h2",{attrs:{id:"基础规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础规范"}},[a._v("#")]),a._v(" 基础规范")]),a._v(" "),e("ul",[e("li",[a._v("使用 INNODB 存储引擎")]),a._v(" "),e("li",[a._v("表字符集使用 UTF8")]),a._v(" "),e("li",[a._v("所有表都需要添加注释")]),a._v(" "),e("li",[a._v("单表数据量建议控制在 5000W 以内")]),a._v(" "),e("li",[a._v("不在数据库中存储图、文件等大数据")]),a._v(" "),e("li",[a._v("禁止在线上做数据库压力测试")]),a._v(" "),e("li",[a._v("禁从测试、开发环境直连数据库")])]),a._v(" "),e("h2",{attrs:{id:"命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[a._v("#")]),a._v(" 命名规范")]),a._v(" "),e("ul",[e("li",[a._v("库名表名字段名必须有固定的命名长度，12 个字符以内")]),a._v(" "),e("li",[a._v("库名、表名、字段名禁止超过 32 个字符。须见名之意")]),a._v(" "),e("li",[a._v("库名、表名、字段名禁止使用 MySQL 保留字")]),a._v(" "),e("li",[a._v("临时库、表名必须以 tmp 为前缀，并以日期为后缀")]),a._v(" "),e("li",[a._v("备份库、表必须以 bak 为前缀，并以日期为后缀")])]),a._v(" "),e("h2",{attrs:{id:"数据库默认字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库默认字段"}},[a._v("#")]),a._v(" 数据库默认字段")]),a._v(" "),e("p",[a._v("默认字段不需要添加，在启动时，会自动创建")]),a._v(" "),e("h2",{attrs:{id:"库、表、字段开发设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#库、表、字段开发设计规范"}},[a._v("#")]),a._v(" 库、表、字段开发设计规范")]),a._v(" "),e("ul",[e("li",[a._v("禁使用分区表")]),a._v(" "),e("li",[a._v("拆分大字段和访问频率低的字段，分离冷热数据")]),a._v(" "),e("li",[a._v("用 HASH 进散表，表名后缀使进制数，下标从 0 开始")]),a._v(" "),e("li",[a._v("按日期时间分表需符合 YYYY[MM][dd][HH]格式")]),a._v(" "),e("li",[a._v("采用合适的分库分表策略。例如千库十表、十库百表等")]),a._v(" "),e("li",[a._v("尽可能不使用 TEXT、BLOB 类型")]),a._v(" "),e("li",[a._v("用 DECIMAL 代替 FLOAT 和 DOUBLE 存储精确浮点数")]),a._v(" "),e("li",[a._v("越简单越好：将字符转化为数字、使用 TINYINT 来代替 ENUM 类型")]),a._v(" "),e("li",[a._v("所有字段均定义为 NOT NULL")]),a._v(" "),e("li",[a._v("使用 UNSIGNED 存储非负整数")]),a._v(" "),e("li",[a._v("INT 类型固定占用 4 字节存储")]),a._v(" "),e("li",[a._v("使用 timestamp 存储时间")]),a._v(" "),e("li",[a._v("使用 INT UNSIGNED 存储 IPV4")]),a._v(" "),e("li",[a._v("使用 VARBINARY 存储大小写敏感的变长字符串")]),a._v(" "),e("li",[a._v("禁止在数据库中存储明文密码，把密码加密后存储")]),a._v(" "),e("li",[a._v("用好数值类型字段"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" Tinyint      (1Byte)\n smallint     (2Byte)\n mediumint   (3Byte)\n int         (4Byte)\n bigint       (8Byte)\n")])])]),a._v("如果数值字段没有那么大，就不要用 bigint")]),a._v(" "),e("li",[a._v("存储 ip 最好用 int 存储而非 char(15)")]),a._v(" "),e("li",[a._v("不允许使用 ENUM")]),a._v(" "),e("li",[a._v("避免使用 NULL 字段\nNULL 字段很难查询优化，NULL 字段的索引需要额外空间，NULL 字段的复合索引无效")]),a._v(" "),e("li",[a._v("少用 text/blob，varchar 的性能会比 text 高很多，实在避免不了 blob，请拆表")]),a._v(" "),e("li",[a._v("数据库中不允许存储大文件，或者照片，可以将大对象放到磁盘上，数据库中存储它的路径")])]),a._v(" "),e("h2",{attrs:{id:"索引规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引规范"}},[a._v("#")]),a._v(" 索引规范")]),a._v(" "),e("p",[a._v("1、索引的数量要控制：")]),a._v(" "),e("ul",[e("li",[a._v("单张表中索引数量不超过 5 个")]),a._v(" "),e("li",[a._v("单个索引中的字段数不超过 5 个")]),a._v(" "),e("li",[a._v("对字符串使用前缀索引，前缀索引长度不超过 8 个字符")]),a._v(" "),e("li",[a._v("建议优先考虑前缀索引，必要时可添加伪列并建立索引")])]),a._v(" "),e("p",[a._v("2、主键准则")]),a._v(" "),e("ul",[e("li",[a._v("表必须有主键")]),a._v(" "),e("li",[a._v("不使用更新频繁的列作为主键")]),a._v(" "),e("li",[a._v("尽量不选择字符串列作为主键")]),a._v(" "),e("li",[a._v("不使用 UUID MD5 HASH 这些作为主键(数值太离散了)")]),a._v(" "),e("li",[a._v("默认使非空的唯一键作为主键")]),a._v(" "),e("li",[a._v("建议选择自增或发号器")])]),a._v(" "),e("p",[a._v("3、重要的 SQL 必须被索引，比如：")]),a._v(" "),e("ul",[e("li",[a._v("UPDATE、DELETE 语句的 WHERE 条件列")]),a._v(" "),e("li",[a._v("ORDER BY、GROUP BY、DISTINCT 的字段")])]),a._v(" "),e("p",[a._v("4、多表 JOIN 的字段注意以下：")]),a._v(" "),e("ul",[e("li",[a._v("区分度最大的字段放在前面")]),a._v(" "),e("li",[a._v("核 SQL 优先考虑覆盖索引")]),a._v(" "),e("li",[a._v("避免冗余和重复索引")]),a._v(" "),e("li",[a._v("索引要综合评估数据密度和分布以及考虑查询和更新比例")])]),a._v(" "),e("p",[a._v("5、索引禁忌")]),a._v(" "),e("ul",[e("li",[a._v("不在低基数列上建立索引，例如“性别”")]),a._v(" "),e("li",[a._v("不在索引列进行数学运算和函数运算")])]),a._v(" "),e("p",[a._v("6、尽量不使用外键")]),a._v(" "),e("ul",[e("li",[a._v("外键用来保护参照完整性，可在业务端实现")]),a._v(" "),e("li",[a._v("对父表和子表的操作会相互影响，降低可用性")])]),a._v(" "),e("p",[a._v("7、索引命名：非唯一索引必须以 idx"),e("em",[a._v("字段 1")]),a._v("字段 2 命名，唯一所以必须以 uniq"),e("em",[a._v("字段 1")]),a._v("字段 2 命名，索引名称必须全部小写\n8、新建的唯一索引必须不能和主键重复\n9、索引字段的默认值不能为 NULL，要改为其他的 default 或者空。NULL 非常影响索引的查询效率\n10、反复查看与表相关的 SQL，符合最左前缀的特点建立索引。多条字段重复的语句，要修改语句条件字段的顺序，为其建立一条联合索引，减少索引数量\n11、能使用唯一索引就要使用唯一索引，提高查询效率\n12、研发要经常使用 explain，如果发现索引选择性差，必须让他们学会使用 hint")]),a._v(" "),e("h2",{attrs:{id:"sql-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-规范"}},[a._v("#")]),a._v(" SQL 规范")]),a._v(" "),e("ul",[e("li",[a._v("sql 语句尽可能简单 大的 sql 想办法拆成小的 sql 语句(充分利用 QUERY CACHE 和充分利用多核 CPU)")]),a._v(" "),e("li",[a._v("事务要简单，整个事务的时间长度不要太长")]),a._v(" "),e("li",[a._v("避免使用触发器、函数、存储过程")]),a._v(" "),e("li",[a._v("降低业务耦合度，为 sacle out、sharding 留有余地")]),a._v(" "),e("li",[a._v("避免在数据库中进数学运算(MySQL 不擅长数学运算和逻辑判断)")]),a._v(" "),e("li",[a._v("不要用 select *，查询哪几个字段就 select 这几个字段")]),a._v(" "),e("li",[a._v("sql 中使用到 OR 的改写为用 IN() (or 的效率没有 in 的效率高)")]),a._v(" "),e("li",[a._v("in 里面数字的个数建议控制在 1000 以内")]),a._v(" "),e("li",[a._v("limit 分页注意效率。Limit 越大，效率越低。可以改写 limit，比如例子改写："),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" tlimit "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" id "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" limit10"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),e("li",[a._v("使用 union all 替代 union")]),a._v(" "),e("li",[a._v("避免使大表的 JOIN")]),a._v(" "),e("li",[a._v("使用 group by 分组、自动排序")]),a._v(" "),e("li",[a._v("对数据的更新要打散后批量更新，不要一次更新太多数据")]),a._v(" "),e("li",[a._v("减少与数据库的交互次数")]),a._v(" "),e("li",[a._v("注意使用性能分析工具"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" Sql explain/showprofile/mysqlsla\n")])])])]),a._v(" "),e("li",[a._v("SQL 语句要求所有研发，SQL 关键字全部是大写，每个词只允许有一个空格")]),a._v(" "),e("li",[a._v("SQL 语句不可以出现隐式转换，比如 select id from 表 where id='1'")]),a._v(" "),e("li",[a._v("IN 条件里面的数据数量要少，我记得应该是 500 个以内，要学会使用 exist 代替 in，exist 在一些场景查询会比 in 快")]),a._v(" "),e("li",[a._v("能不用 NOT IN 就不用 NOTIN，坑太多了。。会把空和 NULL 给查出来")]),a._v(" "),e("li",[a._v("在 SQL 语句中，禁止使用前缀是%的 like")]),a._v(" "),e("li",[a._v("不使用负向查询，如 not in/like")]),a._v(" "),e("li",[a._v("关于分页查询：程序里建议合理使用分页来提高效率 limit，offset 较大要配合子查询使用")]),a._v(" "),e("li",[a._v("禁止在数据库中跑大查询")]),a._v(" "),e("li",[a._v("使预编译语句，只传参数，比传递 SQL 语句更高效；一次解析，多次使用；降低 SQL 注入概率")]),a._v(" "),e("li",[a._v("禁止使 order by rand()")]),a._v(" "),e("li",[a._v("禁单条 SQL 语句同时更新多个表")])]),a._v(" "),e("h2",{attrs:{id:"流程规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程规范"}},[a._v("#")]),a._v(" 流程规范")]),a._v(" "),e("ul",[e("li",[a._v("所有的建表操作需要提前告知该表涉及的查询 sql；")]),a._v(" "),e("li",[a._v("所有的建表需要确定建立哪些索引后才可以建表上线；")]),a._v(" "),e("li",[a._v("所有的改表结构、加索引操作都需要将涉及到所改表的查询 sql 发出来告知 DBA 等相关人员；")]),a._v(" "),e("li",[a._v("在建新表加字段之前，要求研发至少要提前 3 天邮件出来，给 dba 们评估、优化和审核的时间")]),a._v(" "),e("li",[a._v("批量导入、导出数据必须提前通知 DBA 协助观察")]),a._v(" "),e("li",[a._v("禁在线上从库执行后台管理和统计类查询")]),a._v(" "),e("li",[a._v("禁有 super 权限的应用程序账号存在")]),a._v(" "),e("li",[a._v("推广活动或上线新功能必须提前通知 DBA 进行流量评估")]),a._v(" "),e("li",[a._v("不在业务高峰期批量更新、查询数据库")])]),a._v(" "),e("h2",{attrs:{id:"配置优化规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置优化规范"}},[a._v("#")]),a._v(" 配置优化规范")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("开启慢查询，用于 sql 语句分析。")])]),a._v(" "),e("li",[e("p",[a._v("开启二进制日志，用于遇到 mysql 崩溃，数据恢复")])]),a._v(" "),e("li",[e("p",[a._v("no-auto-rehash 确保这个服务启动得比较快。")])]),a._v(" "),e("li",[e("p",[a._v("back_log = 600")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("在MYSQL暂时停止响应新请求之前，短时间内的多少个请求可以被存在堆栈中。如果系统在短时间内有很多连接，则需要增大该参数的值，该参数值指定到来的TCP/IP连接的监听队列的大小。默认值80。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("max_connections = 3000")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MySQL允许最大的进程连接数，如果经常出现Too Many Connections的错误提示，则需要增大此值。默认151\n")])])])]),a._v(" "),e("li",[e("p",[a._v("max_connect_errors = 6000")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("设置每个主机的连接请求异常中断的最大次数，当超过该次数，MYSQL服务器将禁止host的连接请求，直到mysql服务器重启或通过flush hosts命令清空此host的相关信息。默认100\n")])])])]),a._v(" "),e("li",[e("p",[a._v("external-locking = FALSE")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("使用–skip-external-locking MySQL选项以避免外部锁定。该选项默认开启\n")])])])]),a._v(" "),e("li",[e("p",[a._v("max_allowed_packet = 32M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("设置在网络传输中一次消息传输量的最大值。系统默认值 为4MB，最大值是1GB，必须设置1024的倍数。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("sort_buffer_size = 2M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Sort_Buffer_Size 是一个connection级参数，在每个connection（session）第一次需要使用这个buffer的时候，一次性分配设置的内存。\nSort_Buffer_Size 并不是越大越好，由于是connection级的参数，过大的设置+高并发可能会耗尽系统内存资源。例如：500个连接将会消耗 500*sort_buffer_size(8M)=4G内存\nSort_Buffer_Size 超过2KB的时候，就会使用mmap() 而不是 malloc() 来进行内存分配，导致效率降低。 系统默认2M，使用默认值即可\n")])])])]),a._v(" "),e("li",[e("p",[a._v("join_buffer_size = 2M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("用于表间关联缓存的大小，和sort_buffer_size一样，该参数对应的分配内存也是每个连接独享。系统默认2M，使用默认值即可\n")])])])]),a._v(" "),e("li",[e("p",[a._v("thread_cache_size = 300")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("默认38 服务器线程缓存这个值表示可以重新利用保存在缓存中线程的数量,当断开连接时如果缓存中还有空间,那么客户端的线程将被放到缓存中,如果线程重新被请求，那么请求将从缓存中读取,如果缓存中是空的或者是新的请求，那么这个线程将被重新创建,如果有很多新的线程，增加这个值可以改善系统性能.通过比较 Connections 和 Threads_created 状态的变量，可以看到这个变量的作用。设置规则如下：1GB 内存配置为8，2GB配置为16，3GB配置为32，4GB或更高内存，可配置更大。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("thread_concurrency = 8")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("系统默认为10，使用10先观察 ,设置thread_concurrency的值的正确与否, 对mysql的性能影响很大, 在多个cpu(或多核)的情况下，错误设置了thread_concurrency的值, 会导致mysql不能充分利用多cpu(或多核), 出现同一时刻只能一个cpu(或核)在工作的情况。thread_concurrency应设为CPU核数的2倍. 比如有一个双核的CPU, 那么thread_concurrency的应该为4; 2个双核的cpu, thread_concurrency的值应为8\n")])])])]),a._v(" "),e("li",[e("p",[a._v("query_cache_size = 64M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("在MyISAM引擎优化中，这个参数也是一个重要的优化参数。但也爆露出来一些问题。机器的内存越来越大，习惯性把参数分配的值越来越大。这个参数加大后也引发了一系列问题。我们首先分析一下 query_cache_size的工作原理：一个SELECT查询在DB中工作后，DB会把该语句缓存下来，当同样的一个SQL再次来到DB里调用时，DB在该表没发生变化的情况下把结果从缓存中返回给Client。这里有一个关建点，就是DB在利用Query_cache工作时，要求该语句涉及的表在这段时间内没有发生变更。那如果该表在发生变更时，Query_cache里的数据又怎么处理呢？首先要把Query_cache和该表相关的语句全部置为失效，然后在写入更新。那么如果Query_cache非常大，该表的查询结构又比较多，查询语句失效也慢，一个更新或是Insert就会很慢，这样看到的就是Update或是Insert怎么这么慢了。所以在数据库写入量或是更新量也比较大的系统，该参数不适合分配过大。而且在高并发，写入量大的系统，建议把该功能禁掉。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("query_cache_limit = 4M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("指定单个查询能够使用的缓冲区大小，缺省为1M\n")])])])]),a._v(" "),e("li",[e("p",[a._v("query_cache_min_res_unit = 2k")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 默认是4KB，设置值大对大数据查询有好处，但如果你的查询都是小数据查询，就容易造成内存碎片和浪费\n 查询缓存碎片率 = Qcache_free_blocks / Qcache_total_blocks * 100%\n 如果查询缓存碎片率超过20%，可以用FLUSH QUERY CACHE整理缓存碎片，或者试试减小query_cache_min_res_unit，如果你的查询都是小数据量的话。\n 查询缓存利用率 = (query_cache_size – Qcache_free_memory) / query_cache_size * 100%\n 查询缓存利用率在25%以下的话说明query_cache_size设置的过大，可适当减小;查询缓存利用率在80%以上而且Qcache_lowmem_prunes > 50的话说明query_cache_size可能有点小，要不就是碎片太多。\n 查询缓存命中率 = (Qcache_hits – Qcache_inserts) / Qcache_hits * 100%\n")])])])]),a._v(" "),e("li",[e("p",[a._v("thread_stack = 192K")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 设置MYSQL每个线程的堆栈大小，默认值足够大，可满足普通操作。可设置范围为128K至4GB，默认为256KB，使用默认观察\n")])])])]),a._v(" "),e("li",[e("p",[a._v("transaction_isolation = READ-COMMITTED")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 设定默认的事务隔离级别.可用的级别如下:READ UNCOMMITTED-读未提交 READ COMMITTE-读已提交 REPEATABLE READ -可重复读 SERIALIZABLE -串行\n")])])])]),a._v(" "),e("li",[e("p",[a._v("tmp_table_size = 256M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" tmp_table_size 的默认大小是 32M。如果一张临时表超出该大小，MySQL产生一个 The table tbl_name is full 形式的错误，如果你做很多高级 GROUP BY 查询，增加 tmp_table_size 值。如果超过该值，则会将临时表写入磁盘。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("max_heap_table_size = 256M")])]),a._v(" "),e("li",[e("p",[a._v("expire_logs_days = 7")])]),a._v(" "),e("li",[e("p",[a._v("key_buffer_size = 2048M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 批定用于索引的缓冲区大小，增加它可以得到更好的索引处理性能，对于内存在4GB左右的服务器来说，该参数可设置为256MB或384MB。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("read_buffer_size = 1M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 默认128K\n MySql读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区，MySql会为它分配一段内存缓冲区。read_buffer_size变量控制这一缓冲区的大小。如果对表的顺序扫描请求非常频繁，并且你认为频繁扫描进行得太慢，可以通过增加该变量值以及内存缓冲区大小提高其性能。和sort_buffer_size一样，该参数对应的分配内存也是每个连接独享。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("read_rnd_buffer_size = 16M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" MySql的随机读（查询操作）缓冲区大小。当按任意顺序读取行时(例如，按照排序顺序)，将分配一个随机读缓存区。进行排序查询时，MySql会首先扫描一遍该缓冲，以避免磁盘搜索，提高查询速度，如果需要排序大量数据，可适当调高该值。但MySql会为每个客户连接发放该缓冲空间，所以应尽量适当设置该值，以避免内存开销过大。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("bulk_insert_buffer_size = 64M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 批量插入数据缓存大小，可以有效提高插入效率，默认为8M\n")])])])]),a._v(" "),e("li",[e("p",[a._v("myisam_sort_buffer_size = 128M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" MyISAM表发生变化时重新排序所需的缓冲 默认8M\n")])])])]),a._v(" "),e("li",[e("p",[a._v("myisam_max_sort_file_size = 10G")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" MySQL重建索引时所允许的最大临时文件的大小 (当 REPAIR, ALTER TABLE 或者 LOAD DATA INFILE).\n 如果文件大小比此值更大,索引会通过键值缓冲创建(更慢)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("myisam_max_extra_sort_file_size = 10G 5.6 无此值设置")])]),a._v(" "),e("li",[e("p",[a._v("myisam_repair_threads = 1 默认为 1")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 如果一个表拥有超过一个索引, MyISAM 可以通过并行排序使用超过一个线程去修复他们.\n 这对于拥有多个CPU以及大量内存情况的用户,是一个很好的选择.\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_additional_mem_pool_size = 16M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 这个参数用来设置 InnoDB 存储的数据目录信息和其它内部数据结构的内存池大小，类似于Oracle的library cache。这不是一个强制参数，可以被突破。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_buffer_pool_size = 2048M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 这对Innodb表来说非常重要。Innodb相比MyISAM表对缓冲更为敏感。MyISAM可以在默认的 key_buffer_size 设置下运行的可以，然而Innodb在默认的 innodb_buffer_pool_size 设置下却跟蜗牛似的。由于Innodb把数据和索引都缓存起来，无需留给操作系统太多的内存，因此如果只需要用Innodb的话则可以设置它高达 70-80% 的可用内存。一些应用于 key_buffer 的规则有 — 如果你的数据量不大，并且不会暴增，那么无需把 innodb_buffer_pool_size 设置的太大了\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_data_file_path = ibdata1:1024M:autoextend 设置过大导致报错，默认 12M 观察")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 表空间文件 重要数据\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_file_io_threads = 4 不明确，使用默认值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 文件IO的线程数，一般为 4，但是在 Windows 下，可以设置得较大。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_thread_concurrency = 8")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 服务器有几个CPU就设置为几，建议用默认设置，一般为8.\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_flush_log_at_trx_commit = 2")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 如果将此参数设置为1，将在每次提交事务后将日志写入磁盘。为提供性能，可以设置为0或2，但要承担在发生故障时丢失数据的风险。设置为0表示事务日志写入日志文件，而日志文件每秒刷新到磁盘一次。设置为2表示事务日志将在提交时写入日志，但日志文件每次刷新到磁盘一次。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_log_buffer_size = 16M 使用默认 8M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 此参数确定些日志文件所用的内存大小，以M为单位。缓冲区更大能提高性能，但意外的故障将会丢失数据.MySQL开发人员建议设置为1－8M之间\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_log_file_size = 128M 使用默认 48M")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 此参数确定数据日志文件的大小，以M为单位，更大的设置可以提高性能，但也会增加恢复故障数据库所需的时间\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_log_files_in_group = 3 使用默认 2")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 为提高性能，MySQL可以以循环方式将日志文件写到多个文件。推荐设置为3M\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_max_dirty_pages_pct = 90 使用默认 75 观察")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" Buffer_Pool中Dirty_Page所占的数量，直接影响InnoDB的关闭时间。参数innodb_max_dirty_pages_pct 可以直接控制了Dirty_Page在Buffer_Pool中所占的比率，而且幸运的是innodb_max_dirty_pages_pct是可以动态改变的。所以，在关闭InnoDB之前先将innodb_max_dirty_pages_pct调小，强制数据块Flush一段时间，则能够大大缩短 MySQL关闭的时间。\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_lock_wait_timeout = 120")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 默认为50秒 InnoDB 有其内置的死锁检测机制，能导致未完成的事务回滚。但是，如果结合InnoDB使用MyISAM的lock tables 语句或第三方事务引擎,则InnoDB无法识别死锁。为消除这种可能性，可以将innodb_lock_wait_timeout设置为一个整数值，指示 MySQL在允许其他事务修改那些最终受事务回滚的数据之前要等待多长时间(秒数)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("innodb_file_per_table = 0")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("默认为No独享表空间（关闭）\n")])])])])])])}],!1,null,null,null);_.default=t.exports}}]);