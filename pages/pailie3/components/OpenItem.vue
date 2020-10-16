<template>
  <view class="flex align-center p-2">
    <view class="mr-3 font-s-24 flex-0" style="width: 180rpx;">{{ issue }}期</view>
    <view class="flex align-center">
      <view class="flex align-center">
        <view
          v-for="(num, index) in getStartNumber(drawNumber)"
          class="u-startnum flex align-center justify-center font-s-24 mr-2"
          :key="index"
        >
          {{ num }}
        </view>
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
    getStartNumber(drawNumber) {
      return drawNumber.split(',');
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
</style>
