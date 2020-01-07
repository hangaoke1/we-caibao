<template>
  <view class="m-forget">
    <view class="u-input-wrap">
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe770;</text>
        <input class="u-input" type="text" v-model="form.username" placeholder="请输入中文用户名" />
        <input type="text" style="width: 0;height: 0;"/>
      </view>
      <view class="u-input-item">
        <text class="iconfont" style="font-size: 46rpx;color: #ccc;">&#xe719;</text>
        <input class="u-input" type="number" v-model="form.mobile" placeholder="请输入手机号" />
      </view>
      <view class="u-action" @tap="doSubmit"><text class="u-action-text">确定</text></view>
    </view>
  </view>
</template>

<script>
import user from '@/api/user/index.js';
import { set } from '@/storage/index.js';

export default {
  data() {
    return {
      form: {
        username: '',
        mobile: '',
      }
    };
  },
  methods: {
    doSubmit () {
      if (!this.form.username) {
        return uni.showToast({
          title: '用户名不能为空'
        });
      }
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
      user.getForgetCheckMobile({
        username: this.form.username,
        mobile: this.form.mobile
      }).then(res => {
        console.log('aaaa', res)
        uni.showToast({
          title: '密码重置成功，请查看短信',
          icon: 'none'
        })
        setTimeout(() => {
          uni.navigateBack()
        }, 2000)
      }).catch(err => {
        uni.showToast({
          title: '密码重置失败，请重试',
          icon: 'none'
        })
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.m-forget {}

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
  margin-top: 30rpx;
  border-radius: 10rpx;
  background-color: #fff;
  box-shadow: 0px 3px 20px 1px rgba(1, 12, 74, 0.08);
  z-index: 2;
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

</style>
