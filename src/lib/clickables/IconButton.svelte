<script module lang="ts">
	import type { ClickableProps } from './Clickable.svelte';
	import type { Image, Svg } from '$lib/icons';

	export interface IconButtonProps extends Omit<ClickableProps, 'children' | 'tooltipSide'> {
		icon: Svg | Image;
		selectedIcon?: Svg | Image;
		badge?: boolean | string;
		type?: 'standard' | 'filled' | 'tonal' | 'outlined';
	}
</script>

<script lang="ts">
	import Clickable from './Clickable.svelte';
	import { Icon } from '$lib';
	import { twMerge } from 'tailwind-merge';

	let {
		toggled = $bindable(false),
		class: cls,
		type = 'standard',
		...p
	}: IconButtonProps = $props();
</script>

<Clickable
	class={twMerge(
		[
			'h-[40px] w-[40px] ease-in-out',
			p.disabled
				? 'text-on-surface/40'
				: toggled
					? 'text-primary hover:bg-primary/10'
					: 'hover:bg-on-surface-variant/10 hover:text-on-surface-variant'
		],
		cls
	)}
	bind:toggled
	tooltipSide="top"
	{...p}
>
	<Icon icon={toggled && p.selectedIcon ? p.selectedIcon : p.icon} size="24" badge={p.badge} />
</Clickable>
