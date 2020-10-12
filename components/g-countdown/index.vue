<template>
  <view class="g-countdown">
    <text v-if="hours">{{hours}}</text>
    <text v-if="hours">:</text>
    <text>{{minutes}}</text>
    <text>:</text>
    <text>{{seconds}}</text>
  </view>
</template>

<script>
function genCountDown(time) {
  // 1. 获取小时
  const hours = Math.floor(time / (3600 * 1000));

  // 取模（余数）
  const moduloH = time % (3600 * 1000);

  // 2. 获取分钟
  const minutes = Math.floor(moduloH / (60 * 1000));

  // 取模（余数）
  const moduloM = moduloH % (60 * 1000);

  // 3. 获取秒数
  const seconds = Math.floor(moduloM / 1000);

  return {
    hours,
    minutes: minutes < 10 ? "0" + minutes : minutes,
    seconds: seconds < 10 ? "0" + seconds : seconds,
  };
}
export default {
  props: {
    time: Number,
  },
  data() {
    return {
      hours: 0,
      minutes: "00",
      seconds: "00",
      remain: 0,
      timer: null,
    };
  },
  watch: {
    time(val) {
      this.remain = val;
      this.init();
    },
  },
  methods: {
    init() {
      clearInterval(this.timer);
      this.remain = this.time;
      this.timer = setInterval(() => {
        if (this.remain <= 0) {
          this.remain = 0;
          clearInterval(this.timer);
          this.$emit("finish");
        }
        const res = genCountDown(this.remain);
        this.hours = res.hours;
        this.minutes = res.minutes;
        this.seconds = res.seconds;
        this.remain -= 1000;
      }, 1000);
    },
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.g-countdown {
  font-size: 30rpx;
  color: #f5222d;
}
</style>