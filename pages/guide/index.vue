<template>
    <view class="content"></view>
</template>

<script>
export default {
    onLoad() {
      this.checkGuide();
    },
    methods: {
        checkGuide() {
            // 思路： 检测是否有启动缓存，如果没有，就是第一次启动，第一次启动就去 启动介绍页面
            // const launchFlag = uni.getStorageSync('launchFlag');
            const session = uni.getStorageSync('SESSION');
            if (session) {
              uni.switchTab({
                url: '/pages/index/index'
              });
            } else {
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
            // 去掉引导页面
            // if (launchFlag) {
            //   if (session) {
            //     uni.switchTab({
            //       url: '/pages/index/index'
            //     });
            //   } else {
            //     uni.navigateTo({
            //       url: '/pages/login/login'
            //     })
            //   }
            // } else {
            //     console.log('去启动介绍页');
            //     uni.redirectTo({
            //         url: '/pages/guide/list'
            //     });
            // }
        }
    }
};
</script>

<style></style>
