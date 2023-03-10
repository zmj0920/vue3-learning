import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { viteMockServe } from 'vite-plugin-mock'
//@ts-ignore
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/

export default defineConfig((config) => {
  const { command } = config
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
        localEnabled: command === 'serve'
      })
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
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
      host: '0.0.0.0',
      port: 8000,
      open: true,
      https: false,
      proxy: {},
      hmr: true,
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
