import Vue from 'vue';
import App from './App';
import store from './store';

import { hideKeyBoard } from './mixins/mixin';
Vue.mixin(hideKeyBoard);

import uView from "uview-ui";
Vue.use(uView);

const navTo = (url) => {
  uni.navigateTo({
    url: url
  });
};
const msg = (title, duration = 1500, mask = false, icon = 'none', success) => {
  //统一提示方便全局修改
  if (Boolean(title) === false) {
    return;
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon,
    success
  });
};

Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = { msg, navTo };

Vue.config.productionTip = false;
App.mpType = 'app';

// #ifdef APP-PLUS
if (uni.getSystemInfoSync().platform == 'android') {
  let main = plus.android.runtimeMainActivity();
  plus.runtime.quit = function(){
    main.moveTaskToBack(false);
  };
  plus.nativeUI.toast = function(str){
    if (str == '再按一次退出应用') {
      return false;
    } else {
      uni.showToast({
        title: str,
        icon: 'none'
      });
    }
  };
}
// #endif

const app = new Vue({
  ...App,
  store
});

app.$mount();
