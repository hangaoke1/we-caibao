<template>
	<view class="u-toto9">
		<view class="u-title">
      <view class="u-title-info f-26">
        <text>第</text>
        <text class="red-6">{{info.issue[0]}}</text>
        <text>期</text>
      </view>
      <view class="u-title-info f-26">
        <text>截止时间</text>
        <text class="red-6">{{info.sellEndTime}}</text>
      </view>
    </view>
    
    <view class="u-list" v-if="info">
      <view class="u-item" v-for="(match, index) in info.data" :key="index">
        <view class="u-left f-26">
          <view>{{index + 1}}</view>
          <view>{{match.matchTime.slice(5, 10)}}</view>
        </view>
        <view class="u-right">
          <view class="u-battle f-30">
            <view style="flex: 1;text-align: right;">{{match.hostName}}</view>
            <view style="flex: 0 0 auto;margin: 0 30rpx;">VS</view>
            <view style="flex: 1;text-align: left;">{{match.guestName}}</view>
          </view>
          <view class="u-choose-list f-30">
            <view class="u-choose-item" :class="{'z-active': match.choose.includes(3)}" @tap="chooseChange(match, 3, index)">胜</view>
            <view class="u-choose-item" :class="{'z-active': match.choose.includes(1)}" @tap="chooseChange(match, 1, index)">平</view>
            <view class="u-choose-item" :class="{'z-active': match.choose.includes(0)}" @tap="chooseChange(match, 0, index)">负</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="u-bottom">
      <view class="u-empty" @tap="resetChoose"><text class="f-30 red-6">清空</text></view>
      <view class="u-center">
        <view class="u-center-top">
          <text class="f-32">已选</text>
          <text class="f-32 red-6">{{ selectCount }}</text>
          <text class="f-32">场</text>
        </view>
        <view class="u-center-bottom"><text class="f-24 grey-6">(页面赔率仅供参考)</text></view>
      </view>
      <view class="u-next" @tap="goNext"><text class="f-30 white-1">下一步</text></view>
    </view>
	</view>
</template>

<script>
  import _ from 'lodash'
  import { mapState, mapActions, mapMutations } from 'vuex';
  // poly=310-3-3-1-1-1-1-1-*-*-*-*-*-3
	export default {
		data() {
			return {};
		},
    computed: {
      ...mapState({
        info: state => state.toto9
      }),
      selectCount() {
        return this.info ? this.info.data.filter(match => match.choose.length).length : 0
      }
    },
    methods: {
      ...mapActions({
        updateToto9: 'updateToto9'
      }),
      ...mapMutations(['updateToto9ChooseByIndex', 'emptyJToto9Choose']),
      goNext () {
        if (this.selectCount < 9) {
          return uni.showToast({
            title: '请至少选择9场比赛',
            icon: 'none'
          })
        }
        if (this.selectCount > 9) {
          return uni.showToast({
            title: '只能选择9场比赛',
            icon: 'none'
          })
        }
        uni.navigateTo({
          url: '/pages/toto9/confirm'
        })
      },
      resetChoose () {
        this.emptyJToto9Choose();
      },
      chooseChange(match, choose, index) {
        let newChoose = []
        if (match.choose.includes(choose)) {
          newChoose = match.choose.filter(item => item != choose);
        } else {
          if (match.choose.length === 0 && this.selectCount === 9) {
            return uni.showToast({
              title: '最多选择9场比赛',
              icon: 'none'
            })
          }
          newChoose = [...match.choose, choose]
        }
        this.updateToto9ChooseByIndex({
          choose: newChoose,
          index
        })
      }
    },
    created() {
      this.updateToto9();
    }
	}
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-toto9 {
  padding-bottom: 300rpx;
  background: #f0f0f0;
}
.u-title {
  padding: 10rpx 0;
  border-bottom: 1rpx solid #ccc;
  background: #fff;
}
.u-title-info {
  text-align: center;
}

.u-item {
  display: flex;
  align-items: center;
  padding: 30rpx 20rpx;
  border-bottom: 1rpx solid #ccc;
  background: #fff;
}
.u-left {
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 10rpx 0;
  width: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: stretch;
}
.u-right {
  flex: 1;
}
.u-battle {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.u-choose-list {
  display: flex;
  justify-content: space-between;
}
.u-choose-item {
  width: 180rpx;
  height: 90rpx;
  border: 1rpx solid #ccc;
  display: flex;
  .g-center();
}

.z-active {
  background: @red-6;
  color: #fff;
  border-color: @red-6;
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
  border-top: 1rpx solid #ccc;
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
</style>
