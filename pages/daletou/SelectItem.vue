<template>
  <view class="u-item flex align-center justify-between p-3 bg-bai mb-1">
    <view class="flex-1 mr-2">
      <!-- 前驱号码 -->
      <view class="flex align-center flex-wrap mb-1">
        <view v-for="num in selectFont" class="u-frontnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num">{{ num }}</view>
      </view>
      <!-- 后区号码 -->
      <view class="flex align-center flex-wrap">
        <view v-for="num in selectBack" class="u-backnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num">{{ num }}</view>
      </view>
      <!-- 描述 -->
      <view class="flex align-center font-s-3 text-gray">
        <view class="mr-1">{{ desc }}</view>
        <view>{{ count }}注 {{money}}元</view>
      </view>
    </view>
    <text class="red-6 iconfont" style="font-size: 40rpx;" @click="handleDelete">&#xe726;</text>
  </view>
</template>

<script>
import { getFlagArrs } from '@/lib/common.js';
export default {
  props: {
    selectFont: Array,
    selectBack: Array,
    additional: Boolean
  },
  computed: {
    desc() {
      if (this.selectFont.length === 5 && this.selectBack.length === 2) {
        return '普通投注单式';
      } else {
        return '普通投注复式';
      }
    },
    count() {
      const fLen = this.selectFont.length;
      const bLen = this.selectBack.length;
      if (fLen < 5 || bLen < 2) {
        return 0;
      }

      const f = getFlagArrs(fLen, 5).length;
      const b = getFlagArrs(bLen, 2).length;

      return f * b;
    },
    money() {
      if (this.additional) {
        return this.count * 3;
      } else {
        return this.count * 2;
      }
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete');
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
