<template>
  <h2>当前的y是:{{ x.y }}</h2>
  <button @click="x = { y: 888 }">点我替换x</button>
  <button @click="x.y++">点我y+1</button>
  <hr />
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive } from 'vue';
export default {
  name: 'Demo',
  setup() {
    //shallowReactive只考虑对象类型的第一层数据响应式
    let person = shallowReactive({
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary: 20
        }
      }
    });

    return {
      person,
      ...toRefs(person),
      x,
    };
  },
};
</script>

<style>
</style>

