import Button from "./Button.vue";
import type { App } from "vue";

const ButtonComponent = {
  install(app: App) {
    app.component("yx-button", Button);
  },
};

export default ButtonComponent;
