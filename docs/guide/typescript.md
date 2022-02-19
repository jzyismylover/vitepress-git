# typescript 学习路线

## 开始

- 2021 年的时候，vue3 已经全面支持 typescript，所以现在基本上开发都是使用 vue3 + typescript 的开发模式。在学习 typescript 之前，我们需要知道为什么 vue3 要换成 typescript 而不继续使用 javascript，它们之间的区别是什么，使用 typescript 可以解决什么问题。https://www.bilibili.com/video/BV1xL4y1B7DG

- 说说我对 typescript 的一些看法吧，学习 typescript 其实并不算学习一门新的语言，因为 typescript 的语法其实就是 javascript，只是说在它的基础之上新增了类型验证和一些面向对象的知识，所以我们会说 javascript的定位 是一门脚本语言，而 typescript 是和 C 、 Java 一样的面向对象语言
  
```js
// 类型验证体现在限制只能是相同类型的数据之间进行赋值
let a = 10
a = 'javascript'
// 上面的代码在 javascript 是没有问题的，因为 javascript 并不做这方面的限制
// 但是在 typescript 中会提示报错，说 'javascript'不能赋值给类型为 number 的变量
// 其实这就跟 C++ 里面 string 不能赋值给 int 是一样的意思 
```

> 说到面向对象，Java 里面用的比较多的是类和接口，ES6 中新增了 extends 关键字使得我们能够对类进行拓展，但是并没有接口的概念，typescript 允许我们使用关键字 interface 来定义一个接口（其实和 Java 类似的）
  
```js
// 可以定义属性和方法让后代去 overwrite
interface apple {
    name: string,
    getName: () => string
}
```  

**推荐阅读**
typescript 入门教程 https://ts.xcatliu.com/introduction/what-is-typescript.html

> 相比于其他的文档，这个文档由浅入深地介绍 typescript 的特性，上手的难度会低一点。
> 1. 基础部分主要讲的是一些基础类型的定义，主要学习的是如何声明各个类型的变量需要学习到的是 typescript 有哪些基础类型、函数与 javascript 有什么不一样、联合类型、交叉类型、接口如何使用，推荐全部阅读。
> 2. 进阶部分比较重要的是类型别名、枚举、类与接口、泛型，泛型相对来说较为难理解一些，可结合视频进行学习  
> 3. 假期的时间其实看完基础部分 + 进阶部分的类型别名、枚举就 OK 了


![avatar](/1643984883(1).png)  

> 可参考的视频 https://www.bilibili.com/video/BV1yt411e7xV 前20讲


## 总结
总的来说，上面只是我对于typescript学习的一些想法，更多地可能需要结合自己的学习习惯，对视频更敏感的话可以去找多些视频浏览学习，对文档比较敏感的话就多翻翻文档，不过无论是文档还是视频，都要动手去做一些小 demo 才能有更加深刻的体会。

