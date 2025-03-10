<script lang="ts">
	import { Col, Divider, Row } from '$lib';
	import OutlinedTextField from '$lib/components/OutlinedTextField.svelte';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Single line input component with an outline.</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example title="" code={`<OutlinedTextField label="Example" bind:value />`}>
		<OutlinedTextField label="Example" bind:value />
	</Example>
</Col>
