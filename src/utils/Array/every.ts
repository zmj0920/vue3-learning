function every<T>(arr: T[], callback: Function) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 每一项都进行函数判断 如果有一项的条件不符合回调函数 则返回false
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  // 执行完毕 则说明全部符合 返回true'
  return true;
}
