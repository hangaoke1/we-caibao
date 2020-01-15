<template>
  <view class="u-zq">
    <view class="u-title">
      <text class="f-30">{{ info.numberType }}</text>
      <text class="f-30">{{ info.statusDesc }}</text>
    </view>

    <view class="u-form">
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">订单金额</view>
        <view class="u-value f-30 grey-6">{{ (info.schemeAmount || 0).toFixed(2) }}元</view>
      </view>
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">预期回报</view>
        <view class="u-value f-30 red-6">{{ (info.maxReturn || 0).toFixed(2) }}倍</view>
      </view>
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">中奖金额</view>
        <view class="f-30 f-bold red-6" v-if="['待出票', '出票成功'].includes(info.statusDesc)">
          --
        </view>
        <view class="f-30 f-bold red-6" v-else>{{ (info.pureSchemePrize || 0).toFixed(2) }}元</view>
      </view>
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">订单号</view>
        <view class="u-value f-30 grey-6">{{ info.schemeId }}</view>
      </view>
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">投注信息</view>
        <view class="u-value f-30 grey-6">
          {{ info.schemeContent[0].pass }} {{ info.schemeNumberUnit / info.multiple }}注{{
            info.multiple
          }}倍
        </view>
      </view>
      <view class="u-form-item">
        <view class="u-label f-30 grey-6">下单时间</view>
        <view class="u-value f-30 grey-6">{{ info.initiateTime }}</view>
      </view>
    </view>

    <view class="u-line" style="height: 60rpx;"></view>

    <view class="u-tip">
      <view class="f-30 grey-6">订单方案</view>
      <view class="f-24 grey-3">赔率、盘口与奖金以实际出票为准</view>
    </view>
    <view v-if="info.open == 0" class="u-hide">
      <text class="iconfont f-36 grey-6">&#xe6ad;</text>
      <text class="f-36 grey-6">开赛后可见</text>
    </view>
    <g-table v-else width="750">
      <g-tr>
        <g-td padding="0" col="150">
          <view class="u-td-wrap"><text class="f-24">场次</text></view>
        </g-td>
        <g-td padding="0" col="240">
          <view class="u-td-wrap"><text class="f-24">主队对客队</text></view>
        </g-td>
        <g-td padding="0" col="240">
          <view class="u-td-wrap"><text class="f-24">投注项</text></view>
        </g-td>
        <g-td padding="0" col="120">
          <view class="u-td-wrap"><text class="f-24">彩果</text></view>
        </g-td>
      </g-tr>

      <g-tr v-for="item in showInfo.schemeContent[0].matches" :key="item.id">
        <g-td padding="0" col="150">
          <view class="u-td-wrap">
            <text class="f-30 iconfont" :class="[item.matchId ? 'red-6': 'grey-1']" @tap="goH5(item)">&#xe609;</text>
            <text class="f-24" v-if="item.teamId">{{ fmtWeek(item.issue) }}{{ item.teamId }}</text>
            <text class="f-24">{{ item.matchTime.split(' ')[0].slice(-5) }}</text>
            <text class="f-24">{{ item.matchTime.split(' ')[1] }}</text>
          </view>
        </g-td>
        <g-td padding="0" col="240">
          <view class="u-td-wrap">
            <text class="f-24">{{ item.hostName }}</text>
            <text class="f-24 f-bold red-6">vs</text>
            <text class="f-24">{{ item.guestName }}</text>
          </view>
        </g-td>
        <g-td padding="0" col="240">
          <view class="u-td-wrap">
            <view v-for="(choose, index) in item.choose" :key="choose">
              <text class="f-24" :class="{'red-6': isHit(choose, item) }">
                {{ [403, 401, 400].includes(choose) ? '(' + item.rate + ')' : ''
                }}{{ map[choose].name }}[{{ item.odds[index] || '-' }}]
              </text>
            </view>
          </view>
        </g-td>
        <g-td padding="0" col="120">
          <view class="u-td-wrap">
            <text v-if="!item.teamId" class="f-24">比赛取消</text>
            <template v-else-if="item.bingo !== '-1'">
              <text class="f-24 red-6" v-for="bingo in item.bingos" :key="bingo.name">
                {{ bingo.value }}
              </text>
            </template>
            <text v-else class="f-24">待开奖</text>
          </view>
        </g-td>
      </g-tr>
    </g-table>
  </view>
</template>

<script>
import _ from 'lodash';
import dayjs from 'dayjs';
import gTable from '@/components/vue-table/vue-table.vue';
import gTr from '@/components/vue-table/vue-tr.vue';
import gTd from '@/components/vue-table/vue-td.vue';
import { map } from '@/lib/jczq.js';
import { openUrl } from '@/util/index.js';

export default {
  props: {
    info: Object
  },
  components: {
    gTable,
    gTr,
    gTd
  },
  data() {
    return {
      map,
      showInfo: {}
    };
  },
  methods: {
    goH5(match) {
      if (!match.matchId) {
        return uni.showToast({
          title: '暂无比赛直播',
          icon: 'none'
        })
      }
      const url = 'https://h5.jdddata.com/communal/cartoon/fulllive?mid=' + match.matchId;
      openUrl({url});
    },
    isHit (choose, item) {
      if (!item.teamId) { return false }
      const results = item.bingos.map(bingo => bingo.value);
      const chooseName = this.map[choose].name;
      return results.includes(chooseName);
    },
    genBingo(item) {
      const bingos = item.bingo.split('/').map(item => {
        const bingo = item.trim();
        const bingoArr = bingo.split('：');
        return {
          name: bingoArr[0],
          value: bingoArr[1]
        };
      });
      return bingos;
    },
    fmtWeek(date) {
      date = date + '';
      date = date.slice(0, 4) + '-'  + date.slice(4, 6) + '-' + date.slice(6, 9) + ' 00:00:00'
      const map = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' };
      return map[dayjs(date).day()];
    }
  },
  created() {
    this.showInfo = _.cloneDeep(this.info);
    this.showInfo.schemeContent[0].matches.forEach(match => {
      match.bingos = this.genBingo(match);
    });
    // console.log(this.showInfo)
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-zq {
  box-sizing: border-box;
  width: 750rpx;
  padding-bottom: 100rpx;
  background: #fff;
}
.u-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #ccc;
}
.u-form-item {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.u-line {
  background: #f0f0f0;
}
.u-tip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background-color: #fff;
}

.u-td-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  height: 100%;
  .g-center();
}

.u-hide {
  width: 750rpx;
  height: 400rpx;
  background-color: #fff;
  display: flex;
  .g-center();
}
</style>
