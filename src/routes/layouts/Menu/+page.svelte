<script lang="ts">
	import { Chip, Col, Divider, Icon, Menu } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		A menu displays additional components on a temporary surface. It opens right next to the element
		that triggers it. Most of the time you would use the IconMenu component, unless you need more
		control over the trigger.
	</p>
	<Divider />

	<Example
		title="Standard"
		code={`<Menu bind:open>
	{#snippet trigger()}
		<Icon
			icon={mdiCode}
			class={[
				'rounded-full hover:bg-primary-container',
				open ? 'bg-primary-container' : ''
			]}
		/>
	{/snippet}
	<pre>{p.code}</pre>
</Menu>`}
	>
		<p>The code icon button above uses a menu.</p>
	</Example>
</Col>
