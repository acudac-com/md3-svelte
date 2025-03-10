<script module lang="ts">
	import type { Snippet } from 'svelte';
	import type { ButtonProps } from './Button.svelte';
	import { Dialog } from '$lib';
	import Button from './Button.svelte';

	export interface ButtonDialogProps extends Omit<ButtonProps, 'toggled'> {
		open?: boolean;
		children: Snippet;
		dialogType?: 'fullscreen' | 'scrim';
		class?: string | string[];
	}
</script>

<script lang="ts">
	let { open = $bindable(false), dialogType, class: cls, ...p }: ButtonDialogProps = $props();
</script>

<Button {...p} class={cls} bind:toggled={open} />
<Dialog bind:open type={dialogType}>
	{@render p.children()}
</Dialog>
