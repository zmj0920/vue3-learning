<template>
  <button @click="butFn">显示</button>
  <div ref="msgDiv">{{ msg }}</div>
  <div> msg1-{{ msg1 }}</div>
  <div> msg2-{{ msg2 }}</div>
  <div> msg3-{{ msg3 }}</div>
  {{ show }}
  <div v-if="show"> 111 </div>
  <button  @click="changeMsg">Change the Message</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, nextTick, ref } from 'vue';
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const msgDiv = ref();

const msg = ref('Hello Vue.');

const emit = defineEmits<{
  (event: 'pageFn', value: boolean): void;
}>();

const butFn = () => {
  emit('pageFn', true);

  nextTick(() => {
    // 访问更新后的 DOM
  });
};

const msg1 = ref('');
const msg2 = ref('');
const msg3 = ref('');

async function changeMsg() {
  msg.value = 'Hello world.';
  msg1.value = msgDiv.value.innerHTML;
  nextTick(() => {
    msg2.value = msgDiv.value.innerHTML;
  });
  msg3.value = msgDiv.value.innerHTML;
}
</script>
