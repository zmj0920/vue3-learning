/**
 * @findIndex 方法
 * @param  {[type]}   arr      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export function findIndex(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i);
    // 判断
    if (res) {
      // 返回当前正在遍历的元素
      return i;
    }
  }
  return -1;
}

// let arr = [3,43,54,65,65,23,321,12];
// let result = findIndex(arr,function(item){
//   return item>40;
// });
//
// console.log(result);
