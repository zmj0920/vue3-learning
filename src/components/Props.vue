<script lang="ts">
import { defineComponent, inject, toRefs } from 'vue';

// defineComponent 是 Vue 3 推出的一个全新 API ，可用于对 TypeScript 代码的类型推导，帮助开发者简化掉很多编码过程中的类型声明。
// defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
export default defineComponent({
	props: {
		name: String,
		age: Number
	},
	setup(props, context) {

		const color = inject('color');
		const { age, name } = toRefs(props)
		// console.log(name.value);
		// 透传 Attributes（非响应式的对象，等价于 $attrs）
		// console.log(context.attrs.data)

		// 插槽（非响应式的对象，等价于 $slots）
		console.log(context.slots)

		const defaults = context.slots.title?.();//获取插槽
		console.log(defaults)
		// const titles = defaults.map((tag) => {
		// 	return tag.props.title; //拿到Tab.title(插槽)内容
		// });

		// 触发事件（函数，等价于 $emit）
		// console.log(context.emit)

		// 暴露公共属性（函数）
		// console.log(context.expose)

		const postMsg = () => {
			context.emit('pMSg', { msg: '我是子组件发送的信息' })
		}
		return { postMsg, defaults, color }
	}
})
</script>

<template>
	<div>
		{{ name }} -{{ age }}
		<slot name='title'></slot>
		<button @click="postMsg">
			我是子组件，我要向父组件发送事件了
		</button>
		{ defaults }{{ color }}
	</div>
</template>