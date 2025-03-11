import Button from "./Button.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("yx-button", Button);
  },
};
