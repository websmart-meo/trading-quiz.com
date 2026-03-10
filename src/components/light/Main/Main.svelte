<script lang="ts">
	import ImageFromLib from '../../common/ImageFromLib.svelte';
	import checkmark from '../../../lib/assets/images/light/checkmark.svg';
	import type { Translations } from '$lib/i18n';

	export let onStart: () => void;
	export let t: Translations['ui'] | null = null;

	const defaultItems = ['1 minute', '5 questions', 'No registration required', 'No deposit required'];
	$: items = t ? t.utpItems : defaultItems;
</script>

<div class="main-light">
	<div class="main-left">
		<h1>{t ? t.title.join(' ') : 'Personalized investment matchmaker'}</h1>
		<ul class="main-list">
			{#each items as item}
				<li>
					<img src={checkmark} alt="" />
					<span>{item}</span>
				</li>
			{/each}
		</ul>

		<button class="button button-primary" on:click={onStart}>{t ? t.ctaBtn : 'Get matched'}</button>
	</div>
	<div class="main-right">
		<ImageFromLib imagesPath="light/photo" fallbackFormat="png" classes="quote-photo" />

		<p class="quote">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="27"
				viewBox="0 0 32 27"
				fill="none"
			>
				<path
					d="M18.0364 16.2909C18.0364 6.05091 22.497 0.620607 31.4182 0V4.65455C26.7636 5.27515 24.4364 7.79636 24.4364 12.2182V13.9636C24.4364 13.9636 24.6691 13.8861 25.1345 13.7309C26.0655 13.4982 26.6085 13.3818 26.7636 13.3818C28.2376 13.3818 29.4788 13.9636 30.4873 15.1273C31.4958 16.2133 32 17.6485 32 19.4327C32 21.6824 31.3406 23.4667 30.0218 24.7855C28.7806 26.1042 27.1127 26.7636 25.0182 26.7636C20.3636 26.7636 18.0364 23.2727 18.0364 16.2909ZM0 16.2909C0 6.05091 4.46061 0.620607 13.3818 0V4.65455C8.72727 5.27515 6.4 7.79636 6.4 12.2182V13.9636C6.4 13.9636 6.63273 13.8861 7.09818 13.7309C8.02909 13.4982 8.57212 13.3818 8.72727 13.3818C10.2012 13.3818 11.4424 13.9636 12.4509 15.1273C13.4594 16.2133 13.9636 17.6485 13.9636 19.4327C13.9636 21.6824 13.3042 23.4667 11.9855 24.7855C10.7442 26.1042 9.07636 26.7636 6.98182 26.7636C2.32727 26.7636 0 23.2727 0 16.2909Z"
					fill="url(#paint0_linear_16010_3006)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_16010_3006"
						x1="0.0946744"
						y1="0.178512"
						x2="36.5559"
						y2="10.2188"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FF8E37" />
						<stop offset="0.15" stop-color="#FF660F" />
						<stop offset="1" stop-color="#DE2F00" />
					</linearGradient>
				</defs>
			</svg>
			{t ? t.quoteText : 'The best time to invest was yesterday. The second best time is now. The sooner you start investing, the better'}
		</p>
		<p class="author">
			{t ? t.quoteAuthor : 'Warren Buffett'}
			<span>{t ? t.quoteRole : 'Entrepreneur and investor'}</span>
		</p>
	</div>
</div>

<style lang="scss">
	.button-primary {
		color: #fafafa;
		background: var(
			--gradient-brand-default,
			linear-gradient(
				103deg,
				var(--Fill-Brand-gradient-600, #ff8e37) 0.37%,
				var(--Fill-Brand-gradient-500, #ff660f) 15.31%,
				var(--Fill-Brand-gradient-300, #de2f00) 100%
			)
		);
	}

	.main-list {
		list-style-type: none;
		font-family: var(--font-family-main, 'Suisse Intl');
		font-size: 20px;
		font-weight: 400;
		line-height: 28px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		li {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 12px;
		}
	}

	.main-left,
	.main-right {
		width: 50%;
		box-sizing: border-box;

		@media screen and (max-width: 767px) {
			width: 100%;
		}
	}

	.main-left {
		border-radius: 32px;
		background-color: #f7f7f5;
		padding: 56px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 52px;
		justify-content: center;

		@media screen and (max-width: 767px) {
			padding: 32px 24px;
			gap: 32px;
			border-radius: 24px;
		}
	}

	.main-right {
		padding: 30px 56px;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 60px;

		@media screen and (max-width: 767px) {
			padding: 32px 24px;
			gap: 32px;
		}

		p.quote {
			color: var(--Text-Primary);
			font-size: 36px;
			font-weight: 450;
			line-height: 44px;

			@media screen and (max-width: 767px) {
				font-size: 24px;
				line-height: 32px;
			}

            svg {
                display: block;
                margin: 0 auto 24px;
            }
		}

		p.author {
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;

			@media screen and (max-width: 767px) {
				font-size: 16px;
				line-height: 24px;
			}

			span {
				display: block;
				color: #707070;
				font-size: 16px;
				font-weight: 400;
				line-height: 24px;
				margin-top: 4px;

				@media screen and (max-width: 767px) {
					font-size: 14px;
				}
			}
		}
	}

	.main-left {
		background-image: url('/images/bgr/flare-top.svg'), url('/images/bgr/flare-bottom.svg');
		background-repeat: no-repeat;
		background-position: top center, bottom center;
		background-size: 100% auto, 100% auto;
	}

	:global(.quote-photo img) {
		display: block;
		margin: 0 auto;

		@media screen and (max-width: 767px) {
			width: 200px;
			height: 200px;
		}
	}
</style>
