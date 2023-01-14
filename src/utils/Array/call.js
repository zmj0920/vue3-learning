function call(Fn, obj, ...args) {
  if (obj === null || obj === undefined) {
    // es11 新出的 globalThis 指向当前全局对象
    obj = globalThis
  }
  // 在对象obj中使用一个临时属性接收传进来的Fn
  obj.temp = Fn
  // 根据函数this指向问题 谁调用指向谁
  let result = obj.temp(...args)
  // 删除这个临时变量
  delete obj.temp
  // 将得到的值返回
  return result
}
