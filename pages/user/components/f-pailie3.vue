<template>
  <view class="animated fadeIn faster">
    <view class="bg-bai p-2 mt-2">
      <view class="u-title flex align-center justify-between">
        <text>期数</text>
        <text class="text-hui font-s-24">{{ info.numberType }}</text>
      </view>
      <view class="font-s-3 text-gray">第{{ info.schemeDetail[0].issue }}期</view>
    </view>

    <view class="bg-bai p-2 mt-2">
      <view class="u-title">
        <text class="mr-2">我的号码</text>
        <text class="text-hui font-s-24">
          <text class="px-1">{{ info.multiple }}</text>
          <text>倍</text>
          <text class="px-1">{{ info.schemeNumberUnit }}</text>
          <text>注</text>
        </text>
      </view>
      <view class="py-2 font-s-24" v-for="(item, index) in info.schemeContent" :key="index">
        <view class="text-red">
          <text class="text-hui mr-3">{{ item.type }}</text>
          <text class="font-weight-bold" v-if="item.number.indexOf('-') > -1">
            {{ item.number }}
          </text>
          <text class="font-weight-bold" v-else>{{ item.number.split('').join(' ') }}</text>
        </view>
      </view>
    </view>

    <view class="bg-bai p-2 mt-2">
      <view class="u-title">开奖号码</view>
      <view v-if="drawNumber">{{drawNumber}}</view>
      <view v-else class="font-s-3 text-gray">待开奖</view>
    </view>

    <view class="bg-bai p-2 mt-2 mb-2">
      <view class="u-title">订单编号</view>
      <view class="font-s-3 text-gray">{{ info.schemeId }}</view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
export default {
  components: {},
  props: {
    info: Object
  },
  created() {
    console.log('>>> this.info', this.info)
  },
  computed: {
    additional() {
      return this.info.schemeAmount / this.info.schemeNumberUnit === 3;
    },
    drawNumber() {
      return _.get(this, 'info.schemeDetail[0].drawNumber');
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-title {
  position: relative;
  font-size: 32rpx;
  padding-left: 15rpx;
  margin-bottom: 10rpx;
}
.u-title:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  height: 30rpx;
  width: 8rpx;
  background: @red-6;
  transform: translateY(-50%);
}
</style>
