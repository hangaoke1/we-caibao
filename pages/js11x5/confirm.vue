<template>
  <view>
    <view class="u-confirm">
      <view class="u-continue f-30 red-6" @click.stop="goContinue">+继续添加</view>
      <view class="u-issue f-30">第{{ issue }}期</view>
      <view class="u-select" v-for="(choose, index) in chooseList" :key="index">
        <view class="u-delete" @click.stop="handleDelete(index)">
          <text class="f-36 red-6 iconfont">&#xe726;</text>
        </view>
        <view class="u-copy f-30 red-6" @click.stop="handleCopy(choose)">机选一注</view>
        <view class="u-title">
          <view class="f-30">{{ choose.typeName }}</view>
        </view>
        <view class="u-num">
          <view class="u-num-label f-30">号码：</view>
          <view class="u-num-list f-36" v-if="choose.type.indexOf('Direct') > -1">
            <view v-for="(numStr, index) in choose.nums" :key="index">
              <text v-if="index > 0" style="margin: 0 10rpx;">-</text>
              <text class="red-6">{{numStr}}</text>
            </view>
          </view>
          <view class="u-num-list" v-else>
            <view class="u-num-item f-30 white-1" v-for="item in choose.nums" :key="item">{{ item }}</view>
          </view>
        </view>
        <view>
          <text class="f-30">共</text>
          <text class="f-30 red-6" style="margin: 0 6rpx;">{{ choose.baseCount }}</text>
          <text class="f-30">注</text>
          <text class="f-30 red-6" style="margin: 0 6rpx;">{{ choose.baseCount * 2 }}</text>
          <text class="f-30">元</text>
        </view>
      </view>

    </view>
    <view class="u-bottom">
      <view class="u-bei">
        <view class="u-bei-item" v-for="bei in beiList" :key="bei" :class="{ 'z-active': bei == multiple }" @click.stop="handleBei(bei)">
          <text class="f-30" :class="{ 'white-1': bei == multiple }">{{ bei }}倍</text>
        </view>
      </view>
      <view class="u-tou f-row">
        <view class="u-tou-left f-row">
          <view style="margin-right: 10rpx;"><text class="f-30">投</text></view>
          <view class="u-tou-icon" @click.stop="multipleReduce"><text class="f-30">-</text></view>
          <input ref="xInput" class="u-input" :cursor-spacing="30" type="number" v-model="multiple" @blur="handleBlur" />
          <view class="u-tou-icon" @click.stop="multipleAdd"><text class="f-30">+</text></view>
          <view style="margin-left: 10rpx;margin-right: 10rpx;"><text class="f-30">倍</text></view>
          <view class="f-row" style="align-items: center;">
            <text class="f-36">共</text>
            <text class="f-36 red-6">{{ money }}</text>
            <text class="f-36">元</text>
          </view>
        </view>
        <view class="u-add-order" @click.stop="openBottomPopup">
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
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex';
  import _ from 'lodash';
  import lottery from '@/api/lottery/index.js';
  import dayjs from 'dayjs';
  import uniPopup from '@/components/uni-popup/uni-popup.vue';

  function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  export default {
    components: {
      uniPopup
    },
    data() {
      return {
        issue: '',
        issueId: '',
        isContinue: false, // 是否继续选择
        chooseList: [],
        loading: false, // 下单锁
        multiple: 1, // 倍数
        beiList: [10, 20, 50, 100],
        orderTime: '',
        infoMap: {
          onePoly: {
            name: '任选一',
            prize: 13,
            intro: '选1个号码，猜中开奖号码第1个数字'
          },
          twoPoly: {
            name: '任选二',
            prize: 6,
            intro: '选2个号码，猜中开奖号码任意2个数字'
          },
          threePoly: {
            name: '任选三',
            prize: 19,
            intro: '选3个号码，猜中开奖号码任意3个数字'
          },
          fourPoly: {
            name: '任选四',
            prize: 78,
            intro: '选4个号码，猜中开奖号码任意4个数字'
          },
          fivePoly: {
            name: '任选五',
            prize: 540,
            intro: '选5个号码，猜中开奖号码任意5个数字'
          },
          sixPoly: {
            name: '任选六',
            prize: 90,
            intro: '选6个号码，猜中开奖号码任意5个数字'
          },
          sevenPoly: {
            name: '任选七',
            prize: 26,
            intro: '选7个号码，猜中开奖号码任意5个数字'
          },
          eightPoly: {
            name: '任选八',
            prize: 9,
            intro: '选8个号码，猜中开奖号码任意5个数字'
          },
          twoDirect: {
            name: '前二直选',
            prize: 130,
            intro: '选2个号码，猜中开奖号码前2个数字且顺序一致'
          },
          threeDirect: {
            name: '前三直选',
            prize: 1170,
            intro: '选3个号码，猜中开奖号码前3个数字且顺序一致'
          },
          twoGroupPoly: {
            name: '前二组选',
            prize: 65,
            intro: '选2个号码，猜中开奖号码前2个数字'
          },
          threeGroupPoly: {
            name: '前三组选',
            prize: 195,
            intro: '选3个号码，猜中开奖号码前3个数字'
          }
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
      baseCount() {
        const countAll = this.chooseList.reduce((total, item) => {
          return total + Number(item.baseCount)
        }, 0)
        return countAll
      },
      money() {
        return this.baseCount * this.multiple * 2;
      },
    },
    methods: {
      ...mapMutations(['updateChooseCouponId']),
      ...mapActions({
        updateBalanceInfo: 'updateBalanceInfo',
        updateCoupons: 'updateCoupons'
      }),
      // 智能机选
      aiChoose(type) {
        const list = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
        switch (type) {
          case 'onePoly':
            return getRandomArrayElements(list, 1)
            break;
          case 'twoPoly':
            return getRandomArrayElements(list, 2)
            break;
          case 'threePoly':
            return getRandomArrayElements(list, 3)
            break;
          case 'fourPoly':
            return getRandomArrayElements(list, 4)
            break;
          case 'fivePoly':
            return getRandomArrayElements(list, 5)
            break;
          case 'sixPoly':
            return getRandomArrayElements(list, 6)
            break;
          case 'sevenPoly':
            return getRandomArrayElements(list, 7)
            break;
          case 'eightPoly':
            return getRandomArrayElements(list, 8)
            break;
          case 'twoDirect':
            const twoBall = getRandomArrayElements(list, 2)
            return [
              [twoBall[0]],
              [twoBall[1]]
            ]
            break;
          case 'threeDirect':
            const threeBall = getRandomArrayElements(list, 3)
            return [
              [threeBall[0]],
              [threeBall[1]],
              [threeBall[2]]
            ]
            break;
          case 'twoGroupPoly':
            return getRandomArrayElements(list, 2)
            break;
          case 'threeGroupPoly':
            return getRandomArrayElements(list, 3)
            break;
          default:
            break;
        }
      },
      genSelect(type, value) {
        if (['onePoly', 'twoPoly', 'threePoly', 'fourPoly', 'fivePoly', 'sixPoly', 'sevenPoly', 'eightPoly'].includes(
            type)) {
          return value.join(' ')
        }
        if (type === 'twoDirect') {
          return [...value[0], ...value[1]].join('-')
        }
        if (type === 'threeDirect') {
          return [...value[0], ...value[1], ...value[2]].join('-')
        }
        if (type === 'twoGroupPoly') {
          return value.join(' ')
        }
        if (type === 'threeGroupPoly') {
          return value.join(' ')
        }
      },
      // 快速机选
      handleCopy(choose) {
        const numList = this.aiChoose(choose.type);
        const value = this.genSelect(choose.type, numList)
        const newChoose = _.cloneDeep(choose);
        newChoose.value = value;
        newChoose.baseCount = 1;

        const chooseList = uni.getStorageSync('js11x5');
        uni.setStorageSync('js11x5', [newChoose, ...chooseList])
        this.initChooseList();
      },
      // 删除选项
      handleDelete(index) {
        this.chooseList.splice(index, 1);
        uni.setStorageSync('js11x5', this.chooseList);
      },
      goContinue() {
        this.isContinue = true;
        uni.navigateBack();
      },
      // 处理数组
      genList(list) {
        return list.map(item => {
          const typeName = this.getName(item.type);
          const nums = this.getNums(item.type, item.value);
          return { ...item,
            ...{
              typeName,
              nums
            }
          }
        })
      },
      // 处理名称
      getName(type) {
        if (type) {
          return this.infoMap[type].name;
        } else {
          return '';
        }
      },
      // 处理号码
      getNums(type, value) {
        if (!value) {
          return [];
        }
        if (['twoDirect', 'threeDirect'].includes(type)) {
          return value.split('-');
        } else {
          return value.split(' ');
        }
      },
      goChooseCoupon() {
        if (!this.coupons.length) return;
        uni.navigateTo({
          url: '/pages/user/couponChoose'
        });
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
      handleBei(bei) {
        this.multiple = bei;
      },
      openBottomPopup() {
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
      multipleReduce() {
        if (this.multiple > 1) {
          this.multiple -= 1;
        }
      },
      multipleAdd() {
        this.multiple = +this.multiple + 1;
      },
      // 提交订单
      async handleSubmit() {
        try {
          if (this.loading) {
            return
          }
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
            buyMoney: this.money,
            cId: this.chooseCouponId,
            lotteryId: 0
          };
          console.log('jiangsu下单参数', params);
          const res = await lottery.buyLottery(params);
          console.log('jiangsu下单结果', res);

          // 关闭loading
          uni.hideLoading();

          // 解除锁
          this.loading = false

          // 跳转
          const single = 0;
          uni.navigateTo({
            url: `/pages/order/success?schemeId=${res.schemeId}&single=${single}&lotteryId=10108`
          });
        } catch (err) {
          // uni.hideLoading();
          this.loading = false
          console.log(err);
        }
      },
      genBuyPreParams() {
        const schemeNumber = this.chooseList.map(choose => {
          return choose.type + '=' + choose.value
        }).join(';')
        const params = {
          addition: 0,
          additional: 0,
          burstIntoStop: 0,
          buyType: 1,
          cId: this.chooseCouponId,
          issueCount: 1,
          issueId: this.issueId,
          lotteryId: 10108,
          multiple: this.multiple,
          prizeStop: 0,
          buyAmount: this.money,
          schemeAmount: this.money, // 金额
          schemeNumber: schemeNumber, // twoPoly=01 02
          schemeNumberUnit: this.baseCount
        };

        return params;
      },
      initChooseList() {
        const chooseList = uni.getStorageSync('js11x5') || [];
        this.chooseList = this.genList(chooseList);
      }
    },
    onLoad(options) {
      this.issue = options.issue;
      this.issueId = options.issueId;
      this.initChooseList();
    },
    onUnload() {
      if (!this.isContinue) {
        uni.setStorageSync('js11x5', []);
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
    padding-top: 30rpx;
    padding-bottom: 200rpx;
    min-height: 100vh;
    background: #f0f0f0;
  }

  .u-issue {
    padding: 20rpx 40rpx;
    background: #fff;
    border-bottom: 1rpx solid #eee;
  }

  .u-continue {
    width: 250rpx;
    height: 60rpx;
    margin: 0 auto;
    margin-bottom: 30rpx;
    border: 4rpx solid @red-6;
    display: flex;
    background: #fff;
    .g-center();
  }

  .u-select {
    position: relative;
    padding: 30rpx 40rpx;
    background: #fff;
    border-bottom: 1rpx solid #eee;
  }

  .u-title {
    display: flex;
    align-items: center;
  }

  .u-num {
    margin: 30rpx 0;
    display: flex;
    align-items: flex-start;
  }

  .u-num-label {
    flex: 0 0 auto;
  }

  .u-num-list {
    margin-left: 10rpx;
    display: flex;
    flex-wrap: wrap;
  }

  .u-num-item {
    width: 60rpx;
    height: 60rpx;
    margin-right: 20rpx;
    margin-bottom: 10rpx;
    border-radius: 60rpx;
    background: @red-6;
    display: flex;
    .g-center();
  }

  // 底部
  .u-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750rpx;
    height: 200rpx;
    border-top: 1rpx solid #ccc;
    background-color: #fff;
    z-index: 1;
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

  .u-delete {
    position: absolute;
    right: 20rpx;
    top: 24rpx;
    width: 50rpx;
    height: 50rpx;
    display: flex;
    .g-center();
  }

  .u-copy {
    position: absolute;
    right: 20rpx;
    bottom: 24rpx;
    display: flex;
    .g-center();
  }
</style>
