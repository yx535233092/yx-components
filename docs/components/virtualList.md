# yx-virtual-list 组件使用说明

`yx-virtual-list` 组件是一个高性能的虚拟列表组件，适用于需要展示大量数据的场景。该组件通过虚拟化技术，仅渲染可视区域内的列表项，从而提高性能和用户体验。

## 安装

确保你已经安装了 Vue 3 和相关依赖。然后将 `yx-virtual-list` 组件引入到你的项目中。

```bash
npm install your-package-name
```

## 使用示例

### 基本用法

在你的 Vue 组件中使用 `yx-virtual-list` 组件：

```vue
<template>
  <yx-virtual-list
    :data="items"
    :itemHeight="50"
    :bufferSize="5"
    @load-more="loadMoreItems"
  >
    <template #item="{ data }">
      <div>{{ data.name }} - {{ data.index }}</div>
    </template>
  </yx-virtual-list>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { name: "Item 1" },
  { name: "Item 2" },
  // ...更多数据
]);

const loadMoreItems = () => {
  // 加载更多数据的逻辑
};
</script>
```

### 属性说明

| 属性         | 类型     | 默认值 | 描述                           |
| ------------ | -------- | ------ | ------------------------------ |
| `itemHeight` | `number` | 50     | 每个列表项的高度（单位：像素） |
| `data`       | `Array`  | []     | 列表项的数据数组               |
| `bufferSize` | `number` | 5      | 在可视区域外预加载的列表项数量 |

### 事件

- `load-more`: 当滚动到列表底部时触发，通常用于加载更多数据。

## 样式

组件的样式是 scoped 的，你可以根据需要自定义样式。默认样式如下：

```css
.yx-virtual-list-container {
  width: 400px;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.yx-virtual-list-item {
  height: var(--item-height);
  line-height: var(--item-height);
  padding: 5px 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
}
```

## 注意事项

- 确保 `data` 属性传入的数据是一个数组。
- `itemHeight` 属性应与实际列表项的高度一致，以确保滚动效果的准确性。

## 结论

`yx-virtual-list` 组件是一个高效的解决方案，适合需要展示大量数据的应用场景。通过合理配置属性和事件，可以轻松实现流畅的用户体验。
