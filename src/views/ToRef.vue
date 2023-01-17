
<!-- 可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
用人话讲就是为 源响应式对象(toRef的第一个参数) 上的某个 property 新创建一个 ref -->
<script lang="ts" setup>
  import { reactive, toRef } from 'vue';
  //! 新的ref对象对源property建立响应式连接，修改其中一个，另一个也会同步！
  const state = reactive({
    foo: 1,
    bar: 2,
  });
  const fooRef = toRef(state, 'foo');
  fooRef.value++;
  state.foo++;
  console.log(fooRef, state); // 3
</script>
