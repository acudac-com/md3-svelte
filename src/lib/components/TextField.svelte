<script module lang="ts">
	import { twMerge } from 'tailwind-merge';

	export type TextFieldProps = {
		label?: string;
		value?: string;
		disabled?: boolean;
		error?: boolean;
		type?: 'date' | 'datetime-local' | 'month' | 'number' | 'password' | 'text' | 'time' | 'week';
		class?: string | string[];
		onfocus?: (e: Event) => void;
		onfocusout?: (e: Event) => void;
		oninput?: (e: Event) => void;
		onkeyup?: (e: KeyboardEvent) => void;
		menuAnchorName?: string;
		inputClass?: string | string[];
	};
</script>

<script lang="ts">
	let { value = $bindable(), menuAnchorName = '--0', ...p }: TextFieldProps = $props();
	const id = crypto.randomUUID();
</script>

<div
	class={twMerge(
		['m3-container h-[54px] w-[300px] max-w-full overflow-clip', p.error ? 'error' : ''],
		p.class
	)}
>
	<input
		class={twMerge('body-large rounded-tl-xs rounded-tr-xs', p.inputClass)}
		onfocus={p.onfocus}
		onfocusout={p.onfocusout}
		onkeyup={p.onkeyup}
		style={`anchor-name:${menuAnchorName}`}
		oninput={p.oninput}
		placeholder=" "
		type={p.type}
		bind:value
		{id}
		disabled={p.disabled}
	/>
	<label class="body-large top-[12px]" for={id}>{p.label}</label>
	<div class="layer rounded-tl-xs rounded-tr-xs"></div>
</div>

<style>
	.m3-container {
		position: relative;
		align-items: center;
	}
	input {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 1.5rem 1rem 0.5rem 1rem;
		background-color: rgb(var(--md-sys-color-surface-container-highest));
		color: rgb(var(--md-sys-color-on-surface));
	}
	label {
		position: absolute;
		left: 1rem;
		color: rgb(var(--error, var(--md-sys-color-on-surface-variant)));
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
		pointer-events: none;
		transition: all 200ms;
	}
	.layer::after {
		position: absolute;
		content: ' ';
		display: block;
		width: 100%;
		bottom: 0;

		height: 0.0625rem;
		background-color: rgb(var(--error, var(--md-sys-color-on-surface-variant)));
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

	input:enabled:hover ~ .layer {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.08);
	}
	input:hover ~ label {
		color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	input:focus ~ label,
	input:not(:placeholder-shown) ~ label {
		top: 0.5rem;
		font-size: var(--m3-font-body-small-size, 0.75rem);
		line-height: var(--m3-font-body-small-height, 1rem);
		letter-spacing: var(--m3-font-body-small-tracking, 0.4);
	}
	input:focus ~ label {
		color: rgb(var(--error, var(--md-sys-color-primary)));
	}
	input:focus ~ .layer::after {
		height: 0.125rem;
		background-color: rgb(var(--error, var(--md-sys-color-primary)));
	}

	.error {
		--error: var(--md-sys-color-error);
	}
	.error > input:hover ~ label,
	.error > input:hover ~ .layer {
		--error: var(--md-sys-color-on-error-container);
	}
	input:disabled {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.04);
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ label {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ .layer::after {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	input:disabled ~ :global(svg) {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
	@media screen and (forced-colors: active) {
		input {
			background-color: field;
		}
		.layer::after,
		input:focus ~ .layer::after {
			background-color: canvastext;
		}
	}
</style>
