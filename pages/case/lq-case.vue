<template>
  <g-table width="750" style="background-color: #fff;">
    <g-tr>
      <g-td col="140" padding="0">
        <view class="u-td-wrap"><text class="f-30">场次</text></view>
      </g-td>
      <g-td col="220" padding="0">
        <view class="u-td-wrap"><text class="f-30">客队对主队</text></view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap"><text class="f-30">投注项</text></view>
      </g-td>
      <g-td col="150" padding="0">
        <view class="u-td-wrap"><text class="f-30">彩果</text></view>
      </g-td>
    </g-tr>
    <g-tr v-for="(match, index) in matches" :key="index">
      <g-td col="140" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <text class="f-20">{{ fmtWeek(match.sp.issue) }}{{ match.sp.teamId }}</text>
          <text class="f-20">{{ match.strMatchTime.split(' ')[0].slice(-5) }}</text>
          <text class="f-20">{{ match.strMatchTime.split(' ')[1].slice(0, 5) }}</text>
        </view>
      </g-td>
      <g-td col="220" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <text class="f-20">{{ match.guestName }}</text>
          <text class="f-20 red-6">vs</text>
          <text class="f-20">{{ match.hostName }}</text>
        </view>
      </g-td>
      <g-td col="240" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;" v-if="match.openFlag">
          <text
            v-for="(choose, index) in match.choose"
            :key="choose"
            class="f-20"
            :class="{ 'red-6': isHit(choose, match) }"
          >
          <text v-if="choose == '201' || choose == '202'">({{match.sp.basePoint}})</text>
          <text v-if="choose == '100' || choose == '103'">({{match.sp.rate}})</text>
            <text>{{ code2PrizeName[choose] }}[{{ match.odds[index] }}]</text>
          </text>
        </view>
        <view class="u-td-wrap" style="flex-direction: column;" v-else>
          <text class="iconfont f-24 grey-6">&#xe6ad;</text>
          <!-- <text class="f-24">未开始</text> -->
        </view>
      </g-td>
      <g-td col="150" padding="0">
        <view class="u-td-wrap" style="flex-direction: column;">
          <template v-if="match.bingo !== '-1'">
            <text class="f-20 red-6" v-for="bingo in match.bingos" :key="bingo.name">
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
import { code2PrizeName } from '@/lib/jclq.js';
import gTable from '@/components/vue-table/vue-table.vue';
import gTr from '@/components/vue-table/vue-tr.vue';
import gTd from '@/components/vue-table/vue-td.vue';
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
      code2PrizeName
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.matches))
  },
  methods: {
    fmtWeek(date) {
      date = date + '';
      date = date.slice(0, 4) + '-'  + date.slice(4, 6) + '-' + date.slice(6, 9) + ' 00:00:00'
      const map = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' };
      return map[dayjs(date).day()];
    },
    isHit(choose, item) {
      const results = item.bingos.map(bingo => bingo.value);
      const chooseName = this.code2PrizeName[choose];
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
