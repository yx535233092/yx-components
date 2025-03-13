# Button 组件需求文档

## 组件概述

`Button` 组件用于触发用户操作，支持多种样式和状态。它可以用于表单提交、导航、触发对话框等场景。

## 何时使用

- 当需要用户进行操作时，例如提交表单、打开对话框等。
- 需要提供不同样式的按钮以适应不同的操作类型。

## 代码示例

### 基础用法

```vue
<template>
  <yx-button>默认按钮</yx-button>
  <yx-button type="primary">主要按钮</yx-button>
  <yx-button type="success">成功按钮</yx-button>
  <yx-button type="warning">警告按钮</yx-button>
  <yx-button type="danger">危险按钮</yx-button>
</template>
```

### 按钮尺寸

```vue
<template>
  <yx-button size="large">大型按钮</yx-button>
  <yx-button>默认按钮</yx-button>
  <yx-button size="small">小型按钮</yx-button>
</template>
```

### 禁用状态

```vue
<template>
  <yx-button disabled>禁用按钮</yx-button>
  <yx-button type="primary" disabled>禁用主要按钮</yx-button>
</template>
```

### 加载状态

```vue
<template>
  <yx-button loading>加载中</yx-button>
  <yx-button type="primary" loading>加载中</yx-button>
</template>
```

### 图标按钮

```vue
<template>
  <yx-button icon="search">搜索</yx-button>
  <yx-button icon="edit" />
</template>
```

## API

### 属性

| 参数     | 说明       | 类型    | 可选值                               | 默认值  |
| -------- | ---------- | ------- | ------------------------------------ | ------- |
| type     | 按钮类型   | string  | primary / success / warning / danger | default |
| size     | 尺寸       | string  | large / small                        | default |
| disabled | 是否禁用   | boolean | —                                    | false   |
| loading  | 是否加载中 | boolean | —                                    | false   |
| icon     | 图标类型   | string  | —                                    | —       |

### 事件

| 事件名称 | 说明             | 回调参数                    |
| -------- | ---------------- | --------------------------- |
| click    | 点击按钮时的回调 | (event: MouseEvent) => void |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |
| icon    | 自定义图标 |

## 设计原则

- **可访问性**：确保按钮可以通过键盘操作，支持屏幕阅读器。
- **一致性**：按钮的样式和行为应与应用程序中的其他按钮保持一致。
- **反馈**：在用户点击按钮时提供视觉反馈，例如加载状态或禁用状态。

## 结论

`Button` 组件是一个基础的 UI 组件，能够满足多种用户交互需求。通过灵活的属性和事件，开发者可以根据具体需求进行定制。
