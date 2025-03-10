<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { Chip, Dialog, IconButton } from '$lib';
	import type { IconButtonProps } from './IconButton.svelte';

	export interface ChipDialogProps extends Omit<IconButtonProps, 'toggled'> {
		open?: boolean;
		children: Snippet;
		dialogType?: 'fullscreen' | 'scrim';
		class?: string | string[];
	}
</script>

<script lang="ts">
	let { open = $bindable(), dialogType, class: cls, ...p }: ChipDialogProps = $props();
</script>

<IconButton {...p} class={cls} bind:toggled={open} />
<Dialog bind:open>
	{@render p.children()}
</Dialog>
