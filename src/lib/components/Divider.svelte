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

<div class={['my-[8px] w-full', !p.fullWidth ? 'px-[16px]' : '']}>
	<hr class={twMerge(['w-full', BorderColorClass(p.color)], p.class)} />
</div>
