<script module lang="ts">
	import type { TextFieldProps } from './TextField.svelte';
	import { twMerge } from 'tailwind-merge';

	export type TextAreaProps = Omit<TextFieldProps, 'type'>;
</script>

<script lang="ts">
	let { value = $bindable(), ...p }: TextAreaProps = $props();
	const id = crypto.randomUUID();
	const resize = (node: HTMLElement) => {
		const update = () => {
			const textarea = node.firstElementChild as HTMLTextAreaElement;
			node.style.height = 'unset';
			node.style.height = textarea.scrollHeight + 'px';
		};
		node.addEventListener('input', update);

		return {
			destroy() {
				node.removeEventListener('input', update);
			}
		};
	};
</script>

<div
	class={twMerge(['m3-container w-[300px] max-w-full', p.error ? 'error' : ''], p.class)}
	use:resize
>
	<textarea
		class="m3-font-body-large rounded-tl-xs rounded-tr-xs"
		placeholder=" "
		bind:value
		{id}
		disabled={p.disabled}
	></textarea>
	<label class="body-large top-[12px]" for={id}>{p.label}</label>
	<div class="layer rounded-tl-xs rounded-tr-xs"></div>
</div>

<style>
	.m3-container {
		position: relative;
		align-items: center;
		min-height: 5rem;
		min-width: 15rem;
	}
	textarea {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 1.5rem 1rem 0.5rem 1rem;
		background-color: rgb(var(--md-sys-color-surface-container-highest));
		color: rgb(var(--md-sys-color-on-surface));
		resize: none;
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
	.m3-container > :global(svg) {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		margin-left: 0.75rem;
		color: rgb(var(--md-sys-color-on-surface-variant));
		pointer-events: none;
	}

	textarea:enabled:hover ~ .layer {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.08);
	}
	textarea:hover ~ label {
		color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label {
		top: 0.5rem;
		font-size: var(--m3-font-body-small-size, 0.75rem);
		line-height: var(--m3-font-body-small-height, 1rem);
		letter-spacing: var(--m3-font-body-small-tracking, 0.4);
	}
	textarea:focus ~ label {
		color: rgb(var(--error, var(--md-sys-color-primary)));
	}
	textarea:focus ~ .layer::after {
		height: 0.125rem;
		background-color: rgb(var(--error, var(--md-sys-color-primary)));
	}

	.leading-icon > textarea {
		padding-left: 3.25rem;
	}
	.leading-icon > label {
		left: 3.25rem;
	}
	.error {
		--error: var(--md-sys-color-error);
	}
	.error > textarea:hover ~ label,
	.error > textarea:hover ~ .layer {
		--error: var(--md-sys-color-on-error-container);
	}
	textarea:disabled {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.04);
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ label {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ .layer::after {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ :global(svg) {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
	@media screen and (forced-colors: active) {
		textarea {
			background-color: field;
		}
		.layer::after,
		textarea:focus ~ .layer::after {
			background-color: canvastext;
		}
	}
</style>
