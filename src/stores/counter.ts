import { defineStore } from 'pinia';

import { localGet, localSet } from '@/utils/localStorage';

export const TOKEN_KEY = 'TOKEN__';

// 高级用法，第二个参数传入一个函数来定义 Store
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doublePlusOne() {
      // this 访问到当前 store 实例
      return this.doubleCount;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useUserStore = defineStore('user', {
  state: (): any => ({
    // token
    token: undefined,
  }),
  getters: {
    getToken(state): string {
      return state.token || localGet(TOKEN_KEY);
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : '';
      localSet(TOKEN_KEY, info);
    },

  },
});
