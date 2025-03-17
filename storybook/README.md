# YX Components Storybook

这是 YX Components 组件库的 Storybook 展示项目，用于展示和测试组件库中的各个组件。

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

开发服务器将在 http://localhost:6006 启动。

## 构建

```bash
# 构建静态站点
pnpm build
```

构建后的文件将输出到 `storybook-static` 目录。

## 预览构建结果

```bash
# 预览构建后的静态站点
pnpm preview
```

## 目录结构

```
storybook/
├── .storybook/        # Storybook配置文件
│   ├── main.ts        # 主配置文件
│   └── preview.ts     # 预览配置文件
├── stories/           # 组件故事文件
│   ├── Button.stories.ts  # 按钮组件的故事
│   └── Introduction.mdx   # 介绍页面
├── package.json       # 项目配置文件
└── README.md          # 项目说明文件
```

## 添加新组件的 Story

1. 在 `stories` 目录下创建新的 `.stories.ts` 文件
2. 导入组件并创建相应的故事
3. 重启开发服务器查看效果

示例：

```typescript
import type { Meta, StoryObj } from "@storybook/vue3";
import { YourComponent } from "@yx-components/components";

const meta = {
  title: "组件/YourComponent",
  component: YourComponent,
  tags: ["autodocs"],
  argTypes: {
    // 定义参数类型
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 默认参数
  },
  render: (args) => ({
    components: { YourComponent },
    setup() {
      return { args };
    },
    template: '<YourComponent v-bind="args" />',
  }),
};
```
