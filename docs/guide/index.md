# YX Components

欢迎使用 YX 组件库！这是一个基于 Vue 3 的现代化组件库，旨在提供高质量、可定制的 UI 组件，帮助开发者快速构建现代化的 Web 应用。

## 特性

- 🚀 基于 Vue 3 和 TypeScript 开发
- 📦 支持按需引入
- 🎨 现代化的设计风格
- 📖 详细的文档和示例
- ⚡️ 极致的开发体验

## 快速开始

```bash
# 安装
pnpm add @yx-components/components

# 使用
import { createApp } from 'vue'
import { Button } from '@yx-components/components'
import '@yx-components/components/dist/style.css'

const app = createApp(App)
app.use(Button)
app.mount('#app')
```

````

#### 4.2 编写按钮组件文档

在 `components/button.md` 中添加以下内容：

```markdown
# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

```vue
<template>
  <yx-button>默认按钮</yx-button>
  <yx-button type="primary">主要按钮</yx-button>
</template>
````

## API

### 属性

| 参数    | 说明     | 类型    | 可选值                      | 默认值  |
| ------- | -------- | ------- | --------------------------- | ------- |
| type    | 类型     | string  | primary / success / warning | default |
| size    | 尺寸     | string  | large / small               | —       |
| loading | 加载状态 | boolean | —                           | false   |

````

### 5. 更新 `package.json` 文件

在 `packages/docs/package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
````

### 6. 启动 VitePress 文档

在 `packages/docs` 目录下运行以下命令启动文档开发服务器：

```bash
pnpm dev
```

### 7. 访问文档

打开浏览器，访问 `http://localhost:3000`，您将看到 VitePress 生成的文档页面。

### 总结

通过以上步骤，您已经成功在项目中引入了 VitePress，并搭建了组件库的文档。您可以根据需要继续扩展文档内容，添加更多组件的文档和示例。
