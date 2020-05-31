<template>
  <!-- 修改密码 -->
  <view class="u-bindidcard">
    <view class="u-tip f-22">6-20个字符，建议使用字母、数字、组合，混合大小写</view>

    <view class="u-form">
      <view class="u-form-item">
        <view class="u-form-item__label f-36">旧密码</view>
        <view class="u-form-item__content"><input v-model="oldPassword" class="f-36" type="text" password placeholder="请输入旧密码" /></view>
      </view>
      <view class="u-form-item">
        <view class="u-form-item__label f-36">新密码</view>
        <view class="u-form-item__content"><input v-model="newPassword" class="f-36" type="text" password placeholder="请输入新密码" /></view>
      </view>

      <view class="u-form-item">
        <view class="u-form-item__label f-36">确认密码</view>
        <view class="u-form-item__content"><input v-model="checkPassword" class="f-36" type="text" password placeholder="请确认新密码" /></view>
      </view>

      <button class="u-action" type="warn" @click.stop="doUpdate()">确认修改</button>
    </view>
  </view>
</template>

<script>
  import user from '@/api/user/index.js'
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      checkPassword: ''
    };
  },
  methods: {
    doUpdate () {
      if (this.newPassword !== this.checkPassword) {
        return uni.showToast({
          title: '两次密码不一致',
          icon: 'none'
        })
      }
      
      user.updatePassword({
        newPassword: this.newPassword,
        password: this.oldPassword
      }).then(res => {
        uni.showToast({
          title: '密码修改成功',
          icon: 'success'
        })
        setTimeout(() => {
          uni.navigateBack()
        }, 1000)
      }).catch(err => {})
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.u-bindidcard {
  background: #f0f0f0;
  min-height: 100vh;
}

.u-tip {
  padding: 20rpx;
  background-color: #fdf6ec;
  color: #e6a23c;
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
