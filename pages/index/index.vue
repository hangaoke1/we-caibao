<template>
  <view class="content">
    <cherry-blossom ref="cherryBlossom"></cherry-blossom>
    <div class="u-main">
      <!-- 语音小助手 -->
      <view style="width: 100%;">
        <textarea
          class="u-voice__textarea"
          v-model="text2Voice.text"
          placeholder="请输入语音文本"
        />
        <view class="mt-5 w-100">
          <luch-audio :src="voiceSrc" :play.sync="audioPlay"></luch-audio>
        </view>
        <u-radio-group class="py-5" v-model="text2Voice.per" shape="circle">
          <u-radio v-for="(item, index) in list" :key="index" :name="item.name" shape="circle">
            {{ item.label }}
          </u-radio>
        </u-radio-group>
        <view class="flex align-center py-2">
          <view class="flex-0 mr-2 text-hui font-s-3">音量</view>
          <u-slider class="flex-1" v-model="text2Voice.vol"></u-slider>
        </view>
        <view class="flex align-center py-2">
          <view class="flex-0 mr-2 text-hui font-s-3">语速</view>
          <u-slider class="flex-1" v-model="text2Voice.spd"></u-slider>
        </view>
        <view class="flex align-center py-2">
          <view class="flex-0 mr-2 text-hui font-s-3">语调</view>
          <u-slider class="flex-1" v-model="text2Voice.pit"></u-slider>
        </view>
      </view>

      <view class="my-2 w-100">
        <u-button class="mr-2 u-voice__btn" type="primary" @click="toVoice">转换人声</u-button>
        <u-button class="u-voice__btn" type="success" plain @click="clipLink">复制链接</u-button>
        <u-button class="u-voice__btn" type="warning" plain @click="downLoad">下载音频</u-button>
      </view>

      <u-section
        class="mt-3"
        color="pink"
        title="轻松一刻"
        sub-color="pink"
        sub-title=""
      ></u-section>

      <div class="u-list py-3">
        <div class="u-list__item" @click="navTo('/pages/game/mouse')">
          <u-image width="120rpx" height="120rpx" src="/static/dadishu.png"></u-image>
          <u-rate
            class="my-1"
            active-color="#fadb14"
            :current="3"
            :count="3"
            :disabled="true"
          ></u-rate>
          <div class="font-s-24 font-weight-bold text-hui2">打地鼠</div>
        </div>
        <div class="u-list__item" @click="navTo('/pages/game/pintu')">
          <u-image width="120rpx" height="120rpx" src="/static/pintu.jpeg"></u-image>
          <u-rate
            class="my-1"
            active-color="#fadb14"
            :current="3"
            :count="3"
            :disabled="true"
          ></u-rate>
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
import cherryBlossom from '@/components/cherryBlossom-yh/cherryBlossom.vue';
import luchAudio from '@/components/lk-audio/lk-audio.vue';

export default {
  components: {
    UniPopup,
    cherryBlossom,
    luchAudio
  },
  data() {
    return {
      audioPlay: false,
      current: {
        poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
        name: '致爱丽丝',
        author: '暂无'
      },
      audioAction: {
        method: 'pause'
      },
      text2Voice: {
        text: '',
        per: '1',
        spd: 30,
        vol: 30,
        pit: 30
      },
      list: [
        { name: '1', label: '小帅' },
        { name: '103', label: '米朵' },
        { name: '111', label: '小萌' },
        { name: '3', label: '逍遥' },
        { name: '4', label: '丫丫' },
        { name: '106', label: '博文' },
        { name: '110', label: '小童' },
        { name: '5', label: '小娇' }
      ],
      voiceSrc: '',
      suggest: '',
      version: '',
      count: 0
    };
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
    downLoad() {
      if (!this.voiceSrc) {
        return uni.showToast({
          title: '无转换视频',
          icon: 'none'
        });
      }
      uni.downloadFile({
        url: this.voiceSrc, //仅为示例，并非真实的资源
        success: e => {
          uni.saveFile({
            tempFilePath: e.tempFilePath,
            success: () => {
              uni.showToast({
                icon: 'none',
                title: '已保存'
              });
            },
            fail: () => {
              uni.showToast({
                icon: 'none',
                title: '保存失败' + e.tempFilePath
              });
            }
          });
        }
      });
    },
    clipLink(e) {
      let downloadUrl = this.voiceSrc;
      if (downloadUrl) {
        uni.setClipboardData({
          data: downloadUrl,
          success(res) {
            uni.showToast({
              title: '复制链接成功',
              icon: 'success',
              duration: 1000
            });
          }
        });
      }
    },
    toVoice() {
      var data = {};
      data.text = this.text2Voice.text;
      data.per = this.text2Voice.per;
      data.spd = parseInt((this.text2Voice.spd / 100) * 15);
      data.vol = parseInt((this.text2Voice.vol / 100) * 15);
      data.pit = parseInt((this.text2Voice.pit / 100) * 15);
      if (!this.text2Voice.text) {
        uni.showToast({
          title: '请输入要转换成语音的文本',
          icon: 'none',
          duration: 1500
        });
        return;
      }
      uni.showLoading({
        title: '语音生成中'
      });
      this.voiceSrc =
        'https://tts.baidu.com/text2audio.mp3?tex=' +
        encodeURIComponent(data.text) +
        '&cuid=baike&amp&lan=ZH&amp&ctp=1&amp&pdt=301&amp&vol=' +
        data.vol +
      '&amp&rate=32&amp&per=' + data.per + '&spd=' + data.spd + '&pit=' + data.pit;

      console.log('>>> link', this.voiceSrc);
      setTimeout(() => {
        uni.showToast({
          title: '转换成功'
        });
      }, 1000);
    },
    navTo(url) {
      uni.navigateTo({
        url
      });
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
    &__item {
      margin-right: 30rpx;
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

.u-voice {
  &__btn {
    width: 100%;
    margin-bottom: 20rpx;
  }
  &__textarea {
    box-sizing: border-box;
    width: 100%;
    font-size: 28rpx;
    padding: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
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
