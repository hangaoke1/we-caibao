import { mapState } from 'vuex';
import { get } from "@/storage/index.js";

export const commonMixin = {
  computed: {
    ...mapState('user', [ 'loginInfo' ])
  },
  data() {
    return {};
  },
  filters: {
    fixed(v, scale) {
      if (v) {
        if (!scale) {
          scale = 2;
        }
        return parseFloat(v).toFixed(scale);
      }
      return v;
    }
  },
  methods: {
    isLogin() {
      if (!get('SESSION')) {
        uni.navigateTo({
          url: '/pages/login/login'
        });
      } else {
        return true;
      }
    },
    redirectTo(url, auth) {
      if (auth && !get('SESSION')) {
        uni.navigateTo({
          url: '/pages/login/login'
        });
        return;
      }
      uni.redirectTo({
        url: url
      });
    },
    navTo(url, auth) {
      if (auth && !get('SESSION')) {
        uni.navigateTo({
          url: '/pages/login/login'
        });
        return;
      }
      uni.navigateTo({
        url: url
      });
    }
  }
};

export const authMixin = {
  onLoad() {
    if (!get('SESSION')) {
      uni.navigateTo({
        url: '/pages/login/login'
      });
    }
  },
};

export const hideKeyBoard = {
  // 修复安卓下后退无法自动隐藏键盘问题
  onHide () {
    // #ifdef APP-PLUS
    plus.key.hideSoftKeybord();
    // #endif
  },
  onUnload () {
    // #ifdef APP-PLUS
    plus.key.hideSoftKeybord();
    // #endif
  },
}