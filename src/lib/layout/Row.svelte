<script module lang="ts">
	import { JustifyClass, type Justify } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export interface RowProps {
		wFit?: boolean;
		hFull?: boolean;
		gaps?: boolean;
		justify?: Justify;
		class?: string | string[];
		children: Snippet;
	}
</script>

<script>
	let p: RowProps = $props();
</script>

<div
	class={twMerge(
		[
			'relative flex items-center',
			p.wFit ? 'w-fit' : 'w-full',
			p.hFull ? 'h-full' : 'h-fit',
			p.gaps ? 'gap-2' : '',
			JustifyClass(p.justify)
		],
		p.class
	)}
>
	{@render p.children()}
</div>
