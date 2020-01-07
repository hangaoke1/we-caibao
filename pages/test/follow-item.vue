<template>
  <view class="u-follow-item">
    <view class="u-top">
      <view class="u-user" @tap="goDashen">
        <image class="u-avatar" :src="info.avatar" alt="" />
        <view class="lines-1">
          <text class="f-30">{{ info.userName }}</text>
        </view>
      </view>
      
      <view style="display: flex;align-items: center;">
        <view class="u-bao blue-6-bg white-1 f-24" v-if="showRate">保{{info.rate}}</view>
        <view class="u-data">
          <view class="u-combo">  
            <text class="red-6 f-24">{{ info.continueRedCount }}连红</text>
          </view>
          <view class="u-calc red-6-bg">
            <text class="white-1 f-24">{{ info.hitDetail || '0中0' }}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="u-mid">
      <view class="lines-1 f-30">{{info.sdescribe}}</view>
    </view>
    
    <view class="u-bottom">
      <view class="u-list">
        <view class="u-item">
          <text class="f-28 grey-6">截止时间</text>
          <text class="f-22 grey-6">{{info.endTime.slice(-14, -9)}}</text>
          <text class="f-22 grey-6">{{info.endTime.slice(-8, -3)}}</text>
        </view>
        <view class="u-item">
          <text class="f-28 grey-6 u-item-top">类型玩法</text>
          <text class="f-24 red-6 u-item-bottom">{{info.lotteryName}}</text>
        </view>
        <view class="u-item">
          <text class="f-28 grey-6 u-item-top">自购</text>
          <view class="f-row u-item-bottom" style="align-items: center;">
            <text class="f-24 red-6">{{Number(info.money)}}</text>
            <text class="f-24 grey-6">元</text>
          </view>
        </view>
        <view class="u-item">
          <text class="f-28 grey-6 u-item-top">人气</text>
          <text class="f-28 u-item-bottom f-row">
            <text class="f-20 red-6 iconfont" v-for="item in hotCount" :key="item">&#xe6c2;</text>
          </text>
        </view>
        <view class="u-item" style="align-items: flex-end;">
          <view class="u-action"><text class="f-30 white-1">跟单</text></view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
export default {
  props: {
    info: Object
  },
  computed: {
    hotCount () {
      return Number(this.info.starCount)
    },
    showRate () {
      return Number(this.info.rate) != 1.2
    }
  },
  methods: {
    goDashen() {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + this.info.userId
      });
    },
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-follow-item {
  box-sizing: border-box;
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 10rpx;
}
.u-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}
.u-avatar {
  box-sizing: border-box;
  width: 70rpx;
  height: 70rpx;
  margin-right: 10rpx;
  border-radius: 70rpx;
  background-color: #ccc;
}

.u-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 90rpx;
}
.u-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border: 1rpx solid @red-6;
  // border-radius: 5rpx;
}

.u-bao {
  display: flex;
  box-sizing: border-box;
  width: 90rpx;
  height: 40rpx;
  margin-right: 10rpx;
  border: 1rpx solid @blue-6;
  .g-center();
}
.u-calc {
  display: flex;
  box-sizing: border-box;
  width:  90rpx;
  height: 40rpx;
  .g-center();
}
.u-combo {
  display: flex;
  box-sizing: border-box;
  width: 90rpx;
  height: 40rpx;
  background-color: #fff;
  .g-center();
}
.u-mid {
  box-sizing: border-box;
  width: 710rpx;
  padding: 30rpx 20rpx;
  border-bottom: 1rpx solid #ccc;
}

.u-bottom {
  display: flex;
  flex-direction: column;
}
.u-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 130rpx;
}
.u-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-top {
    display: flex;
    height: 40rpx;
    .g-center();
  }
  &-bottom {
    display: flex;
    height: 40rpx;
    .g-center();
  }
}
.u-action {
  padding: 6rpx 30rpx;
  background-color: @red-6;
  border-radius: 6rpx;
}
</style>
