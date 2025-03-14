<script setup lang="ts">
// 这里可以导入和测试组件
</script>

<template>
  <div class="playground">
    <h1>YX Components Playground</h1>
    <div class="component-display">
      <h2>方式1：使用插件方式（全局注册）</h2>
      <yx-button type="primary">全局注册的按钮</yx-button>

      <h2>方式2：直接使用组件（按需引入）</h2>
      <yx-button size="small">按需引入的按钮</yx-button>

      <h2>方式2：直接使用组件（按需引入）</h2>
      <yx-button size="large" type="success">按需引入的按钮</yx-button>

      <h2>方式2：直接使用组件（按需引入）</h2>
      <yx-button size="large" type="danger">按需引入的按钮</yx-button>
      <h2>方式2：直接使用组件（按需引入）</h2>
      <yx-button size="large" type="warning">按需引入的按钮</yx-button>
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
</style>
