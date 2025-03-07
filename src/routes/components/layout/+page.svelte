<script lang="ts">
	import { Chip, Col } from '$lib';
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
		<Col class="bg-surface-variant"
			><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
		</Col>
		<Col justify class="bg-surface-variant"
			><Chip text="Element 1" /><Chip text="Element 2" /><Chip text="Element 3" />
		</Col>
	</Row>
</Col>
