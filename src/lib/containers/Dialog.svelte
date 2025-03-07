<script module lang="ts">
	export interface DialogProps {
		open?: boolean;
		children: Snippet;
		trigger?: Snippet;
		type?: 'fullscreen' | 'scrim';
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	let { open = $bindable(false), type = 'scrim', ...p }: DialogProps = $props();
</script>

<Dialog.Root bind:open>
	{#if p.trigger}
		<Dialog.Trigger>
			{@render p.trigger()}
		</Dialog.Trigger>
	{/if}
	<Dialog.Portal>
		<Dialog.Overlay class={['fixed inset-0 z-50 bg-black/80']} />
		<Dialog.Content
			onOpenAutoFocus={(e) => {
				e.preventDefault();
			}}
			class={twMerge(
				[
					'shadow-popover fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-surface p-2 outline-none',
					type == 'scrim' ? 'h-fit w-fit rounded-md' : 'h-screen w-screen'
				],
				p.class
			)}
		>
			{@render p.children()}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
