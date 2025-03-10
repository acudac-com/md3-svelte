<script module lang="ts">
	import type { Svg, Image } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';

	export type IconSize = '18' | '24' | '36' | '48' | '20' | '40' | number;

	export interface IconProps {
		icon: Svg | Image;
		imageSizeCorrection?: number;
		size?: IconSize;
		class?: string | string[];
		badge?: boolean | string;
		badgeClass?: string | string[];
	}
</script>

<script lang="ts">
	let { size = '24', imageSizeCorrection = 6, ...p }: IconProps = $props();
</script>

<div class={twMerge('icon relative h-fit w-fit', p.class)}>
	{#if 'src' in p.icon}
		<img
			class={[p.icon.rounded ? 'rounded-full' : '']}
			width={(Number(size) + imageSizeCorrection).toString()}
			height={(Number(size) + imageSizeCorrection).toString()}
			src={p.icon.src}
			alt={p.icon.alt}
		/>
	{:else}
		<svg
			width={size.toString()}
			height={size.toString()}
			class={p.class}
			viewBox="0 0 {p.icon.width} {p.icon.height}"
		>
			{@html p.icon.body}
		</svg>
	{/if}
	{#if p.badge}
		<div
			class={twMerge(
				[
					'label-small z-1 absolute flex items-center justify-center rounded-full bg-error p-1 text-on-error',
					typeof p.badge == 'string' ? 'h-[16px]' : 'size-[6px]',
					typeof p.badge == 'string' ? 'bottom-3 left-3' : 'right-0 top-0'
				],
				p.badgeClass
			)}
		>
			{#if typeof p.badge == 'string'}
				{p.badge}
			{/if}
		</div>
	{/if}
</div>
