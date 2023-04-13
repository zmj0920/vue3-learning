/**
 *
 * @param fn 要被防抖的函数
 * @param delay  防抖的延迟时间
 * @param immediately 第一次的时候是否立即执行,默认为 true
 */

export function debounce(fn: Function, delay = 1000, immediately = true) {
  let timeId: any | null = null;
  // 返回一个函数
  return (...args: any[]) => {
    // 判断
    if (immediately) {
      fn(args);
      immediately = false;
      return;
    }
    // 判断
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      // 执行回调
      fn(args);
      // 重置定时器变量
      timeId = null;
    }, delay);
  };
}

// const setSex = debounce(() => data.setSex(1), 1000);
