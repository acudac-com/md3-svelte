<script lang="ts">
	import { Button, Card, Chip, Clickable, Fab, IconButton, Tabs } from '$lib';
	import SegmentedBtns from '$lib/clickables/SegmentedBtns.svelte';
	import { mdiCheck, mdiSettings } from '$lib/icons';
	let toggled = $state(false);
	let selected: string[] = $state([]);
	let tab: string = $state('');
	$inspect(tab);
</script>

<p class="display-small">Clickable</p>
<Clickable
	bind:toggled
	tooltip="tooltip"
	class={['bg-primary-container', toggled ? 'bg-primary' : '']}>Clickable</Clickable
>
<p class="display-small">Icon Buttons</p>
<div class="flex gap-2">
	<IconButton bind:toggled icon={mdiSettings} color="error" />
	<IconButton icon={mdiSettings} type="tonal" href="?asfd=qwer" />
	<IconButton bind:toggled icon={mdiSettings} type="filled" />
	<IconButton bind:toggled icon={mdiSettings} type="outlined" tooltip={['asdf', 'awer']} />
</div>

<p class="display-small">Buttons</p>
<div class="flex gap-2">
	<Button prependIcon={mdiSettings} text="Settings" type="elevated" />
	<Button type="filled" text="Settings" appendIcon={mdiCheck} href="/" />
	<Button prependIcon={mdiSettings} type="tonal" text="Settings" />
	<Button disabled prependIcon={mdiSettings} type="outlined" text="Settings" />
	<Button prependIcon={mdiSettings} type="text" text="Settings" />
</div>

<p class="display-small">Fab</p>
<div class="flex gap-2">
	<Fab icon={mdiSettings} />
	<Fab icon={mdiSettings} color="tertiary" type="small" />
	<Fab icon={mdiSettings} color="error" type="large" />
</div>

<SegmentedBtns
	options={[
		{
			id: 'asdf',
			icon: mdiSettings,
			tooltip: 'Settings',
			href: '?asdf=true'
		},
		{ id: 'qwer', icon: mdiSettings, href: '?wer=false' },
		{ id: 'wer', icon: mdiSettings, href: '?wer=true' }
	]}
	color="error"
	multi
	bind:selected
/>

<p class="display-small">Chips</p>
<div class="flex gap-2">
	<Chip elevated text="Chip" href="?chip=secondary" icon={mdiSettings} />
	<Chip
		text="Chip"
		color="error"
		onclick={() => {
			alert('hi');
		}}
	/>
</div>

<div class="bg-surface-container">
	<p class="display-small">Tabs</p>
	<Tabs
		bind:selected={tab}
		options={[
			{ text: 'Tab 1', icon: mdiSettings, href: '?tab=1' },
			{ text: 'Tab 2', icon: mdiSettings, href: '?tab=2' },
			{ text: 'Tab 3', icon: mdiSettings, href: '?tab=3' },
			{ text: 'Tab 4', icon: mdiSettings, href: '?tab=4' },
			{ text: 'Tab 5', icon: mdiSettings, href: '?tab=5' }
		]}
	/>
	<p>some content</p>
</div>

<div class="mt-2 flex gap-4 bg-surface-container">
	<p class="display-small mr-4">Cards</p>
	<Card href="?asdf">Elevated</Card>
	<Card href="?qwer" type="filled">Filled</Card>
	<Card href="?zxcv" type="outlined">Outlined</Card>
</div>
