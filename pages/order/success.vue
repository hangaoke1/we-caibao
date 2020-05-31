<template>
	<view class="u-success">
    <view class="u-icon-wrap"><text class="u-icon iconfont red-6">&#xe62e;</text></view>
    <view class="u-title f-32">购买成功</view>
    <view class="u-tip f-22 grey-6">可以在我的订单页面里时刻关注订单状态哦~</view>
    <view class="u-action f-32 red-6" @click.stop="goHome">返回首页</view>
    <view class="u-action f-32 white-1 red-6-bg" @click.stop="goPublish" v-if="['10058', '10059'].includes(lotteryId)">立即发单</view>
    <view class="u-action f-32 white-1 red-6-bg" @click.stop="goOrder" v-else>查看订单</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schemeId: '',
        single: '',
        lotteryId: ''
			};
		},
    methods: {
      goHome() {
        uni.switchTab({
          url: '/pages/index/index'
        })
      },
      goPublish () {
        uni.navigateTo({
          url: `/pages/order/publish?schemeId=${this.schemeId}&single=${this.single}`
        })
      },
      goOrder () {
        uni.navigateTo({
          url: `/pages/user/order`
        })
      }
    },
    onLoad(options) {
      // 发单id
      this.schemeId = options.schemeId
      // 单倍金额
      this.single = options.single
      // 彩种
      this.lotteryId = options.lotteryId
    },
    onBackPress () {
      uni.switchTab({
        url: '/pages/index/index'
      })
      return true;
    }
	}
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-icon-wrap {
  padding-top: 100rpx;
  width: 750rpx;
  display: flex;
  .g-center();
}
.u-icon {
  font-size: 120rpx;
}
.u-title {
  margin-top: 60rpx;
  margin-bottom: 30rpx;
  text-align: center;
}
.u-tip {
  width: 280rpx;
  margin: 0 auto;
  margin-bottom: 150rpx;
  text-align: center;
}
.u-action {
  width: 400rpx;
  height: 80rpx;
  margin: 0 auto;
  margin-bottom: 20rpx;
  border: 1rpx solid @red-6;
  border-radius: 10rpx;
  display: flex;
  .g-center();
}
</style>
