<template>
  <view>
    {{JSON.stringify(list)}}
    <hello @change="handleChange" :item="list[0].matches[0]"></hello>
  </view>
</template>

<script>
import hello from './hello.vue';
export default {
  components: {
    hello
  },
  data() {
    return {
      list: [
        {
          id: 1,
          matches: [
            {
              id: '1001',
              choose: [1]
            },
            {
              id: '1002',
              choose: [2]
            },
            {
              id: '1003',
              choose: [3]
            }
          ]
        },
        {
          id: 2,
          matches: []
        },
        {
          id: 3,
          matches: []
        }
      ]
    };
  },
  methods: {
    handleChange(choose) {
      this.list[0].matches[0].choose = choose;
    }
  }
};
</script>

<style lang="less" scoped></style>
