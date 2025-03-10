<script module lang="ts">
	import { JustifyClass, type Justify } from '$lib/utils';
	import type { Snippet } from 'svelte';

	export interface ColProps {
		hFit?: boolean;
		wFull?: boolean;
		gaps?: boolean;
		justify?: Justify;
		class?: string | string[];
		desktopOnly?: boolean;
		scroll?: boolean;
		mobileOnly?: boolean;
		children: Snippet;
	}
</script>

<script>
	import { twMerge } from 'tailwind-merge';
	let p: ColProps = $props();
</script>

<div
	class={twMerge(
		[
			'relative flex flex-col items-center',
			p.hFit ? 'h-fit' : 'h-full',
			p.wFull ? 'w-full' : 'w-fit',
			p.gaps ? 'gap-2' : '',
			p.desktopOnly ? 'hidden md:flex' : p.mobileOnly ? 'md:hidden' : '',
			p.scroll ? 'flex-nowrap overflow-auto' : '',
			JustifyClass(p.justify)
		],
		p.class
	)}
>
	{@render p.children()}
</div>
