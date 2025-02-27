<script module lang="ts">
	import type { IconifyIcon } from '@iconify/types';

	export interface InternalFabProps extends FabProps {
		iconSize?: IconSize;
	}
	export interface FabProps {
		icon: IconifyIcon;
		tooltip: string | string[];
		secondary?: Boolean;
		tertiary?: Boolean;
		surface?: Boolean;
		onclick?: (e: Event) => void;
		class?: ClassNameValue;
	}
</script>

<script lang="ts">
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import Icon, { type IconSize } from '../../lib/components/Icon.svelte';
	import { Tooltip } from 'bits-ui';
	import { scale } from 'svelte/transition';
	import Layer from '../../lib/ripples/Layer.svelte';
	let {
		icon,
		tooltip,
		class: cls = undefined,
		secondary,
		tertiary,
		surface,
		iconSize = '24',
		onclick
	}: InternalFabProps = $props();

	let plainToolTipText = $derived.by(() => {
		if (tooltip == undefined) {
			return '';
		}
		if (typeof tooltip === 'string') {
			return tooltip;
		} else {
			return tooltip.join('<br>');
		}
	});
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger
			class={twMerge(
				'relative flex items-center justify-center shadow-l2 ease-in-out hover:shadow-l3',
				secondary
					? 'bg-secondary-container text-on-secondary-container'
					: tertiary
						? 'bg-tertiary-container text-on-tertiary-container'
						: surface
							? 'text-on-surface-container bg-surface-container'
							: 'bg-primary-container text-on-primary-container',
				cls
			)}
			{onclick}
		>
			<Layer />
			<Icon {icon} size={iconSize} />
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content forceMount={true} side="left" align="center" sideOffset={6}>
				{#snippet child({ wrapperProps, props, open })}
					{#if open && plainToolTipText}
						<div {...wrapperProps}>
							<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
								<p
									class="label-small min-h-[24px] items-center rounded-xs bg-inverse-surface px-[8px] text-inverse-on-surface"
								>
									{@html plainToolTipText}
								</p>
							</div>
						</div>
					{/if}
				{/snippet}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
