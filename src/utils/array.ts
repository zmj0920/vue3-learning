/**
 * @param  {arr} 数组
 * @param  {type} 1：从小到大   2：从大到小   3：随机
 * @return {Array}
 */
export function sort<T = any>(arr: T[], type = 1, key = null): T[] {
  return arr.sort((a: any, b: any): any => {
    switch (type) {
      case 1:
        return key ? a[key] - b[key] : a - b;
      case 2:
        return key ? b[key] - a[key] : b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
}

/**
 * unique 数组去重
 * @since 1.0.0
 * @param {Array} array
 * @return {Array}
 */
export function unique(array: any[]) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(array));
  } else {
    let n: Record<string, any> = {},
      r = [];
    for (let i = 0; i < array.length; i++) {
      if (!n[array[i]]) {
        n[array[i]] = true;
        r.push(array[i]);
      }
    }
    return r;
  }
}

/**
 * @desc 计数数组中值的出现次数
 * @param {array} arr
 * @param {number} value 出现次数的值
 * @returns {number} 返回值出现的次数
 * @example countOccurrences([1,1,1,2,3,4,5],1) -> 3
 */
export function countOccurrences(arr: any[], value: number) {
  return arr.reduce((sum, v) => (v === value ? sum + 1 : sum + 0), 0);
}
