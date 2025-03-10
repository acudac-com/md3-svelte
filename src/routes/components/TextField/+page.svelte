<script lang="ts">
	import { Col, Divider } from '$lib';
	import TextField from '$lib/components/TextField.svelte';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Single line input component with an outline.</p>
	<Divider />

	<Example
		title="Types"
		code={`<TextField label="Example" bind:value />
		<TextField type="date" label="Example" />
		<TextField type="datetime-local" label="Example" />
		<TextField type="month" label="Example" />
		<TextField type="number" label="Example" />
		<TextField type="password" label="Example" />
		<TextField type="time" label="Example" />
		<TextField type="week" label="Example" />`}
	>
		<Col wFull gaps>
			<TextField label="Example" bind:value />
			<TextField type="date" label="Example" />
			<TextField type="datetime-local" label="Example" />
			<TextField type="month" label="Example" />
			<TextField type="number" label="Example" />
			<TextField type="password" label="Example" />
			<TextField type="time" label="Example" />
			<TextField type="week" label="Example" />
		</Col>
	</Example>
</Col>
