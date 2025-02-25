<script lang="ts">
	import { Row, ReversedRow, Col, ReversedCol } from '$lib/index.js';
	import { Button } from 'm3-svelte';
</script>

{#snippet elements()}
	<Button type="outlined">Element 1</Button>
	<Button type="outlined">Element 2</Button>
	<Button type="outlined">Element 3</Button>
{/snippet}
<p>{'<Row spaced>'}</p>
<Row spaced>
	{@render elements()}
</Row>

<p>{'<ReversedRow containerHigh>'}</p>
<ReversedRow containerHigh>{@render elements()}</ReversedRow>

<p>{'<Row containerLow justify hoverHighest>'}</p>
<Row containerLow justify hoverHighest>{@render elements()}</Row>

<p>{'<Row containerLowest full spaced rounded>'}</p>
<Row containerLowest full spaced rounded class="text-center">
	<Col>
		<p>{'<Col containerLow'}</p>
		<p>{'spaced rounded>'}</p>
		<Col containerLow spaced rounded>{@render elements()}</Col>
	</Col>

	<Col>
		<p>{'<ReversedCol container'}</p>
		<p>{'spaced rounded>'}</p>
		<ReversedCol container spaced rounded href="/showcase/rows">{@render elements()}</ReversedCol>
	</Col>

	<Col>
		<p>{'<Col containerHigh'}</p>
		<p>{'justify rounded>'}</p>
		<Col containerHigh justify rounded>{@render elements()}</Col>
	</Col>
</Row>
