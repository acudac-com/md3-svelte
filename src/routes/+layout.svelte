<script lang="ts">
	import { Avatar, ResponsiveLayout, type NavBtnProps } from '$lib/index.js';
	import { StyleFromScheme } from 'm3-svelte';
	import '../app.css';
	import Icon, { Icons } from '../internal/Icon.svelte';
	let { children } = $props();
	const navButtons: NavBtnProps[] = [
		{
			href: '/about',
			selectedIcon: Icons('mdiAboutVariant'),
			unselectedIcon: Icons('mdiAboutVariant'),
			label: 'About'
		},
		{
			href: '/showcase',
			selectedIcon: Icons('mdiShow'),
			unselectedIcon: Icons('mdiShowOutline'),
			label: 'Showcase'
		}
	];
</script>

<ResponsiveLayout {navButtons}>
	{#snippet settings()}
		<Avatar initials="AA" />
	{/snippet}
	{#snippet content()}
		{@render children()}
	{/snippet}
</ResponsiveLayout>

<StyleFromScheme
	lightScheme={{
		primary: 4279985541,
		onPrimary: 4294967295,
		primaryContainer: 4291029247,
		onPrimaryContainer: 4278209640,
		inversePrimary: 4287614963,
		secondary: 4283326829,
		onSecondary: 4294967295,
		secondaryContainer: 4291945971,
		onSecondaryContainer: 4281747797,
		tertiary: 4284504701,
		onTertiary: 4294967295,
		tertiaryContainer: 4293320447,
		onTertiaryContainer: 4282925668,
		error: 4290386458,
		onError: 4294967295,
		errorContainer: 4294957782,
		onErrorContainer: 4287823882,
		background: 4294376190,
		onBackground: 4279704607,
		surface: 4294376190,
		onSurface: 4279704607,
		surfaceVariant: 4292666345,
		onSurfaceVariant: 4282468429,
		inverseSurface: 4281086260,
		inverseOnSurface: 4293784053,
		outline: 4285626493,
		outlineVariant: 4290824141,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4292270815,
		surfaceBright: 4294376190,
		surfaceContainerLowest: 4294967295,
		surfaceContainerLow: 4293981432,
		surfaceContainer: 4293586674,
		surfaceContainerHigh: 4293257709,
		surfaceContainerHighest: 4292862951,
		surfaceTint: 4279985541
	}}
	darkScheme={{
		primary: 4287614963,
		onPrimary: 4278203721,
		primaryContainer: 4278209640,
		onPrimaryContainer: 4291029247,
		inversePrimary: 4279985541,
		secondary: 4290103767,
		onSecondary: 4280300349,
		secondaryContainer: 4281747797,
		onSecondaryContainer: 4291945971,
		tertiary: 4291412458,
		onTertiary: 4281412684,
		tertiaryContainer: 4282925668,
		onTertiaryContainer: 4293320447,
		error: 4294948011,
		onError: 4285071365,
		errorContainer: 4287823882,
		onErrorContainer: 4294957782,
		background: 4279178263,
		onBackground: 4292862951,
		surface: 4279178263,
		onSurface: 4292862951,
		surfaceVariant: 4282468429,
		onSurfaceVariant: 4290824141,
		inverseSurface: 4292862951,
		inverseOnSurface: 4281086260,
		outline: 4287271575,
		outlineVariant: 4282468429,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4279178263,
		surfaceBright: 4281678397,
		surfaceContainerLowest: 4278849298,
		surfaceContainerLow: 4279704607,
		surfaceContainer: 4280033315,
		surfaceContainerHigh: 4280691502,
		surfaceContainerHighest: 4281414969,
		surfaceTint: 4287614963
	}}
/>
