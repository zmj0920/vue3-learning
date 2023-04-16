<template>
  <div>
    <div>{{ counterStore.count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <button @click="counterStore.increment()">修改</button>
    <button @click="handleSubmit()">登录</button>
    <button @click="getUserInfo()">getUserInfo</button>
    <button @click="onTestError()">error</button>

  </div>
</template>

<script setup lang="ts">
import { useCounterStore, useUserStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import request from '@/utils/request';
import { login, loginRaw, getUserInfo } from '@/api';

const counterStore = useCounterStore();
const userStore = useUserStore();

//   解构 store
const { count, doubleCount } = storeToRefs(counterStore);
counterStore.count++;
//   多条数据修改
counterStore.$patch({ count: counterStore.count + 1 });
//   函数来批量修改
//   counterStore.$patch((state) => {
//     state.count;
//   });
// 监听 store
counterStore.$subscribe((mutation, state) => {
  // 每当状态发生变化时，将 state 持久化到本地存储
  console.log(state);
});

interface FormState {
  username: string;
  password: string;
}
const loginForm = reactive<FormState>({
  username: 'test',
  password: '123456',
});

const handleSubmit = async () => {
  const form = {
    username: loginForm.username,
    password: loginForm.password,
  };
  const res: any = await login(form);

  if (res.data) {
    userStore.setToken(res.data.token);
  }

  const res2: any = await loginRaw(form);
  console.log(res2.data.token);
};

const getUserInfo = async () => {
  const userInfo = await getUserInfo();
  console.log(userInfo);
};

const onTestError = () => {
  request.get('/error');
};
</script>
