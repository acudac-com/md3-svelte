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
				? 'bg-primary text-on-primary hover:bg-primary/90'
				: 'bg-surface-container-highest text-primary hover:bg-primary/10',
		cls
	)}
	{disabled}
	bind:selected
	{...rest}
/>
