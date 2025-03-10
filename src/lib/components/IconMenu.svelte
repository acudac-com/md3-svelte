<script module lang="ts">
	import { Icon, Menu } from '$lib';
	import type { MenuProps } from '$lib/layout/Menu.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { IconSize } from './Icon.svelte';
	import {
		BgColorClass,
		BgContainerColorClass,
		BgHoverColorClass,
		TextColorClass,
		TextOnColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '$lib/colors';
	import type { Image, Svg } from '$lib/icons';

	export interface IconMenuProps extends Omit<MenuProps, 'trigger'> {
		icon: Svg | Image;
		iconType: 'standard' | 'tonal' | 'filled' | 'outlined';
		color: MainColor;
		badge?: boolean | string;
		openIcon?: Svg | Image;
		iconSize: IconSize;
	}
</script>

<script lang="ts">
	let { open = $bindable(false), iconType = 'standard', ...p }: IconMenuProps = $props();
	let defaultColor: MainColor = $derived(iconType == 'tonal' ? 'secondary' : 'primary');
</script>

<Menu bind:open>
	{#snippet trigger()}
		<div
			class={twMerge(
				[
					'h-[40px] w-[40px] rounded-full ease-in-out',
					p.disabled
						? 'text-on-surface/40'
						: iconType == 'outlined'
							? open
								? 'hover:bg-outline/90'
								: 'hover:bg-outline/10'
							: BgHoverColorClass(open && iconType == 'filled', p.color, defaultColor),
					iconType == 'standard'
						? p.disabled
							? ''
							: open
								? TextColorClass(p.color, 'primary')
								: ''
						: iconType == 'tonal'
							? p.disabled
								? 'bg-on-surface/10'
								: open
									? [
											BgContainerColorClass(p.color, 'secondary'),
											TextOnContainerColorClass(p.color, 'secondary')
										]
									: 'bg-surface-container-highest text-on-surface-variant'
							: iconType == 'filled'
								? p.disabled
									? 'bg-on-surface/10'
									: open
										? [BgColorClass(p.color, 'primary'), TextOnColorClass(p.color, 'primary')]
										: ['bg-surface-container-highest', TextColorClass(p.color)]
								: iconType == 'outlined'
									? p.disabled
										? 'border border-on-surface/10 bg-on-surface/10'
										: open
											? 'border border-outline bg-inverse-surface text-inverse-on-surface'
											: 'border border-outline text-on-surface-variant'
									: ''
				],
				p.class
			)}
		>
			<Icon
				icon={open && p.openIcon ? p.icon : p.icon}
				size={p.iconSize ? p.iconSize : '24'}
				badge={p.badge}
			/>
		</div>
	{/snippet}
	{@render p.children()}
</Menu>
