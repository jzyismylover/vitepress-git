## arguments
- MDN 介绍 arguments https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
- arguments是一个类似数组对象(但其实它并不是属于数组这种数据结构)
- arguments常出现在我们不为函数指定参数而外部又传入了参数需要处理的情景下
- **只能在非箭头函数中使用的局部变量**
```js
function fn() {
  console.log(arguments)
}
fn(1, 2, 3)
```
![avatar](/arguments.png)
<div style="text-align: center;">图1 程序预期输出结果</div>
<br>


- 学了 es6的`rest 参数`我们可以使用它来替代 arguments
```js
function test(...args) {}
```
- apply、call、bind常常可以看到 arguments的身影
## 箭头函数
- 箭头函数是 es6中比较常用的知识。通常我们在声明一个函数的时候有以下两种方式
```js
// 命名函数
function name() {}
// 匿名函数
(function (){})()
```
- 而es6 提出的箭头函数提供了更加简洁的函数的定义方式
```js
const fn = () => {}
// 以更直观的形式展示
setTimeout(() => {//更加地简洁

}, 1000)
setTimeout(function(){

}, 1000)
```
- 但箭头函数其实更大的一个好处是解决了匿名函数 this指向的问题。之前我们了解到的函数的 this 指向指向的是调用这个函数的对象比如说 obj.getName()...。但是在箭头函数中，this的指向指向的是定义函数所在的 js 作用域指向的对象。js有局部作用域(一般是函数内部)和全局作用域(window)
- **箭头函数不允许改变 this 指向**
```js
let obj = {
  name: 'study',
  getName: function() {
    console.log(this.name)
  },
  getName2: () => {
    console.log(this.name)
  }
}
obj.getName2()
```
- 关于作用域的介绍：https://www.w3school.com.cn/js/js_scope.asp

## promise
- promise是异步操作中回调地狱问题的解决方案。promise中有三个比较重要的状态 `pending` `fulfilled` `rejected`。 
```js
function studyPromise() {
  return new Promise((resolve, reject) => {
    // resolve data
    resolve('learn promise')
    // reject data
    reject('error')
  })
}
```


## vue环境配置
```js
//vscode 控制台或者 cmd 中 测试输入 vue --version
vue --version
//@vue/cli 5.0.0-alpha.4出现类似情况的话其实 vue 环境已经配置完成了
```
- 配置完成以后可以尝试使用新一代构建工具 vite构建项目看下启动之后的效果。// 详情可查看 vite 官网：https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project
```js
npm init vite@latest 
yarn create vite 
```


## 斐波那契数列
```js
function* fib(n) {
  let [current, next, swap] = [0, 1, 0]
  for(let i=0; i<n; i++) {
    swap = current
    current = next
    next = swap + next
    yield current //每次抛出去的是 fib(n-1)
  }
}
```