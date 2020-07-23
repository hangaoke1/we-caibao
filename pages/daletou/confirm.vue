<template>
  <view class="u-confirm bg-hui pt-3">
    <view class="flex align-center justify-center mb-3">
      <view class="u-do" @click="doContinue">+ 继续添加</view>
      <view class="u-do" @click="doAiChoose">+ 机选一注</view>
    </view>
    <select-item
      v-for="(item, index) in list"
      :key="index"
      :selectFont="item.selectFont"
      :selectBack="item.selectBack"
      @delete="handleDelete(index)"
      :additional="checked"
    ></select-item>

    <view class="u-bottom bg-bai">
      <view class="p-2 border-bottom-ccc flex align-center font-s-3">
        <view @click="checked = !checked">
          <checkbox :checked="checked" />
          是否追加投注
        </view>
      </view>
      <view class="border-bottom-ccc mb-2 p-2"><g-bei v-model="multiple"></g-bei></view>
      <view class="flex justify-between align-center mt-2 px-2">
        <view class="u-tou-left flex align-center">
          <view class="mr-1 font-s-3">投</view>
          <view class="u-tou-icon" @click.stop="multipleReduce">-</view>
          <input ref="xInput" class="u-input" :cursor-spacing="30" type="number" v-model="multiple" @blur="handleBlur" />
          <view class="u-tou-icon" @click.stop="multipleAdd">+</view>
          <view class="mx-1 font-s-3">倍</view>
          <view class="flex align-center font-s-3">
            <text>共</text>
            <text class="text-red">{{ count }}</text>
            <text class="mr-1">注</text>
            <text class="text-red">{{ money }}</text>
            <text>元</text>
          </view>
        </view>
        <view class="u-action bg-red text-bai font-s-3 flex-0" @click.stop="openPopup">下单</view>
      </view>
    </view>

    <confirm-popup ref="popup" :money="money" :moneyRemain="moneyRemain" :orderTime="orderTime" :balanceInfo="balanceInfo" @submit="handleSubmit"></confirm-popup>
  </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import { getFlagArrs } from '@/lib/common.js';
import { genFrontNums, genBackNums, getRandomArrayElements } from '@/lib/daletou.js';
import lotteryApi from '@/api/lottery/index.js';
import GBei from '@/components/GBei.vue';
import SelectItem from './SelectItem.vue';
import ConfirmPopup from './ConfirmPopup.vue';
export default {
  components: {
    SelectItem,
    GBei,
    ConfirmPopup
  },
  data() {
    return {
      orderTime: '',
      checked: false,
      fontNums: genFrontNums(),
      backNums: genBackNums(),
      issue: '',
      issueId: '',
      list: [],
      multiple: 1
    };
  },
  computed: {
    ...mapState({
      balanceInfo: state => state.balanceInfo
    }),
    moneyRemain() {
      const remain = this.balanceInfo.balance - this.money;
      if (remain > 0) {
        return remain.toFixed(2);
      } else {
        return '余额不足';
      }
    },
    count() {
      let count = 0;
      this.list.forEach(l => {
        const fLen = l.selectFont.length;
        const bLen = l.selectBack.length;
        if (fLen >= 5 && bLen >= 2) {
          const f = getFlagArrs(fLen, 5).length;
          const b = getFlagArrs(bLen, 2).length;
          count += b * f;
        }
      });
      return count * this.multiple;
    },
    money() {
      if (this.checked) {
        return this.count * 3;
      } else {
        return this.count * 2;
      }
    }
  },
  created() {
    this.list = uni.getStorageSync('daletou_selected');
    this.issueId = uni.getStorageSync('daletou__issueId');
    this.issue = uni.getStorageSync('daletou__issue');
    this.checked = !!uni.getStorageSync('daletou__additional');
    this.updateBalanceInfo();
  },
  methods: {
    ...mapActions({
      updateBalanceInfo: 'updateBalanceInfo'
    }),
    // 提交订单
    async handleSubmit() {
      try {
        if (this.count === 0) {
          return uni.showToast({
            title: '至少选择1注',
            icon: 'none'
          })
        }
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.closePopup();
        uni.showLoading({
          title: '订单生成中'
        });
        // 预下单
        const preParams = this.genBuyPreParams();
        console.log('大乐透-预下单参数', preParams);
        const preRes = await lotteryApi.buyLotteryPre(preParams);
        console.log('大乐透-预下单结果', preRes);
        // 下单
        const params = {
          app_schemeId: preRes.schemeId,
          buyMoney: this.money,
          cId: '',
          lotteryId: 10026
        };
        console.log('大乐透-下单参数', params);
        const res = await lotteryApi.buyLottery(params);
        console.log('大乐透-下单结果', res);
        uni.hideLoading();
        uni.showToast({
          title: '下单成功'
        })
        this.loading = false;
        uni.navigateTo({
          url: `/pages/order/success?schemeId=${res.schemeId}&lotteryId=10026`
        });
      } catch (e) {
        console.log('大乐透下单异常', e);
        // uni.hideLoading();
        this.loading = false;
      }
    },
    // 生成预下单参数
    genBuyPreParams() {
      const lottoSingle = [];
      const lottoPoly = [];
      const skList = this.list.forEach(item => {
        const fLen = item.selectFont.length;
        const bLen = item.selectBack.length;
        if (fLen === 5 && bLen === 2) {
          const numStr = [...item.selectFont, ...item.selectBack].join(' ');
           lottoSingle.push(numStr);
        } else {
          const numStr = item.selectFont.join(' ') + '#' + item.selectBack.join(' ');
          lottoPoly.push(numStr);
        }
      })
      let schemeNumber = '';
      if (lottoSingle.length) {
        schemeNumber += 'lottoSingle=' + lottoSingle.join(',');
      }
      if (lottoPoly.length) {
        if (schemeNumber) {
          schemeNumber += ';lottoPoly=' + lottoPoly.join(',');
        } else {
          schemeNumber += 'lottoPoly=' + lottoPoly.join(',');
        }
      }
      const params = {
        addition: 0,
        additional: this.checked ? 1 : 0,
        burstIntoStop: 0,
        buyType: 1,
        cId: '',
        issueCount: 1,
        issueId: this.issueId,
        lotteryId: 10026,
        multiple: this.multiple,
        prizeStop: 0,
        buyAmount: this.money,
        schemeAmount: this.money,
        schemeNumber: schemeNumber,
        schemeNumberUnit: this.count
      };
      return params;
    },
    // 打开确认订单弹窗
    openPopup() {
      if (this.count === 0) {
        return uni.showToast({
          title: '至少选择1注',
          icon: 'none'
        })
      }
      this.orderTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    multipleReduce() {
      if (this.multiple > 1) {
        this.multiple -= 1;
      }
    },
    multipleAdd() {
      this.multiple += 1;
    },
    handleBlur() {},
    handleDelete(index) {
      this.list.splice(index, 1);
      uni.setStorageSync('daletou_selected', this.list);
    },
    doAiChoose() {
      let selectFont = getRandomArrayElements(this.fontNums, 5);
      let selectBack = getRandomArrayElements(this.backNums, 2);
      selectFont = selectFont.sort((a, b) => Number(a) - Number(b));
      selectBack = selectBack.sort((a, b) => Number(a) - Number(b));
      this.list.unshift({
        selectFont,
        selectBack
      });
      uni.setStorageSync('daletou_selected', this.list);
    },
    doContinue() {
      uni.setStorageSync('daletou__additional', this.checked ? 'yes' : '');
      uni.navigateBack();
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-confirm {
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 280rpx;
}
.u-do {
  border: 1rpx solid #f5222d;
  color: #f5222d;
  font-size: 30rpx;
  padding: 15rpx 20rpx;
  margin-right: 20rpx;
  background-color: #fff;
}
.u-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750rpx;
  border-top: 1rpx solid #eee;
}
.u-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160rpx;
  height: 80rpx;
}
.u-tou-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
}
.u-input {
  box-sizing: border-box;
  text-align: center;
  padding: 0 10rpx;
  font-size: 28rpx;
  width: 80rpx;
  height: 60rpx;
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
}
</style>
