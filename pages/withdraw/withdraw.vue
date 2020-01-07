<template>
  <view class="u-withdraw">
    <view class="u-title" v-if="userInfo.bankAccount" @click="type = 2">
      <image class="u-icon" src="/static/pay4.png"></image>
      <view style="flex: 1;">
        <view class="f-36">银行卡</view>
        <view class=""></view>
        <view class="f-32 grey-6">账号：{{ userInfo.bankAccount }} {{userInfo.name}}</view>
      </view>
      <view class="u-choose" :class="{'z-active': type === 2}">
        <view class="u-choose-in"></view>
      </view>
    </view>
    
    <view class="u-title" v-if="!userInfo.bankAccount" @click="goBindBank">
      <image class="u-icon" src="/static/pay4.png"></image>
      <view style="flex: 1;">
        <view class="f-36">银行卡</view>
        <view class=""></view>
        <view class="f-32 grey-6">极速提现</view>
      </view>
      <view class="f-32 blue-6">立即绑定</view>
    </view>
    
    <view class="u-title" v-if="userInfo.aliPay" @click="type = 1" v-show="!disableAlipay">
      <image class="u-icon" src="/static/pay2.png"></image>
      <view style="flex: 1;">
        <view class="f-36">支付宝</view>
        <view class="f-32 grey-6">账号：{{ userInfo.aliPay }}</view>
      </view>
      <view class="u-choose" :class="{'z-active': type === 1}">
        <view class="u-choose-in"></view>
      </view>
    </view>

    <view class="u-content">
      <view class="u-top f-30 grey-6">提现金额</view>
      <view class="u-mid">
        <view class="u-unit">¥</view>
        <input class="u-input" type="digit" v-model="money" />
        <text v-show="money" class="iconfont u-close" @click="money = ''">&#xe726;</text>
      </view>
      <view class="u-bottom">
        <view class="f-26 red-6" v-if="showWarn">金额已超可提现余额</view>
        <view class="f-26 grey-6" v-else>可用余额 {{ (userInfo.money || 0).toFixed(2) }}元</view>
        <view class="f-26 blue-6" @click="getAll">全部提现</view>
      </view>
    </view>
    
    <view class="u-tip f-22">
      <view>1. 每个账号每日只能提现3次</view>
      <view>2. 为防止套现，充值金额不可提现</view>
      <view>3. 中奖金额可全部用于提现或参与转充活动</view>
      <view>4. 单次提现金额需大于50元</view>
    </view>

    <button class="u-action f-30" type="warn" @click="doSubmit">确认提现</button>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';
import user from '@/api/user/index.js';
export default {
  data() {
    return {
      money: '',
      type: '', // 1: 支付宝 2: 银行 
    };
  },
  onShow() {
    this.updateBalanceInfo();
    this.updateUserInfo();
  },
  watch: {
    userInfo: {
      immediate: true,
      handler (v) {
        if (v.bankAccount) {
          this.type = 2
        } else {
          this.type = 1
        }
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      balanceInfo: state => state.balanceInfo
    }),
    disableAlipay () {
      return !!this.userInfo.disableAlipay
    },
    showWarn() {
      const money = this.money || 0;
      const remain = _.get(this.userInfo, 'money', 0);
      return money > remain;
    }
  },
  methods: {
    ...mapActions({
      updateUserInfo: 'updateUserInfo',
      updateBalanceInfo: 'updateBalanceInfo'
    }),
    goBindBank () {
      uni.navigateTo({
        url: '/pages/config/bindBankCard'
      })
    },
    getAll() {
      this.money = parseInt(_.get(this.userInfo, 'money', 0));
    },
    doSubmit() {
      if (this.type === 1 && this.disableAlipay) {
        return uni.showModal({
          title: '温馨提示',
          content: '请绑定银行卡进行提现',
          confirmText: '前往绑定',
          showCancel: false,
          success: function (res) {
            uni.navigateTo({
              url: '/pages/config/bindBankCard'
            })
          }
      });
      }
      if (this.showWarn) {
        return;
      }
      if (!this.type) {
        return uni.showToast({
          title: '请选择提现方式',
          icon: 'none'
        })
      }
      if (!this.money) {
        return uni.showToast({
          title: '请输入提现金额',
          icon: 'none'
        })
      }
      
      if (this.type === 1) {
        user
          .withdrawAlipay({
            money: this.money,
            withdrawType: 0 // 支付宝
          })
          .then(res => {
            uni.showToast({
              title: '提现成功',
              icon: 'success'
            });
            this.money = '';
            this.updateBalanceInfo();
            this.updateUserInfo();
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/user/user'
              });
            }, 1000);
          })
          .catch(err => {});
      } else {
        user
          .withdraw({
            money: this.money,
            withdrawType: 1 // 银行卡
          })
          .then(res => {
            uni.showToast({
              title: '提现成功',
              icon: 'success'
            });
            this.money = '';
            this.updateBalanceInfo();
            this.updateUserInfo();
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/user/user'
              });
            }, 1000);
          })
          .catch(err => {});
      }
      
    }
  }
};
</script>

<style lang="less">
@import '~@/styles/common_vue.less';

.u-withdraw {
  min-height: 100vh;
  background: #f0f0f0;
}

.u-tip {
  padding: 20rpx;
  background-color: #fef0f0;
  color: #f56c6c;
  text-align: center;
  margin-bottom: 30rpx;
  text-align: left;
}

.u-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  overflow: hidden;
  padding: 30rpx;
  border-bottom: 1rpx solid #eee;
}

.u-icon {
  flex: 0 0 auto;
  width: 80rpx;
  height: 80rpx;
  margin-right: 30rpx;
}

.u-content {
  margin-top: 30rpx;
  padding: 30rpx;
  background: #fff;
}
.u-mid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rpx 0;
  border-bottom: 1rpx solid #ccc;
}
.u-unit {
  flex: 0 0 auto;
  font-size: 60rpx;
}
.u-input {
  flex: 1;
  font-size: 80rpx;
  height: 100rpx;
  margin-left: 10rpx;
}
.u-close {
  flex: 0 0 auto;
  font-size: 40rpx;
  color: #ccc;
}
.u-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 20rpx;
}

.u-action {
  width: 600rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  font-size: 36rpx;
}

.u-choose {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 40rpx;
  height: 40rpx;
  border: 1rpx solid #ccc;
  background: #fff;
  display: flex;
  border-radius: 50rpx;
  .g-center();
}
.u-choose-in {
    width: 30rpx;
    height: 30rpx;
    background: #ccc;
    border-radius: 30rpx;
}
.z-active {
  border: 1rpx solid @red-6;
  .u-choose-in {
    background: @red-6;
  }
}

</style>
