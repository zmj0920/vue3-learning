<template>
  <div> rxjs </div>
  <div>{{ num }}</div>
  <button @click="count++"> count is: {{ count }} </button>
  <!-- <div v-for="item in data" v-if="item.isActive" :key="item.id"> {{ item.id }}</div> -->
  {{ obj }}
</template>

<script setup lang="ts">
import { onDeactivated, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { from, interval, Observable, timer, of, Subject, Subscription } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { useSubject } from '@/hooks/rxjs/useSubject';
import { useSubscription } from '@/hooks/rxjs/useSubscription';
import { BehaviorSubject } from 'rxjs';
import { tryOnScopeDispose } from '@/hooks/rxjs/tryOnScopeDispose';

import { http } from '../utils/request';

// 删除属性，不会自动变为响应式
// delete obj.someProp;

const data: any = reactive([
  {
    id: 1,
    content: '内容1',
    isActive: false,
  },
  {
    id: 2,
    content: '内容2',
    isActive: true,
  },
  {
    id: 3,
    content: '内容3',
    isActive: false,
  },
  {
    id: 4,
    content: '内容4',
    isActive: true,
  },
  {
    id: 5,
    content: '内容5',
    isActive: false,
  },
]);

const getData = (data: any) => {
  if (data) {
    return {
      name: data.content,
      age: data.id + 10,
    };
  }
  return {
    name: '前端第一菜',
    age: 18,
  };
};
const initStream = () => {
  of(data)
    .pipe(
      switchMap((item: any) =>
        item.map((i: any) => {
          return getData(i);
        }),
      ),
      map((res: any) => {
        return {
          ...res,
          age: res.age * 10,
        };
      }),
    )
    .subscribe((val) => {
      console.log(val);
    });

  interval(1000)
    .pipe(take(10))
    .subscribe((val) => console.log(val));
  timer(0, 5000)
    .pipe(switchMap(() => interval(1000)))
    .subscribe((val) => console.log(val));
};
// 初始化流，在组件mounted时调用

// 将数组作为值的序列发出
const arraySource = from([1, 2, 3, 4, 5]);
// 输出: 1,2,3,4,5
const num = ref(0);
arraySource.subscribe((val) => (num.value = val));

const stream$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next(500);
  }, 500);
  setTimeout(() => {
    subscriber.next(1000);
  }, 1000);
  setTimeout(() => {
    subscriber.next(3000);
  }, 3000);
  setTimeout(() => {
    subscriber.next(40000);
  }, 4000);
});

const subscription$: Subscription = stream$.subscribe({
  complete: () => console.log('done'),
  next: (v) => console.log(v),
  error: () => console.log('errror'),
});

const $subject = reactive(new Subject());

$subject.subscribe({
  next: (v) => console.log(`ObsA${v}`),
});

$subject.subscribe({
  next: (v) => console.log(`ObsB${v}`),
});

const countSubject = new BehaviorSubject(0);
const count = useSubject(countSubject);

let obj: any = reactive({ a: {} });

onMounted(() => {
  $subject.next(1);
  $subject.next(2);
  initStream();
  getHeroes().subscribe((res) => {
    console.log(res[0].name);
  });
  // 添加新属性，不会自动变为响应式
  // obj = { a: '111' };
  watch(count, (value) => console.info('from watcher:', value));
  const subscription = countSubject.subscribe((value) => console.info('from subscriber: ', value));

  http.get('user/info').then((res) => {
    obj.a = res;
    console.log(res);
  });

  useSubscription(subscription);
});

const heroes = reactive([
  { id: 1, name: 'RubberMan', tid: '082-27-5678' },
  { id: 2, name: 'Tornado', tid: '099-42-4321' },
]);

const getHeroes = (): Observable<any[]> => {
  return new Observable<any[]>((observer) => {
    observer.next(heroes);
    observer.complete();
  });
};

onUnmounted(() => {
  subscription$.unsubscribe();
});
</script>
