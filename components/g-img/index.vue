<template>
  <div class="g-img" :style="imgStyle">
    <image
      class="g-img__real"
      ref="img"
      :mode="mode"
      :src="url"
      :lazy-load="true"
      @error="handleError"
      @load="handleLoad"
    ></image>
    <view
      class="g-img__preload"
      :style="{ backgroundColor: defaultColor }"
      :class="loaded ? 'loaded' : ''"
    ></view>
  </div>
</template>

<script>
import { init } from './cache.js';
export default {
  name: 'g-img',
  props: {
    width: [Number, String],
    height: [Number, String],
    radius: {
      type: [String, Number],
      default: 0
    },
    defaultSrc: {
      type: String,
      default: '/static/default.png'
    },
    src: String,
    mode: {
      tpye: String,
      default: 'scaleToFill'
    },
    defaultColor: {
      type: String,
      default: '#eee'
    }
  },
  data() {
    return {
      url: '',
      loaded: false
    };
  },
  computed: {
    imgStyle() {
      if (!this.width) {
        return '';
      }
      return `width: ${this.width}rpx;height: ${this.height}rpx;border-radius: ${this.radius}rpx;`;
    }
  },
  watch: {
    src: {
      handler(v) {
        init(v, res => {
          this.url = res;
        });
      },
      immediate: true
    }
  },
  created() {
    this.url = this.src;
  },
  methods: {
    handleLoad() {
      this.loaded = true;
    },
    handleError(e) {
      this.url = this.defaultSrc;
    }
  }
};
</script>
<style lang="less" scoped>
.g-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.g-img__real {
  width: 100%;
  height: 100%;
}

.g-img__preload {
  background-color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.4s linear;
}

.loaded {
  opacity: 0;
}
</style>
