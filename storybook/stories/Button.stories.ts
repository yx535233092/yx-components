import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "@yx-components/components";

// 定义组件的元数据
const meta = {
  title: "组件/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "success", "warning", "danger"],
      description: "按钮类型",
    },
    size: {
      control: "select",
      options: ["large", "small"],
      description: "按钮大小",
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
    },
    loading: {
      control: "boolean",
      description: "是否加载中",
    },
    default: {
      description: "按钮内容",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认按钮
export const Default: Story = {
  args: {
    default: "默认按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: "<Button>{{ args.default }}</Button>",
  }),
};

// 主要按钮
export const Primary: Story = {
  args: {
    type: "primary",
    default: "主要按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :type="args.type">{{ args.default }}</Button>',
  }),
};

// 成功按钮
export const Success: Story = {
  args: {
    type: "success",
    default: "成功按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :type="args.type">{{ args.default }}</Button>',
  }),
};

// 警告按钮
export const Warning: Story = {
  args: {
    type: "warning",
    default: "警告按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :type="args.type">{{ args.default }}</Button>',
  }),
};

// 危险按钮
export const Danger: Story = {
  args: {
    type: "danger",
    default: "危险按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :type="args.type">{{ args.default }}</Button>',
  }),
};

// 大号按钮
export const Large: Story = {
  args: {
    size: "large",
    default: "大号按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :size="args.size">{{ args.default }}</Button>',
  }),
};

// 小号按钮
export const Small: Story = {
  args: {
    size: "small",
    default: "小号按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :size="args.size">{{ args.default }}</Button>',
  }),
};

// 禁用按钮
export const Disabled: Story = {
  args: {
    disabled: true,
    default: "禁用按钮",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :disabled="args.disabled">{{ args.default }}</Button>',
  }),
};

// 加载中按钮
export const Loading: Story = {
  args: {
    loading: true,
    default: "加载中",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button :loading="args.loading">{{ args.default }}</Button>',
  }),
};
