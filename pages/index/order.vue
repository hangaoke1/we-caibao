<template>
  <view class="u-order">
    <view class="u-header">
      <view class="u-user" @click.stop="goDashen">
        <div class="u-avatar">
          <g-img :src="info.avatar" defaultSrc="/static/portrait.png"></g-img>
        </div>
        <text class="u-name f-30 lines-1">{{info.userName}}</text>
      </view>
      <view class="u-hot">
        <text class="f-30" style="margin-right: 10rpx;">人气</text>
        <g-img width="35" height="35" src="/static/icon_hot_topic.png" v-for="item in hotCount" :key="item"></g-img>
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
    </view>
    <view class="u-bottom">
      <view class="u-count">
        <view class="u-count-item" :class="{'u-active': item === count}" v-for="item in list" :key="item" @click="selectCount(item)">{{item}}倍</view>
      </view>
      <view class="u-buy" @click="goOrder">立即下单</view>
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
  data () {
    return {
      list: [10, 20, 50, 100],
      count: 10
    }
  },
  computed: {
    hotCount () {
      return Number(this.info.starCount)
    },
  },
  methods: {
    selectCount (c) {
      this.count = c
    },
    goDashen() {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + this.info.userId
      });
    },
    goOrder() {
      uni.navigateTo({
        url: `/pages/case/case?id=${this.info.schemeId}&count=${this.count}`
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
  height: 460rpx;
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
  width: 640rpx;
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

.u-bottom {
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.u-count {
  display: flex;
  align-items: center;
  border: 2rpx solid #eee;
  border-radius: 10rpx;
  font-size: 30rpx;
}
.u-count-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60rpx;
  width: 110rpx;
  color: @grey-6;
  border-right: 2rpx solid #eee;
  &:nth-last-of-type(1) {
    border-right: none;
  }
}

.u-buy {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60rpx;
  width: 150rpx;
  font-size: 30rpx;
  background: @red-6;
  color: #fff;
  border-radius: 10rpx;
}
.u-active {
  color: @red-6;
}
</style>
