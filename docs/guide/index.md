## vitepress 初始化配置

- 步骤 1: 创建并进入一个目录
```javascript
$ mkdir vitepress-starter && cd vitepress-starter
```
- 步骤 2: 初始化
```javascript
$ yarn init
```

- 步骤 3: 本地安装 VitePress
```javascript
$ yarn add --dev vitepress
```

- 步骤 4: 创建你第一篇文档
```javascript
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

- 步骤 5: 在 package.json.添加一些script
```javascript
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
```

- 步骤 6: 在本地服务器上启动文档站点
```javascript
$ yarn docs:dev
```


## 静态资源处理
