<script lang="ts">
	import { Main } from '../../components/light/Main';
    import '../../lib/scss/styles-light.scss';
	export let data;

	const { subpage } = data;
</script>

<div class="app app-{subpage}">
	<Main />
</div>
