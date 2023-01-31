<script setup lang="ts">
  import { useSubject } from '@/hooks/rxjs/useSubject';
  import { useSubscription } from '@/hooks/rxjs/useSubscription';
  import { BehaviorSubject } from 'rxjs';
  import { onMounted, watch } from 'vue';

  const countSubject = new BehaviorSubject(0);
  const count = useSubject(countSubject);

  onMounted(() => {
    watch(count, (value) => console.info('from watcher:', value));
    useSubscription(countSubject.subscribe((value) => console.info('from subscriber: ', value)));
  });
</script>

<template>
  <button @click="count++"> count is: {{ count }} </button>
</template>
