<template>
  <view class="u-index">
    <swiper
      class="u-banner"
      :indicator-dots="true"
      :circular="true"
      :autoplay="autoplay"
      interval="3000"
    >
      <swiper-item v-for="item in hotInfo.appBanners" :key="item.id">
        <g-img
          width="750"
          height="400"
          :src="item.bigImg || '/static/banner_default.png'"
          @click.native="handleBanner(item)"
          defaultSrc="/static/banner_default.png"
        ></g-img>
      </swiper-item>
    </swiper>

    <!-- 开奖/直播 -->
    <view class="u-res">
      <g-img width="444" height="160" src="/static/home/ai.png" @tap.native="goAi"></g-img>
      <g-img width="250" height="160" src="/static/home/bifen.png" @tap.native="goLottery"></g-img>
    </view>

    <!-- 公告 -->
    <view class="u-notice">
      <text class="iconfont gold-6 f-36">&#xe6f2;</text>
      <swiper
        class="u-notice-list"
        :vertical="true"
        :autoplay="false"
        :circular="true"
        interval="2000"
      >
        <swiper-item v-for="item in hotInfo.headlines" :key="item.content" @tap="goGendan(item)">
          <view class="u-notice-list-item">
            <text class="u-notice-list-item-text">{{ item.username }}: 发布了</text>
            <text class="u-notice-list-item-text" style="color: #f5222d;">
              {{ genNoticeMoney(item) }}
            </text>
            <text class="u-notice-list-item-text">的方案</text>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <!-- 彩票入口 -->
    <view class="u-cp">
      <view class="u-cp-item" v-for="cp in cpList" :key="cp.lotteryId" @tap="handleCpClick(cp)">
        <image class="u-cp-icon" :src="iconMap[cp.lotteryId]"></image>
        <view class="u-cp-info">
          <view>
            <text class="u-cp-name">{{ cpMap[cp.lotteryId] }}</text>
          </view>
          <view>
            <text class="u-cp-tip">{{ cp.message }}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="u-out-wrap" v-if="hotOrder">
      <view class="u-title" @tap="goFollow">
        <view><text class="f-36 grey-6 f-bold">跟热门 稳收米</text></view>
        <view class="u-more">
          <text class="f-36 grey-6">更多</text>
          <text class="iconfont grey-6 f-36">&#xe60d;</text>
        </view>
      </view>
      <view class="u-wrap">
        <we-order :info="hotOrder"></we-order>
      </view>
    </view>
    <view class="u-out-wrap" v-if="PopularOrder">
      <view class="u-title" @tap="goFollow">
        <view><text class="f-36 grey-6 f-bold">跟大神 易中奖</text></view>
        <view class="u-more">
          <text class="f-36 grey-6">更多</text>
          <text class="iconfont grey-6 f-36">&#xe60d;</text>
        </view>
      </view>
      <view class="u-wrap">
        <we-order :info="PopularOrder"></we-order>
      </view>
    </view>

    <view class="u-dialog" v-if="show">
      <view class="u-mask" @tap="hideDialog()"></view>
      <image
        @tap="goOrder"
        class="u-content"
        src="/static/zhongjiang.jpeg"
        style="width: 500rpx;height: 507rpx;"
      ></image>
    </view>
  </view>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions, mapMutations } from 'vuex';
import lottery from '@/api/lottery/index.js';
import { openUrl } from '@/util/index.js';
import { map as cpMap } from '@/lib/lottery.js';
import { get } from '@/storage/index.js';
import gImg from '@/components/g-img/index.vue';
import weOrder from './order.vue';
import iconfontMixin from '../../mixins/iconfont.js';

export default {
  mixins: [iconfontMixin],
  components: {
    gImg,
    weOrder
  },
  data() {
    return {
      autoplay: false,
      show: false,
      hotOrder: '',
      PopularOrder: '',
      hotInfo: '',
      iconMap: {
        10026: '/static/home/daletou_icon@3x.png',
        10039: '/static/home/shengfucai_icon@3x.png',
        10040: '/static/home/renxuan9_icon@3x.png',
        10058: '/static/home/lanqiu_icon@3x.png',
        10059: '/static/home/zuqiu_icon@3x.png',
        10108: '/static/home/11xuan5_icon@3x.png'
      },
      cpMap
    };
  },
  computed: {
    cpList() {
      if (this.hotInfo) {
        return _.get(this, 'hotInfo.list', []).filter(item => !!this.cpMap[item.lotteryId]);
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapMutations(['emptyJczq', 'emptyJclq']),
    goAi () {
      openUrl({url: '/static/ai/index.html', showTitle: false })
    },
    goOrder() {
      this.hideDialog();
      uni.navigateTo({
        url: '/pages/user/order'
      });
    },
    openDialog() {
      this.show = true;
    },
    hideDialog() {
      this.show = false;
    },
    goFollow() {
      uni.switchTab({
        url: '/pages/follow/follow'
      });
    },
    // 获取热门单/人气单
    getHotOrder() {
      lottery
        .getCopyListNew({
          fetchSize: 1,
          firstRow: 0,
          type: 7
        })
        .then(res => {
          const list = _.get(res, 'schemeList', []);
          this.hotOrder = list[0];
        });
      lottery
        .getCopyListNew({
          fetchSize: 1,
          firstRow: 0,
          type: 8
        })
        .then(res => {
          const list = _.get(res, 'schemeList', []);
          this.PopularOrder = list[0];
        });
    },
    // 前往跟单页面
    goGendan(item) {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + item.userId
      });
    },
    // 生成公告内容
    genNoticeMoney(item) {
      // 1000.0元
      return item.money.split('.')[0] + '元';
    },
    // 轮播图点击
    handleBanner(item) {
      if (item.h5Url) {
        openUrl({url: item.h5Url});
      }
    },
    // 比赛开奖
    goLottery() {
      uni.navigateTo({
        url: '/pages/lottery/lottery'
      });
    },
    // 获取热门列表
    getList() {
      return lottery
        .lotteryListHot({
          listType: 1
        })
        .then(res => {
          // console.log('hotInfo', res)
          this.hotInfo = res;
          if (this.hotInfo.winningFlag) {
            uni.$emit('winLottery');
            this.openDialog();
          }
        });
    },
    //点击彩票入口
    handleCpClick(cp) {
      if (cp.isStop == 1) {
        return uni.showToast({
          title: '暂未开售',
          icon: 'none'
        });
      }

      // 篮球
      if (cp.lotteryId == 10058) {
        this.emptyJclq();
        return uni.navigateTo({
          url: '/pages/jclq/jclq'
        });
      }

      // 足球
      if (cp.lotteryId == 10059) {
        this.emptyJczq();
        return uni.navigateTo({
          url: '/pages/jczq/jczq'
        });
      }

      // 11选5
      if (cp.lotteryId == 10108) {
        return uni.navigateTo({
          url: '/pages/js11x5/js11x5'
        });
      }

      // 胜负彩
      if (cp.lotteryId === 10039) {
        return uni.navigateTo({
          url: '/pages/toto14/toto14'
        });
      }

      // 任选九
      if (cp.lotteryId === 10040) {
        return uni.navigateTo({
          url: '/pages/toto9/toto9'
        });
      }

      uni.showToast({
        title: '暂未开放',
        icon: 'none'
      });
    },
    // 前往比分直播
    goBifen() {
      return uni.switchTab({
        url: '/pages/bifen/bifen'
      });
    }
  },
  onShow() {
    console.log(get('SESSION'));
    this.getList();
    this.getHotOrder();
    this.autoplay = true;
  },
  onHide() {
    this.autoplay = false;
  },
  async onPullDownRefresh() {
    try {
      await this.getList();
      await this.getHotOrder();
      uni.stopPullDownRefresh();
    } catch (e) {
      uni.stopPullDownRefresh();
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-banner {
  width: 750rpx;
  height: 400rpx;
}

.u-res {
  box-sizing: border-box;
  width: 750rpx;
  padding: 0 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40rpx;
}

.u-notice {
  margin-top: 30rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 700rpx;
  margin-left: 25rpx;
  padding: 0 20rpx;
  background: #eee;
}

.u-notice-list {
  box-sizing: border-box;
  flex: 1;
  height: 80rpx;
  border-top: 1rpx solid #f0f0f0;
  border-bottom: 1rpx solid #f0f0f0;
}
.u-notice-list-item {
  box-sizing: border-box;
  height: 80rpx;
  padding-left: 20rpx;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &-text {
    font-size: 30rpx;
    color: #999999;
  }
}

.u-cp {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40rpx;
  border-bottom: 1rpx solid #f0f0f0;
}
.u-cp-item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 375rpx;
  height: 200rpx;
  border: 1rpx solid #f0f0f0;
  border-right: none;
  border-bottom: none;
}
.u-cp-icon {
  margin: 0 10rpx 0 50rpx;
  flex: 0 0 auto;
  width: 100rpx;
  height: 100rpx;
  border-radius: 100rpx;
}
.u-cp-info {
  margin-left: 10rpx;
}
.u-cp-name {
  font-size: 30rpx;
  color: #333333;
}
.u-cp-tip {
  font-size: 22rpx;
  color: #999999;
}

.u-title {
  box-sizing: border-box;
  padding: 20rpx 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.u-more {
  display: flex;
  align-items: center;
}

.u-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.u-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.u-content {
  position: absolute;
  left: 125rpx;
  top: 450rpx;
  border-radius: 20rpx;
}
.u-out-wrap {
  padding: 20rpx;
}
.u-wrap {
  border: 15rpx solid #eee;
}
</style>
