<script lang="ts">
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
	class={disabled
		? 'bg-on-surface/10 text-on-surface/40'
		: selected
			? 'bg-primary text-on-primary hover:bg-primary/90'
			: 'bg-surface-container-highest text-primary hover:bg-primary/10'}
	{disabled}
	bind:selected
	{...rest}
/>
