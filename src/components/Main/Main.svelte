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
	import en from '$lib/i18n/en';
	import type { Translations } from '$lib/i18n';
	export let subpage: SubpageType;
	export let t: Translations = en;

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
		<h1 class="h1">{t.ui.title[0]}<br />{t.ui.title[1]}</h1>
		<h2>{t.ui.utpItems.join(' · ')}</h2>
		<p class="quote">
			{t.ui.quoteText}<br />
			<span>{t.ui.quoteAuthor},<br />{t.ui.quoteRole}</span>
		</p>
		<div>
			<button
				class="button button-primary"
				on:click={(e) => {
					e.preventDefault();
					step.set('questions');
				}}
			>
				{t.ui.ctaBtn}
			</button>
		</div>
		<p class="rw">{t.ui.disclaimer}</p>
	</div>
{:else if $step === 'questions'}
	<div class="questions bgr" in:fade>
		<Questions questions={t.questions} tui={t.ui} />
	</div>
{:else if $step === 'loading'}
	<div class="main">
		<Loader />
	</div>
{:else}
	<div class="main bgr" in:fade>
		<Result tui={t.ui} />
	</div>
{/if}
