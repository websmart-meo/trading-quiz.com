<script lang="ts">
	import Main from './Main/Main.svelte';
	import type { Translations } from '$lib/i18n';

	export let onStart: () => void;
	export let t: Translations['ui'] | null = null;
</script>

<section class="screen1-light">
	<Main {onStart} {t} />
	<p class="disclaimer">{t ? t.disclaimer : 'The match is informational and not an investment recommendation'}</p>
</section>

<style lang="scss">
	.screen1-light {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 52px;
		box-sizing: border-box;

		&::after {
			content: '';
			position: fixed;
			inset: 0;
			background-image: url('/images/bgr/bgr-light@2x.webp');
			background-size: cover;
			background-position: center center;
			pointer-events: none;
		}

		@media screen and (max-width: 767px) {
			flex-direction: column;
			padding: 24px;
			align-items: flex-start;
		}
	}

	.disclaimer {
		position: absolute;
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		color: #a0a0a0;
		white-space: nowrap;
		font-family: var(--font-family-main, 'Suisse Intl', sans-serif);

		@media screen and (max-width: 767px) {
			position: static;
			transform: none;
			white-space: normal;
			text-align: center;
			margin-top: auto;
			width: 100%;
		}
	}
</style>
