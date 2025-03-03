<script module lang="ts">
	export interface LinearProgressProps {
		percentage?: number;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let p: LinearProgressProps = $props();
</script>

<div class="px-[4px]">
	<div
		class={twMerge(
			[
				'm3-container relative inline-flex h-[4px] w-full min-w-[16px] overflow-hidden rounded-full bg-primary-container'
			],
			p.class
		)}
		role="progressbar"
	>
		<div
			class={['absolute bottom-0 top-0 rounded-full bg-primary', !p.percentage ? 'percent' : '']}
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
