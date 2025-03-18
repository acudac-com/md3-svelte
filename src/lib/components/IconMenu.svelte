<script module lang="ts">
	import { Icon, IconButton, Menu } from '$lib';
	import type { MenuProps } from '$lib/layout/Menu.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { IconSize } from './Icon.svelte';
	import { type MainColor } from '$lib/colors';
	import type { Image, Svg } from '$lib/icons';

	export interface IconMenuProps extends Omit<MenuProps, 'trigger'> {
		icon: Svg | Image;
		iconType?: 'standard' | 'tonal' | 'filled' | 'outlined';
		color?: MainColor;
		badge?: boolean | string;
		openIcon?: Svg | Image;
		iconSize?: IconSize;
		tooltip?: string | string[];
		tooltipSide?: 'left' | 'right' | 'top' | 'bottom';
		class?: string | string[];
		menuClass?: string | string[];
	}
</script>

<script lang="ts">
	let { open = $bindable(false), ...p }: IconMenuProps = $props();
</script>

<Menu
	bind:open
	class={p.menuClass}
	side={p.side}
	alignment={p.alignment}
	disableAutoClose={p.disableAutoClose}
	priority={p.priority}
	disabled={p.disabled}
	anchorId={p.anchorId}
>
	{#snippet trigger(md)}
		<IconButton
			class={p.class}
			bind:toggled={md.open}
			selectedIcon={p.openIcon}
			icon={p.icon}
			badge={p.badge}
			iconSize={p.iconSize}
			menuAnchorName={md.anchorName}
			color={p.color}
			disabled={p.disabled}
			type={p.iconType}
			tooltip={p.tooltip}
			tooltipSide={p.tooltipSide}
		/>
	{/snippet}
	{@render p.children()}
</Menu>
