/**
 * @param  {arr} 数组
 * @param  {fn} 回调函数
 * @return {undefined}
 */
function each(arr, fn) {
  fn = fn || Function;
  let a = [];
  let args = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < arr.length; i++) {
    var res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
}
