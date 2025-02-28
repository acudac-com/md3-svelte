<script lang="ts">
	import Layer from '$lib/ripples/Layer.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
		onclick?: (e: Event) => void;
		disabled?: boolean;
	}
	let { children, class: cls, onclick, disabled }: Props = $props();
</script>

<button
	class={twMerge(
		'relative flex flex-col rounded-md bg-surface-container-highest p-[16px] text-start',
		disabled ? 'bg-surface-variant/40 text-on-surface-variant/40' : 'hover:shadow-l1',
		cls
	)}
	{disabled}
	{onclick}
>
	{#if !disabled}
		<Layer />
	{/if}
	{@render children()}
</button>
