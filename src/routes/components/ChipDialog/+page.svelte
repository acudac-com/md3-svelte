<script lang="ts">
	import { ChipDialog, Col, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">A chip which opens a dialog when clicked.</p>
	<Divider />
	<Example title="" code={`<ChipDialog text="Primary">Open</ChipDialog>`}>
		<Row gaps>
			<ChipDialog text="Primary">Dialog content</ChipDialog>
		</Row>
	</Example>
</Col>
