### 说说 Git 中 HEAD、工作树和索引之间的区别？
- HEAD 指针通常指向当前工作树所在的分支，当我们在分支中提交新内容后，分支指针指向当前分支的最新提交。
  
![avatar](https://static.vue-js.com/3e86ba80-fa40-11eb-991d-334fd31f0201.png) 

- 工作树是我们本地的源代码内容
- 索引是我们 git add 后提交到暂存区文件列表信息的地方
![avatar](https://static.vue-js.com/46e5ac40-fa40-11eb-bc6f-3f06e1491664.png)
