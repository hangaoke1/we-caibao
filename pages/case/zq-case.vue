<template>
  <g-table width="750" style="background-color: #fff;">
    <g-tr>
      <g-td col="150" padding="0">
        <view class="u-td-wrap"><text class="f-30">场次</text></view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap"><text class="f-30">主队对客队</text></view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap"><text class="f-30">投注项</text></view>
      </g-td>
      <g-td col="120" padding="0">
        <view class="u-td-wrap"><text class="f-30">彩果</text></view>
      </g-td>
    </g-tr>
    <g-tr v-for="(match, index) in matches" :key="index">
      <g-td col="150" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <text class="f-30 iconfont" :class="[match.matchId ? 'red-6': 'grey-1']"  @tap="goH5(match)">&#xe609;</text>
          <text class="f-24">{{ fmtWeek(match.issue) }}{{ match.teamId }}</text>
          <text class="f-24">{{ match.matchTime.split(' ')[0].slice(-5) }}</text>
          <text class="f-24">{{ match.matchTime.split(' ')[1].slice(0, 5) }}</text>
        </view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <text class="f-24">{{ match.hostName }}</text>
          <text class="f-24 red-6">vs</text>
          <text class="f-24">{{ match.guestName }}</text>
        </view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;" v-if="match.openFlag">
          <text
            v-for="(choose, index) in match.choose"
            :key="choose"
            class="f-24"
            :class="{ 'red-6': isHit(choose, match) }"
          >
            {{ [403, 401, 400].includes(choose) ? '(' + match.rate + ')' : ''
            }}{{ jczqMap[choose].name }}[{{ match.odds[index] }}]
          </text>
        </view>
        <view class="u-td-wrap" style="flex-direction: column;" v-else>
          <!-- <text class="f-24">未开始</text> -->
          <text class="iconfont f-24 grey-6">&#xe6ad;</text>
        </view>
      </g-td>
      <g-td col="120" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <template v-if="match.bingo !== '-1'">
            <text class="f-24 red-6" v-for="bingo in match.bingos" :key="bingo.name">
              {{ bingo.value }}
            </text>
          </template>
          <text v-else class="f-24">待开奖</text>
        </view>
      </g-td>
    </g-tr>
  </g-table>
</template>

<script>
import _ from 'lodash';
import dayjs from 'dayjs';
import { map as jczqMap } from '@/lib/jczq.js';
import gTable from '@/components/vue-table/vue-table.vue';
import gTr from '@/components/vue-table/vue-tr.vue';
import gTd from '@/components/vue-table/vue-td.vue';
import { openUrl } from '@/util/index.js';
export default {
  props: {
    matches: Array
  },
  components: {
    gTable,
    gTr,
    gTd
  },
  data () {
    return {
      jczqMap
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.matches))
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
    fmtWeek(date) {
      date = date + '';
      date = date.slice(0, 4) + '-'  + date.slice(4, 6) + '-' + date.slice(6, 9) + ' 00:00:00'
      const map = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' };
      return map[dayjs(date).day()];
    },
    isHit(choose, item) {
      const results = item.bingos.map(bingo => bingo.value);
      const chooseName = this.jczqMap[choose].name;
      return results.includes(chooseName);
    },
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-td-wrap {
  box-sizing: border-box;
  display: flex;
  padding: 20rpx;
  height: 100%;
  .g-center();
}
</style>
