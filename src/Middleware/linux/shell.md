---
title: shell学习
date: 2024-03-16
category: Linux
tag:
  - shell
  - linux
timeline: true
star: true
---

## Shell脚本编程

### 编程语言有哪些？

> [!tip]
>
> - **机器语言**：机器语言是计算机能够直接理解和执行的语言，它由二进制代码组成，以特定的指令和数据格式表示计算机的操作。
>
> - **汇编语言**：汇编语言是一种低级语言，使用助记符，通常用于编写与硬件直接相关的程序，如嵌入式系统、驱动程序等。
> - **高级语言**：高级语言是一种人类易读和理解的编程语言，更接近自然语言，常见的高级语言包括 Python、Java、C、C++ 等。

`shell`是解释型的高级语言

`shell`流行的版本：`/bin/bash`、`ash、ksh、csh、tcsh、zsh`

#### bash特性

**命令补全**

```bash
yum install -y bash-completion #确保已安装 bash-completion 命令自动补全
```

**历史命令**

最多存放1000条

```bash
history -n #显示最近的n条命令
history -d n #删除最近的n条命令
!n    #执行编号的为 n 的命令
!-n    #执行倒数编号的为 n 的命令
!!    #执行最后一条命令
!$    #上一条命令的参数 
cat ~/.bash_history #查看历史命令
history -c #清空历史命令
```

**别名**

```bash
alias #查看系统别名
alias h5='head -5' #添加别名（临时有效）
unalias h5 #取消别名
echo "alias h5='head -5'" >>  ~/.bashrc  && source  ~/.bashrc #添加永久别名
```

bash**初始化**

环境变量：`/etc/profile`、`/etc/bashrc`、`~/.profile`、`~/.bash_login`、`~/.bash_profile`、`~/.bash_logout`

`~/.bash_login`和	`~/.bash_logout`

**快捷键**

- `CTRL+V :`光标移动到行首
- `CTRL+E :`光标移动到行首
- `CTRL+C :`强制终止命令
- `CTRL+L :`清屏
- `CTRL+U :`删除、剪切光标前的字符
- `CTRL+K :`删除、剪切光标后的字符
- `CTRL+Y :`粘贴之前删除、剪切的字符
- `CTRL+R :`在历史命令中搜索
- `CTRL+D :`退出当前终端
- `CTRL+Z :`暂停，并放入后台
- `CTRL+S :`暂停屏幕输出
- `CTRL+Z :`恢复屏幕输出

**前后台作业控制**

前后台作业的定义

1. **前台作业**：
    - 前台作业是指用户启动的任务或程序，在用户交互界面下执行，并且用户可以直接看到任务的执行过程和结果。
    - 前台作业通常需要用户输入，用户交互，或者在图形用户界面（GUI）下进行操作。
    - 在操作系统中，前台作业往往占据了用户的输入设备（如终端或窗口），用户需要等待任务执行完成后才能继续进行其他操作。
2. **后台作业**：
    - 后台作业是指用户启动的任务或程序，在后台（即非交互式环境）执行，并且用户不需要直接参与或观察任务的执行过程。
    - 后台作业通常在计算机系统的背景下运行，用户可以继续进行其他操作而不必等待后台任务完成。
    - 在操作系统中，后台作业不会占据用户的输入设备，允许用户同时执行其他任务或操作。

总的来说，前台作业和后台作业描述了用户任务或程序在计算机系统中的不同运行方式和交互方式。前台作业需要用户直接参与和观察，而后台作业则在背景下运行，用户不需要直接干预。

- `commond &`

  ```bash
  yum install -y sl
  sl   #前台运行
  sl & #后台运行
  ```

- `CTRL+Z ：`暂停前台运行的作业，挂起到后台

- `jobs ：`列出运行、停止的作业，显示作业的编号、作业状态（running 或 stopped）、作业所在的进程组 ID、作业的命令

- `jobs -l ：`用于列出当前 shell 中所有作业的详细信息，包括作业编号、进程 ID（PID）、作业状态

- `fg %n :`后台作业切换到前台运行。

  ```bash
  fg %1 #将作业编号为 1 的后台作业切换到前台运行。
  ```

- `bg %n :`一个停止的作业放到后台继续运行。

  ```bash
  bg %2 #将作业编号为 2 的停止作业放到后台继续运行
  ```

- `kill %n ：`向一个正在运行的作业发送信号，以结束或者改变它的状态
  `kill` 命令默认发送的是终止信号（`SIGTERM`，信号编号为15）
  `kill -9 %n` 可以发送强制终止信号（`SIGKILL`，信号编号为9），用于强制结束进程。

### 重定向



硬件设备和文件描述符

| 文件描述符 | 文件名   | 类型             | 硬件   |
| ---------- | -------- | ---------------- | ------ |
| 0          | `stdin`  | 标准输入文件     | 键盘   |
| 1          | `stdout` | 标准输出文件     | 显示器 |
| 1          | `stderr` | 标准错误输出文件 | 显示器 |

#### **输出重定向**

- 标准输出重定向

  ```bash
  command > file 等价于   command 1> file
  command >> file 等价于  command 1>> file
  ```

- 标准错误输出重定向

  ```bash
  command 2> file
  command 2>> file
  ```

- 将标准错误重定向到标准输出

  ```bash'
  command >file 2>&1
  command >>file 2>&1
  ```

- 标准错误和标准输出重定向

  ```bash
  command &>file
  command >file 2>>file
  command >file 2>&1
  ```

- 将标准错误和标准输出重定向到`/dev/null`

  ```bash
  command &>/dev/null
  ```

  ```bash
  command >/dev/null 2>/dev/null 
  ```

  ```bash'
  command >/dev/null 2>&1
  ```

#### **输入重定向**

- 输入
- 作为分界符

**管道**

将一个命令的输出传递给另一个命令的输入

```bash
command1 | command2 #将 command1 的输出作为 command2 的输入进行处理。
```

**| tee**

将命令的输出同时输出到屏幕上和指定的文件中

```bash
command | tee file.txt #将 command 的输出同时输出到屏幕上和文件 file.txt 中。
```

### 命令排序

**`&&` 和 `||` 控制命令执行顺序和逻辑执行**

`&&`：表示逻辑与（AND）。当使用 `&&` 连接两个命令时，只有前一个命令成功执行（返回退出码为0）时，才会执行后一个命令

```
command1 && command2
```

这个命令表示当 `command1` 成功执行后（返回退出码为0），才会执行 `command2`。

`||`：表示逻辑或（OR）。当使用 `||` 连接两个命令时，只要前一个命令执行失败（返回退出码非0），就会执行后一个命令

```
command1 || command2
```

这个命令表示当 `command1` 执行失败后（返回退出码非0），才会执行 `command2`。

**`;`用于分隔**

```
command1 ; command2 ; command3
```

这个命令表示先执行 `command1`，然后执行 `command2`，最后执行 `command3`，无论前面的命令是否成功执行。

### 通配符

- `* :`匹配任意多个字符
- `? :`匹配任意单个字符
- `[abc] :`匹配a，b，c中任意单个字符
- `[!abc] :`匹配排除a，b，c中任意单个字符
- `[a-e] :`匹配a-e的单个字符
- `{s1,s2} :`匹配s1，s2中的任意一个字符串

### shell脚本调试

>[!tip]
>
>注意脚本执行调试时，`bash 脚本名称`无需执行权限，但`./脚本名称`、`脚本全路径`执行需要`chmod`赋予执行权限

```bash
#!/bin/bash

# 定义一个函数
function print_message {
    echo "Printing message..."
}

# 主程序
echo "Starting script..."
print_message
echo "Script finished."
```

- `-v`显示脚本执行过程中的每一行命令

  ```bash
  bash -v t.sh
  ```

- 启用调试模式，显示脚本执行过程中的每一行命令

  ```bash
  bash -x t.sh
  ```

- 检查脚本语法是否正确，但不执行脚本

  ```bash
  bash -n t.sh
  ```

### 作业命令

**`nohup`**

`nohup` 命令用于在后台运行命令，并且可以忽略挂断信号，即使用户退出登录或者关闭终端，被启动的进程也会继续执行。

- `command` 是要执行的命令。
- `[args]` 是命令的参数。
- `&` 用于将命令放入后台执行

```bash
nohup command [args] &
```

`nohup` 命令会将命令的输出默认重定向到一个名为 `nohup.out` 的文件中。如果想要自定义输出文件的名称和位置，可以使用重定向符号 `>`，例如：

```bash
nohup ./mytask.sh > custom_output.log &
```

如果不希望在当前目录生成该文件，可以将输出重定向到其他地方，或者在命令后添加 `>/dev/null 2>&1`，将标准输出和标准错误都重定向到 `/dev/null`，即丢弃输出。

**`screan`**

`screen` 是一个用于在Unix和类Unix系统上创建多个虚拟终端的命令行工具。它允许你在单个SSH会话或终端窗口中创建多个窗口，并在这些窗口之间轻松切换，同时还可以在后台运行命令

```
yum install -y screan
```

- 创建会话且立即连接

  ```bash
  screen -S session_name
  ```

- 创建会话且稍后连接

  ```bash
  screen -dmS session_name
  ```

- 连接会话

  ```bash
  screen -r session_id
  screen -r session_name
  ```

- 关闭会话 `CTRL+D` 、`exit`

- 查看会话

  ```bash
  screen -ls
  ```

### shell变量

#### 变量类型

**自定义变量**

自定义变量仅在当前`shell`有效，`unset`可取消变量

**环境变量**

`eport`

**位置变量**

位置变量（Positional Parameters）在Shell脚本中是非常重要的概念，它们用于传递参数给脚本。

在Bash脚本中，位置变量由 `$1`、`$2`、`$3` 等表示，依次代表传递给脚本的第一个、第二个、第三个参数，以此类推。`$0` 代表脚本本身的名称。

```bash
#!/bin/bash

echo "第一个参数是：$1"
echo "第二个参数是：$2"
echo "脚本本身的名称是：$0"
```

如果将这个脚本保存为 `example.sh`，并在命令行中执行：

```bash
bash example.sh shenjianZ 11 pp
```

**预定义变量**

预定义变量是指在Shell脚本中预先定义好的一些特殊变量，它们具有特定的含义和用途，可以在脚本中直接使用。

在Bash脚本中，一些常见的预定义变量包括：

1. **$0**：代表脚本本身的名称。
2. **$1, $2, $3, ...**：代表传递给脚本的位置参数，分别表示第一个、第二个、第三个参数，以此类推。
3. **$#**：代表传递给脚本的参数个数。
4. **$@**：代表传递给脚本的所有参数，每个参数视为单独的引号分隔的字符串。
5. **$?**：代表上一个命令的退出状态码（返回值）。
6. **$$**：代表当前Shell进程的PID（进程ID）。
7. **$!**：代表上一个后台命令的PID。
8. **$**：代表当前Shell进程的PID（与$$相同）。

```bash
#!/bin/bash

echo "脚本名称：$0"
echo "传递给脚本的参数个数：$#"
echo "传递给脚本的所有参数：$@"
echo "传递给脚本的第一个参数：$1"
echo "传递给脚本的第二个参数：$2"
echo "上一个命令的退出状态码：$?"
echo "当前Shell进程的PID：$$"
```

**引用变量**

- `' '`是强引用，用于保留字符串中特殊字符的含义，或者避免变量替换。
- `" "`是弱引用，用于允许变量替换和扩展。

```bash
#!/bin/bash

var="world"

echo 'Hello $var'  # 输出：Hello $var
echo "Hello $var"  # 输出：Hello world
```

- 反引号 \` \` 在Shell中用于执行命令，并将其结果赋给变量。
  在现代Shell脚本中逐渐被 `$()` 替代，因为 `$()` 更加直观和易读，而且更容易进行嵌套。

  ```bash
  #!/bin/bash
  
  current_date=$(date)
  echo "当前日期是：$current_date"
  ```

#### 变量运算

1. **使用 `expr` 进行运算**：

   ```bash
   #!/bin/bash
   
   result=$(expr 10 + 5)
   echo "10 + 5 = $result"
   
   result=$(expr 20 - 8)
   echo "20 - 8 = $result"
   
   result=$(expr 6 \* 4)
   echo "6 * 4 = $result"
   
   result=$(expr 24 / 3)
   echo "24 / 3 = $result"
   
   result=$(expr 15 % 4)
   echo "15 % 4 = $result"
   ```

2. **使用 `$((...))` 进行算术运算**

   ```bash
   #!/bin/bash
   
   result=$((10 + 5))
   echo "10 + 5 = $result"
   
   result=$((20 - 8))
   echo "20 - 8 = $result"
   
   result=$((6 * 4))
   echo "6 * 4 = $result"
   
   result=$((24 / 3))
   echo "24 / 3 = $result"
   
   result=$((15 % 4))
   echo "15 % 4 = $result"
   ```

3. **使用`[ ]`进行运算**

   ```bash
   #!/bin/bash
   
   result=$(($a + $b))
   echo "10 + 20 = $result"
   
   result=$(($a - $b))
   echo "10 - 20 = $result"
   
   result=$(($a * $b))
   echo "10 * 20 = $result"
   
   result=$(($b / $a))
   echo "20 / 10 = $result"
   
   result=$(($b % $a))
   echo "20 % 10 = $result"
   
   ```

4. **使用 `bc` 进行高精度运算**：

   ```bash
   !/bin/bash
   
   # 使用 `bc` 进行高精度运算，注意小数点的处理
   result=$(echo "scale=2; 5 / 3" | bc)
   echo "5 / 3 = $result"
   ```

#### 	变量的内容删除

```bash
#! /bin/bash
url="www.shenjianl.cn"
echo ${#url} # 输出url的长度
echo ${#url} # 输出url的值
echo ${url##*.} # 从前往后，贪婪匹配，输出 cn
echo ${url#*.} # 从前往后，最短匹配，输出 shenjianl.cn
echo ${url%%.*} # 从后往前，贪婪匹配，输出 www
echo ${url%.*} # 从后往前，最短匹配，输出 www.shenjianl
```

#### 索引的切片

`${}` 来进行变量的索引和切片操作

```bash
#!/bin/bash

# 定义一个变量
url="www.shenjianl.cn"

# 获取变量中的前五个字符
echo "前五个字符：${url:0:5}"

# 获取变量中的第五个字符到最后一个字符
echo "第五个字符到最后一个字符：${url:4}"

# 获取变量中的第六个字符到倒数第二个字符
echo "第六个字符到倒数第二个字符：${url:5:-1}"
```

变量内容的替换

```bash
#!/bin/bash

# 定义一个变量
url="www.shenjianl.cn"

# 将第一个匹配到的字符串 www 替换为 blog
echo "${url/www/blog}"  # 输出 blog.shenjianl.cn

# 将所有匹配到的字符串 n 替换为 X,贪婪匹配
echo "${url//n/X}"  # 输出 www.sheXJiaol.cX
```

#### 函数

定义函数

常见的方式：

1. 使用 `function` 关键字：

   ```bash
   function function_name {
       # 函数体
   }
   ```

2. 直接使用函数名：

   ```bash
   function_name{
       # 函数体
   }
   ```

`source` 命令来加载另一个脚本文件，并使其中定义的函数在当前脚本中可用。

`return`返回函数结果，使用`$?`接受返回值


在Shell脚本中，全局变量和局部变量的概念与其他编程语言中的类似，但是Shell中的作用域和变量的生命周期可能略有不同。

- **全局变量**：
- **局部变量**：

#### 循环

**for循环**

```shell
for variable in list
do
    # 在这里执行循环体中的命令，可以使用 $variable 引用当前迭代的元素
done
```

**while循环**

```bash
while [ 条件 ]
do
    # 在这里执行循环体中的命令
done

```

**until语句**

`until`循环会在条件为假时执行循环体中的命令，直到条件为真为止

```bash
until [ 条件 ]
do
    # 在这里执行循环体中的命令
done

```

1. `break`：用于终止循环并跳出循环体。
2. `continue`：用于跳过循环体中的剩余部分，并继续下一次循环。
3. `return`：用于从函数中返回结果。
4. `exit`：用于终止整个Shell脚本的执行，并返回一个指定的退出码给调用者。通常，0表示成功，非0表示出错。
5. `trap`：用于捕获信号并执行相应的命令。在循环中使用`trap`命令可以让你在接收到指定信号时执行某些操作，比如清理工作或者终止循环。

### shell条件结构

#### **符号说明**

- `(())`	数值比较
- `[[]]`    条件测试，支持正则
- `$(())`   整数运算
- `$[]`      整数运算，不推荐
- `$()`      命令替换，先执行里面的命令，标准输出替换
- `${}`      shell变量的原型，限定变量的范围
- `[]`        条件测试，不推荐
- `()`        子shell执行
- `{}`        当前shell执行

**测试表达式**

- `-d` 文件存在且为目录为真
- `-f `文件存在且为普通文件为真
- `-e` 文件存在为真
- `-s` 文件存在且文件大小不为0为真
- `-r` 文件存在且可读为真
- `-w`文件存在且可写为真
- `-x` 文件存在且可执行为真
- `-L` 文件存在且为链接文件为真
- `f1 -nt f2` 文件f1比文件f2新为真
- `f1 -ot f2` 文件f1比文件f2旧为真

**字符串测试表达式**

- `-n str`  长度为0则为真
- `-n str`  长度不为0则为真
- `!=`、`==`、`<`、`>`

**整数操作符**

| 在[ ]和test中使用 | 在[[ ]]和(( ))中使用 |
| :---------------: | :------------------: |
|        -eq        |        ==、=         |
|        -nq        |          !=          |
|        -gt        |          >           |
|        -gt        |          >=          |
|        -lt        |          <           |
|        -le        |          <=          |

#### if语句

```bash
if [ 条件 ]; then
    # 在条件为真时执行的命令
else
    # 在条件为假时执行的命令
fi

```

**case语句**

```bash
case 变量 in
    模式1)
        # 当变量匹配模式1时执行的命令
        ;;
    模式2)
        # 当变量匹配模式2时执行的命令
        ;;
    ...
    *)
        # 当变量匹配所有模式都不匹配时执行的命令
        ;;
esac

```

**逻辑操作符**

| 在[ ]和test中使用 | 在[[ ]]和(( ))中使用 |
| :---------------: | :------------------: |
|        -a         |          &&          |
|        -o         |         \|\|         |
|         !         |          !           |

### 数组

#### **数组的定义**


在Shell脚本中，可以使用多种方式来定义数组。下面是几种常见的数组定义方法：

**使用空格分隔的值列表**：

```bash
arr=(value1 value2 value3)
```

**使用索引逐个赋值**：

```bash
arr[0]=value1
arr[1]=value2
arr[2]=value3
```

**使用`declare`声明数组**：

```bash
declare -a arr=(value1 value2 value3)
```

或者：

```bash
declare -a arr
arr=(value1 value2 value3)
```

这种方式通过 `declare -a` 声明数组，然后用 `()` 或者逐个赋值的方式定义数组元素。

**使用`read`命令从标准输入读取数组**：

```bash
read -a arr <<< "value1 value2 value3"
```

这种方式使用 `read` 命令从标准输入读取一行，并将其按照空格分隔后赋值给数组。

`${arr[*]} `和`${arr[@]}`

```bash
arr=("apple" "banana split" "orange")
for item in "${arr[*]}"; do

    echo "$item"
done

echo "------"

for item in "${arr[@]}"; do
    echo "$item"
done
```

输出：

```bash
apple banana split orange
------
apple
banana split
orange
```

在这种情况下，`${arr[*]}` 将整个数组作为一个元素，因此 `for` 循环只会执行一次，而 `${arr[@]}` 将每个数组元素作为一个独立的参数，因此 `for` 循环会遍历数组中的每个元素。

因此，尽管在大多数情况下它们的行为是相同的，但在使用循环遍历数组时，它们之间的差别可能会变得明显。

数组中的常用变量

- `${arr[*]} `  数组所有元素

- `${arr[@]} `  数组所有元素
- `${arr[INDEX]} `   指定索引的数组元素
- `${#arr[*]} ` 数组长度
- `${#arr[@]}` 数组长度
- `${#arr}`   下标为0 的字符个数

#### 数组的切片

假设我们有一个数组如下：

**从索引N开始截取到数组末尾**：

```bash
${arr[@]:N}
```

1. **截取从索引N开始的M个元素**：

```bash
${arr[@]:N:M}
```

1. **截取数组的最后M个元素**：

```bash
${arr[@]: -M}
```

${arr[@]}` 表示展开数组的所有元素。这些数组切片操作仅适用于 Bash 版本 4 及以上。

#### 数组的替换



