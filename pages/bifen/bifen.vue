<template>
  <view style="height: 100vh;"></view>
</template>
<script>
var wv;
import { openUrl } from '@/util/index.js';
export default {
  mounted() {
    console.log('>>> 加载比分webview');
    const info = uni.getSystemInfoSync();
    const gifRatio = 658 / 494;
    const width = info.screenWidth;
    const height = width / gifRatio;
    let centerButtonOnTab;

    //获取当前页面的webview对象
    const currentWebview = this.$mp.page.$getAppWebview();

    //创建比分webview
    const url = this.getUrl();
    wv = plus.webview.create(
      url,
      'custom-webview',
      {
        'uni-app': 'none',
        plusrequire: 'ahead',
        top: uni.getSystemInfoSync().statusBarHeight
      },
      {
        url: url // 用于错误页面重新加载使用
      }
    );

    currentWebview.append(wv);

    if (uni.getSystemInfoSync().platform == 'android') {
      // setTimeout(() => {
      //   wv.setStyle({ top: uni.getSystemInfoSync().statusBarHeight, bottom: 20 });
      // }, 1000);
       wv.setStyle({ top: uni.getSystemInfoSync().statusBarHeight });
    }

    wv.addEventListener(
      'loaded',
      function() {
        if (centerButtonOnTab) {
          currentWebview.remove(centerButtonOnTab);
          centerButtonOnTab.close();
        }
      },
      false
    );
  },
  methods: {
    getUrl() {
      return (
        '/static/redirect.html?url=' +
        encodeURIComponent('https://live.m.500.com/home/zq/jczq/cur?render=local')
      );
    },
    reload() {
      wv.reload(true);
    },
    showMore() {
      uni.showActionSheet({
        itemList: ['刷新'],
        success: res => {
          if (res.tapIndex == 0) {
            this.reload();
          } else {
            plus.runtime.openURL(wv.getURL());
          }
        }
      });
    }
  }
};
</script>

<style lang="less"></style>
