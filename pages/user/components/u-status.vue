<template>
  <view class="u-status">
    <view class="u-title f-30">订单状态</view>
    <view class="u-progress">
      <view class="u-item" v-for="(item, index) in showList" :key="index">
        <view class="u-icon" :class="{ 'z-active': index <= orderStatus }">
          <view class="iconfont white-1" style="font-size: 26rpx;">{{ icon[index] }}</view>
        </view>
        <view class="f-22" :class="{ 'z-active-text': index <= orderStatus }">{{ item }}</view>
        <view class="u-line" v-if="index != showList.length - 1" :class="{ 'z-active': index + 1 <= orderStatus }"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    status: String
  },
  data() {
    return {
      list: ['投注下单', '店主接单', '出票成功', '中奖', '已派奖'],
      list2: ['投注下单', '店主接单', '出票成功', '未中奖'],
      list3: ['投注下单', '店主接单', '已撤单'],
      icon: ['\ue77a', '\ue77b', '\ue779', '\ue778', '\ue77c'],
      map: {
        待出票: 1,
        出票成功: 2,
        中奖: 4,
        已派奖: 4,
        已撤单: 2,
        未中奖: 3
      }
    };
  },
  computed: {
    showList() {
      if (this.status === '未中奖') {
        return this.list2;
      }
      if (this.status === '已撤单') {
        return this.list3;
      }
      return this.list;
    },
    orderStatus() {
      return this.map[this.status];
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-status {
  box-sizing: border-box;
  width: 665rpx;
  padding: 20rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 91, 0.18);
}
.u-progress {
  display: flex;
  align-items: center;
}
.u-item {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.u-line {
  position: absolute;
  top: 20rpx;
  width: 100%;
  height: 8rpx;
  left: 50%;
  background: #eee;
  z-index: 0;
}
.u-icon {
  width: 50rpx;
  height: 50rpx;
  margin-bottom: 10rpx;
  border-radius: 50rpx;
  display: flex;
  background: #eee;
  z-index: 1;
  .g-center();
}
.z-active {
  background: @red-6;
}
.z-active-text {
  color: @red-6;
}

.u-title {
  margin-bottom: 20rpx;
}
</style>
