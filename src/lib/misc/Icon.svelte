<script module lang="ts">
	import type { Svg, Image } from '$lib/icons';

	export type IconSize = '18' | '24' | '36' | '48' | '20' | '40' | number;

	export interface IconProps {
		svg?: Svg;
		image?: Image;
		imageSizeCorrection?: number;
		size?: IconSize;
		class?: string | string[];
		badge?: boolean | string;
		badgeClass?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let { size = '24', imageSizeCorrection = 6, ...p }: IconProps = $props();
	if (!p.image && !p.svg) {
		console.error(new Error('Icon component requires either an image or svg prop'));
	}
</script>

<div class={twMerge('icon relative h-fit w-fit', p.class)}>
	{#if p.image}
		<img
			class={[p.image.rounded ? 'rounded-full' : '']}
			width={(Number(size) + imageSizeCorrection).toString()}
			height={(Number(size) + imageSizeCorrection).toString()}
			src={p.image.src}
			alt={p.image.alt}
		/>
	{:else if p.svg}
		<svg
			width={size.toString()}
			height={size.toString()}
			class={p.class}
			viewBox="0 0 {p.svg.width} {p.svg.height}"
		>
			{@html p.svg.body}
		</svg>
	{/if}
	{#if p.badge}
		<div
			class={twMerge(
				[
					'label-small absolute z-10 flex items-center justify-center rounded-full bg-error p-1 text-on-error',
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
