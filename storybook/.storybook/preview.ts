import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { YxComponents } from "@yx-components/components";

// 导入主题和组件样式
import "../../packages/theme/index.css";
import "../../packages/components/button/Button.style.css";

// 设置全局Vue插件
setup((app) => {
  app.use(YxComponents);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["介绍", "组件"],
      },
    },
  },
};

export default preview;
