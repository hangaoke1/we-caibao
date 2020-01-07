export default {
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
