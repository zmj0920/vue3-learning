<template>
  <div>
    <DefineProps :msg-id="msg"></DefineProps>
    <button @click="msgClick">修改msg</button>
    {{ a }}
    <DefineEmits :show="show" @pageFn="showFn"></DefineEmits>
    <DefineExpose ref="refExpose"></DefineExpose>
    <button @click="touchButton">点击使用子组件</button>
    <DefineComponent :name="name1" :age="age" @pMSg="func" :data="123">
      <template #title>
        <div> aaa我是插槽里的标题<span>11111</span> </div>
      </template>
    </DefineComponent>
  </div>
</template>

<script setup lang="ts">
import DefineProps from '../components/DefineProps.vue';
import DefineEmits from '../components/DefineEmits.vue';
import DefineExpose from '../components/DefineExpose.vue';
import DefineComponent from '../components/DefineComponent.vue';
import { ref } from 'vue';
const show = ref(false);
const msg = ref(0);

let a = 1;
const msgClick = () => {
  msg.value = a;
  a++;
};

const showFn = (val: boolean) => {
  console.log(val);
  show.value = val;
};

const refExpose = ref();
const touchButton = () => {
  // 使用子组件方法
  refExpose.value.show();
  // 输出子组件属性
  refExpose.value.count = 2;
};

let age = ref(19);
let name1 = ref('小明2');
const func = (e: any) => {
  console.log('子组件发送过来的信息', e);
};
</script>
