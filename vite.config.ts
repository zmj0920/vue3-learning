import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/

export default defineConfig((config) => {
  const { command } = config;
  const isBuild = command === 'build';
  return {
    base: './', //打包路径
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteMockServe({
        // 只在开发阶段开启 mock 服务
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
        import { setupProdMockServer } from '../mock/mockProdServer';

        setupProdMockServer();
          `,
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "@/assets/mian.css";',
        },
      },
    },
    //启动服务配置
    server: {
      host: '127.0.0.1',
      port: 8000,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      hmr: true,
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
      target: 'es2020',
      outDir: 'dist',
      assetsDir: 'assets',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
});
