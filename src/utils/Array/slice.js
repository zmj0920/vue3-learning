export function slice(arr, begin, end) {
  // 若arr.length  = 0;
  if (arr.length === 0) {
    return [];
  }
  // 判断 begin
  begin = begin || 0;
  if (begin >= arr.length) {
    return [];
  }

  // 判断end
  end = end || arr.length;
  // <1就变成数组长度
  if (end < begin) {
    end = arr.length;
  }
  // 声明一个空数组
  const result = [];
  // 遍历对象
  for (var i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      //讲下标对应的元素压入数组
      result.push(arr[i]);
    }
  }
  return result;
}

// let arr = [1,2,3,4,5,6];
// let result = slice(arr,1,4);
// console.log(result);
