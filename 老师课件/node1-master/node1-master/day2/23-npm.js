/* 
使用包的步骤：
    1. npm 包管理工具，在项目中安装包 moment
    2. require() 导入格式化时间的包 moment
    3. 根据官方文档进行操作
安装包：
    npm install 完整的包名
    npm i       完整的包名   (简写) 
    示例： 
        npm install moment
        npm i moment
        npm i moment@2.222 指定版本
        npm i jquery art-template 一次安装多个包

初次安装之后，新增的文件(夹)
    node_modules 文件夹，用来存放所有已安装到项目中的包。
        require() 导入第三方包时，就是从该目录查找并加载。
    package-lock.json 配置文件。用来记录 node_modules 目录下，
        每一个包的下载信息，例如：版本号、名字、下载地址等。
    注意：程序员尽量不要手动修改 这两个文件中的任何代码，npm 会自动维护它们。
安装指定版本的包
    npm i moment@2.22.2  
        安装指定版本的包。
        默认情况下，使用 npm install 命令安装的是最新版本的包。
        此时会直接将之前版本的包覆盖掉。不必卸载之前的包。

版本号的规范
    版本号以‘点十进制’的形式定义，共有三个数字，被两个点隔开。如 2.24.0
    数字1 ：大版本
    数字2 ：功能版本
    数字3 ：bug 修复版本。
    版本号的提升规则，前面的版本号增加，后面的版本号归零。
包管理配置文件
    npm规定，在项目根目录中，必须提供一个叫做 package.json 包管理配置文件。
    用来记录与项目有关的配置信息。
        如项目的名称、版本号、描述
        项目中都用了哪些包
        哪些包只在开发期间使用
        哪些包在生产(部署)阶段使用   
多人协作问题：
    在整个项目中，第三方的包体积占到了 90% 以上，而源代码通常 1 ~ 2 M。
    第三方的包在 git 的上传和下载的时候，体积过大，且没有意义。
    因为都可以上官网下载。
    
    解决方案: 忽略 node_modules    
package.json
    记录了项目中用到的包，因此上传 git 时，可以忽略 node_modules 文件夹。
git 忽略规则
    node_modules    //忽略这个 node_modules 目录
    angular.json    //忽略这个 angular.json 文件
    log/*           //忽略 log 下的所有文件
    css/*.css       //忽略 css 目录下的 .css 文件   
    
修改忽略文件时，不生效：
    先把本地缓存删除（改成未track状态）
    git rm -r -f --cached .
 
package.json 和 package-lock.json
    当node_modules文件夹并不存在或被删除时，
    需要用到npm install重新装载全部依赖时，
    通过package-lock.json可以直接表明下载地址和相关依赖，
    相对下载速度也更快，也不容易报错。    
*/
