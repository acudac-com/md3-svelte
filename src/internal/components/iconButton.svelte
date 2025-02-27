<script module lang="ts">
	import type { IconifyIcon } from '@iconify/types';

	export interface IconButtonProps {
		icon: IconifyIcon;
		selected: boolean;
		tooltip: string | string[];
		disabledTitle?: string;
		disabled?: boolean;
		selectedIcon?: IconifyIcon;
		class?: string;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon from '../../lib/components/Icon.svelte';
	import { Tooltip } from 'bits-ui';
	import { scale } from 'svelte/transition';
	import Layer from '../../lib/ripples/Layer.svelte';
	let {
		icon,
		tooltip,
		selected = $bindable(false),
		disabled = false,
		disabledTitle = undefined,
		selectedIcon,
		class: cls = undefined
	}: IconButtonProps = $props();

	let tooltipText = $derived.by(() => {
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
				'relative flex h-[40px] w-[40px] items-center justify-center rounded-full ease-in-out',
				cls
			)}
			title={disabled && disabledTitle ? disabledTitle : undefined}
			{disabled}
			onclick={() => {
				selected = !selected;
			}}
		>
			<Layer />
			<Icon icon={selected && selectedIcon ? selectedIcon : icon} size="24" />
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content forceMount={true} side="top" sideOffset={6}>
				{#snippet child({ wrapperProps, props, open })}
					{#if open}
						<div {...wrapperProps}>
							<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
								<p
									class="label-small min-h-[24px] items-center rounded-xs bg-inverse-surface px-[8px] text-inverse-on-surface"
								>
									{@html tooltipText}
								</p>
							</div>
						</div>
					{/if}
				{/snippet}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
