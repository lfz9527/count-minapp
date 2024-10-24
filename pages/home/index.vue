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
		<view class="block">
			<BaseCard>
				<view class="body">
					<img class="scan" src="/static/scan.png" alt="scan">
					<text>扫码进房间</text>
				</view>
			</BaseCard>
			<BaseCard :padding="false">
				<view class="open">
					<view class="out-border">
						<view class="start-cir">
							<img class="open-img" src="/static/open.png" alt="開">
						</view>
						<img class="create-new-room" src="/static/create-new-room.png" alt="创建新的房间">
					</view>
				</view>
			</BaseCard>
		</view>

		<view class="block">
			<BaseCard>
				<view class="body">
					<text class="room-num">12</text>
					<text>历史房间</text>
				</view>
			</BaseCard>
			<BaseCard>
				<view class="body">
					<text>胜率</text>
					<BaseChart></BaseChart>
				</view>
			</BaseCard>
		</view>

		<view class="footer">
			<view class="footer-content">
				<text class="item">
					免责声明
				</text>
				<text class="item">
					使用说明
				</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import BaseCard from '@/components/baseCard/index.vue'
	import Avatar from './avatar/index.vue'
	import DataPanel from './data-panel/index.vue'
	import BaseChart from '@/components/baseChart/index.vue'
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

	.block {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 20px;


		.scan {
			width: 50px;
			height: 50px;
		}

		.body {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;
			justify-content: center;
			height: 145px;
			color: $default-color;
			font-size: 16px;

			.room-num {
				font-size: 48px;
				line-height: 1;
			}
		}

		.open {
			background: rgb(211, 71, 74);
			padding: 12px;
			height: 145px;

			.out-border {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				border: 1px solid rgb(215, 188, 133);
				height: 100%;
				border-radius: 6px;

				.start-cir {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 58px;
					height: 58px;
					background: rgb(255, 223, 157);
					border-radius: 50%;
					margin-bottom: 16px;

					.open-img {
						width: 20px;
						height: 20px;
					}
				}

				.create-new-room {
					height: 13.5px;
					width: 73.5px;
					// width: 50%;
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		lef: 0;
		right: 0;
		width: 100%;

		&-content {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 48px;
			width: 100%;
			height: 80px;
			font-size: 14px;
			background-color: #fff;
			color: $default-color;
			box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.25);

			.item {
				position: relative;
			}


			.item:not(:last-child)::before {
				content: '';
				position: absolute;
				width: 1px;
				top: 50%;
				right: -24px;
				transform: translateY(-50%);
				height: 14px;
				background-color: $default-color;
			}
		}
	}
</style>