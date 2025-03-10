<script lang="ts">
	import { Link } from '$lib';
	import Row from '$lib/layout/Row.svelte';
</script>

<Row hFull justify="center">
	<p class="text-center">
		Welcome to @acudac/md3-svelte. If its your first time here, go to <Link href="/setup"
			>Setup</Link
		>. <br />Otherwise you can explore our <Link href="/components">Components</Link> or <Link
			href="/layouts">Layouts</Link
		>
	</p>
</Row>
