<script lang="ts">
	import { Col, DatePicker, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
	$inspect(value);
</script>

<Col wFull gaps>
	<p class="body-small">Allows a user to pick a date.</p>
	<Divider />
	<Example
		class="h-full"
		title="States"
		code={`<DatePicker bind:value label="Birth date" disabled />
<DatePicker bind:value label="Birth date" />`}
	>
		<Col gaps>
			<DatePicker bind:value label="Birth date" disabled />
			<DatePicker bind:value label="Birth date" />
		</Col>
	</Example>
</Col>
