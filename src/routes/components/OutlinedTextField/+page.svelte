<script lang="ts">
	import { Col, Divider, Row } from '$lib';
	import OutlinedTextField from '$lib/components/OutlinedTextField.svelte';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Single line input component with an outline.</p>
	<Divider />

	<Example
		title="Types"
		code={`<OutlinedTextField label="Example" bind:value />
		<OutlinedTextField type="date" label="Example" />
		<OutlinedTextField type="datetime-local" label="Example" />
		<OutlinedTextField type="month" label="Example" />
		<OutlinedTextField type="number" label="Example" />
		<OutlinedTextField type="password" label="Example" />
		<OutlinedTextField type="time" label="Example" />
		<OutlinedTextField type="week" label="Example" />`}
	>
		<Col wFull gaps>
			<OutlinedTextField label="Example" bind:value rounded />
			<OutlinedTextField type="date" label="Example" />
			<OutlinedTextField type="datetime-local" label="Example" />
			<OutlinedTextField type="month" label="Example" />
			<OutlinedTextField type="number" label="Example" />
			<OutlinedTextField type="password" label="Example" />
			<OutlinedTextField type="time" label="Example" />
			<OutlinedTextField type="week" label="Example" />
		</Col>
	</Example>
</Col>

<style>
	:-webkit-datetime-edit {
		padding: 1em;
	}
	:-webkit-datetime-edit-fields-wrapper {
		background: silver;
	}
	:-webkit-datetime-edit-text {
		color: red;
		padding: 0 0.3em;
	}
	:-webkit-datetime-edit-month-field {
		color: blue;
	}
	:-webkit-datetime-edit-day-field {
		color: green;
	}
	:-webkit-datetime-edit-year-field {
		color: purple;
	}
	:-webkit-inner-spin-button {
		display: none;
	}
	:-webkit-calendar-picker-indicator {
		background: orange;
	}
</style>
