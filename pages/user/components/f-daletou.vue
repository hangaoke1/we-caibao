<template>
  <view class="animated fadeIn faster">
    <view class="bg-bai p-2 mt-2">
      <view class="u-title">期数</view>
      <view class="font-s-3 text-gray">第{{ info.schemeDetail[0].issue }}期</view>
    </view>

    <view class="bg-bai p-2 mt-2">
      <view class="u-title">是否追加</view>
      <view class="font-s-3 text-red font-weight-bold" v-if="additional">是</view>
      <view class="font-s-3 text-gray" v-else>否</view>
    </view>

    <view class="bg-bai p-2 mt-2">
      <view class="u-title">我的号码</view>
      <view v-for="(item, index) in info.schemeContent" :key="index"><d-select-item :info="item" :multiple="info.multiple" :additional="additional" :drawNumber="drawNumber"></d-select-item></view>
    </view>

    <view class="bg-bai p-2 mt-2">
      <view class="u-title">开奖号码</view>
      <view v-if="drawNumber"><d-open-item :drawNumber="drawNumber"></d-open-item></view>
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
import DSelectItem from './DSelectItem.vue';
import DOpenItem from './DOpenItem.vue';
export default {
  components: {
    DSelectItem,
    DOpenItem
  },
  props: {
    info: Object
  },
  computed: {
    additional() {
      return (this.info.schemeAmount / this.info.schemeNumberUnit) === 3
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
