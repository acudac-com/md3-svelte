<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { IconButtonProps } from './iconButton.svelte';
	import IconButton from './iconButton.svelte';

	let {
		class: cls = undefined,
		disabled,
		selected = $bindable(false),
		...rest
	}: IconButtonProps = $props();
</script>

<IconButton
	class={twMerge(
		disabled
			? 'text-on-surface/40'
			: selected
				? 'text-primary hover:bg-primary/10'
				: 'hover:bg-on-surface-variant/10 hover:text-on-surface-variant',
		cls
	)}
	{disabled}
	bind:selected
	{...rest}
/>
