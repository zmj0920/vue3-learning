<template>
  <div>
    <h2>Proxy</h2>
    <button @click="setValue">更新</button>
  </div>
</template>

<script setup lang="ts">
  const change = () => {
    const obj = { name: 'test' };
    const proxy = new Proxy(obj, {
      get: (target: any, key: string) => {
        console.log(`捕获到对象获取${key}属性的值操作`);
        return target[key];
      },
      set: (target: any, key: string, val) => {
        console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
        // 捕获到对象设置name属性的值操作,新值为123
        return (target[key] = val);
      },
    });
    console.log((proxy.name = '123'));
    console.log(obj);
    const target = new Date('2015-01-01');
    const handler = {
      get(target: any, key: string) {
        if (key === 'getDate') {
          return target.getDate.bind(target);
        }
        return Reflect.get(target, key);
      },
    };
    const proxy1 = new Proxy(target, handler);
    console.log(proxy1.getDate());
  };

  const debounce = (fn: Function, delay: number = 1000, immediately: boolean = true) => {
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
  };
  const setValue = debounce(() => change(), 1000);
</script>
