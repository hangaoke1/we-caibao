<template>
  <!-- 我的关注列表 -->
  <view class="u-focus">
    <view class="u-empty" v-if="!list.length"><view class="f-36 grey-6">当前暂无关注大神，请选择心仪的大神关注吧～</view></view>
    <view class="u-list" v-if="list.length">
      <view class="u-item" v-for="item in list" :key="item.userId" @click.stop="goDashen(item.userId)">
        <view class="u-header">
          <!-- <image class="u-avatar" :src="item.avatar"></image> -->
          <div class="u-avatar">
            <g-img :src="item.avatar" defaultSrc="/static/portrait.png"></g-img>
          </div>
          <!-- 热门跟单 -->
          <view class="u-hotcount" v-if="item.hotCount">
            <text class="f-22 white-1">{{ item.hotCount }}</text>
          </view>
        </view>
        <view class="u-name f-32">{{ item.userName }}</view>
        <view class="u-hitDetail f-24">{{ item.hitDetail || '0中0' }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import lottery from '@/api/lottery/index.js';
import gImg from '@/components/g-img/index.vue';

export default {
  components: {
    gImg
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    goDashen(id) {
      uni.navigateTo({
        url: '/pages/follow/detail?id=' + id
      });
    },
    // 我的关注
    getMyCarePerson() {
      return lottery.getMyCarePerson().then(res => {
        this.list = res.result || [];
      });
    }
  },
  created() {
    this.getMyCarePerson();
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-focus {
  box-sizing: border-box;
  background: #f0f0f0;
  min-height: 100vh;
  padding-top: 30rpx;
  padding-bottom: 150rpx;
}
.u-empty {
  box-sizing: border-box;
  width: 100%;
  margin-top: 300rpx;
  padding: 0 50px;
  text-align: center;
  line-height: 2;
}
.u-item {
  box-sizing: border-box;
  width: 700rpx;
  border-radius: 10rpx;
  padding: 20rpx;
  margin: 0 auto;
  margin-bottom: 30rpx;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.12);
}
.u-header {
  position: relative;
}
.u-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 80rpx;
  border: 4rpx solid @yellow-6;
  overflow: hidden;
  transform: scale(1);
}
.u-hotcount {
  position: absolute;
  right: 0;
  bottom: 10rpx;
  top: 55rpx;
  width: 30rpx;
  height: 30rpx;
  border-radius: 30rpx;
  background-color: #e3423a;
  display: flex;
  .g-center();
}
.u-name {
  margin-left: 20rpx;
}
.u-hitDetail {
  margin-left: 20rpx;
  padding: 0 20rpx;
  border: 1rpx solid @red-6;
  border-radius: 20rpx;
  color: @red-6;
}
</style>
