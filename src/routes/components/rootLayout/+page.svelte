<script lang="ts">
	import { Col } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<Example
		title="Standard"
		code={`<RootLayout
	railWidth="100px"
	navBtns={[
		{ 
			href: '/setup',
			icon: mdiAboutVariant,
			label: 'Setup'
		},
		{
			href: '/components',
			icon: uiwComponent,
			label: 'Components'
		},
		{
			href: '/layouts',
			icon: tablerLayout,
			toggledIcon: tablerLayoutFilled,
			label: 'Layouts'
		}
	]}
	{children}
>
	{#snippet start()}
		<Icon 
			icon={{ src: '/favicon.png', rounded: true, alt: 'Svelte' }}
			size="40" />
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
</RootLayout>`}
	>
		<p>
			The root layout of this website uses RootLayout. The code shown for this example is identical
			to the code in the root layout of this website.
		</p>
	</Example>
</Col>
