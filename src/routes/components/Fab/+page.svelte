<script lang="ts">
	import { Col, Divider, Fab, Row } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Floating action buttons (FABs) help people take primary actions.</p>
	<Divider />
	<p class="title-small">Examples</p>

	<Example
		title="Colors"
		code={`<Fab icon={mdiSettings} />
<Fab icon={mdiSettings} color="secondary" />
<Fab icon={mdiSettings} color="tertiary" />
<Fab icon={mdiSettings} color="error" />`}
	>
		<Row gaps>
			<Fab icon={mdiSettings} />
			<Fab icon={mdiSettings} color="secondary" />
			<Fab icon={mdiSettings} color="tertiary" />
			<Fab icon={mdiSettings} color="error" />
		</Row>
	</Example>

	<Example
		title="Sizes"
		code={`<Fab icon={mdiSettings} type="small" />
<Fab icon={mdiSettings} />
<Fab icon={mdiSettings} text="Settings" />
<Fab icon={mdiSettings} type="large" />`}
	>
		<Row gaps>
			<Fab icon={mdiSettings} type="small" />
			<Fab icon={mdiSettings} />
			<Fab icon={mdiSettings} text="Settings" />
			<Fab icon={mdiSettings} type="large" />
		</Row>
	</Example>
</Col>
