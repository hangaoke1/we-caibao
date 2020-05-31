<template>
  <view class="vue-td" :style="iStyle">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    col: [Number, String]
  },
  inject: ['table'],
  data() {
    return {
      borderColor: '#f0f0f0'
    };
  },
  created() {
    this.borderColor = this.table.borderColor;
  },
  computed: {
    iStyle () {
      return `
        width: ${this.col}rpx;
        border-color: ${this.borderColor};
      `
    }
  }
};
</script>

<style scoped>
.vue-td {
  box-sizing: border-box;
  /* height: 100%; */
  border-top: 1rpx #f0f0f0 solid;
  border-left: 1rpx #f0f0f0 solid;
}
</style>
