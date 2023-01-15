<template>
  <button @click="butFn">显示</button>
  {{ show }}
  <div v-if="show"> 111 </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, nextTick } from 'vue';
  defineProps({
    show: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['pageFn']); //定义一个变量来接收父组件传来的方法
  const butFn = () => {
    emit('pageFn', true);

    nextTick(() => {
      // 访问更新后的 DOM
    });
  };
</script>
