<template>
  <!-- 足球 -->
  <view class="u-10059">
    <g-panel v-for="item in list" :key="item.issue">
      <view slot="title" class="f-30 grey-6">
        <text>{{item.week}}</text>
        <text style="margin: 0 10rpx;">{{item.issue}}</text>
        <text>共有{{item.count}}场比赛</text>
      </view>
      <view class="u-list">
        <view class="u-item" v-for="match in item.fb" :key="match.id">
          <view class="u-top">
            <view class="u-top-item f-30">
              <view style="margin-bottom: 10rpx;">{{match.leagueName}}</view>
              <view>{{match.teamId}}</view>
            </view>
            <view class="u-top-item f-24">{{match.hostName}}</view>
            <view class="u-top-item f-24 red-6">{{match.lastScore}}</view>
            <view class="u-top-item f-24">{{match.guestName}}</view>
          </view>
          <view class="u-table">
            <view class="u-cell f-24">
              <view class="u-cell-label">胜平负</view>
              <view class="u-cell-val">{{nameMap[match.spfResult]}}</view>
            </view>
            <view class="u-cell f-24">
              <view class="u-cell-label">让球</view>
              <view class="u-cell-val">({{Number(match.rate)}}){{nameMap[match.rqSpfResult]}}</view>
            </view>
            <view class="u-cell f-24">
              <view class="u-cell-label">比分</view>
              <view class="u-cell-val">{{match.lastScore}}</view>
            </view>
            <view class="u-cell f-24">
              <view class="u-cell-label">总进球</view>
              <view class="u-cell-val">{{match.zjqResult}}</view>
            </view>
            <view class="u-cell f-24">
              <view class="u-cell-label">半全场</view>
              <view class="u-cell-val">
                <text>{{nameMap[match.bqcResult]}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </g-panel>
  </view>
</template>

<script>
  // import mock from './mock_10059.js';
  import lottery from '@/api/lottery/index.js'
  import gPanel from '@/components/g-panel/index.vue'
  export default {
    components: {
      gPanel
    },
    data () {
      return {
        nameMap: {
          3: '胜',
          1: '平',
          0: '负',
          '00': '负负',
          '11': '平平',
          '33': '胜胜',
          '10': '平负',
          '11': '平平',
          '01': '负平',
          '03': '负胜',
          '13': '平胜',
          '31': '胜平'
        },
        list: [],
        issues: [],
        issue: ''
      }
    },
    methods: {
      getList () {
        lottery.getIssueNotifyJczq({
          issue: this.issue
        }).then(res => {
          this.list = res;
        })
      }
    },
    created() {
      this.getList()
    },
    onNavigationBarButtonTap(index) {
      const vm = this
      lottery.getIssueNotifyIssue({
        lotteryId: 10059
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
  }
</script>

<style lang="less" scoped>
  @import '~@/styles/common_vue.less';
  .u-10059 {
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
  }
  .u-cell {
    flex: 0 0 auto;
    width: 140rpx;
    border-right: 1rpx solid #ccc;
    &:nth-last-of-type(1){
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
