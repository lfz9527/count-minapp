<template>
	<view class="avatar-wrap center">
		<image class="avatar-img" src="/static/avatar.png" alt="avatar"/>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	@import '@/styles/index.scss';
	
	.avatar{
		&-wrap{
			overflow: hidden;
			background-color: #ffc2f9;
			position: relative;
			border-radius: 24px 12px 24px 12px;
			width: 60px;
			height: 60px;
		}
		&-img{
			width: 100%;
			height: 100%;
		}
	}
</style>