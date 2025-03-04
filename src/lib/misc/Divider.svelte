<script module lang="ts">
	export interface DividerProps {
		fullWidth?: boolean;
		color?: OutlineColor;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { OutlineColorClass, type OutlineColor } from '../../theme/colors';

	let p: DividerProps = $props();
</script>

<hr
	class={twMerge(
		['my-[8px]', OutlineColorClass(p.color), !p.fullWidth ? 'mx-[16px]' : ''],
		p.class
	)}
/>
