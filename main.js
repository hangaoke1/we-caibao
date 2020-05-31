import Vue from 'vue';
import App from './App';
import store from './store';
import hideKeyBoardMixin from './mixins/hideKeyBoard';

Vue.config.productionTip = false;

App.mpType = 'app';

// vue页面全局配置
Vue.mixin(hideKeyBoardMixin);

// #ifdef APP-PLUS
if (uni.getSystemInfoSync().platform == "android") {
  let main = plus.android.runtimeMainActivity();
  plus.runtime.quit = function() {
    main.moveTaskToBack(false);
  };
  plus.nativeUI.toast = (function(str) {
    if (str == '再按一次退出应用') {
      return false;
    } else {
      uni.showToast({
        title: str,
        icon: 'none',
      })
    }
  });
}
// #endif
Vue.prototype.$store = store;
const app = new Vue({
  ...App,
  store
});

app.$mount();
