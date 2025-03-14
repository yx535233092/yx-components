import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "YxComponents",
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        // 修改 assetFileNames 确保返回字符串
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "components.css"
            ? "style.css"
            : (assetInfo.name as string);
        },
      },
    },
  },
});
