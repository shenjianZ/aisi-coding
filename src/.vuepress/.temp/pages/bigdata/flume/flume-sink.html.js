import comp from "D:/GitHubRepository/aisi-coding/src/.vuepress/.temp/pages/bigdata/flume/flume-sink.html.vue"
const data = JSON.parse("{\"path\":\"/bigdata/flume/flume-sink.html\",\"title\":\"Sink组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Sink组件\",\"icon\":\"flume\",\"order\":4,\"tag\":[\"flume\",\"sink\"],\"categories\":[\"flume\",\"sink\"],\"date\":\"2024-04-23T00:00:00.000Z\",\"description\":\"Flume常用Sink File Roll Sink 启动agent HDFS Sink 需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume 在Flume的主机 启动agent 新建终端,在Fluem主机的执行 Kafka Sink 在Flume启动agent 启动一个Kafka消费者 新建终端,在Fluem主机的执行 Avro S...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.shenjianl.cn/aisi-coding/bigdata/flume/flume-sink.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"爱思文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Sink组件\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Flume常用Sink File Roll Sink 启动agent HDFS Sink 需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume 在Flume的主机 启动agent 新建终端,在Fluem主机的执行 Kafka Sink 在Flume启动agent 启动一个Kafka消费者 新建终端,在Fluem主机的执行 Avro S...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-04-23T10:23:15.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"shenjianZ\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"flume\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"sink\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-04-23T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-04-23T10:23:15.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Sink组件\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-04-23T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-04-23T10:23:15.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"shenjianZ\\\",\\\"url\\\":\\\"https://shenjianl.cn\\\",\\\"email\\\":\\\"15202078626@163.com\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"Flume常用Sink\",\"slug\":\"flume常用sink\",\"link\":\"#flume常用sink\",\"children\":[{\"level\":4,\"title\":\"File Roll Sink\",\"slug\":\"file-roll-sink\",\"link\":\"#file-roll-sink\",\"children\":[]},{\"level\":4,\"title\":\"HDFS Sink\",\"slug\":\"hdfs-sink\",\"link\":\"#hdfs-sink\",\"children\":[]},{\"level\":4,\"title\":\"Kafka Sink\",\"slug\":\"kafka-sink\",\"link\":\"#kafka-sink\",\"children\":[]},{\"level\":4,\"title\":\"Avro Sink\",\"slug\":\"avro-sink\",\"link\":\"#avro-sink\",\"children\":[]}]}],\"git\":{\"createdTime\":1713867795000,\"updatedTime\":1713867795000,\"contributors\":[{\"name\":\"shenjianZ\",\"email\":\"shenjianZLT@gmail.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.44,\"words\":366},\"filePathRelative\":\"bigdata/flume/flume-sink.md\",\"localizedDate\":\"2024年4月23日\",\"excerpt\":\"<h3>Flume常用Sink</h3>\\n<h4>File Roll Sink</h4>\\n<div class=\\\"language-properties\\\" data-ext=\\\"properties\\\" data-title=\\\"properties\\\"><pre class=\\\"language-properties\\\"><code><span class=\\\"token key attr-name\\\">agent-aisi.sources</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">source-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks</span> <span class=\\\"token punctuation\\\">=</span>  <span class=\\\"token value attr-value\\\">sink-aisi</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">netcat</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.bind</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">localhost</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">44444</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels.channel-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">memory</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels.channel-aisi.capacity</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">10000</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">100</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">file_roll</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.sink.directory</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">/root/file_rool</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.sink.roolInterval</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">10</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.channels</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.channel</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
