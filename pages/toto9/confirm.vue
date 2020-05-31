<template>
  <view class="u-confirm">
    <view class="u-title f-26">共{{selectCount}}场比赛</view>
    
    <view class="u-list" v-if="info">
      <view class="u-item" v-for="(match, index) in info.data" :key="index">
        <view class="u-left f-26">
          <view>{{index + 1}}</view>
          <view>{{match.matchTime.slice(5, 10)}}</view>
        </view>
        <view class="u-right">
          <view class="u-battle f-30">
            <view style="flex: 1;text-align: right;">{{match.hostName}}</view>
            <view style="flex: 0 0 auto;margin: 0 30rpx;">VS</view>
            <view style="flex: 1;text-align: left;">{{match.guestName}}</view>
          </view>
          <view class="u-choose-list f-30">
            <view class="u-choose-item" :class="{'z-active-choose': match.choose.includes(3)}" @click.stop="chooseChange(match, 3, index)">胜</view>
            <view class="u-choose-item" :class="{'z-active-choose': match.choose.includes(1)}" @click.stop="chooseChange(match, 1, index)">平</view>
            <view class="u-choose-item" :class="{'z-active-choose': match.choose.includes(0)}" @click.stop="chooseChange(match, 0, index)">负</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="u-bottom">
      <view class="u-bei">
        <view
          class="u-bei-item"
          v-for="bei in beiList"
          :key="bei"
          :class="{ 'z-active': bei == multiple }"
          @click.stop="handleBei(bei)"
        >
          <text class="f-30" :class="{ 'white-1': bei == multiple }">{{ bei }}倍</text>
        </view>
      </view>
      <view class="u-tou f-row">
        <view class="u-tou-left f-row">
          <view style="margin-right: 10rpx;"><text class="f-30">投</text></view>
          <view class="u-tou-icon" @click.stop="multipleReduce"><text class="f-30">-</text></view>
          <input
            ref="xInput"
            class="u-input"
            :cursor-spacing="30"
            type="number"
            v-model="multiple"
            @blur="handleBlur"
          />
          <view class="u-tou-icon" @click.stop="multipleAdd"><text class="f-30">+</text></view>
          <view style="margin-left: 10rpx;margin-right: 10rpx;"><text class="f-30">倍</text></view>
          <view>
            <!-- <text class="f-24">共</text>
            <text class="f-24 red-6">{{ money }}</text>
            <text class="f-24">元</text> -->
          </view>
        </view>
        <view class="u-add-order" @click.stop="openBottomPopup">
          <text class="f-30 white-1">下单</text>
        </view>
      </view>
      <view style="text-align: center;">
        <text class="f-30 red-6">{{ baseCount }}</text>
        <text class="f-30">注</text>
        <text class="f-30 red-6">{{ multiple }}</text>
        <text class="f-30">倍</text>
        <text class="f-30" style="margin-left: 10rpx;">共</text>
        <text class="f-30 red-6">{{ money }}</text>
        <text class="f-30">元</text>
      </view>
    </view>
    
    <!-- 弹窗内容 -->
    <uni-popup ref="popup" type="bottom" :mask-click="true" custom>
      <view class="u-popup">
        <view class="u-popup-header">
          <view class="u-popup-icon"></view>
          <view class="g-center"><text class="f-30">订单支付</text></view>
          <view class="u-popup-icon" @click.stop="closePopup">
            <text class="iconfont f-30">&#xe734;</text>
          </view>
        </view>
        <view class="u-total">
          <text class="f-36 f-bold">¥ {{ money }}</text>
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
              <text class="f-36 grey-6">{{ orderTime }}</text>
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
        <view class="u-submit" @click.stop="handleSubmit"><text class="f-36 white-1">余额支付</text></view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import lottery from '@/api/lottery/index.js'
import arrayCombine from '@/lib/arrayCombine.js'

export default {
  components: {
    uniPopup
  },
  data () {
    return {
      loading: false, // 下单锁
      multiple: 1, // 倍数
      beiList: [10, 20, 50, 100],
      orderTime: '',
    }
  },
  computed: {
    ...mapState({
      info: state => state.toto9,
      balanceInfo: state => state.balanceInfo,
      coupons: state => state.coupons,
      chooseCouponId: state => state.chooseCouponId
    }),
    moneyRemain() {
      const remain = this.balanceInfo.balance - this.money + this.couponValue;
      if (remain > 0) {
        return remain.toFixed(2);
      } else {
        return '余额不足';
      }
    },
    money() {
      return this.baseCount * this.multiple * 2;
    },
    couponValue() {
      return this.chooseCoupon ? this.chooseCoupon.value : 0;
    },
    chooseCoupon() {
      return this.coupons.filter(coupon => coupon.id == this.chooseCouponId)[0];
    },
    baseCount () {
      if (!this.info || this.info.data.length < 9) { return 0; }
      
      let combineAll = arrayCombine(this.selectRace);
      let combine = combineAll.filter(arr => arr.length === 9); // [ [x, ..., x], [x, ..., x]]
      let sum = combine.reduce((total, matchs) => {
        let subTotal = matchs.reduce((v, match) => v * match.choose.length, 1)
        return total + subTotal
      }, 0)
    
      return sum;
    },
    selectRace() {
      return this.info ? this.info.data.filter(match => match.choose.length) : [];
    },
    selectCount() {
      return this.selectRace.length;
    }
  },
  methods: {
    ...mapActions({
      updateToto9: 'updateToto9',
      updateBalanceInfo: 'updateBalanceInfo',
      updateCoupons: 'updateCoupons'
    }),
    ...mapMutations(['updateToto9ChooseByIndex', 'updateChooseCouponId']),
    goChooseCoupon() {
      if (!this.coupons.length) return;
      uni.navigateTo({
        url: '/pages/user/couponChoose'
      });
    },
    // 提交订单
    async handleSubmit() {
      try{
        if (this.loading) { return }
        this.loading = true
        // 关闭弹窗
        this.closePopup();
        
        uni.showLoading({
          title: '订单生成中'
        });
        // 预下单
        const preParams = this.genBuyPreParams();
        console.log('jiangsu预下单参数', preParams);
        const preRes = await lottery.buyLotteryPre(preParams);
        console.log('jiangsu预下单结果', preRes);
        
        // 下单
        const params = {
          app_schemeId: preRes.schemeId,
          betType: 9,
          listType: 0,
          forecastBonus: 0,
          lotteryId: 10040
        };
        console.log('jiangsu下单参数', params);
        const res = await lottery.buyLottery(params);
        console.log('jiangsu下单结果', res);
        
        // 关闭loading
        uni.hideLoading();
        
        // 解除锁
        this.loading = false
        
        // 跳转
        uni.navigateTo({
          url: `/pages/order/success?schemeId=${res.schemeId}&lotteryId=10040`
        });
      }catch(e){
        //TODO handle the exception
        uni.hideLoading();
        this.loading = false
        console.log(err);
      }
    },
    genBuyPreParams() {
      const params = {
        buyAmount: this.money,
        buyType: 1,
        cId: this.chooseCouponId,
        cutRepeat: false,
        issueCount: 1,
        issueId: this.info.curIssueId,
        lotteryId: 10040,
        multiple: this.multiple,
        schemeAmount: this.money, // 金额
        schemeNumber: this.genSchemeNumber(),
        schemeNumberUnit: this.baseCount
      };
    
      return params;
    },
    // 单或者多
    genSchemeNumber () {
      let type;
      let schemeNumber = ''
      const mul = this.info.data.filter(match => match.choose.length > 1)
      if (mul.length >= 1) {
        type = 'poly='
        //poly=130-031-1-1-0-1-1-0-0-1-1-1-0-0
        schemeNumber = type + this.info.data.map(match => match.choose.join('') || '*').join('-')
      } else {
        type = 'single='
        // single=33133333133101
        schemeNumber = type + this.info.data.map(match => match.choose.join('') || '*').join('')
      }
      return schemeNumber
    },
    handleBlur() {
      if (!this.multiple || this.multiple == 0) {
        this.multiple = 1;
      } else {
        this.multiple = +this.multiple;
      }
    },
    openPopup() {
      this.orderTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    openBottomPopup() {
      if (this.selectCount < 9) {
        return uni.showToast({
          title: '请至少选择9场比赛',
          icon: 'none'
        })
      }
      if (this.selectCount > 9) {
        return uni.showToast({
          title: '只能选择9场比赛',
          icon: 'none'
        })
      }
      // 请求可用优惠券
      uni.showLoading();
      this.updateCoupons({
        money: this.baseCount * this.multiple * 2,
        lotteryIds: 10108
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
    handleBei(bei) {
      this.multiple = bei;
    },
    multipleReduce() {
      if (this.multiple > 1) {
        this.multiple -= 1;
      }
    },
    multipleAdd() {
      this.multiple = +this.multiple + 1;
    },
    chooseChange(match, choose, index) {
      let newChoose = []
      if (match.choose.includes(choose)) {
        newChoose = match.choose.filter(item => item != choose);
      } else {
        if (match.choose.length === 0 && this.selectCount === 9) {
          return uni.showToast({
            title: '最多选择9场比赛',
            icon: 'none'
          })
        }
        newChoose = [...match.choose, choose]
      }
      this.updateToto9ChooseByIndex({
        choose: newChoose,
        index
      })
    }
  },
  mounted() {
    this.updateBalanceInfo();
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-confirm {
  padding-bottom: 400rpx;
  background: #f0f0f0;
}
.u-title {
  padding: 20rpx;
  border-bottom: 1rpx solid #ccc;
}
.u-item {
  display: flex;
  align-items: center;
  padding: 30rpx 20rpx;
  border-bottom: 1rpx solid #ccc;
}
.u-left {
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 10rpx 0;
  width: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: stretch;
}
.u-right {
  flex: 1;
}
.u-battle {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.u-choose-list {
  display: flex;
  justify-content: space-between;
}
.u-choose-item {
  width: 180rpx;
  height: 90rpx;
  border: 1rpx solid #ccc;
  display: flex;
  background-color: #fff;
  .g-center();
}

.z-active-choose {
  background: @red-6;
  color: #fff;
  border-color: @red-6;
}

// 底部
.u-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750rpx;
  height: 280rpx;
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
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #ccc;
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
  flex: 0 0 auto;
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
</style>
