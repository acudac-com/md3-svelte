<script lang="ts">
	import { Cell, Col, Grid } from '$lib';
	import Chip from '$lib/clickables/Chip.svelte';
	import Example from '$lib/internal/Example.svelte';
	import Row from '$lib/layout/Row.svelte';
</script>

<Col wFull hFit gaps>
	<Example
		title="Grid and Cells"
		code={`<Grid cols="4">
	<Cell>Cell 1</Cell>
	<Cell>Cell 2</Cell>
	<Cell>Cell 3</Cell>
	<Cell>Cell 4</Cell>
	<Cell colStart="2" colSpan="2"
		class="bg-primary-container"
		>Cell 5</Cell>
	<Cell rowStart="3" 
		class="bg-tertiary-container"
		>Cell 6</Cell>
</Grid>`}
	>
		<Grid cols="4">
			<Cell>Cell 1</Cell>
			<Cell>Cell 2</Cell>
			<Cell>Cell 3</Cell>
			<Cell>Cell 4</Cell>
			<Cell colStart="2" colSpan="2" class="bg-primary-container">Cell 5</Cell>
			<Cell rowStart="3" class="bg-tertiary-container">Cell 6</Cell>
		</Grid>
	</Example>
</Col>
