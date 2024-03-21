<template><div><h2 id="shell脚本编程" tabindex="-1"><a class="header-anchor" href="#shell脚本编程"><span>Shell脚本编程</span></a></h2>
<h3 id="编程语言有哪些" tabindex="-1"><a class="header-anchor" href="#编程语言有哪些"><span>编程语言有哪些？</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p><strong>机器语言</strong>：机器语言是计算机能够直接理解和执行的语言，它由二进制代码组成，以特定的指令和数据格式表示计算机的操作。</p>
</li>
<li>
<p><strong>汇编语言</strong>：汇编语言是一种低级语言，使用助记符，通常用于编写与硬件直接相关的程序，如嵌入式系统、驱动程序等。</p>
</li>
<li>
<p><strong>高级语言</strong>：高级语言是一种人类易读和理解的编程语言，更接近自然语言，常见的高级语言包括 Python、Java、C、C++ 等。</p>
</li>
</ul>
</div>
<p><code v-pre>shell</code>是解释型的高级语言</p>
<p><code v-pre>shell</code>流行的版本：<code v-pre>/bin/bash</code>、<code v-pre>ash、ksh、csh、tcsh、zsh</code></p>
<h4 id="bash特性" tabindex="-1"><a class="header-anchor" href="#bash特性"><span>bash特性</span></a></h4>
<p><strong>命令补全</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bash-completion <span class="token comment">#确保已安装 bash-completion 命令自动补全</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>历史命令</strong></p>
<p>最多存放1000条</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">history</span> <span class="token parameter variable">-n</span> <span class="token comment">#显示最近的n条命令</span>
<span class="token function">history</span> <span class="token parameter variable">-d</span> n <span class="token comment">#删除最近的n条命令</span>
<span class="token operator">!</span>n    <span class="token comment">#执行编号的为 n 的命令</span>
<span class="token operator">!</span>-n    <span class="token comment">#执行倒数编号的为 n 的命令</span>
<span class="token operator">!</span><span class="token operator">!</span>    <span class="token comment">#执行最后一条命令</span>
<span class="token operator">!</span>$    <span class="token comment">#上一条命令的参数 </span>
<span class="token function">cat</span> ~/.bash_history <span class="token comment">#查看历史命令</span>
<span class="token function">history</span> <span class="token parameter variable">-c</span> <span class="token comment">#清空历史命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>别名</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token comment">#查看系统别名</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">h5</span><span class="token operator">=</span><span class="token string">'head -5'</span> <span class="token comment">#添加别名（临时有效）</span>
<span class="token builtin class-name">unalias</span> h5 <span class="token comment">#取消别名</span>
<span class="token builtin class-name">echo</span> <span class="token string">"alias h5='head -5'"</span> <span class="token operator">>></span>  ~/.bashrc  <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span>  ~/.bashrc <span class="token comment">#添加永久别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bash<strong>初始化</strong></p>
<p>环境变量：<code v-pre>/etc/profile</code>、<code v-pre>/etc/bashrc</code>、<code v-pre>~/.profile</code>、<code v-pre>~/.bash_login</code>、<code v-pre>~/.bash_profile</code>、<code v-pre>~/.bash_logout</code></p>
<p><code v-pre>~/.bash_login</code>和	<code v-pre>~/.bash_logout</code></p>
<p><strong>快捷键</strong></p>
<ul>
<li><code v-pre>CTRL+V :</code>光标移动到行首</li>
<li><code v-pre>CTRL+E :</code>光标移动到行首</li>
<li><code v-pre>CTRL+C :</code>强制终止命令</li>
<li><code v-pre>CTRL+L :</code>清屏</li>
<li><code v-pre>CTRL+U :</code>删除、剪切光标前的字符</li>
<li><code v-pre>CTRL+K :</code>删除、剪切光标后的字符</li>
<li><code v-pre>CTRL+Y :</code>粘贴之前删除、剪切的字符</li>
<li><code v-pre>CTRL+R :</code>在历史命令中搜索</li>
<li><code v-pre>CTRL+D :</code>退出当前终端</li>
<li><code v-pre>CTRL+Z :</code>暂停，并放入后台</li>
<li><code v-pre>CTRL+S :</code>暂停屏幕输出</li>
<li><code v-pre>CTRL+Z :</code>恢复屏幕输出</li>
</ul>
<p><strong>前后台作业控制</strong></p>
<p>前后台作业的定义</p>
<ol>
<li><strong>前台作业</strong>：
<ul>
<li>前台作业是指用户启动的任务或程序，在用户交互界面下执行，并且用户可以直接看到任务的执行过程和结果。</li>
<li>前台作业通常需要用户输入，用户交互，或者在图形用户界面（GUI）下进行操作。</li>
<li>在操作系统中，前台作业往往占据了用户的输入设备（如终端或窗口），用户需要等待任务执行完成后才能继续进行其他操作。</li>
</ul>
</li>
<li><strong>后台作业</strong>：
<ul>
<li>后台作业是指用户启动的任务或程序，在后台（即非交互式环境）执行，并且用户不需要直接参与或观察任务的执行过程。</li>
<li>后台作业通常在计算机系统的背景下运行，用户可以继续进行其他操作而不必等待后台任务完成。</li>
<li>在操作系统中，后台作业不会占据用户的输入设备，允许用户同时执行其他任务或操作。</li>
</ul>
</li>
</ol>
<p>总的来说，前台作业和后台作业描述了用户任务或程序在计算机系统中的不同运行方式和交互方式。前台作业需要用户直接参与和观察，而后台作业则在背景下运行，用户不需要直接干预。</p>
<ul>
<li>
<p><code v-pre>commond &amp;</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> sl
sl   <span class="token comment">#前台运行</span>
sl <span class="token operator">&amp;</span> <span class="token comment">#后台运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>CTRL+Z ：</code>暂停前台运行的作业，挂起到后台</p>
</li>
<li>
<p><code v-pre>jobs ：</code>列出运行、停止的作业，显示作业的编号、作业状态（running 或 stopped）、作业所在的进程组 ID、作业的命令</p>
</li>
<li>
<p><code v-pre>jobs -l ：</code>用于列出当前 shell 中所有作业的详细信息，包括作业编号、进程 ID（PID）、作业状态</p>
</li>
<li>
<p><code v-pre>fg %n :</code>后台作业切换到前台运行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">fg</span> %1 <span class="token comment">#将作业编号为 1 的后台作业切换到前台运行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>bg %n :</code>一个停止的作业放到后台继续运行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">bg</span> %2 <span class="token comment">#将作业编号为 2 的停止作业放到后台继续运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>kill %n ：</code>向一个正在运行的作业发送信号，以结束或者改变它的状态
<code v-pre>kill</code> 命令默认发送的是终止信号（<code v-pre>SIGTERM</code>，信号编号为15）
<code v-pre>kill -9 %n</code> 可以发送强制终止信号（<code v-pre>SIGKILL</code>，信号编号为9），用于强制结束进程。</p>
</li>
</ul>
<h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h3>
<p>硬件设备和文件描述符</p>
<table>
<thead>
<tr>
<th>文件描述符</th>
<th>文件名</th>
<th>类型</th>
<th>硬件</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><code v-pre>stdin</code></td>
<td>标准输入文件</td>
<td>键盘</td>
</tr>
<tr>
<td>1</td>
<td><code v-pre>stdout</code></td>
<td>标准输出文件</td>
<td>显示器</td>
</tr>
<tr>
<td>1</td>
<td><code v-pre>stderr</code></td>
<td>标准错误输出文件</td>
<td>显示器</td>
</tr>
</tbody>
</table>
<h4 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向"><span><strong>输出重定向</strong></span></a></h4>
<ul>
<li>
<p>标准输出重定向</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span> <span class="token function">file</span> 等价于   <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token function">file</span>
<span class="token builtin class-name">command</span> <span class="token operator">>></span> <span class="token function">file</span> 等价于  <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">1</span>>></span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>标准错误输出重定向</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token function">file</span>
<span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>>></span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将标准错误重定向到标准输出</p>
<div class="language-bash' line-numbers-mode" data-ext="bash'" data-title="bash'"><pre v-pre class="language-bash'"><code>command &gt;file 2&gt;&amp;1
command &gt;&gt;file 2&gt;&amp;1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>标准错误和标准输出重定向</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&amp;></span>file
<span class="token builtin class-name">command</span> <span class="token operator">></span>file <span class="token operator"><span class="token file-descriptor important">2</span>>></span>file
<span class="token builtin class-name">command</span> <span class="token operator">></span>file <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将标准错误和标准输出重定向到<code v-pre>/dev/null</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&amp;></span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash' line-numbers-mode" data-ext="bash'" data-title="bash'"><pre v-pre class="language-bash'"><code>command &gt;/dev/null 2&gt;&amp;1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="输入重定向" tabindex="-1"><a class="header-anchor" href="#输入重定向"><span><strong>输入重定向</strong></span></a></h4>
<ul>
<li>输入</li>
<li>作为分界符</li>
</ul>
<p><strong>管道</strong></p>
<p>将一个命令的输出传递给另一个命令的输入</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>command1 <span class="token operator">|</span> command2 <span class="token comment">#将 command1 的输出作为 command2 的输入进行处理。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>| tee</strong></p>
<p>将命令的输出同时输出到屏幕上和指定的文件中</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">tee</span> file.txt <span class="token comment">#将 command 的输出同时输出到屏幕上和文件 file.txt 中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命令排序" tabindex="-1"><a class="header-anchor" href="#命令排序"><span>命令排序</span></a></h3>
<p><strong><code v-pre>&amp;&amp;</code> 和 <code v-pre>||</code> 控制命令执行顺序和逻辑执行</strong></p>
<p><code v-pre>&amp;&amp;</code>：表示逻辑与（AND）。当使用 <code v-pre>&amp;&amp;</code> 连接两个命令时，只有前一个命令成功执行（返回退出码为0）时，才会执行后一个命令</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>command1 &amp;&amp; command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令表示当 <code v-pre>command1</code> 成功执行后（返回退出码为0），才会执行 <code v-pre>command2</code>。</p>
<p><code v-pre>||</code>：表示逻辑或（OR）。当使用 <code v-pre>||</code> 连接两个命令时，只要前一个命令执行失败（返回退出码非0），就会执行后一个命令</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>command1 || command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令表示当 <code v-pre>command1</code> 执行失败后（返回退出码非0），才会执行 <code v-pre>command2</code>。</p>
<p><strong><code v-pre>;</code>用于分隔</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>command1 ; command2 ; command3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令表示先执行 <code v-pre>command1</code>，然后执行 <code v-pre>command2</code>，最后执行 <code v-pre>command3</code>，无论前面的命令是否成功执行。</p>
<h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3>
<ul>
<li><code v-pre>* :</code>匹配任意多个字符</li>
<li><code v-pre>? :</code>匹配任意单个字符</li>
<li><code v-pre>[abc] :</code>匹配a，b，c中任意单个字符</li>
<li><code v-pre>[!abc] :</code>匹配排除a，b，c中任意单个字符</li>
<li><code v-pre>[a-e] :</code>匹配a-e的单个字符</li>
<li><code v-pre>{s1,s2} :</code>匹配s1，s2中的任意一个字符串</li>
</ul>
<h3 id="shell脚本调试" tabindex="-1"><a class="header-anchor" href="#shell脚本调试"><span>shell脚本调试</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>注意脚本执行调试时，<code v-pre>bash 脚本名称</code>无需执行权限，但<code v-pre>./脚本名称</code>、<code v-pre>脚本全路径</code>执行需要<code v-pre>chmod</code>赋予执行权限</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 定义一个函数</span>
<span class="token keyword">function</span> <span class="token function-name function">print_message</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"Printing message..."</span>
<span class="token punctuation">}</span>

<span class="token comment"># 主程序</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Starting script..."</span>
print_message
<span class="token builtin class-name">echo</span> <span class="token string">"Script finished."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>-v</code>显示脚本执行过程中的每一行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-v</span> t.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>启用调试模式，显示脚本执行过程中的每一行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-x</span> t.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>检查脚本语法是否正确，但不执行脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-n</span> t.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="作业命令" tabindex="-1"><a class="header-anchor" href="#作业命令"><span>作业命令</span></a></h3>
<p><strong><code v-pre>nohup</code></strong></p>
<p><code v-pre>nohup</code> 命令用于在后台运行命令，并且可以忽略挂断信号，即使用户退出登录或者关闭终端，被启动的进程也会继续执行。</p>
<ul>
<li><code v-pre>command</code> 是要执行的命令。</li>
<li><code v-pre>[args]</code> 是命令的参数。</li>
<li><code v-pre>&amp;</code> 用于将命令放入后台执行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">nohup</span> <span class="token builtin class-name">command</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>nohup</code> 命令会将命令的输出默认重定向到一个名为 <code v-pre>nohup.out</code> 的文件中。如果想要自定义输出文件的名称和位置，可以使用重定向符号 <code v-pre>&gt;</code>，例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">nohup</span> ./mytask.sh <span class="token operator">></span> custom_output.log <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不希望在当前目录生成该文件，可以将输出重定向到其他地方，或者在命令后添加 <code v-pre>&gt;/dev/null 2&gt;&amp;1</code>，将标准输出和标准错误都重定向到 <code v-pre>/dev/null</code>，即丢弃输出。</p>
<p><strong><code v-pre>screan</code></strong></p>
<p><code v-pre>screen</code> 是一个用于在Unix和类Unix系统上创建多个虚拟终端的命令行工具。它允许你在单个SSH会话或终端窗口中创建多个窗口，并在这些窗口之间轻松切换，同时还可以在后台运行命令</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>yum install -y screan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>创建会话且立即连接</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-S</span> session_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建会话且稍后连接</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-dmS</span> session_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>连接会话</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-r</span> session_id
<span class="token function">screen</span> <span class="token parameter variable">-r</span> session_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关闭会话 <code v-pre>CTRL+D</code> 、<code v-pre>exit</code></p>
</li>
<li>
<p>查看会话</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="shell变量" tabindex="-1"><a class="header-anchor" href="#shell变量"><span>shell变量</span></a></h3>
<h4 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型"><span>变量类型</span></a></h4>
<p><strong>自定义变量</strong></p>
<p>自定义变量仅在当前<code v-pre>shell</code>有效，<code v-pre>unset</code>可取消变量</p>
<p><strong>环境变量</strong></p>
<p><code v-pre>eport</code></p>
<p><strong>位置变量</strong></p>
<p>位置变量（Positional Parameters）在Shell脚本中是非常重要的概念，它们用于传递参数给脚本。</p>
<p>在Bash脚本中，位置变量由 <code v-pre>$1</code>、<code v-pre>$2</code>、<code v-pre>$3</code> 等表示，依次代表传递给脚本的第一个、第二个、第三个参数，以此类推。<code v-pre>$0</code> 代表脚本本身的名称。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"第一个参数是：<span class="token variable">$1</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"第二个参数是：<span class="token variable">$2</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本本身的名称是：<span class="token variable">$0</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将这个脚本保存为 <code v-pre>example.sh</code>，并在命令行中执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> example.sh shenjianZ <span class="token number">11</span> pp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>预定义变量</strong></p>
<p>预定义变量是指在Shell脚本中预先定义好的一些特殊变量，它们具有特定的含义和用途，可以在脚本中直接使用。</p>
<p>在Bash脚本中，一些常见的预定义变量包括：</p>
<ol>
<li><strong>$0</strong>：代表脚本本身的名称。</li>
<li><strong>$1, $2, $3, ...</strong>：代表传递给脚本的位置参数，分别表示第一个、第二个、第三个参数，以此类推。</li>
<li><strong>$#</strong>：代表传递给脚本的参数个数。</li>
<li><strong>$@</strong>：代表传递给脚本的所有参数，每个参数视为单独的引号分隔的字符串。</li>
<li><strong>$?</strong>：代表上一个命令的退出状态码（返回值）。</li>
<li><strong>$$</strong>：代表当前Shell进程的PID（进程ID）。</li>
<li><strong>$!</strong>：代表上一个后台命令的PID。</li>
<li>**<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∗</mo><mo>∗</mo><mtext>：代表当前</mtext><mi>S</mi><mi>h</mi><mi>e</mi><mi>l</mi><mi>l</mi><mtext>进程的</mtext><mi>P</mi><mi>I</mi><mi>D</mi><mtext>（与</mtext></mrow><annotation encoding="application/x-tex">**：代表当前Shell进程的PID（与</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4653em;"></span><span class="mord">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord cjk_fallback">：代表当前</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">h</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span><span class="mord cjk_fallback">进程的</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord cjk_fallback">（与</span></span></span></span>$相同）。</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"脚本名称：<span class="token variable">$0</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"传递给脚本的参数个数：<span class="token variable">$#</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"传递给脚本的所有参数：<span class="token variable">$@</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"传递给脚本的第一个参数：<span class="token variable">$1</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"传递给脚本的第二个参数：<span class="token variable">$2</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"上一个命令的退出状态码：<span class="token variable">$?</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"当前Shell进程的PID：<span class="token variable">$$</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引用变量</strong></p>
<ul>
<li><code v-pre>' '</code>是强引用，用于保留字符串中特殊字符的含义，或者避免变量替换。</li>
<li><code v-pre>&quot; &quot;</code>是弱引用，用于允许变量替换和扩展。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">"world"</span>

<span class="token builtin class-name">echo</span> <span class="token string">'Hello $var'</span>  <span class="token comment"># 输出：Hello $var</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Hello <span class="token variable">$var</span>"</span>  <span class="token comment"># 输出：Hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>反引号 ` ` 在Shell中用于执行命令，并将其结果赋给变量。
在现代Shell脚本中逐渐被 <code v-pre>$()</code> 替代，因为 <code v-pre>$()</code> 更加直观和易读，而且更容易进行嵌套。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">current_date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"当前日期是：<span class="token variable">$current_date</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="变量运算" tabindex="-1"><a class="header-anchor" href="#变量运算"><span>变量运算</span></a></h4>
<ol>
<li>
<p><strong>使用 <code v-pre>expr</code> 进行运算</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token number">10</span> + <span class="token number">5</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"10 + 5 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token number">20</span> - <span class="token number">8</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"20 - 8 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token number">6</span> <span class="token punctuation">\</span>* <span class="token number">4</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"6 * 4 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token number">24</span> / <span class="token number">3</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"24 / 3 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> <span class="token number">15</span> % <span class="token number">4</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"15 % 4 = <span class="token variable">$result</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用 <code v-pre>$((...))</code> 进行算术运算</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"10 + 5 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">20</span> <span class="token operator">-</span> <span class="token number">8</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"20 - 8 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">6</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"6 * 4 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">24</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"24 / 3 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">15</span> <span class="token operator">%</span> <span class="token number">4</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"15 % 4 = <span class="token variable">$result</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用<code v-pre>[ ]</code>进行运算</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">+</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"10 + 20 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">-</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"10 - 20 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">*</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"10 * 20 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$b <span class="token operator">/</span> $a<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"20 / 10 = <span class="token variable">$result</span>"</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$b <span class="token operator">%</span> $a<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"20 % 10 = <span class="token variable">$result</span>"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用 <code v-pre>bc</code> 进行高精度运算</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token operator">!</span>/bin/bash

<span class="token comment"># 使用 `bc` 进行高精度运算，注意小数点的处理</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">"scale=2; 5 / 3"</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"5 / 3 = <span class="token variable">$result</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="变量的内容删除" tabindex="-1"><a class="header-anchor" href="#变量的内容删除"><span>变量的内容删除</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">"www.shenjianl.cn"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>url}</span> <span class="token comment"># 输出url的长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>url}</span> <span class="token comment"># 输出url的值</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${url<span class="token operator">##</span>*.}</span> <span class="token comment"># 从前往后，贪婪匹配，输出 cn</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${url<span class="token operator">#</span>*.}</span> <span class="token comment"># 从前往后，最短匹配，输出 shenjianl.cn</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${url<span class="token operator">%%</span>.*}</span> <span class="token comment"># 从后往前，贪婪匹配，输出 www</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${url<span class="token operator">%</span>.*}</span> <span class="token comment"># 从后往前，最短匹配，输出 www.shenjianl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="索引的切片" tabindex="-1"><a class="header-anchor" href="#索引的切片"><span>索引的切片</span></a></h4>
<p><code v-pre>${}</code> 来进行变量的索引和切片操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 定义一个变量</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">"www.shenjianl.cn"</span>

<span class="token comment"># 获取变量中的前五个字符</span>
<span class="token builtin class-name">echo</span> <span class="token string">"前五个字符：<span class="token variable">${url<span class="token operator">:</span>0<span class="token operator">:</span>5}</span>"</span>

<span class="token comment"># 获取变量中的第五个字符到最后一个字符</span>
<span class="token builtin class-name">echo</span> <span class="token string">"第五个字符到最后一个字符：<span class="token variable">${url<span class="token operator">:</span>4}</span>"</span>

<span class="token comment"># 获取变量中的第六个字符到倒数第二个字符</span>
<span class="token builtin class-name">echo</span> <span class="token string">"第六个字符到倒数第二个字符：<span class="token variable">${url<span class="token operator">:</span>5<span class="token operator">:-</span>1}</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量内容的替换</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 定义一个变量</span>
<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">"www.shenjianl.cn"</span>

<span class="token comment"># 将第一个匹配到的字符串 www 替换为 blog</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${url<span class="token operator">/</span>www<span class="token operator">/</span>blog}</span>"</span>  <span class="token comment"># 输出 blog.shenjianl.cn</span>

<span class="token comment"># 将所有匹配到的字符串 n 替换为 X,贪婪匹配</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${url<span class="token operator">/</span><span class="token operator">/</span>n<span class="token operator">/</span>X}</span>"</span>  <span class="token comment"># 输出 www.sheXJiaol.cX</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h4>
<p>定义函数</p>
<p>常见的方式：</p>
<ol>
<li>
<p>使用 <code v-pre>function</code> 关键字：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">function_name</span> <span class="token punctuation">{</span>
    <span class="token comment"># 函数体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>直接使用函数名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>function_name<span class="token punctuation">{</span>
    <span class="token comment"># 函数体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p><code v-pre>source</code> 命令来加载另一个脚本文件，并使其中定义的函数在当前脚本中可用。</p>
<p><code v-pre>return</code>返回函数结果，使用<code v-pre>$?</code>接受返回值</p>
<p>在Shell脚本中，全局变量和局部变量的概念与其他编程语言中的类似，但是Shell中的作用域和变量的生命周期可能略有不同。</p>
<ul>
<li><strong>全局变量</strong>：</li>
<li><strong>局部变量</strong>：</li>
</ul>
<h4 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h4>
<p><strong>for循环</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">variable</span> <span class="token keyword">in</span> list
<span class="token keyword">do</span>
    <span class="token comment"># 在这里执行循环体中的命令，可以使用 $variable 引用当前迭代的元素</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while循环</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> 条件 <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token comment"># 在这里执行循环体中的命令</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>until语句</strong></p>
<p><code v-pre>until</code>循环会在条件为假时执行循环体中的命令，直到条件为真为止</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> 条件 <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token comment"># 在这里执行循环体中的命令</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>break</code>：用于终止循环并跳出循环体。</li>
<li><code v-pre>continue</code>：用于跳过循环体中的剩余部分，并继续下一次循环。</li>
<li><code v-pre>return</code>：用于从函数中返回结果。</li>
<li><code v-pre>exit</code>：用于终止整个Shell脚本的执行，并返回一个指定的退出码给调用者。通常，0表示成功，非0表示出错。</li>
<li><code v-pre>trap</code>：用于捕获信号并执行相应的命令。在循环中使用<code v-pre>trap</code>命令可以让你在接收到指定信号时执行某些操作，比如清理工作或者终止循环。</li>
</ol>
<h3 id="shell条件结构" tabindex="-1"><a class="header-anchor" href="#shell条件结构"><span>shell条件结构</span></a></h3>
<h4 id="符号说明" tabindex="-1"><a class="header-anchor" href="#符号说明"><span><strong>符号说明</strong></span></a></h4>
<ul>
<li><code v-pre>(())</code>	数值比较</li>
<li><code v-pre>[[]]</code>    条件测试，支持正则</li>
<li><code v-pre>$(())</code>   整数运算</li>
<li><code v-pre>$[]</code>      整数运算，不推荐</li>
<li><code v-pre>$()</code>      命令替换，先执行里面的命令，标准输出替换</li>
<li><code v-pre>${}</code>      shell变量的原型，限定变量的范围</li>
<li><code v-pre>[]</code>        条件测试，不推荐</li>
<li><code v-pre>()</code>        子shell执行</li>
<li><code v-pre>{}</code>        当前shell执行</li>
</ul>
<p><strong>测试表达式</strong></p>
<ul>
<li><code v-pre>-d</code> 文件存在且为目录为真</li>
<li><code v-pre>-f </code>文件存在且为普通文件为真</li>
<li><code v-pre>-e</code> 文件存在为真</li>
<li><code v-pre>-s</code> 文件存在且文件大小不为0为真</li>
<li><code v-pre>-r</code> 文件存在且可读为真</li>
<li><code v-pre>-w</code>文件存在且可写为真</li>
<li><code v-pre>-x</code> 文件存在且可执行为真</li>
<li><code v-pre>-L</code> 文件存在且为链接文件为真</li>
<li><code v-pre>f1 -nt f2</code> 文件f1比文件f2新为真</li>
<li><code v-pre>f1 -ot f2</code> 文件f1比文件f2旧为真</li>
</ul>
<p><strong>字符串测试表达式</strong></p>
<ul>
<li><code v-pre>-n str</code>  长度为0则为真</li>
<li><code v-pre>-n str</code>  长度不为0则为真</li>
<li><code v-pre>!=</code>、<code v-pre>==</code>、<code v-pre>&lt;</code>、<code v-pre>&gt;</code></li>
</ul>
<p><strong>整数操作符</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">在[ ]和test中使用</th>
<th style="text-align:center">在[[ ]]和(( ))中使用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-eq</td>
<td style="text-align:center">==、=</td>
</tr>
<tr>
<td style="text-align:center">-nq</td>
<td style="text-align:center">!=</td>
</tr>
<tr>
<td style="text-align:center">-gt</td>
<td style="text-align:center">&gt;</td>
</tr>
<tr>
<td style="text-align:center">-gt</td>
<td style="text-align:center">&gt;=</td>
</tr>
<tr>
<td style="text-align:center">-lt</td>
<td style="text-align:center">&lt;</td>
</tr>
<tr>
<td style="text-align:center">-le</td>
<td style="text-align:center">&lt;=</td>
</tr>
</tbody>
</table>
<h4 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 在条件为真时执行的命令</span>
<span class="token keyword">else</span>
    <span class="token comment"># 在条件为假时执行的命令</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>case语句</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token keyword">case</span> 变量 <span class="token keyword">in</span>
    模式1<span class="token punctuation">)</span>
        <span class="token comment"># 当变量匹配模式1时执行的命令</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    模式2<span class="token punctuation">)</span>
        <span class="token comment"># 当变量匹配模式2时执行的命令</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">..</span>.
    *<span class="token punctuation">)</span>
        <span class="token comment"># 当变量匹配所有模式都不匹配时执行的命令</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>逻辑操作符</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">在[ ]和test中使用</th>
<th style="text-align:center">在[[ ]]和(( ))中使用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-a</td>
<td style="text-align:center">&amp;&amp;</td>
</tr>
<tr>
<td style="text-align:center">-o</td>
<td style="text-align:center">||</td>
</tr>
<tr>
<td style="text-align:center">!</td>
<td style="text-align:center">!</td>
</tr>
</tbody>
</table>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3>
<h4 id="数组的定义" tabindex="-1"><a class="header-anchor" href="#数组的定义"><span><strong>数组的定义</strong></span></a></h4>
<p>在Shell脚本中，可以使用多种方式来定义数组。下面是几种常见的数组定义方法：</p>
<p><strong>使用空格分隔的值列表</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span>value1 value2 value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用索引逐个赋值</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>value1
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>value2
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>value3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用<code v-pre>declare</code>声明数组</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span>value1 value2 value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> arr
<span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span>value1 value2 value3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式通过 <code v-pre>declare -a</code> 声明数组，然后用 <code v-pre>()</code> 或者逐个赋值的方式定义数组元素。</p>
<p><strong>使用<code v-pre>read</code>命令从标准输入读取数组</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> arr <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">"value1 value2 value3"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式使用 <code v-pre>read</code> 命令从标准输入读取一行，并将其按照空格分隔后赋值给数组。</p>
<p><code v-pre>${arr[*]} </code>和<code v-pre>${arr[@]}</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"apple"</span> <span class="token string">"banana split"</span> <span class="token string">"orange"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${arr<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token keyword">do</span>

    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$item</span>"</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">"------"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$item</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>apple banana <span class="token function">split</span> orange
------
apple
banana <span class="token function">split</span>
orange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，<code v-pre>${arr[*]}</code> 将整个数组作为一个元素，因此 <code v-pre>for</code> 循环只会执行一次，而 <code v-pre>${arr[@]}</code> 将每个数组元素作为一个独立的参数，因此 <code v-pre>for</code> 循环会遍历数组中的每个元素。</p>
<p>因此，尽管在大多数情况下它们的行为是相同的，但在使用循环遍历数组时，它们之间的差别可能会变得明显。</p>
<p>数组中的常用变量</p>
<ul>
<li>
<p><code v-pre>${arr[*]} </code>  数组所有元素</p>
</li>
<li>
<p><code v-pre>${arr[@]} </code>  数组所有元素</p>
</li>
<li>
<p><code v-pre>${arr[INDEX]} </code>   指定索引的数组元素</p>
</li>
<li>
<p><code v-pre>${#arr[*]} </code> 数组长度</p>
</li>
<li>
<p><code v-pre>${#arr[@]}</code> 数组长度</p>
</li>
<li>
<p><code v-pre>${#arr}</code>   下标为0 的字符个数</p>
</li>
</ul>
<h4 id="数组的切片" tabindex="-1"><a class="header-anchor" href="#数组的切片"><span>数组的切片</span></a></h4>
<p>假设我们有一个数组如下：</p>
<p><strong>从索引N开始截取到数组末尾</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token variable">${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span>N}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li><strong>截取从索引N开始的M个元素</strong>：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token variable">${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span>N<span class="token operator">:</span>M}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li><strong>截取数组的最后M个元素</strong>：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token variable">${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span> -M}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>${arr[@]}` 表示展开数组的所有元素。这些数组切片操作仅适用于 Bash 版本 4 及以上。</p>
<h4 id="数组的替换" tabindex="-1"><a class="header-anchor" href="#数组的替换"><span>数组的替换</span></a></h4>
</div></template>


