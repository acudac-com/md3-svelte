<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
	}
	let { children, class: cls } = $props();
</script>

<div
	class={twMerge(
		'relative flex flex-col rounded-md border border-outline-variant bg-surface p-[16px]',
		cls
	)}
>
	{@render children()}
</div>
