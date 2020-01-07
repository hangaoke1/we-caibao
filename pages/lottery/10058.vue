<template>
  <!-- 足球 -->
  <view class="u-10058">
    <g-panel v-for="item in list" :key="item.issue">
      <view slot="title" class="f-30 grey-6">
        <text>{{ item.week }}</text>
        <text style="margin: 0 10rpx;">{{ item.issue }}</text>
        <text>共有{{ item.count }}场比赛</text>
      </view>
      <view class="u-list">
        <view class="u-item" v-for="match in item.bb" :key="match.id">
          <view class="u-top">
            <view class="u-top-item f-30">
              <view style="margin-bottom: 10rpx;">{{ match.leagueName }}</view>
              <view>{{ match.teamId }}</view>
            </view>
            <view class="u-top-item f-24">{{ match.guestName }}</view>
            <view class="u-top-item f-24 red-6">{{ match.lastScore }}</view>
            <view class="u-top-item f-24">{{ match.hostName }}</view>
          </view>
          <view class="u-table">
            <view class="u-cell f-24" style="width: 130rpx;">
              <view class="u-cell-label">胜负</view>
              <view class="u-cell-val">{{ match.sfResult }}</view>
            </view>
            <view class="u-cell f-24" style="width: 220rpx;">
              <view class="u-cell-label">让分胜负</view>
              <view class="u-cell-val">({{ match.rate }}){{ match.rfsfResult }}</view>
            </view>
            <view class="u-cell f-24" style="width: 175rpx;">
              <view class="u-cell-label">大小分</view>
              <view class="u-cell-val">{{ match.dxfResult }}分({{ match.basePoint }})</view>
            </view>
            <view class="u-cell f-24" style="width: 175rpx;">
              <view class="u-cell-label">胜分差</view>
              <view class="u-cell-val">{{ match.sfcResult }}</view>
            </view>
          </view>
        </view>
      </view>
    </g-panel>
  </view>
</template>

<script>
// import mock from './mock_10058.js';
import lottery from '@/api/lottery/index.js';
import gPanel from '@/components/g-panel/index.vue';
export default {
  components: {
    gPanel
  },
  data() {
    return {
      nameMap: {
        3: '胜',
        1: '平',
        0: '负'
      },
      list: [],
      issues: [],
      issue: ''
    };
  },
  methods: {
    getList() {
      lottery
        .getIssueNotifyJclq({
          issue: this.issue
        })
        .then(res => {
          this.list = res;
        });
    }
  },
  created() {
    this.getList();
  },
  onNavigationBarButtonTap(index) {
    const vm = this;
    lottery.getIssueNotifyIssue({
      lotteryId: 10058
    }).then(issues => {
      const list = issues.map(item => '第' + item + '期');
      uni.showActionSheet({
        itemList: list,
        success: function(res) {
          const index = res.tapIndex;
          vm.issue = issues[index];
          vm.getList();
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    });
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-10058 {
  padding-bottom: 200rpx;
}
.u-item {
  padding: 30rpx 0;
}
.u-top {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  padding: 0 30rpx;
}
.u-top-item {
  flex: 0 0 auto;
  width: 25%;
  text-align: center;
}
.u-table {
  width: 700rpx;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1rpx solid #ccc;
  overflow: hidden;
  overflow: hidden;
}
.u-cell {
  flex: 0 0 auto;
  border-right: 1rpx solid #ccc;
  &:nth-last-of-type(1) {
    border-right: none;
  }
}
.u-cell-label {
  text-align: center;
  background: #f0f0f0;
  color: #999;
  height: 60rpx;
  line-height: 60rpx;
}
.u-cell-val {
  text-align: center;
  height: 60rpx;
  line-height: 60rpx;
  color: @red-6;
}
</style>
