<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <p>姓名:{{ fullName }}</p>
  <br />
  修改全名:<input type="text" v-model="fullName1" />
</template>
<script setup lang="ts">
  import { reactive, computed } from 'vue';
  let person = reactive({
    firstName: 'pan',
    lastName: 'yue',
    age: 21,
  });

  //计算属性(简写，没有考虑计算属性被修改的情况)
  const fullName = computed(() => {
    return person.firstName + '-' + person.lastName;
  });

  //计算属性(完整写法，既考虑了读也考虑了改)
  const fullName1 = computed({
    get() {
      return person.firstName + '-' + person.lastName;
    },
    set(name) {
      let [fn, ln] = name.split('-');
      //响应式
      person.firstName = fn;
      person.lastName = ln;
    },
  });
</script>
