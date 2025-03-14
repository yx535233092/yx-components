# YX Components Theme

YX Components 组件库的主题样式包。

## 安装

```bash
# npm
npm install @yx-components/theme

# yarn
yarn add @yx-components/theme

# pnpm
pnpm add @yx-components/theme
```

## 使用

### 在项目中引入主题

```js
// 在入口文件中引入
import "@yx-components/theme";
```

### 与组件库一起使用

```js
import { createApp } from "vue";
import App from "./App.vue";
import YxComponents from "@yx-components/components";
import "@yx-components/theme";

const app = createApp(App);
app.use(YxComponents);
app.mount("#app");
```

## 自定义主题

你可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  --yx-color-primary: #3498db; /* 自定义主色 */
  --yx-color-success: #2ecc71; /* 自定义成功色 */
  --yx-color-warning: #f39c12; /* 自定义警告色 */
  --yx-color-danger: #e74c3c; /* 自定义危险色 */
}
```

## 许可证

MIT
