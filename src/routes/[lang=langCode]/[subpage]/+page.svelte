<script lang="ts">
	import { getContext } from 'svelte';
	import { Main } from '../../../components/Main';
	import '../../../lib/scss/styles-v1.scss';
	import { translations } from '$lib/i18n';
	import type { Lang } from '$lib/i18n';
	export let data;

	const { subpage } = data;
	const getLang = getContext<() => Lang>('lang');
	const lang = getLang();
	const t = translations[lang];
</script>

<div class="app app-{subpage}">
	<Main {subpage} {t} />
</div>
