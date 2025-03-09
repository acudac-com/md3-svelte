<script lang="ts">
	import { Chip, Col, Grid } from '$lib';
	import Cell from '$lib/layout/Cell.svelte';
	import Row from '$lib/layout/Row.svelte';
</script>

<Col wFull>
	<Row gaps class="bg-surface-variant"
		><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
	</Row>
	<Row justify="around" class="bg-surface-variant"
		><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
	</Row>

	<Row hFull>
		<Col class="w-1/4 bg-surface-variant"
			><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
		</Col>
		<Col class="w-1/4 bg-surface-variant" justify
			><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
		</Col>
		<Grid class="h-/1/2 w-1/2 self-start" cols="3">
			<Cell colStart="2" rowSpan="2" class="bg-primary-container">cell 1</Cell>
			<Cell class="bg-primary-container" justifySelf="center">cell 2</Cell>
			<Cell>cell 3</Cell>
			<Cell>cell 4</Cell>
		</Grid>
	</Row>
</Col>
