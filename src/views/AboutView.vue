<template>
  <div>
    <h2>vue3新语法</h2>
    <div>{{ girl }}</div>
    <div>{{ data.sex }}</div>
    <button @click="setSex">更新</button>
    <input type="text" v-model="copyData" />
    <button v-copy="copyData">复制</button>
    <div>
      <div v-ellipsis="'50px'"> 需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本 </div>
    </div>

    <Ellipsis :newline="newline" :maxLen="maxLen" :content="text2"> </Ellipsis>
  </div>
</template>

<script setup lang="ts">
  import {
    defineComponent,
    onMounted,
    onRenderTracked,
    onRenderTriggered,
    reactive,
    ref,
    toRefs,
    watch,
  } from 'vue';
  import { from, combineLatest, BehaviorSubject, interval } from 'rxjs';
  import { map, take } from 'rxjs/operators';
  import Ellipsis from '../components/Ellipsis.vue';
  const text2 =
    ref(`先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
    宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
    侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
    将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
    亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
    臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
    先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
    愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。
    今当远离，临表涕零，不知所言。`);
  const newline = ref(5);
  const maxLen = ref(400);
  interface DataProps {
    sex: string;
    setSex: (a: any) => void;
  }

  // export default defineComponent({
  //   name: "App",
  //   setup() {
  //     const girl = ref('番茄女孩');
  //     const data: DataProps = reactive({
  //       sex: '男孩',
  //       setSex: () => {
  //         if (data.sex === '男孩') {
  //           data.sex = '女孩'
  //         } else {
  //           data.sex = '男孩'
  //         }

  //         const obj = { name: 'test' }

  //         const proxy = new Proxy(obj, {
  //           get: (target: any, key: string) => {
  //             console.log(`捕获到对象获取${key}属性的值操作`);
  //             return target[key]
  //           },
  //           set: (target: any, key: string, val) => {
  //             console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
  //             // 捕获到对象设置name属性的值操作,新值为123
  //             return target[key] = val;
  //           }
  //         })

  //         console.log(proxy.name = "123");
  //         console.log(obj);

  //       //   const target = new Date('2015-01-01');
  //       //   const handler = {
  //       //     get(target: any, key: string) {
  //       //       if (key === 'getDate') {
  //       //         return target.getDate.bind(target);
  //       //       }
  //       //       return Reflect.get(target, key);
  //       //     }
  //       //   };
  //       //   const proxy = new Proxy(target, handler);
  //       //  console.log( proxy.getDate());
  //         // 1

  //         girl.value = data.sex;
  //       }
  //     })

  //     onRenderTracked((e) => {
  //       console.log(e);
  //       console.log("状态跟踪1");
  //       // 只要页面有update的情况，他就会跟踪
  //     });
  //     onRenderTriggered((e) => {
  //       console.log(e);
  //       console.log("状态跟踪2");
  //       // 当值改变后会有新值和旧值
  //     });

  //     watch([data], (newvalue, oldvalue) => {
  //       console.log(newvalue);
  //       console.log(oldvalue);
  //     });

  //     return {
  //       girl,
  //       data,
  //       ...toRefs(data),
  //     };
  //   },
  //   mounted(){
  //     console.log(this.girl);

  //   }
  // });

  let girl = ref('番茄女孩');
  const data: DataProps = reactive({
    sex: '男孩',
    setSex: (a) => {
      console.log(a);

      if (data.sex === '男孩') {
        data.sex = '女孩';
      } else {
        data.sex = '男孩';
      }

      const obj = { name: 'test' };

      const proxy = new Proxy(obj, {
        get: (target: any, key: string) => {
          console.log(`捕获到对象获取${key}属性的值操作`);
          return target[key];
        },
        set: (target: any, key: string, val) => {
          console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
          // 捕获到对象设置name属性的值操作,新值为123
          return (target[key] = val);
        },
      });

      console.log((proxy.name = '123'));
      console.log(obj);

      //   const target = new Date('2015-01-01');
      //   const handler = {
      //     get(target: any, key: string) {
      //       if (key === 'getDate') {
      //         return target.getDate.bind(target);
      //       }
      //       return Reflect.get(target, key);
      //     }
      //   };
      //   const proxy = new Proxy(target, handler);
      //  console.log( proxy.getDate());
      // 1

      girl.value = data.sex;
    },
  });

  onRenderTracked((e) => {
    console.log(e);
    console.log('状态跟踪1');
    // 只要页面有update的情况，他就会跟踪
  });
  onRenderTriggered((e) => {
    console.log(e);
    console.log('状态跟踪2');
    // 当值改变后会有新值和旧值
  });

  watch([data], (newvalue, oldvalue) => {
    console.log(newvalue);
    console.log(oldvalue);
  });

  const copyData = ref<string>('我是被复制的内容 🍒 🍉 🍊');

  const debounce = (fn: Function, delay: number = 1000, immediately: boolean = true) => {
    let timeId: number | null = null;
    // 返回一个函数
    return (...args: any[]) => {
      // 判断
      if (immediately) {
        fn(args);
        immediately = false;
        return;
      }
      // 判断
      if (timeId !== null) {
        // 清空定时器
        clearTimeout(timeId);
      }
      timeId = setTimeout(() => {
        // 执行回调
        fn(args);
        // 重置定时器变量
        timeId = null;
      }, delay);
    };
  };

  const setSex = debounce(() => data.setSex(1), 1000);
  // return toRefs(data)
  // return {
  //   girl,
  //   data,
  //   ...toRefs(data),
  // };
</script>

<!-- 
  
toRefs() 解决返回值 data.sex问题 


setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
onBeforeMount() : 组件挂载到节点上之前执行的函数。
onMounted() : 组件挂载完成后执行的函数。
onBeforeUpdate(): 组件更新之前执行的函数。
onUpdated(): 组件更新完成之后执行的函数。
onBeforeUnmount(): 组件卸载之前执行的函数。
onUnmounted(): 组件卸载完成后执行的函数
onActivated(): 被包含在<keep-alive>中的组件，会多出两个生命周期钩子函数。被激活时执行。
onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数（不太会用。还在了解中）


 Vue2--------------vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured
-->
