# YX Components

一个基于 Vue 3 的现代化组件库。

## 安装

```bash
# npm
npm install @yx-components/components

# yarn
yarn add @yx-components/components

# pnpm
pnpm add @yx-components/components
```

## 使用

### 全局注册

```js
import { createApp } from "vue";
import App from "./App.vue";
import YxComponents from "@yx-components/components";
// 可选：导入样式
// import '@yx-components/components/dist/style.css'

const app = createApp(App);
app.use(YxComponents);
app.mount("#app");
```

### 按需引入

```js
import { Button } from "@yx-components/components";
// 可选：导入样式
// import '@yx-components/components/dist/style.css'

export default {
  components: {
    "yx-button": Button,
  },
};
```

## 主题

我们提供了一个单独的主题包，你可以安装并使用它：

```bash
# 安装主题包
npm install @yx-components/theme
```

```js
// 在入口文件中引入主题
import "@yx-components/theme";

// 然后引入组件库
import YxComponents from "@yx-components/components";
```

### 自定义主题

你可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  --yx-color-primary: #3498db; /* 自定义主色 */
  --yx-color-success: #2ecc71; /* 自定义成功色 */
  --yx-color-warning: #f39c12; /* 自定义警告色 */
  --yx-color-danger: #e74c3c; /* 自定义危险色 */
}
```

## 组件列表

- Button 按钮

## 开发

```bash
# 安装依赖
pnpm install

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

## 许可证

MIT
