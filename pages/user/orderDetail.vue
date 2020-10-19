<template>
  <view class="u-order">
    <view class="u-banner">
      <image class="u-banner-bg" src="/static/ds_top_bg.png"></image>
      <view class="u-title f-40 white-1 f-bold" v-if="item.lotteryName !== '排列3/5'">{{ info.lotteryName }}</view>
      <view class="u-title f-40 white-1 f-bold" v-else>排列3</view>
    </view>
    <view class="u-info">
      <image
        v-if="statusDesc === '中奖'"
        class="u-prize-icon"
        src="/static/icon_score_match_hit.png"
      ></image>
      <image
        v-if="statusDesc === '未中奖'"
        class="u-prize-icon"
        src="/static/icon_score_match_miss.png"
      ></image>

      <view class="u-info-item">
        <view class="f-26 red-6">{{ (info.schemeAmount || 0).toFixed(1) }}元</view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">订单金额</view>
      </view>
      <view class="u-info-item">
        <view class="f-26 red-6" v-if="['待出票', '出票成功'].includes(statusDesc)">---</view>
        <view class="f-26 grey-6" v-if="statusDesc === '未中奖'">0.00元</view>
        <view class="f-26 red-6" v-if="statusDesc === '中奖'">
          <text>{{ (info.pureSchemePrize || 0).toFixed(2) }}元</text>
        </view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">中奖金额</view>
      </view>

      <view class="u-info-item" v-if="showCommendation && info.rewardAmount">
        <view class="f-26 red-6" v-if="['待出票', '出票成功', '未中奖'].includes(statusDesc)">
          <text>---</text>
        </view>
        <view class="f-26 red-6" v-if="statusDesc === '中奖'">
          <text>{{ (info.rewardAmount || 0).toFixed(2) }}元</text>
        </view>
        <view class="f-26 grey-6" style="margin-top: 10rpx;">平台活动</view>
      </view>
    </view>

    <view class="u-status-wrap"><f-status :status="statusDesc"></f-status></view>

    <view v-if="info.lotteryId == 10026"><f-daletou :info="info"></f-daletou></view>
    <view v-if="info.lotteryId == 10039"><f-toto14 :info="info"></f-toto14></view>
    <view v-if="info.lotteryId == 10040"><f-toto9 :info="info"></f-toto9></view>
    <view v-if="info.lotteryId == 10058"><f-lq :info="info"></f-lq></view>
    <view v-if="info.lotteryId == 10059"><f-zq :info="info"></f-zq></view>
    <view v-if="info.lotteryId == 10108"><f-js11x5 :info="info"></f-js11x5></view>
    <view v-if="info.lotteryId == 10024"><f-pailie3 :info="info"></f-pailie3></view>
  </view>
</template>

<script>
import lottery from '@/api/lottery/index.js';
import fStatus from './components/f-status.vue';
import fZq from './components/f-zq.vue';
import fLq from './components/f-lq.vue';
import fJs11x5 from './components/f-js11x5.vue';
import fToto14 from './components/f-toto14.vue';
import fToto9 from './components/f-toto9.vue';
import fDaletou from './components/f-daletou.vue';
import fPailie3 from './components/f-pailie3.vue';
export default {
  components: {
    fStatus,
    fZq,
    fLq,
    fJs11x5,
    fToto14,
    fToto9,
    fDaletou,
    fPailie3
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
        10108: '山东11选5',
        10024: '排列3'
      },
      info: {}
    };
  },
  computed: {
    // 足球、篮球、11选5 显示嘉奖
    showCommendation() {
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
  overflow-x: hidden;
}
.u-banner {
  position: relative;
  box-sizing: border-box;
  width: 750rpx;
  height: 280rpx;
}
.u-banner-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.u-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.u-info {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 665rpx;
  height: 144rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 91, 0.18);
}
.u-prize-icon {
  position: absolute;
  right: -40rpx;
  top: -30rpx;
  width: 140rpx;
  height: 126rpx;
  transform: rotate(30deg);
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
