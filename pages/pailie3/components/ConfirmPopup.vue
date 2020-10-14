<template>
  <view>
    <uni-popup ref="popup" type="bottom" :mask-click="true" custom>
      <view class="u-popup pb-5 bg-bai">
        <view class="u-popup-header p-2 flex justify-between">
          <view class="u-popup-icon flex-0 flex align-center justify-center"></view>
          <view class="flex-1 text-center">订单支付</view>
          <view class="u-popup-icon flex-0 flex align-center justify-center" @click.stop="close"><text class="iconfont font-s-3">&#xe734;</text></view>
        </view>
        <view class="u-total flex align-center justify-center">¥ {{ money }}</view>
        <view class="u-form">
          <view class="u-form-item">
            <view class="u-label">账户余额</view>
            <view class="u-value">{{ (balanceInfo.balance || 0).toFixed(2) }}</view>
          </view>
          <view class="u-form-item">
            <view class="u-label">订单类型</view>
            <view class="u-value">自购</view>
          </view>
          <view class="u-form-item">
            <view class="u-label">投注时间</view>
            <view class="u-value">{{ orderTime }}</view>
          </view>

          <view class="u-form-item">
            <view class="u-label">扣款后账户余额</view>
            <view class="u-value">{{ moneyRemain }}</view>
          </view>
        </view>
        <view class="font-s-24 text-red p-3">购彩提示：赔率与奖金以实际出票为准</view>
        <view class="u-submit flex align-center justify-center bg-red text-bai" @click.stop="handleSubmit">余额支付</view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
  props: {
    money: [String, Number],
    moneyRemain: [String, Number],
    orderTime: String,
    balanceInfo: Object
  },
  components: {
    uniPopup
  },
  methods: {
    handleSubmit() {
      this.$emit('submit');
    },
    // 打开确认订单弹窗
    open() {
      this.$refs.popup.open();
    },
    // 关闭确认订单弹窗
    close() {
      this.$refs.popup.close();
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-popup-icon {
  width: 50rpx;
  height: 50rpx;
}
.u-form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30rpx;
}
.u-label {
  font-size: 36rpx;
}
.u-value {
  font-size: 36rpx;
  color: #9299a0;
}
.u-submit {
  box-sizing: border-box;
  width: 700rpx;
  height: 80rpx;
  margin-left: 25rpx;
  border-radius: 5rpx;
}
</style>
