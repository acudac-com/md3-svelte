<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export interface ContainerProps {
		level?: 'lowest' | 'low' | 'high' | 'highest';
		class?: string | string[];
		wFull?: boolean;
		hFit?: boolean;
		scroll?: boolean;
		children: Snippet;
	}
</script>

<script lang="ts">
	let p: ContainerProps = $props();

	let bgClass = $derived.by(() => {
		switch (p.level) {
			case 'lowest':
				return 'bg-surface-container-lowest';
			case 'low':
				return 'bg-surface-container-low';
			case 'high':
				return 'bg-surface-container-high';
			case 'highest':
				return 'bg-surface-container-highest';
			default:
				return 'bg-surface-container';
		}
	});
</script>

<div
	class={twMerge(
		[
			'relative flex h-full flex-col rounded-lg p-2 md:rounded-xl md:p-3',
			p.wFull ? 'w-full max-w-full' : '',
			p.hFit ? 'h-fit' : 'h-full',
			bgClass,
			p.scroll ? 'flex-nowrap overflow-scroll' : ''
		],
		p.class
	)}
>
	{@render p.children()}
</div>
