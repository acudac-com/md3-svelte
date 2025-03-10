<script lang="ts">
	import { Col, Divider } from '$lib';
	import LinearProgress from '$lib/components/LinearProgress.svelte';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Shows the status of a process using a linear runner.</p>
	<Divider />

	<Example
		title="Colors"
		code={`LinearProgress />
<LinearProgress color="secondary" />
<LinearProgress color="tertiary" />
<LinearProgress color="error" />`}
	>
		<LinearProgress />
		<LinearProgress color="secondary" />
		<LinearProgress color="tertiary" />
		<LinearProgress color="error" />
	</Example>

	<Example title="Non-infinite" code={`<LinearProgress percentage={40} />`}>
		<LinearProgress percentage={40} />
	</Example>
</Col>
