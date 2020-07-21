<template>
  <view class="u-bei flex align-center justify-between">
    <view class="u-bei-item flex align-center justify-center font-s-3" v-for="bei in beiList" :key="bei" :class="{ 'u-active': bei == value }" @click.stop="handleBei(bei)">
      {{ bei }}倍
    </view>
  </view>
</template>

<script>
export default {
  props: {
    value: [Number, String]
  },
  data() {
    return {
      beiList: [10, 20, 50, 100]
    }
  },
  methods: {
    handleBei(bei) {
      this.$emit('input', bei);
    }
  }
};
</script>

<style lang="less" scoped>
.u-bei-item {
  width: 160rpx;
  height: 60rpx;
  border: 1rpx solid #333;
  border-radius: 5rpx;
}
.u-active {
  background-color: #f5222d;
  color: #fff;
  border-color: #f5222d;
}
</style>
