<script module lang="ts">
	import type { ClickableProps } from './Clickable.svelte';
	import type { Image, Svg } from '$lib/icons';
	import Clickable from './Clickable.svelte';
	import { twMerge } from 'tailwind-merge';
	import {
		BgColorClass,
		BgContainerColorClass,
		BgHoverColorClass,
		TextColorClass,
		TextOnColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '../colors';
	import { Icon } from '$lib';

	export interface IconButtonProps extends Omit<ClickableProps, 'children' | 'tooltipSide'> {
		icon: Svg | Image;
		selectedIcon?: Svg | Image;
		badge?: boolean | string;
		type?: 'standard' | 'filled' | 'tonal' | 'outlined';
		color?: MainColor;
	}
</script>

<script lang="ts">
	let {
		toggled = $bindable(false),
		class: cls,
		type = 'standard',
		...p
	}: IconButtonProps = $props();

	let defaultColor: MainColor = $derived(type == 'tonal' ? 'secondary' : 'primary');
</script>

<Clickable
	class={twMerge(
		[
			'h-[40px] w-[40px] rounded-full ease-in-out',
			p.disabled
				? 'text-on-surface/40'
				: type == 'outlined'
					? toggled
						? 'hover:bg-outline/90'
						: 'hover:bg-outline/10'
					: BgHoverColorClass(toggled && type == 'filled', p.color, defaultColor),
			type == 'standard'
				? p.disabled
					? ''
					: toggled
						? TextColorClass(p.color, 'primary')
						: ''
				: type == 'tonal'
					? p.disabled
						? 'bg-on-surface/10'
						: toggled
							? [
									BgContainerColorClass(p.color, 'secondary'),
									TextOnContainerColorClass(p.color, 'secondary')
								]
							: 'bg-surface-container-highest text-on-surface-variant'
					: type == 'filled'
						? p.disabled
							? 'bg-on-surface/10'
							: toggled
								? [BgColorClass(p.color, 'primary'), TextOnColorClass(p.color, 'primary')]
								: ['bg-surface-container-highest', TextColorClass(p.color)]
						: type == 'outlined'
							? p.disabled
								? 'border border-on-surface/10 bg-on-surface/10'
								: toggled
									? 'border border-outline bg-inverse-surface text-inverse-on-surface'
									: 'border border-outline text-on-surface-variant'
							: ''
		],
		cls
	)}
	bind:toggled
	tooltipSide="top"
	{...p}
>
	<Icon icon={toggled && p.selectedIcon ? p.selectedIcon : p.icon} size="24" badge={p.badge} />
</Clickable>
