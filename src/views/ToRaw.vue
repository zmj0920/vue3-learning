<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">sum+1</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
  <button @click="showRawPerson">输出最原始的person</button>
</template>

<script lang="ts">
  import { reactive, ref, toRaw, toRefs } from 'vue';

  export default {
    setup() {
      let sum = ref(0);

      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
      // toRaw() 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。
      // 这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。
      const showRawPerson = () => {
        const p = toRaw(person);
        // console.log(person); //proxy代理对象 Proxy {....}
        p.age++; //注意此时页面不会再发生变化了,普普通通的对象不是响应式
        console.log(p); //原始对象数据  {....}

        console.log(toRaw(person).name === '张三'); // true
        // const sum  = toRaw(sum);
        // console.log(sum); //undefined //这条路走不通,toRaw只处理reactive对象
      };

      return {
        sum,
        person,
        ...toRefs(person),
        showRawPerson,
      };
    },
  };
</script>

<style></style>
