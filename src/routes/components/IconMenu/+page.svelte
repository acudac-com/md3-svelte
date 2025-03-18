<script lang="ts">
	import { Col, Divider, IconMenu, Row } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">A icon which opens a menu when clicked.</p>
	<Divider />

	<Example
		title=""
		code={`<IconMenu icon={mdiSettings}>
	<Col class="rounded-sm bg-surface p-1 shadow-l1">Menu content</Col>
</IconMenu>`}
	>
		<Row gaps>
			<IconMenu icon={mdiSettings} tooltip={['This is a menu.', 'You can click on it.']}>
				<Col class="rounded-sm bg-surface p-1 shadow-l1">Menu content</Col>
			</IconMenu>
		</Row>
	</Example>
</Col>
