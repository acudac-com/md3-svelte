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
	import ExtendedFab from '$lib/components/fabs/ExtendedFab.svelte';
	import FullRow from '$lib/containers/FullRow.svelte';
	import SegmentedBtns from '$lib/components/segmentedButtons/SegmentedBtns.svelte';
	import ElevatedCard from '$lib/components/cards/ElevatedCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import FilledCard from '$lib/components/cards/FilledCard.svelte';
	import CardRow from '$lib/components/cards/CardRow.svelte';
	import OutlinedCard from '$lib/components/cards/OutlinedCard.svelte';
	let { children } = $props();

	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
	let toggled = $state(false);
	$inspect(toggled);
	setMode('light');
	let selected = $state([]);
	$inspect(selected);
</script>

<FittedCol class="items-start gap-4 p-4">
	<!-- IconButtons -->
	<FittedRow class="gap-4">
		<StandardIconBtn
			badge
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
	<FullRow class="h-[200px] gap-4 bg-tertiary-container">
		<p class="headline-large p-4">Parent of FabContainer</p>
		<FabContainer>
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<Fab icon={mdiSettings} tooltip="Settings" />
			<ExtendedFab icon={mdiSettings} text="Settings" minimizeOnMobile />
		</FabContainer>
	</FullRow>

	<!-- Segemented buttons -->
	<SegmentedBtns
		options={[
			{ id: 'listView', icon: mdiSettings, text: 'Settings' },
			{ id: 'blockView', icon: mdiSettings },
			{ id: 'gridView', icon: mdiSettings, disabled: true }
		]}
		bind:selected
		multi
	/>

	<!-- Cards -->
	<CardRow>
		<ElevatedCard class="min-w-[300px] grow">
			<p class="title-large">Elevated card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</ElevatedCard>
		<FilledCard class="w-[300px] shrink-0">
			<p class="title-large">Filled card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</FilledCard>
		<OutlinedCard class="w-[300px] shrink-0">
			<p class="title-large">Outlined card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</OutlinedCard>
	</CardRow>
</FittedCol>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<!-- {@render children()} -->
