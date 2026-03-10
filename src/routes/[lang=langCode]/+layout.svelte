<script lang="ts">
	import { setContext } from 'svelte';
	import { translations } from '$lib/i18n';
	import type { Lang } from '$lib/i18n';

	let { data, children } = $props();
	setContext('lang', () => data.lang as Lang);

	const t = $derived(translations[data.lang as Lang].ui);
	const metaTitle = $derived(t.title.join(' '));
	const metaDesc = $derived(t.utpItems.join('. '));
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDesc} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDesc} />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDesc} />
</svelte:head>

{@render children()}
