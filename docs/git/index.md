## 基本概念
- git 是分布式版本控制系统。可以有效、高速的处理从很小到非常大的项目版本管理。
- 那什么是版本控制呢？版本控制也是一种软件工程技巧，借此能在软件开发的过程中，确保由不同人所编辑的同一程序文件都得到同步。通俗的来说就是版本控制其实是一个记录着我们对文件不同修改的一个工具。

### 版本控制主要有三种方式<br>
**1. 本地版本控制<br>**
本地版本控制主要通过在硬盘上保存一些补丁集，通过应用所有的补丁可以重新计算各个版本的内容。我们在清理电脑垃圾时有时候会看到有windows更新后的缓存文件，那它其实就是记录着上一个版本的一些信息。
优点：很多系统都有内置配置
缺点：由于是在自己电脑上，不适合多人协作

**2. 集中化的版本控制系统**<br>
![avatar](https://static.vue-js.com/8b4b3040-f5ad-11eb-85f6-6fac77c0c9b3.png)

<div style="text-align: center;">图1 集中式版本控制系统图示</div>

<br>
集中化的版本控制系统，所有的版本库都是保存在中央仓库中，更新和推送版本都必须推送到中央仓库。
优点：相比于本地版本控制系统，解决了无法多人协作的问题，可以通过中央仓库看到别人对项目做出的修改，同时每个人的修改都可以上传到仓库实现同步。
缺点：每个版本的提交都必须基于联网的情况下提交到中央仓库，在没有及时备份的情况下，一旦中央仓库损坏，就会导致项目资料销毁，虽然每个开发者的电脑上都有部分代码，但是重新拼凑在一起的时间成本开销大。
<br>

**3. 分布式的版本控制系统**<br>
分布式的版本控制系统同样有一个中央仓库，但不同的是它允许每台电脑自己都拥有一个本地仓库，本地仓库保存着中央仓库的历史记录。
![avatar](https://git-scm.com/book/en/v2/images/distributed.png)

<div style="text-align: center;">图2 分布式版本控制系统图示 </div>

<br>
优点：解决了集中式版本控制系统完全依赖中央仓库的缺点，每个开发者的电脑上都能够在断网的情况下对本地仓库进行提交、版本回滚的操作。而且即使中央仓库出现故障，也能够通过某个电脑的本地仓库镜像重新生成。


## git
**git官方文档：https://git-scm.com/book/zh/v2**

<br>

![avatar](https://static.vue-js.com/3273c9a0-f79c-11eb-bc6f-3f06e1491664.png)

<div style="text-align: center;">图3 git图示</div>

<br>

- 工作区：本地编写代码的地方，比如说 vscode
- 暂存区：保存在了下次要提交的文件列表信息
- 版本库：本地仓库
- 远程仓库：远程托管文件的仓库，比如github

### init
- 初始化本地仓库
```js
git init 
// 通常在没有本地仓库为空的情况下使用
```

### clone
- 从远程仓库克隆项目到本地仓库
```js
git clone [url] 
//整体的步骤是 git init初始化本地仓库，然后拉取远程的内容到本地
```

### branch
- 查看本地、远程分支
- 分支的概念：分支其实就像概念上的理解一样，是代码仓库的分支，每个分支都保存着各自的内容，切换分支意味为切换工作模块。
```js
git branch [option]
git branch  // 查看本地分支
git branch -r  // 查看远程分支
git branch -a  // 查看所有分支（包括本地和远程）
git branch -m dev dev2 // 将dev分支更名为dev2
git branch --set-upstream-to=origin/remote_branch local_branch // 本地 local_branch分支关联远程 remote_branch分支
```

### switch
- 切换或创建分支
```js
git switch [option]
git switch branch // 切换到名为branch的分支
git switch -c branch // 创建一个名为 branch的分支并切换到该分支
```

### checkout
- 切换或创建分支
```js
git checkout [option]
git checkout branch // 切换到名为branch的分支
git checkout -b branch // 创建名为 branch的分支并切换到该分支
```

### add
- 将本地修改的内容提交到暂存区
```js
git add . // 提交当前所有修改的内容
git add filename // 提交文件名为filename修改的内容
```


### commit
- 将暂存区中的文件列表包含的文件提交到本地仓库
```js
git commit -m "xxxx" //xxxx为本次提交的评论信息
```
**提交信息遵循的原则**
- feat: 添加新功能
- fix: 修复问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改
- test: 测试用例修改
- chore: 其他修改(构建流程、依赖管理)



### push
- 将本地仓库的内容上传到远程仓库
```js
git push [option]
git push -u origin local_branch:remote_branch //强制推送到远程名为 remote_branch的分支(不推荐使用)
git push origin local_branch:remote_branch //(推荐使用)
```

### fetch
- 首先先理解清楚 fetch 命令的使用场景和使用背景
- 从一个或多个其他存储库中获取分支和/或标签(统称为“引用”)以及完成其历史所必需的对象。 远程跟踪分支已更新(Git术语叫做commit)，需要将这些更新取回本地，这时就要用到`fetch`

```js
git fetch [option]
git fetch origin remote_branch:local_branch // 从远程的origin仓库的 remote_branch 分支下载代码到本地并新建一个local_branch分支
```

### merge
- 合并分支
- 代码冲突：代码冲突的意思是当前工作树的内容与将要合并的内容存在不一致的地方
```js
git merge dev //将dev分支的内容合并到当前分支
// 注意：可能存在代码冲突的问题(通常人为选择)
```


### pull
- 拉取远程仓库的内容到本地
```js
git pull [option]
git pull origin remote_branch:local_branch // 将远程分支remote_branch的内容拉取到 local_branch
// 注意：可能存在代码冲突的问题(通常人为选择)

git pull --allow-unrelated-histories remote_branch:local_branch
// 当我们在两个不同平台上的项目分别切换提交的时候会出现这个问题
// 这个是比较常用的解决方法
```


### stash
- stash常用于暂时缓存当前分支修改的内容，然后再切换到别的分支去修改紧急的 bug
- 常用的命令有
```js
//https://www.cnblogs.com/tocy/p/git-stash-reference.html
git stash list // 查看当前 stash堆栈的信息
git stash // 存储当前分支的信息到堆栈
git stash save 'xxxxx' // 存储当前分支的信息到堆栈(更推荐使用这种方法)
git stash pop // 将堆栈当中的最后一项恢复出来并删除
git stash apply stash@{n} // 将堆栈的第 n 项恢复出来
git stash drop stash@{n} // 删除第 n 个堆栈的信息
```

### git 常用命令速查表
![avatar](https://static.vue-js.com/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png)


### git 出错问题解决方案
1. https://www.cnblogs.com/fairylyl/p/15059437.html