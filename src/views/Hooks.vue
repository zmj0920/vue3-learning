<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前点击时鼠标的坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
  {{ mu }}
</template>

<script lang="ts">
  import useSharedMouse from '@/hooks/useMouse';
  import { ref } from 'vue';
  import usePoint from '../hooks/usePoint';
  export default {
    setup() {
      let sum = ref(0);

      //复用自定义hooks
      const point = usePoint();

      const mu = useSharedMouse();

      //返回一个对象
      return {
        sum,
        point,
        mu,
      };
    },
  };
</script>
