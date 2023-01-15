<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
</template>
<script lang="ts">
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from 'vue';
  export default {
    setup() {
      let sum = ref(0);

      //通过组合式api的形式去使用生命周期钩子
      ///setup()相当于beforeCreate()和created()
      onBeforeMount(() => {
        console.log('----beforeMount----');
      });
      onMounted(() => {
        console.log('-----mounted-----');
      });
      onBeforeUpdate(() => {
        console.log('-----beforeUpdate-----');
      });
      onUpdated(() => {
        console.log('-----updated-----');
      });
      onBeforeUnmount(() => {
        console.log('-----beforeUnmount----');
      });
      onUnmounted(() => {
        console.log('-----unmounted----');
      });

      console.log('-----setup----');

      //返回一个对象
      return {
        sum,
      };
    },
    //使用配置项的形式使用生命周期钩子
    // beforeCreate() {
    //   console.log('----beforeCreate!!----');
    //组件实例被创建之初
    // },
    // created() {
    //   console.log('----created!!----');
    // 组件实例已经完全创建
    // },
    // beforeMount() {
    //   console.log('----beforeMount----');
    // 组件挂载之前
    // },
    // mounted() {
    //   console.log('-----mounted-----');
    // 组件挂载到实例上去之后
    // },
    // beforeUpdate() {
    //   console.log('-----beforeUpdate-----')
    // 组件数据发生变化，更新之前
    // },
    // updated() {
    //   console.log('-----updated-----');
    // 数据数据更新之后
    // },
    // beforeUnmount() {
    //   console.log('-----beforeUnmount----');
    // 组件实例销毁之前
    // },
    // unmounted() {
    //   console.log('-----unmounted----');
    // 组件实例销毁之后
    // }
  };
</script>
