<script module lang="ts">
	import { JustifyClass, type Justify } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export interface ColProps {
		hFit?: boolean;
		wFull?: boolean;
		gap?: boolean;
		justify?: Justify;
		class?: string | string[];
		desktopOnly?: boolean;
		scroll?: boolean;
		mobileOnly?: boolean;
		children: Snippet;
	}
</script>

<script>
	let p: ColProps = $props();
</script>

<div
	class={twMerge(
		[
			'relative flex flex-col items-center',
			p.hFit ? 'h-fit' : 'h-full',
			p.wFull ? 'w-full' : 'w-fit',
			p.gap ? 'gap-2' : '',
			p.desktopOnly ? 'hidden md:flex' : p.mobileOnly ? 'md:hidden' : '',
			p.scroll ? 'flex-nowrap overflow-auto' : '',
			JustifyClass(p.justify)
		],
		p.class
	)}
>
	{@render p.children()}
</div>
