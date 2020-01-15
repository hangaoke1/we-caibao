<template>
  <view class="u-order">
    <view class="u-banner">
      <view class="u-title f-30 white-1">{{ info.lotteryName }}</view>
    </view>
    <view class="u-info">
      <view class="u-info-item">
        <view class="f-26 red-6">{{ (info.schemeAmount || 0).toFixed(1) }}元</view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">订单金额</view>
      </view>
      <view class="u-info-item">
        <view class="f-26 red-6" v-if="['待出票', '出票成功'].includes(statusDesc)">---</view>
        <view class="f-26 grey-6" v-if="statusDesc === '未中奖'">未中奖</view>
        <view class="f-26 red-6" v-if="statusDesc === '中奖'">
          {{ (info.pureSchemePrize || 0).toFixed(2) }}元
        </view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">中奖金额</view>
      </view>
      
      <view class="u-info-item" v-if="showCommendation && info.rewardAmount">
        <view class="f-26 red-6" v-if="['待出票', '出票成功', '未中奖'].includes(statusDesc)">---</view>
        <view class="f-26 red-6" v-if="statusDesc === '中奖'">
          <!-- {{ (info.pureSchemePrize / 1.05 * 0.05 || 0).toFixed(2) }}元 -->
          {{ (info.rewardAmount || 0).toFixed(2) }}元
        </view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">平台活动</view>
      </view>
    </view>

    <view class="u-status-wrap"><u-status :status="statusDesc"></u-status></view>

    <view v-if="info.lotteryId == 10026">超级大乐透</view>
    <view v-if="info.lotteryId == 10039"><u-toto14 :info="info"></u-toto14></view>
    <view v-if="info.lotteryId == 10040"><u-toto9 :info="info"></u-toto9></view>
    <view v-if="info.lotteryId == 10058"><u-lq :info="info"></u-lq></view>
    <view v-if="info.lotteryId == 10059"><u-zq :info="info"></u-zq></view>
    <view v-if="info.lotteryId == 10108"><u-js11x5 :info="info"></u-js11x5></view>
  </view>
</template>

<script>
import lottery from '@/api/lottery/index.js';
import uStatus from './components/u-status.vue';
import uZq from './components/u-zq.vue';
import uLq from './components/u-lq.vue';
import uJs11x5 from './components/u-js11x5.vue';
import uToto14 from './components/u-toto14.vue';
import uToto9 from './components/u-toto9.vue';
export default {
  components: {
    uStatus,
    uZq,
    uLq,
    uJs11x5,
    uToto14,
    uToto9
  },
  data() {
    return {
      statusDesc: '',
      cpMap: {
        10026: '超级大乐透',
        10039: '胜负彩',
        10040: '任选9场',
        10058: '竞彩篮球',
        10059: '竞彩足球',
        10108: '江苏11选5'
      },
      info: {}
    };
  },
  computed: {
    // 足球、篮球、11选5 显示嘉奖
    showCommendation () {
      return ['10058', '10059', '10108'].includes(this.info.lotteryId + '');
    }
  },
  onLoad(option) {
    const { schemeId, statusDesc } = option;
    this.statusDesc = statusDesc;
    lottery
      .getSchemeDetail({
        schemeId
      })
      .then(res => {
        console.log('orderDetail', res);
        this.info = res;
      });
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-order {
  min-height: 100vh;
  background: #f0f0f0;
}
.u-banner {
  box-sizing: border-box;
  width: 750rpx;
  height: 240rpx;
  background: @red-6;
  padding: 40rpx;
}
.u-info {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 665rpx;
  height: 144rpx;
  margin: 0 auto;
  margin-top: -72rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 91, 0.18);
}
.u-info-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.u-status-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18rpx;
  margin-bottom: 18rpx;
}
</style>
