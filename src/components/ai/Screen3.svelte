<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { brandsData } from '$lib/questions';
	import imgBlur from '$lib/assets/images/ai/pic-blur.svg';
	import imgCoinsLeft from '$lib/assets/images/ai/coins-left.png';
	import imgCoinsRight from '$lib/assets/images/ai/coins-right.png';
	import imgIqOption from '$lib/assets/images/ai/brands/iqoption.svg';
	import imgExnova from '$lib/assets/images/ai/brands/exnova.svg';
	import imgCasatrade from '$lib/assets/images/ai/brands/casatrade.svg';
	import imgIqBroker from '$lib/assets/images/ai/brands/iqbroker.svg';
	import imgCapitalBear from '$lib/assets/images/ai/brands/capitalbear.svg';

	const brandIcons: Record<string, string> = {
		'IQ Option': imgIqOption,
		Exnova: imgExnova,
		CasaTrade: imgCasatrade,
		'IQ Broker': imgIqBroker,
		'Capital Bear': imgCapitalBear
	};

	export let onRestart: () => void;

	const aff = writable('');
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		aff.set(params.get('aff') || '');
	});

	// Attach icon to each brand then sort by percent descending
	const sorted = brandsData
		.map((b) => ({ ...b, icon: brandIcons[b.brand], percentNum: parseInt(b.percent) }))
		.sort((a, b) => b.percentNum - a.percentNum);

	const ringCircumference = 2 * Math.PI * 22; // r=22, cx/cy=28

	function ringColor(percent: number): string {
		if (percent >= 90) return '#3dd68c';
		if (percent >= 80) return '#419afe';
		if (percent >= 70) return '#ff8516';
		if (percent >= 60) return '#ffc107';
		return '#ff5722';
	}

	function dashOffset(percent: number): number {
		return ringCircumference * (1 - percent / 100);
	}

	function buildLink(brand: (typeof sorted)[0], affValue: string): string {
		return `${brand.link}?aff=${affValue}&afftrack=${affValue}_${brand.afftrack}`;
	}
</script>

<section class="screen3">
	<!-- Background -->
	<div class="bg">
		<div class="bg-vignette"></div>
		<img class="bg-blur" src={imgBlur} alt="" />
		<img class="coins coins-left" src={imgCoinsLeft} alt="" />
		<img class="coins coins-right" src={imgCoinsRight} alt="" />
	</div>

	<!-- Content -->
	<div class="content" in:fly={{ y: 24, duration: 450, opacity: 0, easing: cubicOut }}>
		<!-- Title -->
		<div class="title-wrap">
			<div class="title-box">
				<p class="title-text">Match Score</p>
			</div>
		</div>

		<!-- Brands list -->
		<ul class="brands-list">
			{#each sorted as brand, i}
				<li
					class="brand-row"
					in:fly={{ y: 20, duration: 400, opacity: 0, delay: 80 + i * 60, easing: cubicOut }}
				>
					<!-- Circular % indicator -->
					<div class="brand-left">
						<svg class="ring" width="56" height="56" viewBox="0 0 56 56">
							<!-- Background track -->
							<circle
								cx="28"
								cy="28"
								r="22"
								stroke="#38312e"
								stroke-width="3"
								fill="none"
							/>
							<!-- Progress arc -->
							<circle
								cx="28"
								cy="28"
								r="22"
								stroke={ringColor(brand.percentNum)}
								stroke-width="3"
								fill="none"
								stroke-linecap="round"
								stroke-dasharray={ringCircumference}
								stroke-dashoffset={dashOffset(brand.percentNum)}
								transform="rotate(-90 28 28)"
							/>
							<!-- Percent text -->
							<text
								x="28"
								y="28"
								text-anchor="middle"
								dominant-baseline="middle"
								font-size="11"
								font-weight="500"
								fill="#eceae9"
								font-family="inherit"
							>
								{brand.percent}%
							</text>
						</svg>

						<!-- Brand logo -->
						<img class="brand-logo" src={brand.icon} alt={brand.brand} />
					</div>

					<!-- CTA link -->
					<a class="brand-link" href={buildLink(brand, $aff)} target="_blank" rel="noopener noreferrer">
						<span>Go to the site</span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.1665 10H15.8332M15.8332 10L10.8332 5M15.8332 10L10.8332 15"
								stroke="#ff8516"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</li>
			{/each}
		</ul>

		<!-- Restart -->
		<button class="restart-btn" on:click={onRestart}>Try again</button>
	</div>

	<p class="disclaimer">The match is informational and not an investment recommendation</p>
</section>

<style lang="scss">
	.screen3 {
		position: relative;
		width: 100%;
		min-height: 100vh;
		background-color: var(--Fill-0-default);
		overflow: hidden;
		font-family: var(--main-font);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 60px 24px 80px;
	}

	/* ── Background ─────────────────────────────────── */
	.bg {
		position: absolute;
		inset: 0;
		z-index: 0;

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

		.coins {
			position: absolute;
			height: 39vh;
			width: auto;
			pointer-events: none;
		}

		.coins-left {
			left: 0;
			top: 7.5vh;
			animation: coins-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) both, float 5s 0.8s ease-in-out infinite;

			@media screen and (max-width: 900px) {
				height: 28vh;
			}

			@media screen and (max-width: 767px) {
				display: none;
			}
		}

		.coins-right {
			right: 0;
			top: 56.5vh;
			animation: coins-in-right 0.8s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both, float 5s 0.95s ease-in-out infinite;
			animation-direction: normal, reverse;

			@media screen and (max-width: 900px) {
				height: 28vh;
			}

			@media screen and (max-width: 767px) {
				display: none;
			}
		}
	}

	/* ── Content ─────────────────────────────────────── */
	.content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 48px;
		width: 100%;
		max-width: 533px;
	}

	/* ── Title ───────────────────────────────────────── */
	.title-wrap {
		display: flex;
		justify-content: center;
	}

	.title-box {
		border: 4px solid #ffa33a;
		border-radius: 32px;
		padding: 14px 32px;

		.title-text {
			font-size: clamp(36px, 5vw, 56px);
			font-weight: 400;
			line-height: 1.21;
			color: var(--Text-Primary);
			text-align: center;
			white-space: nowrap;
		}
	}

	/* ── Brands list ─────────────────────────────────── */
	.brands-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 14px;
		width: 100%;
	}

	.brand-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 22px 12px 16px;
		background-color: #26211f;
		border-radius: 20px;
		gap: 15px;

		.brand-left {
			display: flex;
			align-items: center;
			gap: 15px;
			flex-shrink: 0;
		}

		.ring {
			flex-shrink: 0;
		}

		.brand-logo {
			height: 32px;
			width: auto;
			max-width: 160px;
			object-fit: contain;
			flex-shrink: 0;
		}

		.brand-link {
			display: flex;
			align-items: center;
			gap: 4px;
			font-size: 16px;
			font-weight: 500;
			line-height: 24px;
			color: var(--Fill-Brand-default);
			text-decoration: none;
			white-space: nowrap;
			flex-shrink: 0;
			transition: opacity 0.15s ease;

			svg {
				transition: transform 0.2s ease;
			}

			&:hover {
				opacity: 0.8;

				svg {
					transform: translateX(4px);
				}
			}
		}
	}

	/* ── Restart ─────────────────────────────────────── */
	.restart-btn {
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: #6d6764;
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
		transition: color 0.15s ease;

		&:hover {
			color: var(--Text-Secondary-default);
		}
	}

	/* ── Disclaimer ──────────────────────────────────── */
	.disclaimer {
		position: absolute;
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: #6d6764;
		text-align: center;
		white-space: nowrap;
		z-index: 2;

		@media screen and (max-width: 767px) {
			font-size: 11px;
			white-space: normal;
			width: 90%;
		}
	}

	/* ── Coin animations ─────────────────────────────── */
	@keyframes coins-in-left {
		from {
			opacity: 0;
			transform: translateX(-60px) scale(0.92);
		}
		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}

	@keyframes coins-in-right {
		from {
			opacity: 0;
			transform: translateX(60px) scale(0.92);
		}
		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	/* ── Mobile ──────────────────────────────────────── */
	@media screen and (max-width: 600px) {
		.title-box {
			padding: 12px 24px;
		}

		.brand-row {
			padding: 10px 16px 10px 12px;
			gap: 10px;

			.brand-left {
				gap: 10px;
			}

			.brand-logo {
				height: 24px;
				max-width: 120px;
			}

			.brand-link span {
				display: none;
			}
		}
	}
</style>
