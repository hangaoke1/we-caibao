<template>
  <view class="u-order" @click.stop="goDetail">
    <view class="u-title">
      <view class="lines-1">
        <text class="f-26">{{ item.sdescribe || ' ' }}</text>
      </view>
    </view>
    <view class="u-list">
      <view class="u-item">
        <view>
          <text class="f-26 grey-6">{{ item.lotteryName }}</text>
        </view>
        <view><text class="f-26">类型玩法</text></view>
      </view>
      <view class="u-item">
        <view>
          <text class="f-26 grey-6">{{ item.money }}元</text>
        </view>
        <view><text class="f-26">订单金额</text></view>
      </view>
      <view class="u-item">
        <view>
          <text class="f-26 red-6 iconfont" v-for="item in hotCount" :key="item">&#xe6c2;</text>
        </view>
        <view><text class="f-26">跟单人气</text></view>
      </view>
      <view class="u-item" style="flex: 0 0 auto;" v-if="item.beFollow">
        <view class="u-result">
          <view class="u-follow white-1 red-6-bg f-30">跟单</view>
        </view>
      </view>
      <view class="u-item" style="flex: 0 0 auto;" v-else>
        <!-- 201待出票  301出票成功  501中奖 601未中奖 701撤单 -->
        <view class="u-result" v-if="item.status == 201"><text class="f-30">待出票</text></view>
        <view class="u-result" v-if="item.status == 301"><text class="f-30 green-6">出票成功</text></view>
        <view class="u-result" v-if="item.status == 501">
          <image class="u-img" src="/static/win.png"></image>
          <text class="u-des f-22 red-6 f-bold">{{ (item.prize || 0).toFixed(1) }}元</text>
        </view>
        <view class="u-result" v-if="item.status == 601">
          <image class="u-img" src="/static/nowin.png"></image>
          <text class="u-des f-22 grey-6">未中奖</text>
        </view>
        <view class="u-result" v-if="item.status == 701"><text class="f-30">撤单</text></view>
      </view>
    </view>
    <view class="u-bottom">
      <text class="f-22 grey-6">推单时间：{{ item.orderTime }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    hotCount() {
      return Number(this.item.starCount);
    }
  },
  methods: {
    goDetail() {
      uni.navigateTo({
        url: '/pages/case/case?id=' + this.item.schemeId
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-order {
  background-color: #fff;
}
.u-title {
  box-sizing: border-box;
  padding: 23rpx 45rpx;
}
.u-list {
  display: flex;
  flex-direction: row;
}
.u-item {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:after {
    position: absolute;
    content: '';
    width: 1rpx;
    height: 40rpx;
    right: 0;
    top: 50%;
    background: #ccc;
    transform: translateY(-50%);
  }
  &:nth-last-of-type(1):after {
    width: 0;
  }
  &:nth-last-of-type(2):after {
    width: 0;
  }
}

.u-follow {
  display: flex;
  width: 160rpx;
  height: 80rpx;
  border-radius: 10rpx;
  .g-center();
}

.u-result {
  flex: 0 0 auto;
  position: relative;
  display: flex;
  width: 200rpx;
  height: 158rpx;
  .g-center();
}
.u-des {
  transform: rotate(-18deg);
  transform-origin: 50% 50%;
}
.u-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.u-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 17rpx 0;
}
</style>
