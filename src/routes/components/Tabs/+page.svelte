<script lang="ts">
	import { Col, Divider, Switch, Tabs } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
	let selected = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Tabs organize content across different screens and views.</p>
	<Divider />

	<Example
		title="Colors"
		code={`<Tabs options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]} bind:selected />
<Tabs
	options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
	color="secondary"
	bind:selected
/>
<Tabs
	options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
	color="tertiary"
	bind:selected
/>
<Tabs
	options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
	color="error"
	bind:selected
/>`}
	>
		<Tabs options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]} bind:selected />
		<Tabs
			options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
			color="secondary"
			bind:selected
		/>
		<Tabs
			options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
			color="tertiary"
			bind:selected
		/>
		<Tabs
			options={[{ text: 'Tab 1' }, { text: 'Tab 2' }, { text: 'Tab 3' }]}
			color="error"
			bind:selected
		/>
	</Example>

	<Example
		title="Icons"
		code={`<Tabs
	options={[
		{ text: 'Tab 1', icon: mdiSettings },
		{ text: 'Tab 2', icon: mdiSettings },
		{ text: 'Tab 3', icon: mdiSettings }
	]}
	bind:selected
/>`}
	>
		<Tabs
			options={[
				{ text: 'Tab 1', icon: mdiSettings },
				{ text: 'Tab 2', icon: mdiSettings },
				{ text: 'Tab 3', icon: mdiSettings }
			]}
			bind:selected
		/>
	</Example>

	<Example
		title="Search Parameters"
		code={`<Tabs
	options={[
		{ text: 'Tab 1', href: '?tab=1' },
		{ text: 'Tab 2', href: '?tab=2' },
		{ text: 'Tab 3', href: '?tab=3' }
	]}
/>`}
	>
		<Tabs
			options={[
				{ text: 'Tab 1', href: '?tab=1' },
				{ text: 'Tab 2', href: '?tab=2' },
				{ text: 'Tab 3', href: '?tab=3' }
			]}
		/>
	</Example>
</Col>
