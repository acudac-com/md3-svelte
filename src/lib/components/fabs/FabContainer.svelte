<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	let { children, class: cls }: { children: Snippet; class?: ClassNameValue } = $props();
</script>

<div
	class={twMerge(
		'fixed bottom-[16px] right-[16px] z-50 flex h-fit flex-col items-center gap-[16px]',
		cls
	)}
>
	{@render children()}
</div>
