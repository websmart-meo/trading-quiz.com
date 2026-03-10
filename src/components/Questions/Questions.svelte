<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { idx, question, questionsAmouns, step } from '$lib/store';
	import type { Translations } from '$lib/i18n';

	export const answerId = writable<number | null>(null);
	export let questions: Translations['questions'] | null = null;
	export let tui: Translations['ui'] | null = null;

	$: questCount = questions ? questions.length : $questionsAmouns;
	$: currentQuestion = questions ? questions[$idx - 1] : $question;

	const setAnswer = (a: number | null) => {
		answerId.set(a);
	};
</script>

{#key $idx}
	<div class="question" in:fly={{ x: 100, duration: 300 }}>
		<p class="question-title">{currentQuestion.q}</p>
		<div class="question-content">
			{#each currentQuestion.a as a, i}
				<button
					class="question-answer"
					class:question-answer-checked={$answerId !== null && i === $answerId - 1}
					on:click={() => setAnswer(i + 1)}
				>
					{a}
				</button>
			{/each}
		</div>
	</div>
{/key}

<div class="questions-btn-wrap">
	<button
		disabled={!$answerId}
		class="button button-primary"
		on:click={(e) => {
			e.preventDefault();

			if ($idx === questCount) {
				step.set('loading');
			}
			idx.set($idx + 1);

			answerId.set(null);
		}}
	>
		{tui ? tui.nextBtn : 'Next'}
	</button>
</div>

<ul class="questions-progres">
	{#each new Array(questCount) as i, index}
		<li class:active={index === $idx - 1}></li>
	{/each}
</ul>

<button
	class="back"
	on:click={() => {
		step.set('main');
		setAnswer(null);
        idx.set(1);
	}}
>
	{tui ? tui.backToStart : 'Back to start'}
</button>
