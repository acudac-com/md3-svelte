<script lang="ts">
	import { CircularProgress, Icon, LinearProgress } from '$lib';
	import { mdiAboutVariant, pngGoogleMeet } from '$lib/icons';
	import Divider from '$lib/misc/Divider.svelte';
</script>

<Icon icon={mdiAboutVariant} />
<Icon icon={mdiAboutVariant} size="48" />
<Icon icon={mdiAboutVariant} badge />
<Icon icon={mdiAboutVariant} badge="100+" />
<Icon icon={pngGoogleMeet} badge />

<div class="h-[130px] w-full bg-surface-container-low py-[8px]">
	<span>hi</span>
	<Divider></Divider>
	<span>hi</span>
	<Divider></Divider>
	<span>hi</span>
</div>
<LinearProgress />
<LinearProgress color="tertiary" />
<CircularProgress />
<CircularProgress color="error" class="size-[100px]" />
