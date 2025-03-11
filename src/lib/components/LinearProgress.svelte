<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BgColorClass, BgContainerColorClass, type MainColor } from '../colors';

	export interface LinearProgressProps {
		percentage?: number;
		color?: MainColor;
		class?: string | string[];
		innerClass?: string | string[];
	}
</script>

<script lang="ts">
	let p: LinearProgressProps = $props();
</script>

<div class="w-full px-[4px]">
	<div
		class={twMerge(
			[
				'm3-container relative inline-flex h-[4px] w-full min-w-[16px] overflow-hidden rounded-full',
				BgContainerColorClass(p.color, 'primary')
			],
			p.class
		)}
		role="progressbar"
	>
		<div
			class={twMerge(
				[
					'absolute bottom-0 top-0 rounded-full',
					BgColorClass(p.color, 'primary'),
					!p.percentage ? 'percent' : ''
				],
				p.innerClass
			)}
			style:width={p.percentage ? p.percentage.toString() + '%' : undefined}
		></div>
	</div>
</div>

<style>
	.m3-container {
		min-width: 8rem;
	}
	.percent {
		animation: progress infinite 1.5s ease-out;
		width: 50%;
	}
	@keyframes progress {
		0% {
			left: -50%;
		}
		100% {
			left: 125%;
		}
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
	@media screen and (forced-colors: active) {
		.percent {
			background-color: selecteditem;
		}
	}
</style>
