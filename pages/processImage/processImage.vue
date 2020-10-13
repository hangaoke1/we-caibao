<template>
  <view class="content">
    <div class="u-main">
      <u-button type="success" class="u-upload" @tap="upload" :ripple="true">上传</u-button>
      <u-button type="primary" class="u-save" @tap="save" :ripple="true">保存</u-button>
      <u-cell-group style="width: 500rpx;"><u-field v-model="waterText" label="水印文本" placeholder="请填写水印文本"></u-field></u-cell-group>
      <image-cropper :waterText="waterText" :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
      <image :src="cropFilePath" mode="aspectFit" style="width: 400rpx;"></image>
    </div>
  </view>
</template>

<script>
import checkUpdate from '@/lib/checkUpdate.js';
import ImageCropper from '@/components/invinbg-image-cropper/invinbg-image-cropper.vue';

export default {
  data() {
    return {
      waterText: '',
      suggest: '',
      version: '',
      tempFilePath: '',
      cropFilePath: '',
      count: 0
    };
  },
  components: {
    ImageCropper
  },
  created() {
    // #ifdef APP-VUE
    plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
      this.version = widgetInfo.version;
    });
    // #endif
  },
  methods: {
    handleClick() {
      if (this.count === 10) {
        checkUpdate(true);
        this.count = 0;
      } else {
        this.count += 1;
      }
    },
    save() {
      if (!this.cropFilePath) {
        uni.showToast({
          title: '请先上传图片'
        });
        return;
      }
      uni.saveImageToPhotosAlbum({
        filePath: this.cropFilePath,
        success: function() {
          uni.showToast({
            title: '保存成功'
          });
        }
      });
    },
    upload() {
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: res => {
          this.tempFilePath = res.tempFilePaths.shift();
        }
      });
    },
    confirm(e) {
      this.tempFilePath = '';
      this.cropFilePath = e.detail.tempFilePath;
    },
    cancel() {
      console.log('canceled');
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 750rpx;
  overflow: hidden;
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

.u-title {
  margin-top: 30rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(69, 90, 100, 0.6);
  text-align: center;
}

.u-upload,
.u-save {
  margin-top: 20rpx;
  width: 500rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
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

.u-water {
  margin: 20rpx 0;
  border: 1rpx solid #eee;
  padding: 5rpx 10rpx;
  font-size: 28rpx;
}
</style>
