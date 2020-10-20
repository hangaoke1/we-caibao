<template>
  <view class="container">
    <view class="left-bottom-sign"></view>
    <view class="back-btn iconfont iconziyuanldpi" @click="navBack"></view>
    <view class="right-top-sign"></view>
    <!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
    <view class="wrapper">
      <view class="left-top-sign">REGISTER</view>
      <view class="welcome">欢迎注册！</view>
      <view class="input-content">
        <view class="input-item">
          <text class="tit">用户名</text>
          <input
            type="text"
            v-model="form.username"
            placeholder="请输入用户名"
            maxlength="11"
          />
        </view>
        <view class="input-item">
          <text class="tit">设置密码</text>
          <input
            type="mobile"
            v-model="form.password"
            placeholder="6-18位不含特殊字符的数字、字母组合"
            placeholder-class="input-empty"
            maxlength="20"
            password
            data-key="password"
          />
        </view>
        <view class="input-item">
          <text class="tit">确认密码</text>
          <input
            type="mobile"
            v-model="form.confirmPassword"
            placeholder="6-18位不含特殊字符的数字、字母组合"
            placeholder-class="input-empty"
            maxlength="20"
            password
            data-key="password"
          />
        </view>
        <view class="input-content">
        <view class="input-item">
          <text class="tit">手机号</text>
          <input
            type="number"
            v-model="form.mobile"
            placeholder="请输入用户名"
            maxlength="11"
          />
        </view>
        <view class="input-item">
          <text class="tit">邀请码</text>
          <input
            type="text"
            v-model="form.superiorUserID"
            placeholder="请填写邀请码"
            placeholder-class="input-empty"
            maxlength="20"
          />
        </view>
      </view>
      <button class="confirm-btn" @click="toRegist" :disabled="logining">登录</button>
    </view>
    <view class="register-section">
      已有账号?
      <text @click="navToLogin">马上登录</text>
    </view>
  </view>
</template>

<script>
import apiAuth from "@/api/auth/index.js";
import { set } from "@/storage/index.js";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        mobile: "",
        confirmPassword: "",
        superiorUserID: "",
      },
      logining: false,
    };
  },
  onLoad() {},
  methods: {
    navBack() {
      uni.navigateBack();
    },
    navToLogin() {
      uni.navigateTo({
        url: "/pages/login/login",
      });
    },
    toRegist() {
      const vm = this;
      if (this.form.username == "") {
        this.$api.msg("请输入用户名");
        return;
      }
      if (this.form.password == "") {
        this.$api.msg("请输入密码");
        return;
      }
      if (this.form.mobile == "") {
        this.$api.msg("手机号不能为空");
        return;
      }
      if (this.form.password != this.form.confirmPassword) {
        this.$api.msg("两次密码不一致");
        return;
      }

      this.logining = true;
      apiAuth
        .register(this.form)
        .then((res) => {
          this.$api.msg("注册成功", 1000, false, "none", function () {
            setTimeout(function () {
              this.logining = false;
              set("ACCOUNT", vm.form.username);
              set("SESSION", res.clientUserSession);
              uni.switchTab({
                url: "/pages/index/index",
              });
            }, 1000);
          });
        })
        .catch((error) => {
          this.logining = false;
        });
    },
  },
};
</script>

<style lang='scss' scoped>
page {
  background: #fff;
}

.container {
  padding-top: 65px;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #fff;
}

.wrapper {
  position: relative;
  z-index: 90;
  background: #fff;
  padding-bottom: 40rpx;
}

.back-btn {
  position: absolute;
  left: 40rpx;
  z-index: 9999;
  padding-top: var(--status-bar-height);
  top: 40rpx;
  font-size: 40rpx;
  color: $font-color-dark;
}

.left-top-sign {
  font-size: 120rpx;
  color: $page-color-base;
  position: relative;
  left: -16rpx;
}

.right-top-sign {
  position: absolute;
  top: 80rpx;
  right: -30rpx;
  z-index: 95;

  &:before,
  &:after {
    display: block;
    content: "";
    width: 400rpx;
    height: 80rpx;
    background: #b4f3e2;
  }

  &:before {
    transform: rotate(50deg);
    border-radius: 0 50px 0 0;
  }

  &:after {
    position: absolute;
    right: -198rpx;
    top: 0;
    transform: rotate(-50deg);
    border-radius: 50px 0 0 0;
    /* background: pink; */
  }
}

.left-bottom-sign {
  position: absolute;
  left: -270rpx;
  bottom: -320rpx;
  border: 100rpx solid #d0d1fd;
  border-radius: 50%;
  padding: 180rpx;
}

.welcome {
  position: relative;
  left: 50rpx;
  top: -90rpx;
  font-size: 46rpx;
  color: #555;
  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
}

.input-content {
  padding: 0 60rpx;
}

.input-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30rpx;
  background: $page-color-light;
  height: 120rpx;
  border-radius: 4px;
  margin-bottom: 50rpx;

  &:last-child {
    margin-bottom: 0;
  }

  .tit {
    height: 50rpx;
    line-height: 56rpx;
    font-size: $font-sm + 2rpx;
    color: $font-color-base;
  }

  input {
    height: 60rpx;
    font-size: $font-base + 2rpx;
    color: $font-color-dark;
    width: 100%;
  }
}

.confirm-btn {
  width: 630rpx;
  height: 76rpx;
  line-height: 76rpx;
  border-radius: 50px;
  margin-top: 70rpx;
  background: $uni-color-primary;
  color: #fff;
  font-size: $font-lg;

  &:after {
    border-radius: 100px;
  }
}

.forget-section {
  font-size: $font-sm + 2rpx;
  color: $font-color-spec;
  text-align: center;
  margin-top: 40rpx;
}

.register-section {
  position: absolute;
  left: 0;
  bottom: 50rpx;
  width: 100%;
  font-size: $font-sm + 2rpx;
  color: $font-color-base;
  text-align: center;

  text {
    color: $font-color-spec;
    margin-left: 10rpx;
  }
}
</style>
