<template>
  <view class="u-confirm bg-hui pt-3">
    <view class="flex align-center justify-center mb-3">
      <view class="u-do" @click="doContinue">+ 继续添加</view>
      <view class="u-do" @click="doAiChoose">+ 机选一注</view>
    </view>
    <select-item
      v-for="(item, index) in list"
      :key="index"
      :info="item"
      @delete="handleDelete(index)"
    ></select-item>

    <view class="u-bottom bg-bai">
      <view class="border-bottom-ccc mb-2 p-2"><g-bei v-model="multiple"></g-bei></view>
      <view class="flex justify-between align-center mt-2 px-2">
        <view class="u-tou-left flex align-center">
          <view class="mr-1 font-s-3">投</view>
          <view class="u-tou-icon" @click.stop="multipleReduce">-</view>
          <view class="u-input" @click="show = true">{{ multiple }}</view>
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
    <u-keyboard
      :dot-enabled="false"
      :safe-area-inset-bottom="true"
      mode="number"
      :tips="multiple + ''"
      @change="valChange"
      @backspace="backspace"
      v-model="show"
    ></u-keyboard>
    <confirm-popup
      ref="popup"
      :money="money"
      :moneyRemain="moneyRemain"
      :orderTime="orderTime"
      :balanceInfo="balanceInfo"
      @submit="handleSubmit"
    ></confirm-popup>
  </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import { factorial } from '@/lib/common.js';
import lotteryApi from '@/api/lottery/index.js';
import GBei from '@/components/GBei.vue';
import ConfirmPopup from './components/ConfirmPopup.vue';
import SelectItem from './components/SelectItem.vue';

export default {
  components: {
    GBei,
    ConfirmPopup,
    SelectItem
  },
  data() {
    return {
      show: false,
      orderTime: '',
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
        count += this.getCount(l.type, l.nums);
      });
      return count * this.multiple;
    },
    money() {
      return this.count * 2;
    }
  },
  watch: {
    show(val) {
      if (!val && this.multiple === '') {
        this.multiple = 1;
      }
    }
  },
  created() {
    this.list = uni.getStorageSync('pailie3_selected');
    this.issueId = uni.getStorageSync('pailie3_issueId');
    this.issue = uni.getStorageSync('pailie3_issue');
    this.updateBalanceInfo();
  },
  methods: {
    ...mapActions({
      updateBalanceInfo: 'updateBalanceInfo'
    }),
    multipleReduce() {
      if (this.multiple > 1) {
        this.multiple -= 1;
      }
    },
    multipleAdd() {
      this.multiple = Number(this.multiple) + 1;
    },
    // 键盘时间
    valChange(val) {
      this.multiple = this.multiple + '' + val;
    },
    // 退格键被点击
    backspace() {
      const multiple = this.multiple + '';
      if (multiple.length) {
        this.multiple = multiple.substr(0, multiple.length - 1);
      }
    },
    getCount(type, list) {
      if (type === 0) {
        return list[0].length * list[1].length * list[2].length;
      }
      if (type === 1) {
        const len = list.length;
        if (len >= 2) {
          return len * (len - 1);
        } else {
          return 0;
        }
      }
      if (type === 2) {
        const len = list.length;
        if (len === 3) {
          return 1;
        }
        if (len > 3) {
          return factorial(len) / factorial(3) / factorial(len - 3);
        } else {
          return 0;
        }
      }
      return 0;
    },
    // 提交订单
    async handleSubmit() {
      try {
        if (this.count === 0) {
          return uni.showToast({
            title: '至少选择1注',
            icon: 'none'
          });
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
        console.log('排列3-预下单参数', preParams);
        const preRes = await lotteryApi.buyLotteryPre(preParams);
        console.log('排列3-预下单结果', preRes);
        // 下单
        const params = {
          app_schemeId: preRes.schemeId,
          buyMoney: this.money,
          cId: '',
          lotteryId: 10024
        };
        console.log('排列3-下单参数', params);
        const res = await lotteryApi.buyLottery(params);
        console.log('排列3-下单结果', res);
        uni.hideLoading();
        uni.showToast({
          title: '下单成功'
        });
        this.loading = false;
        uni.navigateTo({
          url: `/pages/order/success?schemeId=${res.schemeId}&lotteryId=10024`
        });
      } catch (e) {
        console.log('排列3下单异常', e);
        this.loading = false;
      }
    },
    // 生成预下单参数
    genBuyPreParams() {
      let numList = []
      this.list.forEach(v => {
        if (v.type === 0) {
          const str = v.nums.map(v => v.join('')).join('-')
          numList.push(`direct=${str}`)
        } else if (v.type === 1) {
          const str = v.nums.join('')
          numList.push(`group3Poly=${str}`)
        } else if (v.type === 2){
          const str = v.nums.join('')
          numList.push(`group6Poly=${str}`)
        }
      })
      const params = {
        addition: 0,
        additional: 0,
        burstIntoStop: 0,
        buyType: 1,
        cId: '',
        issueCount: 1,
        issueId: this.issueId,
        lotteryId: 10024,
        multiple: this.multiple,
        prizeStop: 0,
        buyAmount: this.money,
        schemeAmount: this.money,
        schemeNumber: numList.join(';'),
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
        });
      }
      this.orderTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    handleDelete(index) {
      this.list.splice(index, 1);
      uni.setStorageSync('pailie3_selected', this.list);
    },
    doAiChoose() {
      // TODO: 机选直选
      const arr1 =  [_.random(0, 9)]
      const arr2 =  [_.random(0, 9)]
      const arr3 =  [_.random(0, 9)]
      const item = [arr1, arr2, arr3]
      this.list.push({
        type: 0,
        nums: item
      })
      uni.setStorageSync('pailie3_selected', this.list);
    },
    doContinue() {
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
  padding: 0 10rpx;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rpx;
  height: 60rpx;
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
}
</style>
