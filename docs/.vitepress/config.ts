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
        link: "/components/",
      },
      {
        text: "需求文档",
        link: "/requires",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" }, // 确保链接正确
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "Button", link: "/components/button.md" },
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
            { text: "Button", link: "/requires/button.r.md" },
            { text: "VirtualList", link: "/requires/virtualList.r.md" },
          ],
        },
      ],
    },
  },
});
