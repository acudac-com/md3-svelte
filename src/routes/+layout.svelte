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
	import {
		mdiCheck,
		mdiSettings,
		mdiSettingsOutline,
		pngDaniel,
		pngGoogleMeet
	} from '../internal/icons';
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
	import CardCol from '$lib/components/cards/CardCol.svelte';
	import ElevatedCardLink from '$lib/components/cards/ElevatedCardLink.svelte';
	import FilledCardLink from '$lib/components/cards/FilledCardLink.svelte';
	import OutlinedCardLink from '$lib/components/cards/OutlinedCardLink.svelte';
	import ElevatedCardBtn from '$lib/components/cards/ElevatedCardBtn.svelte';
	import FilledCardBtn from '$lib/components/cards/FilledCardBtn.svelte';
	import OutlinedCardBtn from '$lib/components/cards/OutlinedCardBtn.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import FullCol from '$lib/containers/FullCol.svelte';
	import AssistChip from '$lib/components/chips/AssistChip.svelte';
	import FilterChip from '$lib/components/chips/FilterChip.svelte';
	import SuggestionChip from '$lib/components/chips/SuggestionChip.svelte';
	import InputChip from '$lib/components/chips/InputChip.svelte';
	import FilterChipGroup from '$lib/components/chips/FilterChipGroup.svelte';
	import Clickable from '../internal/components/clickable.svelte';
	let { children } = $props();

	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
	let toggled = $state(false);
	// $inspect(toggled);
	setMode('light');
	let selected = $state([]);
	// $inspect(selected);
	let filter = $state('');
	// $inspect(filter);
	let onHref = $state(false);
	$inspect('onHref', onHref);
	let hasQueryParam = $state(false);
	$inspect('hasQueryParam', hasQueryParam);
</script>

<Clickable href="/cardlink" bind:onHref>href</Clickable>
<Clickable queryParam="dogs=true" bind:hasQueryParam>queryParam</Clickable>
<FittedCol class="items-start gap-4 p-4">
	<!-- IconButtons -->
	<FittedRow class="gap-4">
		<StandardIconBtn
			badge
			icon={{ ...pngGoogleMeet, rounded: true }}
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
		<OutlinedButton icon={mdiSettings} text="Settings" href="/asdf" />
		<TextButton text="Settings" />
	</FittedRow>

	<!-- FABs -->
	<OutlinedCard class="h-[200px]">
		<p class="headline-large p-2">Parent of FabContainer</p>
		<Checkbox checked />
		<FittedRow class="gap-1 px-2">
			<AssistChip
				text="Assist"
				icon={mdiSettings}
				onclick={() => {
					alert('hi');
				}}
			/>
			<FilterChip text="Filter" icon={pngDaniel} />
			<InputChip
				text="Filter"
				icon={pngDaniel}
				onclick={() => {
					console.log('onclick');
				}}
				onremove={() => {
					console.log('onremove');
				}}
			/>
			<SuggestionChip text="Filter" icon={mdiSettings} />
		</FittedRow>
		<FilterChipGroup
			chips={[
				{ icon: mdiSettings, text: 'settings' },
				{ icon: mdiSettings, text: 'settings2' }
			]}
			bind:selected={filter}
		/>
		<FabContainer>
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<SmallFab icon={mdiSettings} tooltip="Settings" />
			<Fab icon={mdiSettings} tooltip="Settings" />
		</FabContainer>
	</OutlinedCard>

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

	<!-- Card links -->
	<CardRow>
		<ElevatedCardLink class="min-w-[300px] grow" href="/cardlink">
			<p class="title-large">Elevated card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</ElevatedCardLink>
		<FilledCardLink class="w-[300px] grow" href="/cardlink">
			<p class="title-large">Filled card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</FilledCardLink>
		<OutlinedCardLink class="w-[300px] shrink-0" href="/cardlink">
			<p class="title-large">Outlined card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</OutlinedCardLink>
	</CardRow>

	<!-- Card buttons -->
	<CardRow>
		<ElevatedCardBtn
			class="min-w-[300px] grow"
			onclick={() => {
				alert('hi');
			}}
			disabled
		>
			<p class="title-large">Elevated card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</ElevatedCardBtn>
		<FilledCardBtn class="w-[300px] grow">
			<p class="title-large">Filled card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</FilledCardBtn>
		<OutlinedCardBtn class="w-[300px] shrink-0">
			<p class="title-large">Outlined card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
			<p class="label-medium">This is a card</p>
		</OutlinedCardBtn>
	</CardRow>
</FittedCol>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<!-- {@render children()} -->
