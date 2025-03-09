<script lang="ts">
	import { ModeWatcher, setMode, mode } from 'mode-watcher';
	import '../app.css';
	import { RootLayout, IconButton, Icon } from '$lib';
	import {
		deviconNpm,
		mdiAboutVariant,
		mdiGithub,
		mdiSettings,
		mdiWhiteBalanceSunny,
		solarMoon,
		tablerLayout,
		tablerLayoutFilled,
		uiwComponent
	} from '$lib/icons';

	let { children } = $props();
	setMode('light');
	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';

	let darkMode = $state(false);
	mode.subscribe((m) => {
		if (m == 'dark') {
			darkMode = true;
		} else {
			darkMode = false;
		}
	});
</script>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>

<RootLayout
	railWidth="100px"
	navBtns={[
		{ href: '/setup', icon: mdiAboutVariant, label: 'Setup' },
		{ href: '/components', icon: uiwComponent, label: 'Components' },
		{ href: '/layouts', icon: tablerLayout, toggledIcon: tablerLayoutFilled, label: 'Layouts' }
	]}
	{children}
>
	{#snippet start()}
		<Icon icon={{ src: '/favicon.png', rounded: true, alt: 'Svelte' }} size="40" />
	{/snippet}
	{#snippet end()}
		<IconButton
			icon={deviconNpm}
			tooltip="NPM Registry"
			tooltipSide="right"
			iconSize={28}
			href="https://www.npmjs.com/package/@acudac/md3-svelte"
		/>
		<IconButton
			icon={mdiGithub}
			tooltip="Github Repo"
			tooltipSide="right"
			iconSize={28}
			href="https://github.com/acudac-com/md3-svelte"
		/>
		<IconButton
			icon={darkMode ? mdiWhiteBalanceSunny : solarMoon}
			tooltip={darkMode ? 'Light Mode' : 'Dark Mode'}
			tooltipSide="right"
			iconSize={28}
			onclick={() => {
				if (darkMode) {
					setMode('light');
				} else {
					setMode('dark');
				}
			}}
		/>
	{/snippet}
</RootLayout>
