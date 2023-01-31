/**
 * concat 切片
 * @param  {[type]} arr  [description]
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
export function concat<T>(arr: T[], ...args: T[]) {
  // 声明一个空数组
  const result = [...arr];
  // 遍历数组
  args.forEach((item) => {
    // 如果是个数组
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
}

// let arr =[1,2,3];
// let result = concat(arr,[4,5,6],7,8);
// console.log(result);
