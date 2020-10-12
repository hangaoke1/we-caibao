<template>
  <view class="u-daletou">
    <view class="text-center font-s-3 py-2" v-if="info.issue">
      <text class="mr-2">第{{ info.issue }}期</text>
      <text class="text-gray">截止时间{{info.sellEndTime}}</text>
    </view> 
    <view class="text-center font-s-3 py-2" v-else>当前没有销售奖期</view>
    <view class="bg-hui" v-if="info.issue">
      <view class="flex align-center" @click="show = !show">
        <open-item :issue="info.upIssue" :drawNumber="info.upDrawNumber"></open-item>
        <text class="iconfont font-s-20 text-gray" v-show="!show">&#xe637;</text>
        <text class="iconfont font-s-20 text-gray" v-show="show">&#xe638;</text>
      </view>
      <view v-show="show" v-for="item in oldList" :key="item.issue"><open-item :issue="item.issue" :drawNumber="item.drawNumber"></open-item></view>
    </view>

    <view class="p-2">
      <!-- 前区 front -->
      <view class="font-s-3 mb-2">前区（至少选择5个）</view>
      <view class="flex flex-wrap align-center">
        <view class="u-frontnum mr-2 mb-2" v-for="item in fontNums" :key="item" :class="{ 'u-font-active': selectFont.includes(item) }" @click="fontAdd(item)">{{ item }}</view>
      </view>
      <!-- 后区 back -->
      <view class="font-s-3 mb-2 mt-3">后区（至少选择2个）</view>
      <view class="flex flex-wrap align-center">
        <view class="u-backnum mr-2 mb-2" v-for="item in backNums" :key="item" :class="{ 'u-back-active': selectBack.includes(item) }" @click="backAdd(item)">{{ item }}</view>
      </view>
    </view>
    
    <view class="u-bottom">
      <view class="u-action flex-0 text-center text-red font-s-3" @click.stop="emptyAll">清空</view>
      <view class="flex-1 text-center">
        <text class="font-s-3 text-gray" v-if="!count">至少选择1注</text>
        <template v-else>
          <text class="font-s-36 text-red">{{ count }}</text>
          <text class="font-s-36 mr-1">注</text>
          <text class="font-s-36 text-red">{{ count * 2 }}</text>
          <text class="font-s-36">元</text>
        </template>
      </view>
      <view class="u-float" @click.stop="aiChoose">机选</view>
      <view class="u-action flex-0 text-center bg-red text-bai font-s-3" @click.stop="handleConfirm">确定</view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
import { openUrl } from '@/util/index.js';
import lottery from '@/api/lottery/index.js';
import OpenItem from './OpenItem.vue';
import { getFlagArrs } from '@/lib/common.js';
import { genFrontNums, genBackNums, getRandomArrayElements } from '@/lib/daletou.js'
export default {
  components: {
    OpenItem
  },
  data() {
    return {
      show: false,
      info: {},
      oldList: [],
      fontNums: genFrontNums(),
      backNums: genBackNums(),
      selectFont: [],
      selectBack: []
    };
  },
  created() {
    uni.setStorageSync('daletou_selected', []);
    uni.setStorageSync('daletou__issueId', '');
    uni.setStorageSync('daletou__issue', '');
    uni.setStorageSync('daletou__additional', '');
    this.getCurrent();
    this.getHistory();
  },
  onNavigationBarButtonTap() {
    openUrl({
      url: 'https://h5.jiangduoduo.com/chart?lotteryId=1000',
      needRedirect: false
    })
  },
  computed: {
    count () {
      const fLen = this.selectFont.length;
      const bLen = this.selectBack.length;
      if (fLen < 5 || bLen < 2) {
        return 0;
      }
      
      const f = getFlagArrs(fLen, 5).length;
      const b = getFlagArrs(bLen, 2).length;
      
      return f * b
    }
  },
  methods: {
    aiChoose() {
      this.emptyAll();
      const selectFont = getRandomArrayElements(this.fontNums, 5);
      const selectBack = getRandomArrayElements(this.backNums, 2);
      this.selectFont = selectFont.sort((a, b) => Number(a) - Number(b));
      this.selectBack = selectBack.sort((a, b) => Number(a) - Number(b));
    },
    handleConfirm() {
      if(!this.info.issueId) {
        return uni.showToast({
          title: '当前没有销售奖期',
          icon: 'none'
        })
      }
      if (!this.count) {
        return uni.showToast({
          title: '请至少选择1注',
          icon: 'none'
        })
      }
      console.log('>>> 前区', this.selectFont);
      console.log('>>> 后区', this.selectBack);
      let selectedAll = uni.getStorageSync('daletou_selected') || [];
      selectedAll.unshift({
        selectFont: this.selectFont,
        selectBack: this.selectBack
      })
      uni.setStorageSync('daletou_selected', selectedAll);
      uni.setStorageSync('daletou__issueId', this.info.issueId);
      uni.setStorageSync('daletou__issue', this.info.issue);
      uni.navigateTo({
        url: '/pages/daletou/confirm'
      })
    },
    emptyAll() {
      this.selectFont = [];
      this.selectBack = [];
    },
    fontAdd(item) {
      if (this.selectFont.includes(item)) {
        this.selectFont = this.selectFont.filter(v => v !== item);
      } else {
        this.selectFont.push(item);
      }
      this.selectFont = this.selectFont.sort((a, b) => Number(a) - Number(b));
    },
    backAdd(item) {
      if (this.selectBack.includes(item)) {
        this.selectBack = this.selectBack.filter(v => v !== item);
      } else {
        this.selectBack.push(item);
      }
      this.selectBack = this.selectBack.sort((a, b) => Number(a) - Number(b));
    },
    getCurrent() {
      lottery
        .queryCurIssue({
          lotteryId: 10026
        })
        .then(res => {
          console.log('>>> 当期大乐透', res);
          this.info = res;
        });
    },
    getHistory() {
      lottery
        .getIssueNotify({
          lotteryId: 10026,
          firstRow: 1,
          fetchSize: 3
        })
        .then(res => {
          this.oldList = res || [];
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-daletou {
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 80rpx;
}
.u-frontnum {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  background: #fff;
  border: 1px solid #ccc;
  color: #f5222d;
  font-size: 30rpx;
}
.u-font-active {
  background-color: #f5222d;
  color: #fff;
  border-color: #f5222d;
}
.u-backnum {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  background: #fff;
  border: 1px solid #ccc;
  color: #1890ff;
  font-size: 30rpx;
}
.u-back-active {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.u-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 750rpx;
  height: 80rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
}
.u-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150rpx;
  height: 100%;
}
.u-float {
  position: fixed;
  right: 30rpx;
  bottom: 150rpx;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 120rpx;
  height: 120rpx;
  border-radius: 120rpx;
  background: @red-6;
  opacity: 0.8;
  color: #fff;
  font-size: 30rpx;
}
</style>
