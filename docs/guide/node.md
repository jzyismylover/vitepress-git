# node 环境配置

安装部分直接去node官网安装即可下面是通过配置环境变量设置系统的全局缓存和全局包安装的位置

> 说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install 模块名 [-g] 的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
  
1. 在安装目录 `D:\soft\nodejs` 下，新建两个文件夹 node_gloabl（全局包存放目录）和 node_cache（缓存目录）
2. 打开命令行工具设置 `npm config set prefix "D:\soft\nodejs\node_global"` `npm config set cache "D:\soft\nodejs\node_cache"`
3. 配置环境变量
   - 在系统或用户环境变量下新建`NODE_PATH`，变量值为`D:\soft\nodejs\node_global\node_modules` 
   - 编辑用户变量 Path, 将默认的 C 盘下 `APPData\Roaming\npm` 修改为 `D:\soft\nodejs\node_global`，成功如下图所示
   ![avatar](https://pic1.zhimg.com/80/v2-0acd44f52be746f0be650f6371f895a4_720w.jpg)
   - 配置完上面其实总体上已经配置完成，如果显示 node 不是命令的话很可能是没有把 node.exe也配置进入环境变量，在系统Path加上包含 node.exe的目录路径即可  
4. 检查配置成功后就可以使用 `npm install -g @vue/cli@next` 来安装最新版的vue/cli


## vue/cli 升级  
https://juejin.cn/post/7038475908339990542
`npm install -g @vue/cli@next`


## vue 推荐插件  
https://segmentfault.com/a/1190000039803218    
1. vetur
2. Vue VSCode Snippets  
...


---
参考资料  
知乎：https://zhuanlan.zhihu.com/p/86241466  
云社区：https://cloud.tencent.com/developer/article/1572591