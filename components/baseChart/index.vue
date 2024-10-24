<template>
	<view>
		<piaoyiProgressBar canvasId="progressCanvas4" :progress="75" backgroundColor="#EFF3FE"
			progressBackgroundColor="#D3474A" :showText="true" textColor="#000000" :textSize="40" :height="40"
			:isCircular="true" :diameter="200">
		</piaoyiProgressBar>
	</view>
</template>

<script setup lang="ts">
	import piaoyiProgressBar from '@/uni_modules/piaoyi-progress-bar/components/piaoyi-progress-bar/piaoyi-progress-bar.vue';
</script>

<style scoped lang="scss">
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>