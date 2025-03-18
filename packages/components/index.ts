import type { App } from "vue";
import Button from "./button/Button.vue";
import VirtualList from "./virtualList/VirtualList.vue";

// 创建插件对象
const YxComponents = {
  install(app: App) {
    app.component("yx-button", Button);
    app.component("yx-virtual-list", VirtualList);
    // 可以在这里注册其他组件
  },
};

// 导出插件对象
export default YxComponents;

// 导出单个组件，方便按需引入
export { Button, VirtualList };

// 为了兼容性，也提供命名导出
export { YxComponents };
