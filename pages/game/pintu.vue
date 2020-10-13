<template>
	<view>
		<PinTu :url="url"></PinTu>
	</view>
</template>

<script>
  import PinTu from '@/components/pinTu/pinTu.vue';
	export default {
    components: {
      PinTu
    },
    data() {
      return {
        url: 'http://cdn.test.lfwellness.cn/pintu/xinpin.jpg'
      }
    }
	}
</script>
