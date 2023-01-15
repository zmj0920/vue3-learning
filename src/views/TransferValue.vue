<template>
  <div>
    <DefineProps :msg="'msg'"></DefineProps>
    <DefineEmits :show="show" @pageFn="showFn"></DefineEmits>
    <DefineExpose ref="refExpose"></DefineExpose>
    <button @click="touchButton">点击使用子组件</button>
  </div>
</template>

<script setup lang="ts">
  import DefineProps from '../components/DefineProps.vue';
  import DefineEmits from '../components/DefineEmits.vue';
  import DefineExpose from '../components/DefineExpose.vue';
  import { ref } from 'vue';
  const show = ref(false);
  const showFn = (val: boolean) => {
    console.log(val);
    show.value = val;
  };

  const refExpose = ref();
  const touchButton = () => {
    // 使用子组件方法
    refExpose.value.show();
    // 输出子组件属性
    refExpose.value.count = 2;
  };
</script>
