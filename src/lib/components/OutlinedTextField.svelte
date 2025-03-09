<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TextFieldProps } from './TextField.svelte';

	let { value = $bindable(), ...p }: TextFieldProps = $props();
	const id = crypto.randomUUID();
</script>

<div class={twMerge(['m3-container w-[300px]', p.error ? 'error' : ''], p.class)}>
	<input
		onfocus={p.onfocus}
		oninput={p.oninput}
		class="body-large rounded-xs"
		placeholder=" "
		type={p.type}
		bind:value
		{id}
		disabled={p.disabled}
	/>
	<div class="layer rounded-xs"></div>
	<label class="body-large top-[12px]" for={id}>{p.label}</label>
</div>

<style>
	.m3-container {
		position: relative;
		align-items: center;
		height: 3.5rem;
		min-width: 15rem;
	}
	input {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 1rem;
		background-color: transparent;
		color: rgb(var(--md-sys-color-on-surface));
	}
	label {
		position: absolute;
		left: 0.75rem;
		color: rgb(var(--error, var(--md-sys-color-on-surface-variant)));
		background-color: rgb(var(--m3-util-background, var(--md-sys-color-surface)));
		padding: 0 0.25rem;
		pointer-events: none;
		transition:
			all 200ms,
			font-size 300ms,
			line-height 300ms,
			letter-spacing 300ms;
	}
	.layer {
		position: absolute;
		inset: 0;
		border: 0.0625rem solid rgb(var(--error, var(--md-sys-color-outline)));
		pointer-events: none;
		transition: all 200ms;
	}
	.m3-container :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
		color: rgb(var(--md-sys-color-on-surface-variant));
		pointer-events: none;
	}
	.m3-container > :global(.leading) {
		position: relative;
		margin-left: 0.75rem;
	}
	.trailing {
		position: absolute;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		height: 100%;
		right: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background-color: transparent;
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;

		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
		transition: all 200ms;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label {
		top: calc(1rem * -0.5);
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.4;
	}
	input:hover ~ label {
		color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	input:hover ~ .layer {
		border-color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	input:focus ~ label {
		color: rgb(var(--error, var(--md-sys-color-primary)));
	}
	input:focus ~ .layer {
		border-color: rgb(var(--error, var(--md-sys-color-primary)));
		border-width: 0.125rem;
	}

	.error {
		--error: var(--md-sys-color-error);
	}
	.error > input:hover ~ label,
	.error > input:hover ~ .layer {
		--error: var(--md-sys-color-on-error-container);
	}

	input:disabled {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ label {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ .layer {
		border-color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ :global(svg) {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
</style>
