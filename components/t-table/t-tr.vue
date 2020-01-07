<template>
  <view class="t-tr"><slot></slot></view>
</template>

<script>
export default {
  props: {
    fontSize: String,
    color: String,
    align: String
  },
  inject: ['table'],
  provide() {
    return {
      tr: this
    };
  },
  data() {
    return {
      thBorder: '1',
      borderColor: '#d0dee5'
    };
  },
  created() {
    this.thBorder = this.table.border;
    this.borderColor = this.table.borderColor;
    this.table.childrens.push(this);
  },
  methods: {}
};
</script>

<style>
.t-tr {
  width: 100%;
  display: flex;
}

.t-tr t-th,
.t-tr t-td {
  display: flex;
  flex: 1;
}
</style>
