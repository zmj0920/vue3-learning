/**
 * 函数节流
 * @param  {Function} callback [事件函数]
 * @param  {[type]}   wait     [等待时间]
 * @return {[type]}            [Function]
 */
export function throttle(callback,wait){
  // 定义开始时间
  let start = 0;

  return function(e){
    // 获取当前的时间戳
    let now = Date.now();
    // 判断
    if(now - start >= wait){
      // 满足条件，则执行回调
      callback.call(this,e);
      // 修改开始时间
      start = now;
    }
  }
}
