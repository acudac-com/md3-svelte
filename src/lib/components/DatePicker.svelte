<script module lang="ts">
	interface DatePickerProps {
		value?: string;
		disabled?: boolean;
		label: string;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { TransitionConfig } from 'svelte/transition';

	import { Icon } from '$lib';
	import { mdiCalendar } from '$lib/icons';
	import DatePickerDocked from './DatePickerDocked.svelte';
	import { easeEmphasized } from './easing';

	let { value = $bindable(''), ...p }: DatePickerProps = $props();
	let required = false;

	const id = crypto.randomUUID();
	let hasJs = $state(false);
	onMount(() => {
		hasJs = true;
	});

	let picker = $state(false);
	let container: HTMLDivElement;
	const clickOutside = (_node: Node) => {
		const handleClick = (event: Event) => {
			if (!container.contains(event.target as Node)) {
				picker = false;
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	};
	const enterExit = (_node: Node): TransitionConfig => {
		return {
			duration: 400,
			easing: easeEmphasized,
			css: (t, u) => `clip-path: inset(-100% 0 ${u * 100}% 0 round 1rem);
transform-origin: top;
transform: scaleY(${(t * 0.3 + 0.7) * 100}%);
opacity: ${Math.min(t * 3, 1)};`
		};
	};
</script>

<div
	class={['m3-container rounded-tl-xs rounded-tr-xs', p.disabled ? 'disabled' : '']}
	class:has-js={hasJs}
	bind:this={container}
>
	<input type="date" class="body-medium" disabled={p.disabled} {required} {id} bind:value />
	<label class="label-small pt-[4px]" style="font-size:12px" for={id}>{p.label}</label>
	<button
		type="button"
		class="rounded-tr-xs"
		disabled={p.disabled}
		onclick={() => (picker = !picker)}
	>
		<Icon icon={mdiCalendar} />
	</button>
	{#if picker}
		<div class="picker z-50" use:clickOutside transition:enterExit>
			<DatePickerDocked
				clearable={!required}
				bind:date={value}
				on:close={() => (picker = false)}
				on:setDate={(e: any) => (value = e.detail)}
			/>
		</div>
	{/if}
</div>

<style>
	.m3-container {
		position: relative;
		height: 3.5rem;
		min-width: 20rem;
		background-color: rgb(var(--md-sys-color-surface-container-highest));
		border-bottom: solid 0.0625rem rgb(var(--md-sys-color-on-surface-variant));
	}
	input {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 1.5rem 1rem 0.5rem 1rem;
		background-color: transparent;
		color: rgb(var(--md-sys-color-on-surface));
	}
	label {
		position: absolute;
		left: 1rem;
		color: rgb(var(--md-sys-color-on-surface-variant));
		pointer-events: none;
	}
	input {
		padding-left: 0.875rem;
	}
	@supports (-moz-appearance: none) {
		input {
			padding-left: 0.75rem;
		}
	}

	button {
		display: none;
		position: absolute;
		width: 3.5rem;
		height: 100%;
		right: 0;

		align-items: center;
		justify-content: center;
		border: none;
		background-color: transparent;
		color: rgb(var(--md-sys-color-on-surface-variant));

		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
		transition: all 200ms;
	}

	.m3-container.disabled {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.04);
		border-bottom-color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled,
	input:disabled + label {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	button:disabled {
		color: rgb(var(--md-sys-color-on-surface-variant) / 0.38);
		cursor: auto;
	}

	button > :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}
	.picker {
		position: absolute;
		top: calc(100% + 1rem);
		right: 0;
	}

	@media (hover: hover) {
		button:enabled:hover {
			background-color: rgb(var(--md-sys-color-on-surface-variant) / 0.08);
		}
	}
	button:enabled:focus-visible,
	button:enabled:active {
		background-color: rgb(var(--md-sys-color-on-surface-variant) / 0.12);
	}
	@media (min-width: 37.5rem) {
		.has-js button {
			display: flex;
		}
		.has-js input {
			clip-path: inset(0 3.5rem 0 0);
		}
	}
</style>
