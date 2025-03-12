<script lang="ts">
	import { Col, DatePicker, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Allows a user to pick a date.</p>
	<Divider />
	<Example title="" code={`<ChipDialog text="Primary">Open</ChipDialog>`}>
		<Row gaps>
			<DatePicker />
		</Row>
	</Example>
</Col>
