<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BorderColorClass, type OutlineColor } from '../colors';

	export interface DividerProps {
		fullWidth?: boolean;
		color?: OutlineColor;
		class?: string | string[];
	}
</script>

<script lang="ts">
	let p: DividerProps = $props();
</script>

<hr
	class={twMerge(
		['my-[8px] w-full', BorderColorClass(p.color), !p.fullWidth ? 'mx-[16px]' : ''],
		p.class
	)}
/>
