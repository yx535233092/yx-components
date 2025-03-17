<script setup lang="ts">
import { ref } from "vue";

// 生成测试数据
const generateItems = (count: number, startIndex = 0) => {
  return Array.from({ length: count }, (_, index) => ({
    id: startIndex + index,
    name: `Item ${startIndex + index}`,
    description: `This is the description for item ${startIndex + index}`,
  }));
};

const items = ref(generateItems(1000));

// 加载更多数据
const loadMore = () => {
  const newItems = generateItems(100, items.value.length);
  items.value = [...items.value, ...newItems];
};
</script>

<template>
  <div class="playground">
    <h1>YX Components Playground</h1>
    <div class="component-display">
      <h2>type: default</h2>
      <yx-button>primary</yx-button>

      <h2>type: primary</h2>
      <yx-button type="primary">primary</yx-button>

      <h2>size: success</h2>
      <yx-button type="success">success</yx-button>

      <h2>type: danger</h2>
      <yx-button type="danger">danger</yx-button>

      <h2>type: warning</h2>
      <yx-button type="warning">warning</yx-button>

      <h2>size: small</h2>
      <yx-button size="small">small</yx-button>

      <h2>size: large</h2>
      <yx-button size="large">large</yx-button>
    </div>

    <div class="component-display">
      <h2>虚拟列表</h2>
      <div class="demo-container">
        <h2>虚拟列表示例</h2>
        <div class="list-wrapper">
          <yx-virtual-list
            :data="items"
            :item-height="80"
            :buffer-size="5"
            @load-more="loadMore"
          >
            <template #item="{ item }">
              <div class="list-item">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </template>
          </yx-virtual-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground {
  padding: 20px;
}

.component-display {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h2 {
  margin: 20px 0 10px;
  font-size: 18px;
  color: #333;
}

.demo-container {
  padding: 20px;
}

.list-wrapper {
  height: 600px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.list-item {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.list-item h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.list-item p {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
