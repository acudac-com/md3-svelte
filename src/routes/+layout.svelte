<script lang="ts">
	import FilledIconBtn from '$lib/components/iconButtons/FilledIconBtn.svelte';
	import OutlinedIconBtn from '$lib/components/iconButtons/OutlinedIconBtn.svelte';
	import StandardIconBtn from '$lib/components/iconButtons/StandardIconBtn.svelte';
	import TonalIconBtn from '$lib/components/iconButtons/TonalIconBtn.svelte';
	import FittedRow from '$lib/containers/FittedRow.svelte';
	import { mdiSettings, mdiSettingsOutline } from '$lib/icons';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	let { children } = $props();

	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
	let toggled = $state(false);
	$inspect(toggled);
	setMode('light');
</script>

<FittedRow class="gap-4">
	<StandardIconBtn
		icon={mdiSettingsOutline}
		selectedIcon={mdiSettings}
		plainTooltip={['This is a', 'long tooltip']}
		bind:selected={toggled}
	/>
	<FilledIconBtn
		icon={mdiSettingsOutline}
		selectedIcon={mdiSettings}
		plainTooltip={['This is a', 'long tooltip']}
		bind:selected={toggled}
	/>
	<TonalIconBtn
		icon={mdiSettingsOutline}
		selectedIcon={mdiSettings}
		plainTooltip={['This is a', 'long tooltip']}
		bind:selected={toggled}
	/>
	<OutlinedIconBtn
		icon={mdiSettingsOutline}
		selectedIcon={mdiSettings}
		plainTooltip={['This is a', 'long tooltip']}
		disabledTitle="Missing permission"
		bind:selected={toggled}
	/>
</FittedRow>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
{@render children()}
