import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Yx Components",
  description: "Yx Components",
  base: "/yx-components/",
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "组件",
        link: "/components/button.md",
      },
      {
        text: "需求文档",
        link: "/requires/button.md",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" }, // 确保链接正确
            { text: "快速开始", link: "/guide/getting-started.md" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "YxButton", link: "/components/button.md" },
            {
              text: "YxVirtualList",
              link: "/components/virtualList.md",
            },
          ],
        },
      ],
      "/requires/": [
        {
          text: "需求文档",
          items: [
            { text: "YxButton", link: "/requires/button.md" },
            { text: "YxVirtualList", link: "/requires/virtualList.md" },
          ],
        },
      ],
    },
  },
});
