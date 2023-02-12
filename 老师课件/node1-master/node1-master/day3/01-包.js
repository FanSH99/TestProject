/* 
快速创建 package.json 文件
    npm init -y
        1. 在命令所在的目录下，快速创建 package.json 文件
        2. 命令所在的目录，必须是中文, 不能出现中文和空格
        3. 创建项目的文件夹时，执行此命令。一次即可。以后不再执行。
        4. 再次运行 npm install, npm 包管理工具，会自动把包的名称、版本号
            维护在 package.json 中。
        5. 文件中有项目的基本信息, 如项目名、版本号、作者等。

dependencies 节点
    专门记录 npm install 命令安装了哪些包。每次执行该命令都会更新这个节点。
    如： npm i jquery art-template
    类似 maven 的 pom.xml 中依赖的管理

npm install (npm i) 
    读取 package.json 的 dependencies 节点中的包和版本号。
    一次性自动安装所有的包(到 node_modules 文件夹)。

npm uninstall 包名
    如： npm uninstall moment
    1. 卸载某个包
    2. 没有简写
    3. 从 package.json 的 dependencies 的节点中删除。

devDependencies 
    如果某些包只在项目的开发阶段用到，而在项目上线后不会用到，
        则建议这些包记录在 devDependencies 节点中。
    与之对应，如果项目在开发和上线阶段都会用到，
        则建议把这些包记录到 dependencies 节点中。

    安装在 devDependencies 节点下   
        npm i 包名 -D                  如 npm i moment -D
        或
        npm i -D 包名
        或
        npm install 包名 --save-dev    如 npm install webpack --save-dev 
    安装到 dependencies 节点下
        npm i 包名    

    具体安装到 devDependencies 还是 dependencies
    查看官方文档(https://www.npmjs.com/)。

包下载速度慢: 
    使用 npm 下载包时，默认从国外的 https://registry.npmjs.com/服务器下载。
    和众多用户一起使用海底光缆，因此慢。    

淘宝 NPM 镜像服务器：
    1. 指定间隔时间，从国外官方网站，同步包到国内的服务器。
    2. 对国内的用户提供下载服务。

    镜像(mirroring)：
        一种文件存储形式，一个磁盘上的数据在另一个磁盘上
        存在一个完全相同的副本，我们称为镜像。

切换 npm 下载包的镜像源
    1. 查看当前的下包镜像源
        npm config get registry
    2. 将下包的镜像源切换为淘宝镜像源
        npm config set registry https://registry.npm.taobao.org/
        或
        npm config set registry=https://registry.npm.taobao.org/
    3. 检查镜像源是否切换成功
        npm config get registry   
nrm
    为了方便地切换下包的镜像源，我们可以安装 nrm 工具。
    利用 nrm 提供的终端命令，快速切换下包镜像源。

    1. 通过 npm 包管理器，将 nrm 安装为全局可用的工具
        npm i nrm -g
    2. 查看所有可用的镜像源
        nrm ls
    3. 将下包的镜像源切换为 taobao 镜像
        nrm use taobao  

包的分类
    项目包
        被安装到 node_modules 目录中的包，都是项目包。
        又分为开发依赖包和核心依赖包
            开发依赖包: devDependencies 节点中的包，只在开发期间用到。
            核心依赖包: dependencies 节点中的包，在开发和上线后都会用到
    全局包
        1. 执行 npm install 命令时，如果提供了 -g ，则把包安装为全局包。
        2. 位置: C:\Users\文艺青年\AppData\Roaming\npm\node_modules
        3. 全局都可以使用
        4. 安装
            npm i 包名 -g   如 npm i nrm -g
        5. 卸载
            npm uninstall 包名 -g  
        6. 只有工具性质的包，才有必要全局安装。
        7. 是否全局安装，参考官方文档(https://www.npmjs.com/)。

i5ting_toc    
    把 md 文档，转化为 html 页面的工具。
    步骤如下：
        1. 安装为全局包
            npm install i5ting_toc -g 
        2. 调用 i5ting_doc 的转化功能。-f 指定要转化的文件; -o  转化后打开。
            i5ting_doc -f  文件路径 -o 
            案例：i5ting_toc -f .\README.md -o
        3. 在文件目录下生成一个 preview 文件夹    

包的规范结构
    1. 包必须以单独的目录存在
    2. 包的顶级目录下必须包含 package.json 这个包管理配置文件。
    3. package.json 中必须包含 name,version,main 这三个属性，
          分别是包的名称、版本号、包的入口
          包的入口：
              即外界导入这个包时，导入main 属性指向的文件
    4. 更多规范，查看百度。            
*/