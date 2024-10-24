<template>
	<view class="card-wrap">
		<view :class="{
			'card-content':true,
			'is-padding':props.padding
		}">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface Props {
		padding : boolean
	}
	const props = withDefaults(defineProps<Props>(), {
		padding: true
	})
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
			overflow: hidden;
		}
	}

	.is-padding {
		padding: 12px;
	}
</style>