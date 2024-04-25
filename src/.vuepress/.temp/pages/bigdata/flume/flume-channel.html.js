import comp from "D:/GitHubRepository/aisi-coding/src/.vuepress/.temp/pages/bigdata/flume/flume-channel.html.vue"
const data = JSON.parse("{\"path\":\"/bigdata/flume/flume-channel.html\",\"title\":\"Channel组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Channel组件\",\"icon\":\"flume\",\"order\":3,\"category\":\"flume\",\"tag\":[\"flume\",\"channel\"],\"date\":\"2024-04-23T00:00:00.000Z\",\"description\":\"Flume的常用Channel Memory Channel File Channel 运行命令 数据保存在 /root/.flume/file-channel/data这个目录 Kafka Channel 消费数据 生产数据 agent启动 装有flume的linux监听 kafkachannel启动\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.shenjianl.cn/aisi-coding/bigdata/flume/flume-channel.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"爱思文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Channel组件\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Flume的常用Channel Memory Channel File Channel 运行命令 数据保存在 /root/.flume/file-channel/data这个目录 Kafka Channel 消费数据 生产数据 agent启动 装有flume的linux监听 kafkachannel启动\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-04-23T10:23:15.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"shenjianZ\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"flume\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"channel\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-04-23T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-04-23T10:23:15.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Channel组件\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-04-23T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-04-23T10:23:15.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"shenjianZ\\\",\\\"url\\\":\\\"https://shenjianl.cn\\\",\\\"email\\\":\\\"15202078626@163.com\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"Flume的常用Channel\",\"slug\":\"flume的常用channel\",\"link\":\"#flume的常用channel\",\"children\":[{\"level\":4,\"title\":\"Memory Channel\",\"slug\":\"memory-channel\",\"link\":\"#memory-channel\",\"children\":[]},{\"level\":4,\"title\":\"File Channel\",\"slug\":\"file-channel\",\"link\":\"#file-channel\",\"children\":[]},{\"level\":4,\"title\":\"Kafka Channel\",\"slug\":\"kafka-channel\",\"link\":\"#kafka-channel\",\"children\":[]}]}],\"git\":{\"createdTime\":1713867795000,\"updatedTime\":1713867795000,\"contributors\":[{\"name\":\"shenjianZ\",\"email\":\"shenjianZLT@gmail.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.69,\"words\":254},\"filePathRelative\":\"bigdata/flume/flume-channel.md\",\"localizedDate\":\"2024年4月23日\",\"excerpt\":\"<h3>Flume的常用Channel</h3>\\n<h4>Memory Channel</h4>\\n<h4>File Channel</h4>\\n<div class=\\\"language-properties\\\" data-ext=\\\"properties\\\" data-title=\\\"properties\\\"><pre class=\\\"language-properties\\\"><code><span class=\\\"token key attr-name\\\">agent-aisi.sources</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">source-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks</span> <span class=\\\"token punctuation\\\">=</span>  <span class=\\\"token value attr-value\\\">sink-aisi</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">netcat</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.bind</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">localhost</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">44444</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels.channel-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">file</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.channels.channel-aisi.dataDir</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">/root/filedata</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">logger</span>\\n\\n<span class=\\\"token key attr-name\\\">agent-aisi.sources.source-aisi.channels</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n<span class=\\\"token key attr-name\\\">agent-aisi.sinks.sink-aisi.channel</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token value attr-value\\\">channel-aisi</span>\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }
