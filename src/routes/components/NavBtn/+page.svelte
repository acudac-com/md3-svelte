<script lang="ts">
	import { Col, Divider, Row } from '$lib';
	import NavBtn from '$lib/components/NavBtn.svelte';
	import { mdiAboutVariant, mdiSettings, uiwComponent } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Used in Navigation Rails and Navigation Bars for the main navigation targets.
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title=""
		code={`<NavBtn label="Setup" icon={mdiAboutVariant} href="/setup" />
<NavBtn label="Components" icon={uiwComponent} href="/components" />`}
	>
		<Row gaps>
			<NavBtn label="Setup" icon={mdiAboutVariant} href="/setup" />
			<NavBtn label="Components" icon={uiwComponent} href="/components" />
		</Row>
	</Example>
</Col>
