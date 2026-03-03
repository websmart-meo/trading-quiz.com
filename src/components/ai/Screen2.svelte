<script lang="ts">
	import questions from '$lib/questions';
	import { quintOut, quintIn } from 'svelte/easing';
	import imgBlur from '$lib/assets/images/ai/pic-blur.svg';

	export let questionIndex: number;
	export let answers: (number | null)[];
	export let direction: number;
	export let onSelect: (i: number) => void;
	export let onNext: () => void;
	export let onPrev: () => void;

	function questionIn(node: Element, { dir = 1 }: { dir: number }) {
		const mobile = window.matchMedia('(max-width: 767px)').matches;
		return {
			duration: mobile ? 260 : 400,
			easing: quintOut,
			css: (t: number, u: number) =>
				mobile
					? `opacity: ${t};`
					: `transform: translateX(${u * dir * 110}%); opacity: ${t < 0.4 ? t / 0.4 : 1};`
		};
	}

	function questionOut(node: Element, { dir = 1 }: { dir: number }) {
		const mobile = window.matchMedia('(max-width: 767px)').matches;
		return {
			duration: mobile ? 180 : 240,
			easing: quintIn,
			css: (t: number, u: number) =>
				mobile
					? `opacity: ${t};`
					: `transform: translateX(${u * -dir * 80}%); opacity: ${t};`
		};
	}

	$: question = questions[questionIndex];
	$: progress = (questionIndex + 1) / questions.length;
	$: selectedAnswer = answers[questionIndex];

	// Exact check-circle path from Figma asset
	const checkPath =
		'M5.58333 9.33333L8.08333 11.8333L13.0833 6.83333M17.6667 9.33333C17.6667 13.9357 13.9357 17.6667 9.33333 17.6667C4.73096 17.6667 1 13.9357 1 9.33333C1 4.73096 4.73096 1 9.33333 1C13.9357 1 17.6667 4.73096 17.6667 9.33333Z';
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Enter' && selectedAnswer !== null) onNext();
	}}
/>

<section class="screen2">
	<!-- Background (same as Screen1, minus chart image) -->
	<div class="bg">
		<div class="bg-vignette"></div>
		<img class="bg-blur" src={imgBlur} alt="" />
	</div>

	<!-- Sliding quiz card -->
	<div class="card-container">
		{#key questionIndex}
			<div
				class="quiz-card"
				in:questionIn={{ dir: direction }}
				out:questionOut={{ dir: direction }}
			>
				<!-- Question box -->
				<div class="question-box">
					<p class="question-text">{question.q}</p>
				</div>

				<!-- Progress -->
				<div class="progress-section">
					<p class="progress-label">Question {questionIndex + 1} of {questions.length}</p>
					<div class="progress-bar">
						<div class="progress-fill" style="width: {progress * 100}%"></div>
					</div>
				</div>

				<!-- Answers -->
				<div class="answers">
					{#each question.a as answer, i}
						<button
							class="answer-item"
							class:selected={selectedAnswer === i}
							on:click={() => onSelect(i)}
						>
							<span class="answer-text">{answer}</span>
							<span class="answer-icon" aria-hidden="true">
								{#if selectedAnswer === i}
									<svg
										width="20"
										height="20"
										viewBox="0 0 18.6667 18.6667"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d={checkPath}
											stroke="#ff8516"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								{:else}
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="10" cy="10" r="9" stroke="#6d6764" stroke-width="1.5" />
									</svg>
								{/if}
							</span>
						</button>
					{/each}
				</div>

				<!-- Navigation -->
				<div class="nav">
					<button class="nav-back" on:click={onPrev} aria-label="Previous question">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.8332 10H4.1665M4.1665 10L9.1665 15M4.1665 10L9.1665 5"
								stroke="#eceae9"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button class="nav-next" on:click={onNext} disabled={selectedAnswer === null}>
						<span>Next</span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.1665 10H15.8332M15.8332 10L10.8332 5M15.8332 10L10.8332 15"
								stroke="#fafafa"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		{/key}
	</div>

	<p class="disclaimer">The match is informational and not an investment recommendation</p>
</section>

<style lang="scss">
	.screen2 {
		position: relative;
		width: 100%;
		height: 100vh;
		min-height: 600px;
		background-color: var(--Fill-0-default);
		overflow: hidden;
		font-family: var(--main-font);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		@media screen and (max-width: 767px) {
			height: auto;
			min-height: 100vh;
			overflow-x: hidden;
			overflow-y: auto;
			justify-content: flex-start;
			padding: 48px 24px 80px;
		}
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
	}

	/* ── Card container (clips the fly animation) ───── */
	.card-container {
		position: relative;
		z-index: 2;
		width: 333px;
		max-width: calc(100vw - 48px);
		/* fixed height = enough for 4 answers; clips transitioning cards */
		height: 520px;
		overflow: hidden;
	}

	/* ── Quiz card ───────────────────────────────────── */
	.quiz-card {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	/* ── Question box ────────────────────────────────── */
	.question-box {
		border: 1px solid #ffa33a;
		border-radius: 24px;
		min-height: 155px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;

		.question-text {
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;
			color: #fff;
			text-align: center;
		}
	}

	/* ── Progress ────────────────────────────────────── */
	.progress-section {
		display: flex;
		flex-direction: column;
		gap: 6px;

		.progress-label {
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			color: #fff;
		}

		.progress-bar {
			width: 100%;
			height: 2px;
			background-color: #403935;
			border-radius: 1000px;
			overflow: hidden;

			.progress-fill {
				height: 100%;
				background: linear-gradient(175deg, #ffa33a 0%, #ff8516 15%, #ff5500 100%);
				border-radius: 750px;
				transition: width 0.4s ease;
			}
		}
	}

	/* ── Answer options ──────────────────────────────── */
	.answers {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.answer-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 10px 10px 16px;
		background-color: #2e2724;
		border-radius: 14px;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 12px;
		font-family: inherit;
		transition: background-color 0.15s ease;
		min-height: 44px;

		&:hover {
			background-color: #3a302c;
		}

		&.selected {
			background-color: #3a302c;
		}

		.answer-text {
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: var(--Text-Primary);
			flex: 1;
		}

		.answer-icon {
			flex-shrink: 0;
			display: flex;
			align-items: center;
		}
	}

	/* ── Navigation ──────────────────────────────────── */
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.nav-back {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 40px;
			background-color: #38312e;
			border-radius: 12px;
			border: none;
			cursor: pointer;
			font-family: inherit;
			flex-shrink: 0;
			transition: background-color 0.15s ease;

			&:hover {
				background-color: #44382f;
			}
		}

		.nav-next {
			display: flex;
			align-items: center;
			gap: 6px;
			height: 40px;
			padding: 0 14px;
			border-radius: 12px;
			border: none;
			cursor: pointer;
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: #fafafa;
			font-family: inherit;
			background: linear-gradient(115deg, #ffa33a 0%, #ff8516 15%, #ff5500 100%);
			transition: opacity 0.2s ease;

			&:disabled {
				opacity: 0.35;
				cursor: not-allowed;
			}

			&:not(:disabled):hover {
				opacity: 0.9;
			}
		}
	}

	/* ── Disclaimer ──────────────────────────────────── */
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

		@media screen and (max-width: 767px) {
			position: relative;
			bottom: auto;
			left: auto;
			transform: none;
			font-size: 11px;
			white-space: normal;
			width: 100%;
			margin-top: 32px;
		}
	}

	/* ── Mobile ──────────────────────────────────────── */
	@media screen and (max-width: 767px) {
		.card-container {
			width: 100%;
			max-width: 480px;
			height: auto;
			overflow: visible;
		}

		.quiz-card {
			position: static;
		}
	}
</style>
