<template>
  <view class="u-publish">
    <view class="u-title f-30">
      单倍金额
      <text class="red-6" style="margin-left: 20rpx;">{{ single || 0 }}元</text>
    </view>
    <view class="u-line" style="height: 20rpx;"></view>
    <view class="u-form">
      <view class="u-type">
        <view class="f-30">方案是否公开</view>
        <view class="u-type-list">
          <view :class="{ 'z-active': sopen == 1 }" class="u-type-item f-26" @click.stop="sopen = 1">完全公开</view>
          <view :class="{ 'z-active': sopen == 4 }" class="u-type-item f-26" @click.stop="sopen = 4">完全保密</view>
        </view>
      </view>
      <view class="u-rate">
        <view class="u-rate-left">
          <view class="f-30">保赔率</view>
          <input v-show="enableInput" class="u-input" :class="{ 'z-input': enableInput }" type="digit" v-model="rate" />
          <text v-show="!enableInput" class="f-30 ml-2 text-jin">不保赔</text>
        </view>
        <switch :checked="enableInput" class="u-switch" @change="switchChange" style="transform:scale(0.9)" color="#52c41a" />
      </view>
    </view>
    <view class="u-line" style="height: 40rpx;"></view>
    <view class="u-des">
      <view class="f-30">方案宣言</view>
      <textarea class="u-textarea" v-model="sdescribe" />
    </view>
    <view class="u-confirm white-1 red-6-bg f-32" @click.stop="handleConfirm">确认</view>
  </view>
</template>

<script>
import lottery from '@/api/lottery/index.js';
export default {
  data() {
    return {
      schemeId: '',
      single: '',
      sopen: 4, // 4是完全保密，1是完全公开
      sdescribe: '', // 方案宣言
      remuneration: 10, //方案提成
      rate: 1.8, // 赔率
      enableInput: true,
      loading: false
    };
  },
  methods: {
    switchChange(e) {
      this.enableInput = e.target.value;
    },
    handleConfirm() {
      if (this.loading) return;
      this.loading = true;

      if (this.rate < 1.8) {
        this.loading = false;
        return uni.showToast({
          title: '赔率必须大于1.8'
        });
      }
      const params = {
        schemeId: this.schemeId,
        rate: this.rate,
        sopen: this.sopen,
        sdescribe: this.sdescribe,
        remuneration: 10
      };
      uni.showLoading({
        title: '发起中'
      });
      lottery
        .doCopyPublish(params)
        .then(res => {
          uni.hideLoading();
          uni.showToast({
            title: '发起跟单成功'
          });
          setTimeout(() => {
            this.loading = false;
            uni.switchTab({
              url: '/pages/index/index'
            });
          }, 1000);
        })
        .catch(err => {
          this.loading = false;
          uni.hideLoading();
          uni.showToast({
            title: '发起跟单失败',
            icon: 'none'
          });
          console.error(err);
        });
    }
  },
  onLoad(options) {
    // 发单id
    this.schemeId = options.schemeId;
    // 单倍金额
    this.single = options.single;
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.u-title {
  padding: 20rpx;
}
.u-line {
  background: #f0f0f0;
}
.u-form {
  padding: 20rpx;
}
.u-type-list {
  display: flex;
  margin-top: 20rpx;
}
.u-type-item {
  width: 160rpx;
  height: 60rpx;
  margin-right: 10rpx;
  background: #f0f0f0;
  color: #ccc;
  border: 1rpx solid transparent;
  border-radius: 6rpx;
  display: flex;
  .g-center();
}
.z-active {
  background: #fff;
  color: @red-6;
  border: 1rpx solid @red-6;
}
.u-rate {
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.u-rate-left {
  display: flex;
  align-items: center;
}
.u-input {
  width: 100rpx;
  margin-left: 10rpx;
  text-align: center;
  border: 1rpx solid transparent;
}
.z-input {
  border: 1rpx solid #ccc;
}
.u-des {
  padding: 20rpx;
}
.u-textarea {
  box-sizing: border-box;
  width: 100%;
  height: 300rpx;
  padding: 20rpx;
  margin-top: 20rpx;
  background: #f0f0f0;
  font-size: 30rpx;
}
.u-confirm {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80rpx;
  display: flex;
  .g-center();
}
</style>
