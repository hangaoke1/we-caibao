<template>
  <view class="u-race">
    <view class="u-title">
      <view class="f-30 grey-6 u-guest">
        <text class="grey-3">[客]</text>
        <text>{{ match.guestName }}</text>
      </view>
      <view class="f-30 grey-10 u-vs">VS</view>
      <view class="f-30 grey-6 u-host">
        <text class="grey-3">[主]</text>
        <text>{{ match.hostName }}</text>
      </view>
    </view>

    <view class="u-info">
      <view class="u-left">
        <text class="f-24 yellow-7">{{ match.teamId }}</text>
        <text class="f-24 yellow-7">{{ match.leagueName }}</text>
        <text class="f-24 yellow-7" style="margin-bottom: 10rpx;">
          {{ saleEndTime.slice(11, 16) }}截止
        </text>
        <text class="f-20 yellow-8" @tap="goH5(match.h5Url)">赛事分析</text>
        <text class="f-24 iconfont yellow-8" @tap="goH5(match.h5Url)">&#xe637;</text>
      </view>
      <view class="u-right" v-if="match.sfPassStatus != 1">
        <view class="u-type">
          <view class="u-type-item blue-3-bg">
            <text class="f-24 blue-8">胜</text>
            <text class="f-24 blue-8">负</text>
          </view>
          <view class="u-type-item lime-3-bg">
            <text class="f-24 lime-8">让</text>
            <text class="f-24 lime-8">分</text>
          </view>
          <view class="u-type-item yellow-3-bg">
            <text class="f-24 yellow-8">大</text>
            <text class="f-24 yellow-8">小</text>
          </view>
        </view>
        <g-table width="400" style="background-color: #fff;">
          <g-tr>
            <g-td padding="0" col="400" v-if="match.sfPassStatus === 5">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            <g-td
              v-else
              padding="0"
              col="200"
              v-for="key in sf[0]"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': checkDan(0)
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  <text>{{ key2name[key] }}</text>
                  <text v-if="key === 'd' || key === 'x'">({{ match.sp.basePoint }})</text>
                  <text v-if="key === 'rfsheng'">
                    ({{ match.sp.rate > 0 ? '+' + match.sp.rate : match.sp.rate }})
                  </text>
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
          <g-tr>
            <g-td padding="0" col="400" v-if="match.rfsfPassStatus === 5">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            <g-td
              v-else
              padding="0"
              col="200"
              v-for="key in sf[1]"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': checkDan(1)
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  <text>{{ key2name[key] }}</text>
                  <text v-if="key === 'd' || key === 'x'">({{ match.sp.basePoint }})</text>
                  <text v-if="key === 'rfsheng'">
                    ({{ match.sp.rate > 0 ? '+' + match.sp.rate : match.sp.rate }})
                  </text>
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
          <g-tr>
            <g-td padding="0" col="400" v-if="match.dxfPassStatus === 5">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            <g-td
              v-else
              padding="0"
              col="200"
              v-for="key in sf[2]"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': checkDan(2)
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  <text>{{ key2name[key] }}</text>
                  <text v-if="key === 'd' || key === 'x'">({{ match.sp.basePoint }})</text>
                  <text v-if="key === 'rfsheng'">
                    ({{ match.sp.rate > 0 ? '+' + match.sp.rate : match.sp.rate }})
                  </text>
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
        </g-table>

        <view class="u-expend" :class="{ 'z-select': !!match.choose.length }" @tap="goExpend">
          <template v-if="!match.choose.length">
            <text class="f-26 yellow-9">展开</text>
            <text class="f-26 yellow-9">全部</text>
          </template>
          <template v-else>
            <text class="f-26 white-1">已选</text>
            <text class="f-26 white-1">{{ match.choose.length }}项</text>
          </template>
        </view>
      </view>
      <view v-else class="u-stop">全场停售</view>
    </view>
    
    <view class="u-danguan red-6-bg" v-if="isDan"><text class="white-1 f-bold f-30">单</text></view>
    <view class="u-delete" v-if="type == 1" @tap="handleDelete">
      <text class="f-36 red-6 iconfont">&#xe726;</text>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
import { openUrl } from '@/util/index.js';
import dayjs from 'dayjs';
import gTable from '@/components/vue-table/vue-table.vue';
import gTr from '@/components/vue-table/vue-tr.vue';
import gTd from '@/components/vue-table/vue-td.vue';

import { key2name } from '@/lib/jclq.js';

export default {
  components: {
    gTable,
    gTr,
    gTd
  },
  props: {
    match: Object,
    type: Number // 0: 选择页面 1:投注确认页面
  },
  data() {
    return {
      key2name,
      sf: [
        ['fu', 'sheng'], // 胜负
        ['rffu', 'rfsheng'], // 让分
        ['d', 'x'] // 大小
      ]
    };
  },
  computed: {
    // 胜平负单关才显示单字
    isDan() {
      const {
        sfSingleStatus, // 胜负
        rfsfSingleStatus, // 让分胜负
        dxfSingleStatus, // 大小
        sfcSingleStatus // 比分
      } = this.match;

      const sfDan = sfSingleStatus === 0; // 0开启 5关闭
      const rfsfDan = rfsfSingleStatus === 0;
      const dxfDan = dxfSingleStatus === 0;
      const sfcDan = sfcSingleStatus === 0;

      return sfDan || rfsfDan || dxfDan;
    },
    saleEndTime() {
      return dayjs(this.match.cp2yEndTime).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: {
    ...mapMutations(['updateJclqChooseById']),
    checkDan(index) {
      const {
        sfSingleStatus, // 胜负
        rfsfSingleStatus, // 让分胜负
        sfcSingleStatus, // 比分
        dxfSingleStatus // 大小
      } = this.match;

      const sfDan = sfSingleStatus === 0; // 0开启 5关闭
      const rfsfDan = rfsfSingleStatus === 0;
      const dxfDan = dxfSingleStatus === 0;
      const sfcDan = sfcSingleStatus === 0;
      if (index === 0) {
        return sfDan;
      }
      if (index === 1) {
        return rfsfDan;
      }
      if (index === 2) {
        return dxfDan;
      }
    },
    goH5(url) {
      if (!url) {
        return uni.showToast({
          title: '这场比赛暂无赛事分析',
          icon: 'none'
        });
      }
      openUrl({url});
    },
    // 清空当前比赛内容
    handleDelete() {
      this.updateJclqChooseById({
        id: this.match.id,
        choose: []
      });
    },
    handleChoose(choose) {
      let newChoose = [];
      if (this.match.choose.includes(choose)) {
        newChoose = [...this.match.choose.filter(item => item !== choose)];
      } else {
        newChoose = [...this.match.choose, choose];
      }
      this.updateJclqChooseById({
        id: this.match.id,
        choose: newChoose
      });
    },
    goExpend() {
      uni.navigateTo({
        url: '/pages/jclq/expend?id=' + this.match.id,
        animationType: 'slide-in-right'
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-race {
  position: relative;
  padding-bottom: 60rpx;
  border-bottom: 1rpx solid #f0f0f0;
}
.u-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30rpx 0;
}
.u-guest {
  flex: 1;
  text-align: right;
}
.u-host {
  flex: 1;
  text-align: left;
}
.u-vs {
  width: 150rpx;
  text-align: center;
}
.u-info {
  display: flex;
  flex-direction: row;
}
.u-left {
  display: flex;
  flex-direction: column;
  padding: 0 24rpx;
  justify-content: center;
  align-items: center;
}

.u-right {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.u-type {
  display: flex;
  flex-direction: column;
  width: 50rpx;
}
.u-type-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.u-td-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10rpx;
  height: 100%;
  .g-center();
}
.u-expend {
  margin-left: 1rpx;
  width: 120rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1rpx solid #f0f0f0;
  border-left: none;
}
.z-active,
.z-select {
  background-color: @red-6;
}
.z-active-text {
  color: #fff;
}

.u-border-red {
  border: 4rpx solid @red-6;
}
.u-danguan {
  position: absolute;
  left: 0;
  top: 0;
  width: 60rpx;
  height: 60rpx;
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
.u-stop {
  flex: 1;
  box-sizing: border-box;
  padding-left: 160rpx;
  display: flex;
  align-items: center;
  font-size: 30rpx;
  color: #ccc;
}
</style>
