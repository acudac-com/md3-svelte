<script module lang="ts">
	import { Icon } from '$lib';
	import { mdiCheck } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';

	export interface SwitchProps {
		checked?: boolean;
		disabled?: boolean;
		class?: string | string[];
		id?: string;
	}
</script>

<script lang="ts">
	let { checked = $bindable(), ...p }: SwitchProps = $props();
	let startX: number | undefined;
	const handleMouseUp = (e: MouseEvent) => {
		if (!startX) return;
		const distance = e.clientX - startX;
		if (distance > 16 && !checked) checked = true;
		if (distance < -16 && checked) checked = false;
		startX = undefined;
	};
</script>

<svelte:window on:pointerup={handleMouseUp} />
<button
	class={twMerge('m3-container relative', p.class)}
	onclick={(e) => {
		checked = !checked;
	}}
>
	<input
		type="checkbox"
		role="switch"
		class="w-full cursor-pointer appearance-none rounded-full border border-outline bg-surface-container-highest disabled:cursor-auto disabled:border-outline/10 disabled:bg-surface-container-highest/10"
		disabled={p.disabled}
		bind:checked
		onkeydown={(e) => {
			if (e.code == 'Enter') checked = !checked;
			if (e.code == 'ArrowLeft') checked = false;
			if (e.code == 'ArrowRight') checked = true;
		}}
		id={p.id}
	/>
	<div
		class={[
			'handle absolute flex cursor-pointer items-center justify-center rounded-full bg-outline text-on-primary-container'
		]}
	>
		{#if checked}
			<Icon icon={mdiCheck} size={12} />
		{/if}
	</div>
	<div class="hover absolute flex cursor-pointer items-center justify-center rounded-full"></div>
</button>

<style>
	.m3-container {
		width: 3.25rem;
		height: 2rem;
	}
	input {
		width: 3.25rem;
		height: 2rem;

		-webkit-tap-highlight-color: transparent;
		transition: all 300ms;
	}
	.handle {
		width: 1rem;
		height: 1rem;

		-webkit-tap-highlight-color: transparent;
		transition: all 300ms cubic-bezier(0.271, -0.011, 0, 1.449);

		left: 0.5rem;
		top: 50%;
		translate: 0 -50%;
	}
	.hover {
		width: 3rem;
		height: 3rem;

		-webkit-tap-highlight-color: transparent;
		transition: all 300ms cubic-bezier(0.271, -0.011, 0, 1.449);

		left: 1rem;
		top: 50%;
		translate: -50% -50%;
	}

	.m3-container:hover > input:enabled + .handle,
	.m3-container > input:enabled:is(:active, :focus-visible) + .handle {
		background-color: rgb(var(--md-sys-color-on-surface-variant));
	}
	.m3-container:hover > input:enabled:checked + .handle,
	.m3-container > input:enabled:checked:is(:active, :focus-visible) + .handle {
		background-color: rgb(var(--md-sys-color-primary-container));
	}
	.m3-container:hover > input ~ .hover {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.08);
	}
	.m3-container:hover > input:checked ~ .hover {
		background-color: rgb(var(--md-sys-color-primary) / 0.08);
	}

	input:checked {
		background-color: rgb(var(--md-sys-color-primary));
		border-color: rgb(var(--md-sys-color-primary));
	}
	input:checked + .handle {
		background-color: rgb(var(--md-sys-color-on-primary));
		scale: 1.5;
		left: 1.75rem;
	}
	input:checked + .handle > :global(svg) {
		scale: 0.667;
		opacity: 1;
	}
	input:checked ~ .hover {
		left: 2.25rem;
	}
	.m3-container:active > input:enabled + .handle {
		scale: 1.75;
	}
	.m3-container:active > input:enabled + .handle > :global(svg) {
		scale: 0.571;
	}
	input:disabled:checked {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.12);
		border-color: transparent;
	}
	input:disabled + .handle {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.38);
		cursor: auto;
	}
	input:disabled:checked + .handle {
		background-color: rgb(var(--md-sys-color-surface));
	}
	input:disabled:checked + .handle > :global(svg) {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ .hover {
		display: none;
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
	@media screen and (forced-colors: active) {
		input:checked {
			background-color: canvastext !important;
		}
		.handle {
			background-color: canvastext !important;
		}
		input:checked + .handle {
			background-color: canvas !important;
		}
		input:disabled,
		input:disabled + .handle {
			opacity: 0.38;
		}
	}
</style>
