<script module lang="ts">
	import { JustifyClass } from '$lib/utils';
	import type { Snippet } from 'svelte';

	export interface ColProps {
		hFit?: boolean;
		wFull?: boolean;
		gap?: boolean;
		justify?: boolean | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';
		class?: string | string[];
		children: Snippet;
	}
</script>

<script>
	let p: ColProps = $props();
</script>

<div
	class={[
		'relative flex flex-col items-center',
		p.hFit ? 'h-fit' : 'h-full',
		p.wFull ? 'w-full' : 'w-fit',
		p.gap ? 'gap-2' : '',
		JustifyClass(p.justify)
	]}
>
	{@render p.children()}
</div>
