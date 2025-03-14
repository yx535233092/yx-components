import { createApp } from "vue";
import App from "./App.vue";
import YxComponents from "@yx-components/components/button";

import "@yx-components/theme";

const app = createApp(App);

// 方式1：使用插件方式（全局注册）
app.use(YxComponents);

app.mount("#app");
