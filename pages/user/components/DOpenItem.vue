<template>
  <view class="bg-bai mb-1">
    <view class="flex align-center flex-wrap">
      <view v-for="num in selectFont" class="u-frontnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num">{{ num }}</view>
      <view v-for="num in selectBack" class="u-backnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num">{{ num }}</view>
    </view>
  </view>
</template>

<script>
import { getFlagArrs } from '@/lib/common.js';
export default {
  props: {
    drawNumber: String
  },
  data() {
    return {
      selectFont: [],
      selectBack: []
    };
  },
  created() {
    this.splitNumber(this.drawNumber);
  },
  methods: {
    splitNumber(item) {
      this.selectFont = item.split('#')[0].split(',');
      this.selectBack = item.split('#')[1].split(',');
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.u-frontnum {
  width: 60rpx;
  height: 60rpx;
  border-radius: 60rpx;
  background: #f5222d;
  color: #fff;
}
.u-backnum {
  width: 60rpx;
  height: 60rpx;
  border-radius: 60rpx;
  background: #1890ff;
  color: #fff;
}
</style>
