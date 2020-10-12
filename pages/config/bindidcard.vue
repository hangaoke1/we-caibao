<template>
  <!-- 绑定身份证 -->
  <view class="u-bindidcard">
    <view class="u-tip f-22">真实姓名和身份证是领取奖金的唯一凭证，提交后不可更改</view>

    <view class="u-form font-s-32">
      <view class="u-form-item">
        <view class="u-form-item__label">真实姓名</view>
        <view class="u-form-item__content">
          <input class="f-36" type="text" placeholder="请输入真实姓名" v-model.trim="name" />
        </view>
      </view>
      <view class="u-form-item">
        <view class="u-form-item__label">身份证号</view>
        <view class="u-form-item__content">
          <input
            class="f-36"
            type="idcard"
            placeholder="15或18位,提交后不可修改"
            v-model.trim="identityNumber"
          />
        </view>
      </view>

      <button class="u-action" type="warn" @click.stop="doBind">确认绑定</button>
    </view>
  </view>
</template>

<script>
import user from "@/api/user/index.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      identityNumber: "", // 身份证号
      name: "", // 真名
    };
  },
  methods: {
    ...mapActions({
      updateUserInfo: "updateUserInfo",
      updateBalanceInfo: "updateBalanceInfo",
    }),
    doBind() {
      if (!this.name) {
        return uni.showToast({
          title: "请输入姓名",
          icon: "none",
        });
      }
      if (!this.identityNumber) {
        return uni.showToast({
          title: "请输入身份证号",
          icon: "none",
        });
      }
      uni.showLoading({
        title: "绑定中",
      });
      user
        .bindIdentifyName({
          name: this.name,
          identityNumber: this.identityNumber,
        })
        .then((res) => {
          uni.hideLoading();
          uni.showToast({
            title: "认证成功",
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
            title: "认证失败",
            icon: "none",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common_vue.less";

.u-bindidcard {
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
  font-size: 36rpx;
}
</style>
