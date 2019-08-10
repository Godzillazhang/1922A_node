#### Git简介
> Git是目前世界上最先进的分布式版本控制系统
---
* 特点：
    * 分布式速度块
    * 免费
---
#### 集中式和分布式的区别
> 集中式有一个管理中心，分布式每个点都是中心点。
---
#### 安装git
* [Git官网下载](https://git-scm.com/)
* Linux上安装：sudo apt-get install git
* Mac上安装XCode自带Git
---
#### 全局配置git
* git config --global user.name ""
* git config --global user.email ""
---
#### 创建版本库
* 1.创建文件夹：mkdir directory
* 2.进入文件：cd directory
* 3.检查目录：pwd
* 4.初始化git库：git init
---
#### 向版本库中添加项目或文件
* git add filename
* git commit -m ""
---
#### 检查git版本库与工作区中文件版本的状态
* git status
---
#### 版本回退
* 返回上一个版本：git reset --hard HEAD^
* 返回第n个版本：git reset --hard HEAD~n
* 返回指定的版本：
    * git log --pretty=oneline|git reflog
    * git reset --hard ID
---
#### 工作区
> 开发项目保存的文件夹称为工作区
---
#### 暂缓区
> 版本add后的内存区称为暂缓区
---
#### 版本库
> commit后代码管理的地方称为版本库
---
#### 撤销修改
* git checkout -- filename
---
#### 撤销暂缓区
* git reset HEAD filename
---
#### 删除文件
* 工作区删除文件：rm filename
* 版本库中删除文件：git rm filename
---
#### 远程仓库
* 创建密钥：ssh-keygen -t rsa -C "email"
* 注册一个github账号
* 添加远程库：git remote add origin giturl
* 向远程库中推送本地库：git push -u origin master
---
#### 把远程库克隆到本地
* git clone giturl
---
#### 分支管理
* 创建分支：git branch branchname
* 切换分支：git checkout branchname
* 查看当前分支：git branch
* 合并分支：git merge branchname
* 删除分支：git branch -d branchname
---
#### 获取远程分支
* git checkout -b dev origin/dev
* 从远程库中拿到最新的分支，然后本地解决冲突：git pull
    * 要先设置链接，然后pull