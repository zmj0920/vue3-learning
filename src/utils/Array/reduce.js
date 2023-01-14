/**
 * [reduce 方法]
 * @param  {[type]}   arr       [原数组]
 * @param  {Function} callback  [回调函数]
 * @param  {[type]}   initValue [值,默认是 0 ]
 * @return {[type]}             [Number]
 */

export function reduce(arr, callback, initValue) {
  // 声明变量 默认是 0
  let result = initValue || 0;
  // 执行回调
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  // 返回最终的结果
  return result;
}

// let arr = [1,2,3];
// let result = reduce(arr, function(res,value){
//     return res*value;
// },1)
// console.log(result);
