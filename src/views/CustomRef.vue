<template>
  <input v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script lang="ts">
  import { ref, customRef } from 'vue';
  export default {
    setup() {
      // let keyWord = ref('hello'); //使用vue提供的内置ref,
      let keyWord = myRef('hello'); //使用自定义ref

      //自定义ref(customRef)
      function myRef(value: string) {
        return customRef((track, trigger) => {
          let timer: any | undefined;
          return {
            get() {
              console.log(`从myRef这个容器读取数据,data:${value}`);
              track(); //通知追踪value的变化(跟getter商量一下让它明确你这个value是有用的)
              return value; //读取的时候就会调用get
            },
            set(nv) {
              console.log(`myRef容器中的数据被修改,data改为${nv}`);
              clearTimeout(timer);
              timer = setTimeout(() => {
                value = nv;
                trigger(); //trigger通知vue重新解析模版 //防抖
              }, 500);
            },
          };
        });
      }

      return {
        keyWord,
      };
    },
  };
</script>
