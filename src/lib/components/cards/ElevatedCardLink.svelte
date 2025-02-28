<script lang="ts">
	import { page } from '$app/state';
	import Layer from '$lib/ripples/Layer.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
		selected?: boolean;
		disabled?: boolean;
		selectedClass?: ClassNameValue;
		href: string;
	}
	let {
		children,
		class: cls,
		href,
		disabled = false,
		selectedClass,
		selected = $bindable()
	}: Props = $props();

	$effect(() => {
		if (page.route.id == href) {
			selected = true;
		} else {
			selected = false;
		}
	});
</script>

<a
	class={twMerge(
		'relative flex flex-col rounded-md p-[16px] shadow-l1',
		disabled
			? 'bg-surface/40 text-on-surface/40'
			: selected
				? twMerge('bg-primary/30 hover:shadow-l2', selectedClass)
				: 'hover:shadow-l2',
		cls
	)}
	href={disabled ? undefined : href}
>
	{#if !disabled}
		<Layer />
	{/if}
	{@render children()}
</a>
