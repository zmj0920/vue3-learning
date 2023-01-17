<template>
  <div>这是注入的内容{{ count }}-{{ color }}</div>
  <button @click="update()">Inject修改</button>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  let count: any = inject('count');
  let color: any = inject('color');
  console.log(count);

  const update = () => {
    count.value = 1;
    color.value = '#111111';
  };
</script>
