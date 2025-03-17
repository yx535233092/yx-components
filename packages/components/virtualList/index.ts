import type { App } from "vue";
import VirtualList from "./VirtualList.vue";

const VirtualListComponent = {
  install(app: App) {
    app.component("yx-virtual-list", VirtualList);
  },
};

export default VirtualListComponent;
