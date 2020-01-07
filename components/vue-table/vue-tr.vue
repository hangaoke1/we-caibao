<template>
	<view class="vue-tr">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.vue-tr {
  box-sizing: border-box;
  width: 100%;
  display: flex;
}
.vue-tr>>>vue-td {
  box-sizing: border-box;
  height: 100%;
}
.vue-tr>>>g-td {
  box-sizing: border-box;
  height: 100%;
}
</style>
