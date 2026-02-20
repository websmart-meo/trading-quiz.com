<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { idx, question, questionsAmouns, step } from '$lib/store';

	export const answerId = writable<number | null>(null);

	const setAnswer = (a: number) => {
		answerId.set(a);
	};
</script>

{#key $idx}
	<div class="question" in:fly={{ x: 100, duration: 300 }}>
		<p class="question-title">{$question.q}</p>
		<div class="question-content">
			{#each $question.a as a, i}
				<button
					class="question-answer"
					class:question-answer-checked={i === $answerId - 1}
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

			if ($idx === $questionsAmouns) {
				step.set('loading');
			}
			idx.set($idx + 1);

			answerId.set(null);
		}}
	>
		Next
	</button>
</div>

<ul class="questions-progres">
	{#each new Array($questionsAmouns) as i, index}
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
	Back to start
</button>
