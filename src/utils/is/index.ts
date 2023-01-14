const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @description: 是否已定义
 */
export function isDef<T = unknown>(val?: T): val is T {
  return is(val, 'Undefined');
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

/**
 * @description: 是否为对象
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

/**
 * @description: 是否为空
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/**
 * @description:  是否为null
 */
export function isNull(val: unknown): val is null {
  return is(val, 'Null');
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && val instanceof Promise && [val.then, val.catch].every(isFunction);
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * @description:  是否为函数
 */
export function isFunction(val: unknown): val is Function {
  return is(val, 'Function');
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'AsyncFunction');
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): val is Array<any> {
  return is(val, 'Array');
}

/**
 * @description: 是否为浏览器
 */
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

/**
 * 是否Set对象
 * @param val
 * @returns
 */
export function isSet(val: unknown): val is Set<any> {
  return is(val, 'Set');
}

/**
 * 是否错误对象
 * @param val
 * @returns
 */
export function isError(val: unknown): val is Error {
  return is(val, 'Error');
}

/**
 * 是否Symbol函数
 * @param val
 * @returns
 */
export function isSymbol(val: unknown): val is Symbol {
  return is(val, 'Symbol');
}

export function isFalse(o: unknown) {
  if (
    o == '' ||
    o == undefined ||
    o == null ||
    o == 'null' ||
    o == 'undefined' ||
    o == 0 ||
    o == false ||
    Number.isNaN(o)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description: 是否客户端
 */
export const isClient = () => {
  return typeof window !== 'undefined';
};

// 是否为图片节点
export function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName);
}

export function isDevFn(mode: string): boolean {
  return mode === 'development';
}

export function isProdFn(mode: string): boolean {
  return mode === 'production';
}

/**
 * Wheter is integer
 *
 * 是否为整数
 */
export function isInt(value: string | number): boolean {
  return isNumber(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 */
export function isDecimal(value: string | number): boolean {
  return isNumber(value) && !isInt(value);
}
