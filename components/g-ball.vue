<template>
  <view class="u-ball" :style="activeStyle"><slot></slot></view>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#f5222d'
    }
  },
  data() {
    return {};
  },
  computed: {
    activeStyle() {
      if (this.isActive) {
        return {
          color: '#fff',
          background: this.color,
          borderColor: this.color
        };
      } else {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.u-ball {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  background: #fff;
  border: 1px solid #ccc;
  color: #f5222d;
  font-size: 30rpx;
}
</style>
