<script lang="ts">
	import ElevatedButton from '$lib/components/buttons/ElevatedButton.svelte';
	import FilledButton from '$lib/components/buttons/FilledButton.svelte';
	import OutlinedButton from '$lib/components/buttons/OutlinedButton.svelte';
	import TextButton from '$lib/components/buttons/TextButton.svelte';
	import TonalButton from '$lib/components/buttons/TonalButton.svelte';
	import Fab from '$lib/components/fabs/Fab.svelte';
	import PrimaryFab from '$lib/components/fabs/Fab.svelte';
	import SmallFab from '$lib/components/fabs/SmallFab.svelte';
	import FilledIconBtn from '$lib/components/iconButtons/FilledIconBtn.svelte';
	import OutlinedIconBtn from '$lib/components/iconButtons/OutlinedIconBtn.svelte';
	import StandardIconBtn from '$lib/components/iconButtons/StandardIconBtn.svelte';
	import TonalIconBtn from '$lib/components/iconButtons/TonalIconBtn.svelte';
	import FittedRow from '$lib/containers/FittedRow.svelte';
	import { mdiSettings, mdiSettingsOutline } from '../internal/icons';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import LargeFab from '$lib/components/fabs/LargeFab.svelte';
	import FabGroup from '$lib/components/fabs/FabGroup.svelte';
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
	<ElevatedButton icon={mdiSettings}>Settings</ElevatedButton>
	<FilledButton icon={mdiSettings}>Settings</FilledButton>
	<TonalButton icon={mdiSettings}>Settings</TonalButton>
	<OutlinedButton icon={mdiSettings}>Settings</OutlinedButton>
	<TextButton icon={mdiSettings}>Settings</TextButton>
	<Fab manualPlacement icon={mdiSettings} />
	<SmallFab manualPlacement icon={mdiSettings} />
	<LargeFab manualPlacement icon={mdiSettings} />
	<FabGroup
		icon={mdiSettings}
		smallFab1Icon={mdiSettings}
		smallFab2Icon={mdiSettings}
		smallFab2Color="tertiary"
		smallFab2Onclick={() => {
			alert('from tertiary');
		}}
		smallFab3Icon={mdiSettings}
	/>
</FittedRow>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<!-- {@render children()} -->
