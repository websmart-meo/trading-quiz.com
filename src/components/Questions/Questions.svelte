<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { idx, question } from '$lib/store';

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
					class:question-answer-checked={i === $answerId}
					on:click={() => setAnswer(i)}
				>
					{a}
				</button>
			{/each}
		</div>
	</div>
{/key}

<div class="questions-btn-wrap">
	<button
		class="button button-primary"
		on:click={(e) => {
			e.preventDefault();
			idx.set($idx + 1);
			answerId.set(null);
		}}
	>
		Next
	</button>
</div>
