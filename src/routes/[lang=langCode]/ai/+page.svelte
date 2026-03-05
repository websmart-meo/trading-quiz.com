<script lang="ts">
	import { getContext } from 'svelte';
	import Screen1 from '../../../components/ai/Screen1.svelte';
	import Screen2 from '../../../components/ai/Screen2.svelte';
	import Screen3 from '../../../components/ai/Screen3.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { translations } from '$lib/i18n';
	import type { Lang } from '$lib/i18n';

	const getLang = getContext<() => Lang>('lang');
	const lang = getLang();
	const t = translations[lang];

	function screenOut(node: Element, { duration = 250 }: { duration?: number } = {}) {
		return {
			duration,
			css: (t: number) =>
				`opacity: ${t}; position: absolute; top: 0; left: 0; right: 0; pointer-events: none;`
		};
	}

	const questions = t.questions;

	type AppScreen = 'hero' | 'quiz' | 'loading' | 'result';

	let screen: AppScreen = 'hero';
	let questionIndex = 0;
	let answers: (number | null)[] = Array(questions.length).fill(null);
	let direction = 1;

	function goToQuiz() {
		screen = 'quiz';
		questionIndex = 0;
		answers = Array(questions.length).fill(null);
		direction = 1;
	}

	function handleSelect(i: number) {
		answers = answers.map((a, idx) => (idx === questionIndex ? i : a));
	}

	function handleNext() {
		if (questionIndex < questions.length - 1) {
			direction = 1;
			questionIndex++;
		} else {
			screen = 'loading';
			setTimeout(() => {
				screen = 'result';
			}, 2000);
		}
	}

	function handlePrev() {
		if (questionIndex > 0) {
			direction = -1;
			questionIndex--;
		} else {
			screen = 'hero';
		}
	}

	function handleRestart() {
		screen = 'hero';
	}
</script>

<div class="ai-page">
	{#if screen === 'hero'}
		<div
			class="screen-wrap"
			in:fly={{ y: -20, duration: 400, opacity: 0, easing: cubicOut }}
			out:screenOut={{ duration: 250 }}
		>
			<Screen1 onStart={goToQuiz} />
		</div>
	{:else if screen === 'quiz'}
		<div
			class="screen-wrap"
			in:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }}
			out:screenOut={{ duration: 250 }}
		>
			<Screen2
				{questionIndex}
				{answers}
				{direction}
				onSelect={handleSelect}
				onNext={handleNext}
				onPrev={handlePrev}
			/>
		</div>
	{:else if screen === 'loading'}
		<div
			class="screen-wrap loader-screen"
			in:fly={{ y: 20, duration: 300, opacity: 0, easing: cubicOut }}
			out:screenOut={{ duration: 300 }}
		>
			<div class="loader-content">
				<div class="loader-ring"></div>
				<p class="loader-text">{t.ui.loaderText}</p>
			</div>
		</div>
	{:else}
		<div
			class="screen-wrap"
			in:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }}
			out:screenOut={{ duration: 250 }}
		>
			<Screen3 onRestart={handleRestart} />
		</div>
	{/if}
</div>

<style>
	.ai-page {
		position: relative;
		width: 100%;
		min-height: 100vh;
		overflow: clip;
	}

	.screen-wrap {
		width: 100%;
	}

	.loader-screen {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #1b1817;
	}

	.loader-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}

	.loader-ring {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		border: 3px solid #2e2724;
		border-top-color: #ff8516;
		animation: spin 0.9s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.loader-text {
		font-family: Inter, sans-serif;
		font-size: 16px;
		font-weight: 500;
		color: #afadac;
	}
</style>
