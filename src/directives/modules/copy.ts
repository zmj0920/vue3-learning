/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import type { Directive, DirectiveBinding } from 'vue';

const copy: Directive = {
  beforeMount(el, binding: DirectiveBinding) {
    // 实时更新最新的目标内容
    el.targetContent = binding.value;
    el.addEventListener('click', () => copyTextArea(el.targetContent));
  },
  updated(el, binding: DirectiveBinding) {
    el.targetContent = binding.value;
  },

  unmounted(el) {
    el.removeEventListener('click', el.copyTextArea);
  },
};

function copyTextArea(value: string): Promise<string> {
  return new Promise((resolve) => {
    let copyTextArea = null;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      document.execCommand('copy');
      resolve(value);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}

export default copy;
