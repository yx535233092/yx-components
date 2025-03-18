// tests/VirtualList.test.js
import { mount } from "@vue/test-utils";
import VirtualList from "./VirtualList.vue";
import { describe, it, expect } from "vitest";

describe("VirtualList", () => {
  const mockData = Array.from({ length: 10000 }, (_, i) => ({
    name: `Item ${i + 1}`,
  }));

  it("renders the correct number of items", () => {
    const wrapper = mount(VirtualList, {
      props: {
        data: mockData,
        itemHeight: 50,
        bufferSize: 5,
      },
    });

    // 检查渲染的项数
    expect(wrapper.findAll(".yx-virtual-list-item")).toHaveLength(10); // 假设初始可见项为10
  });

  it("emits load-more event when scrolled to bottom", async () => {
    const wrapper = mount(VirtualList, {
      props: {
        data: mockData,
        itemHeight: 50,
        bufferSize: 5,
      },
    });

    // 模拟滚动到底部
    await wrapper.vm.$nextTick();
    wrapper.vm.$emit("scroll", { target: { scrollTop: 1000 } }); // 假设滚动到一定高度
    expect(wrapper.emitted("load-more")).toBeTruthy();
  });
});
