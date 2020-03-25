<template>
  <!-- 山东11选5 注意改成多选时候需要调整！！！ -->
  <view class="u-js">
    <view class="u-section">
      <view class="u-title">
        <view class="f-30 u-mark">我的号码</view>
        <view class="f-30 grey-3">{{showInfo.numberType}} 共{{showInfo.buyAmount/showInfo.multiple/2}}注{{showInfo.multiple}}倍</view>
      </view>
      <view class="u-content" v-for="(choose, index) in showInfo.schemeContent" :key="index">
        <view class="f-20 grey-3" style="margin-bottom: 10rpx;">{{choose.type}}</view>
        <view v-if="choose.number.indexOf(',') > -1" class="u-ball">
          <view
            v-for="item in choose.nums"
            class="u-ball-item f-30 red-6-bg"
            :class="{active: prizeNums.includes(item)}"
            :key="item">{{item}}</view>
        </view>
        <view class="f-36" v-else>
          <text v-for="(numStr, subIndex) in choose.nums" :key="subIndex">
            <text v-if="subIndex > 0" style="margin: 0 10rpx;">-</text>
            <text class="red-6">{{numStr}}</text>
          </text>
        </view>
      </view>
    </view>

    <view class="u-section">
      <view class="u-title">
        <view class="f-30 u-mark">开奖号码</view>
        <view class="f-30 grey-3">{{showInfo.schemeDetail[0].issue}}期</view>
      </view>
      <view class="u-content">
        <view class="u-ball" v-if="prizeNums.length">
          <view class="u-ball-item f-30 red-6-bg" v-for="item in prizeNums" :key="item">{{item}}</view>
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
  data () {
    return {
      showInfo: ''
    }
  },
  created () {
    const info = _.cloneDeep(this.info);
    info.schemeContent.forEach(item => {
      item.nums = item.number.indexOf(',') > -1 ? item.number.split(',') : item.number.split('-')
    })
    this.showInfo = info
  },
  computed: {
    prizeNums() {
      const numstr = _.get(this.info, 'schemeDetail[0].drawNumber', '');
      if (numstr.indexOf('-') > -1) {
        return numstr ? numstr.split('-') : []
      } else {
        return numstr ? numstr.split(',') : []
      }
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
  border-bottom: 1rpx solid #eee;
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
.active {
  background: @blue-8;
}
</style>
