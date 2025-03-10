<script lang="ts">
	import { Chip, Col, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';

	let toggled = $state(false);
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Chips help people enter information, make selections, filter content, or trigger actions. If no
		'href' or 'onclick' property is specified, the chip manages its own 'toggled' state.
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title="Toggles"
		code={`<Chip text="Primary" bind:toggled />
<Chip text="Secondary" color="secondary" bind:toggled />
<Chip text="Tertiary" color="tertiary" bind:toggled />
<Chip text="Error" color="error" bind:toggled />`}
	>
		<Row gaps>
			<Chip text="Primary" bind:toggled />
			<Chip text="Secondary" color="secondary" bind:toggled />
			<Chip text="Tertiary" color="tertiary" bind:toggled />
			<Chip text="Error" color="error" bind:toggled />
		</Row>
	</Example>

	<Example
		title="Links"
		code={`<Chip text="Primary" href="?type=primary" />
<Chip text="Secondary" color="secondary" href="?type=secondary" />
<Chip text="Tertiary" color="tertiary" href="?type=tertiary" />
<Chip text="Error" color="error" href="?type=error" />`}
	>
		<Row gaps>
			<Chip text="Primary" href="?type=primary" />
			<Chip text="Secondary" color="secondary" href="?type=secondary" />
			<Chip text="Tertiary" color="tertiary" href="?type=tertiary" />
			<Chip text="Error" color="error" href="?type=error" />
		</Row>
	</Example>

	<Example
		title="Actions"
		code={`<Chip
	text="Alert"
	onclick={() => {
		alert('Alert');
	}}
/>`}
	>
		<Row gaps>
			<Chip
				text="Alert"
				onclick={() => {
					alert('Alert');
				}}
			/>
		</Row>
	</Example>
</Col>
