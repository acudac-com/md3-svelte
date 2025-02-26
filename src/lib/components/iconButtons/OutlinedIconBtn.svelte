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
		? 'border border-on-surface/10 bg-on-surface/10 text-on-surface/40'
		: selected
			? 'border border-outline bg-inverse-surface text-inverse-on-surface hover:bg-inverse-surface/70'
			: 'border border-outline text-on-surface-variant hover:bg-on-surface-variant/10'}
	{disabled}
	bind:selected
	{...rest}
/>
