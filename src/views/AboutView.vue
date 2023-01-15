<template>
  <div>
    <h2>vue3新语法</h2>
    <div>{{ girl }}</div>
    <div>{{ data.sex }}</div>
    <button @click="setSex">更新</button>
  </div>
</template>

<script setup lang="ts">
  import {
    onRenderTracked,
    onRenderTriggered,
    reactive,
    ref,
    watch,
  } from 'vue';

  interface DataProps {
    sex: string;
    setSex: (a: any) => void;
  }

  // export default defineComponent({
  //   name: "App",
  //   setup() {
  //     const girl = ref('番茄女孩');
  //     const data: DataProps = reactive({
  //       sex: '男孩',
  //       setSex: () => {
  //         if (data.sex === '男孩') {
  //           data.sex = '女孩'
  //         } else {
  //           data.sex = '男孩'
  //         }

  //         const obj = { name: 'test' }

  //         const proxy = new Proxy(obj, {
  //           get: (target: any, key: string) => {
  //             console.log(`捕获到对象获取${key}属性的值操作`);
  //             return target[key]
  //           },
  //           set: (target: any, key: string, val) => {
  //             console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
  //             // 捕获到对象设置name属性的值操作,新值为123
  //             return target[key] = val;
  //           }
  //         })

  //         console.log(proxy.name = "123");
  //         console.log(obj);

  //       //   const target = new Date('2015-01-01');
  //       //   const handler = {
  //       //     get(target: any, key: string) {
  //       //       if (key === 'getDate') {
  //       //         return target.getDate.bind(target);
  //       //       }
  //       //       return Reflect.get(target, key);
  //       //     }
  //       //   };
  //       //   const proxy = new Proxy(target, handler);
  //       //  console.log( proxy.getDate());
  //         // 1

  //         girl.value = data.sex;
  //       }
  //     })

  //     onRenderTracked((e) => {
  //       console.log(e);
  //       console.log("状态跟踪1");
  //       // 只要页面有update的情况，他就会跟踪
  //     });
  //     onRenderTriggered((e) => {
  //       console.log(e);
  //       console.log("状态跟踪2");
  //       // 当值改变后会有新值和旧值
  //     });

  //     watch([data], (newvalue, oldvalue) => {
  //       console.log(newvalue);
  //       console.log(oldvalue);
  //     });

  //     return {
  //       girl,
  //       data,
  //       ...toRefs(data),
  //     };
  //   },
  //   mounted(){
  //     console.log(this.girl);

  //   }
  // });

  let girl = ref('番茄女孩');
  const data: DataProps = reactive({
    sex: '男孩',
    setSex: (a) => {
      console.log(a);

      if (data.sex === '男孩') {
        data.sex = '女孩';
      } else {
        data.sex = '男孩';
      }

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

      //   const target = new Date('2015-01-01');
      //   const handler = {
      //     get(target: any, key: string) {
      //       if (key === 'getDate') {
      //         return target.getDate.bind(target);
      //       }
      //       return Reflect.get(target, key);
      //     }
      //   };
      //   const proxy = new Proxy(target, handler);
      //  console.log( proxy.getDate());
      // 1

      girl.value = data.sex;
    },
  });

  onRenderTracked((e) => {
    console.log(e);
    console.log('状态跟踪1');
    // 只要页面有update的情况，他就会跟踪
  });
  onRenderTriggered((e) => {
    console.log(e);
    console.log('状态跟踪2');
    // 当值改变后会有新值和旧值
  });

  watch([data], (newvalue, oldvalue) => {
    console.log(newvalue);
    console.log(oldvalue);
  });

  const debounce = (fn: Function, delay: number = 1000, immediately: boolean = true) => {
    let timeId: number | null = null;
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

  const setSex = debounce(() => data.setSex(1), 1000);

</script>
