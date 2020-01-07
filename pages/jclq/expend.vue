<template>
  <view class="u-expend">
    <view v-if="match">
      <view class="u-statusbar"><!-- 这里是状态栏 --></view>

      <view class="u-title">
        <view class="f-36 grey-10 u-guest">
          <text class="grey-3">[客]</text>
          <text>{{ match.guestName }}</text>
        </view>
        <view class="f-36 grey-6 u-vs">VS</view>
        <view class="f-36 grey-10 u-host">
          <text class="grey-3">[主]</text>
          <text>{{ match.hostName }}</text>
        </view>
      </view>

      <view class="u-section">
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
        <g-table width="600" style="background-color: #fff;">
          <g-tr v-for="(list, index) in sf" :key="index">
            
            <g-td padding="0" col="600" v-if="sfMap[index]">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            
            <g-td
              v-else
              padding="0"
              col="300"
              v-for="key in list"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': checkDan(index)
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  <text>{{ key2name[key] }}</text>
                  <text v-if="key === 'd' || key === 'x'">({{match.sp.basePoint}})</text>
                  <text v-if="key === 'rfsheng'">({{match.sp.rate > 0 ? '+' + match.sp.rate : match.sp.rate}})</text>
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
        </g-table>
      </view>

      <view class="u-section">
        <view class="u-type">
          <view class="u-type-item gold-3-bg">
            <text class="f-24 gold-8">客</text>
            <text class="f-24 gold-8">胜</text>
          </view>
        </view>
        <g-table width="600" style="background-color: #fff;">
          <g-tr v-for="(list, index) in keSheng" :key="index">
            <g-td padding="0" col="600" v-if="bfStatus">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            
            <g-td
              v-else
              padding="0"
              col="200"
              v-for="key in list"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': match.sfcSingleStatus === 0
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ key2name[key] }}
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
        </g-table>
      </view>

      <view class="u-section">
        <view class="u-type">
          <view class="u-type-item geekblue-3-bg">
            <text class="f-24 geekblue-8">主</text>
            <text class="f-24 geekblue-8">胜</text>
          </view>
        </view>
        <g-table width="600" style="background-color: #fff;">
          <g-tr v-for="(list, index) in zhuSheng" :key="index">
            <g-td padding="0" col="600" v-if="bfStatus">
              <view class="u-td-wrap f-24 grey-5" style="padding: 30rpx;">未开售</view>
            </g-td>
            
            <g-td
              v-else
              padding="0"
              col="200"
              v-for="key in list"
              :key="key"
              @click.native="handleChoose(key)"
            >
              <view
                class="u-td-wrap"
                :class="{
                  'z-active': match.choose.includes(key),
                  'u-border-red': match.sfcSingleStatus === 0
                }"
              >
                <text class="f-24" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ key2name[key] }}
                </text>
                <text class="f-24 grey-5" :class="{ 'z-active-text': match.choose.includes(key) }">
                  {{ match.sp[key] }}
                </text>
              </view>
            </g-td>
          </g-tr>
        </g-table>
      </view>
    </view>
    <view class="u-bottom">
      <view class="u-cancel" @tap="handleCancel"><text class="f-36">取消</text></view>
      <view class="u-confirm red-6-bg" @tap="handleConfirm">
        <text class="f-36 white-1">确定</text>
      </view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
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
  data() {
    return {
      match: '',
      key2name,
      sf: [
        ['fu', 'sheng'], // 胜负
        ['rffu', 'rfsheng'], // 让分
        ['d', 'x'] // 大小
      ],
      // 分差客胜
      keSheng: [['g15', 'g610', 'g1115'], ['g1620', 'g2125', 'g26']],
      // 分差主胜
      zhuSheng: [['h15', 'h610', 'h1115'], ['h1620', 'h2125', 'h26']]
    };
  },
  computed: {
    ...mapState({
      info: state => state.jclq
    }),
    sfMap () {
      return {
        0: this.match.sfPassStatus === 5,
        1: this.match.rfsfPassStatus === 5,
        2: this.match.dxfPassStatus === 5
      }
    },
    bfStatus () {
      return this.match.sfcPassStatus === 5
    }
  },
  methods: {
    ...mapMutations(['updateJclqChooseById']),
    ...mapActions({
      updateJclq: 'updateJclq'
    }),
    checkDan (index) {
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
        return sfDan
      }
      if (index === 1) {
        return rfsfDan
      }
      if (index === 2) {
        return dxfDan
      }
    },
    handleChoose(choose) {
      if (this.match.choose.includes(choose)) {
        this.match.choose = this.match.choose.filter(item => item !== choose);
      } else {
        this.match.choose.push(choose);
      }
    },
    handleCancel() {
      uni.navigateBack({
        animationDuration: 300
      });
    },
    handleConfirm() {
      // 确认的时候同步到vuex
      this.updateJclqChooseById({
        id: this.match.id,
        choose: _.cloneDeep(this.match.choose)
      });
      uni.navigateBack({
        animationDuration: 300
      });
    }
  },
  onLoad(option) {
    const { id } = option;
    this.id = id;
  },
  created() {
    this.match = {
      choose: [],
      sp: {}
    };
  },
  mounted() {
    const match = this.info.dataList
      .reduce((total, item) => {
        return [...total, ...item.matches];
      }, [])
      .filter(item => item.id == this.id)[0];
    this.match = _.cloneDeep(match);
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-statusbar {
  height: var(--status-bar-height);
  width: 100%;
  background: #fff;
}

.u-expend {
  min-height: 100vh;
  background-color: #f6f8fa;
}

.u-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30rpx 0;
  background: #fff;
  position: sticky;
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

.u-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30rpx 20rpx;
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
.u-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750rpx;
  height: 100rpx;
  background-color: #fff;
}
.u-cancel {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100rpx;
}
.u-confirm {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100rpx;
}
</style>
