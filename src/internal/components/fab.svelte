<script module lang="ts">
	import type { IconifyIcon } from '@iconify/types';

	export interface FabProps {
		icon: IconifyIcon;
		plainTooltip?: string | string[];
		class?: string;
		iconSize?: IconSize;
		manualPlacement?: Boolean;
		color?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'none';
		onclick?: (e: Event) => void;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon, { type IconSize } from '../../lib/components/Icon.svelte';
	import { Tooltip } from 'bits-ui';
	import { scale } from 'svelte/transition';
	import Layer from '../../lib/ripples/Layer.svelte';
	let {
		icon,
		plainTooltip,
		class: cls = undefined,
		color = 'primary',
		iconSize = '24',
		manualPlacement = false,
		onclick
	}: FabProps = $props();

	let plainToolTipText = $derived.by(() => {
		if (plainTooltip == undefined) {
			return '';
		}
		if (typeof plainTooltip === 'string') {
			return plainTooltip;
		} else {
			return plainTooltip.join('<br>');
		}
	});
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger
			class={twMerge(
				'relative flex items-center justify-center shadow-l2 ease-in-out hover:shadow-l3',
				color == 'primary'
					? 'bg-primary-container text-on-primary-container'
					: color == 'secondary'
						? 'bg-secondary-container text-on-secondary-container'
						: color == 'tertiary'
							? 'bg-tertiary-container text-on-tertiary-container'
							: color == 'surface'
								? 'text-on-surface-container bg-surface-container'
								: '',
				!manualPlacement ? 'fixed bottom-[16px] right-[16px] z-50' : '',
				cls
			)}
			{onclick}
		>
			<Layer />
			<Icon {icon} size={iconSize} />
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content forceMount={true} class="rounded-none">
				{#snippet child({ wrapperProps, props, open })}
					{#if open && plainToolTipText}
						<div class="mt-2" {...wrapperProps}>
							<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
								<p
									class="label-small min-h-[24px] items-center bg-inverse-surface px-[8px] text-inverse-on-surface"
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
