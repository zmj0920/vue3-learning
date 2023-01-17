import { EffectScope, effectScope, onScopeDispose, reactive } from 'vue';

function useMouse() {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function handler(e: { x: number; y: number }) {
    point.x = e.x;
    point.y = e.y;
  }

  window.addEventListener('click', handler);

  onScopeDispose(() => {
    window.removeEventListener('click', handler);
  });

  return point;
}

function createSharedComposable(composable: Function) {
  let subscribers = 0;
  let state: null = null;
  let scope: EffectScope | null = null;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop();
      state = scope = null;
    }
  };

  return (...args: any) => {
    subscribers++;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    onScopeDispose(dispose);
    return state;
  };
}

const useSharedMouse = createSharedComposable(useMouse);

export default useSharedMouse;
