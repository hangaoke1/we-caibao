<template>
  <view class="u-payment">
    <view class="u-content">
      <view class="u-top f-30 grey-6">充值金额</view>
      <view class="u-mid">
        <view class="u-unit">¥</view>
        <input class="u-input" type="digit" v-model="money" />
        <text v-show="money" class="iconfont u-close" @click="money = ''">&#xe726;</text>
      </view>

      <view v-if="info.moneyList" class="u-choose-list">
        <view
          class="u-choose-item"
          v-for="item in info.moneyList"
          :key="item"
          :class="{ 'z-active': item == money }"
          @tap="handleChoose(item)"
        >
          <text class="f-28" :class="{ 'z-active': item == money }">{{ item }}元</text>
        </view>
      </view>
      <view class="u-bottom">
        <view class="f-26 red-6">1. 为防止套现，充值金额不可提现</view>
        <view class="f-26 red-6">2. 中奖金额可全部提现</view>
      </view>
    </view>

    <button class="u-action f-30" type="warn" @tap="handleConfirm">确认充值</button>

    <uni-popup ref="popup" type="center" :mask-click="true" custom>
      <view class="u-popup">
        <view class="u-popup-header">
          <view class="u-popup-icon"></view>
          <view class="g-center">选择充值方式</view>
          <view class="u-popup-icon" @tap="closePopup">
            <text class="iconfont f-30">&#xe734;</text>
          </view>
        </view>

        <view class="u-popup-content">
          <view class="u-cell" v-for="channel in channelList" :key="channel.id" @tap="goPay(channel)">
            <image style="width: 60rpx;height: 60rpx;margin-right: 10rpx;" src="/static/pay2.png"></image>
            <view>
              <view class="f-30" style="margin-bottom: 10rpx;">{{ channel.name }}</view>
              <view class="f-24 grey-6">{{ channel.info }}</view>
            </view>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import user from '@/api/user';
import { get, post } from '@/api/index';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
  components: {
    uniPopup
  },
  data() {
    return {
      money: '',
      info: {
        moneyList: [0, 0, 0, 0, 0, 0]
      },
      channelList: [],
      loading: false
    };
  },
  methods: {
    queryPayment() {
      user.queryPayment().then(res => {
        this.info = res;
      });
    },
    handleChoose(item) {
      uni.hideKeyboard();
      this.money = item;
    },
    openPopup() {
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    handleConfirm() {
      uni.hideKeyboard();
      user
        .queryPayChannel({
          money: this.money
        })
        .then(res => {
          this.channelList = res.list;
          this.openPopup();
        });
    },
    goPay(channel) {
      var vm = this;
    
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.closePopup()
      uni.showLoading({
        title: '充值中'
      });
      // 请求获取h5链接
      let P_RequestType = '';
      if (uni.getSystemInfoSync().platform == 'android') {
        P_RequestType = 2;
      } else {
        P_RequestType = 3;
      }
    
      const requestUrl = '/' + channel.appname;
      get(requestUrl, {
        P_Amount: this.money,
        P_RequestType
      })
        .then(res => {
          this.loading = false;
          uni.hideLoading();
          const payH5 = res.url;
          plus.runtime.openURL(payH5, () => {});
          uni.showModal({
            title: '温馨提示',
            content: '是否已经完成充值？',
            success: res => {
              if (res.confirm) {
                uni.switchTab({
                  url: '/pages/user/user'
                });
              } else if (res.cancel) {
              }
            }
          });
        })
        .catch(err => {
          uni.hideLoading();
          this.loading = false;
        });
    }
  },
  created() {
    this.queryPayment();
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

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

.u-choose-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30rpx;
}
.u-choose-item {
  box-sizing: border-box;
  width: 220rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rpx solid #ccc;
  border-radius: 10rpx;
}

.u-bottom {
  margin-top: 20rpx;
}

.u-action {
  width: 600rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  font-size: 36rpx;
}

.u-popup {
  width: 500rpx;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10rpx;
  padding-bottom: 30rpx;
  &-header {
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
  }
  &-icon {
    width: 50rpx;
    height: 50rpx;
    display: flex;
    .g-center();
  }
  &-content {
    padding: 20rpx;
  }
  .u-cell {
    padding: 20rpx;
    display: flex;
    align-items: center;
    border: 1rpx solid #ccc;
    border-radius: 10rpx;
    margin-bottom: 10rpx;
  }
}
.z-active {
  color: @red-6;
  border-color: @red-6;
}
</style>
