// import type { App } from 'vue';
// import copy from './modules/copy';

// const DIRECTIVES_MODULES: any = {
//   // Custom directives
//   'copy': copy,
// };

// const directives = {
//   install: function (app: App) {
//     Object.keys(DIRECTIVES_MODULES).forEach((key) => {
//       // 注册所有自定义指令
//       app.directive(key, DIRECTIVES_MODULES[key]);
//     });
//   },
// };

// export default directives;

/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import copy from './modules/copy';
import ellipsis from './modules/ellipsis';

const DIRECTIVES_MODULES: any = {
  // Custom directives
  'copy': copy,
  'ellipsis':ellipsis
};

export function setupGlobDirectives(app: App) {
  Object.keys(DIRECTIVES_MODULES).forEach((key) => {
    // 注册所有自定义指令
    app.directive(key, DIRECTIVES_MODULES[key]);
  });
}
