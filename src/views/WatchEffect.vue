<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.name = person.name + '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script lang="ts">
  import { reactive, ref, watchEffect } from 'vue';
  export default {
    setup() {
      let sum = ref(0);
      let msg = ref('你好');
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });

      //   interface WatchEffectOptions {
      //     flush?: 'pre' | 'post' => (watchPostEffect()) | 'sync' => (watchSyncEffect()); // 默认：'pre'
      //     onTrack?: (event: DebuggerEvent) => void;
      //     onTrigger?: (event: DebuggerEvent) => void;
      //   }
      //不确定监视对象
      //默认开启了immediate:true 一上来就更新
      watchEffect(() => {
        console.log(`watch effect指定的回调执行了！！`);
        //依赖收集,你用到了谁它就监视谁！！
        //这里用到sum, person.job.j1.salary了,所以可以被监视到(只要它们发生变化就重新执行watchEffect)
        //与computed有点类似，依赖收集.(侧重点不一致,watchEffect注重过程,而computed注重计算函数的返回值)
        const x1 = sum.value;
        const x2 = person.job.j1.salary;
      });

      //返回一个对象
      return {
        sum,
        msg,
        person,
      };
    },
  };
</script>
