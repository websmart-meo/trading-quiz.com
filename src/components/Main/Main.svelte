<script lang="ts">
	import { resolve } from 'path';
	import type { SubpageType } from '$lib/types';
	import PictureResponsive from '../common/PictureResponsive.svelte';
	import Quotes from '../../../static/images/quotes.svg';
	export let subpage: SubpageType;
</script>

<PictureResponsive
	fallbackFormat="jpg"
	basePath={resolve('/images/bgr/v1-')}
	classes="main-picture"
/>

<div class="main">
	<h1>Investment Matchmaker</h1>
	<h2>1 minute. 5 questions. No registration and deposit required.</h2>
	<p class="quote">
		The best time to invest was yesterday.<br />The second best time is now.<br />The sooner you
		start investing, the better. <br />
		<span>Warren Buffett,<br />entrepreneur and investor</span>
	</p>
	<div><button class="button button-primary"> Start </button></div>
	<p class="rw">The match is informational and not an investment recommendation</p>
</div>
