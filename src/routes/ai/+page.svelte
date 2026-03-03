<script lang="ts">
	import Screen1 from '../../components/ai/Screen1.svelte';
	import Screen2 from '../../components/ai/Screen2.svelte';
	import Screen3 from '../../components/ai/Screen3.svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import questions from '$lib/questions';

	type AppScreen = 'hero' | 'quiz' | 'result';

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
			screen = 'result';
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
			out:fade={{ duration: 250 }}
		>
			<Screen1 onStart={goToQuiz} />
		</div>
	{:else if screen === 'quiz'}
		<div
			class="screen-wrap"
			in:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }}
			out:fade={{ duration: 250 }}
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
	{:else}
		<div
			class="screen-wrap"
			in:fly={{ y: 20, duration: 400, opacity: 0, easing: cubicOut }}
			out:fade={{ duration: 250 }}
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
		overflow: hidden;
	}

	.screen-wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>
