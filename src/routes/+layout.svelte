<script lang="ts">
	import { browser } from '$app/environment';
	import { gtm, gtmIdIQOption } from '$lib/gtm';
	const gtmScriptString = gtm(gtmIdIQOption);

	import '$lib/scss/styles.scss';

	const title = 'Investment Matchmaker';
	const desc = '1 minute. 5 questions. No registration and deposit required.';

	let location = '';
	if (browser) location = window.location.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<!-- <meta property="og:image" content={meta_img} /> -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<!-- <meta name="twitter:image" content={meta_img} /> -->
	<meta property="og:url" content={location} />
	{@html `<script>${gtmScriptString}<\/script>`}
</svelte:head>

<slot />
