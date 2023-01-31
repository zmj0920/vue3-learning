import type { Unsubscribable } from 'rxjs'
import { tryOnScopeDispose } from './tryOnScopeDispose'

export function useSubscription(
  subscription: Unsubscribable,
) {
  tryOnScopeDispose(() => {
    subscription.unsubscribe()
  })
}


// <script setup lang="ts">
// import { ref } from 'vue'
// import { interval } from 'rxjs'
// import { useSubscription } from './useSubscription'

// const count = ref(0)
// useSubscription(
//   interval(1000)
//     .subscribe(() => {
//       count.value++
//     }),
// )
// </script>

// <template>
//   <note>Update every 1s</note>
//   <p>Counter: {{ count }}</p>
// </template>
