import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";

import "./assets/main.css";

Amplify.configure(awsExports);

const app = createApp(App);

app.use(router);

app.mount("#app");
