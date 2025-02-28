<script lang="ts">
	import { page } from '$app/state';
	import Layer from '$lib/ripples/Layer.svelte';
	import type { Snippet } from 'svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: ClassNameValue;
		selected?: boolean;
		selectedClass?: ClassNameValue;
		href: string;
	}
	let { children, class: cls, href, selectedClass, selected = $bindable() }: Props = $props();

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
		'relative flex flex-col rounded-md border border-outline-variant bg-surface p-[16px] hover:shadow-l1',
		selected ? twMerge('border-primary bg-primary/10', selectedClass) : '',
		cls
	)}
	{href}
>
	<Layer />
	{@render children()}
</a>
