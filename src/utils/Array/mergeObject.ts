/**
 * 合并对象
 * @param  {[type]} objs [description]
 * @return {[type]}      [description]
 */
export function mergeObject<T>(...objs: T[]) {
  const result: Record<any, any> = {}

  // 遍历objs
  objs.forEach((obj: any) => {
    Object.keys(obj).forEach(key => {
      // 如果result还没有key值属性
      if (!result.hasOwnProperty(key)) {
        result[key] = obj[key]
      } else { // 否则 合并属性
        result[key] = [].concat(result[key], obj[key])
      }
    })
  })

  // 可以使用reduce来代替forEach手动添加
  return result
}
