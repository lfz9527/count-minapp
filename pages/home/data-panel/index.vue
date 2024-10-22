<template>
	<view class="panel-wrap">
		<view class="data-text flex" :style="{
			flexDirection:flexDir
		}">
			<text>{{props.dataLabel}}</text>
			<text class="num">{{props.dataNum}}</text>
		</view>
		<view class="progress-content">
			<view class="progress-empty" :style="{
				backgroundColor: isRight ? '#EFF3FE': '#FFECF1'
			}"></view>
			<view class="progress-bar" :style="{
				width:processWidth 
			}" :class="[processBarClass]"></view>
		</view>
	</view>
</template>

<script setup lang="ts">
	type startType = 'left' | 'right'
	interface Props {
		startType : startType,
		dataLabel : string,
		dataNum : number | string,
		dataPercent : string | number
	}
	const props = withDefaults(defineProps<Props>(), {
		startType: 'left',
		dataLabel: '赢',
		dataNum: 0,
		dataPercent: 0
	})
	const isRight = props.startType === 'right'
	const flexDir = isRight ? 'row-reverse' : 'unset'
	const processBarClass = isRight ? 'right-st' : 'left-st'
	const processWidth = (Number(props.dataPercent) * 130) + 'px'
</script>

<style lang="scss" scoped>
	@import '@/styles/var.scss';
	@import '@/styles/index.scss';

	.panel-wrap {
		.data-text {
			gap: 10px;

			.num {
				color: $active-color
			}
		}

		.progress {
			&-content {
				margin-top: 8px;
				position: relative;
				width: 130px;
			}

			&-empty {
				width: 100%;
				height: 4px;
				border-radius: 50px;
			}

			&-bar {
				position: absolute;
				top: 50%;
				height: 6px;
				transform: translateY(-50%);
				border-radius: 50px;
			}
		}

		.left-st {
			left: 0;
			background-color: $red-color;
		}

		.right-st {
			right: 0;
			background-color: $active-color;
		}
	}
</style>