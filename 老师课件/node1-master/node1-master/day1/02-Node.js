/* 
01. 什么是 Node.js 
    Node.js 是一个基于 Chrome V8 引擎的 Javascript 的运行环境。
    官网：https://nodejs.org/zh-cn/
02. Node.js 的 Javascript 运行环境(见imgs/03-Node.js运行环境)
    包括 V8 引擎 和 fs 、path、http 等内置API。
    总结:
        1. 浏览器是 Javascript 的前端运行环境。
        2. Node.js 是 Javascript 的后端运行环境。
        3. Node.js 中无法调用 DOM 和 BOM 等浏览器内置的 API
        4. Node.js 不是运行在浏览器中，或者说和浏览器无关。
03. Node.js 可以做什么？
    1. 可以操作数据库，做完整的项目开发。
    2. 为后期的 VUE 做准备。
04. Node.js 怎么学习
    浏览器中 Javascript 的学习路径：
        JS 基础语法 + 内置模块(DOM/BOM) + 第三方库(jQuery)
    Node.js 的学习路径:
        JS 基础语法 + 内置模块(fs/path/http) + 第三方模块API(express、MySQL)               
05. 安装，登录官网，下载对应安装包，直接下一步即可。
    LTS = Long Term Support , 长期稳定版。
    Current,尝鲜版，新特性居多,可能有 bug。
    DOS 系统中查看 : node -v
06. 终端: terminal。 即 cmd 的操作，是最原始的操作系统，参考 Linux，git。
        专门为程序员开发设计的，用于人机交互的一种方式。
        能用命令的，不要用图形界面。比如 git, mysql

        原理：
            对于系统，一切皆文件，而终端可以完成对文件的所有操作。增删改查。
07. 在 Node.js 环境中执行 JS 代码
        1. 打开 cmd
        2. 切换到当前路径
        3. node 文件名 例如： node demo.js
08. 打开终端的几种方式
    1. 开始输入 CMD
    2. 文件夹的路径输入 CMD
    3. shitf + 右键  此处打开 power shell
    4. VSCODE 编译器
09. power shell 就是升级版的 DOS
10. DOS 快捷键
        上箭头 ⬆ : 上一条命令
        tab 键 : 路径补全
        esc 键 : 清空当前命令
        cls    : 清屏。  
   DOS 命令
        DOS切换盘符： D:
        查看当前路径下的目录： dir
        进入到单级目录： cd 文件夹名字
        退回到上一级目录： cd ..
        进入到多级目录：cd 文件夹名1\文件夹名2
        退回到盘符目录：cd \
        退出命令: exit
11. 云服务器：    
        可以通过 finalshell 操作的操作远程的电脑。
        作业：购买阿里云服务器，并通过 finalshell 进行操作。    
*/