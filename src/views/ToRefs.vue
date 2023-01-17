
<!-- toRefs 会将 reactive 生成的对象的根级属性全都用 ref 转成 ref 对象，然后解构出来的都是 ref 对象，从而不丢失响应式 -->
<script lang="ts" setup>
  import { reactive, toRefs } from 'vue';
  const state = reactive({
    foo: 1,
    bar: 2,
  });
  let a = { ...state };
  const stateAsRefs = toRefs(state);
  // stateAsRefs 是一个普通对象，stateAsRefs.foo则是响应式对象，因此{...}解构才不会丢失响应式
  let { bar } = stateAsRefs;
  console.log(stateAsRefs);
  console.log(stateAsRefs.foo.value); // 因为使用了 ref ，理所应当 .value。
  console.log(a);
</script>
