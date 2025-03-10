<script lang="ts">
	import { Col, Divider, Link, Row } from '$lib';
	import NavBtn from '$lib/components/NavBtn.svelte';
	import { mdiAboutVariant, uiwComponent } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">A styled link component.</p>
	<Divider />

	<Example
		title=""
		code={`<p>If this is your first time go to <Link href="/setup">Setup</Link>.</p>`}
	>
		<p>If this is your first time go to <Link href="/setup">Setup</Link>.</p>
	</Example>
</Col>
