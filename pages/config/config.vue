<template>
  <view class="u-config">
    <view class="u-form">
      <view class="u-form-item" style="margin-bottom: 60rpx;" @tap="chooseImg">
        <view class="u-form-item__label f-36">头像</view>
        <view class="u-form-item__content">
          <div class="u-avatar">
             <g-img :src="userInfo.avatar" defaultSrc="/static/portrait.png"></g-img>
          </div>
          <text class="f-36 iconfont u-arrow">&#xe60d;</text>
        </view>
      </view>
      
      <view class="u-form-item">
        <view class="u-form-item__label f-36">用户名称</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6">{{balanceInfo.userName}}</text>
        </view>
      </view>
      
      <view class="u-form-item" @tap="goBindingIdentify">
        <view class="u-form-item__label f-36">真实姓名</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6" v-if="userInfo.bindingIdentify == 1">{{userInfo.name}}</text>
          <text class="f-36 grey-6" v-else>未绑定</text>
          <text class="f-36 iconfont u-arrow" v-if="userInfo.bindingIdentify != 1">&#xe60d;</text>
        </view>
      </view>
      <view class="u-form-item" @tap="goBindingIdentify">
        <view class="u-form-item__label f-36">身份证</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6" v-if="userInfo.bindingIdentify == 1">{{showIdentify}}</text>
          <text class="f-36 grey-6" v-else>未绑定</text>
          <text class="f-36 iconfont u-arrow" v-if="userInfo.bindingIdentify != 1">&#xe60d;</text>
        </view>
      </view>
      <view class="u-form-item">
        <view class="u-form-item__label f-36">手机</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6" v-if="userInfo.mobileBinded == 1">{{userInfo.mobile}}</text>
          <text class="f-36 grey-6" v-else>未绑定</text>
          <text class="f-36 iconfont u-arrow" v-if="userInfo.mobileBinded != 1">&#xe60d;</text>
        </view>
      </view>
      <view class="u-form-item" @click="goBindingAlipay">
        <view class="u-form-item__label f-36">支付宝</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6" v-if="userInfo.aliPay">{{userInfo.aliPay}}</text>
          <text class="f-36 grey-6" v-else>未绑定</text>
          <text class="f-36 iconfont u-arrow" v-if="!userInfo.aliPay">&#xe60d;</text>
        </view>
      </view>
      <view class="u-form-item" @click="goBindingBankAccount">
        <view class="u-form-item__label f-36">银行卡号</view>
        <view class="u-form-item__content">
          <text class="f-36 grey-6" v-if="userInfo.bankAccount">{{showBankAccount}}</text>
          <text class="f-36 grey-6" v-else>未绑定</text>
          <text class="f-36 iconfont u-arrow" v-if="!userInfo.bankAccount">&#xe60d;</text>
        </view>
      </view>
      <view class="u-form-item" @tap="goChangePassword">
        <view class="u-form-item__label f-36">修改密码</view>
        <view class="u-form-item__content">
          <text class="f-36 iconfont u-arrow">&#xe60d;</text>
        </view>
      </view>
    </view>
    <view class="u-version">Powered by {{name}}@ (v{{version}})</view>

    <button class="u-action" type="warn" @tap="logout">退出登录</button>
  </view>
</template>

<script>
import { set } from '@/storage';
import { mapState, mapActions } from 'vuex';
import { encryptMobile } from '@/util';
import user from '@/api/user/index.js'
import gImg from '@/components/g-img/index.vue';
import config from '@/config';

export default {
  components: {
    gImg
  },
  data () {
    return {
      name: config.name,
      version: ''
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      balanceInfo: state => state.balanceInfo,
    }),
    showBankAccount () {
      if (this.userInfo.bankAccount) {
        return this.userInfo.bankAccount.replace(/^(.{5})(?:\w+)(.{4})$/, "$1****$2")
      } else {
        return ''
      }
    },
    showIdentify () {
      if (this.userInfo.identify) {
        return this.userInfo.identify.replace(/^(.{5})(?:\w+)(.{4})$/, "$1****$2")
      } else {
        return ''
      }
    },
  },
  created() {
    this.updateUserInfo();
    this.updateBalanceInfo();
    // #ifdef APP-PLUS
    plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
      this.version = widgetInfo.version
    })
    // #endif
  },
  methods: {
    ...mapActions({
      updateUserInfo: 'updateUserInfo',
      updateBalanceInfo: 'updateBalanceInfo'
    }),
    // 实名认证
    goBindingIdentify () {
      if (this.userInfo.bindingIdentify != '1') {
        uni.navigateTo({
          url: '/pages/config/bindidcard'
        })
      }
    },
    // 绑定支付宝
    goBindingAlipay () {
      if (this.userInfo.bindingIdentify != '1') {
        return uni.showToast({
          title: '请先完成实名认证',
          icon: 'none'
        })
      }
      if (!this.userInfo.aliPay) {
        uni.navigateTo({
          url: '/pages/config/bindalipay'
        })
      }
    },
    // 绑定银行卡号
    goBindingBankAccount () {
      if (this.userInfo.bindingIdentify != '1') {
        return uni.showToast({
          title: '请先完成实名认证',
          icon: 'none'
        })
      }
      if (!this.userInfo.bankAccount) {
        uni.navigateTo({
          url: '/pages/config/bindBankCard'
        })
      }
    },
    // 修改密码
    goChangePassword () {
      uni.navigateTo({
        url: '/pages/config/password'
      })
    },
    chooseImg () {
      uni.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], //从相册选择
          success: (res) => {
              uni.showLoading({
                title: '头像更新中'
              })
              user.updateAvatar(res.tempFilePaths[0]).then(res => {
                uni.hideLoading()
                uni.showToast({
                  title: '头像更新成功',
                  icon: 'success'
                })
                this.updateUserInfo();
                this.updateBalanceInfo();
              }).catch(err => {
                uni.hideLoading()
                uni.showToast({
                  title: '头像更新失败',
                  icon: 'none'
                })
              })
          }
      });
    },
    encryptMobile(mobile) {
      return encryptMobile(mobile);
    },
    logout() {
      set('SESSION', '');
      uni.reLaunch({
        url: '/pages/login/login'
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-config {
  min-height: 100vh;
  background: #f0f0f0;
}
.u-form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #ebedf0;
  background: #fff;
}
.u-form-item__label {
  width: 200rpx;
}
.u-form-item__content {
  display: flex;
  align-items: center;
  font-size: 30rpx;
  line-height: 30rpx;
}
.u-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
}
.u-arrow {
  margin-left: 20rpx;
  color: #ccc;
  font-weight: bold;
}
.u-action {
  width: 600rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  font-size: 36rpx;
}
.u-version {
  padding: 30rpx;
  text-align: center;
  font-size: 24rpx;
  color: #ccc;
}
</style>
