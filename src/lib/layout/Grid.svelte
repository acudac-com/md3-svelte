<script module lang="ts">
	import { JustifyItemsClass, type JustifyItems } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface GridBaseProps {
		gaps?: boolean;
		class?: string | string[];
		justifyItems?: JustifyItems;
		children: Snippet;
	}
	export type GridNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
	interface GridColsProps extends GridBaseProps {
		cols: GridNumber;
	}
	type GridProps = GridColsProps;
</script>

<script lang="ts">
	let p: GridProps = $props();
	let gridClass = $derived.by(() => {
		switch (p.cols) {
			case '1':
				return 'grid-cols-1';
			case '2':
				return 'grid-cols-2';
			case '3':
				return 'grid-cols-3';
			case '4':
				return 'grid-cols-4';
			case '5':
				return 'grid-cols-5';
			case '6':
				return 'grid-cols-6';
			case '7':
				return 'grid-cols-7';
			case '8':
				return 'grid-cols-8';
			case '9':
				return 'grid-cols-9';
			case '10':
				return 'grid-cols-10';
			case '11':
				return 'grid-cols-11';
			case '12':
				return 'grid-cols-12';
		}
	});
</script>

<div
	class={twMerge(
		['grid', p.gaps ? 'gap-2' : '', JustifyItemsClass(p.justifyItems), gridClass],
		p.class
	)}
>
	{@render p.children()}
</div>
