<template>
  <view class="u-jclq">
   <view class="u-pannel-list" v-show="!isEmpty">
      <we-panel v-for="item in info.dataList" :key="item.issueId">
        <view slot="title" class="u-title">
          <text class="f-28 grey-6">{{ item.dayKey }}</text>
          <text class="f-28 grey-6 u-day">{{ item.dayOfWeekStr }}</text>
          <text class="f-28 grey-6">{{ item.matches.length }}场比赛</text>
        </view>
        <view class="u-list">
          <view class="u-list-item" v-for="match in item.matches" :key="match.id">
            <we-race :match="match" :type="0"></we-race>
          </view>
        </view>
      </we-panel>
    </view>
    
    <view v-show="isEmpty">
      <image style="margin-top: 100rpx;width: 750rpx;height: 750rpx;" src='/static/bb_empty.png' mode="scaleToFill"></image>
    </view>
    
    <view class="u-loading" v-if="!info" style="background-color: #f0f0f0;">
      <view class="u-loading-content">
        <image class="u-loading-image" src="/static/211.gif"></image>
        <text class="f-30 white-1">加载中</text>
      </view>
    </view>

    <view class="u-bottom">
      <view class="u-empty" @click.stop="resetChoose"><text class="f-30 red-6">清空</text></view>
      <view class="u-center">
        <view class="u-center-top">
          <text class="f-32">已选</text>
          <text class="f-32 red-6">{{ selectCount }}</text>
          <text class="f-32">场</text>
        </view>
        <view class="u-center-bottom"><text class="f-24 grey-6">(页面赔率仅供参考)</text></view>
      </view>
      <view class="u-next" @click.stop="goNext"><text class="f-30 white-1">下一步</text></view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
import wePanel from './u-panel.vue';
import weRace from './u-race.vue';
export default {
  components: {
    wePanel,
    weRace
  },
  data() {
    return {
      finished: false
    }
  },
  computed: {
    ...mapState({
      info: state => state.jclq
    }),
    isEmpty() {
      return _.get(this.info, 'dataList.length', 0) == 0 && this.finished
    },
    selectCount() {
      let count = 0;
      this.info &&
        this.info.dataList.forEach(item => {
          item.matches.forEach(match => {
            if (match.choose.length) {
              count += 1;
            }
          });
        });
      return count;
    },
    selectRaces() {
      let matches = [];
      this.info &&
        this.info.dataList.forEach(item => {
          item.matches.forEach(match => {
            if (match.choose.length) {
              matches.push(match);
            }
          });
        });
      return matches;
    }
  },
  methods: {
    ...mapActions({
      updateJclq: 'updateJclq'
    }),
    ...mapMutations(['updateJclqChooseById', 'emptyJclqChoose']),
    resetChoose() {
      uni.showModal({
        title: '提示',
        content: '是否清空选择?',
        success: res => {
          if (res.confirm) {
            this.emptyJclqChoose();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    // 进入投注确认页面
    goNext() {
      // 1. 场次检测
      if (this.selectCount === 0) {
        return uni.showToast({
          title: '至少选择1场比赛',
          icon: 'none'
        });
      }
      // 2. 场次检测 非单关提示
      if (this.selectCount === 1 && !this.checkRaces(this.selectRaces[0])) {
        return uni.showToast({
          title: '非单关至少选择2场比赛',
          icon: 'none'
        });
      }
      // 3. 总场次检测
      if (this.selectCount > 8) {
        return uni.showToast({
          title: '混合投注最多8场比赛',
          icon: 'none'
        });
      }
      uni.navigateTo({
        url: '/pages/jclq/confirm'
      });
    },
    checkRaces(match) {
      const choose = match.choose;

      const sf = ['sheng', 'fu'];
      const rfsf = ['rfsheng', 'rffu'];
      const dx = ['d', 'x'];
      const sfc = [
        'g15',
        'g610',
        'g1115',
        'g1620',
        'g2125',
        'g26',
        'h15',
        'h610',
        'h1115',
        'h1620',
        'h2125',
        'h26'
      ];

      const {
        sfSingleStatus, // 胜负
        rfsfSingleStatus, // 让分胜负
        sfcSingleStatus, // 比分
        dxfSingleStatus // 大小
      } = match;

      const sfDan = sfSingleStatus === 0;
      const rfsfDan = rfsfSingleStatus === 0;
      const dxfDan = dxfSingleStatus === 0;
      const sfcDan = sfcSingleStatus === 0;

      // 胜负单关检测
      if (_.intersection(choose, sf).length && !sfDan) {
        return false;
      }
      // 让分胜负单关检测
      if (_.intersection(choose, rfsf).length && !rfsfDan) {
        return false;
      }
      // 大小单关检测
      if (_.intersection(choose, dx).length && !dxfDan) {
        return false;
      }
      // 比分单关检测
      if (_.intersection(choose, sfc).length && !sfcDan) {
        return false;
      }
      return true;
    }
  },
  created() {
    uni.showLoading({
      title: '比赛加载中'
    })
    this.updateJclq().then(() => {
      this.finished = true
      setTimeout(() => {
        uni.hideLoading()
      }, 500)
    }).catch(() => {
      this.finished = true
    });
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-jclq {
  padding-bottom: 120rpx;
}
.u-title {
  display: flex;
  align-items: center;
}
.u-day {
  margin: 0 20rpx;
}
.u-list {
  background-color: #f6f8fa;
}

.u-bottom {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750rpx;
  height: 120rpx;
  padding: 0 20rpx;
  background-color: #f6f8fa;
  border-top: 1rpx solid #f0f0f0;
}
.u-center-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.u-empty {
  box-sizing: border-box;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 10rpx;
}
.u-next {
  box-sizing: border-box;
  background-color: @red-6;
  padding: 20rpx 30rpx;
  border-radius: 10rpx;
}

.u-loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 750rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.u-loading-content {
  margin-top: -100rpx;
  width: 300rpx;
  height: 250rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10rpx;
  background-color: rgba(0, 0, 0, 0.4);
}

.u-loading-image {
  width: 100rpx;
  height: 100rpx;
  margin-top: 50rpx;
  margin-bottom: 30rpx;
}

.u-sk {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 750rpx;
}
.u-sk-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16rpx;
  height: 70rpx;
  border-bottom: 1rpx solid #ccc;
  background-color: #fff;
}

.u-arrow {
  transform: rotate(90deg);
}

.u-sk-race {
  padding: 30rpx 0 40rpx 0;
  background-color: #f0f0f0;
  border-bottom: 1rpx solid #ccc;
}

.u-sk-top {
  width: 400rpx;
  height: 50rpx;
  margin-left: 175rpx;
  margin-bottom: 30rpx;
  border-radius: 5rpx;
  background-color: #ccc;
}

.u-sk-bottom {
  padding: 0 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.u-sk-left {
  width: 100rpx;
  height: 150rpx;
  background-color: #ccc;
  border-radius: 5rpx;
}
.u-sk-right {
  width: 500rpx;
  height: 180rpx;
  margin-left: 45rpx;
  background-color: #ccc;
  border-radius: 5rpx;
}
</style>
