/**
 *
 * @desc 防抖
 * @param {function} fn
 * @param {number} wait //间隔时间
 *
 */

export function debounce(fn: Function, wait: number) {
  let timeout: number | null | undefined = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
}

/**
 *
 * @desc 节流
 * @param {function} fn
 * @param {number} wait //间隔时间
 *
 */
export function throttle(fn: Function, wait: number) {
  let prev = Date.now();
  return function () {
    let now = Date.now();
    if (now - prev >= wait) {
      fn();
      prev = Date.now();
    }
  };
}
