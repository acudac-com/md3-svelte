<script lang="ts">
	import { Col, Divider, IconDialog, Row } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">An icon which opens a dialog when clicked.</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example title="" code={`<IconDialog icon={mdiSettings}>Open</IconDialog>`}>
		<Row gaps>
			<IconDialog icon={mdiSettings}>Dialog content</IconDialog>
		</Row>
	</Example>
</Col>
