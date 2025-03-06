<script module lang="ts">
	export interface DividerProps {
		fullWidth?: boolean;
		color?: OutlineColor;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BorderColorClass, type OutlineColor } from '../colors';

	let p: DividerProps = $props();
</script>

<hr
	class={twMerge(['my-[8px]', BorderColorClass(p.color), !p.fullWidth ? 'mx-[16px]' : ''], p.class)}
/>
