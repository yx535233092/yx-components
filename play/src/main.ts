import { createApp } from "vue";
import App from "./App.vue";
// import YxComponents, { Button } from "@yx-components/components";
// import "@yx-components/components/dist/style.css"; // 引入样式

import a from "@yx-components/components/button";
import "@yx-components/theme";

const app = createApp(App);

// app.component("yx-button", Button);
app.use(a);
// app.use(YxComponents);

app.mount("#app");
