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
```

## API

### 属性

| 参数    | 说明     | 类型    | 可选值                      | 默认值  |
| ------- | -------- | ------- | --------------------------- | ------- |
| type    | 类型     | string  | primary / success / warning | default |
| size    | 尺寸     | string  | large / small               | —       |
| loading | 加载状态 | boolean | —                           | false   |
