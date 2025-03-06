<script lang="ts">
	import { Button, Clickable, Fab, IconButton } from '$lib';
	import SegmentedBtns from '$lib/clickables/SegmentedBtns.svelte';
	import { mdiCheck, mdiSettings } from '$lib/icons';
	let toggled = $state(false);
	let selected: string[] = $state([]);
	$inspect(selected);
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
	<IconButton disabled icon={mdiSettings} type="tonal" href="?asfd=qwer" />
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
			href: '?asdf=true',
			disabled: true
		},
		{ id: 'qwer', icon: mdiSettings, href: '?wer=false' },
		{ id: 'wer', icon: mdiSettings, href: '?wer=true' }
	]}
	multi
	bind:selected
/>
