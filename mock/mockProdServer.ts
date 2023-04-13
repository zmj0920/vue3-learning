import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules: any = import.meta.glob('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key: any) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
