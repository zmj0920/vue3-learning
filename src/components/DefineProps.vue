<template>
  <p>{{ theme }}</p>
  <p>{{ msgId }}</p>
</template>

<script setup lang="ts">
import { defineProps, onMounted, toRefs } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    validator: (v: string) => ['light', 'dark'].includes(v),
    default: '默认值',
  },
  msgId: {
    type: Number,
    required: true,
    default: () => 0,
  },
  test: {
    type: String,
  },
});

const { msgId, test, theme } = toRefs(props);
onMounted(() => {
  console.log(msgId);
  console.log(test);
});
</script>
