<script module lang="ts">
	import { Icon } from '$lib';
	import { type Image, type Svg } from '$lib/icons';
	import Col from '$lib/layout/Col.svelte';
	import { twMerge } from 'tailwind-merge';
	import Clickable from './Clickable.svelte';

	export interface NavBtnProps {
		icon: Image | Svg;
		toggledIcon?: Image | Svg;
		label: string;
		href: string;
		disabled?: boolean;
		badge?: boolean | string;
		class?: string | string[];
	}
</script>

<script lang="ts">
	let p: NavBtnProps = $props();
	let toggled = $state(false);

	let icon = $derived(toggled && p.toggledIcon ? p.toggledIcon : p.icon);
</script>

<Col justify="center">
	<Clickable
		class={twMerge(
			[
				'h-[32px] w-[64px] rounded-full',
				p.disabled ? '' : toggled ? 'bg-secondary-container' : 'hover:bg-secondary-container'
			],
			p.class
		)}
		disabled={p.disabled}
		href={p.href}
		bind:toggled
	>
		<Icon
			{icon}
			badge={p.badge}
			class={[
				toggled
					? 'text-on-secondary-container'
					: p.disabled
						? 'text-on-surface/30'
						: 'text-on-surface'
			]}
		/>
	</Clickable>
	<p
		class={[
			'label-small text-center',
			p.disabled ? 'text-on-surface/30' : toggled ? 'text-on-surface' : 'text-on-surface-variant'
		]}
	>
		{p.label}
	</p>
</Col>
