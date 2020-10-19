<template>
  <view>
    <view class="text-center font-s-26 py-2">
      <text class="mr-2">{{ info.issue }}期投注截止还有</text>
      <u-count-down
        color="red"
        separator-color="red"
        :font-size="26"
        separator="zh"
        :timestamp="info.remainTime / 1000"
      ></u-count-down>
    </view>
    <view class="bg-hui mb-2" v-if="info.issue">
      <view class="flex justify-between align-center pr-2" @click="show = !show">
        <open-item :issue="info.upIssue" :drawNumber="info.upDrawNumber"></open-item>
        <text class="iconfont font-s-2 text-gray" v-show="!show">&#xe637;</text>
        <text class="iconfont font-s-2 text-gray" v-show="show">&#xe638;</text>
      </view>
      <view v-show="show" v-for="item in oldList" :key="item.issue">
        <open-item :issue="item.issue" :drawNumber="item.drawNumber"></open-item>
      </view>
    </view>
    <view class="px-2">
      <u-subsection
        height="60"
        font-size="24"
        :list="list"
        :type="type"
        active-color="#ff9900"
        @change="typeChange"
      ></u-subsection>
    </view>

    <view class="p-2 flex align-center justify-between font-s-2 text-hui2">
      <view>{{ tips[type] }}</view>
      <view>{{ info.issue }}期</view>
    </view>

    <view class="p-2" v-if="type === 0">
      <view class="flex justify-between mb-3">
        <view class="flex-0 font-s-26 mr-2 text-hui pt-3">第一位</view>
        <view class="flex flex-wrap align-center">
          <g-ball
            class="mr-2 mb-2"
            v-for="item in nums"
            :key="item"
            :isActive="zhixuan[0].includes(item)"
            @click.native="zhixuanClick(0, item)"
          >
            <text>{{ item }}</text>
          </g-ball>
        </view>
      </view>

      <view class="flex justify-between mb-3">
        <view class="flex-0 font-s-26 mr-2 text-hui pt-3">第二位</view>
        <view class="flex flex-wrap align-center">
          <g-ball
            class="mr-2 mb-2"
            v-for="item in nums"
            :key="item"
            :isActive="zhixuan[1].includes(item)"
            @click.native="zhixuanClick(1, item)"
          >
            <text>{{ item }}</text>
          </g-ball>
        </view>
      </view>

      <view class="flex justify-between mb-3">
        <view class="flex-0 font-s-26 mr-2 text-hui pt-3">第三位</view>
        <view class="flex flex-wrap align-center">
          <g-ball
            class="mr-2 mb-2"
            v-for="item in nums"
            :key="item"
            :isActive="zhixuan[2].includes(item)"
            @click.native="zhixuanClick(2, item)"
          >
            <text>{{ item }}</text>
          </g-ball>
        </view>
      </view>
    </view>

    <view class="p-2" v-if="type === 1">
      <view class="flex justify-between mb-3">
        <view class="flex-0 font-s-26 mr-2 text-hui pt-3">选号</view>
        <view class="flex flex-wrap align-center">
          <g-ball
            class="mr-2 mb-2"
            v-for="item in nums"
            :key="item"
            :isActive="zu3.includes(item)"
            @click.native="zu3Click(item)"
          >
            <text>{{ item }}</text>
          </g-ball>
        </view>
      </view>
    </view>

    <view class="p-2" v-if="type === 2">
      <view class="flex justify-between mb-3">
        <view class="flex-0 font-s-26 mr-2 text-hui pt-3">选号</view>
        <view class="flex flex-wrap align-center">
          <g-ball
            class="mr-2 mb-2"
            v-for="item in nums"
            :key="item"
            :isActive="zu6.includes(item)"
            @click.native="zu6Click(item)"
          >
            <text>{{ item }}</text>
          </g-ball>
        </view>
      </view>
    </view>

    <view class="u-bottom">
      <view class="u-action flex-0 text-center text-red font-s-3" @click.stop="emptyAll">清空</view>
      <view class="flex-1 text-center">
        <text class="font-s-3 text-gray" v-if="!count">{{ tips[type] }}</text>
        <template v-else>
          <text class="font-s-36 text-red">{{ count }}</text>
          <text class="font-s-36 mr-1">注</text>
          <text class="font-s-36 text-red">{{ count * 2 }}</text>
          <text class="font-s-36">元</text>
        </template>
      </view>
      <view class="u-float" @click.stop="aiChoose">机选</view>
      <view
        class="u-action flex-0 text-center bg-red text-bai font-s-3"
        @click.stop="handleConfirm"
      >
        确定
      </view>
    </view>
  </view>
</template>

<script>
// 排列3直选 schemeNumberType=0
// 排列3直选复式 schemeNumberType=0
// 排列3 组3 schemeNumberType=6
// 排列3 组3多选 schemeNumberType=6
// 排列3 组6 schemeNumberType=7
// 排列3 组6多选 schemeNumberType=7
// 排列3 直选+直选 schemeNumberType=0
// 排列3 直选+组3 schemeNumberType=11
// 排列3 组3+组6 schemeNumberType=11
// import _ from 'lodash';
import { openUrl } from '@/util/index.js';
import { factorial } from '@/lib/common.js';
import lotteryApi from '@/api/lottery/index.js';
import GBall from '@/components/g-ball.vue';
import OpenItem from './components/OpenItem.vue';
export default {
  components: {
    GBall,
    OpenItem
  },
  data() {
    return {
      show: false,
      oldList: [],
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      zhixuan: [[], [], []],
      zu3: [],
      zu6: [],
      tips: {
        0: '每位至少选择1个号码',
        1: '至少选择2个号码',
        2: '至少选择3个号码'
      },
      info: {},
      list: [
        {
          name: '直选'
        },
        {
          name: '组三'
        },
        {
          name: '组六'
        }
      ],
      type: 0
    };
  },
  computed: {
    count() {
      if (this.type === 0) {
        return this.getCount(0, this.zhixuan);
      }
      if (this.type === 1) {
        return this.getCount(1, this.zu3);
      }
      if (this.type === 2) {
        return this.getCount(2, this.zu6);
      }
      return 0;
    }
  },
  created() {
    uni.setStorageSync('pailie3_selected', []);
    uni.setStorageSync('pailie3_issueId', '');
    uni.setStorageSync('pailie3_issue', '');
    this.getInfo();
    this.getHistory();
  },
  onNavigationBarButtonTap() {
    openUrl({
      url: 'https://h5.jiangduoduo.com/chart?lotteryId=1003',
      needRedirect: false
    });
  },
  methods: {
    aiChoose() {
      if (this.type === 0) {
        const arr1 = [_.random(0, 9)];
        const arr2 = [_.random(0, 9)];
        const arr3 = [_.random(0, 9)];
        this.zhixuan = [arr1, arr2, arr3];
      }
      if (this.type === 1) {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.zu3 = _.sampleSize(arr, 2).sort((a, b) => a - b);
      }
      if (this.type === 2) {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.zu6 = _.sampleSize(arr, 3).sort((a, b) => a - b);
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
    handleConfirm() {
      if (!this.info.issueId) {
        return uni.showToast({
          title: '当前没有销售奖期',
          icon: 'none'
        });
      }
      if (!this.count) {
        return uni.showToast({
          title: '请至少选择1注',
          icon: 'none'
        });
      }

      let nums = [];
      if (this.type === 0) {
        nums = this.zhixuan;
      }
      if (this.type === 1) {
        nums = this.zu3;
      }
      if (this.type === 2) {
        nums = this.zu6;
      }
      let selectedAll = uni.getStorageSync('pailie3_selected') || [];
      selectedAll.unshift({
        type: this.type,
        nums: nums
      });
      uni.setStorageSync('pailie3_selected', selectedAll);
      uni.setStorageSync('pailie3_issueId', this.info.issueId);
      uni.setStorageSync('pailie3_issue', this.info.issue);
      uni.navigateTo({
        url: '/pages/pailie3/confirm'
      });
    },
    zu3Click(val) {
      const nums = this.zu3;
      if (nums.includes(val)) {
        this.zu3 = nums.filter(v => v !== val).sort((a, b) => a - b);
      } else {
        this.zu3 = [...nums, val].sort((a, b) => a - b);
      }
    },
    zu6Click(val) {
      const nums = this.zu6;
      if (nums.includes(val)) {
        this.zu6 = nums.filter(v => v !== val).sort((a, b) => a - b);
      } else {
        this.zu6 = [...nums, val].sort((a, b) => a - b);
      }
    },
    zhixuanClick(index, val) {
      const nums = this.zhixuan[index];
      if (nums.includes(val)) {
        this.zhixuan[index] = nums.filter(v => v !== val);
      } else {
        this.zhixuan[index] = [...nums, val];
      }
      this.zhixuan = [...this.zhixuan];
    },
    typeChange(index) {
      this.zhixuan = [[], [], []];
      this.zu3 = [];
      this.zu6 = [];
      this.type = index;
    },
    getInfo() {
      lotteryApi
        .queryCurIssue({
          lotteryId: 10024
        })
        .then(res => {
          this.info = res;
        })
        .catch(err => {});
    },
    getHistory() {
      lotteryApi
        .getIssueNotify({
          lotteryId: 10024,
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
  background: #f5222d;
  opacity: 0.8;
  color: #fff;
  font-size: 30rpx;
}
</style>
