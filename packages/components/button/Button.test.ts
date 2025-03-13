// packages/components/button/src/__tests__/Button.test.ts
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import { describe, it, expect } from "vitest";

describe("Button.vue", () => {
  // 测试按钮渲染
  it("renders slot content correctly", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "按钮",
      },
    });
    expect(wrapper.text()).toBe("按钮");
  });

  // 测试按钮类型
  it("renders different types correctly", () => {
    const types: Array<"primary" | "success" | "warning" | "danger"> = [
      "primary",
      "success",
      "warning",
      "danger",
    ];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
      });
      expect(wrapper.classes()).toContain(`yx-button--${type}`);
    });
  });

  // 测试按钮尺寸
  it("renders different sizes correctly", () => {
    const sizes: ("large" | "small")[] = ["large", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`yx-button--${size}`);
    });
  });

  // 测试禁用状态
  it("disabled state works correctly", async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes("disabled")).toBeDefined();

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  // 测试加载状态
  it("loading state works correctly", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    });
    expect(wrapper.classes()).toContain("is-loading");
  });

  // 测试点击事件
  it("emits click event when clicked", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
