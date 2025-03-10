<script lang="ts">
	import { Col, Divider } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Dividers are thin lines that group content in lists or other containers.</p>
	<Divider />

	<Example title="Inset" code={`<Divider />`}>
		<Col wFull class="border">
			heading
			<Divider />
			body
		</Col>
	</Example>

	<Example title="Full" code={`<Divider fullWidth/>`}>
		<Col wFull class="border">
			heading
			<Divider fullWidth />
			body
		</Col>
	</Example>
</Col>
