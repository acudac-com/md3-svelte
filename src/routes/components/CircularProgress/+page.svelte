<script lang="ts">
	import { Col, Divider, Row } from '$lib';
	import CircularProgress from '$lib/components/CircularProgress.svelte';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Shows the status of a process using a spinner.</p>
	<Divider />

	<Example
		title="Colors"
		code={`CircularProgress />
<CircularProgress color="secondary" />
<CircularProgress color="tertiary" />
<CircularProgress color="error" />`}
	>
		<Row gaps>
			<CircularProgress />
			<CircularProgress color="secondary" />
			<CircularProgress color="tertiary" />
			<CircularProgress color="error" />
		</Row>
	</Example>

	<Example
		title="Sizes"
		code={`<CircularProgress class="size-[20px]" />
<CircularProgress class="size-[100px]" />`}
	>
		<Row gaps>
			<CircularProgress class="size-[20px]" />
			<CircularProgress class="size-[100px]" />
		</Row>
	</Example>
</Col>
