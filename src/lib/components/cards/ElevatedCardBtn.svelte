<script lang="ts">
	import Layer from '$lib/ripples/Layer.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
		disabled?: boolean;
		onclick?: (e: Event) => void;
	}
	let { children, class: cls, disabled = false, onclick }: Props = $props();
</script>

<button
	class={twMerge(
		'relative flex flex-col rounded-md p-[16px] text-start shadow-l1',
		disabled ? 'bg-surface/40 text-on-surface/40' : 'hover:shadow-l2',
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
