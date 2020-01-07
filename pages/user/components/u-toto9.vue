<template>
  <view class="u-js">
    <view class="u-section">
      <view class="u-title">
        <view class="f-30 u-mark">我的号码</view>
        <view class="f-30 grey-3">{{info.numberType}} 共{{info.buyAmount/info.multiple/2}}注{{info.multiple}}倍</view>
      </view>
      <view class="u-content">
        <view class="u-ball">
          <view class="u-ball-item f-30" v-for="(item, index) in myNums" :key="index">{{item}}</view>
        </view>
      </view>
    </view>
    <view class="u-section">
      <view class="u-title">
        <view class="f-30 u-mark">开奖号码</view>
        <view class="f-30 grey-3">{{info.schemeDetail[0].issue}}期</view>
      </view>
      <view class="u-content">
        <view class="u-ball" v-if="prizeNums.length">
          <view class="u-ball-item f-30" v-for="(item, index) in prizeNums" :key="index">{{item}}</view>
        </view>
        <view v-else class="f-30 grey-3">待开奖</view>
      </view>
    </view>
    
    <view class="u-section">
      <view class="u-title">
        <view class="f-30 u-mark">订单编号</view>
        <view class="f-30"></view>
      </view>
      <view class="u-content">
        <view class="f-30 grey-3">{{info.schemeId}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
export default {
  props: {
    info: Object
  },
  mounted () {
    // console.log(this.info)
  },
  computed: {
    myNums () {
      const numstr = _.get(this.info, 'schemeContent[0].number', '');
      if (this.info.numberType === '复式') {
        return numstr ? numstr.split('-') : []
      } else {
        return numstr ? numstr.split('') : []
      }
    },
    prizeNums() {
      const numstr = _.get(this.info, 'schemeDetail[0].drawNumber', '');
      return numstr ? numstr.split('') : []
    }
  }
  
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-js {
  margin-top: 30rpx;
  padding-bottom: 100rpx;
}
.u-section {
  margin-bottom: 30rpx;
  background: #fff;
}
.u-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 40rpx;
  border-bottom: 1rpx solid #eee;
}
.u-content {
  padding: 20rpx 30rpx;
}
.u-ball {
  display: flex;
  flex-wrap: wrap;
}
.u-ball-item {
  flex: 0 0 auto;
  width: 60rpx;
  height: 60rpx;
  margin-right: 20rpx;
  margin-bottom: 20rpx;
  border-radius: 60rpx;
  background: @red-6;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  .g-center();
}
.u-mark {
  position: relative;
  line-height: 30rpx;
}
.u-mark:after {
  content: '';
  position: absolute;
  left: -14rpx;
  top: 50%;
  height: 30rpx;
  width: 8rpx;
  background: @red-6;
  transform: translateY(-50%);
}
</style>
