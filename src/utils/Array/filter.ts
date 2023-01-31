/**
 * [filter 方法]
 * @param  {[type]}   arr      [原数组]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [Array]
 */
export function filter<T>(arr: T[], callback: Function) {
  // 声明空数组
  let result = [];
  // 变量数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i);
    // 判断 如果为真则压入到原数组中
    if (res) {
      result.push(arr[i]);
    }
  }
  // 返回结果
  return result;
}

// let arr = [3,43,54,65,65,23,321,12];
// let result = filter(arr,function(item){
//   return item>40;
// });
// f
// console.log(result);
