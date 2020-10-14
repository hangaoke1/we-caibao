<template>
  <view class="u-select flex align-center justify-between p-3 bg-bai mb-1">
    <view>
      <view v-if="info.type === 0" class="text-red">
        <text v-for="(item, index) in info.nums" :key="index" class="mr-2">{{ item.join('') }}</text>
      </view>
      <view v-else class="text-red">
        <text v-for="(item, index) in info.nums" :key="index" class="mr-1">{{ item }}</text>
      </view>
      <view class="font-s-24 mt-1">
        <text>{{ tips[info.type] }}</text>
        <text class="text-red px-1">{{ count }}</text>
        <text>注</text>
        <text class="text-red px-1">{{ money }}</text>
        <text>元</text>
      </view>
    </view>
    <text class="text-red iconfont font-s-4" @click="handleDelete">&#xe726;</text>
  </view>
</template>

<script>
import { factorial } from '@/lib/common.js';
export default {
  props: {
    info: Object
  },
  data() {
    return {
      tips: {
        0: '直选',
        1: '组三',
        2: '组六'
      }
    };
  },
  computed: {
    count() {
      return this.getCount(this.info.type, this.info.nums);
    },
    money() {
      return this.count * 2;
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete');
    },
    getCount(type, list) {
      if (type === 0) {
        return list[0].length * list[1].length * list[2].length;
      }
      if (type === 1) {
        const len = list.length;
        if (len >= 2) {
          return len * (len - 1);
        } else {
          return 0;
        }
      }
      if (type === 2) {
        const len = list.length;
        if (len === 3) {
          return 1;
        }
        if (len > 3) {
          return factorial(len) / factorial(3) / factorial(len - 3);
        } else {
          return 0;
        }
      }
      return 0;
    }
  }
};
</script>

<style></style>
