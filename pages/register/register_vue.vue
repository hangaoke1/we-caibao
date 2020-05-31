<template>
  <view class="m-register">
    <image class="u-img" src="/static/user/register.png"></image>
    <view class="u-input-wrap">
      <view class="u-title">
        <text class="f-36">新用户注册</text>
       </view>
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe770;</text>
        <input class="u-input" type="text" v-model="form.username" placeholder="请输入中文用户名" />
        <input type="text" style="width: 0;height: 0;"/>
      </view>
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe6ad;</text>
        <input class="u-input" type="password" v-model="form.password" placeholder="请输入登录密码" />
      </view>
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe66e;</text>
        <input class="u-input" type="number" v-model="form.superiorUserID" placeholder="请输入邀请码" />
      </view>
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe719;</text>
        <input class="u-input" type="number" v-model="form.mobile" placeholder="请输入手机号" />
      </view>
      <view class="u-input-item u-verify">
        <text class="iconfont" style="font-size: 32rpx;color: #ccc;">&#xe775;</text>
        <input class="u-input" type="number" v-model="form.validateCodeCheck" placeholder="请输入验证码" />
        <view class="u-verify-btn">
          <text class="u-verify-btn-text" @click.stop="getVerify" v-if="!countdown">发送验证码</text>
          <text class="u-verify-btn-text" v-else>{{ count }}s</text>
        </view>
      </view>
      <view class="u-action" @click.stop="hanldeRegister"><text class="u-action-text">立即注册</text></view>
      <view class="u-tip">
        <text class="u-tip-text">*注册即代表您同意</text>
        <text class="u-tip-text u-agreement">《{{name}}用户协议》</text>
      </view>
      <view class="g-center" style="display: flex;margin-top: 10rpx;">
        <text class="f-24 blue-6" @click="goLogin">已有账号，前往登录</text>
      </view>
    </view>
  </view>
</template>

<script>
import apiAuth from '@/api/auth/index.js';
import { set } from '@/storage/index.js';
import config from '@/config';

export default {
  data() {
    return {
      name: config.nameZh,
      // 倒计时
      count: 60,
      countdown: false,
      timer: null,
      // 注册数据
      form: {
        username: '',
        password: '',
        mobile: '',
        validateCodeCheck: '',
        superiorUserID: ''
      }
    };
  },
  methods: {
    goLogin () {
      uni.navigateBack()
    },
    hanldeRegister() {
      if (!this.form.mobile) {
        return uni.showToast({
          title: '手机号不能为空'
        });
      }
      if (!this.form.password) {
        return uni.showToast({
          title: '密码不能为空'
        });
      }
      if (!this.form.validateCodeCheck) {
        return uni.showToast({
          title: '验证码不能为空'
        });
      }
      apiAuth.register(this.form).then(res => {
        uni.showToast({
          title: '注册成功',
          icon: 'none'
        });
        set('SESSION', res.clientUserSession);
        setTimeout(()=> {
          uni.switchTab({
            url: '/pages/index/index'
          });
        }, 1000)
      }).catch(err => {
        console.log(err);
      });
    },
    getVerify() {
      if (!this.form.mobile) {
        return uni.showToast({
          title: '手机号不能为空'
        });
      }
      if (!/^1\d{10}$/.test(this.form.mobile)) {
        return uni.showToast({
          title: '请输入正确的手机号'
        });
      }
      if (this.countdown) return;
      this.countdown = true;
      apiAuth
        .getRegisterVerify({
          mobile: this.form.mobile
        })
        .then(res => {
          uni.showToast({
            title: '获取验证码成功',
            icon: 'success'
          });
          this.timer = setInterval(() => {
            if (this.count === 0) {
              clearInterval(this.timer);
              this.timer = null;
              this.countdown = false;
              this.count = 60;
            } else {
              this.count -= 1;
            }
          }, 1000);
        }).catch(err => {
          this.countdown = false
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.m-register {
  min-height: 100vh;
}

.u-img {
  position: relative;
  display: block;
  width: 750rpx;
  height: 500rpx;
  z-index: 1;
}
.u-input-wrap {
  position: relative;
  box-sizing: border-box;
  width: 668rpx;
  padding: 50rpx;
  margin: 0 auto;
  margin-top: -100rpx;
  border-radius: 10rpx;
  background-color: #fff;
  box-shadow: 0px 3px 20px 1px rgba(1, 12, 74, 0.08);
  z-index: 2;
}
.u-title {
  margin-bottom: 30rpx;
}
.u-input-item {
  display: flex;
  flex-direction: row;
  padding: 10rpx 20rpx 10rpx 0;
  margin-bottom: 30rpx;
  border-bottom: 1rpx solid #ccc;
}
.u-input {
  flex: 1;
  height: 60rpx;
  margin-left: 20rpx;
  margin-right: 10rpx;
  font-size: 30rpx;
  border: none;
  outline: none;
  background:none;
}
.u-verify {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.u-verify-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200rpx;
  height: 50rpx;
  border-radius: 6rpx;
  background-color: #e73a3a;
  &-text {
    font-size: 24rpx;
    color: #fff;
  }
}
.u-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 528rpx;
  height: 80rpx;
  background-color: #e73a3a;
  border-radius: 12rpx;
  &-text {
    font-size: 32rpx;
    color: #fff;
  }
}
.u-tip {
  display: flex;
  margin-top: 20rpx;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &-text {
    font-size: 26rpx;
  }
}
.u-agreement {
  color: #e73a3a;
}
</style>
