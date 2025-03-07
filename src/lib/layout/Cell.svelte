<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { GridNumber } from './Grid.svelte';
	import { JustifySelf, type JustifyItems } from '$lib/utils';

	export interface CellProps {
		colStart?: GridNumber;
		colSpan?: GridNumber;
		rowStart?: GridNumber;
		rowSpan?: GridNumber;
		justifySelf?: JustifyItems;
		class?: string | string[];
		children: Snippet;
	}
</script>

<script lang="ts">
	let p: CellProps = $props();

	let gridClasses = $derived.by(() => {
		let classes = [];
		if (p.colStart) {
			switch (p.colStart) {
				case '1':
					classes.push('col-start-1');
					break;
				case '2':
					classes.push('col-start-2');
					break;
				case '3':
					classes.push('col-start-3');
					break;
				case '4':
					classes.push('col-start-4');
					break;
				case '5':
					classes.push('col-start-5');
					break;
				case '6':
					classes.push('col-start-6');
					break;
				case '7':
					classes.push('col-start-7');
					break;
				case '8':
					classes.push('col-start-8');
					break;
				case '9':
					classes.push('col-start-9');
					break;
				case '10':
					classes.push('col-start-10');
					break;
				case '11':
					classes.push('col-start-11');
					break;
				case '12':
					classes.push('col-start-12');
					break;
			}
		}
		if (p.colSpan) {
			switch (p.colSpan) {
				case '1':
					classes.push('col-span-1');
					break;
				case '2':
					classes.push('col-span-2');
					break;
				case '3':
					classes.push('col-span-3');
					break;
				case '4':
					classes.push('col-span-4');
					break;
				case '5':
					classes.push('col-span-5');
					break;
				case '6':
					classes.push('col-span-6');
					break;
				case '7':
					classes.push('col-span-7');
					break;
				case '8':
					classes.push('col-span-8');
					break;
				case '9':
					classes.push('col-span-9');
					break;
				case '10':
					classes.push('col-span-10');
					break;
				case '11':
					classes.push('col-span-11');
					break;
				case '12':
					classes.push('col-span-12');
					break;
			}
		}
		if (p.rowStart) {
			switch (p.rowStart) {
				case '1':
					classes.push('row-start-1');
					break;
				case '2':
					classes.push('row-start-2');
					break;
				case '3':
					classes.push('row-start-3');
					break;
				case '4':
					classes.push('row-start-4');
					break;
				case '5':
					classes.push('row-start-5');
					break;
				case '6':
					classes.push('row-start-6');
					break;
				case '7':
					classes.push('row-start-7');
					break;
				case '8':
					classes.push('row-start-8');
					break;
				case '9':
					classes.push('row-start-9');
					break;
				case '10':
					classes.push('row-start-10');
					break;
				case '11':
					classes.push('row-start-11');
					break;
				case '12':
					classes.push('row-start-12');
					break;
			}
		}
		if (p.rowSpan) {
			switch (p.rowSpan) {
				case '1':
					classes.push('row-span-1');
					break;
				case '2':
					classes.push('row-span-2');
					break;
				case '3':
					classes.push('row-span-3');
					break;
				case '4':
					classes.push('row-span-4');
					break;
				case '5':
					classes.push('row-span-5');
					break;
				case '6':
					classes.push('row-span-6');
					break;
				case '7':
					classes.push('row-span-7');
					break;
				case '8':
					classes.push('row-span-8');
					break;
				case '9':
					classes.push('row-span-9');
					break;
				case '10':
					classes.push('row-span-10');
					break;
				case '11':
					classes.push('row-span-11');
					break;
				case '12':
					classes.push('row-span-12');
					break;
			}
		}
		return classes;
	});
</script>

<div class={twMerge(['relative', gridClasses, JustifySelf(p.justifySelf)], p.class)}>
	{@render p.children()}
</div>
