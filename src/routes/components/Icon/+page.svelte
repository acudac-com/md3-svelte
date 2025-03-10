<script lang="ts">
	import { Col, Divider, Fab, FabDialog, Icon, Row } from '$lib';
	import { mdiSettings, pngGoogleMeet } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Icons are SVGs or Images that are useful for conveying information in a small space.
	</p>
	<Divider />

	<Example
		title="Sizes"
		code={`<Icon icon={mdiSettings} size="18" />
<Icon icon={mdiSettings} />
<Icon icon={mdiSettings} size="36" />
<Icon icon={mdiSettings} size="48" />`}
	>
		<Row gaps>
			<Icon icon={mdiSettings} size="18" />
			<Icon icon={mdiSettings} />
			<Icon icon={mdiSettings} size="36" />
			<Icon icon={mdiSettings} size="48" />
		</Row>
	</Example>

	<Example
		title="Badges"
		code={`<Icon icon={mdiSettings} badge />
<Icon icon={mdiSettings} badge="99+" />`}
	>
		<Row gaps>
			<Icon icon={mdiSettings} badge />
			<Icon icon={mdiSettings} badge="99+" />
		</Row>
	</Example>

	<Example
		title="Images"
		code={`<Icon icon={pngGoogleMeet} badge class="bg-primary-container" />
<Icon icon={{ ...pngGoogleMeet, rounded: true }} class="bg-primary-container" badge />`}
	>
		<Row gaps>
			<Icon icon={pngGoogleMeet} badge class="bg-primary-container" />
			<Icon icon={{ ...pngGoogleMeet, rounded: true }} class="bg-primary-container" badge />
		</Row>
	</Example>
</Col>
