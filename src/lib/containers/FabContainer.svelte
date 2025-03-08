<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export interface FabContainerProps {
		children: Snippet;
		class?: string | string[];
	}
</script>

<script lang="ts">
	let p: FabContainerProps = $props();
</script>

<div
	class={twMerge(
		'absolute bottom-[16px] right-[16px] z-50 flex h-fit flex-col items-center gap-[16px]',
		p.class
	)}
>
	{@render p.children()}
</div>
