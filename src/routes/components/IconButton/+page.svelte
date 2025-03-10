<script lang="ts">
	import { Button, Chip, Col, Divider, IconButton, Row } from '$lib';
	import { mdiArrowBack, mdiCheck, mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Used to toggle or take actions.</p>
	<Divider />

	<Example
		title="Colors"
		code={`<IconButton icon={mdiSettings} />
<IconButton icon={mdiSettings} color="secondary" />
<IconButton icon={mdiSettings} color="tertiary" />
<IconButton icon={mdiSettings} color="error" />`}
	>
		<Row gaps scroll>
			<IconButton icon={mdiSettings} />
			<IconButton icon={mdiSettings} color="secondary" />
			<IconButton icon={mdiSettings} color="tertiary" />
			<IconButton icon={mdiSettings} color="error" />
		</Row>
	</Example>

	<Example
		title="Types"
		code={`<IconButton icon={mdiSettings} />
<IconButton icon={mdiSettings} type="filled" />
<IconButton icon={mdiSettings} type="tonal" />
<IconButton icon={mdiSettings} type="outlined" />`}
	>
		<Row gaps scroll>
			<IconButton icon={mdiSettings} />
			<IconButton icon={mdiSettings} type="filled" />
			<IconButton icon={mdiSettings} type="tonal" />
			<IconButton icon={mdiSettings} type="outlined" />
		</Row>
	</Example>

	<Example
		title="Badges"
		code={`<IconButton text="Prepend" prependIcon={mdiArrowBack} />
<IconButton text="Append" appendIcon={mdiCheck} />`}
	>
		<Row gaps scroll>
			<IconButton icon={mdiSettings} badge />
			<IconButton icon={mdiSettings} badge="99+" />
		</Row>
	</Example>
</Col>
