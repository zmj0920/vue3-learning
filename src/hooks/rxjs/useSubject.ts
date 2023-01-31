import type { Subject } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import type { UseObservableOptions } from './model'
import { tryOnScopeDispose } from './tryOnScopeDispose'

export interface UseSubjectOptions<I = undefined> extends Omit<UseObservableOptions<I>, 'initialValue'> {
}

export function useSubject<H>(subject: BehaviorSubject<H>, options?: UseSubjectOptions): Ref<H>
export function useSubject<H>(subject: Subject<H>, options?: UseSubjectOptions): Ref<H | undefined>
export function useSubject<H>(subject: Subject<H>, options?: UseSubjectOptions) {
  const value = ref(
    subject instanceof BehaviorSubject
      ? subject.value
      : undefined,
  ) as typeof subject extends BehaviorSubject<H> ? Ref<H> : Ref<H | undefined>

  const subscription = subject.subscribe({
    next(val) { value.value = val },
    error: options?.onError,
  })

  watch(value, (nextValue: any) => {
    subject.next(nextValue)
  })

  tryOnScopeDispose(() => {
    subscription.unsubscribe()
  })

  return value
}


// <script setup lang="ts">
// import { tryOnScopeDispose } from './tryOnScopeDispose'
// import { BehaviorSubject } from 'rxjs'
// import { onMounted, watch } from 'vue'
// import { useSubject } from './useSubject'

// const countSubject = new BehaviorSubject(0)
// const count = useSubject(countSubject)

// onMounted(() => {
//   watch(count, value => console.info('from watcher:', value))

//   const subscription = countSubject.subscribe(value => console.info('from subscriber: ', value))
//   tryOnScopeDispose(() => {
//     subscription.unsubscribe()
//   })
// })
// </script>

// <template>
//   <button @click="count++">
//     count is: {{ count }}
//   </button>
// </template>
