<template>
  <div
    class="yx-virtual-list-container"
    ref="containerRef"
    @scroll="handleScroll"
  >
    <div
      class="yx-virtual-list-item-container"
      :style="{ height: totalHeight + 'px' }"
    >
      <div
        class="yx-virtual-list-show-container"
        :style="{ transform: `translateY(${offsetY}px)` }"
      >
        <div
          v-for="(item, index) in visibleItems"
          class="yx-virtual-list-item"
          :style="{
            '--item-height': itemHeight + 'px',
          }"
          :key="index"
        >
          <slot name="item" :data="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, withDefaults } from "vue";

type propsType = {
  itemHeight: number;
  data: any[];
  bufferSize: number;
};

// 使用 withDefaults 为 bufferSize 设置默认值
const props = withDefaults(defineProps<propsType>(), {
  bufferSize: 5, // 设置默认值为 5
  itemHeight: 50,
  data: () => {
    return new Array(100)
      .fill({
        name: "Item",
      })
      .map((item, index) => {
        return {
          item,
          index,
        };
      });
  },
});

// 所有数组内容加一起的高度
const totalHeight = computed(() => {
  return props.data.length * props.itemHeight;
});

// 偏移量，根据开始索引计算
const offsetY = computed(() => {
  return startIndex.value * props.itemHeight;
});

// 开始索引，根据滚动距离计算，向下取整，取整是为了避免滚动失去自然感
const startIndex = computed(() => {
  return Math.floor(scrollTop.value / props.itemHeight);
});

const containerRef = ref<HTMLDivElement>();

// 结束索引，根据可视区域能放下的内容个数+开始索引+缓冲区计算
const endIndex = computed(() => {
  const visibleCount = containerRef.value
    ? Math.ceil(containerRef.value.clientHeight / props.itemHeight)
    : 0;
  return startIndex.value + visibleCount + props.bufferSize;
});

// 可视区域内容（选取开始索引到结束索引的内容）
const visibleItems = computed(() => {
  return props.data.slice(startIndex.value, endIndex.value);
});

// 让滚动距离变成响应式数据
const scrollTop = ref(0);

const emit = defineEmits(["load-more"]);
// 监听滚动事件，容器滚动多少，展示面板就跟着移动多少距离
const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target) {
    scrollTop.value = target.scrollTop;
    if (
      containerRef.value && // 添加检查
      scrollTop.value + containerRef.value.clientHeight >= totalHeight.value
    ) {
      emit("load-more");
    }
  }
};
</script>
<style scoped>
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
</style>
