<template>
  <view class="u-withdraw">

    <view class="u-content">
      <view class="u-top f-30 grey-6">转充金额</view>
      <view class="u-mid">
        <view class="u-unit">¥</view>
        <input class="u-input" type="digit" v-model="money" />
        <text v-show="money" class="iconfont u-close" @click="money = ''">&#xe726;</text>
      </view>
      <view class="u-bottom">
        <view class="f-26 red-6" v-if="showWarn">金额已超可转充余额</view>
        <view class="f-26 grey-6" v-else>可用余额 {{ (userInfo.money || 0).toFixed(2) }}元</view>
        <view class="f-26 blue-6" @click="getAll">全部转充</view>
      </view>
    </view>
    
   <view class="u-tip f-22">
      <view>1. 与充值活动同享，比如充值送5%，那么转充则送6%</view>
      <view>2. 无充值活动时，赠送1%彩金</view>
      <view>3. 转充金额大于50元享受以上优惠</view>
    </view>

    <button class="u-action f-30" type="warn" @click="doSubmit">确认转充</button>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';
import user from '@/api/user/index.js';
export default {
  data() {
    return {
      money: ''
    };
  },
  created() {
    this.updateBalanceInfo();
    this.updateUserInfo();
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      balanceInfo: state => state.balanceInfo
    }),
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
    getAll() {
      this.money = parseInt(_.get(this.userInfo, 'money', 0));
    },
    doSubmit() {
      if (this.showWarn) {
        return;
      }
      user
        .transferRecharge({
          money: this.money
        })
        .then(res => {
          uni.showToast({
            title: '转充成功',
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
  align-items: center;
  background: #fff;
  overflow: hidden;
  padding: 30rpx;
}

.u-icon {
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
</style>
