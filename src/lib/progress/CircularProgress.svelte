<script module lang="ts">
	export interface CircularProgressProps {
		color?: MainColor;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { StrokeColorClass, type MainColor } from '../../theme/colors';

	let p: CircularProgressProps = $props();
</script>

<svg
	viewBox="0 0 40 40"
	xmlns="http://www.w3.org/2000/svg"
	class={twMerge('size-[40px]', StrokeColorClass(p.color), p.class)}
	role="progressbar"
>
	<circle
		cx="20"
		cy="20"
		r="16"
		stroke-width="4"
		stroke-dasharray="125.66 125.66"
		stroke-linecap="round"
		fill="none"
	/>
</svg>

<style>
	svg {
		animation: progressRotate 2.2s infinite linear;
	}
	circle {
		transition: all 200ms;
		animation: progressSize 2.2s infinite linear;
	}
	@keyframes progressRotate {
		0% {
			transform: rotate(0deg);
		}
		40% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(1080deg);
		}
	}
	@keyframes progressSize {
		0% {
			stroke-dashoffset: 125.66;
		}
		40% {
			stroke-dashoffset: 62.83;
		}
		100% {
			stroke-dashoffset: 125.66;
		}
	}
</style>
