<script lang="ts">
	import ElevatedButton from '$lib/components/buttons/ElevatedButton.svelte';
	import FilledButton from '$lib/components/buttons/FilledButton.svelte';
	import OutlinedButton from '$lib/components/buttons/OutlinedButton.svelte';
	import TextButton from '$lib/components/buttons/TextButton.svelte';
	import TonalButton from '$lib/components/buttons/TonalButton.svelte';
	import Fab from '$lib/components/fabs/Fab.svelte';
	import FilledIconBtn from '$lib/components/iconButtons/FilledIconBtn.svelte';
	import OutlinedIconBtn from '$lib/components/iconButtons/OutlinedIconBtn.svelte';
	import StandardIconBtn from '$lib/components/iconButtons/StandardIconBtn.svelte';
	import TonalIconBtn from '$lib/components/iconButtons/TonalIconBtn.svelte';
	import FittedRow from '$lib/containers/FittedRow.svelte';
	import { mdiSettings, mdiSettingsOutline } from '../internal/icons';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import FittedCol from '$lib/containers/FittedCol.svelte';
	import FabContainer from '$lib/components/fabs/FabContainer.svelte';
	import SmallFab from '$lib/components/fabs/SmallFab.svelte';
	let { children } = $props();

	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
	let toggled = $state(false);
	$inspect(toggled);
	setMode('light');
</script>

<FittedCol class="items-start gap-4 p-4">
	<!-- IconButtons -->
	<FittedRow class="gap-4">
		<StandardIconBtn
			icon={mdiSettingsOutline}
			selectedIcon={mdiSettings}
			tooltip={['This is a', 'long tooltip']}
			bind:selected={toggled}
		/>
		<FilledIconBtn
			icon={mdiSettingsOutline}
			selectedIcon={mdiSettings}
			tooltip={['This is a', 'long tooltip']}
			bind:selected={toggled}
		/>
		<TonalIconBtn
			icon={mdiSettingsOutline}
			selectedIcon={mdiSettings}
			tooltip={['This is a', 'long tooltip']}
			bind:selected={toggled}
		/>
		<OutlinedIconBtn
			icon={mdiSettingsOutline}
			selectedIcon={mdiSettings}
			tooltip={['This is a', 'long tooltip']}
			disabledTitle="Missing permission"
			bind:selected={toggled}
		/>
	</FittedRow>

	<!-- Buttons -->
	<FittedRow class="gap-4">
		<ElevatedButton
			icon={mdiSettings}
			text="Settings"
			onclick={() => {
				alert('hi');
			}}
		/>
		<FilledButton icon={mdiSettings} text="Settings" />
		<TonalButton icon={mdiSettings} text="Settings" />
		<OutlinedButton icon={mdiSettings} text="Settings" />
		<TextButton text="Settings" />
	</FittedRow>

	<!-- FABs -->
	<FittedRow class="gap-4">
		<FabContainer>
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<Fab icon={mdiSettings} tooltip="Settings" />
		</FabContainer>
	</FittedRow>
</FittedCol>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<!-- {@render children()} -->
