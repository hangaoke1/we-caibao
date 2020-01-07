<template>
	<text class="iconfont" :style="uStyle"><slot></slot></text>
</template>

<script>
	export default {
		props: {
      size: {
        type: String,
        default: '48'
      },
      color: {
        tpye: String,
        default: '#ccc'
      }
    },
    computed: {
      uStyle () {
        return {
          color: this.color,
          fontSize: this.size + 'rpx'
        }
      }
    }
	}
</script>

<style lang="less">
@import '~@/styles/iconfont.less';
</style>
