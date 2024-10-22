<template>
	<view class="page-content">
		<BaseCard>
			<view class="top between">
				<view class="left center">
					<Avatar />
					<text class="name">财神爷</text>
				</view>
				<view class="right">
					编辑个人资料
				</view>
			</view>
			<view class="data-panel between">
				<DataPanel dataNum='99' dataPercent='0.5' />
				<DataPanel startType="right" dataLabel='输' dataNum='1' dataPercent='0.2' />
			</view>
		</BaseCard>
	</view>
</template>

<script setup lang="ts">
	import BaseCard from '@/components/baseCard/index.vue'
	import Avatar from './avatar/index.vue'
	import DataPanel from './data-panel/index.vue'
</script>

<style lang="scss" scoped>
	@import '@/styles/var.scss';
	@import '@/styles/index.scss';

	.top {
		.left {
			gap: 10px;

			.name {
				color: $black-color;
				font-size: 20;
				font-weight: bold;
			}
		}

		.right {
			font-size: 14px;
			color: $default-color;
		}
	}

	.data-panel {
		margin-top: 40px;
	}
</style>