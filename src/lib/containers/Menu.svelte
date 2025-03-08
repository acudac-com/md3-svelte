<script module lang="ts">
	export interface MenuProps {
		trigger: Snippet;
		children: Snippet;
		open?: boolean;
		side?: 'top' | 'bottom' | 'right' | 'left';
		sideOffset?: number;
		class?: string | string[];
		disabled?: boolean;
	}
</script>

<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

	let { open = $bindable(), sideOffset = 4, ...p }: MenuProps = $props();
</script>

<DropdownMenu.Root bind:open>
	<DropdownMenu.Trigger class={p.class} disabled={p.disabled}>
		{@render p.trigger()}
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content {sideOffset} side={p.side}>
			{@render p.children()}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
