<template>
  <div>
    <Inject></Inject>
    <button @click="pageFn()">Provide更新</button>
    <div>{{ count }}</div>
  </div>
</template>

<script setup lang="ts">
  import { provide, ref } from 'vue';
  import Inject from '../components/Inject.vue';
  const count = ref(0);
  const color = ref('#000');
  provide('count', count);
  provide('color', color);

  const pageFn = () => {
    color.value = '#fffff';
    count.value = 2;
  };
</script>
