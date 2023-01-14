/**
 * [flat description]
 * @param  {[type]} array [description]
 * @return {[type]}     [description]
 */
export function flat(array){
  let arr = [].concat(...array)
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// let arr = [1,32,4,[32,43,5,3],3,23]
// let result = flat(arr);
// console.log(result);
