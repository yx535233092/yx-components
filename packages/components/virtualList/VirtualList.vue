<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  // 列表数据
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  // 每项高度
  itemHeight: {
    type: Number,
    default: 50,
  },
  // 缓冲区大小
  bufferSize: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["load-more"]);

// 容器元素引用
const containerRef = ref<HTMLElement | null>(null);
// 可视区域高度
const viewportHeight = ref(0);
// 滚动位置
const scrollTop = ref(0);

// 计算起始索引
const startIndex = computed(() => {
  return Math.max(
    0,
    Math.floor(scrollTop.value / props.itemHeight) - props.bufferSize
  );
});

// 计算结束索引
const endIndex = computed(() => {
  const visibleCount = Math.ceil(viewportHeight.value / props.itemHeight);
  return Math.min(
    props.data.length,
    Math.floor(scrollTop.value / props.itemHeight) +
      visibleCount +
      props.bufferSize
  );
});

// 计算可见项
const visibleItems = computed(() => {
  return props.data.slice(startIndex.value, endIndex.value);
});

// 计算总高度
const totalHeight = computed(() => {
  return props.data.length * props.itemHeight;
});

// 计算偏移量
const offsetY = computed(() => {
  return startIndex.value * props.itemHeight;
});

// 处理滚动事件
const handleScroll = (e: Event) => {
  const target = e.target as HTMLElement;
  scrollTop.value = target.scrollTop;

  // 检查是否滚动到底部
  if (target.scrollHeight - target.scrollTop <= target.clientHeight + 50) {
    emit("load-more");
  }
};

// 初始化视口高度
const initViewportHeight = () => {
  if (containerRef.value) {
    viewportHeight.value = containerRef.value.clientHeight;
  }
};

// 监听窗口大小变化
const handleResize = () => {
  initViewportHeight();
};

onMounted(() => {
  initViewportHeight();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div ref="containerRef" class="virtual-list" @scroll="handleScroll">
    <div class="virtual-list-phantom" :style="{ height: `${totalHeight}px` }" />
    <div
      class="virtual-list-content"
      :style="{ transform: `translate3d(0, ${offsetY}px, 0)` }"
    >
      <div
        v-for="(item, index) in visibleItems"
        :key="startIndex + index"
        class="virtual-list-item"
        :style="{ height: `${itemHeight}px` }"
      >
        <slot name="item" :item="item" :index="startIndex + index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.virtual-list {
  height: 100%;
  overflow-y: auto;
  position: relative;
}

.virtual-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.virtual-list-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  will-change: transform;
}

.virtual-list-item {
  width: 100%;
  box-sizing: border-box;
}
</style>
