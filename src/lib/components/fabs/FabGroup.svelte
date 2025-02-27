<script module lang="ts">
	export interface FabGroupProps {
		icon: IconifyIcon;
		onclick?: (e: Event) => void;
		smallFab1Icon?: IconifyIcon;
		smallFab1Color?: 'primary' | 'secondary' | 'tertiary' | 'surface';
		smallFab1Onclick?: (e: Event) => void;
		smallFab2Icon?: IconifyIcon;
		smallFab2Color?: 'primary' | 'secondary' | 'tertiary' | 'surface';
		smallFab2Onclick?: (e: Event) => void;
		smallFab3Icon?: IconifyIcon;
		smallFab3Onclick?: (e: Event) => void;
		smallFab3Color?: 'primary' | 'secondary' | 'tertiary' | 'surface';
	}
</script>

<script lang="ts">
	import Fab from '../../../internal/components/fab.svelte';
	import type { IconifyIcon } from '@iconify/types';

	let {
		icon,
		smallFab1Icon,
		smallFab1Color,
		smallFab1Onclick,
		smallFab2Icon,
		smallFab2Color,
		smallFab2Onclick,
		smallFab3Icon,
		smallFab3Color,
		smallFab3Onclick,
		onclick
	}: FabGroupProps = $props();
</script>

<Fab class="h-[56px] w-[56px] rounded-lg" {icon} {onclick} />
{#if smallFab1Icon}
	<Fab
		class={'fixed bottom-[96px] right-[24px] z-50 h-[40px] w-[40px] rounded-md'}
		icon={smallFab1Icon}
		color={smallFab1Color}
		onclick={smallFab1Onclick}
	/>
{/if}
{#if smallFab2Icon}
	<Fab
		class={'fixed bottom-[152px] right-[24px] z-50 h-[40px] w-[40px] rounded-md'}
		icon={smallFab2Icon}
		color={smallFab2Color}
		onclick={smallFab2Onclick}
	/>
{/if}
{#if smallFab3Icon}
	<Fab
		class={'fixed bottom-[208px] right-[24px] z-50 h-[40px] w-[40px] rounded-md'}
		icon={smallFab3Icon}
		color={smallFab3Color}
		onclick={smallFab3Onclick}
	/>
{/if}
