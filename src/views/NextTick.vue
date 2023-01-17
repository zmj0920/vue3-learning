<template>
  <div ref="test">{{ name }}</div>
  <el-button @click="handleClick">按钮</el-button>
</template>
<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  const name = ref('沐华');
  const test = ref();
  async function handleClick() {
    name.value = '掘金';
    console.log(test.value.innerText); // 沐华
    await nextTick();
    console.log(test.value.innerText); // 掘金
  }
  return { name, test, handleClick };
</script>
