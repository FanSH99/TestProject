## git使用前配置（告诉git每次是谁在提交代码）
1. 配置提交姓名
git config --global user.name 姓名
2. 配置提交人邮箱
git config --global user.email 邮箱
3. 查看git配置信息
git config --list

# git init 
初始化git 仓库

## git status 
查看仓库状态
## git add 文件名    git add .  表示将所有的内容添加到暂存区
将文件添加到暂存区
## git commit -m '内容'
将文件提交到持久区

## git checkout 文件名
用暂存区中的文件覆盖工作目录中的文件

## git log 
查看日志

## git reset --hard commitID (不敢随便瞎用)
将git仓库中的指定的更新记录恢复过来 并且覆盖暂存区和工作目录


## 分支

例如 ：开发分支（开发环境） 主分支（线上分支）  测试分支

## git branch 
查看分支

## git branch 分支名称
创建分支

## git checkout 分支名称
切换分支

## git merge 来源分支 
合并分支(之前需要提交持久区)

## git branch -d 分支名称
删除分支


## git 远程连接

## git push 远程地址 分支名称
将本地仓库推送到远程仓库

## git remote add origin 远程地址 
设置远程地址别名

## git push origin 分支名称
使用别名推送

## git push -u origin master 
记住当前提交的远程别名和分支 接下来在提交时直接使用git push 就可以

## git clone 远程地址
克隆远程项目

## git pull 拉去远程代码

## ssh 免登录操作


## ssh-keygen 
生成密钥   地址：C:\Users\Administrator\.ssh

免登录操作必须先成密钥 在gitee控制台配置公钥 

推送时必须要用 ssh协议