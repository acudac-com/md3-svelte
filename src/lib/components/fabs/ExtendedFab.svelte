<script lang="ts">
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import Fab from '../../../internal/components/fab.svelte';
	import type { FabProps } from '../../../internal/components/fab.svelte';
	import type { IconifyIcon } from '@iconify/types';
	import Layer from '$lib/ripples/Layer.svelte';
	import { Tooltip } from 'bits-ui';
	import Icon from '../Icon.svelte';
	import { scale } from 'svelte/transition';

	interface Props {
		icon: IconifyIcon;
		text: string;
		minimizeOnMobile?: boolean;
		secondary?: Boolean;
		tertiary?: Boolean;
		surface?: Boolean;
		onclick?: (e: Event) => void;
		class?: ClassNameValue;
	}
	let {
		icon,
		text,
		minimizeOnMobile,
		class: cls = undefined,
		secondary,
		tertiary,
		surface,
		onclick
	}: Props = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={300}>
		<Tooltip.Trigger
			class={twMerge(
				'label-large relative mt-[8px] flex h-[56px] items-center justify-center rounded-lg  shadow-l2 ease-in-out hover:shadow-l3',
				minimizeOnMobile
					? 'w-[56px] md:w-fit md:min-w-[80px] md:pl-[16px] md:pr-[24px]'
					: 'min-w-[80px] pl-[16px] pr-[24px]',
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
			<Icon {icon} size="24" class={minimizeOnMobile ? 'md:mr-[8px]' : 'mr-[8px]'} />
			<span class={minimizeOnMobile ? 'hidden md:flex' : ''}>{text}</span>
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content
				class={minimizeOnMobile ? 'md:hidden' : 'hidden'}
				forceMount={true}
				side="left"
				align="center"
				sideOffset={6}
			>
				{#snippet child({ wrapperProps, props, open })}
					{#if open}
						<div {...wrapperProps}>
							<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
								<p
									class="label-small min-h-[24px] items-center rounded-xs bg-inverse-surface px-[8px] text-inverse-on-surface"
								>
									{@html text}
								</p>
							</div>
						</div>
					{/if}
				{/snippet}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
