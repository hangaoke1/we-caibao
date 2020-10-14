<template>
  <view class="flex align-center p-2">
    <view class="mr-3 font-s-24 flex-0" style="width: 180rpx;">{{ issue }}期</view>
    <view class="flex align-center">
      <!-- 前驱号码 -->
      <view class="flex align-center">
        <view v-for="num in getStartNumber(drawNumber)" class="u-startnum flex align-center justify-center font-s-24 mr-2" :key="num">{{ num }}</view>
      </view>
      <!-- 后区号码 -->
      <view class="flex align-center">
        <view v-for="num in getEndNumber(drawNumber)" class="u-endnum flex align-center justify-center font-s-24 mr-2" :key="num">{{ num }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    issue: String,
    drawNumber: String
  },
  methods: {
    getStartNumber(item) {
      return item.split('#')[0].split(',');
    },
    getEndNumber(item) {
      return item.split('#')[1].split(',');
    }
  }
};
</script>

<style lang="less" scoped>
.u-startnum {
  width: 42rpx;
  height: 42rpx;
  border-radius: 42rpx;
  background: #f5222d;
  color: #fff;
}
.u-endnum {
  width: 42rpx;
  height: 42rpx;
  border-radius: 42rpx;
  background: #1890ff;
  color: #fff;
}
</style>
