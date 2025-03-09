<script lang="ts">
	import { Chip, Col } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<Example
		class="h-[300px]"
		title="Standard"
		code={`<Col class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Col>`}
	>
		<Col class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Col>
	</Example>

	<Example
		class="h-[300px]"
		title="Justified"
		code={`<Col justify class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Col>`}
	>
		<Col justify class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Col>
	</Example>

	<Example
		title="Fitted"
		class="h-[300px]"
		code={`<Col hFit class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Col>`}
	>
		<Col hFit class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Col>
	</Example>

	<Example
		class="h-[300px]"
		title="Full"
		code={`<Col wFull class="border">
	<Chip text="Element 1" />
	<Chip text="Element 2" />
	<Chip text="Element 3" />
</Col>`}
	>
		<Col wFull class="border">
			<Chip text="Element 1" />
			<Chip text="Element 2" />
			<Chip text="Element 3" />
		</Col>
	</Example>
</Col>
