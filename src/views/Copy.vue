<template>
  <div>
    <input type="text" v-model="copyData" />
    <button v-copy="copyData">复制</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const copyData = ref<string>('我是被复制的内容 🍒 🍉 🍊');
</script>
