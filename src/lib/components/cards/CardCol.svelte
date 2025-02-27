<script lang="ts">
	import FullCol from '$lib/containers/FullCol.svelte';
	import ScrollableCol from '$lib/containers/ScrollableCol.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	interface Props {
		children: Snippet;
		class?: ClassNameValue;
	}
	let { children, class: cls }: Props = $props();
</script>

<ScrollableCol class={twMerge('gap-[8px] p-[4px]', cls)}>
	{@render children()}
</ScrollableCol>
