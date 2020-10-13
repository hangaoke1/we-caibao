<template>
  <view class="content">
    <div class="u-main">
      <u-notice-bar mode="horizontal" :volume-icon="false" :list="list"></u-notice-bar>
      <div class="u-list mt-2">
        <div class="u-list__item"  @click="navTo('/pages/processImage/processImage')">
           <u-image width="120rpx" height="120rpx" src="/static/processImage.jpg"></u-image>
           <u-rate class="my-1" active-color="#fadb14" :current="3" :count="3" :disabled="true"></u-rate>
           <div class="font-s-24 font-weight-bold text-hui2">图片处理</div>
        </div>
        <div class="u-list__item" @click="navTo('/pages/game/mouse')">
           <u-image width="120rpx" height="120rpx" src="/static/dadishu.png"></u-image>
           <u-rate class="my-1" active-color="#fadb14" :current="3" :count="3" :disabled="true"></u-rate>
           <div class="font-s-24 font-weight-bold text-hui2">打地鼠</div>
        </div>
        <div class="u-list__item"  @click="navTo('/pages/game/pintu')">
           <u-image width="120rpx" height="120rpx" src="/static/pintu.jpeg"></u-image>
           <u-rate class="my-1" active-color="#fadb14" :current="3" :count="3" :disabled="true"></u-rate>
           <div class="font-s-24 font-weight-bold text-hui2">拼一拼</div>
        </div>
      </div>
      <view class="u-version mt-5">Powered by Cai Cloud@ (v{{ version }})</view>
    </div>

    <uni-popup ref="popup" type="center">
      <view class="u-form">
        <textarea class="u-textarea" v-model="suggest" placeholder="请输入您的反馈" />
        <button type="primary" @click="handleSubmitSuggest">提交</button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import checkUpdate from '@/lib/checkUpdate.js';
import UniPopup from '@/components/uni-popup/uni-popup.vue';

export default {
  data() {
    return {
      list: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
      suggest: '',
      version: '',
      count: 0
    };
  },
  components: {
    UniPopup
  },
  created() {
    // #ifdef APP-VUE
    plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
      this.version = widgetInfo.version;
    });
    // #endif
  },
  onNavigationBarButtonTap() {
    this.open();
  },
  methods: {
    navTo(url) {
      uni.navigateTo({
        url
      })
    },
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    handleSubmitSuggest() {
      if (!this.suggest) {
        uni.showToast({
          title: '请填写反馈信息',
          icon: 'none'
        });
        return;
      }
      if (this.suggest.indexOf('9527') > -1) {
        checkUpdate(true, this.suggest);
      } else {
        uni.showToast({
          title: '感谢您的反馈',
          icon: 'none'
        });
      }
      this.suggest = '';
      this.close();
    },
    handleClick() {
      if (this.count === 10) {
        checkUpdate(true);
        this.count = 0;
      } else {
        this.count += 1;
      }
    }
  }
};
</script>

<style lang="less">
.content {
  width: 750rpx;
  overflow: hidden;
  .u-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
.u-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 30rpx;
}
.u-form {
  box-sizing: border-box;
  padding: 30rpx;
  background: #fff;
  border-radius: 10rpx;
}

.u-textarea {
  margin-bottom: 30rpx;
  font-size: 24rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.u-version {
  padding: 30rpx;
  text-align: center;
  font-size: 24rpx;
  color: #ccc;
}
</style>
