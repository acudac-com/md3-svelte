<script lang="ts">
	import { ModeWatcher, setMode } from 'mode-watcher';
	import '../app.css';
	import { RootLayout } from '$lib';
	import { mdiSettings } from '$lib/icons';

	let { children } = $props();
	setMode('light');
	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
</script>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<!-- <div class="relative h-full w-full">
	{@render children()}
</div> -->

<RootLayout
	navBtns={[
		{ href: '/clickables', icon: mdiSettings, label: 'Clickables' },
		{ href: '/containers', icon: mdiSettings, label: 'Containers' },
		{ href: '/input', icon: mdiSettings, label: 'Input' },
		{ href: '/layout', icon: mdiSettings, label: 'Layout' },
		{ href: '/misc', icon: mdiSettings, label: 'Misc' }
	]}
	{children}
>
	{#snippet start()}
		<p>start</p>
	{/snippet}
	{#snippet end()}
		<p>end</p>
	{/snippet}
</RootLayout>
