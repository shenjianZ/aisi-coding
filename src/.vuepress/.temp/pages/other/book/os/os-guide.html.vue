<template><div><h3 id="_1-3操作系统的发展" tabindex="-1"><a class="header-anchor" href="#_1-3操作系统的发展"><span>1.3操作系统的发展</span></a></h3>
<h4 id="单道批处理系统" tabindex="-1"><a class="header-anchor" href="#单道批处理系统"><span><strong>单道批处理系统</strong></span></a></h4>
<ul>
<li>用户首先将一批作业以脱机IO的方式输入到磁带，在监督程序（<code v-pre>Monitor</code>）控制下<em>按照队列中顺序</em>执行</li>
<li>内存中仅存在一道作业，这批作业逐个连续被处理</li>
<li>作业程序出错就跳过作业的执行</li>
<li>资源利用率低，等待I/O操作完成时，CPU等资源可能处于闲置状态</li>
</ul>
<p>作业独占处理机</p>
<h4 id="多道批处理系统" tabindex="-1"><a class="header-anchor" href="#多道批处理系统"><span><strong>多道批处理系统</strong></span></a></h4>
<ul>
<li>
<p>用户首先将一批作业以脱机IO的方式输入到磁带，在监督程序（<code v-pre>Monitor</code>）控制下<em>按照一定的算法</em>执行</p>
</li>
<li>
<p>处理机的利用率大，系统吞吐量大，支持多用户环境</p>
</li>
<li>
<p>资源竞争可能导致一个作业占用大量CPU时间片、I/O资源</p>
</li>
<li>
<p>多道作业同时运行，时间轮转周期变长，降低整体响应速度</p>
</li>
<li>
<p>面临着资源竞争、作业等待时间、调度开销、死锁和饥饿、系统复杂性以及性能抖动等一系列挑战和缺点</p>
</li>
</ul>
<p>作业独占处理机</p>
<h4 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统"><span><strong>操作系统</strong></span></a></h4>
<blockquote>
<p>它是一种管理计算机软硬件的系统软件，提供了对计算机硬件的抽象和管理，为应用程序提供了简单一致的接口，同时协调和控制计算机系统中的各种资源，以便有效地运行和管理多个任务。</p>
</blockquote>
<p>包括如下功能：</p>
<ul>
<li>处理器管理</li>
<li>内存管理</li>
<li>IO设备管理</li>
<li>文件管理</li>
</ul>
<h4 id="分时系统" tabindex="-1"><a class="header-anchor" href="#分时系统"><span><strong>分时系统</strong></span></a></h4>
<blockquote>
<p>它是一种多用户的操作系统，提供多个终端，用户可独立处理、运行任务，而不会相互干扰，共享处理机时间片，实现多任务的并发进行，提高操作系统效率</p>
</blockquote>
<ul>
<li>多用户支持，提供多个终端进行交互</li>
<li>资源共享，处理器、内存、IO、文件资源共享</li>
<li>时间片轮转控制，通过控制时间片大小、调度算法，实现对系统资源合理分配和调度</li>
<li>资源竞争，处理器、内存、I/O、文件资源竞争</li>
</ul>
<p>实现了 宏观上的并行，微观上的串行</p>
<h4 id="实时系统" tabindex="-1"><a class="header-anchor" href="#实时系统"><span><strong>实时系统</strong></span></a></h4>
<blockquote>
<p>实时系统是指，系统能及时响应，在规定时间内完成处理逻辑，注重时间 这一因素</p>
</blockquote>
<p><strong>实时任务分类</strong></p>
<ol>
<li>周期性实时任务、非周期性实时任务</li>
<li>HRT(硬实时任务，必须满足截止时间要求)、SRT(软实时任务，偶尔错错也无所谓)</li>
</ol>
<h4 id="微机操作系统" tabindex="-1"><a class="header-anchor" href="#微机操作系统"><span>微机操作系统</span></a></h4>
<ul>
<li>单用户单任务系统</li>
<li>单用户多任务系统</li>
<li>多用户多任务系统</li>
</ul>
<h3 id="_1-4操作系统的基本特性" tabindex="-1"><a class="header-anchor" href="#_1-4操作系统的基本特性"><span>1.4操作系统的基本特性</span></a></h3>
<h4 id="并发concurrence" tabindex="-1"><a class="header-anchor" href="#并发concurrence"><span>并发Concurrence</span></a></h4>
<blockquote>
<p>并发是指 ， 两个或多个时间在同一时间间隔内发生</p>
<ul>
<li>
<p>并发是宏观上的并行，微观上的串行</p>
</li>
<li>
<p>与并行相比，并行是两个或多个时间在同一时刻内发生</p>
</li>
</ul>
</blockquote>
<h4 id="共享sharing" tabindex="-1"><a class="header-anchor" href="#共享sharing"><span>共享Sharing</span></a></h4>
<blockquote>
<p>数据库的 “读锁”属于同时访问资源，“写锁”属于互斥共享资源</p>
</blockquote>
<p><strong>互斥共享</strong></p>
<p>一段时间内仅允许一个进程使用资源(处理机、IO、文件等临界资源)</p>
<p><strong>同时访问</strong></p>
<p>一段时间内仅允许多个进程使用资源，但其实微观上是交替进行的</p>
<h4 id="虚拟virtual" tabindex="-1"><a class="header-anchor" href="#虚拟virtual"><span>虚拟Virtual</span></a></h4>
<p><strong>时分复用技术</strong></p>
<p>将资源使用的时间按划分为时间片，为进程分配时间片，用完后让出资源</p>
<p><strong>空分复用技术</strong></p>
<p>将通信信道划分为不同的物理通道或频谱带宽，每个通道独立分配给一个通信实体，这样不同的实体之间就可以并行地进行数据传输，从而提高了系统的通信效率和吞吐量。</p>
<p><strong>Dubbo中的虚拟化</strong></p>
<p>一致性哈希环算法实现负载均衡，提高系统性能、稳定性</p>
<h4 id="异步asynchronism" tabindex="-1"><a class="header-anchor" href="#异步asynchronism"><span>异步Asynchronism</span></a></h4>
<blockquote>
<p>异步指处理多个进程，多进程可以同时运行，互不影响，而不必阻塞等待。</p>
</blockquote>
<p>异步在编程中，可以使用回调函数、Priomise、async/await等机制来处理异步操作，将I/O等待时间利用起来处理其他逻辑，提高程序的效率和并发性能</p>
</div></template>


