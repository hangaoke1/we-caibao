<template>
  <!-- 绑定支付宝 -->
  <view class="u-bindalipay">
    <view class="u-tip f-22">请务必保证与真实姓名一致，方便奖金提现，如有问题请联系店主！</view>

    <view class="u-form">
      <view class="u-form-item">
        <view class="u-form-item__label font-s-32">支付宝账号</view>
        <view class="u-form-item__content">
          <input class="font-s-32" type="text" placeholder="请输入您的支付宝账号" v-model="alipay" />
        </view>
      </view>

      <button v-if="!hasBind" class="u-action" type="warn" @click.stop="doBinding()">确认绑定</button>
      <button v-else class="u-action" type="warn" @click.stop="doBinding()">确认修改</button>
    </view>
  </view>
</template>

<script>
import user from "@/api/user/index.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      alipay: "",
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
    hasBind() {
      return !!this.userInfo.aliPay;
    },
  },
  mounted() {
    this.alipay = this.userInfo.aliPay;
  },
  methods: {
    ...mapActions({
      updateUserInfo: "updateUserInfo",
      updateBalanceInfo: "updateBalanceInfo",
    }),
    doBinding() {
      const alipay = this.alipay.trim();
      if (!alipay) {
        return uni.showToast({
          title: "请输入支付宝账号",
          icon: "none",
        });
      }
      uni.showLoading({
        title: "绑定中",
      });
      user
        .bindAliPay({
          alipay: this.alipay,
        })
        .then((res) => {
          uni.hideLoading();
          uni.showToast({
            title: "绑定成功",
            icon: "success",
          });
          this.updateUserInfo();
          setTimeout(() => {
            uni.navigateBack();
          }, 1000);
        })
        .catch((err) => {
          uni.hideLoading();
          uni.showToast({
            title: "绑定失败",
            icon: "none",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common_vue.less";

.u-bindalipay {
  background: #f0f0f0;
  min-height: 100vh;
}

.u-tip {
  padding: 20rpx;
  background-color: #fef0f0;
  color: #f56c6c;
  text-align: center;
}

.u-form {
  margin-top: 20rpx;
}

.u-form-item {
  display: flex;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #ebedf0;
  background: #fff;
}
.u-form-item__label {
  width: 200rpx;
}
.u-form-item__content {
  flex: 1;
}
.u-action {
  width: 600rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  font-size: 32rpx;
}
</style>
