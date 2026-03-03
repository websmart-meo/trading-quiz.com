<script lang="ts">
	import imgChartAvif from '$lib/assets/images/ai/chart-bg.avif';
	import imgChartAvif1475 from '$lib/assets/images/ai/chart-bg-1475.avif';
	import imgChartWebp from '$lib/assets/images/ai/chart-bg.webp';
	import imgChartWebp1475 from '$lib/assets/images/ai/chart-bg-1475.webp';
	import imgChartPng from '$lib/assets/images/ai/chart-bg.png';
	import imgChartPng1475 from '$lib/assets/images/ai/chart-bg-1475.png';
	import imgBlur from '$lib/assets/images/ai/pic-blur.svg';
	import imgQuoteIcon from '$lib/assets/images/ai/quote-icon.svg';

	const utpItems = ['1 minute', '5 questions', 'No registration required', 'No deposit required'];

	export let onStart: () => void;
</script>

<section class="screen1">
	<!-- Background layers -->
	<div class="bg">
		<picture class="bg-chart">
			<source type="image/avif" srcset="{imgChartAvif1475} 1475w, {imgChartAvif} 2950w" sizes="100vw" />
			<source type="image/webp" srcset="{imgChartWebp1475} 1475w, {imgChartWebp} 2950w" sizes="100vw" />
			<img srcset="{imgChartPng1475} 1475w, {imgChartPng} 2950w" sizes="100vw" src={imgChartPng} alt="" />
		</picture>
		<div class="bg-vignette"></div>
		<img class="bg-blur" src={imgBlur} alt="" />
	</div>

	<!-- Quote bar (top, desktop only) -->
	<div class="quote-bar">
		<img class="quote-icon" src={imgQuoteIcon} alt="" />
		<p class="quote-text">
			The best time to invest was yesterday. The second best time is now. The sooner you start
			investing, the better.
		</p>
		<div class="quote-divider"></div>
		<div class="quote-attribution">
			<p class="quote-author">Warren Buffett</p>
			<p class="quote-role">Entrepreneur and investor</p>
		</div>
	</div>

	<!-- Hero content -->
	<div class="hero">
		<h1 class="hero-title">Investment<br />Matchmaker</h1>
		<button class="cta-btn" on:click={onStart}>Try yourself</button>
	</div>

	<!-- UTP checkmarks -->
	<div class="utp-bar">
		{#each utpItems as item}
			<div class="utp-item">
				<svg
					class="check-icon"
					width="20"
					height="20"
					viewBox="0 0 18.6667 18.6667"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.58333 9.33333L8.08333 11.8333L13.0833 6.83333M17.6667 9.33333C17.6667 13.9357 13.9357 17.6667 9.33333 17.6667C4.73096 17.6667 1 13.9357 1 9.33333C1 4.73096 4.73096 1 9.33333 1C13.9357 1 17.6667 4.73096 17.6667 9.33333Z"
						stroke="#5DDF38"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="utp-label">{item}</span>
			</div>
		{/each}
	</div>

	<!-- Disclaimer -->
	<p class="disclaimer">The match is informational and not an investment recommendation</p>
</section>

<style lang="scss">
	.screen1 {
		position: relative;
		width: 100%;
		height: 100vh;
		min-height: 600px;
		background-color: var(--Fill-0-default);
		overflow: hidden;
		font-family: var(--main-font);
	}

	/* ── Background ─────────────────────────────────── */
	.bg {
		position: absolute;
		inset: 0;
		z-index: 0;

		/* Fix 2: fill the full viewport with no max-width cap */
		.bg-chart {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.bg-vignette {
			position: absolute;
			inset: 0;
			background: radial-gradient(
				ellipse 85% 80% at 50% 50%,
				rgba(27, 24, 23, 0.7) 0%,
				rgba(14, 12, 12, 0.75) 50%,
				rgba(0, 0, 0, 0.85) 100%
			);
		}

		.bg-blur {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
		}
	}

	/* ── Quote bar (desktop only) ───────────────────── */
	.quote-bar {
		position: absolute;
		top: 88px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 28px;
		z-index: 2;

		@media screen and (max-width: 1100px) {
			display: none;
		}

		.quote-icon {
			width: 48px;
			height: 40px;
			flex-shrink: 0;
		}

		.quote-text {
			font-size: 20px;
			font-weight: 400;
			line-height: 28px;
			color: var(--Text-Secondary-default);
			max-width: 517px;
		}

		.quote-divider {
			width: 1px;
			height: 56px;
			background-color: rgba(236, 234, 233, 0.2);
			flex-shrink: 0;
		}

		.quote-attribution {
			display: flex;
			flex-direction: column;
			gap: 4px;
			width: 195px;
			flex-shrink: 0;

			.quote-author {
				font-size: 20px;
				font-weight: 500;
				line-height: 28px;
				color: var(--Text-Primary);
			}

			.quote-role {
				font-size: 16px;
				font-weight: 400;
				line-height: 24px;
				color: #6d6764;
				white-space: nowrap;
			}
		}
	}

	/* ── Hero ───────────────────────────────────────── */
	.hero {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		z-index: 2;

		.hero-title {
			font-size: clamp(48px, 8vw, 112px);
			font-weight: 500;
			line-height: 1;
			color: var(--Text-Primary);
			text-align: center;
			white-space: nowrap;
		}

		.cta-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 12px 24px;
			border-radius: 14px;
			border: none;
			cursor: pointer;
			font-size: 16px;
			font-weight: 500;
			line-height: 24px;
			color: #fafafa;
			font-family: inherit;
			background: linear-gradient(120.75deg, #ffa33a 0.37%, #ff8516 15.31%, #ff5500 100%);
			transition: opacity 0.2s ease;

			&:hover {
				opacity: 0.9;
			}

			&:active {
				opacity: 0.8;
			}
		}
	}

	/* ── UTP bar ────────────────────────────────────── */
	.utp-bar {
		position: absolute;
		bottom: 112px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 24px;
		z-index: 2;

		.utp-item {
			display: flex;
			align-items: center;
			gap: 12px;

			.utp-label {
				font-size: 20px;
				font-weight: 500;
				line-height: 28px;
				color: var(--Text-Primary);
				white-space: nowrap;
			}
		}
	}

	/* ── Disclaimer ─────────────────────────────────── */
	.disclaimer {
		position: absolute;
		bottom: 52px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: #6d6764;
		text-align: center;
		white-space: nowrap;
		z-index: 2;
	}

	/* ── Tablet (768px – 1099px) ────────────────────── */
	@media screen and (max-width: 1099px) and (min-width: 768px) {
		.utp-bar {
			gap: 16px;
			bottom: 80px;

			.utp-item .utp-label {
				font-size: 16px;
				line-height: 24px;
			}
		}

		.disclaimer {
			bottom: 36px;
		}
	}

	/* ── Mobile (< 768px) ───────────────────────────── */
	@media screen and (max-width: 767px) {
		.screen1 {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			padding: 56px 24px 28px;
			height: 100svh;
			min-height: unset;
		}

		.hero {
			position: static;
			top: auto;
			left: auto;
			transform: none;
			flex: 1;
			justify-content: center;
			width: 100%;
			gap: 28px;

			.hero-title {
				font-size: clamp(36px, 11vw, 64px);
				white-space: normal;
				word-break: keep-all;
			}
		}

		.utp-bar {
			position: static;
			bottom: auto;
			left: auto;
			transform: none;
			flex-wrap: wrap;
			justify-content: center;
			gap: 8px 20px;
			width: 100%;

			.utp-item .utp-label {
				font-size: 14px;
				line-height: 20px;
			}

			.check-icon {
				width: 16px;
				height: 16px;
			}
		}

		.disclaimer {
			position: static;
			bottom: auto;
			left: auto;
			transform: none;
			white-space: normal;
			width: 100%;
			font-size: 11px;
		}
	}
</style>
