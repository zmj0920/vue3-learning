/* ES6黑科技 */

// 解构赋值
const foo = [1, 2, 3, 4, 5];
const [one, two, three] = foo;
console.log(`one is ${one}, two is ${two}, three is ${three}`);
const [first, , , four] = foo;
console.log(`first is ${first}, four is ${four}`);

// 延展语法
let c = [1, 2, 3];
let c1 = [...c];
c1.push(4); // 基本类型值不可变
console.log(c);
console.log(c1);

let obj = {
  a: 1,
  b: [1, 2, 3],
};
let obj2 = { ...obj };
obj2.a = 2;
obj2.b.push(6); // 引用类型值可变
console.log(obj, obj2);

// 拷贝
const arr1 = [
  1,
  '3',
  {
    a: 1,
  },
  666,
];
const copyArr = [...arr1];
console.log(copyArr); // [ 1, '3', { a: 1 }, 666 ]

// 拼接数组
const arr2: any[] = [1, 2, 3];
const arr3: any[] = [
  4,
  {
    a: 8,
  },
];
// 老办法
// const result1 = arr2.concat(arr3);
// console.log(result1);

// const result2 = [].concat(arr2, arr3);
// console.log(result2);

// 新办法
const result3 = [...arr2, ...arr3];
console.log(result3);

// 变量变换
let a = 'world';
let b = 'hello';
[a, b] = [b, a];
console.log(`${a},${b}`);

// 对象属性简写
const name1 = 'hwt';
const age = 26;
const city = 'wuhan';
const student = { name1, age, city };
console.log(student);

/* ES7 */
// includes
const arr4 = [1, 2, 3];
console.log(arr4.includes(1));

// 指数操作符
const cal: any = (base: any, exponent: any) => {
  if (exponent === 1) {
    return base;
  } else {
    return base * cal(base, exponent - 1);
  }
};

console.log(cal(2, 10));
console.log(Math.pow(2, 10));
console.log(2 ** 10);

/* ES8 */
// async/await
// Object.values()
// Object.entries()
// String padding
// 函数参数列表结尾允许逗号
// Object.getOwnPropertyDescriptors()

const obj3: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};
const values = Object.keys(obj3).map((key: string) => obj3[key]);
console.log(values);

const values1 = Object.values(obj3);
console.log(values1);

for (let [key, value] of Object.entries(obj3)) {
  console.log(`key: ${key}, value: ${value}`);
}

// 数组最大值
const max = (arr: number[]) => Math.max(...arr);
console.log(max([1, 2, 3])); // 3

// 数组求和
const sum = (arr: any) => arr.reduce((r: any, c: any) => r + c, 0);
console.log(sum([1, 2, 3])); // 6
