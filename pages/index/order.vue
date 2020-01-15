<template>
  <view class="u-order">
    <view class="u-header">
      <view class="u-user" @tap="goDashen">
        <!-- <image class="u-avatar" :src="info.avatar"></image> -->
        <div class="u-avatar">
          <g-img :src="info.avatar"></g-img>
        </div>
        <text class="u-name f-30 lines-1">{{info.userName}}</text>
      </view>
      <view class="u-hot">
        <text class="f-30" style="margin-right: 10rpx;">人气</text>
        <text class="iconfont red-6 f-28" v-for="item in hotCount" :key="item">&#xe6c2;</text>
      </view>
    </view>
    <view class="u-content" @click="goOrder">
      <view class="u-table">
        <view class="u-tr">
          <view class="u-td f-30 grey-5">截止时间</view>
          <view class="u-td f-30 grey-5">类型玩法</view>
          <view class="u-td f-30 grey-5">自购金额</view>
        </view>
        <view class="u-tr">
          <view class="u-td f-30">
            <view class="f-24 grey-5">{{info.endTime.slice(-14, -9)}}</view>
            <view class="f-24 grey-5">{{info.endTime.slice(-8, -3)}}</view>
          </view>
          <view class="u-td f-30">
            <view class="f-24 grey-5">{{info.lotteryName}}</view>
          </view>
          <view class="u-td f-30">
            <view class="f-24 red-6">{{Number(info.money)}}元</view>
          </view>
        </view>
      </view>
      <view class="u-action">
        <text class="f-36 white-1">跟单</text>
      </view>
    </view>
  </view>
</template>

<script>
import gImg from '@/components/g-img/index.vue';
  
export default {
  props: {
    info: Object
  },
  components: {
    gImg
  },
  computed: {
    hotCount () {
      return Number(this.info.starCount)
    },
  },
  methods: {
    goDashen() {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + this.info.userId
      });
    },
    goOrder() {
      uni.navigateTo({
        url: '/pages/case/case?id=' + this.info.schemeId
      });
    },
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-order {
  box-sizing: border-box;
  padding: 30rpx;
  height: 400rpx;
}
.u-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}
.u-user {
  display: flex;
  align-items: center;
}
.u-avatar {
  margin-right: 10rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  border: 4rpx solid @yellow-6;
  overflow: hidden;
  transform: scale(1);
}
.u-hot {
  display: flex;
  align-items: center;
}
.u-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.u-action {
  box-sizing: border-box;
  padding: 10rpx 20rpx;
  background-color: @red-6;
  border-radius: 6rpx;
}

.u-table {
  box-sizing: border-box;
  width: 500rpx;
  border-top: 1rpx solid #ccc;
  border-left: 1rpx solid #ccc;
}
.u-tr {
  display: flex;
}
.u-td {
  box-sizing: border-box;
  width: 33.33%;
  padding: 20rpx;
  border-right: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
  text-align: center;
  display: flex;
  flex-direction: column;
  .g-center();
}
</style>
