<template>
	<view class="vue-table" :style="iStyle">
		<slot />
	</view>
</template>

<script>
	export default {
		props: {
			border: {
				type: String,
				default: '1'
			},
			borderColor: {
				type: String,
				default: '#f0f0f0'
			},
      width: {
        tpye: [String, Number],
        default: 750
      }
		},
		provide() {
			return {
				table: this
			};
		},
		data() {
			return {};
		},
    computed: {
      iStyle () {
        return `
          width: ${this.width}rpx;
          border-color: ${this.borderColor};
        `
      }
    },
		created() {
			this.childrens = [];
			this.index = 0;
		},
		methods: {}
	};
</script>

<style scoped>
	.vue-table {
    box-sizing: border-box;
		width: 100%;
		border: 1rpx #f0f0f0 solid;
		border-left: none;
		border-top: none;
	}

	.vue-table>>>vue-tr {
    box-sizing: border-box;
		display: flex;
    width: 100%;
	}
  .vue-table>>>g-tr {
    box-sizing: border-box;
  	display: flex;
    width: 100%;
  }
</style>
