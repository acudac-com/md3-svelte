<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { Dialog, Fab } from '$lib';
	import type { FabProps } from './Fab.svelte';

	export interface FabDialogProps extends Omit<FabProps, 'toggled'> {
		open?: boolean;
		children: Snippet;
		dialogType?: 'fullscreen' | 'scrim';
		class?: string | string[];
	}
</script>

<script lang="ts">
	let { open = $bindable(false), dialogType, class: cls, ...p }: FabDialogProps = $props();
</script>

<Fab {...p} class={cls} bind:toggled={open} />
<Dialog bind:open>
	{@render p.children()}
</Dialog>
