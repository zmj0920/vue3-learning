let call = require('./call');
export function bind(Fn, obj, ...args) {
  // bind方法返回一个新的函数
  return function (...args2) {
    // 返回的函数的作用与call相同
    // 只是返回值的函数可以另外再传参数 所以用一个args2接收
    return call(Fn, obj, ...args, ...args2);
  };
}
