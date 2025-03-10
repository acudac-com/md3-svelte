<script lang="ts">
	import { Col, Divider } from '$lib';
	import TextArea from '$lib/components/TextArea.svelte';
	import Example from '$lib/internal/Example.svelte';

	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Multiline input component.</p>
	<Divider />

	<Example title="" code={`<TextArea label="Example" bind:value />`}>
		<TextArea label="Example" bind:value />
	</Example>
</Col>
