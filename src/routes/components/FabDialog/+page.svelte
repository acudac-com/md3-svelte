<script lang="ts">
	import { Col, Divider, Fab, FabDialog, Row } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Floating action buttons (FABs) help people take primary actions. This component opens a dialog
		when the FAB is clicked.
	</p>
	<Divider />

	<Example title="Colors" code={`<FabDialog icon={mdiSettings}>Dialog content</FabDialog>`}>
		<Row gaps>
			<FabDialog icon={mdiSettings}>Dialog content</FabDialog>
		</Row>
	</Example>
</Col>
