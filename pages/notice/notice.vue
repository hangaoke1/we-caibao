<template>
  <view class="u-noticeDetail">
    <view class="u-noticeDetail__title mt-2">{{ info.title }}</view>
    <view class="u-noticeDetail__time mt-1">
      <u-tag class="mr-1"  size="mini" text="官方" type="primary" />
      <text>{{ info.time | fmtDate }}</text>
    </view>
    <u-parse :html="info.content"></u-parse>
  </view>
</template>

<script>
import _ from "lodash";
import dayjs from "dayjs";
export default {
  filters: {
    fmtDate(date) {
      if (!date) {
        return "";
      }
      return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  data() {
    return {
      info: "",
    };
  },
  created() {
    try {
      this.info = JSON.parse(uni.getStorageSync("notice_detail"));
    } catch (err) {}
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.u-noticeDetail {
  padding: 20rpx;
  min-height: 100vh;
  box-sizing: border-box;
  color: #333;
  .imageWidth {
    max-width: 100%;
  }
  &__title {
    text-align: center;
    font-size: 36rpx;
    font-weight: bold;
  }
  &__time {
    font-size: 24rpx;
    color: #ccc;
    text-align: center;
    margin-bottom: 30rpx;
  }
  &__content {
    font-size: 36rpx;
    color: #fff;
  }
}
</style>
