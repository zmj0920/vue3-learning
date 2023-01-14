/**
 * 深拷贝
 * @param  {[type]} target   [description]
 * @param  {Map}    [map=new Map(]         [description]
 * @return {[type]}          [description]
 */
export function deepCopy(target, map=new Map()) {
  if (target!==null && typeof target==='object') {
    // 从缓存容器中读取克隆对象
    let cloneTarget = map.get(target)
    // 如果存在, 返回前面缓存的克隆对象
    if (cloneTarget) {
      return cloneTarget
    }
    // 创建克隆对象(可能是{}或者[])
    if (target instanceof Array) {
      cloneTarget = []
      // 缓存到map中
      map.set(target, cloneTarget)
      target.forEach((item, index) => {
        cloneTarget[index] = deepCopy(item, map)
      })
    } else {
      cloneTarget = {}
      // 缓存到map中
      map.set(target, cloneTarget)
      Object.keys(target).forEach(key => {
        cloneTarget[key] = deepCopy(target[key], map)
      })
    }

    return cloneTarget
  }

  return target
}
