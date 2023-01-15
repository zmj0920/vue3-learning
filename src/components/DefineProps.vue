<template>
  <p>{{ theme }}</p>
  <p>{{ msg }}</p>
</template>

<script setup lang="ts">
  import { defineProps, onMounted } from 'vue';

  const props = defineProps({
    theme: {
      type: String,
      validator: (v: string) => ['light', 'dark'].includes(v),
      default: '默认值',
    },
    msg: {
      type: String,
      required: true,
    },
    test: {
      type: String,
    },
  });

  onMounted(() => {
    console.log(props);
  });
</script>
