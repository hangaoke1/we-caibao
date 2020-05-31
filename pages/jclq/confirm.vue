<template>
  <view class="u-confirm">
    
    <!-- <view style="height: 30rpx;background-color: #fff;"></view> -->
    
    <view v-for="match in selectRaces" :key="match.id" style="background-color: #fff;">
      <we-race :match="match" :type="1"></we-race>
    </view>

    <view style="height: 100rpx;"></view>

    <view class="u-continue" @click.stop="handleContinue">
      <text class="f-36 grey-6">继续添加比赛</text>
    </view>

    <view class="u-bottom">
      <view class="u-pass">
        <view class="u-pass-left" @click.stop="showWaySelect">
          <text v-if="showWas.length === 0" class="f-30" style="width: 375rpx;text-align: center;">
            过关方式
          </text>
          <text v-else class="f-30 lines-1" style="width: 375rpx;text-align: center;">
            {{ getWays(showWas) }}
          </text>
        </view>
        <view class="u-pass-right">
          <view style="margin-right: 10rpx;"><text class="f-24">投</text></view>
          <view class="u-tou-icon" @click.stop="countReduce"><text class="f-30">-</text></view>
          <input
            ref="xInput"
            class="u-input"
            :cursor-spacing="65"
            type="number"
            v-model="count"
            @blur="handleBlur"
          />
          <view class="u-tou-icon" @click.stop="countAdd"><text class="f-30">+</text></view>
          <view style="margin-left: 10rpx;margin-right: 10rpx;"><text class="f-24">倍</text></view>
        </view>
      </view>

      <view class="u-action">
        <view class="u-action-center">
          <view class="u-order-top">
            <text class="f-30 red-6">{{ baseCount }}</text>
            <text class="f-30">注</text>
            <text class="f-30 red-6">{{ count }}</text>
            <text class="f-30">倍 共</text>
            <text class="f-30 red-6">{{ baseCount * count * 2 }}</text>
            <text class="f-30">元</text>
          </view>
          <view class="u-order-bottom">
            <text class="f-26">预计奖金：</text>
            <text class="f-26 red-6">
              <text>{{ (minMaxPrize.min * count).toFixed(2) }}</text>
              <text style="margin: 0 10rpx;">-</text>
              <text>{{ (minMaxPrize.max * count).toFixed(2) }}</text>
            </text>
            <text class="f-26">元</text>
          </view>
        </view>
        <view class="u-action-right">
          <view class="u-next" @click="goNext"><text class="f-24 white-1">下一步</text></view>
        </view>
      </view>
    </view>

    <uni-popup ref="popup" type="bottom" :mask-click="true" custom>
      <view class="u-popup">
        <view class="u-popup-header">
          <view class="u-popup-icon"></view>
          <view class="g-center"><text class="f-30">过关方式</text></view>
          <view class="u-popup-icon" @click.stop="closePopup">
            <text class="iconfont f-30">&#xe734;</text>
          </view>
        </view>
        <view class="u-way-list">
          <view
            class="u-way-item"
            v-for="item in selectArr"
            :key="item"
            :class="{ 'z-active': ways.includes(item) }"
            @click="handleWayChange(item)"
          >
            <text class="u-way-text f-34" :class="{ 'z-active-text': ways.includes(item) }">
              {{ genName(item) }}
            </text>
          </view>
        </view>
      </view>
    </uni-popup>

    <uni-popup ref="orderPopup" type="bottom" :mask-click="true" custom>
      <view class="u-popup">
        <view class="u-popup-header">
          <view class="u-popup-icon"></view>
          <view class="g-center"><text class="f-30">订单支付</text></view>
          <view class="u-popup-icon" @click.stop="closeOrderPopup">
            <text class="iconfont f-30">&#xe734;</text>
          </view>
        </view>
        <view class="u-total">
          <text class="f-36 f-bold">¥ {{ baseCount * count * 2 }}</text>
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
            <view class="u-value"><text class="f-36 grey-6">自购</text></view>
          </view>
          <view class="u-form-item">
            <view class="u-label"><text class="f-36">投注时间</text></view>
            <view class="u-value">
              <text class="f-36 grey-6">{{ date }}</text>
            </view>
          </view>
          <!-- <view class="u-form-item">
            <view class="u-label"><text class="f-36">彩金券抵扣</text></view>
            <view class="u-value" @click.stop="goChooseCoupon">
              <text class="f-36 grey-6" v-if="coupons.length === 0">无可用彩金券</text>
              <template v-else>
                <text v-if="!chooseCouponId" class="f-36 red-6">
                  {{ coupons.length }}张可用彩金券
                </text>
                <text v-else class="f-36 red-6">-{{ chooseCoupon.value }}</text>
                <text class="f-36 iconfont grey-6">&#xe60d;</text>
              </template>
            </view>
          </view> -->
          
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
        <view class="u-submit" @click.stop="doSubmit"><text class="f-36 white-1">余额支付</text></view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import _ from 'lodash';
import dayjs from 'dayjs';
import { mapState, mapActions, mapMutations } from 'vuex';
import weRace from './u-race.vue';
import { genCountStd } from '@/lib/jclqZS.js';
import { limitMap, key2code } from '@/lib/jclq.js';
import { genPrizeStd } from '@/lib/jclqJJ.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import lottery from '@/api/lottery/index.js';

export default {
  components: {
    weRace,
    uniPopup
  },
  data() {
    return {
      date: '',
      isBottomShow: false,
      isOrderShow: false,
      count: 5,
      ways: [] // 过关方式
    };
  },
  watch: {
    limit(v) {
      this.ways = [];
    },
    selectCount: {
      handler() {
        this.ways = [];
      }
    }
  },
  computed: {
    ...mapState({
      balanceInfo: state => state.balanceInfo,
      info: state => state.jclq,
      coupons: state => state.coupons,
      chooseCouponId: state => state.chooseCouponId
    }),
    moneyRemain() {
      const remain = this.balanceInfo.balance - this.baseCount * this.count * 2 + this.couponValue;
      if (remain > 0) {
        return remain.toFixed(2);
      } else {
        return '余额不足';
      }
    },
    couponValue() {
      return this.chooseCoupon ? this.chooseCoupon.value : 0;
    },
    chooseCoupon() {
      return this.coupons.filter(coupon => coupon.id == this.chooseCouponId)[0];
    },
    baseCount() {
      if (!this.selectRaces.length || !this.ways.length) {
        return 0;
      }
      return genCountStd(_.cloneDeep(this.selectRaces), _.cloneDeep(this.ways));
    },
    // 计算奖金范围
    minMaxPrize() {
      if (!this.selectRaces.length || !this.ways.length) {
        return {
          min: 0,
          max: 0
        };
      } else {
        return genPrizeStd(_.cloneDeep(this.selectRaces), _.cloneDeep(this.ways));
      }
    },
    selectRaces() {
      let matches = [];
      this.info &&
        this.info.dataList.forEach(item => {
          item.matches.forEach(match => {
            if (match.choose.length) {
              matches.push(match);
            }
          });
        });
      return matches;
    },
    selectCount() {
      return this.selectRaces.length;
    },
    showWas() {
      return this.ways.sort((a, b) => a - b);
    },
    // 过关限制
    limit() {
      let limit = 8;
      this.selectRaces.forEach(item => {
        item.choose.forEach(item => {
          if (limitMap[item] < limit) {
            limit = limitMap[item];
          }
        });
      });
      return limit;
    },
    selectArr() {
      if (this.selectCount === 0) {
        return [];
      }
      if (this.selectCount === 1) {
        return [1];
      } else {
        return [2, 3, 4, 5, 6, 7, 8]
          .slice(0, this.selectCount - 1)
          .filter(item => item <= this.limit);
      }
    }
  },
  methods: {
    ...mapMutations(['updateChooseCouponId']),
    ...mapActions({
      updateBalanceInfo: 'updateBalanceInfo',
      updateCoupons: 'updateCoupons'
    }),
    openPopup() {
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    openOrderPopup() {
      this.$refs.orderPopup.open();
    },
    closeOrderPopup() {
      this.$refs.orderPopup.close();
    },
    // 刷新当前时间
    genDay() {
      this.date = dayjs().format('YYYY-MM-DD HH:mm:ss');
    },
    // 下单条件检测
    goNext() {
      // 1. 场次检测
      if (this.selectCount === 0) {
        return uni.showToast({
          title: '至少选择1场比赛',
          icon: 'none'
        });
      }
      // 2. 场次检测 非单关提示
      if (this.selectCount === 1 && !this.checkRaces(this.selectRaces[0])) {
        return uni.showToast({
          title: '非单关至少选择2场比赛',
          icon: 'none'
        });
      }
      // 3. 总场次检测
      if (this.selectCount > 8) {
        return uni.showToast({
          title: '混合投注最多8场比赛',
          icon: 'none'
        });
      }
      // 4. 过关方式检测
      if (this.ways.length === 0) {
        return uni.showToast({
          title: '请选择过关方式',
          icon: 'none'
        });
      }

      uni.showLoading({
        title: ''
      });

      // 5. 检测优惠券
      this.updateCoupons({
        money: this.baseCount * this.count * 2,
        lotteryIds: 10058
      })
        .then(() => {
          uni.hideLoading();
          this.updateChooseCouponId('');
          this.genDay();
          this.openOrderPopup();
        })
        .catch(err => {
          console.error(err);
          uni.hideLoading();
        });
    },
    // 订单提交
    async doSubmit() {
      try {
        // 关闭弹窗
        this.closeOrderPopup();
        uni.showLoading({
          title: '订单生成中'
        });
        // 计算奖金
        const forecastBonus =
          (this.minMaxPrize.min * this.count).toFixed(2) +
          '~' +
          (this.minMaxPrize.max * this.count).toFixed(2);

        // 预约下单
        const preParams = this.genBuyPreParams();
        console.log('预下单参数', preParams);
        const preRes = await lottery.buyLotteryPre(preParams);
        console.log('预下单结果', preRes);

        // 下单
        const params = {
          app_schemeId: preRes.schemeId,
          betType: 425,
          buyMoney: this.baseCount * this.count * 2,
          cId: this.chooseCouponId,
          forecastBonus: forecastBonus,
          lotteryId: 10058
        };
        console.log('下单参数', params);
        const res = await lottery.buyLottery(params);
        console.log('下单结果', res);

        // 关闭loading
        uni.hideLoading();

        // 跳转到下单页面
        const single = this.baseCount * 2;
        uni.navigateTo({
          url: `/pages/order/success?schemeId=${res.schemeId}&single=${single}&lotteryId=10058`
        });
      } catch (err) {
        //TODO handle the exception
        uni.hideLoading();
        console.error(err);
      }
    },
    genBuyPreParams() {
      const issues = this.selectRaces.map(match => match.issue);
      const sels = _.uniq(issues).join(',');
      const params = {
        burstIntoStop: 0,
        betType: 425,
        buyAmount: this.baseCount * this.count * 2, // 订单金额
        buyType: 1, // 0表示合买，1表示代购
        cId: this.chooseCouponId, // 优惠券
        cutRepeat: false, // 是否去掉重复
        issueCount: 1,
        issueId: this.info.dataList[0].issueId,
        lotteryId: 10058, // 篮球
        multiple: this.count, // 倍数
        pass: this.getWays(this.ways), // 过关方式
        schemeAmount: this.baseCount * this.count * 2, // 订单金额
        schemeNumber: this.genContent(), // 过关内容：
        schemeNumberUnit: this.baseCount * this.count, // 注数
        sels // 奖期
      };
      return params;
    },
    genContent() {
      // 20191011301`周五301`莫斯科希姆基`巴斯克尼亚`B20191011301_0`false`3,0$
      // 20191011302`周五302`米兰`萨尔基利斯`B20191011302_1`false`0
      const arr = [];
      let str = 'content=';
      let raceList = this.info.dataList.forEach(race => {
        race.matches.forEach(match => {
          if (match.choose.length) {
            const val =
              match.matchCode +
              '`' +
              race.dayOfWeekStr +
              '' +
              match.teamId +
              '`' +
              match.hostName +
              '`' +
              match.guestName +
              '`B' +
              match.matchCode +
              '_1' +
              '`' +
              'false' +
              '`' +
              match.choose.map(key => key2code[key]).join(',');
            arr.push(val);
          }
        });
      });
      return str + arr.join('$');
    },
    // 选择优惠券
    goChooseCoupon() {
      if (!this.coupons.length) return;
      uni.navigateTo({
        url: '/pages/user/couponChoose'
      });
    },
    // 继续选择比赛
    handleContinue() {
      uni.navigateBack();
    },
    // 显示过关方式列表
    showWaySelect() {
      if (this.selectCount === 1 && !this.checkRaces(this.selectRaces[0])) {
        return uni.showToast({
          title: '非单关至少选择2场比赛',
          icon: 'none'
        });
      }
      this.openPopup();
    },
    checkRaces(match) {
      const choose = match.choose;

      const sf = ['sheng', 'fu'];
      const rfsf = ['rfsheng', 'rffu'];
      const dx = ['d', 'x'];
      const sfc = [
        'g15',
        'g610',
        'g1115',
        'g1620',
        'g2125',
        'g26',
        'h15',
        'h610',
        'h1115',
        'h1620',
        'h2125',
        'h26'
      ];

      const {
        sfSingleStatus, // 胜负
        rfsfSingleStatus, // 让分胜负
        sfcSingleStatus, // 比分
        dxfSingleStatus // 大小
      } = match;

      const sfDan = sfSingleStatus === 0;
      const rfsfDan = rfsfSingleStatus === 0;
      const dxfDan = dxfSingleStatus === 0;
      const sfcDan = sfcSingleStatus === 0;

      // 胜负单关检测
      if (_.intersection(choose, sf).length && !sfDan) {
        return false;
      }
      // 让分胜负单关检测
      if (_.intersection(choose, rfsf).length && !rfsfDan) {
        return false;
      }
      // 大小单关检测
      if (_.intersection(choose, dx).length && !dxfDan) {
        return false;
      }
      // 比分单关检测
      if (_.intersection(choose, sfc).length && !sfcDan) {
        return false;
      }
      return true;
    },
    // 处理选择过关
    handleWayChange(item) {
      if (!item) return;
      if (this.ways.includes(item)) {
        this.ways = this.ways.filter(way => way !== item);
      } else {
        this.ways.push(item);
      }
    },
    getWays(ways) {
      let str = '';
      for (let i = 0; i < ways.length; i++) {
        if (i > 0) {
          str += ',';
        }
        str = str + this.genName(ways[i]);
      }
      return str;
    },

    // 获取单个过关名称
    genName(item) {
      if (item === 1) {
        return '单关';
      } else {
        return item + '串1';
      }
    },
    // 倍数增加
    countAdd() {
      this.count = +this.count + 1;
    },

    // 倍数减少
    countReduce() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },

    // 处理输入框失焦
    handleBlur() {
      if (!this.count || this.count == 0) {
        this.count = 1;
      } else {
        this.count = +this.count;
      }
    }
  },
  mounted() {
    const init = this.selectCount > this.limit ? this.limit : this.selectCount;
    this.ways = [init];
    this.updateBalanceInfo();
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-confirm {
  min-height: 100vh;
  background-color: #f0f0f0;
}
.u-continue {
  width: 400rpx;
  height: 80rpx;
  margin-left: 175rpx;
  margin-bottom: 100rpx;
  border: 1rpx solid #ccc;
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
  background-color: #fff;
  border-top: 1rpx solid #ccc;
}

.u-pass {
  display: flex;
  align-items: center;
  height: 100rpx;
}
.u-pass-left {
  width: 375rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.u-pass-right {
  width: 375rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.u-tou-left {
  display: flex;
  align-items: center;
}

.u-tou-icon {
  box-sizing: border-box;
  width: 60rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
  display: flex;
  .g-center();
}

.u-input {
  text-align: center;
  padding: 0 10rpx;
  font-size: 28rpx;
  box-sizing: border-box;
  width: 100rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
  border-left: none;
  border-right: none;
}

.u-action {
  height: 100rpx;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  &-left,
  &-right {
    width: 200rpx;
    display: flex;
    flex-direction: column;
    .g-center();
  }
  &-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    .g-center();
  }
}
.u-next {
  width: 120rpx;
  height: 60rpx;
  background-color: @red-6;
  border-radius: 6rpx;
  display: flex;
  .g-center();
}

.u-order-top,
.u-order-bottom {
  display: flex;
  align-items: center;
}

.u-way-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.u-way-item {
  width: 220rpx;
  height: 70rpx;
  margin-left: 22.5rpx;
  margin-bottom: 10rpx;
  border: 1rpx solid #ccc;
  border-radius: 6rpx;
  display: flex;
  .g-center();
}

.u-way-text {
  color: #333;
}
.z-active {
  border-color: @red-6;
}
.z-active-text {
  color: @red-6;
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
</style>
