<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { IconButtonProps } from '../../../internal/components/iconButton.svelte';
	import IconButton from '../../../internal/components/iconButton.svelte';

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
			? 'bg-on-surface/10 text-on-surface/40'
			: selected
				? 'bg-secondary-container text-on-secondary-container hover:bg-on-secondary-container/10 hover:text-on-secondary-container'
				: 'bg-surface-container-highest text-on-surface-variant hover:bg-on-surface-variant/10 hover:text-on-surface-variant',
		cls
	)}
	{disabled}
	bind:selected
	{...rest}
/>
