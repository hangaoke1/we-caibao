<template>
  <view class="bg-bai mb-1">
    <view class="font-s-3 text-gray mt-2 mb-1">
      <text>大乐透{{ info.type }}</text>
      <text class="ml-2">{{ count }}</text>
      <text>注</text>
      <text class="ml-2">{{ money }}</text>
      <text>元</text>
    </view>
    <view>
      <!-- 前驱号码 -->
      <view class="flex align-center flex-wrap">
        <view v-for="num in selectFont" class="u-frontnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num" :class="{'z-disable': drawNumber && !drawFont.includes(num)}">{{ num }}</view>
      </view>
      <!-- 后区号码 -->
      <view class="flex align-center flex-wrap">
        <view v-for="num in selectBack" class="u-backnum flex align-center justify-center font-s-3 mr-2 mb-2" :key="num" :class="{'z-disable': drawNumber && !drawBack.includes(num)}">{{ num }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { getFlagArrs } from '@/lib/common.js';
export default {
  props: {
    info: Object,
    additional: Boolean,
    multiple: Number,
    drawNumber: String
  },
  data() {
    return {
      selectFont: [],
      selectBack: [],
      drawFont: [],
      drawBack: []
    };
  },
  computed: {
    count() {
      const fLen = this.selectFont.length;
      const bLen = this.selectBack.length;
      if (fLen < 5 || bLen < 2) {
        return 0;
      }

      const f = getFlagArrs(fLen, 5).length;
      const b = getFlagArrs(bLen, 2).length;

      return f * b * this.multiple;
    },
    money() {
      if (this.additional) {
        return this.count * 3;
      } else {
        return this.count * 2;
      }
    }
  },
  created() {
    this.splitNumber(this.info);
    this.splitDraw(this.drawNumber);
  },
  methods: {
    splitDraw(item) {
      if (!item) {
        return;
      }
      this.drawFont = item.split('#')[0].split(',');
      this.drawBack = item.split('#')[1].split(',');
    },
    splitNumber(item) {
      const number = item.number;
      let selectFont = [];
      let selectBack = [];
      if (item.type === '单式') {
        const f = number.split('+')[0];
        const b = number.split('+')[1];
        selectFont = f.trim().split(' ');
        selectBack = b.trim().split(' ');
      } else {
        const f = number.split('#')[0];
        const b = number.split('#')[1];
        selectFont = f.trim().split(' ');
        selectBack = b.trim().split(' ');
      }
      this.selectFont = selectFont;
      this.selectBack = selectBack;
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

.z-disable {
  background: #ccc;
  color: #fff;
}
</style>
