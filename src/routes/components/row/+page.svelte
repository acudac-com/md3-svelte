<script lang="ts">
	import { Chip, Col, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<Example
		title="Standard"
		code={`<Row class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Row>`}
	>
		<Row class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Row>
	</Example>

	<Example
		title="Justified"
		code={`<Row justify class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Row>`}
	>
		<Row justify class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Row>
	</Example>

	<Example
		title="Fitted"
		code={`<Row wFit class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Row>`}
	>
		<Row wFit class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Row>
	</Example>

	<Example
		class="h-[300px]"
		title="Full"
		code={`<Row hFull class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Row>`}
	>
		<Row hFull class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Row>
	</Example>
</Col>
