<script lang="ts">
	import { Cell, Col, Divider, Grid } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">A grid is used to place components in a grid with equal sized columns.</p>
	<Divider />

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
