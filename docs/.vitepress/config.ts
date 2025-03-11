import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Yx Components",
  description: "Yx Components",
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
    },
  },
});
