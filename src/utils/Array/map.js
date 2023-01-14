/**
 * map()方法的封装
 * @param  {[type]}   arr      [原数组]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [Array]
 */
export function map(arr, callback) {
  // 声明一个空数组
  let result = [];
  // 变量数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result.push(callback(arr[i], i));
  }
  // 返回结果
  return result;
}

// let arr = [1,2,3,4,5];
// let result  = map(arr,(item,index)=>{
//   return item *10;
// });
// console.log(result);
