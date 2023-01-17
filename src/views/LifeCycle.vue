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

      // 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。
      //     onRenderTracked((e) => {
      //       console.log(e);
      //       console.log("状态跟踪1");
      //       // 只要页面有update的情况，他就会跟踪
      //     });

      // 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
      // 这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。
      //     onRenderTriggered((e) => {
      //       console.log(e);
      //       console.log("状态跟踪2");
      //       // 当值改变后会有新值和旧值
      //     });

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
