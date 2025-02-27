<script lang="ts">
	import FullRow from '$lib/containers/FullRow.svelte';
	import ScrollableRow from '$lib/containers/ScrollableRow.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	interface Props {
		children: Snippet;
		class?: ClassNameValue;
	}
	let { children, class: cls }: Props = $props();
</script>

<ScrollableRow class={twMerge('gap-[8px] p-[4px]', cls)}>
	{@render children()}
</ScrollableRow>
