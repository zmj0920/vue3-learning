<script setup lang="ts">
import { provide, ref } from "vue";

import SlotItem from '../components/SlotItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import Dialog from "../components/Dialog.vue";

import Props from '../components/Props.vue'
import Home from './Home.vue'

const show = ref(false)
const count = ref(0);
const color = ref('#000')
provide('count', count)
provide('color', color)

const pageFn = (val: boolean) => {
  show.value = val
  color.value = '#fffff'
}
let name = ref("itclanCoder");
//在逻辑中,想要读取name的值,需要.value方式
console.log(name.value);
let age = ref(19)
let name1 = ref('小明2')
const func = (e: any) => {
  console.log('子组件发送过来的信息', e)
}

</script>

<template>
  <main>
    <SlotItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
    </SlotItem>
    <Dialog :show="show" @pageFn="pageFn"></Dialog>
    <div>{{ name }}</div>
    <Props :name="name1" :age="age" @pMSg="func" :data="123">
      <template #title>
        <div>
          aaa我是插槽里的标题<span>11111</span>
        </div>
      </template>
    </Props>
    <Home />

  </main>
</template>