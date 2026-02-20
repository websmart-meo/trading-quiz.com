<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Main from '../components/Main/Main.svelte';

	import '$lib/scss/styles.scss';

	export let data;
	const { subpage } = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- {@render children()} -->

<Main {subpage} />
