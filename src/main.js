import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import VCharts from "v-charts";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/scss/font-awesome.scss";
import axios from "axios";

import BModal from "bootstrap-vue/es/components/modal/modal";
import BModalDirective from "bootstrap-vue/es/directives/modal/modal";

import animated from "animate.css";

import ElementUI from "element-ui";

Vue.use(BootstrapVue);
Vue.use(VCharts);
Vue.use(ElementUI);
Vue.use(animated);

Vue.prototype.$http = axios;
axios.defaults.timeout = 5000; //响应时间
//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";        //配置请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charse=UTF-8"; //配置请求头
axios.defaults.baseURL = "http://127.0.0.1:8000/";

Vue.component("my-component", {
  components: {
    "b-modal": BModal
  },
  directives: {
    "b-modal": BModalDirective
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
