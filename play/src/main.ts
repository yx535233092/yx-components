import { createApp } from "vue";
import App from "./App.vue";
// import YxComponents, { Button } from "@yx-components/components";
// import "@yx-components/components/dist/style.css"; // 引入样式

import YxButton from "@yx-components/components/button";
import VirtualList from "@yx-components/components/virtualList";
import "@yx-components/theme";

const app = createApp(App);

app.use(YxButton);
app.use(VirtualList);

app.mount("#app");
