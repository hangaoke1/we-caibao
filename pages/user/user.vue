<template>
  <view class="container">
    <view class="user-section">
      <image mode="widthFix" class="bg" src="../../static/image/personal-bg.jpg" />
      <view class="user-info-box">
        <view class="portrait-box">
          <image class="portrait" :src="userInfo.avatar || '/static/image/missing-face.png'" />
        </view>
        <view class="info-box" @click="toLogin">
          <text class="username">{{balanceInfo.userName || '请登录'}}</text>
          <view class="tip">欢迎来到 CP HCT.COM</view>
        </view>
      </view>
      <view class="vip-card-box">
        <view class="tit">
          <text class="iconfont iconyue mr-1"></text>
          余额：{{ (balanceInfo.balance || 0).toFixed(2) }}元
        </view>
      </view>
    </view>

    <view
      class="cover-container"
      :style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
    >
      <image class="arc" src="/static/image/arc.png" />

      <view class="order-section">
        <view
          class="order-item"
          @click="goPayment"
          hover-class="common-hover"
          :hover-stay-time="50"
        >
          <text class="iconfont iconchongzhiqia"></text>
          <text>充值</text>
        </view>
        <view
          class="order-item"
          @click="goConversion"
          hover-class="common-hover"
          :hover-stay-time="50"
        >
          <text class="iconfont icontuikuan"></text>
          <text>转充</text>
        </view>
        <view
          class="order-item"
          @click="goWidthDraw"
          hover-class="common-hover"
          :hover-stay-time="50"
        >
          <text class="iconfont icontuibuliang"></text>
          <text>提现</text>
        </view>
      </view>
      <!-- 浏览历史 -->
      <view class="history-section icon">
        <list-cell
          icon="iconbanbengengxin1"
          iconColor="#54b4ef"
          @eventClick="navTo('/pages/user/order', true)"
          title="我的订单"
        ></list-cell>
        <list-cell
          icon="iconyue1"
          iconColor="#ee883b"
          @eventClick="navTo('/pages/user/capital', true)"
          title="资金明细"
        ></list-cell>
        <list-cell
          icon="iconhelpx"
          iconColor="#4eb432"
          @eventClick="goHelp"
          title="帮助中心"
        ></list-cell>
        <list-cell
          icon="iconbanbengengxin"
          iconColor="#543632"
          @eventClick="checkUpdate"
          title="版本更新"
        ></list-cell>
        <list-cell
          icon="iconsettingx"
          iconColor="#e07472"
          title="设置"
          @eventClick="navTo('/pages/config/config')"
        ></list-cell>
      </view>
    </view>
  </view>
</template>  
<script>
import { mapState, mapActions } from "vuex";
import { set, get } from "@/storage/index.js";
import checkUpdate from "@/lib/checkUpdate.js";
import listCell from "@/components/g-list-cell";
import { commonMixin } from "@/mixins/mixin";
import { openUrl } from '@/util/index.js';

let startY = 0,
  moveY = 0,
  pageAtTop = true;

export default {
  mixins: [commonMixin],
  components: {
    listCell,
  },
  data() {
    return {
      coverTransform: "translateY(0px)",
      coverTransition: "0s",
    };
  },
  computed: {
    ...mapState({
      test: (state) => state.test,
      balanceInfo: (state) => state.balanceInfo,
      userInfo: (state) => state.userInfo,
    }),
  },
  mounted() {
    this.init();
  },
  onShow() {
    this.init();
  },
  // #ifndef MP
  onNavigationBarButtonTap(e) {
    this.navTo("/pages/config/config", true);
  },
  // #endif
  methods: {
    ...mapActions({
      updateBalanceInfo: "updateBalanceInfo",
      updateUserInfo: "updateUserInfo",
    }),
    goHelp() {
      openUrl({
        url: '/hybrid/html/help/help.html#/help_center',
        title: '帮助中心',
        showAction: false
      });
    },
    checkUpdate() {
      // #ifdef APP-PLUS
      checkUpdate(true);
      // #endif
      // #ifdef H5
      this.$api.msg("已是最新版本");
      // #endif
    },
    init() {
      this.updateBalanceInfo();
      this.updateUserInfo();
    },
    toLogin() {
      if (!get("SESSION")) {
        uni.navigateTo({
          url: "/pages/login/login",
        });
      }
    },
    // 充值
    goPayment() {
      this.navTo("/pages/user/payment", true);
    },
    // 专充
    goConversion() {
      const vm = this;
      if (this.userInfo.bindingIdentify != "1") {
        return uni.showModal({
          title: "提示",
          content: "请先完成实名认证",
          success: function (res) {
            if (res.confirm) {
              vm.navTo("/pages/config/bindidcard", true);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }
      vm.navTo("/pages/conversion/conversion", true);
    },
    // 提现
    goWidthDraw() {
      const vm = this;
      if (this.userInfo.bindingIdentify != "1") {
        return uni.showModal({
          title: "提示",
          content: "请先完成实名认证",
          success: function (res) {
            if (res.confirm) {
              vm.navTo("/pages/config/bindidcard", true);
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }
      // TODO: 注释银行卡
      if (!this.userInfo.aliPay && !this.userInfo.bankAccount) {
        return uni.showModal({
          title: "温馨提示",
          content: "请先绑定支付宝或银行卡",
          cancelText: "绑银行卡",
          confirmText: "绑支付宝",
          success: function (res) {
            if (res.confirm) {
              vm.navTo("/pages/config/bindalipay", true);
            } else if (res.cancel) {
              vm.navTo("/pages/config/bindBankCard", true);
            }
          },
        });
      }
      vm.navTo("/pages/withdraw/withdraw", true);
    },
  },
};
</script>  
<style lang='scss' scoped>
%flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
%section {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background: #fff;
  border-radius: 10rpx;
}

.user-section {
  height: 510rpx;
  padding: 100rpx 30rpx 0;
  position: relative;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
.user-info-box {
  height: 180rpx;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  .portrait {
    width: 130rpx;
    height: 130rpx;
    border: 5rpx solid #fff;
    border-radius: 50%;
  }
  .username {
    font-size: $font-lg + 6rpx;
    color: #ffffff;
    margin-left: 20rpx;
  }
  .tip {
    font-size: $font-sm + 2rpx;
    color: #ffffff;
    margin-left: 20rpx;
  }
}

.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.vip-card-box {
  display: flex;
  flex-direction: column;
  color: #f7d680;
  height: 240rpx;
  background: linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
  border-radius: 16rpx 16rpx 0 0;
  overflow: hidden;
  position: relative;
  padding: 20rpx 24rpx;
  .card-bg {
    position: absolute;
    top: 20rpx;
    right: 0;
    width: 380rpx;
    height: 260rpx;
  }
  .b-btn {
    position: absolute;
    right: 20rpx;
    top: 16rpx;
    width: 132rpx;
    height: 40rpx;
    text-align: center;
    line-height: 40rpx;
    font-size: 22rpx;
    color: #36343c;
    border-radius: 20px;
    background: linear-gradient(left, #f9e6af, #ffd465);
    z-index: 1;
  }
  .tit {
    font-size: $font-base + 2rpx;
    color: #f7d680;
    margin-bottom: 28rpx;
    .iconfont {
      color: #f6e5a3;
      margin-right: 16rpx;
    }
  }
  .e-b {
    font-size: $font-sm;
    color: #d8cba9;
    margin-top: 10rpx;
  }
}
.cover-container {
  background: $page-color-base;
  margin-top: -150rpx;
  padding: 0 30rpx;
  position: relative;
  background: #f5f5f5;
  padding-bottom: 20rpx;
  .arc {
    position: absolute;
    left: 0;
    top: -34rpx;
    width: 100%;
    height: 36rpx;
  }
}
.tj-sction {
  @extend %section;
  .tj-item {
    @extend %flex-center;
    flex-direction: column;
    height: 140rpx;
    font-size: $font-sm;
    color: #75787d;
  }
  .num {
    font-size: $font-lg;
    color: $font-color-dark;
    margin-bottom: 8rpx;
  }
}
.order-section {
  @extend %section;
  padding: 28rpx 0;
  margin-top: 20rpx;
  .order-item {
    @extend %flex-center;
    width: 120rpx;
    height: 120rpx;
    border-radius: 10rpx;
    font-size: $font-base;
    color: $font-color-dark;
  }
  .iconfont {
    font-size: 42rpx;
    margin-bottom: 18rpx;
    color: #fa436a;
  }
  .icon-shouhoutuikuan {
    font-size: 44rpx;
  }
}
.history-section {
  padding: 30rpx 0 0;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 10rpx;
  .sec-header {
    display: flex;
    align-items: center;
    font-size: $font-base;
    color: $font-color-dark;
    line-height: 40rpx;
    margin-left: 30rpx;
    .iconfont {
      font-size: 44rpx;
      color: #5eba8f;
      margin-right: 16rpx;
      line-height: 40rpx;
    }
  }
  .h-list {
    white-space: nowrap;
    padding: 30rpx 30rpx 0;
    image {
      display: inline-block;
      width: 160rpx;
      height: 160rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
    }
  }
}
</style>