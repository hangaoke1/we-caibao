<template>
  <!-- 跟单详情 -->
  <view class="u-case">
    <!-- 用户信息 -->
    <view class="u-user" @tap="goUser">
      <div class="u-avatar">
        <g-img :src="info.avatar" defaultSrc="/static/portrait.png"></g-img>
      </div>
      <view class="u-info">
        <view class="u-info-item">
          <text class="f-28 f-bold">{{ info.publisherName }}</text>
          <view class="u-combo" v-if="info.continueRedCount">
            <view class="u-combo-left f-20 white-1">{{ info.continueRedCount }}</view>
            <view class="u-combo-right f-20">连红</view>
          </view>
        </view>
        <view class="u-info-item">
          <view class="u-grade" style="color: #DB3533;">
            <text class="f-22">{{ info.hitDetail || '0中0' }}</text>
          </view>
          <view class="u-grade" style="background-color: #DB3533;">
            <text class="f-22  white-1">盈利{{ info.weekHitRatio }}%</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 宣言 -->
    <view class="u-msg">
      <text class="f-28">{{ info.describe || '' }}</text>
      <view class="u-result" v-if="info.statusDesc === '中奖'">
        <image class="u-img" src="/static/win.png"></image>
        <text class="u-des f-22 red-6 f-bold">{{ (info.pureSchemePrize || 0).toFixed(1) }}元</text>
      </view>
      <view class="u-result" v-if="info.statusDesc === '未中奖'">
        <image class="u-img" src="/static/nowin.png"></image>
        <text class="u-des f-22 grey-6">未中奖</text>
      </view>
    </view>

    <!-- 订单简要信息 -->
    <view class="u-self">
      <view class="u-order">
        <view>
          <text class="f-30">{{ pass }}</text>
          <text class="f-26 grey-3" style="margin-left: 10rpx;">佣金 10%</text>
          <text class="f-30 grey-3 iconfont" @tap="showTip">&#xe73e;</text>
        </view>
        <text class="f-30 grey-6">订单编号: {{ info.schemeId }}</text>
      </view>

      <g-table width="660">
        <g-tr>
          <g-td
            v-for="item in ['类型', '自购金额', '起投金额', '人气']"
            :key="item"
            padding="0"
            col="165"
          >
            <view class="u-td-wrap">
              <text class="f-28">{{ item }}</text>
            </view>
          </g-td>
        </g-tr>
        <g-tr>
          <g-td col="165" padding="0">
            <view class="u-td-wrap">
              <text class="f-28 lines-1">{{ lotteryMap[info.lotteryId] }}</text>
            </view>
          </g-td>
          <g-td col="165" padding="0">
            <view class="u-td-wrap">
              <text class="f-28">{{ info.buyAmount }}元</text>
            </view>
          </g-td>
          <g-td col="165" padding="0">
            <view class="u-td-wrap">
              <text class="f-28 red-6">{{ info.singleMultipleMoney }}元</text>
            </view>
          </g-td>
          <g-td col="165" padding="0">
            <view class="u-td-wrap">
              <text class="f-22 red-6 iconfont" v-for="item in hotCount" :key="item">&#xe6c2;</text>
            </view>
          </g-td>
        </g-tr>
      </g-table>
    </view>

    <view style="padding: 20rpx 43rpx;margin-top: 30rpx;background-color: #fff;">
      <text class="f-28">跟单金额：</text>
      <text class="f-28 red-6" style="margin-right: 30rpx;">{{ info.followMoney }}元</text>
      <text class="f-28">佣金收入：</text>
      <text class="f-28 red-6">{{ commission }}元</text>
    </view>

    <!-- tab选项 -->
    <view class="u-tab">
      <view
        class="u-tab-item f-30"
        :class="{ 'z-active-text': index === activeIndex }"
        v-for="(item, index) in ['方案详情', '跟单列表']"
        :key="item"
        @tap="changeTab(index)"
      >
        <text>{{ item }}</text>
        <text v-if="item === '方案详情'">({{ matchLen }})</text>
        <text v-else>({{ followCount }})</text>
      </view>
      <view class="u-tab-line" :style="lineStyle"></view>
    </view>

    <!-- 详情信息 -->
    <view class="u-list">
      <!-- 足球 -->
      <view v-if="activeIndex == 0">
        <view class="u-tip-2" v-if="info.statusDesc === '未中奖' && info.lotteryId == 10058">
          <view class="f-24 red-6">竞彩篮球存在高频率的变盘情况，导致一场比赛可能有多个赛果。</view>
        </view>

        <view
          class="u-tip-2"
          style="margin-bottom: 10rpx;"
          v-if="info.statusDesc === '未中奖' && info.lotteryId == 10058"
        >
          <view class="f-24 red-6">如有疑问，请核对方案中的比赛。</view>
        </view>

        <view v-if="info.open">
          <zq-case :matches="matches" v-if="info.lotteryId == 10059"></zq-case>
          <lq-case :matches="matches" v-if="info.lotteryId == 10058"></lq-case>
        </view>
        <view class="u-hide" v-else>
          <text class="iconfont f-36 grey-6">&#xe6ad;</text>
          <text class="f-36 grey-6">开赛后可见</text>
        </view>
      </view>

      <view v-else>
        <view style="padding: 20rpx;"><text class="f-30 grey-6">(默认显示五条)</text></view>

        <g-table width="750" style="background-color: #fff;">
          <g-tr>
            <g-td padding="0" col="200">
              <view class="u-td-wrap"><text class="f-28">跟单用户</text></view>
            </g-td>
            <g-td padding="0" col="200">
              <view class="u-td-wrap"><text class="f-28">金额（元）</text></view>
            </g-td>
            <g-td padding="0" col="200">
              <view class="u-td-wrap"><text class="f-28">奖金（元）</text></view>
            </g-td>
            <g-td padding="0" col="150">
              <view class="u-td-wrap"><text class="f-28">佣金</text></view>
            </g-td>
          </g-tr>
          <g-tr v-for="(item, index) in copyList" :key="index">
            <g-td padding="0" col="200">
              <view class="u-td-wrap">
                <text class="f-28 lines-1">{{ item.username }}</text>
              </view>
            </g-td>
            <g-td padding="0" col="200">
              <view class="u-td-wrap">
                <text class="f-28">{{ item.money }}</text>
              </view>
            </g-td>
            <g-td padding="0" col="200">
              <view class="u-td-wrap">
                <text class="f-28 red-6">{{ item.price }}</text>
              </view>
            </g-td>
            <g-td padding="0" col="150">
              <view class="u-td-wrap">
                <text class="f-28">{{ item.commission }}</text>
              </view>
            </g-td>
          </g-tr>
        </g-table>
      </view>
    </view>

    <template v-if="fromOrder">
      <view class="u-goOrder" @tap="goOrder">订单详情</view>
    </template>
    <template v-if="!fromOrder && info.statusDesc == '出票成功'">
      <view class="u-bottom">
        <!-- <view class="u-bottom"> -->
        <view class="u-bei">
          <view
            class="u-bei-item"
            v-for="bei in beiList"
            :key="bei"
            :class="{ 'z-active': bei == count }"
            @tap="handleBei(bei)"
          >
            <text class="f-30" :class="{ 'white-1': bei == count }">{{ bei }}倍</text>
          </view>
        </view>
        <view class="u-tou f-row">
          <view class="u-tou-left f-row">
            <view style="margin-right: 10rpx;"><text class="f-24">投</text></view>
            <view class="u-tou-icon" @tap="countReduce"><text class="f-30">-</text></view>
            <input
              ref="xInput"
              class="u-input"
              :cursor-spacing="30"
              type="number"
              v-model="count"
              @blur="handleBlur"
            />
            <view class="u-tou-icon" @tap="countAdd"><text class="f-30">+</text></view>
            <view style="margin-left: 10rpx;margin-right: 10rpx;">
              <text class="f-24">倍</text>
            </view>
            <view class="f-row" style="align-items: center;">
              <text class="f-24">共</text>
              <text class="f-24 red-6">{{ copyVal }}</text>
              <text class="f-24">元</text>
            </view>
          </view>
          <view class="u-add-order" @tap="openBottomPopup">
            <text class="f-30 white-1">下单</text>
          </view>
        </view>
      </view>

      <!-- 弹窗内容 -->
      <uni-popup ref="popup" type="bottom" :mask-click="true" custom>
        <view class="u-popup">
          <view class="u-popup-header">
            <view class="u-popup-icon"></view>
            <view class="g-center"><text class="f-30">订单支付</text></view>
            <view class="u-popup-icon" @tap="closePopup">
              <text class="iconfont f-30">&#xe734;</text>
            </view>
          </view>
          <view class="u-total">
            <text class="f-36 f-bold">¥ {{ copyVal }}</text>
          </view>
          <view class="u-form">
            <view class="u-form-item">
              <view class="u-label"><text class="f-36">账户余额</text></view>
              <view class="u-value">
                <text class="f-36 grey-6">{{ (balanceInfo.balance || 0).toFixed(2) }}</text>
              </view>
            </view>
            <view class="u-form-item">
              <view class="u-label"><text class="f-36">订单类型</text></view>
              <view class="u-value"><text class="f-36 grey-6">跟单</text></view>
            </view>
            <view class="u-form-item">
              <view class="u-label"><text class="f-36">投注时间</text></view>
              <view class="u-value">
                <text class="f-36 grey-6">{{ info.initiateTime }}</text>
              </view>
            </view>
            <view class="u-form-item">
              <view class="u-label"><text class="f-36">扣款后账户余额</text></view>
              <view class="u-value">
                <text class="f-36 grey-6">{{ moneyRemain }}</text>
              </view>
            </view>
          </view>
          <view class="u-tip-warn">
            <text class="f-28 red-6">购彩提示：赔率与奖金以实际出票为准</text>
          </view>
          <view class="u-submit" @tap="doCopy"><text class="f-36 white-1">余额支付</text></view>
        </view>
      </uni-popup>
    </template>
  </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import lottery from '@/api/lottery/index.js';
import _ from 'lodash';
import gImg from '@/components/g-img/index.vue';
import gTable from '@/components/vue-table/vue-table.vue';
import gTr from '@/components/vue-table/vue-tr.vue';
import gTd from '@/components/vue-table/vue-td.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import zqCase from './zq-case.vue';
import lqCase from './lq-case.vue';
export default {
  components: {
    gTable,
    gTr,
    gTd,
    uniPopup,
    zqCase,
    lqCase,
    gImg
  },
  data() {
    return {
      loading: false, // 跟单锁
      id: '',
      fromOrder: '',
      schemeId: '',
      beiList: [10, 20, 50, 100],
      info: {
        publisherName: '',
        continueRedCount: '',
        hitDetail: '',
        weekHitRatio: '',
        describe: '',
        schemeId: '',
        buyAmount: '',
        singleMultipleMoney: '',
        followMoney: 0,
        subCommission: 0
      },
      copyList: [],
      followCount: 0,
      activeIndex: 0,
      count: 10,
      lotteryMap: {
        10058: '竞彩篮球',
        10059: '竞彩足球'
      }
    };
  },
  computed: {
    ...mapState({
      balanceInfo: state => state.balanceInfo,
      coupons: state => state.coupons,
      chooseCouponId: state => state.chooseCouponId
    }),
    moneyRemain() {
      const remain = this.balanceInfo.balance - this.copyVal + this.couponValue;
      if (remain > 0) {
        return remain.toFixed(2);
      } else {
        return '余额不足';
      }
    },
    couponValue() {
      return this.chooseCoupon ? this.chooseCoupon.value : 0;
    },
    hotCount() {
      return Number(this.info.starCount);
    },
    chooseCoupon() {
      return this.coupons.filter(coupon => coupon.id == this.chooseCouponId)[0];
    },
    copyVal() {
      if (!this.count || !this.info.singleMultipleMoney) {
        return 0;
      } else {
        return this.count * this.info.singleMultipleMoney;
      }
    },
    // 过关方式
    pass() {
      return _.get(this.info, 'schemeContent[0].pass');
    },
    matchLen() {
      const matches = _.get(this.info, 'schemeContent[0].matches', []);
      return matches.length;
    },
    // 比赛场次
    matches() {
      const matches = _.get(this.info, 'schemeContent[0].matches', []);
      matches.forEach(match => {
        match.bingos = this.genBingo(match);
      });
      // return matches.filter(match => match.openFlag);
      return matches;
    },
    lineStyle() {
      return `
        width: 375rpx;
        transform: translate3d(${this.activeIndex * 375}rpx, 0, 0);
        `;
    },
    commission() {
      return this.info.subCommission ? this.info.subCommission.toFixed(2) : '0.00';
    }
  },
  methods: {
    ...mapMutations(['updateChooseCouponId']),
    ...mapActions({
      updateBalanceInfo: 'updateBalanceInfo',
      updateCoupons: 'updateCoupons'
    }),
    showTip() {
      uni.showModal({
        title: '佣金提示',
        content: '彩店收取2%服务费，发单人收取8%佣金',
        showCancel: false,
        success: function(res) {}
      });
    },
    // 前往用户主页
    goUser() {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + this.info.publisherUserId
      });
    },
    // 查看订单详情
    goOrder() {
      uni.navigateTo({
        url: `/pages/user/orderDetail?schemeId=${this.schemeId}&statusDesc=${this.statusDesc}`
      });
    },
    openPopup() {
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    handleBei(bei) {
      this.count = bei;
    },
    async doCopy() {
      try {
        if (this.loading) {
          return;
        }
        this.closePopup();
        this.loading = true;
        const params = {
          cId: this.chooseCouponId,
          multiple: this.count,
          schemeId: this.id
        };
        await lottery.doCopy(params);
        this.loading = false;
        uni.showToast({
          title: '跟单成功',
          icon: 'none'
        });
        uni.switchTab({
          url: '/pages/follow/follow'
        });
      } catch (err) {
        this.loading = false;
      }
    },
    goChooseCoupon() {
      if (!this.coupons.length) return;
      uni.navigateTo({
        url: '/pages/user/couponChoose'
      });
    },
    handleBlur() {
      if (!this.count || this.count == 0) {
        this.count = 1;
      } else {
        this.count = +this.count;
      }
    },
    genBingo(match) {
      if (!match.bingo) return '';
      const bingos = match.bingo.split('/').map(item => {
        const bingo = item.trim();
        const bingoArr = bingo.split('：');
        return {
          name: bingoArr[0],
          value: bingoArr[1]
        };
      });
      return bingos;
    },
    // 获取订单详情
    getOrderDetail() {
      uni.showLoading({
        title: '加载中'
      });
      lottery
        .getSchemeDetail({
          schemeId: this.id
        })
        .then(res => {
          this.info = res;
          console.log('方案详情数据: ', res);
          uni.hideLoading();
        })
        .catch(err => {
          uni.hideLoading();
        });
    },
    // 获取跟单列表
    getCopyList() {
      lottery
        .getCopyBuyList({
          schemeId: this.id,
          firstRow: 0,
          fetchSize: 5
        })
        .then(res => {
          console.log('copyList', res);
          res.list.forEach(item => {
            const price = (item.price * 0.1).toFixed(2);
            item.commission = price === 'NaN' ? '----' : price;
          });
          this.copyList = res.list;
          this.followCount = res.count || 0;
        })
        .catch(err => {});
    },
    countReduce() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    countAdd() {
      this.count = +this.count + 1;
    },
    openBottomPopup() {
      // 请求可用优惠券
      uni.showLoading();
      this.updateCoupons({
        money: this.copyVal,
        lotteryIds: this.info.lotteryId
      })
        .then(() => {
          uni.hideLoading();
          this.updateChooseCouponId('');
          this.openPopup();
        })
        .catch(err => {
          console.error(err);
          uni.hideLoading();
        });
    },
    changeTab(index) {
      this.activeIndex = index;
    },
    handleTabChange(event) {
      this.activeIndex = event.detail.current;
    }
  },
  onLoad(options) {
    this.id = options.id;
    this.fromOrder = options.fromOrder;
    this.statusDesc = options.statusDesc;
    this.schemeId = options.schemeId;
    this.count = options.count || 10;
  },

  onReady() {
    this.getOrderDetail();
    this.getCopyList();
    this.updateBalanceInfo();
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.u-case {
  width: 750rpx;
  min-height: 100vh;
  padding-bottom: 200rpx;
  overflow: hidden;
  background-color: #f0f0f0;
}
.u-user {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 36rpx 43rpx;
  border-bottom: 1rpx solid #ebebeb;
  background-color: #fff;
}
.u-info {
  margin-left: 26rpx;
  flex: 1;
  background-color: #fff;
  &-item {
    position: relative;
    display: flex;
    align-items: center;
  }
}
.u-avatar {
  width: 94rpx;
  height: 94rpx;
  border-radius: 94rpx;
  background: #f0f0f0;
  overflow: hidden;
  border: 2rpx solid @yellow-6;
  transform: scale(1);
}
.u-grade {
  border: 1rpx solid #db3533;
  box-sizing: border-box;
  padding: 1rpx 6rpx;
  display: flex;
  .g-center();
}
.u-msg {
  position: relative;
  padding: 36rpx 43rpx;
  background-color: #fff;
}
.u-result {
  position: absolute;
  display: flex;
  width: 200rpx;
  height: 158rpx;
  right: 30rpx;
  top: -60rpx;
  .g-center();
}
.u-des {
  transform: rotate(-18deg);
  transform-origin: 50% 50%;
}
.u-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.u-self {
  padding: 0 43rpx 20rpx 43rpx;
  background-color: #fff;
}
.u-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 0;
}
.u-td-wrap {
  box-sizing: border-box;
  display: flex;
  padding: 20rpx;
  height: 100%;
  .g-center();
}

.u-tab {
  position: relative;
  display: flex;
  width: 750rpx;
  height: 80rpx;
  border-top: 1rpx solid #f0f0f0;
  border-bottom: 1rpx solid #f0f0f0;
  background-color: #fff;
  margin-bottom: 10rpx;
}

.u-tab-item {
  flex: 1;
  height: 80rpx;
  background-color: #fff;
  display: flex;
  .g-center();
}

.u-tab-line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4rpx;
  background-color: @red-6;
  transform: translate3d(0, 0, 0);
  transition: transform 200ms cubic-bezier(0.36, 0.66, 0.04, 1);
}
.z-active-text {
  color: @red-6;
}
.u-list {
  background-color: #fff;
}

.u-tip-2 {
  padding: 0 20rpx;
  background-color: #fff;
}

.u-hide {
  width: 750rpx;
  height: 400rpx;
  background-color: #fff;
  display: flex;
  .g-center();
}

.u-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750rpx;
  height: 200rpx;
  border-top: 1rpx solid #ccc;
  background-color: #fff;
  z-index: 200;
}

.u-bei {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 25rpx;
  border-bottom: 1rpx solid #ccc;
}
.u-bei-item {
  width: 160rpx;
  height: 60rpx;
  border: 1rpx solid #333;
  border-radius: 5rpx;
  display: flex;
  .g-center();
}

.u-tou {
  padding: 20rpx 25rpx 40rpx 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.u-tou-left {
  display: flex;
  align-items: center;
}

.u-tou-icon {
  display: flex;
  width: 60rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
  .g-center();
}

.u-input {
  text-align: center;
  padding: 0 10rpx;
  font-size: 28rpx;
  width: 100rpx;
  height: 60rpx;
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
}

.u-add-order {
  width: 160rpx;
  height: 60rpx;
  background-color: @red-6;
  border-radius: 5rpx;
  display: flex;
  .g-center();
}
.z-active {
  background-color: @red-6;
  border-color: @red-6;
}

.u-popup {
  box-sizing: border-box;
  background: #fff;
  padding-bottom: 50rpx;
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
}
.u-total {
  width: 100%;
  display: flex;
  justify-content: center;
}

.u-form-item {
  box-sizing: border-box;
  width: 100%;
  padding: 30rpx 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #ccc;
}
.u-value {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.u-tip-warn {
  padding: 30rpx;
}
.u-submit {
  box-sizing: border-box;
  width: 700rpx;
  height: 80rpx;
  margin-left: 25rpx;
  background-color: @red-6;
  border-radius: 5rpx;
  display: flex;
  .g-center();
}

.u-goOrder {
  position: fixed;
  left: 150rpx;
  bottom: 80rpx;
  width: 450rpx;
  height: 70rpx;
  border-radius: 10rpx;
  background: #db3533;
  font-size: 36rpx;
  color: #fff;
  display: flex;
  .g-center();
}

.u-combo {
  width: 80rpx;
  height: 30rpx;
  border-radius: 20rpx;
  border: 1rpx solid red;
  display: flex;
  overflow: hidden;
  margin-left: 10rpx;
  .g-center();
  &-left {
    flex-basis: 40%;
    background-color: red;
    display: flex;
    font-weight: bold;
    height: 100%;
    .g-center();
  }
  &-right {
    color: red;
    flex-basis: 60%;
    background-color: #fff;
    display: flex;
    height: 100%;
    .g-center();
  }
}
</style>
