<script lang="ts">
	import { Avatar, MainLayout, type NavBtnProps } from '$lib/index.js';
	import { StyleFromScheme } from 'm3-svelte';
	import '../app.css';
	import Icon, { Icons } from '../internal/Icon.svelte';
	let { children } = $props();
	const navButtons: NavBtnProps[] = [
		{
			href: '/about',
			icon: Icons('mdiAboutVariant'),
			label: 'About'
		},
		{
			href: '/showcase',
			selectedIcon: Icons('mdiShow'),
			icon: Icons('mdiShowOutline'),
			label: 'Showcase'
		}
	];
</script>

<MainLayout {navButtons}>
	{#snippet settings()}
		<Avatar initials="AA" />
	{/snippet}
	{#snippet content()}
		{@render children()}
	{/snippet}
</MainLayout>

<StyleFromScheme
	lightScheme={{
		primary: 4283128978,
		onPrimary: 4294967295,
		primaryContainer: 4292600319,
		onPrimaryContainer: 4281484408,
		inversePrimary: 4290037247,
		secondary: 4284046962,
		onSecondary: 4294967295,
		secondaryContainer: 4292731385,
		onSecondaryContainer: 4282467929,
		tertiary: 4285813872,
		onTertiary: 4294967295,
		tertiaryContainer: 4294956792,
		onTertiaryContainer: 4284104024,
		error: 4290386458,
		onError: 4294967295,
		errorContainer: 4294957782,
		onErrorContainer: 4287823882,
		background: 4294637823,
		onBackground: 4279900961,
		surface: 4294637823,
		onSurface: 4279900961,
		surfaceVariant: 4293059308,
		onSurfaceVariant: 4282730063,
		inverseSurface: 4281282614,
		inverseOnSurface: 4294045943,
		outline: 4285888128,
		outlineVariant: 4291151568,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4292532704,
		surfaceBright: 4294637823,
		surfaceContainerLowest: 4294967295,
		surfaceContainerLow: 4294243322,
		surfaceContainer: 4293848564,
		surfaceContainerHigh: 4293453807,
		surfaceContainerHighest: 4293124841,
		surfaceTint: 4283128978
	}}
	darkScheme={{
		primary: 4290037247,
		onPrimary: 4279905632,
		primaryContainer: 4281484408,
		onPrimaryContainer: 4292600319,
		inversePrimary: 4283128978,
		secondary: 4290889181,
		onSecondary: 4280954946,
		secondaryContainer: 4282467929,
		onSecondaryContainer: 4292731385,
		tertiary: 4293049307,
		onTertiary: 4282525505,
		tertiaryContainer: 4284104024,
		onTertiaryContainer: 4294956792,
		error: 4294948011,
		onError: 4285071365,
		errorContainer: 4287823882,
		onErrorContainer: 4294957782,
		background: 4279374616,
		onBackground: 4293124841,
		surface: 4279374616,
		onSurface: 4293124841,
		surfaceVariant: 4282730063,
		onSurfaceVariant: 4291151568,
		inverseSurface: 4293124841,
		inverseOnSurface: 4281282614,
		outline: 4287598746,
		outlineVariant: 4282730063,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4279374616,
		surfaceBright: 4281874751,
		surfaceContainerLowest: 4279045651,
		surfaceContainerLow: 4279900961,
		surfaceContainer: 4280164133,
		surfaceContainerHigh: 4280887855,
		surfaceContainerHighest: 4281611322,
		surfaceTint: 4290037247
	}}
/>
