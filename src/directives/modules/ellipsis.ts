import type { Directive, DirectiveBinding } from 'vue';

const ellipsis: Directive = {
  beforeMount(el, binding: DirectiveBinding) {
    console.log(binding);
    
    el.style.width = binding.value || '100px';
    el.style.whiteSpace = 'nowrap';
    el.style.overflow = 'hidden';
    el.style.textOverflow = 'ellipsis';
    // el.title = ellipsis.rawContent
  },
};

export default ellipsis;
