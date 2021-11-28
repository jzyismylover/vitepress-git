/**
 * 斐波那契数列
 */
function* fib(n) {
  let [current, next, swap] = [0, 1, 0]
  for(let i=0; i<n; i++) {
    swap = current
    current = next
    next = swap + next
    yield current // 每次抛出去的都是第一项
  }
}

/*for(let n of fib(20)) {
  console.log(n)
}*/


function studyPromise() {
  return new Promise((resolve, reject) => {
    // resolve data
    resolve('learn promise')
    // reject data
    reject('error')
  })
}

// console.log(studyPromise())

/*new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({ test: 1 })
  }, 1000)
}).then((data) => {
  console.log('result1', data)
  //dosomething
  return test()
}).then((data) => {
  console.log('result2', data)
})

function test(id) {
  return new Promise(((resolve, reject) => {
      setTimeout(() => {
      resolve({ test: 2 })
      }, 5000)
  }))
}*/
