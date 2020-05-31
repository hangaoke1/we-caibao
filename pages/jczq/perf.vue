<template>
  <!-- 奖金优化 -->
  <view class="u-perf">
    <view class="u-top">
      <view class="u-money">
        <view class="f-30" style="flex: 1;text-align: right;">计划购买</view>
        <view class="u-count" style="border: none;flex: 0 0 auto;;">
          <view class="u-icon f-30" @click.stop="moneyReduce">-</view>
          <input class="u-count-input f-30" type="number" :value="money" @change="handleInputChange" @blur="handleMoneyBlur"/>
          <view class="u-icon f-30" @click.stop="moneyAdd">+</view>
        </view>
        <view class="f-30" style="flex: 1;text-align: left;">元</view>
      </view>
      <view class="u-tab">
        <view
          class="u-tab-item f-30"
          :class="{ 'z-active': index === type }"
          v-for="(item, index) in ['平均优化', '博热优化', '博冷优化']"
          :key="item"
          @click.stop="handleTypeChange(index)"
        >
          {{ item }}
        </view>
      </view>

      <view class="u-title">
        <view class="u-title-item f-30">单注组合</view>
        <view class="u-title-item f-30">注数</view>
        <view class="u-title-item f-30">预测奖金</view>
      </view>
    </view>

   <view class="u-compose" v-for="group in groups" :key="group.id">
      <view class="u-content">
        <view class="u-group" @click.stop="showDetail(group)">
          <view class="f-22" v-for="(match, index) in group.compose" :key="index" v-if="index < 2">
            {{ match.hostName.slice(0, 5) }}|{{ key2name[match.chooseItem] }}|{{
              match[match.chooseItem].toFixed(2)
            }}
          </view>
          <view class="f-22">
            <text v-if="way == 1">单关</text>
            <text v-else>{{way}}串1</text>
            <text class="iconfont f-22 grey-6" style="margin-left: 10rpx;">&#xe637;</text>
          </view>
        </view>
        <view class="u-count">
          <view class="u-icon f-30" @click.stop="countReduce(group)">-</view>
          <input class="u-count-input f-30" type="number" v-model="group.count" @blur="handleCountBlur(group)" />
          <view class="u-icon f-30" @click.stop="countAdd(group)">+</view>
        </view>
        <view class="u-prize red-6 f-24">{{getPrize(group)}}元</view>
      </view>
      <view class="u-detail" v-show="group.showDetail">
        <view class="u-tr">
          <view class="u-td">投注场次</view>
          <view class="u-td">主队</view>
          <view class="u-td">客队</view>
          <view class="u-td">投注内容</view>
        </view>
        <view class="u-tr" v-for="(match, index) in group.compose" :key="index">
          <view class="u-td">{{match.dayOfWeekStr}}{{match.teamId}}</view>
          <view class="u-td">{{match.hostName}}</view>
          <view class="u-td">{{match.guestName}}</view>
          <view class="u-td">
            <text>{{key2name[match.chooseItem]}}</text>
            <text v-if="['rqSheng', 'rqPing', '让球负'].includes(match.chooseItem)">({{match.rate}})</text>
            <text style="margin-left: 10rpx;">{{match[match.chooseItem].toFixed(2)}}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="u-bottom">
      <view class="u-bottom-left">
        <view class="f-28" style="margin-bottom: 10rpx;">
          <text class="red-6">{{money/2}}</text>
          <text style="margin-right: 10rpx;">注</text>
          <text class="red-6">1</text>
          <text style="margin-right: 10rpx;">倍</text>
          <text>共</text>
          <text class="red-6">{{money}}</text>
          <text>元</text>
        </view>
       <view class="f-24">
          <text>预计奖金</text>
          <text class="red-6">{{minMaxPrize.min}}</text>
          <text>~</text>
          <text class="red-6">{{minMaxPrize.max}}</text>
          <text>元</text>
        </view>
      </view>
      <view class="u-bottom-right" @click.stop="goNext">确定</view>
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
import jczqPerf from '@/lib/jczqPerf.js';
import { key2name, key2code } from '@/lib/jczq.js';
import lottery from '@/api/lottery/index.js';
import jczqPerfJJ from '@/lib/jczqPerfJJ.js';

// import mock from '@/mock/perf.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
  components: {
    uniPopup
  },
  data() {
    return {
      initMoney: '',
      way: '',
      money: '',
      key2name,
      type: 0, // -1客户自定义 0平均优化 1博热优化 2博冷优化
      groups: [],
      date: '',
    };
  },
  computed: {
    ...mapState({
      info: state => state.jczq,
      balanceInfo: state => state.balanceInfo,
      coupons: state => state.coupons,
      chooseCouponId: state => state.chooseCouponId
    }),
    minMaxPrize () {
      if (this.groups.length) {
        return jczqPerfJJ(this.groups)
      }
      return {
        min: 0,
        max: 0
      }
    },
    moneyRemain() {
      const remain = this.balanceInfo.balance - this.money + this.couponValue;
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
    selectRaces() {
      let matches = [];
      this.info &&
        this.info.data.forEach(item => {
          item.matches.forEach(match => {
            if (match.choose.length) {
              matches.push(match);
            }
          });
        });
      return matches;
    },
    allCompose () {
      return this.groups.length || 0;
    }
  },
  watch: {
    type () {
      this.perf()
    },
    money () {
      this.perf()
    }
  },
  methods: {
    ...mapMutations(['updateChooseCouponId']),
    ...mapActions({
      updateBalanceInfo: 'updateBalanceInfo',
      updateCoupons: 'updateCoupons'
    }),
    handleTypeChange (index) {
      this.type = index
    },
    syncMoney () {
      this.money = this.groups.reduce((total, group) => { return total + Number(group.count) }, 0) * 2
    },
    handleInputChange (event) {
      this.money = event.detail.value
    },
    handleMoneyBlur () {
      if (this.type === -1) {
        this.$nextTick(() => {
          this.type = 0;
        })
      }
      if (this.money < this.allCompose * 2) {
        this.money = this.allCompose * 2
      }
    },
    handleCountBlur (group) {
      this.type = -1;
      if (group.count < 1) {
        group.count = 1
      }
      this.syncMoney()
    },
    // 奖金优化算法
    perf () {
      if (this.type === -1) { return }
      let money = this.money; // 成本
      let count = this.money / 2; // 总注数
      let extendCount = count - this.groups.length; // 附加注数
      // 组合注数重置
      this.groups.forEach(group => {
        group.count = 1;
      })
      // 平均
      if (this.type === 0) {
        // 每次取最小的
        while (extendCount > 0) {
          const min = _.minBy(this.groups, group => group.count * group.rate)
          min.count += 1;
          extendCount -= 1;
        }
      }
      // 博热
      if (this.type === 1) {
        while (extendCount > 0) {
          const min = _.minBy(this.groups, group => group.count * group.rate)
          if (min.count * min.rate * 2 < money) {
            min.count += 1; // 保本
          } else {
            // 全部给rate最小的
            const minRate = _.minBy(this.groups, group => group.rate)
            minRate.count += 1
          }
          extendCount -= 1;
        }
      }
      // 博冷
      if (this.type === 2) {
        while (extendCount > 0) {
          const min = _.minBy(this.groups, group => group.count * group.rate)
          if (min.count * min.rate * 2 < money) {
            min.count += 1; // 保本
          } else {
            // 全部给rate最大的
            const maxRate = _.maxBy(this.groups, group => group.rate)
            maxRate.count += 1
          }
          extendCount -= 1;
        }
      }
    },
    moneyAdd () {
      this.money = +this.money + 2
      this.$nextTick(() => {
        if (this.type === -1) { this.type = 0}
      })
    },
    moneyReduce() {
      if (this.money > this.allCompose * 2) {
        this.money -= 2;
      }
      this.$nextTick(() => {
        if (this.type === -1) { this.type = 0}
      })
    },
    countAdd (group) {
      this.type = -1
      group.count =  +group.count + 1;
      this.syncMoney()
    },
    countReduce(group) {
      this.type = -1
      if (group.count > 1) {
        group.count -= 1;
      }
      this.syncMoney()
    },
    showDetail(group) {
      group.showDetail = !group.showDetail;
    },
    getPrize (group) {
      return (group.count * group.rate * 2).toFixed(2)
    },
    openPopup() {
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    goChooseCoupon() {
      if (!this.coupons.length) return;
      uni.navigateTo({
        url: '/pages/user/couponChoose'
      });
    },
    // 刷新当前时间
    genDay() {
      this.date = dayjs().format('YYYY-MM-DD HH:mm:ss');
    },
    goNext() {
      uni.showLoading({
        title: ''
      });
      this.updateCoupons({
        money: this.money,
        lotteryIds: 10059
      })
        .then(() => {
          uni.hideLoading();
          this.updateChooseCouponId('');
          this.genDay();
          this.openPopup();
        })
        .catch(err => {
          console.error(err);
          uni.hideLoading();
        });
    },
    // 提交订单
    async doSubmit () {
      try{
        // 关闭弹窗
        this.closePopup();
        
        uni.showLoading({
          title: '订单生成中'
        });
        
        // 预约下单
        const preParams = this.genBuyPreParams();
        console.log('预下单参数', preParams);
        
        uni.hideLoading()
        const preRes = await lottery.buyLotteryPre(preParams);
        console.log('预下单结果', preRes);
        
        // 下单
        const params = {
          app_schemeId: preRes.schemeId,
          betType: 424,
          buyMoney: this.money,
          cId: this.chooseCouponId,
          forecastBonus: this.minMaxPrize.min + '~' + this.minMaxPrize.max,
          lotteryId: 10059
        };
        console.log('下单参数', params);
        const res = await lottery.buyLottery(params);
        console.log('下单结果', res);
        
        // 关闭loading
        uni.hideLoading();
        
        // 跳转到下单页面
        const single = this.money;
        uni.navigateTo({
          url: `/pages/order/success?schemeId=${res.schemeId}&single=${single}&lotteryId=10059`
        });
        
      }catch(e){
        uni.hideLoading()
        console.log(e)
        //TODO handle the exception
      }
    },
    genBuyPreParams() {
      const params = {
        jczqJjyh: true,
        betType: 424,
        buyAmount: this.money, // 订单金额
        buyType: 1, // 0表示合买，1表示代购
        cId: this.chooseCouponId, // 优惠券
        cutRepeat: false, // 是否去掉重复
        issueCount: 1,
        issueId: this.info.data[0].issueId,
        lotteryId: 10059, // 足球
        multiple: 1, // 倍数
        pass:  this.way == 1 ? '单关':this.getWays([this.way]), // 过关方式
        schemeAmount: this.money, // 订单金额
        schemeNumber: this.genContent(), // 过关内容：
        ticketContent: this.genTicketContent(), // 投注内容
        schemeNumberUnit: this.money / 2, // 注数
        sels: this.info.sels // 奖期
      };
      return params;
    },
    // 获取所有过关名称
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
    genTicketContent () {
      // 20191015004_3$20191015005_1$20191015006_1$20191015007_1#2#4串1#HH/
      // 20191015004_3$20191015005_1$20191015006_3$20191015007_403#2#4串1#HH/
      // 20191015004_3$20191015005_1$20191015006_3$20191015007_1#1#4串1#HH
      let str = this.groups.map(group => {
        let raceStr = group.compose.map(match => {
          return match.issue + match.teamId + '_' + key2code[match.chooseItem]
        }).join('$');
        raceStr = raceStr + '#' + group.count + '#' + this.way + '串1' + '#HH'
        return raceStr
      }).join('/')
      return str;
    },
    genContent() {
      // 20190930001`周一 001`赫尔辛堡`卡尔马`20190930001_0`false`3$
      // 20190930002`周一 002`哈马比`厄勒布鲁`20190930002_0`false`1$
      // 20190930003`周一 003`维京`姆延达伦`20190930003_0`false`210$
      // 20190930004`周一 004`乌德勒支青年队`海尔蒙特`20190930004_0`false`100$
      // 20190930005`周一 005`汉诺威96`纽伦堡`20190930005_0`false`333
      const arr = [];
      let str = 'content=';
      let raceList = this.info.data.forEach(race => {
        race.matches.forEach(match => {
          if (match.choose.length) {
            const val =
              match.matchCode +
              '`' +
              race.dayOfWeekStr +
              ' ' +
              match.teamId +
              '`' +
              match.hostName +
              '`' +
              match.guestName +
              '`' +
              match.matchCode +
              '_0' +
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
  },
  onLoad(options) {
    this.way = options.way;
    this.initMoney = options.money;
    // console.log('options.money', options.money)
  },
  mounted() {
    const groups = jczqPerf(_.cloneDeep(this.selectRaces), +this.way);
    groups.forEach(group => {
      group.showDetail = false;
    });
    this.groups = groups;
    this.money = this.initMoney;
    this.perf();
    this.updateBalanceInfo();
  },
  created() {}
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-perf {
  min-height: 100vh;
  background: #f0f0f0;
  padding-bottom: 300rpx;
}
.u-top {
  position: sticky;
  top: 0;
  z-index: 100;
}
.u-money {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.u-tab {
  display: flex;
  background: #fff;
  padding: 20rpx;
}
.u-tab-item {
  box-sizing: border-box;
  width: 33.33%;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  border: 1rpx solid @red-6;
  &:nth-last-of-type(1) {
    border-left: none;
  }
  &:nth-last-of-type(2) {
    border-left: none;
  }
}
.z-active {
  background-color: @red-6;
  color: #fff;
}

.u-title {
  display: flex;
  background-color: #f0f0f0;
}
.u-title-item {
  flex: 1;
  text-align: center;
  line-height: 50rpx;
}

.u-compose {
  border-bottom: 1rpx solid #ccc;
}
.u-content {
  display: flex;
  background: #fff;
}

.u-group,
.u-count,
.u-prize {
  padding: 10rpx 0;
  box-sizing: border-box;
  width: 250rpx;
  flex: 0 0 auto;
}
.u-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1rpx solid #ccc;
}
.u-count {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1rpx solid #ccc;
}
.u-icon {
  box-sizing: border-box;
  width: 74rpx;
  height:70rpx;
  border: 1rpx solid #ccc;
  display: flex;
  .g-center();
}
.u-count-input {
  width: 80rpx;
  box-sizing: border-box;
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
  height: 70rpx;
  text-align: center;
}
.u-prize {
  display: flex;
  .g-center();
}
.u-detail {
  box-sizing: border-box;
  width: 750rpx;
  border-top: 1rpx solid #fff;
  border-left: 1rpx solid #fff;
}
.u-tr {
  display: flex;
}
.u-td {
  flex: 1;
  padding: 20rpx;
  border-right: 1rpx solid #fff;
  border-bottom: 1rpx solid #fff;
  background: #f0f0f0;
  font-size: 24rpx;
  display: flex;
  .g-center();
}
.u-bottom {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 750rpx;
  padding: 30rpx 20rpx;
  z-index: 100;
  background: #fff;
  border-top: 1rpx solid #ccc;
}
.u-bottom-left{
  text-align: center;
  flex: 1;
}
.u-bottom-right {
  flex: 0 0 auto;
  width: 200rpx;
  height: 80rpx;
  font-size: 30rpx;
  color: #fff;
  background: @red-6;
  border-radius: 5rpx;
  display: flex;
  .g-center();
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
