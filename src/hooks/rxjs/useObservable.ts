import type { Observable } from 'rxjs'
import type { Ref, UnwrapRef } from 'vue'
import { ref } from 'vue'
import type { UseObservableOptions } from './model'
import { tryOnScopeDispose } from './tryOnScopeDispose'


export function useObservable<H, I = undefined>(
  observable: Observable<H>,
  options?: UseObservableOptions<I | undefined>): Readonly<Ref<H | I>> {
  const value = ref<H | I | undefined>(options?.initialValue)
  const subscription = observable.subscribe({
    next: val => (value.value = (val as UnwrapRef<H>)),
    error: options?.onError,
  })
  tryOnScopeDispose(() => {
    subscription.unsubscribe()
  })
  return value as Readonly<Ref<H | I>>
}


// <script setup lang="ts">
// import { interval } from 'rxjs'
// import { mapTo, scan, startWith } from 'rxjs/operators'
// import { useObservable } from './useObservable'

// const count = useObservable(
//   interval(1000).pipe(
//     mapTo(1),
//     startWith(0),
//     scan((total, next) => next + total),
//   ),
// )
// </script>

// <template>
//   <note>Update every 1s</note>
//   <p>Counter: {{ count }}</p>
// </template>
