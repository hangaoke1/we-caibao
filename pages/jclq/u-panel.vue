<template>
  <view class="u-panel">
    <view class="u-title" @click.stop="handleClick">
      <slot name="title"></slot>
      <text
        class="iconfont u-arrow"
        :class="{ 'z-active': !show }"
        style="font-size: 40rpx;color: #ccc;"
      >
        &#xe60d;
      </text>
    </view>

    <view class="u-panel" v-show="show"><slot></slot></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-panel {}
.u-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16rpx;
  height: 70rpx;
  border-bottom: 1rpx solid #f0f0f0;
  background: #fff;
}
.u-arrow {
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);
  transform: rotate(90deg);
}
.z-active {
  transform: rotate(0);
}
</style>
