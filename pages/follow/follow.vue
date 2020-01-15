<template>
  <view class="u-follow">
    <!-- 标题 -->
    <view class="u-title">
      <text class="red-6 f-34">大神推荐</text>
      <view class="u-go" @touchstart="goSearch"><text class="iconfont" style="font-size: 36rpx;color: #ccc;">&#xe60b;</text></view>
    </view>

    <!-- 大神列表 -->
    <view class="u-dashen-list">
      <view class="u-dashen-item" v-for="item in hotRecommendor" :key="item.userId" @click="goDashen(item.userId)">
        <view>
          <!-- <image class="u-avatar" :src="item.avatar"></image> -->
          <div class="u-avatar">
            <g-img :src="item.avatar"></g-img>
          </div>
        </view>
        <view class="lines-1">
          <text class="f-26">{{ item.userName }}</text>
        </view>
        <view class="u-hotcount" v-if="item.hotCount">
          <text class="f-22 white-1">{{ item.hotCount }}</text>
        </view>
        <view class="u-combo" v-if="item.continueRedCount">
          <view class="u-combo-left f-20 white-1">{{ item.continueRedCount }}</view>
          <view class="u-combo-right f-20">连红</view>
        </view>
      </view>
    </view>
    
    <!-- 标题 -->
    <view class="u-title">
      <text class="red-6 f-34">我的关注</text>
      <view class="u-go"><text class="iconfont" style="font-size: 36rpx;color: #ccc;opacity: 0;">&#xe60b;</text></view>
    </view>
    
    <!-- 关注列表 -->
    <view class="u-dashen-list">
      <view class="u-dashen-item" v-for="item in focusList" :key="item.userId" @click="goDashen(item.userId)">
        <view>
          <!-- <image class="u-avatar" :src="item.avatar"></image> -->
          <div class="u-avatar">
            <g-img :src="item.avatar"></g-img>
          </div>
        </view>
        <view class="lines-1">
          <text class="f-26">{{ item.userName }}</text>
        </view>
        <view class="u-hotcount" v-if="item.hotCount">
          <text class="f-22 white-1">{{ item.hotCount }}</text>
        </view>
        <view class="u-combo" v-if="item.continueRedCount">
          <view class="u-combo-left f-20 white-1">{{ item.continueRedCount }}</view>
          <view class="u-combo-right f-20">连红</view>
        </view>
      </view>
      <view class="u-dashen-item" @tap="goMyFocus">
        <view>
          <image class="u-avatar-more" src="/static/more.png"></image>
        </view>
        <view class="lines-1">
          <text class="f-26" style="opacity: 0;">更多</text>
        </view>
      </view>
    </view>

    <!-- tab选项 -->
    <view class="u-tab">
      <view class="u-tab-item" :class="{ 'z-active': index === activeIndex }" v-for="(item, index) in ['热门跟单', '人气跟单']" :key="item" @tap="changeTab(index)">
        <text class="f-30" :class="{ 'z-active-text': index === activeIndex }">{{ item }}</text>
      </view>
      <view class="u-tab-line" :style="lineStyle"></view>
    </view>

    <!-- 列表 -->
    <view v-for="(item, index) in dataList" :key="index">
      <view v-show="activeIndex === index" v-for="subItem in item.list" :key="subItem.schemeId" @tap="goOrder(subItem.schemeId)"><follow-item :info="subItem"></follow-item></view>
    </view>

    <!-- 加载提示~ -->
    <view class="u-tip">
      <text class="f-30 grey-6" v-if="dataList[activeIndex].finished">没有更多了</text>
      <text class="f-30 grey-6" v-else-if="!dataList[activeIndex].loading" @click="onloading()">点击或上拉加载更多</text>
      <text class="f-30 grey-6" v-else>加载中...</text>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
import lottery from '@/api/lottery/index.js';
import followItem from './follow-item.vue';
import gImg from '@/components/g-img/index.vue';

export default {
  components: {
    followItem,
    gImg
  },
  data() {
    return {
      hotRecommendor: [],
      focusList: [],
      activeIndex: 0,
      dataList: [
        {
          pageNo: 1,
          pageSize: 10,
          loading: false,
          finished: false,
          list: []
        },
        {
          pageNo: 1,
          pageSize: 10,
          loading: false,
          finished: false,
          list: []
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
          this.$nextTick(() => {
            this.onloading();
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    goMyFocus () {
      uni.navigateTo({
        url: '/pages/follow/focus'
      })
    },
    initList() {
      this.dataList = [
        {
          pageNo: 1,
          pageSize: 10,
          loading: false,
          finished: false,
          list: []
        },
        {
          pageNo: 1,
          pageSize: 10,
          loading: false,
          finished: false,
          list: []
        }
      ];
      this.onloading();
    },
    goOrder(id) {
      uni.navigateTo({
        url: '/pages/case/case?id=' + id
      });
    },
    changeTab(index) {
      this.activeIndex = index;
    },
    // 推荐大神
    getDashen() {
      return lottery.getDashen().then(res => {
        console.log('hotRecommendor', res)
        this.hotRecommendor = res.hotRecommendor.slice(0, 8);
      });
    },
    // 我的关注
    getMyCarePerson () {
      return lottery.getMyCarePerson().then(res => {
        this.focusList = res.result.slice(0, 3);
      });
    },
    goSearch() {
      uni.navigateTo({
        url: '/pages/follow/search'
      });
    },
    goDashen(id) {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + id
      });
    },
    // 刷新
    async onrefresh() {
      try {
        await this.getMyCarePerson();
        await this.getDashen();
        this.initList();
        uni.stopPullDownRefresh();
      } catch (err) {
        uni.showToast({
          title: '刷新失败!',
          icon: 'none'
        });
        uni.stopPullDownRefresh();
      }
    },
    // 加载更多
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
        type: this.activeIndex === 0 ? 7 : 8
      };
      console.log(params)
      lottery
        .getCopyListNew(params)
        .then(res => {
          const list = _.get(res, 'schemeList', []);
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
    }
  },
  onPullDownRefresh() {
    this.onrefresh();
  },
  onReachBottom() {
    this.onloading();
  },
  onShow() {
    this.getDashen()
    this.getMyCarePerson()
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';

.u-follow {
  min-height: 100vh;
  background-color: #f0f0f0;
}

.u-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
  background-color: #fff;
}
.u-go {
  padding: 20rpx 0;
  padding-left: 100rpx;
}
.u-dashen-list {
  padding: 20rpx;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.u-dashen-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 177.5rpx;
  padding: 0 6rpx;
  margin-bottom: 15rpx;
}

.u-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  border: 4rpx solid @yellow-6;
  overflow: hidden;
  transform: scale(1);
}
.u-avatar-more {
  width: 90rpx;
  height: 90rpx;
  border-radius: 90rpx;
}
.u-hotcount {
  position: absolute;
  right: 36rpx;
  top: 0rpx;
  width: 30rpx;
  height: 30rpx;
  border-radius: 30rpx;
  // background-color: #e3423a;
  background-color: red;
  display: flex;
  .g-center();
}

.u-combo {
  position: absolute;
  right: 48.75rpx;
  top: 70rpx;
  width: 80rpx;
  height: 30rpx;
  border-radius: 20rpx;
  border: 1rpx solid red;
  display: flex;
  overflow: hidden;
  .g-center();
  &-left {
    flex-basis: 40%;
    background-color: red;
    display: flex;
    font-weight: bold;
    height: 100%;
    .g-center();
  }
  &-right {
    color: red;
    flex-basis: 60%;
    background-color: #fff;
    display: flex;
    height: 100%;
    .g-center();
  }
}

.u-tab {
  position: relative;
  display: flex;
  width: 750rpx;
  height: 80rpx;
  margin-bottom: 10rpx;
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
.u-tip {
  width: 750rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
