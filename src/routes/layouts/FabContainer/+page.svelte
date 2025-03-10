<script lang="ts">
	import { Chip, Col, Dialog, Divider, Fab, Icon, Menu } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
	import FabContainer from '$lib/layout/FabContainer.svelte';
	let toggled = $state(false);
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		A container that when placed inside another relative container (like a Row, Col, Container or
		any div with class="relative") will position itself to the bottom right of the screen and center
		all its children. Refer to
		<a
			href="https://m3.material.io/components/floating-action-button/specs#7712fa7f-cd29-4852-86a9-fa2f4a01f6bc"
			class="text-primary">MD3 Docs.</a
		>
	</p>
	<Divider />

	<Example
		class="h-[300px]"
		title="Standard"
		code={`<FabContainer>
	<Fab icon={mdiSettings} type="small" />
	<Fab icon={mdiSettings} />
</FabContainer>`}
	>
		<FabContainer>
			<Fab icon={mdiSettings} type="small" />
			<Fab icon={mdiSettings} />
		</FabContainer>
	</Example>
</Col>
