<script lang="ts">
	import { Row, ReversedRow, Col, ReversedCol } from '$lib/index.js';
</script>

{#snippet elements()}
	<button class="rounded-md border border-solid border-black bg-red-500 p-1">Element 1</button>
	<button class="rounded-md bg-red-500 p-1">Element 2</button>
	<button class="rounded-md bg-red-500 p-1">Element 3</button>
{/snippet}

<p>{'<Row>'}</p>
<Row>
	{@render elements()}
</Row>

<p>{'<ReversedRow container>'}</p>
<ReversedRow container>{@render elements()}</ReversedRow>

<p>{'<SpreadRow container justify spaced>'}</p>
<Row container justify spaced>{@render elements()}</Row>

<p>{'<Row container full spaced rounded>'}</p>
<Row container full spaced rounded>
	<Col>
		<p>{'<Col containerHigh'}</p>
		<p>{'spaced rounded>'}</p>
		<Col containerHigh spaced rounded>{@render elements()}</Col>
	</Col>

	<Col>
		<p>{'<ReversedCol containerHighest'}</p>
		<p>{'spaced rounded>'}</p>
		<ReversedCol containerHighest spaced rounded>{@render elements()}</ReversedCol>
	</Col>

	<Col>
		<p>{'<Col containerLowest'}</p>
		<p>{'justify spaced rounded>'}</p>
		<Col containerLowest justify spaced rounded>{@render elements()}</Col>
	</Col>
</Row>
