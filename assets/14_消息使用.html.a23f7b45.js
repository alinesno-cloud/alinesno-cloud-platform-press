import{_ as n,o as s,c as a,d as t}from"./app.ab01dc63.js";const p={},e=t(`<h1 id="\u5206\u5E03\u5F0F\u6D88\u606F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u6D88\u606F\u4F7F\u7528" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u6D88\u606F\u4F7F\u7528</h1><p>\u6B64\u5904\u4E3A kafka \u6D88\u606F\u7684\u4F7F\u7528\u53CA\u6559\u7A0B\uFF0C\u6D88\u606F\u4F7F\u7528\u6709\u4E00\u5B9A\u7684\u573A\u666F\u9650\u5236\uFF0C\u6BD4\u5982\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF0C\u8FD8\u6709\u65E5\u5FD7\u7B49</p><h2 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h2><p>\u521D\u59CB\u5316\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alinesno.cloud.compoment.kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alinesno-cloud-component-kafka-producer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${\u6700\u65B0\u7248\u672C}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D88\u606F\u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableKafka</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseBootWebApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">BaseBootWebApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D88\u606F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u4F7F\u7528" aria-hidden="true">#</a> \u6D88\u606F\u4F7F\u7528</h2><p>\u53D1\u9001\u6D88\u606F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6DFB\u52A0\u4F9D\u8D56</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">KafkaProducer</span> kafkaProducer <span class="token punctuation">;</span>

kafkaProducer<span class="token punctuation">.</span><span class="token function">blockSendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u606F\u4E3B\u9898&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6D88\u606F\u5185\u5BB9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u624B\u52A8\u63D0\u4EA4\u6D88\u606F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">class</span> <span class="token class-name">AskListener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@KafkaListener</span><span class="token punctuation">(</span>topicPattern <span class="token operator">=</span> <span class="token string">&quot;test-01&quot;</span><span class="token punctuation">,</span> containerFactory <span class="token operator">=</span> <span class="token string">&quot;kafkaManualAckListenerContainerFactory&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> record<span class="token punctuation">,</span> <span class="token annotation punctuation">@Payload</span> <span class="token class-name">String</span> data <span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_MESSAGE_KEY<span class="token punctuation">)</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_PARTITION_ID<span class="token punctuation">)</span> <span class="token keyword">int</span> partition<span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_TOPIC<span class="token punctuation">)</span> <span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_TIMESTAMP<span class="token punctuation">)</span> <span class="token keyword">long</span> ts<span class="token punctuation">,</span>
            <span class="token class-name">Acknowledgment</span> ack<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;data:{} , key:{} , partition:{} , topic:{} , ts:{}&quot;</span> <span class="token punctuation">,</span>data <span class="token punctuation">,</span> key <span class="token punctuation">,</span> partition <span class="token punctuation">,</span> topic <span class="token punctuation">,</span> ts <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> kafkaMessage <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>kafkaMessage<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> message <span class="token operator">=</span> kafkaMessage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;message =topic\uFF1A&quot;</span> <span class="token operator">+</span> topic <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        ack<span class="token punctuation">.</span><span class="token function">acknowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u52A8\u63D0\u4EA4\u6D88\u606F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">class</span> <span class="token class-name">AutoListener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@KafkaListener</span><span class="token punctuation">(</span>topicPattern <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> record<span class="token punctuation">,</span> <span class="token annotation punctuation">@Payload</span> <span class="token class-name">String</span> data <span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_MESSAGE_KEY<span class="token punctuation">)</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_PARTITION_ID<span class="token punctuation">)</span> <span class="token keyword">int</span> partition<span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_TOPIC<span class="token punctuation">)</span> <span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">KafkaHeaders</span><span class="token punctuation">.</span>RECEIVED_TIMESTAMP<span class="token punctuation">)</span> <span class="token keyword">long</span> ts
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;data:{} , key:{} , partition:{} , topic:{} , ts:{}&quot;</span> <span class="token punctuation">,</span>data <span class="token punctuation">,</span> key <span class="token punctuation">,</span> partition <span class="token punctuation">,</span> topic <span class="token punctuation">,</span> ts <span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> kafkaMessage <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>kafkaMessage<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> message <span class="token operator">=</span> kafkaMessage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;message =topic\uFF1A&quot;</span> <span class="token operator">+</span> topic <span class="token operator">+</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","14_\u6D88\u606F\u4F7F\u7528.html.vue"]]);export{k as default};
