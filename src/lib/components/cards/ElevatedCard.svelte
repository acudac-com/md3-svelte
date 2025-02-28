<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
	}
	let { children, class: cls }: Props = $props();
</script>

<div
	class={twMerge(
		'relative flex flex-col rounded-md bg-surface-container-low p-[16px] shadow-l1',
		cls
	)}
>
	{@render children()}
</div>
