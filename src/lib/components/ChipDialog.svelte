<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { Chip, Dialog } from '$lib';
	import type { ChipProps } from './Chip.svelte';

	export interface ChipDialogProps extends Omit<ChipProps, 'toggled'> {
		open?: boolean;
		children: Snippet;
		dialogType?: 'fullscreen' | 'scrim';
		class?: string | string[];
	}
</script>

<script lang="ts">
	let { open = $bindable(false), dialogType, class: cls, ...p }: ChipDialogProps = $props();
</script>

<Chip {...p} class={cls} bind:toggled={open} />
<Dialog bind:open>
	{@render p.children()}
</Dialog>
