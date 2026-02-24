<script lang="ts">
	import { onDestroy } from 'svelte';
	// import { resolve } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { step } from '$lib/store';
	import type { SubpageType } from '$lib/types';
	// import PictureResponsive from '../common/PictureResponsive.svelte';
	import Loader from '../common/Loader.svelte';
	import { Questions } from '../Questions';
	import { Result } from '../Result';
	export let subpage: SubpageType;

	let timer: ReturnType<typeof setTimeout> | null = null;

	$: if ($step === 'loading' && !timer) {
		timer = setTimeout(() => {
			step.set('result');
			timer = null;
		}, 1000);
	}

	onDestroy(() => {
		if (timer) clearTimeout(timer);
	});
</script>

<!-- <PictureResponsive
	fallbackFormat="jpg"
	basePath={resolve(`/images/bgr/${subpage}-`)}
	classes="main-picture"
/> -->

{#if $step === 'main'}
	<div class="main content bgr">
		<h1 class="h1">Investment<br />Matchmaker</h1>
		<h2>1 minute. 5 questions. No registration and deposit required.</h2>
		<p class="quote">
			The best time to invest was yesterday.<br />The second best time is now.<br />The sooner you
			start investing, the better. <br />
			<span>Warren Buffett,<br />entrepreneur and investor</span>
		</p>
		<div>
			<button
				class="button button-primary"
				on:click={(e) => {
					e.preventDefault();
					step.set('questions');
				}}
			>
				Start
			</button>
		</div>
		<p class="rw">The match is informational and not an investment recommendation</p>
	</div>
{:else if $step === 'questions'}
	<div class="questions bgr" in:fade>
		<Questions />
	</div>
{:else if $step === 'loading'}
	<div class="main">
		<Loader />
	</div>
{:else}
	<div class="main bgr" in:fade>
		<Result />
	</div>
{/if}
