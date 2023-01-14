/**
 * find 方法 找到第一个满足条件的下标
 * @param  {[type]}   arr      [原数组]
 * @param  {Function} callback [description]
 * @return {[type]}   Number         [description]
 */
export function find(arr,callback){
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i],i);
    // 判断
    if(res){
      // 返回当前正在遍历的元素
      return arr[i];
    }
  }
  return undefined;
}

// let arr = [3,43,54,65,65,23,321,12];
// let result = find(arr,function(item){
//   return item>40;
// });
//
// console.log(result);
