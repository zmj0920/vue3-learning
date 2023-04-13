<template>
  <h1>我是app组件</h1>
  <h1>我叫{{ name }}, {{ age }}岁</h1>
  <h3>职位:{{ job.type }}</h3>
  <h3>薪水:{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script lang="ts">
  import { ref, unref } from 'vue';
  export default {
    setup() {
      //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
      let name = ref('py'); //ref引用对象
      let age = ref(21);
      //ref实现响应式(对象类型)也是采用Proxy来实现
      let job = ref({
        type: 'frontend developer',
        salary: '30',
      });

      function changeInfo() {
        name.value = '李四';
        age.value = 42;
        job.value.type = 'UI developer';
        console.log(name, age); //不是响应式的
      }

      // 如果参数是 ref，则返回内部值 value，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
      // const valueRef = ref('');
      // const value = unref(valueRef);
      // if (!value) {
      //   console.log('请输入要拷贝的内容！');
      //   return;
      // }

      //返回一个对象
      return {
        name,
        age,
        job,
        changeInfo,
      };
    },
  };
</script>
