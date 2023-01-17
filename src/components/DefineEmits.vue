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

  const emit = defineEmits<{
    (event: 'pageFn', value: boolean): void;
  }>();

  const butFn = () => {
    emit('pageFn', true);

    nextTick(() => {
      // 访问更新后的 DOM
    });
  };
</script>
