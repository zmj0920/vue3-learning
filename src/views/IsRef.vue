<template>
  <div class="app"> </div>
</template>

<!-- 响应式数据的判断 -->
<script lang="ts">
  import {
    reactive,
    readonly,
    ref,
    isRef,
    isReactive,
    isReadonly,
    isProxy,
    unref,
  } from 'vue';
  export default {
    setup() {
      let car = reactive({
        name: '宝马',
        price: 40,
      });

      let sum = ref(0);

      let car2 = readonly(car); ///readonly依然返回代理类型的对象只不过它不能再改而已

      console.log(
        isRef(sum),
        isReactive(car),
        isReadonly(car2),
        isProxy(car),
        isProxy(car2),
        isProxy(sum),
      );
    },
  };
</script>
