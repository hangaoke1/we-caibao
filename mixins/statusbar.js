export default {
  data() {
    return {
      statusBarHeight: 0
    }
  },
  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
  }
}
