/**
 * [every description]
 * @param  {[type]}   arr      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export function some(arr, callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调 如果返回结果有一个是真
    if (callback(arr[i], i)) {
      return true;
    }
  }
  // 如果都不满足
  return false;
}
