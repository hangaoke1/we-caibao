<template>
  <!-- 大神详情 -->
  <view class="u-detail">
    <image style="width: 750rpx;height: 350rpx;" src="/static/ds_top_bg.png"></image>
    <view class="u-info">
      <div class="u-avatar">
        <g-img :src="homeInfo.avatar" defaultSrc="/static/portrait.png"></g-img>
      </div>
      <view class="u-msg">
        <text class="f-28 white-1 f-bold" style="margin-bottom: 10rpx;">
          {{ homeInfo.userName }}
        </text>
        <text class="f-24 white-1 f-bold">粉丝: {{homeInfo.cared}}</text>
      </view>
      <view class="u-focus f-22" v-if="homeInfo.beCared != 1" @click.stop="carePerson">+ 关注</view>
      <view class="u-focused f-22" v-else @click.stop="cancelCarePerson">已关注</view>
    </view>

    <!-- 战绩信息 -->
    <view>
      <view class="u-subtitle">
        <view class="u-line"></view>
        <text class="f-26">近七日战绩</text>
      </view>
      <view class="u-grade">
        <view class="u-grade-item">
          <text class="f-24 red-6">{{ homeInfo.weekHitRatio }}％</text>
          <text class="f-24 grey-6">盈利率</text>
        </view>
        <view class="u-grade-item">
          <text class="f-24 red-6">{{ homeInfo.weekBetCount }}中{{ homeInfo.weekHitCount }}</text>
          <text class="f-24 grey-6">命中率</text>
        </view>
        <view class="u-grade-item">
          <text class="f-24 red-6">{{ (homeInfo.allHitPrize || 0).toFixed(2) }}</text>
          <text class="f-24 grey-6">推荐中奖(元)</text>
        </view>
      </view>
      <view class="u-subtitle" style="border-bottom: none;">
        <view class="u-line"></view>
        <text class="f-26">近五期走势</text>
        <view v-for="(item, index) in recentStatus" :key="index">
          <view class="u-res" v-if="item == 0"><text class="f-22 white-1">红</text></view>
          <view class="u-res-not" v-if="item == 1"><text class="f-22 white-1">未</text></view>
        </view>
      </view>
    </view>
    <!-- 订单信息 -->
    <!-- tab选项 -->
    <view class="u-tab">
      <view
        class="u-tab-item"
        :class="{ 'z-active': index === activeIndex }"
        v-for="(item, index) in ['近期投注', '历史红单']"
        :key="item"
        @click.stop="changeTab(index)"
      >
        <text class="f-30" :class="{ 'z-active-text': index === activeIndex }">{{ item }}</text>
      </view>
      <view class="u-tab-line" :style="lineStyle"></view>
    </view>
    <view class="u-hr"></view>

    <!-- 列表 -->
    <view class="u-list" v-for="(item, index) in dataList" :key="index">
      <view
        class="u-item"
        v-show="activeIndex === index"
        v-for="(subItem, subIndex) in item.list"
        :key="subIndex"
      >
        <order :item="subItem"></order>
      </view>
    </view>

    <!-- 加载提示 -->
    <view class="u-tip">
      <text class="f-30 grey-6" v-if="dataList[activeIndex].finished">没有更多了</text>
      <text class="f-30 grey-6" v-else-if="!dataList[activeIndex].loading" @click.stop="onloading()">
        点击或上拉加载更多
      </text>
      <text class="f-30 grey-6" v-else>加载中...</text>
    </view>
  </view>
</template>

<script>
import lottery from '@/api/lottery/index.js';
import order from './order.vue';
import gImg from '@/components/g-img/index.vue';

export default {
  components: {
    order,
    gImg
  },
  data() {
    return {
      id: '',
      refreshing: false,
      loadinging: false,
      homeInfo: {
        userId: '',
        userName: '',
        avatar: '',
        care: 0,
        cared: 0, // 粉丝数量
        beCared: 0,
        weekHitRatio: 0, // 盈利率
        weekHitCount: 0, // 4中1
        weekBetCount: 0, // 4中1
        allHitPrize: 0 // 推荐中奖
      },
      recentStatus: [],
      activeIndex: 0,
      dataList: [
        {
          pageNo: 1,
          pageSize: 10,
          list: [],
          finished: false,
          loading: false
        },
        {
          pageNo: 1,
          pageSize: 10,
          list: [],
          finished: false,
          loading: false
        }
      ]
    };
  },
  computed: {
    lineStyle() {
      return `
        width: 375rpx;
        transform: translate3d(${this.activeIndex * 375}rpx, 0, 0);
        `;
    }
  },
  watch: {
    activeIndex: {
      handler(tabIndex) {
        const tab = this.dataList[tabIndex];
        if (tab.pageNo === 1) {
          setTimeout(() => {
            this.onloading();
          }, 500);
        }
      },
      immediate: true
    }
  },
  methods: {
    // 关注大神
    carePerson () {
      lottery.carePerson({
        followUserId: this.homeInfo.userId
      }).then(res => {
        this.getRecommendorHome()
      })
    },
    // 取消关注大神
    cancelCarePerson () {
      lottery.cancelCarePerson({
        followUserId: this.homeInfo.userId
      }).then(res => {
        this.getRecommendorHome()
      })
    },
    changeTab(index) {
      this.activeIndex = index;
    },
    getRecommendorHome() {
      return lottery
        .getRecommendorHome({
          homeUserId: this.id
        })
        .then(res => {
          this.homeInfo = res.homeInfo;
          this.recentStatus = res.recentStatus.split('') || [];
        });
    },
    // 触发下拉
    onloading() {
      const activeIndex = this.activeIndex;
      const tab = this.dataList[activeIndex];
      if (tab.loading) {
        return;
      }

      if (tab.finished) {
        setTimeout(() => {
          tab.loading = false;
        }, 1000);
      }

      tab.loading = true;

      let params = {
        fetchSize: tab.pageSize,
        firstRow: tab.pageNo,
        homeUserId: this.id
      };
      if (activeIndex === 0) {
        lottery
          .getRecommendorScheme(params)
          .then(res => {
            const list = _.get(res, 'schemeList', []);
            // console.log(res);
            tab.list = [...tab.list, ...list];
            tab.pageNo += 1;
            tab.loading = false;
            tab.finished = list.length < tab.pageSize;
          })
          .catch(err => {
            console.error(err);
            tab.loading = false;
            tab.finished = true;
          });
      } else {
        // 历史红单
        lottery
          .getRecommendorSchemeRed(params)
          .then(res => {
            const list = _.get(res, 'schemeList', []);
            tab.list = [...tab.list, ...list];
            tab.pageNo += 1;
            tab.loading = false;
            tab.finished = list.length < tab.pageSize;
          })
          .catch(() => {
            tab.loading = false;
            tab.finished = true;
          });
      }
    }
  },
  onLoad(option) {
    const { id } = option;
    this.id = id;
  },
  mounted() {
    this.getRecommendorHome();
  },
  onReachBottom() {
    this.onloading();
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-info {
  position: relative;
  margin-top: -160rpx;
  height: 160rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.u-focus, .u-focused {
  position: absolute;
  right: 0;
  bottom: 50rpx;
  width: 103rpx;
  height: 54rpx;
  color: @red-6;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 1rpx 5rpx 0rpx rgba(10, 2, 4, 0.26);
  border-radius: 27rpx 0rpx 0rpx 27rpx;
  display: flex;
  border: 1rpx solid #fff;
  border-right: none;
  .g-center();
}
.u-focused {
  background: none;
  color: #fff;
}
.u-avatar {
  box-sizing: border-box;
  width: 100rpx;
  height: 100rpx;
  border-radius: 100rpx;
  border: 4rpx solid @yellow-6;
  margin-right: 20rpx;
  margin-left: 54rpx;
  background: #ccc;
  overflow: hidden;
  transform: scale(1);
}
.u-msg {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.u-subtitle {
  position: relative;
  height: 74rpx;
  padding-left: 63rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5e5e5e;
  border-bottom: 1rpx solid #f0f0f0;
}
.u-line {
  position: absolute;
  left: 40rpx;
  top: 23rpx;
  width: 10rpx;
  height: 28rpx;
  background-color: #db3533;
}
.u-grade {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 107rpx;
  border-bottom: 1rpx solid #f0f0f0;
  &-item {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    .g-center();
    &:after {
      position: absolute;
      content: '';
      width: 1rpx;
      height: 40rpx;
      right: 0;
      top: 50%;
      background: #ccc;
      transform: translateY(-50%);
    }
    &:nth-last-of-type(1):after {
      width: 0;
    }
  }
}
.u-res,
.u-res-not {
  width: 42rpx;
  height: 48rpx;
  margin-left: 46rpx;
  background-color: #e23c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
.u-res-not {
  background-color: #bdbdbd;
}
.u-tab {
  position: relative;
  display: flex;
  width: 750rpx;
  height: 80rpx;
  border-top: 1rpx solid #f0f0f0;
  border-bottom: 1rpx solid #f0f0f0;
  background-color: #fff;
}

.u-tab-item {
  flex: 1;
  height: 80rpx;
  background-color: #fff;
  display: flex;
  .g-center();
}

.u-tab-line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4rpx;
  background-color: @red-6;
  transform: translate3d(0, 0, 0);
  transition: transform 200ms cubic-bezier(0.36, 0.66, 0.04, 1);
}
.z-active-text {
  color: @red-6;
}
.u-hr {
  width: 750rpx;
  height: 10rpx;
  background-color: #f0f0f0;
}
.u-tip {
  width: 750rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.u-list {
  width: 750rpx;
  background-color: #f0f0f0;
  overflow: hidden;
}
.u-item {
  margin-bottom: 10rpx;
}
</style>
