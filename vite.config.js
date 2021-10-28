import { defineConfig } from 'vite';
import path from "path";
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
const resolve = dir => {
  return path.resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ]
    })],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@views': resolve('./src/views'),
      '@api': resolve('./src/api'),
      '@asstes': resolve('./src/assets'),
      '@imp': resolve('./src/assets')
    }
  },
  // 运行配置
  server: {
    port: 8080,
    open: true
    // proxy: {},
  },
  // 打包配置
  build: {
    terserOptions: {
      // 关闭 console
      drop_console: true,
      // 关闭debugger
      drop_debugger : true
    }
  }
})
