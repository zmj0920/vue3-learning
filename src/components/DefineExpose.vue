<template>
  <div v-if="hidden">{{ count }} </div>
</template>

<script setup lang="ts">
  import { defineExpose, ref } from 'vue';
  const count = ref(0);
  const hidden = ref(false);
  const show = () => {
    if (hidden.value) {
      hidden.value = false;
    } else {
      hidden.value = true;
    }
  };

  defineExpose({
    show,
    count,
  });
</script>

<style scoped></style>
