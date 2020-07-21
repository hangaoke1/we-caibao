<template>
  <view class="u-noticeDetail">
    <view class="u-noticeDetail__title">{{ info.title }}</view>
    <view class="u-noticeDetail__time">{{ info.time | fmtDate }}</view>
    <jyf-parser :html="info.content" ref="article"></jyf-parser>
  </view>
</template>

<script>
import _ from 'lodash';
import dayjs from 'dayjs';
import jyfParser from '@/components/jyf-parser/jyf-parser';
export default {
  components: {
    jyfParser
  },
  filters: {
    fmtDate(date) {
      if (!date) {
        return '';
      }
      return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  data() {
    return {
      info: ''
    };
  },
  created() {
    try {
      this.info = JSON.parse(uni.getStorageSync('notice_detail'));
    } catch (err) {}
  },
  methods: {}
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
    font-size: 50rpx;
    font-weight: bold;
  }
  &__time {
    font-size: 26rpx;
    color: #ccc;
    text-align: center;
    margin-bottom: 30rpx;
  }
  &__content {
    font-size: 40rpx;
    color: #fff;
  }
}
</style>
