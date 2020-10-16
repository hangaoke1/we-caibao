<template>
  <!-- 排列3/5 -->
  <list class="u-10024">
    <cell v-for="(item, index) in list" :key="index">
      <view class="u-item">
        <view class="u-title flex align-center justify-between">
          <text class="f-30 grey-6">{{ item.issue }}期</text>
          <text class="f-30 grey-6">{{ item.drawTime }}</text>
        </view>
        <view class="u-result flex">
          <view
            class="u-ball flex red-6-bg"
            v-for="(num, index) in item.drawNumber.split(',')"
            :key="index"
          >
            <text class="f-30 white-1">{{ num }}</text>
          </view>
        </view>
      </view>
    </cell>
  </list>
</template>

<script>
import lottery from '@/api/lottery/index.js';
export default {
  data() {
    return {
      list: []
    };
  },
  onReady() {
    lottery
      .getIssueNotify({
        lotteryId: 10024,
        firstRow: 0,
        fetchSize: 10
      })
      .then(res => {
        this.list = res;
      });
  }
};
</script>

<style lang="less">
@import '~@/styles/common.less';

.u-10024 {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.u-item {
  padding: 20rpx 20rpx;
  border-bottom: 1rpx solid #eee;
}

.u-title {
  padding: 20rpx 0;
}

.u-result {
  padding: 10rpx 0;
}

.u-ball {
  width: 60rpx;
  height: 60rpx;
  border-radius: 60rpx;
  margin-right: 20rpx;
  .g-center();
}
</style>
