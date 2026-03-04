<script lang="ts">
	import questions from '$lib/questions';
	import { quintOut, quintIn } from 'svelte/easing';
export let questionIndex: number;
	export let answers: (number | null)[];
	export let direction: number;
	export let onSelect: (i: number) => void;
	export let onNext: () => void;
	export let onPrev: () => void;

	function questionIn(node: Element, { dir = 1 }: { dir: number }) {
		const mobile = window.matchMedia('(max-width: 767px)').matches;
		return {
			delay: mobile ? 180 : 0,
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
					? `opacity: ${t}; position: absolute; top: 0; left: 0; right: 0;`
					: `transform: translateX(${u * -dir * 80}%); opacity: ${t};`
		};
	}

	$: question = questions[questionIndex];
	$: progress = (questionIndex + 1) / questions.length;
	$: selectedAnswer = answers[questionIndex];

	const checkPath =
		'M5.58333 9.33333L8.08333 11.8333L13.0833 6.83333M17.6667 9.33333C17.6667 13.9357 13.9357 17.6667 9.33333 17.6667C4.73096 17.6667 1 13.9357 1 9.33333C1 4.73096 4.73096 1 9.33333 1C13.9357 1 17.6667 4.73096 17.6667 9.33333Z';
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Enter' && selectedAnswer !== null) {
			e.preventDefault();
			onNext();
		}
	}}
/>

<section class="screen2">
	<!-- Question box (static frame, only text slides) -->
	<div class="question-box">
		{#key questionIndex}
			<p
				class="question-text"
				in:questionIn={{ dir: direction }}
				out:questionOut={{ dir: direction }}
			>
				{question.q}
			</p>
		{/key}
	</div>

	<!-- Progress (static) -->
	<div class="progress-section">
		<p class="progress-label">Question {questionIndex + 1} of {questions.length}</p>
		<div class="progress-bar">
			<div class="progress-fill" style="width: {progress * 100}%"></div>
		</div>
	</div>

	<!-- Answers (slide on question change) -->
	<div class="answers-container">
		{#key questionIndex}
			<div
				class="answers"
				in:questionIn={{ dir: direction }}
				out:questionOut={{ dir: direction }}
			>
				{#each question.a as answer, i}
					<button
						class="answer-item"
						class:selected={selectedAnswer === i}
						on:click={() => onSelect(i)}
					>
						<span class="answer-text">{answer}</span>
						<span class="answer-icon" aria-hidden="true">
							{#if selectedAnswer === i}
								<svg width="20" height="20" viewBox="0 0 18.6667 18.6667" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d={checkPath} stroke="#ff8516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							{:else}
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="10" cy="10" r="9" stroke="#c4c2c0" stroke-width="1.5" />
								</svg>
							{/if}
						</span>
					</button>
				{/each}
			</div>
		{/key}
	</div>

	<!-- Navigation (static) -->
	<div class="nav">
		<button class="nav-back" on:click={onPrev} aria-label="Previous question">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.8332 10H4.1665M4.1665 10L9.1665 15M4.1665 10L9.1665 5" stroke="#373737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
		<button class="nav-next" on:click={onNext} disabled={selectedAnswer === null}>
			<span>Next</span>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.1665 10H15.8332M15.8332 10L10.8332 5M15.8332 10L10.8332 15" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
	</div>

	<p class="disclaimer">The match is informational and not an investment recommendation</p>
</section>

<style lang="scss">
	.screen2 {
		position: relative;
		width: 100%;
		height: 100vh;
		min-height: 600px;
		overflow: hidden;
		font-family: var(--font-family-main, 'Suisse Intl', sans-serif);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url('/images/bgr/pic-blured.webp');
		background-size: cover;
		background-position: center;

		@media screen and (max-width: 767px) {
			height: auto;
			min-height: 100vh;
			overflow-x: hidden;
			overflow-y: auto;
			justify-content: flex-start;
			padding: 48px 24px 80px;
		}
	}

	/* ── Question box ────────────────────────────────── */
	.question-box {
		position: relative;
		z-index: 2;
		width: 333px;
		max-width: calc(100vw - 48px);
		height: 155px;
		border: 1px solid #ff8e37;
		border-radius: 24px;
		overflow: hidden;
		background-color: transparent;

		.question-text {
			position: absolute;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 24px;
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;
			color: #373737;
			text-align: center;
			margin: 0;
		}
	}

	/* ── Progress ────────────────────────────────────── */
	.progress-section {
		position: relative;
		z-index: 2;
		width: 333px;
		max-width: calc(100vw - 48px);
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		gap: 6px;

		.progress-label {
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			color: #707070;
		}

		.progress-bar {
			width: 100%;
			height: 2px;
			background-color: #e0dedd;
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

	/* ── Answers container ───────────────────────────── */
	.answers-container {
		position: relative;
		z-index: 2;
		width: 333px;
		max-width: calc(100vw - 48px);
		height: 220px;
		overflow: hidden;
	}

	.answers {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.answer-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 10px 10px 16px;
		background-color: #E6E5E2;
		border-radius: 14px;
		cursor: pointer;
		text-align: left;
		gap: 12px;
		font-family: inherit;
		transition: background-color 0.15s ease;
		min-height: 44px;

		&:hover {
			background-color: #e4e2e0;
		}

		&.selected {
			background-color: #e4e2e0;
		}

		.answer-text {
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: #373737;
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
		position: relative;
		z-index: 2;
		width: 333px;
		margin-top: 20px;
		max-width: calc(100vw - 48px);
		display: flex;
		align-items: center;
		justify-content: space-between;

		.nav-back {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 40px;
			background-color: #e8e8e6;
			border-radius: 12px;
			border: none;
			cursor: pointer;
			font-family: inherit;
			flex-shrink: 0;
			transition: background-color 0.15s ease;

			&:hover {
				background-color: #e0dedc;
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
		color: #8a8a8a;
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
		.question-box,
		.progress-section,
		.answers-container,
		.nav {
			width: 100%;
			max-width: 480px;
		}

		.question-text {
			position: relative;
		}
	}
</style>
