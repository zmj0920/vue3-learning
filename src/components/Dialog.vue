<template>
	<button @click="butFn">显示</button>
	{{ show }}
	<div v-if="show">
		111
	</div>
	<div>这是注入的内容{{ count }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, defineProps, defineEmits, nextTick, inject } from "vue";

//第一种
// defineProps(["page"]);
// //第二种 
// defineProps({
//   page:Number
// });
// //第三种
// defineProps({
//   page:{
//     type:Number,
//     default:2
//   }
// });
// //第四种

// defineProps:{
//   page:[String,Number]
// }

defineProps<{
	show?: boolean,
}>()
const emit = defineEmits(["pageFn"]);   //定义一个变量来接收父组件传来的方法
const count = inject('count');
console.log(count)
const butFn = () => {
	emit("pageFn", true)

	nextTick(() => {
		// 访问更新后的 DOM
	})
}

</script>