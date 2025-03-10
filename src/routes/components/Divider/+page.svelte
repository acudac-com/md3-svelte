<script lang="ts">
	import { Col, Divider } from '$lib';
	import Clickable from '$lib/components/Clickable.svelte';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Provides a low level component for accepting click inputs to navigate (href) or do some action
		(onclick). Provides a ripple effect.
	</p>
	<Divider />
	<p class="title-small">Examples</p>

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
