<template>
	<view class="card-wrap">
		<view class="card-content">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
	@import '@/styles/var.scss';

	.card {
		&-wrap {
			position: relative;
			width: 100%;
		}

		&-content {
			border-radius: 16px;
			background-color: #fff;
			padding: 12px;
		}
	}
</style>