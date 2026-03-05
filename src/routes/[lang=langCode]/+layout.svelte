<script lang="ts">
	import { setContext } from 'svelte';
	import type { Lang } from '$lib/i18n';

	let { data, children } = $props();
	setContext('lang', () => data.lang as Lang);
</script>

{@render children()}
