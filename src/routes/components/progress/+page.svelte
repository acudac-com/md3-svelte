<script lang="ts">
	import CircularProgress from '$lib/progress/CircularProgress.svelte';
	import LinearProgress from '$lib/progress/LinearProgress.svelte';
</script>

<LinearProgress />
<LinearProgress color="tertiary" />
<CircularProgress />
<CircularProgress color="error" class="size-[100px]" />
