import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()], //使用单文件组件
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), //路径别名
    },
  },
  server: {
    port: 3028,
    open: true,
  },
});
