import Button from "./button/Button.vue";
import type { App } from "vue";

// 导出组件类型
export type { ButtonProps } from "./button/Button.vue";

// 导出单个组件，方便按需引入
export { Button };

// 定义配置选项接口
export interface YxComponentsOptions {
  /** 是否自动引入主题 (默认: true) */
  useTheme?: boolean;
  /** 组件前缀 (默认: 'yx') */
  prefix?: string;
  /** 自定义组件 */
  components?: Record<string, any>;
}

// 创建插件对象
const YxComponents = {
  install(app: App) {
    app.component("yx-button", Button);
    // 可以在这里注册其他组件
  },
};

// 导出插件对象
export default YxComponents;

// 为了兼容性，也提供命名导出
export { YxComponents };

// 导出一个函数，用于同时引入组件和主题
export const setupYxComponents = (app: App) => {
  // 可以在这里添加引入主题的逻辑，但实际上主题应该由用户自己引入
  app.use(YxComponents);
  return app;
};
