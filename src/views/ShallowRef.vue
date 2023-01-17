<template>
  <h2>当前的y是:{{ x.y }}</h2>
  <div>count：{{ x.count }}</div>
  <button @click="change">点我替换x</button>
  <button @click="x.y++">点我y+1</button>
</template>

<script lang="ts">
  import { shallowRef, triggerRef, watchEffect } from 'vue';
  export default {
    setup() {
      //传递基本类型来说,ref与shallowRef基本是没什么区别的
      //但注意对象类型shallowRef不去处理，而ref底层回去借助reactive生成proxy对象(getter/setter)
      //但注意不管是shallowR还是非shallow, 第一层都是响应式的(不如下面的x依然是响应式数据)
      let x = shallowRef({ y: 0, count: 0 });
      watchEffect(() => {
        console.log(x.value.y);
      });
      // 不会触发更改
      // x.value.y = 3;
      // 会触发更改
      // x.value = { y: 2, count: 1 };
      console.log(x);

      const change = () => {
        // 会变，但是没有实时反映到视图上，通过下面的trigger可触发
        x.value.count++;
        // 强制触发依赖于一个浅层ref的副作用，这通常在对浅应用的内部值进行深度变更后使用
        triggerRef(x);
      };

      // let x = ref({ y: 0 })

      return {
        x,
        change,
      };
    },
  };
</script>
