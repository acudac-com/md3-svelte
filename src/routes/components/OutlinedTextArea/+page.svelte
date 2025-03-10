<script lang="ts">
	import { Col, Divider, Row } from '$lib';
	import NavBtn from '$lib/components/NavBtn.svelte';
	import OutlinedTextArea from '$lib/components/OutlinedTextArea.svelte';
	import { mdiAboutVariant, uiwComponent } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">Multiline input component with an outline.</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title=""
		code={`<NavBtn label="Setup" icon={mdiAboutVariant} href="/setup" />
<NavBtn label="Components" icon={uiwComponent} href="/components" />`}
	>
		<OutlinedTextArea label="Example" />
	</Example>
</Col>
