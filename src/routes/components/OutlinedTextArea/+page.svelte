<script lang="ts">
	import { Col, Divider } from '$lib';
	import OutlinedTextArea from '$lib/components/OutlinedTextArea.svelte';
	import Example from '$lib/internal/Example.svelte';

	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Multiline input component with an outline.</p>
	<Divider />

	<Example title="" code={`<OutlinedTextArea label="Example" bind:value />`}>
		<OutlinedTextArea label="Example" bind:value />
	</Example>
</Col>
